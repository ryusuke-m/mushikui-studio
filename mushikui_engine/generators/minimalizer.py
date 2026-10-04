"""
Minimalizer: Prunes clues to find irreducible minimal clue sets (極小初期盤面).
"""

from typing import Dict, Any, Tuple
import copy
from ..solvers.verifier import UniquenessVerifier
from ..models import Puzzle

class Minimalizer:
    """Algorithm to prune clues while maintaining mathematical uniqueness."""

    @classmethod
    def reduce_clues_greedy(cls, puzzle: Puzzle) -> Puzzle:
        """
        Greedily attempts to remove each clue in puzzle.metadata['clues'].
        If uniqueness is preserved, clue is permanently removed.
        Returns a new puzzle with minimal clues.
        """
        current_puzzle = copy.deepcopy(puzzle)
        meta = current_puzzle.metadata
        clues = meta.get("clues", {})

        # List all clue keys
        all_clue_positions = []
        for group, items in clues.items():
            for pos in list(items.keys()):
                all_clue_positions.append((group, pos))

        for group, pos in all_clue_positions:
            val = clues[group].pop(pos)
            if not clues[group]:
                del clues[group]

            # Test uniqueness without this clue
            is_unique, _ = UniquenessVerifier.verify(current_puzzle)
            if is_unique:
                # Successfully removed!
                pass
            else:
                # Must put it back!
                if group not in clues:
                    clues[group] = {}
                clues[group][pos] = val

        # Rebuild puzzle with reduced clues
        current_puzzle.hint_count = sum(len(sub) for sub in clues.values())
        return current_puzzle
