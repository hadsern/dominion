import numpy as np
from src.frc.vector import Vector16D
from src.frc.dynamics import FRCDynamics

def run_simulation():
    print("Initializing FRC 16D Trauma Loop Simulation...")

    # --- 1. Initialize State ---
    # Start with a Split State (Inner disagrees with Outer)
    # This is the "Trigger" for the trauma loop
    initial_state = np.array([
        0.8, 0.7, 0.6, 0.8, 0.9, 0.5, 0.6, 0.7,  # Inner: High Narrative (0.9) - "I am X"
        0.8, 0.7, 0.6, 0.8, 0.2, 0.5, 0.6, 0.7   # Outer: Low Narrative (0.2) - "World says you are Y"
    ])
    vector = Vector16D(initial_state)

    # --- 2. Initialize Dynamics with Trauma Signature ---
    # Trauma Definition (16D.012):
    # Kappa < 0 on specific axes creates "Antagonistic Push-Pull"
    # Let's invert Kappa for Axis 4 (Narrative - N)
    kappa = np.ones(8) * 0.5  # Default healthy coupling
    kappa[4] = -0.8  # Narrative Trauma (Story conflict)

    # High RU (High Energy + Trauma = Dissociation)
    ru = 40.0

    dynamics = FRCDynamics(kappa=kappa, ru=ru, dt=0.01) # Smaller timestep for high energy

    # --- 3. Simulation Loop ---
    steps = 500
    history_W = []
    history_C_joint = []
    history_N_inner = []
    history_N_outer = []

    print(f"Starting simulation for {steps} steps...")
    print(f"Initial Kappa: {kappa}")

    for i in range(steps):
        vector = dynamics.step(vector)

        # Log metrics
        history_W.append(vector.witness_magnitude)
        history_C_joint.append(vector.coherence_joint)
        history_N_inner.append(vector.state[4])      # N (Inner Narrative)
        history_N_outer.append(vector.state[4 + 8])  # Nt (Outer Narrative)

        if i % 100 == 0:
            print(f"Step {i}: W={vector.witness_magnitude:.3f}, C_joint={vector.coherence_joint:.3f}")
            print(f"   N_in={vector.state[4]:.3f}, N_out={vector.state[12]:.3f} (Divergence check)")

    # --- 4. Results Analysis ---
    print("\n--- Simulation Complete ---")
    print(f"Final W: {vector.witness_magnitude:.3f}")
    print(f"Final C_joint: {vector.coherence_joint:.3f}")

    # Check for "Dissociation Funnel" (16D.011 Class 4)
    # Signs: Inner & Outer diverge violently on trauma axes
    n_divergence = abs(vector.state[4] - vector.state[12])
    print(f"Final Narrative Divergence: {n_divergence:.3f}")

    if n_divergence > 0.5:
        print("RESULT: Trauma Loop Confirmed. System entered Dissociation Funnel.")
        print("Interpretation: The Inner Narrative (Self) and Outer Narrative (World) have been forced apart by negative coupling.")
    else:
        print("RESULT: System stabilized (or trauma was insufficient).")

if __name__ == "__main__":
    run_simulation()
