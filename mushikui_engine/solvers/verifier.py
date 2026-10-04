"""
Unified Uniqueness Verifier for Mushikuizan Puzzles.
"""

from typing import Tuple, Dict, Any, Optional
from ..models import Puzzle, Operation
from .division import DivisionSolver
from .multiplication import MultiplicationSolver
from .addition import AdditionSolver
from .subtraction import SubtractionSolver

class UniquenessVerifier:
    """Verifies that a given puzzle has exactly one mathematical solution."""

    @classmethod
    def verify(cls, puzzle: Puzzle) -> Tuple[bool, Optional[Dict[str, Any]]]:
        op = puzzle.operation
        meta = puzzle.metadata

        if op == Operation.DIVISION:
            return DivisionSolver.verify_uniqueness(
                d_len=meta["d_len"],
                q_len=meta["q_len"],
                D_len=meta["D_len"],
                steps_info=meta["steps_info"],
                clues=meta.get("clues", {})
            )
        elif op == Operation.MULTIPLICATION:
            return MultiplicationSolver.verify_uniqueness(
                A_len=meta["A_len"],
                B_len=meta["B_len"],
                product_lens=meta["product_lens"],
                tot_len=meta["tot_len"],
                clues=meta.get("clues", {})
            )
        elif op == Operation.ADDITION:
            return AdditionSolver.verify_uniqueness(
                operand_lens=meta["operand_lens"],
                sum_len=meta["sum_len"],
                clues=meta.get("clues", {}),
                enforce_order=meta.get("enforce_order", False)
            )
        elif op == Operation.SUBTRACTION:
            return SubtractionSolver.verify_uniqueness(
                A_len=meta["A_len"],
                B_len=meta["B_len"],
                diff_len=meta["diff_len"],
                clues=meta.get("clues", {})
            )
        else:
            raise ValueError(f"Unsupported operation: {op}")
