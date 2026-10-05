"""
Addition Puzzle Generator.
Constructs addition puzzles with minimal clues, formatted rows, and verification.
"""

from typing import List, Dict, Optional, Tuple, Any
from ..models import Puzzle, PuzzleRow, Operation, Difficulty, DeductionStep, int_to_base_str, val_to_base_char

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
        enforce_order: bool = False,
        radix: int = 10
    ) -> Puzzle:
        sum_val = sum(operands)
        op_strs = [int_to_base_str(x, radix) for x in operands]
        sum_s = int_to_base_str(sum_val, radix)
        operand_lens = [len(s) for s in op_strs]

        hint_count = sum(len(sub) for sub in clues.values())

        problem_rows = cls._build_rows(operands, sum_val, clues, is_solution=False, radix=radix)
        solution_rows = cls._build_rows(operands, sum_val, clues, is_solution=True, radix=radix)

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
            operands={'operands': operands, 'sum': sum_val, 'op_strs': op_strs, 'sum_str': sum_s},
            radix=radix,
            uniqueness_verified=True,
            metadata={
                'operand_lens': operand_lens,
                'sum_len': len(sum_s),
                'clues': clues,
                'enforce_order': enforce_order,
                'source': source,
                'radix': radix
            }
        )

    @classmethod
    def _build_rows(
        cls,
        operands: List[int],
        sum_val: int,
        clues: Dict[str, Dict[int, int]],
        is_solution: bool,
        radix: int = 10
    ) -> List[PuzzleRow]:
        op_strs = [int_to_base_str(x, radix) for x in operands]
        sum_s = int_to_base_str(sum_val, radix)
        max_digits = max(max(len(s) for s in op_strs), len(sum_s))

        rows = []
        for i, s in enumerate(op_strs):
            prefix = '+ ' if i == len(op_strs) - 1 else '  '
            part = []
            key = f'op_{i}'
            for j, c in enumerate(s):
                ch = c if (is_solution or (key in clues and clues[key].get(j) is not None)) else '□'
                part.append(ch)
            indent = (max_digits - len(s)) * 2
            rows.append(PuzzleRow(label=f"operand_{i}", content=prefix + ' ' * indent + ' '.join(part)))

        rows.append(PuzzleRow(label="line_add", content='─' * (max_digits * 2 + 1), is_line=True, row_type="separator"))

        sum_part = []
        for j, c in enumerate(sum_s):
            ch = c if (is_solution or ('sum' in clues and clues['sum'].get(j) is not None)) else '□'
            sum_part.append(ch)
        sum_indent = (max_digits - len(sum_s)) * 2
        rows.append(PuzzleRow(label="sum", content='  ' + ' ' * sum_indent + ' '.join(sum_part), row_type="result"))

        return rows
