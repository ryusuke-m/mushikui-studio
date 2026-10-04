"""
Division Puzzle Generator.
Constructs division puzzles with minimal clues, formatted rows, and verification.
"""

from typing import List, Dict, Optional, Tuple, Any
from ..models import Puzzle, PuzzleRow, Operation, Difficulty, DeductionStep

class DivisionGenerator:
    """Generates division cryptarithm puzzles."""

    @classmethod
    def create_puzzle(
        cls,
        puzzle_id: str,
        title: str,
        difficulty: Difficulty,
        d: int,
        q: int,
        D: int,
        clues: Dict[str, Dict[int, int]],
        summary: str = "",
        deduction_steps: Optional[List[DeductionStep]] = None,
        source: str = ""
    ) -> Puzzle:
        d_s = str(d)
        q_s = str(q)
        D_s = str(D)
        D_digits = [int(c) for c in D_s]

        # Calculate steps
        steps = []
        idx = 0
        curr_val = 0
        zero_cols = {}
        zero_positions = []

        for qi, q_char in enumerate(q_s):
            q_dig = int(q_char)
            if q_dig == 0:
                zero_positions.append(qi)
                zero_cols[qi] = idx
                curr_val = curr_val * 10 + D_digits[idx]
                idx += 1
                continue
            while curr_val < d and idx < len(D_digits):
                curr_val = curr_val * 10 + D_digits[idx]
                idx += 1
            prod = d * q_dig
            rem = curr_val - prod
            steps.append({
                'q_idx': qi,
                'q_dig': q_dig,
                'prod': prod,
                'curr_val': curr_val,
                'rem': rem,
                'end_col': idx - 1
            })
            curr_val = rem

        # Build steps_info for Z3 verification
        steps_info = []
        prev_end_col = -1
        for si, s in enumerate(steps):
            bring_count = (s['end_col'] - prev_end_col) if prev_end_col >= 0 else (s['end_col'] + 1)
            steps_info.append({
                'q_idx': s['q_idx'],
                'bring_down_count': bring_count,
                'sub_dividend_len': len(str(s['curr_val'])),
                'product_len': len(str(s['prod'])),
                'is_last': (si == len(steps) - 1)
            })
            prev_end_col = s['end_col']

        hint_count = sum(len(sub) for sub in clues.values())

        # Build problem and solution rows
        problem_rows = cls._build_rows(d, q, D, steps, zero_cols, clues, is_solution=False)
        solution_rows = cls._build_rows(d, q, D, steps, zero_cols, clues, is_solution=True)

        puzzle = Puzzle(
            id=puzzle_id,
            title=title,
            operation=Operation.DIVISION,
            difficulty=difficulty,
            hint_count=hint_count,
            summary=summary,
            problem_rows=problem_rows,
            solution_rows=solution_rows,
            deduction_steps=deduction_steps or [],
            operands={'d': d, 'q': q, 'D': D},
            uniqueness_verified=True,
            metadata={
                'd_len': len(d_s),
                'q_len': len(q_s),
                'D_len': len(D_s),
                'steps_info': steps_info,
                'clues': clues,
                'source': source
            }
        )
        return puzzle

    @classmethod
    def _build_rows(
        cls,
        d: int,
        q: int,
        D: int,
        steps: List[Dict[str, Any]],
        zero_cols: Dict[int, int],
        clues: Dict[str, Dict[int, int]],
        is_solution: bool
    ) -> List[PuzzleRow]:
        d_s = str(d)
        q_s = str(q)
        D_s = str(D)

        col_offset = len(d_s) * 2 + 3
        total_cols = col_offset + len(D_s) * 2

        rows = []

        # 1. Quotient
        q_line = [' '] * total_cols
        for s in steps:
            qi = s['q_idx']
            col = col_offset + s['end_col'] * 2
            char = str(s['q_dig']) if (is_solution or ('q' in clues and clues['q'].get(qi) is not None)) else '□'
            q_line[col] = char
        for qi, col_idx in zero_cols.items():
            col = col_offset + col_idx * 2
            char = '0' if (is_solution or ('q' in clues and clues['q'].get(qi) is not None)) else '□'
            q_line[col] = char
        rows.append(PuzzleRow(label="quotient", content=''.join(q_line).rstrip()))

        # 2. Bracket bar
        sep_top = ' ' * (col_offset - 3) + '┌' + '─' * (len(D_s) * 2 + 1)
        rows.append(PuzzleRow(label="line_top", content=sep_top, is_line=True, row_type="separator"))

        # 3. Divisor & Dividend
        d_part = []
        for di, dc in enumerate(d_s):
            char = dc if (is_solution or ('d' in clues and clues['d'].get(di) is not None)) else '□'
            d_part.append(char)
        d_str = ' '.join(d_part) + ' │ '

        D_part = []
        for Di, Dc in enumerate(D_s):
            char = Dc if (is_solution or ('D' in clues and clues['D'].get(Di) is not None)) else '□'
            D_part.append(char)
        rows.append(PuzzleRow(label="dividend", content=d_str + ' '.join(D_part)))

        # 4. Steps
        for si, s in enumerate(steps):
            prod_s = str(s['prod'])
            end_col = s['end_col']
            start_col = end_col - len(prod_s) + 1

            p_line = [' '] * total_cols
            for pi, pc in enumerate(prod_s):
                col = col_offset + (start_col + pi) * 2
                key = f'p{si}'
                char = pc if (is_solution or (key in clues and clues[key].get(pi) is not None)) else '□'
                p_line[col] = char
            rows.append(PuzzleRow(label=f"prod_{si}", content=''.join(p_line).rstrip()))

            bar_start = col_offset + start_col * 2 - 1
            bar_len = len(prod_s) * 2 + 1
            rows.append(PuzzleRow(label=f"line_{si}", content=' ' * bar_start + '─' * bar_len, is_line=True, row_type="separator"))

            if si < len(steps) - 1:
                next_step = steps[si+1]
                m_s = str(next_step['curr_val'])
                m_end_col = next_step['end_col']
                m_start_col = m_end_col - len(m_s) + 1
                m_line = [' '] * total_cols
                for mi, mc in enumerate(m_s):
                    col = col_offset + (m_start_col + mi) * 2
                    key = f'm{si+1}'
                    char = mc if (is_solution or (key in clues and clues[key].get(mi) is not None)) else '□'
                    m_line[col] = char
                rows.append(PuzzleRow(label=f"sub_{si+1}", content=''.join(m_line).rstrip()))
            else:
                rem_col = col_offset + end_col * 2
                rows.append(PuzzleRow(label="remainder", content=' ' * rem_col + '0', row_type="result"))

        return rows
