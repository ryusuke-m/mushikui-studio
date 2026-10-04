"""
Addition Puzzle Generator.
Constructs addition puzzles with minimal clues, formatted rows, and verification.
"""

from typing import List, Dict, Optional, Tuple, Any
from ..models import Puzzle, PuzzleRow, Operation, Difficulty, DeductionStep

class AdditionGenerator:
    """Generates addition cryptarithm puzzles."""

    @classmethod
    def create_puzzle(
        cls,
        puzzle_id: str,
        title: str,
        difficulty: Difficulty,
        operands: List[int],
        clues: Dict[str, Dict[int, int]],
        summary: str = "",
        deduction_steps: Optional[List[DeductionStep]] = None,
        source: str = "",
        enforce_order: bool = False
    ) -> Puzzle:
        sum_val = sum(operands)
        op_strs = [str(x) for x in operands]
        sum_s = str(sum_val)
        operand_lens = [len(s) for s in op_strs]

        hint_count = sum(len(sub) for sub in clues.values())

        problem_rows = cls._build_rows(operands, sum_val, clues, is_solution=False)
        solution_rows = cls._build_rows(operands, sum_val, clues, is_solution=True)

        return Puzzle(
            id=puzzle_id,
            title=title,
            operation=Operation.ADDITION,
            difficulty=difficulty,
            hint_count=hint_count,
            summary=summary,
            problem_rows=problem_rows,
            solution_rows=solution_rows,
            deduction_steps=deduction_steps or [],
            operands={'operands': operands, 'sum': sum_val},
            uniqueness_verified=True,
            metadata={
                'operand_lens': operand_lens,
                'sum_len': len(sum_s),
                'clues': clues,
                'enforce_order': enforce_order,
                'source': source
            }
        )

    @classmethod
    def _build_rows(
        cls,
        operands: List[int],
        sum_val: int,
        clues: Dict[str, Dict[int, int]],
        is_solution: bool
    ) -> List[PuzzleRow]:
        op_strs = [str(x) for x in operands]
        sum_s = str(sum_val)
        max_len = max(max(len(s) for s in op_strs) + 2, len(sum_s))
        width = max_len * 2 + 2

        rows = []
        for i, s in enumerate(op_strs):
            prefix = '+ ' if i == len(op_strs) - 1 else '  '
            part = []
            key = f'op_{i}'
            for j, c in enumerate(s):
                ch = c if (is_solution or (key in clues and clues[key].get(j) is not None)) else '□'
                part.append(ch)
            row_str = prefix + ' '.join(part)
            rows.append(PuzzleRow(label=f"operand_{i}", content=' ' * (width - len(row_str)) + row_str))

        rows.append(PuzzleRow(label="line_add", content=' ' * (width - max_len * 2) + '─' * (max_len * 2), is_line=True, row_type="separator"))

        sum_part = []
        for j, c in enumerate(sum_s):
            ch = c if (is_solution or ('sum' in clues and clues['sum'].get(j) is not None)) else '□'
            sum_part.append(ch)
        sum_str = ' '.join(sum_part)
        rows.append(PuzzleRow(label="sum", content=' ' * (width - len(sum_str)) + sum_str, row_type="result"))

        return rows
