import numpy as np
from dataclasses import dataclass
from typing import Dict, List, Optional

@dataclass
class Vector16D:
    """
    Represents the 16-dimensional Universal Vector (UV).

    Inner Octave (Human Vessel):
    0: P - Phase (Identity)
    1: E - Existence (World-Model)
    2: mu - Cognition (Masks)
    3: V - Energy (Vital Currents)
    4: N - Narrative (Story)
    5: Delta - Trajectory (Motion)
    6: R - Relationality (Bonds)
    7: Phi - Field-Awareness

    Outer Octave (Transpersonal Field):
    8: Pt - Cosmic Phase
    9: Et - Collective Existence
    10: mut - Collective Cognition
    11: Vt - Collective Energy
    12: Nt - Mythic Narrative
    13: Deltat - Historical Trajectory
    14: Rt - Civilizational Relationships
    15: Phit - Planetary Field Awareness
    """

    # Raw 16D state vector
    state: np.ndarray

    def __init__(self, state: Optional[np.ndarray] = None):
        if state is not None:
            if state.shape != (16,):
                raise ValueError("State vector must be 16-dimensional")
            self.state = np.clip(state, 0.0, 1.0) # Ensure bounded [0,1]
        else:
            # Default initialization (mid-range stability)
            self.state = np.ones(16) * 0.5

    @property
    def inner(self) -> np.ndarray:
        return self.state[:8]

    @property
    def outer(self) -> np.ndarray:
        return self.state[8:]

    @property
    def witness_magnitude(self) -> float:
        """
        Calculates the Witness (W) magnitude: W = |U_16|
        This is the emergent invariant of the system.
        """
        return np.linalg.norm(self.state)

    @property
    def coherence_inner(self) -> float:
        """C_inner = mean(U_inner^2)"""
        return np.mean(self.inner ** 2)

    @property
    def coherence_outer(self) -> float:
        """C_outer = mean(U_outer^2)"""
        return np.mean(self.outer ** 2)

    @property
    def coherence_joint(self) -> float:
        """C_joint = (C_inner + C_outer) / 2"""
        return (self.coherence_inner + self.coherence_outer) / 2.0

    def to_dict(self) -> Dict[str, float]:
        labels = [
            "P", "E", "mu", "V", "N", "Delta", "R", "Phi",
            "Pt", "Et", "mut", "Vt", "Nt", "Deltat", "Rt", "Phit"
        ]
        return {label: val for label, val in zip(labels, self.state)}

    def __repr__(self):
        return f"Vector16D(W={self.witness_magnitude:.3f}, C_joint={self.coherence_joint:.3f})"
