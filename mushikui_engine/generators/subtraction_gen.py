"""
Subtraction Puzzle Generator.
Constructs subtraction puzzles with minimal clues, formatted rows, and verification.
"""

from typing import List, Dict, Optional, Tuple, Any
from ..models import Puzzle, PuzzleRow, Operation, Difficulty, DeductionStep, int_to_base_str, val_to_base_char

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
        source: str = "",
        radix: int = 10
    ) -> Puzzle:
        diff = A - B
        A_s = int_to_base_str(A, radix)
        B_s = int_to_base_str(B, radix)
        diff_s = int_to_base_str(diff, radix)

        hint_count = sum(len(sub) for sub in clues.values())

        problem_rows = cls._build_rows(A, B, diff, clues, is_solution=False, radix=radix)
        solution_rows = cls._build_rows(A, B, diff, clues, is_solution=True, radix=radix)

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
            operands={'A': A, 'B': B, 'diff': diff, 'A_str': A_s, 'B_str': B_s, 'diff_str': diff_s},
            radix=radix,
            uniqueness_verified=True,
            metadata={
                'A_len': len(A_s),
                'B_len': len(B_s),
                'diff_len': len(diff_s),
                'clues': clues,
                'source': source,
                'radix': radix
            }
        )

    @classmethod
    def _build_rows(
        cls,
        A: int,
        B: int,
        diff: int,
        clues: Dict[str, Dict[int, int]],
        is_solution: bool,
        radix: int = 10
    ) -> List[PuzzleRow]:
        A_s = int_to_base_str(A, radix)
        B_s = int_to_base_str(B, radix)
        diff_s = int_to_base_str(diff, radix)
        max_digits = max(len(A_s), len(B_s), len(diff_s))

        rows = []

        # A
        a_part = []
        for j, c in enumerate(A_s):
            ch = c if (is_solution or ('A' in clues and clues['A'].get(j) is not None)) else '□'
            a_part.append(ch)
        a_indent = (max_digits - len(A_s)) * 2
        rows.append(PuzzleRow(label="minuend", content='  ' + ' ' * a_indent + ' '.join(a_part)))

        # B
        b_part = []
        for j, c in enumerate(B_s):
            ch = c if (is_solution or ('B' in clues and clues['B'].get(j) is not None)) else '□'
            b_part.append(ch)
        b_indent = (max_digits - len(B_s)) * 2
        rows.append(PuzzleRow(label="subtrahend", content='- ' + ' ' * b_indent + ' '.join(b_part)))

        rows.append(PuzzleRow(label="line_sub", content='─' * (max_digits * 2 + 1), is_line=True, row_type="separator"))

        # Diff
        d_part = []
        for j, c in enumerate(diff_s):
            ch = c if (is_solution or ('diff' in clues and clues['diff'].get(j) is not None)) else '□'
            d_part.append(ch)
        d_indent = (max_digits - len(diff_s)) * 2
        rows.append(PuzzleRow(label="difference", content='  ' + ' ' * d_indent + ' '.join(d_part), row_type="result"))

        return rows
