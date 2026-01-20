import unittest
import numpy as np
from src.frc.vector import Vector16D
from src.frc.dynamics import FRCDynamics

class TestFRCEngine(unittest.TestCase):
    def test_vector_initialization(self):
        v = Vector16D()
        self.assertEqual(v.state.shape, (16,))
        self.assertTrue(np.all(v.state >= 0.0))
        self.assertTrue(np.all(v.state <= 1.0))

    def test_vector_metrics(self):
        # Create a perfectly coherent vector (all 1.0)
        v = Vector16D(np.ones(16))
        self.assertEqual(v.witness_magnitude, np.sqrt(16))
        self.assertEqual(v.coherence_inner, 1.0)
        self.assertEqual(v.coherence_outer, 1.0)
        self.assertEqual(v.coherence_joint, 1.0)

    def test_dynamics_step(self):
        v = Vector16D()
        kappa = np.zeros(8) # Decoupled
        dyn = FRCDynamics(kappa=kappa, ru=10.0, dt=0.01)

        v_next = dyn.step(v)
        self.assertIsInstance(v_next, Vector16D)
        self.assertNotEqual(id(v), id(v_next)) # Should return new object

    def test_kappa_alignment(self):
        # Test that positive kappa pulls values together
        # Inner=0, Outer=1, Kappa=1 -> Force should be + on Inner
        state = np.zeros(16)
        state[8:] = 1.0
        v = Vector16D(state)

        kappa = np.ones(8)
        dyn = FRCDynamics(kappa=kappa, ru=10.0, dt=0.1, alpha=0.0, gamma=0.0) # Isolate Kappa force

        # dU = F_kappa * dt
        # F_kappa_inner = k * (Out - In) = 1 * (1 - 0) = 1

        dU = dyn.compute_derivative(v)
        self.assertTrue(np.all(dU[:8] > 0)) # Inner should increase
        self.assertTrue(np.all(dU[8:] < 0)) # Outer should decrease

if __name__ == '__main__':
    unittest.main()
