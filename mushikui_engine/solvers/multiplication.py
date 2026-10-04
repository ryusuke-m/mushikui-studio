"""
Z3-based SMT solver for vertical multiplication (筆算の掛け算).
"""

from typing import List, Dict, Optional, Tuple, Any
import z3

class MultiplicationSolver:
    """Solves and verifies vertical multiplication cryptarithms."""

    @classmethod
    def solve(
        cls,
        A_len: int,
        B_len: int,
        product_lens: List[int], # Expected length of partial products P_0..P_{B_len-1}
        tot_len: int,           # Expected length of total sum
        clues: Dict[str, Dict[int, int]], # 'A', 'B', 'P_0'..'P_{B_len-1}', 'tot' -> {pos: digit}
        max_solutions: int = 2,
        radix: int = 10
    ) -> List[Dict[str, Any]]:
        solver = z3.Solver()

        # Digits of A
        A_digits = [z3.Int(f'A_d_{j}') for j in range(A_len)]
        for j, d in enumerate(A_digits):
            if j == 0:
                solver.add(d >= 1, d <= radix - 1)
            else:
                solver.add(d >= 0, d <= radix - 1)
        A = z3.Int('A')
        solver.add(A == sum(A_digits[j] * (radix**(A_len - 1 - j)) for j in range(A_len)))

        # Digits of B: B = b_{B_len-1}..b_0
        b_digits = [z3.Int(f'b_{i}') for i in range(B_len)]
        for i, b in enumerate(b_digits):
            if i == B_len - 1: # leading digit of B
                solver.add(b >= 1, b <= radix - 1)
            else:
                solver.add(b >= 0, b <= radix - 1)

        B = z3.Int('B')
        solver.add(B == sum(b_digits[i] * (radix**i) for i in range(B_len)))

        # Partial products: P_i = A * b_i
        products = []
        for i in range(B_len):
            p = z3.Int(f'P_{i}')
            solver.add(p == A * b_digits[i])
            expected_p_len = product_lens[i]
            if expected_p_len > 0:
                solver.add(p >= radix**(expected_p_len - 1), p < radix**expected_p_len)
            products.append(p)

        # Total sum digits
        tot_digits = [z3.Int(f'tot_d_{j}') for j in range(tot_len)]
        for j, d in enumerate(tot_digits):
            if j == 0:
                solver.add(d >= 1, d <= radix - 1)
            else:
                solver.add(d >= 0, d <= radix - 1)
        tot = z3.Int('tot')
        solver.add(tot == sum(tot_digits[j] * (radix**(tot_len - 1 - j)) for j in range(tot_len)))
        solver.add(tot == A * B)

        # Apply clues on A
        if 'A' in clues:
            for pos, val in clues['A'].items():
                solver.add(A_digits[pos] == val)

        # Apply clues on B
        if 'B' in clues:
            for pos, val in clues['B'].items():
                solver.add(b_digits[B_len - 1 - pos] == val)

        # Apply clues on partial products
        for i in range(B_len):
            key = f'P_{i}'
            if key in clues:
                p_len = product_lens[i]
                for pos, val in clues[key].items():
                    div_factor = radix**(p_len - 1 - pos)
                    solver.add((products[i] / div_factor) % radix == val)

        # Apply clues on total sum
        if 'tot' in clues:
            for pos, val in clues['tot'].items():
                solver.add(tot_digits[pos] == val)

        solutions = []
        while solver.check() == z3.sat and len(solutions) < max_solutions:
            m = solver.model()
            A_val = m[A].as_long()
            B_val = m[B].as_long()
            tot_val = m[tot].as_long()
            b_vals = [m[b_digits[i]].as_long() for i in range(B_len)]
            p_vals = [m[products[i]].as_long() for i in range(B_len)]

            sol = {
                'A': A_val,
                'B': B_val,
                'b_digits': b_vals,
                'products': p_vals,
                'tot': tot_val,
                'radix': radix
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
