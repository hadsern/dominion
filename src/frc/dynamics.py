import numpy as np
from src.frc.vector import Vector16D

class FRCDynamics:
    """
    Implements the temporal evolution laws for the 16D FRC system.
    References:
        - 16D.007: Temporal Dynamics Equation
        - 16D.009: Numerical Simulation Architecture
        - 16D.010: Drift Correction
    """

    def __init__(self,
                 kappa: np.ndarray,
                 ru: float,
                 dt: float = 0.01,
                 alpha: float = 0.1,  # Drift correction strength
                 beta: float = 0.5,   # RU gravity strength
                 gamma: float = 0.2,  # Witness stabilization strength
                 eta: float = 0.05):  # Kappa viscosity

        self.kappa = kappa  # Coupling coefficients (8D vector)
        self.ru = ru        # Resonance Units (scalar)
        self.dt = dt

        # Coefficients
        self.alpha = alpha
        self.beta = beta
        self.gamma = gamma
        self.eta = eta

        # Drift Correction Reservoir (16D.010)
        self.error_reservoir = np.zeros(16)
        self.rho = 0.2 # Error persistence

    def compute_derivative(self, vector: Vector16D) -> np.ndarray:
        """
        Computes dU/dt = F(U, kappa, RU, W)
        From 16D.007 Section 8.
        """
        U = vector.state
        U_in = U[:8]
        U_out = U[8:]
        W = vector.witness_magnitude
        C_joint = vector.coherence_joint

        # 1. Kappa-Coupling Term (Inner-Outer Binding)
        # F_kappa_i = k_i * (U_{i+8} - U_i)
        # F_kappa_{i+8} = k_i * (U_i - U_{i+8})
        F_kappa = np.zeros(16)

        diff = U_out - U_in
        F_kappa[:8] = self.kappa * diff
        F_kappa[8:] = self.kappa * (-diff)

        # 2. Coherence Alignment Term (Drift Reduction)
        # Pulls dimensions toward the octave mean
        # UPDATED LOGIC: If Kappa < 0 (Trauma), drift correction breaks.
        # The system cannot "average out" a dimension that is actively fighting.

        C_in_mean = np.mean(U_in)
        C_out_mean = np.mean(U_out)

        F_align = np.zeros(16)

        # Inner Octave Alignment (weighted by Kappa health)
        # If kappa_i < 0, the alignment force is reduced or zeroed.
        kappa_weights = np.maximum(0, self.kappa) # Only positive kappa allows drift correction

        F_align[:8] = self.alpha * kappa_weights * (C_in_mean - U_in)
        F_align[8:] = self.alpha * kappa_weights * (C_out_mean - U_out)

        # 3. RU Gravity Term (Magnitude Scaling)
        # Simplification: RU amplifies movement along the gradient of coherence
        # For this version, we model it as an accelerator for the kappa alignment
        F_ru = self.beta * self.ru * F_kappa

        # 4. Witness Stabilization Term (Orthogonal Projection)
        # F_W = -gamma * W * (U - U_norm) -> Pulls towards unit hypersphere scaled by W?
        # Re-reading 16D.007: "Witness acts as a normalizing force... reduces noise"
        # We will interpret this as a damping force proportional to W deviation from "ideal" coherence
        if W > 0:
            U_dir = U / W
        else:
            U_dir = np.zeros(16)

        F_witness = -self.gamma * W * (U - U_dir)

        # Total Derivative
        dU_dt = F_kappa + F_align + F_ru + F_witness

        return dU_dt

    def step(self, vector: Vector16D) -> Vector16D:
        """
        Performs one integration step using RK4.
        Also updates Kappa (viscous evolution).
        """
        U_current = vector.state.copy()

        # --- RK4 Integration ---
        k1 = self.compute_derivative(Vector16D(U_current))
        k2 = self.compute_derivative(Vector16D(U_current + 0.5 * self.dt * k1))
        k3 = self.compute_derivative(Vector16D(U_current + 0.5 * self.dt * k2))
        k4 = self.compute_derivative(Vector16D(U_current + self.dt * k3))

        dU = (self.dt / 6.0) * (k1 + 2*k2 + 2*k3 + k4)

        U_next_raw = U_current + dU

        # --- Witness Normalization & Error Diffusion (16D.010) ---
        # Normalize to maintain bounded structure?
        # 16D specs say "U is normalized via Witness: U <- U / |U|".
        # But U components must be [0,1].
        # If we just normalize direction, we lose magnitude info which IS W.
        # Let's interpret 16D.009 Section 7: "W is updated each step... U <- U / |U|"
        # Wait, if W = |U|, then U/|U| has norm 1.
        # The text implies U is projected onto a manifold.
        # For now, we will apply simple clipping to [0,1] as the "hard" boundary
        # and use the error reservoir to track "lost" drift.

        U_next_clipped = np.clip(U_next_raw, 0.0, 1.0)

        epsilon = U_next_clipped - U_next_raw # The "correction" applied

        # Update Error Reservoir
        self.error_reservoir = self.rho * self.error_reservoir + (1 - self.rho) * epsilon

        # Apply Error Correction (Feedback)
        lambda_E = 0.05 # Correction rate
        U_next_corrected = U_next_clipped - lambda_E * self.error_reservoir
        U_next_final = np.clip(U_next_corrected, 0.0, 1.0)

        # --- Kappa Evolution (16D.009 Section 5) ---
        # kappa(t+1) = kappa(t) + eta * (U_i * U_{i+8} - kappa(t))
        # Inner and outer alignment increases kappa.
        # This models how behavior reinforces connection.

        term = U_next_final[:8] * U_next_final[8:]
        self.kappa = self.kappa + self.eta * (term - self.kappa)
        self.kappa = np.clip(self.kappa, -1.0, 1.0) # Bound Kappa

        return Vector16D(U_next_final)
