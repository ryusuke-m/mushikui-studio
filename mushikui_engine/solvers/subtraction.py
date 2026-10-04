"""
Z3-based SMT solver for vertical subtraction (筆算の引き算).
"""

from typing import List, Dict, Optional, Tuple, Any
import z3

class SubtractionSolver:
    """Solves and verifies vertical subtraction cryptarithms."""

    @classmethod
    def solve(
        cls,
        A_len: int,                      # Length of minuend
        B_len: int,                      # Length of subtrahend
        diff_len: int,                   # Length of difference
        clues: Dict[str, Dict[int, int]], # 'A', 'B', 'diff' -> {pos: digit}
        max_solutions: int = 2
    ) -> List[Dict[str, Any]]:
        solver = z3.Solver()

        A = z3.Int('A')
        solver.add(A >= 10**(A_len - 1), A < 10**A_len)

        B = z3.Int('B')
        solver.add(B >= 10**(B_len - 1), B < 10**B_len)

        diff = z3.Int('diff')
        solver.add(diff >= 10**(diff_len - 1), diff < 10**diff_len)

        # A - B = diff
        solver.add(A - B == diff)

        # Digits of A
        A_digits = [z3.Int(f'A_d_{j}') for j in range(A_len)]
        for j, d in enumerate(A_digits):
            if j == 0:
                solver.add(d >= 1, d <= 9)
            else:
                solver.add(d >= 0, d <= 9)
        solver.add(A == sum(A_digits[j] * (10**(A_len - 1 - j)) for j in range(A_len)))

        # Digits of B
        B_digits = [z3.Int(f'B_d_{j}') for j in range(B_len)]
        for j, d in enumerate(B_digits):
            if j == 0:
                solver.add(d >= 1, d <= 9)
            else:
                solver.add(d >= 0, d <= 9)
        solver.add(B == sum(B_digits[j] * (10**(B_len - 1 - j)) for j in range(B_len)))

        # Digits of diff
        diff_digits = [z3.Int(f'diff_d_{j}') for j in range(diff_len)]
        for j, d in enumerate(diff_digits):
            if j == 0:
                solver.add(d >= 1, d <= 9)
            else:
                solver.add(d >= 0, d <= 9)
        solver.add(diff == sum(diff_digits[j] * (10**(diff_len - 1 - j)) for j in range(diff_len)))

        # Apply clues
        if 'A' in clues:
            for pos, val in clues['A'].items():
                solver.add(A_digits[pos] == val)

        if 'B' in clues:
            for pos, val in clues['B'].items():
                solver.add(B_digits[pos] == val)

        if 'diff' in clues:
            for pos, val in clues['diff'].items():
                solver.add(diff_digits[pos] == val)

        solutions = []
        while solver.check() == z3.sat and len(solutions) < max_solutions:
            m = solver.model()
            A_val = m[A].as_long()
            B_val = m[B].as_long()
            diff_val = m[diff].as_long()

            sol = {
                'A': A_val,
                'B': B_val,
                'diff': diff_val,
                'A_digits': [m[d].as_long() for d in A_digits],
                'B_digits': [m[d].as_long() for d in B_digits],
                'diff_digits': [m[d].as_long() for d in diff_digits]
            }
            solutions.append(sol)

            # Block this model
            solver.add(z3.Or(A != A_val, B != B_val))

        return solutions

    @classmethod
    def verify_uniqueness(cls, **kwargs) -> Tuple[bool, Optional[Dict[str, Any]]]:
        sols = cls.solve(max_solutions=2, **kwargs)
        if len(sols) == 1:
            return True, sols[0]
        return False, (sols[0] if sols else None)
