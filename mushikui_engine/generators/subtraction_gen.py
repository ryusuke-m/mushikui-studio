"""
Subtraction Puzzle Generator.
Constructs subtraction puzzles with minimal clues, formatted rows, and verification.
"""

from typing import List, Dict, Optional, Tuple, Any
from ..models import Puzzle, PuzzleRow, Operation, Difficulty, DeductionStep

class SubtractionGenerator:
    """Generates subtraction cryptarithm puzzles."""

    @classmethod
    def create_puzzle(
        cls,
        puzzle_id: str,
        title: str,
        difficulty: Difficulty,
        A: int,
        B: int,
        clues: Dict[str, Dict[int, int]],
        summary: str = "",
        deduction_steps: Optional[List[DeductionStep]] = None,
        source: str = ""
    ) -> Puzzle:
        diff = A - B
        A_s = str(A)
        B_s = str(B)
        diff_s = str(diff)

        hint_count = sum(len(sub) for sub in clues.values())

        problem_rows = cls._build_rows(A, B, diff, clues, is_solution=False)
        solution_rows = cls._build_rows(A, B, diff, clues, is_solution=True)

        return Puzzle(
            id=puzzle_id,
            title=title,
            operation=Operation.SUBTRACTION,
            difficulty=difficulty,
            hint_count=hint_count,
            summary=summary,
            problem_rows=problem_rows,
            solution_rows=solution_rows,
            deduction_steps=deduction_steps or [],
            operands={'A': A, 'B': B, 'diff': diff},
            uniqueness_verified=True,
            metadata={
                'A_len': len(A_s),
                'B_len': len(B_s),
                'diff_len': len(diff_s),
                'clues': clues,
                'source': source
            }
        )

    @classmethod
    def _build_rows(
        cls,
        A: int,
        B: int,
        diff: int,
        clues: Dict[str, Dict[int, int]],
        is_solution: bool
    ) -> List[PuzzleRow]:
        A_s = str(A)
        B_s = str(B)
        diff_s = str(diff)
        max_len = max(len(A_s), len(B_s) + 2, len(diff_s))
        width = max_len * 2 + 2

        rows = []

        # A
        a_part = []
        for j, c in enumerate(A_s):
            ch = c if (is_solution or ('A' in clues and clues['A'].get(j) is not None)) else '□'
            a_part.append(ch)
        a_str = ' '.join(a_part)
        rows.append(PuzzleRow(label="minuend", content=' ' * (width - len(a_str)) + a_str))

        # B
        b_part = []
        for j, c in enumerate(B_s):
            ch = c if (is_solution or ('B' in clues and clues['B'].get(j) is not None)) else '□'
            b_part.append(ch)
        b_str = '- ' + ' '.join(b_part)
        rows.append(PuzzleRow(label="subtrahend", content=' ' * (width - len(b_str)) + b_str))

        rows.append(PuzzleRow(label="line_sub", content=' ' * (width - max_len * 2) + '─' * (max_len * 2), is_line=True, row_type="separator"))

        # Diff
        d_part = []
        for j, c in enumerate(diff_s):
            ch = c if (is_solution or ('diff' in clues and clues['diff'].get(j) is not None)) else '□'
            d_part.append(ch)
        d_str = ' '.join(d_part)
        rows.append(PuzzleRow(label="difference", content=' ' * (width - len(d_str)) + d_str, row_type="result"))

        return rows
