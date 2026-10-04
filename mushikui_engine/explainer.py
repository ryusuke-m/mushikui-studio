"""
Deduction Explainer: Generates human-readable step-by-step logical reasoning
explaining why each puzzle's solution is uniquely forced.
"""

from typing import List
from .models import DeductionStep, Puzzle, Operation

class DeductionExplainer:
    """Provides structured logical explanations for mushikuizan deduction steps."""

    @classmethod
    def generate_overview(cls, puzzle: Puzzle) -> str:
        lines = [
            f"### 【{puzzle.title}】 論理的解法の思考プロセス",
            "",
            f"本問はヒントがわずか **{puzzle.hint_count} 個** しか提示されていませんが、",
            "「筆算の段の桁数」「引き算の繰り下がり」「積の範囲」という数学的制約を順に追うことで、",
            "あてずっぽう（総当たり）ではなく純粋な論理的推論によって解くことができます。",
            ""
        ]
        for s in puzzle.deduction_steps:
            lines.append(f"#### Step {s.step_num}: {s.title} ({s.target_part})")
            lines.append(f"- **着眼点**: {s.deduction}")
            lines.append(f"- **確定する数字**: `{s.revealed_value}`")
            if s.explanation:
                lines.append(f"- **論理的根拠**: {s.explanation}")
            lines.append("")
        return "\n".join(lines)
