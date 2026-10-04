"""
Dedicated test suite for E. F. Odling's original "孤独の7" (The Lonely 7).
"""

import unittest
from mushikui_engine.generators.division_gen import DivisionGenerator
from mushikui_engine.solvers.verifier import UniquenessVerifier
from mushikui_engine.models import Difficulty

class TestLonely7(unittest.TestCase):

    def setUp(self):
        self.puzzle = DivisionGenerator.create_puzzle(
            puzzle_id="DIV-001",
            title="E・F・オドリングの不朽の名作『孤独の7』",
            difficulty=Difficulty.LEVEL_5,
            d=124, q=97809, D=12128316,
            clues={'q': {1: 7}},
            summary="商の千位に「7」だけが与えられた伝説の虫食い算。"
        )

    def test_original_lonely7_uniqueness(self):
        """Verifies that Odling's Lonely 7 has exactly 1 solution."""
        is_u, sol = UniquenessVerifier.verify(self.puzzle)
        self.assertTrue(is_u, "Odling's Lonely 7 must have a unique solution!")
        self.assertEqual(sol['d'], 124)
        self.assertEqual(sol['q'], 97809)
        self.assertEqual(sol['D'], 12128316)
        self.assertEqual(sol['q_digits'], [9, 7, 8, 0, 9])
        self.assertEqual(sol['D_digits'], [1, 2, 1, 2, 8, 3, 1, 6])

    def test_row_formatting(self):
        """Verifies that problem rows display only '7' and other digits are '□'."""
        prob_text = "\n".join(r.content for r in self.puzzle.problem_rows)
        # Count non-box digits in problem text
        digits = [c for c in prob_text if c in '123456789']
        # Only '7' should appear! (plus 0 for remainder at bottom)
        self.assertEqual(digits, ['7'], "Problem text must contain only the digit '7'!")

if __name__ == '__main__':
    unittest.main()
