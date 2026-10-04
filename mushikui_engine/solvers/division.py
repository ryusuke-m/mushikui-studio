"""
Z3-based SMT solver for vertical long division (筆算の割り算).
Verifies uniqueness and solves all missing digits with mathematical rigor.
"""

from typing import List, Dict, Optional, Tuple, Any
import z3

class DivisionSolver:
    """Solves and verifies vertical long division cryptarithms."""

    @classmethod
    def solve_division_pattern(
        cls,
        d_len: int,
        q_len: int,
        D_len: int,
        steps_info: List[Dict[str, Any]],
        clues: Optional[Dict[str, Dict[int, int]]] = None,
        max_solutions: int = 2,
        radix: int = 10
    ) -> List[Dict[str, Any]]:
        clues = clues or {}
        solver = z3.Solver()

        # Divisor digits
        d_digits = [z3.Int(f'd_{i}') for i in range(d_len)]
        for i in range(d_len):
            if i == 0:
                solver.add(d_digits[i] >= 1, d_digits[i] <= radix - 1)
            else:
                solver.add(d_digits[i] >= 0, d_digits[i] <= radix - 1)
        d = z3.Int('d')
        solver.add(d == sum(d_digits[i] * (radix**(d_len - 1 - i)) for i in range(d_len)))

        # Quotient digits
        q_digits = [z3.Int(f'q_{i}') for i in range(q_len)]
        for i in range(q_len):
            if i == 0:
                solver.add(q_digits[i] >= 1, q_digits[i] <= radix - 1)
            else:
                solver.add(q_digits[i] >= 0, q_digits[i] <= radix - 1)

        # Dividend digits
        D_digits = [z3.Int(f'D_{i}') for i in range(D_len)]
        for i in range(D_len):
            if i == 0:
                solver.add(D_digits[i] >= 1, D_digits[i] <= radix - 1)
            else:
                solver.add(D_digits[i] >= 0, D_digits[i] <= radix - 1)

        # Clues on Divisor digits
        if 'd' in clues:
            for pos, val in clues['d'].items():
                solver.add(d_digits[pos] == val)

        # Clues on Quotient digits
        if 'q' in clues:
            for pos, val in clues['q'].items():
                solver.add(q_digits[pos] == val)

        # Clues on Dividend digits
        if 'D' in clues:
            for pos, val in clues['D'].items():
                solver.add(D_digits[pos] == val)

        # Trace division steps
        curr_rem = 0
        d_idx = 0

        for step_idx, step in enumerate(steps_info):
            q_idx = step['q_idx']
            num_bring = step['bring_down_count']
            p_len = step['product_len']
            m_len = step['sub_dividend_len']

            m_expr = curr_rem
            for _ in range(num_bring):
                m_expr = m_expr * radix + D_digits[d_idx]
                d_idx += 1

            solver.add(m_expr >= radix**(m_len - 1), m_expr < radix**m_len)

            # Product constraint
            solver.add(q_digits[q_idx] >= 1, q_digits[q_idx] <= radix - 1)
            p = d * q_digits[q_idx]
            solver.add(p >= radix**(p_len - 1), p < radix**p_len)

            # Clues on product digits if any
            key_p = f'p{step_idx}'
            if key_p in clues:
                for pos, val in clues[key_p].items():
                    div_factor = radix**(p_len - 1 - pos)
                    solver.add((p / div_factor) % radix == val)

            # Clues on sub-dividend digits if any
            key_m = f'm{step_idx}'
            if key_m in clues:
                for pos, val in clues[key_m].items():
                    div_factor = radix**(m_len - 1 - pos)
                    solver.add((m_expr / div_factor) % radix == val)

            if step.get('is_last'):
                solver.add(m_expr == p)
            else:
                solver.add(m_expr >= p)
                curr_rem = m_expr - p
                solver.add(curr_rem < d)

        # Digits of quotient not in steps_info are 0
        active_q = set(step['q_idx'] for step in steps_info)
        for qi in range(q_len):
            if qi not in active_q:
                solver.add(q_digits[qi] == 0)

        solutions = []
        while solver.check() == z3.sat and len(solutions) < max_solutions:
            m = solver.model()
            d_val = m[d].as_long()
            q_digits_val = [m[qd].as_long() for qd in q_digits]
            D_digits_val = [m[Dd].as_long() for Dd in D_digits]
            q_val = sum(q_digits_val[i] * (radix**(q_len - 1 - i)) for i in range(q_len))
            D_val = sum(D_digits_val[i] * (radix**(D_len - 1 - i)) for i in range(D_len))

            sol = {
                'd': d_val,
                'q': q_val,
                'D': D_val,
                'q_digits': q_digits_val,
                'D_digits': D_digits_val,
                'radix': radix
            }
            solutions.append(sol)
            solver.add(z3.Or(d != d_val, *(q_digits[i] != q_digits_val[i] for i in range(q_len))))

        return solutions

    @classmethod
    def verify_uniqueness(
        cls,
        d_len: int,
        q_len: int,
        D_len: int,
        steps_info: List[Dict[str, Any]],
        clues: Optional[Dict[str, Dict[int, int]]] = None,
        radix: int = 10
    ) -> Tuple[bool, Optional[Dict[str, Any]]]:
        sols = cls.solve_division_pattern(
            d_len=d_len,
            q_len=q_len,
            D_len=D_len,
            steps_info=steps_info,
            clues=clues,
            max_solutions=2,
            radix=radix
        )
        if len(sols) == 1:
            return True, sols[0]
        return False, (sols[0] if sols else None)
