"""
Unit tests for Mushikui Engine solvers.
"""

import unittest
from mushikui_engine.solvers.division import DivisionSolver
from mushikui_engine.solvers.multiplication import MultiplicationSolver
from mushikui_engine.solvers.addition import AdditionSolver
from mushikui_engine.solvers.subtraction import SubtractionSolver

class TestSolvers(unittest.TestCase):

    def test_multiplication_lonely8(self):
        """Test Lonely 8 multiplication: 112 * 89 = 9968 with only 8 given."""
        is_u, sol = MultiplicationSolver.verify_uniqueness(
            A_len=3, B_len=2,
            product_lens=[4, 3],
            tot_len=4,
            clues={'B': {0: 8}}
        )
        self.assertTrue(is_u)
        self.assertEqual(sol['A'], 112)
        self.assertEqual(sol['B'], 89)
        self.assertEqual(sol['tot'], 9968)

    def test_addition_lonely1(self):
        """Test Lonely 1 addition: 999 + 1 = 1000 with only 1 given."""
        is_u, sol = AdditionSolver.verify_uniqueness(
            operand_lens=[3, 1],
            sum_len=4,
            clues={'op_1': {0: 1}}
        )
        self.assertTrue(is_u)
        self.assertEqual(sol['operands'], [999, 1])
        self.assertEqual(sol['sum'], 1000)

    def test_subtraction_lonely1(self):
        """Test Lonely 1 subtraction: 1000 - 999 = 1 with only difference 1 given."""
        is_u, sol = SubtractionSolver.verify_uniqueness(
            A_len=4, B_len=3, diff_len=1,
            clues={'diff': {0: 1}}
        )
        self.assertTrue(is_u)
        self.assertEqual(sol['A'], 1000)
        self.assertEqual(sol['B'], 999)
        self.assertEqual(sol['diff'], 1)

    def test_subtraction_lonely8(self):
        """Test Lonely 8 subtraction: 1008 - 999 = 9 with only A[3]=8 given."""
        is_u, sol = SubtractionSolver.verify_uniqueness(
            A_len=4, B_len=3, diff_len=1,
            clues={'A': {3: 8}}
        )
        self.assertTrue(is_u)
        self.assertEqual(sol['A'], 1008)
        self.assertEqual(sol['B'], 999)
        self.assertEqual(sol['diff'], 9)

if __name__ == '__main__':
    unittest.main()
