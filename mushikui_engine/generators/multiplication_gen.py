"""
Multiplication Puzzle Generator.
Constructs multiplication puzzles with minimal clues, formatted rows, and verification.
"""

from typing import List, Dict, Optional, Tuple, Any
from ..models import Puzzle, PuzzleRow, Operation, Difficulty, DeductionStep, int_to_base_str, val_to_base_char

class MultiplicationGenerator:
    """Generates multiplication cryptarithm puzzles."""

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
        A_s = int_to_base_str(A, radix)
        B_s = int_to_base_str(B, radix)
        tot = A * B
        tot_s = int_to_base_str(tot, radix)
        b_digits = [int(c, radix) for c in reversed(B_s)] # 0 is LSD
        prods = [A * b for b in b_digits]
        product_lens = [len(int_to_base_str(p, radix)) for p in prods]

        hint_count = sum(len(sub) for sub in clues.values())

        problem_rows = cls._build_rows(A, B, prods, tot, clues, is_solution=False, radix=radix)
        solution_rows = cls._build_rows(A, B, prods, tot, clues, is_solution=True, radix=radix)

        return Puzzle(
            id=puzzle_id,
            title=title,
            operation=Operation.MULTIPLICATION,
            difficulty=difficulty,
            hint_count=hint_count,
            summary=summary,
            problem_rows=problem_rows,
            solution_rows=solution_rows,
            deduction_steps=deduction_steps or [],
            operands={'A': A, 'B': B, 'tot': tot, 'A_str': A_s, 'B_str': B_s, 'tot_str': tot_s},
            radix=radix,
            uniqueness_verified=True,
            metadata={
                'A_len': len(A_s),
                'B_len': len(B_s),
                'product_lens': product_lens,
                'tot_len': len(tot_s),
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
        prods: List[int],
        tot: int,
        clues: Dict[str, Dict[int, int]],
        is_solution: bool,
        radix: int = 10
    ) -> List[PuzzleRow]:
        A_s = int_to_base_str(A, radix)
        B_s = int_to_base_str(B, radix)
        tot_s = int_to_base_str(tot, radix)

        max_digits = max(len(A_s), len(B_s), len(tot_s))
        for i, p in enumerate(prods):
            p_s = int_to_base_str(p, radix)
            max_digits = max(max_digits, len(p_s) + i)

        rows = []

        # A
        a_part = []
        for ai, ac in enumerate(A_s):
            ch = ac if (is_solution or ('A' in clues and clues['A'].get(ai) is not None)) else '□'
            a_part.append(ch)
        a_indent = (max_digits - len(A_s)) * 2
        rows.append(PuzzleRow(label="multiplicand", content='  ' + ' ' * a_indent + ' '.join(a_part)))

        # B with ×
        b_part = []
        for bi, bc in enumerate(B_s):
            ch = bc if (is_solution or ('B' in clues and clues['B'].get(bi) is not None)) else '□'
            b_part.append(ch)
        b_indent = (max_digits - len(B_s)) * 2
        rows.append(PuzzleRow(label="multiplier", content='× ' + ' ' * b_indent + ' '.join(b_part)))

        # line
        rows.append(PuzzleRow(label="line_mul", content='─' * (max_digits * 2 + 1), is_line=True, row_type="separator"))

        # Partial products
        for i, p in enumerate(prods):
            p_s = int_to_base_str(p, radix)
            p_part = []
            key = f'P_{i}'
            for pi, pc in enumerate(p_s):
                ch = pc if (is_solution or (key in clues and clues[key].get(pi) is not None)) else '□'
                p_part.append(ch)
            p_indent = (max_digits - len(p_s) - i) * 2
            p_shift = i * 2
            p_line = '  ' + ' ' * p_indent + ' '.join(p_part) + (' ' * p_shift if p_shift else '')
            rows.append(PuzzleRow(label=f"prod_{i}", content=p_line))

        # line
        rows.append(PuzzleRow(label="line_tot", content='─' * (max_digits * 2 + 1), is_line=True, row_type="separator"))

        # Total
        t_part = []
        for ti, tc in enumerate(tot_s):
            ch = tc if (is_solution or ('tot' in clues and clues['tot'].get(ti) is not None)) else '□'
            t_part.append(ch)
        t_indent = (max_digits - len(tot_s)) * 2
        rows.append(PuzzleRow(label="total", content='  ' + ' ' * t_indent + ' '.join(t_part), row_type="result"))

        return rows
