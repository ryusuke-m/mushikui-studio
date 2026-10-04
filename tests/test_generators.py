"""
Unit tests for generators and layout builders.
"""

import unittest
from mushikui_engine.generators.division_gen import DivisionGenerator
from mushikui_engine.generators.multiplication_gen import MultiplicationGenerator
from mushikui_engine.generators.addition_gen import AdditionGenerator
from mushikui_engine.generators.subtraction_gen import SubtractionGenerator
from mushikui_engine.generators.minimalizer import Minimalizer
from mushikui_engine.models import Difficulty, Operation

class TestGenerators(unittest.TestCase):

    def test_division_generator_creates_valid_structure(self):
        p = DivisionGenerator.create_puzzle(
            puzzle_id="TEST-DIV",
            title="Test Division",
            difficulty=Difficulty.LEVEL_3,
            d=112, q=89, D=9968,
            clues={'q': {0: 8}}
        )
        self.assertEqual(p.operation, Operation.DIVISION)
        self.assertEqual(p.hint_count, 1)
        self.assertTrue(len(p.problem_rows) > 0)
        self.assertTrue(len(p.solution_rows) > 0)

    def test_multiplication_generator_creates_valid_structure(self):
        p = MultiplicationGenerator.create_puzzle(
            puzzle_id="TEST-MUL",
            title="Test Multiplication",
            difficulty=Difficulty.LEVEL_4,
            A=112, B=89,
            clues={'B': {0: 8}}
        )
        self.assertEqual(p.operation, Operation.MULTIPLICATION)
        self.assertEqual(p.hint_count, 1)

    def test_minimalizer_preserves_uniqueness(self):
        p = AdditionGenerator.create_puzzle(
            puzzle_id="TEST-ADD",
            title="Test Addition",
            difficulty=Difficulty.LEVEL_1,
            operands=[999, 1],
            clues={'op_1': {0: 1}}
        )
        reduced = Minimalizer.reduce_clues_greedy(p)
        self.assertEqual(reduced.hint_count, 1)

if __name__ == '__main__':
    unittest.main()
