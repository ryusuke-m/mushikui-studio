"""
Text and Markdown renderers for vertical arithmetic (筆算) notation.
"""

from typing import List
from ..models import Puzzle, PuzzleRow

class TextRenderer:
    """Renders puzzles as beautifully aligned monospaced text and Markdown."""

    @staticmethod
    def render_rows(rows: List[PuzzleRow], use_box_drawing: bool = True) -> str:
        """Converts PuzzleRows to aligned text."""
        lines = []
        for r in rows:
            lines.append(r.content)
        return "\n".join(lines)

    @classmethod
    def render_problem_text(cls, puzzle: Puzzle) -> str:
        """Renders the problem in text format."""
        return cls.render_rows(puzzle.problem_rows)

    @classmethod
    def render_solution_text(cls, puzzle: Puzzle) -> str:
        """Renders the solution in text format."""
        return cls.render_rows(puzzle.solution_rows)

    @classmethod
    def render_problem_card_markdown(cls, puzzle: Puzzle, include_solution: bool = True) -> str:
        """Renders a complete markdown card for the puzzle with problem, hints, deductions, and solution."""
        md = []
        md.append(f"### 【問題 {puzzle.id}】 {puzzle.title}")
        md.append("")
        md.append(f"- **種別**: {puzzle.operation.display_name}")
        md.append(f"- **難易度**: {puzzle.difficulty.value}")
        md.append(f"- **初期ヒント数**: `{puzzle.hint_count}` 個")
        if puzzle.radix != 10:
            from ..models import val_to_base_char
            max_digit = val_to_base_char(puzzle.radix - 1, puzzle.radix)
            md.append(f"- **基数 (進法)**: **{puzzle.base_label}**（使用可能数字: 0〜{max_digit}）")
        if puzzle.summary:
            md.append(f"- **特徴**: {puzzle.summary}")
        md.append("")
        md.append("#### 《問題の筆算盤面》")
        md.append("```text")
        md.append(cls.render_problem_text(puzzle))
        md.append("```")
        md.append("")

        if puzzle.deduction_steps:
            md.append("#### 《解法の糸口・論理的ヒント》")
            for step in puzzle.deduction_steps:
                md.append(f"1. **{step.title}** ({step.target_part})")
                md.append(f"   - **着眼点**: {step.deduction}")
                md.append(f"   - **確定する数字**: `{step.revealed_value}`")
                if step.explanation:
                    md.append(f"   - **理由**: {step.explanation}")
            md.append("")

        if include_solution:
            md.append("<details>")
            md.append("<summary>▶ <strong>正解の筆算と確認（クリックで展開）</strong></summary>")
            md.append("")
            md.append("```text")
            md.append(cls.render_solution_text(puzzle))
            md.append("```")
            md.append("")
            if puzzle.uniqueness_verified:
                md.append("✅ **一意性検証済み**: Z3 SMTソルバーにより、上記以外の解が存在しないことが数学的に証明されています。")
            md.append("</details>")
            md.append("")

        md.append("---")
        md.append("")
        return "\n".join(md)
