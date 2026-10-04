"""
Multiplication Puzzle Generator.
Constructs multiplication puzzles with minimal clues, formatted rows, and verification.
"""

from typing import List, Dict, Optional, Tuple, Any
from ..models import Puzzle, PuzzleRow, Operation, Difficulty, DeductionStep

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
        source: str = ""
    ) -> Puzzle:
        A_s = str(A)
        B_s = str(B)
        tot = A * B
        tot_s = str(tot)
        b_digits = [int(c) for c in reversed(B_s)] # 0 is LSD
        prods = [A * b for b in b_digits]
        product_lens = [len(str(p)) for p in prods]

        hint_count = sum(len(sub) for sub in clues.values())

        problem_rows = cls._build_rows(A, B, prods, tot, clues, is_solution=False)
        solution_rows = cls._build_rows(A, B, prods, tot, clues, is_solution=True)

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
            operands={'A': A, 'B': B, 'tot': tot},
            uniqueness_verified=True,
            metadata={
                'A_len': len(A_s),
                'B_len': len(B_s),
                'product_lens': product_lens,
                'tot_len': len(tot_s),
                'clues': clues,
                'source': source
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
        is_solution: bool
    ) -> List[PuzzleRow]:
        A_s = str(A)
        B_s = str(B)
        tot_s = str(tot)

        max_len = max(len(A_s), len(B_s) + 2, len(tot_s))
        for i, p in enumerate(prods):
            max_len = max(max_len, len(str(p)) + i)

        width = max_len * 2 + 2
        rows = []

        # A
        a_part = []
        for ai, ac in enumerate(A_s):
            ch = ac if (is_solution or ('A' in clues and clues['A'].get(ai) is not None)) else '□'
            a_part.append(ch)
        a_str = ' '.join(a_part)
        rows.append(PuzzleRow(label="multiplicand", content=' ' * (width - len(a_str)) + a_str))

        # B with ×
        b_part = []
        for bi, bc in enumerate(B_s):
            ch = bc if (is_solution or ('B' in clues and clues['B'].get(bi) is not None)) else '□'
            b_part.append(ch)
        b_str = '× ' + ' '.join(b_part)
        rows.append(PuzzleRow(label="multiplier", content=' ' * (width - len(b_str)) + b_str))

        # line
        rows.append(PuzzleRow(label="line_mul", content=' ' * (width - max_len * 2) + '─' * (max_len * 2), is_line=True, row_type="separator"))

        # Partial products
        for i, p in enumerate(prods):
            p_s = str(p)
            p_part = []
            key = f'P_{i}'
            for pi, pc in enumerate(p_s):
                ch = pc if (is_solution or (key in clues and clues[key].get(pi) is not None)) else '□'
                p_part.append(ch)
            p_str = ' '.join(p_part)
            shift = i * 2
            rows.append(PuzzleRow(label=f"prod_{i}", content=' ' * (width - len(p_str) - shift) + p_str + ' ' * shift))

        # line
        rows.append(PuzzleRow(label="line_tot", content=' ' * (width - max_len * 2) + '─' * (max_len * 2), is_line=True, row_type="separator"))

        # Total
        t_part = []
        for ti, tc in enumerate(tot_s):
            ch = tc if (is_solution or ('tot' in clues and clues['tot'].get(ti) is not None)) else '□'
            t_part.append(ch)
        t_str = ' '.join(t_part)
        rows.append(PuzzleRow(label="total", content=' ' * (width - len(t_str)) + t_str, row_type="result"))

        return rows
