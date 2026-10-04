"""
Z3-based SMT solver for vertical addition (筆算の足し算).
"""

from typing import List, Dict, Optional, Tuple, Any
import z3

class AdditionSolver:
    """Solves and verifies vertical addition cryptarithms."""

    @classmethod
    def solve(
        cls,
        operand_lens: List[int], # Length of each operand
        sum_len: int,            # Length of sum
        clues: Dict[str, Dict[int, int]], # 'op_0', 'op_1'..., 'sum' -> {pos: digit}
        enforce_order: bool = False, # If True and operands have same length, enforce op_0 <= op_1 to avoid trivial swaps
        max_solutions: int = 2,
        radix: int = 10
    ) -> List[Dict[str, Any]]:
        solver = z3.Solver()

        num_ops = len(operand_lens)
        operands = []
        op_digits = []

        for i, l in enumerate(operand_lens):
            op = z3.Int(f'op_{i}')
            solver.add(op >= radix**(l - 1), op < radix**l)
            operands.append(op)

            # Digits from left (0 is MSD)
            digits = []
            for j in range(l):
                d = z3.Int(f'op_{i}_d_{j}')
                if j == 0:
                    solver.add(d >= 1, d <= radix - 1)
                else:
                    solver.add(d >= 0, d <= radix - 1)
                digits.append(d)
            solver.add(op == sum(digits[j] * (radix**(l - 1 - j)) for j in range(l)))
            op_digits.append(digits)

        # Sum integer
        total = z3.Int('sum')
        solver.add(total == sum(operands))
        solver.add(total >= radix**(sum_len - 1), total < radix**sum_len)

        # Sum digits
        sum_digits = []
        for j in range(sum_len):
            d = z3.Int(f'sum_d_{j}')
            if j == 0:
                solver.add(d >= 1, d <= radix - 1)
            else:
                solver.add(d >= 0, d <= radix - 1)
            sum_digits.append(d)
        solver.add(total == sum(sum_digits[j] * (radix**(sum_len - 1 - j)) for j in range(sum_len)))

        if enforce_order:
            for i in range(num_ops - 1):
                if operand_lens[i] == operand_lens[i+1]:
                    solver.add(operands[i] <= operands[i+1])

        # Clues on operands
        for i in range(num_ops):
            key = f'op_{i}'
            if key in clues:
                for pos, val in clues[key].items():
                    solver.add(op_digits[i][pos] == val)

        # Clues on sum
        if 'sum' in clues:
            for pos, val in clues['sum'].items():
                solver.add(sum_digits[pos] == val)

        solutions = []
        while solver.check() == z3.sat and len(solutions) < max_solutions:
            m = solver.model()
            op_vals = [m[op].as_long() for op in operands]
            tot_val = m[total].as_long()

            sol = {
                'operands': op_vals,
                'sum': tot_val,
                'op_digits': [[m[d].as_long() for d in digits] for digits in op_digits],
                'sum_digits': [m[d].as_long() for d in sum_digits],
                'radix': radix
            }
            solutions.append(sol)

            # Block this model
            solver.add(z3.Or(*(operands[i] != op_vals[i] for i in range(num_ops))))

        return solutions

    @classmethod
    def verify_uniqueness(cls, **kwargs) -> Tuple[bool, Optional[Dict[str, Any]]]:
        sols = cls.solve(max_solutions=2, **kwargs)
        if len(sols) == 1:
            return True, sols[0]
        return False, (sols[0] if sols else None)
