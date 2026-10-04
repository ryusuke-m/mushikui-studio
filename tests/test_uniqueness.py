"""
Comprehensive uniqueness verification test for all catalog puzzles.
"""

import unittest
from mushikui_engine.catalog import get_curated_puzzles
from mushikui_engine.solvers.verifier import UniquenessVerifier

class TestCatalogUniqueness(unittest.TestCase):

    def test_all_catalog_puzzles_are_unique(self):
        puzzles = get_curated_puzzles()
        self.assertGreaterEqual(len(puzzles), 30, "Catalog should have at least 30 curated puzzles")

        failed_puzzles = []
        for p in puzzles:
            is_u, sol = UniquenessVerifier.verify(p)
            if not is_u:
                failed_puzzles.append(p.id)

        self.assertEqual(
            len(failed_puzzles), 0,
            f"The following puzzles failed uniqueness verification: {failed_puzzles}"
        )

    def test_base_n_puzzles_exist(self):
        puzzles = get_curated_puzzles()
        radices = {p.radix for p in puzzles}
        self.assertIn(2, radices, "Base 2 puzzles should exist in catalog")
        self.assertIn(8, radices, "Base 8 puzzles should exist in catalog")
        self.assertIn(12, radices, "Base 12 puzzles should exist in catalog")
        self.assertIn(16, radices, "Base 16 puzzles should exist in catalog")

        base_n = [p for p in puzzles if p.radix != 10]
        self.assertGreaterEqual(len(base_n), 10, "Should have at least 10 Base-N puzzles")

    def test_zero_clue_puzzles_unique(self):
        """Tests that 0-clue puzzles (shape-only constraints) are unique."""
        puzzles = [p for p in get_curated_puzzles() if p.hint_count == 0]
        self.assertGreaterEqual(len(puzzles), 4, "Should have at least 4 zero-clue puzzles")
        for p in puzzles:
            is_u, sol = UniquenessVerifier.verify(p)
            self.assertTrue(is_u, f"Zero-clue puzzle {p.id} must be unique")

    def test_base_conversions(self):
        from mushikui_engine.models import int_to_base_str, base_str_to_int, val_to_base_char
        self.assertEqual(int_to_base_str(255, 16), "FF")
        self.assertEqual(int_to_base_str(63, 8), "77")
        self.assertEqual(int_to_base_str(7, 2), "111")
        self.assertEqual(int_to_base_str(143, 12), "BB")
        self.assertEqual(base_str_to_int("10EF", 16), 4335)
        self.assertEqual(val_to_base_char(15, 16), "F")

if __name__ == '__main__':
    unittest.main()
