"""
Comprehensive uniqueness verification test for all catalog puzzles.
"""

import unittest
from mushikui_engine.catalog import get_curated_puzzles
from mushikui_engine.solvers.verifier import UniquenessVerifier

class TestCatalogUniqueness(unittest.TestCase):

    def test_all_catalog_puzzles_are_unique(self):
        puzzles = get_curated_puzzles()
        self.assertGreaterEqual(len(puzzles), 20, "Catalog should have at least 20 curated puzzles")

        failed_puzzles = []
        for p in puzzles:
            is_u, sol = UniquenessVerifier.verify(p)
            if not is_u:
                failed_puzzles.append(p.id)

        self.assertEqual(
            len(failed_puzzles), 0,
            f"The following puzzles failed uniqueness verification: {failed_puzzles}"
        )

if __name__ == '__main__':
    unittest.main()
