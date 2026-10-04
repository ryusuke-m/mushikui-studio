"""
SVG Renderer for Mushikuizan (vertical arithmetic).
Generates beautiful, vector-crisp arithmetic worksheets.
"""

from typing import List
from ..models import Puzzle, PuzzleRow

class SVGRenderer:
    """Renders a Puzzle into an SVG image."""

    @classmethod
    def render_to_svg(cls, rows: List[PuzzleRow], title: str = "", is_solution: bool = False, width: int = 480) -> str:
        line_height = 36
        padding_top = 50 if title else 30
        padding_bottom = 30
        total_height = padding_top + len(rows) * line_height + padding_bottom

        # Find max characters to calculate font sizing
        max_chars = max(len(r.content) for r in rows) if rows else 10
        char_width = 18

        svg_lines = [
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {total_height}" width="{width}" height="{total_height}" style="background-color: #faf8f5; border-radius: 8px; font-family: \'Courier New\', monospace, sans-serif;">',
            '  <defs>',
            '    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">',
            '      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>',
            '    </filter>',
            '  </defs>',
            f'  <rect width="{width}" height="{total_height}" rx="8" fill="#faf8f5" stroke="#e0dacf" stroke-width="1.5" />',
        ]

        if title:
            color = "#1a365d" if not is_solution else "#1c4532"
            svg_lines.append(f'  <text x="24" y="32" font-size="16" font-weight="bold" fill="{color}">{title}</text>')
            svg_lines.append(f'  <line x1="20" y1="42" x2="{width - 20}" y2="42" stroke="#d5cbbb" stroke-width="1" />')

        y = padding_top + 26
        for row in rows:
            content = row.content
            # We can format content:
            # If it's a separator line:
            if row.is_line:
                # Calculate start and length based on content dashes
                start_spaces = len(content) - len(content.lstrip(' '))
                line_len = len(content.strip())
                x1 = 30 + start_spaces * char_width
                x2 = x1 + line_len * char_width
                svg_lines.append(f'  <line x1="{x1}" y1="{y - 10}" x2="{x2}" y2="{y - 10}" stroke="#4a5568" stroke-width="2" />')
            else:
                # Text characters
                x = 30
                for char in content:
                    if char == '□':
                        # Draw a small box
                        svg_lines.append(f'  <rect x="{x+1}" y="{y-18}" width="16" height="20" fill="#edf2f7" stroke="#718096" stroke-width="1.5" rx="3" />')
                    elif char == ' ':
                        pass
                    elif char in ['─', '―', '—']:
                        # Horizontal line character
                        svg_lines.append(f'  <line x1="{x}" y1="{y - 10}" x2="{x + char_width}" y2="{y - 10}" stroke="#4a5568" stroke-width="2" />')
                    elif char in ['┌', '│', ')']:
                        # Division bracket
                        svg_lines.append(f'  <text x="{x}" y="{y}" font-size="20" font-weight="bold" fill="#2d3748">{char}</text>')
                    else:
                        # Regular digit or symbol (+, -, *, /)
                        color = "#c53030" if (is_solution and char in "0123456789") else "#1a202c"
                        weight = "bold" if char in "0123456789+-×÷" else "normal"
                        svg_lines.append(f'  <text x="{x+2}" y="{y}" font-size="20" font-weight="{weight}" fill="{color}">{char}</text>')
                    x += char_width
            y += line_height

        svg_lines.append('</svg>')
        return "\n".join(svg_lines)
