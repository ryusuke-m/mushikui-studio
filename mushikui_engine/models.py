from dataclasses import dataclass, field, asdict
from enum import Enum
from typing import List, Dict, Optional, Any, Tuple
import json

class Operation(str, Enum):
    DIVISION = "division"
    MULTIPLICATION = "multiplication"
    ADDITION = "addition"
    SUBTRACTION = "subtraction"

    @property
    def display_name(self) -> str:
        names = {
            Operation.DIVISION: "割り算 (除算)",
            Operation.MULTIPLICATION: "掛け算 (乗算)",
            Operation.ADDITION: "足し算 (加算)",
            Operation.SUBTRACTION: "引き算 (減算)",
        }
        return names.get(self, self.value)

    @property
    def symbol(self) -> str:
        symbols = {
            Operation.DIVISION: "÷",
            Operation.MULTIPLICATION: "×",
            Operation.ADDITION: "+",
            Operation.SUBTRACTION: "-",
        }
        return symbols.get(self, "?")

class Difficulty(str, Enum):
    LEVEL_1 = "★☆☆☆☆ 初級"
    LEVEL_2 = "★★☆☆☆ 初中級"
    LEVEL_3 = "★★★☆☆ 中級"
    LEVEL_4 = "★★★★☆ 上級"
    LEVEL_5 = "★★★★★ 伝説級"

    @property
    def stars(self) -> int:
        return int(self.value.count("★"))

@dataclass
class PuzzleRow:
    """Represents a single row in the vertical arithmetic layout."""
    label: str       # e.g., "quotient", "dividend", "divisor", "product_1", "sub_1", "line", "sum"
    content: str     # String representation, e.g. "  □7□□□" or "──────"
    is_line: bool = False
    indent: int = 0
    row_type: str = "digits" # 'digits', 'separator', 'result'

@dataclass
class DeductionStep:
    """A logical step in solving the puzzle."""
    step_num: int
    title: str
    target_part: str
    deduction: str
    revealed_value: str
    explanation: str

@dataclass
class Puzzle:
    id: str
    title: str
    operation: Operation
    difficulty: Difficulty
    hint_count: int
    summary: str
    problem_rows: List[PuzzleRow]
    solution_rows: List[PuzzleRow]
    deduction_steps: List[DeductionStep] = field(default_factory=list)
    operands: Dict[str, Any] = field(default_factory=dict)
    uniqueness_verified: bool = True
    metadata: Dict[str, Any] = field(default_factory=dict)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "title": self.title,
            "operation": self.operation.value,
            "difficulty": self.difficulty.value,
            "hint_count": self.hint_count,
            "summary": self.summary,
            "problem_rows": [asdict(r) for r in self.problem_rows],
            "solution_rows": [asdict(r) for r in self.solution_rows],
            "deduction_steps": [asdict(s) for s in self.deduction_steps],
            "operands": self.operands,
            "uniqueness_verified": self.uniqueness_verified,
            "metadata": self.metadata,
        }

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Puzzle":
        return cls(
            id=data["id"],
            title=data["title"],
            operation=Operation(data["operation"]),
            difficulty=Difficulty(data["difficulty"]),
            hint_count=data["hint_count"],
            summary=data["summary"],
            problem_rows=[PuzzleRow(**r) for r in data["problem_rows"]],
            solution_rows=[PuzzleRow(**r) for r in data["solution_rows"]],
            deduction_steps=[DeductionStep(**s) for s in data.get("deduction_steps", [])],
            operands=data.get("operands", {}),
            uniqueness_verified=data.get("uniqueness_verified", True),
            metadata=data.get("metadata", {}),
        )

    def to_json(self, indent: int = 2) -> str:
        return json.dumps(self.to_dict(), ensure_ascii=False, indent=indent)

    @classmethod
    def from_json(cls, json_str: str) -> "Puzzle":
        return cls.from_dict(json.loads(json_str))
