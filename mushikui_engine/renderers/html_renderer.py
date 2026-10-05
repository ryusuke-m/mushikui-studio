"""
HTML Renderer for Mushikuizan Problem Book and Interactive Worksheets.
"""

from typing import List
from ..models import Puzzle, Operation
from .text_renderer import TextRenderer

class HTMLRenderer:
    """Renders standalone HTML book and interactive puzzle elements."""

    @classmethod
    def render_puzzle_html_card(cls, puzzle: Puzzle, idx: int) -> str:
        """Renders an interactive card for a single puzzle."""
        problem_txt = TextRenderer.render_problem_text(puzzle)
        solution_txt = TextRenderer.render_solution_text(puzzle)
        
        steps_html = []
        for s in puzzle.deduction_steps:
            steps_html.append(f"""
            <div class="step-item">
              <span class="step-badge">Step {s.step_num}</span>
              <strong>{s.title}</strong> ({s.target_part}): {s.deduction}
              <div class="step-detail">➜ 確定: <code>{s.revealed_value}</code> {f'({s.explanation})' if s.explanation else ''}</div>
            </div>
            """)
        steps_rendered = "\n".join(steps_html)

        op_badge_class = {
            Operation.DIVISION: "badge-division",
            Operation.MULTIPLICATION: "badge-multiplication",
            Operation.ADDITION: "badge-addition",
            Operation.SUBTRACTION: "badge-subtraction"
        }.get(puzzle.operation, "badge-default")

        base_badge = f'<span class="base-badge base-{puzzle.radix}">{puzzle.base_label}</span>' if puzzle.radix != 10 else ''

        return f"""
        <div class="puzzle-card" id="puzzle-{puzzle.id}" data-op="{puzzle.operation.value}" data-stars="{puzzle.difficulty.stars}" data-radix="{puzzle.radix}">
          <div class="card-header">
            <div class="header-left">
              <span class="puzzle-id">{puzzle.id}</span>
              <span class="op-badge {op_badge_class}">{puzzle.operation.display_name}</span>
              {base_badge}
              <span class="difficulty-stars">{puzzle.difficulty.value}</span>
            </div>
            <div class="header-right">
              <span class="hint-pill">初期ヒント: <strong>{puzzle.hint_count}</strong> 個</span>
            </div>
          </div>
          
          <h3 class="puzzle-title">{puzzle.title}</h3>
          {f'<p class="puzzle-desc">{puzzle.summary}</p>' if puzzle.summary else ''}

          <div class="board-container">
            <div class="board-column">
              <div class="board-label">【問題盤面】</div>
              <pre class="mushikui-board problem-board">{problem_txt}</pre>
            </div>
            <div class="board-column solution-column" id="sol-col-{puzzle.id}" style="display: none;">
              <div class="board-label solution-label">【正解盤面】</div>
              <pre class="mushikui-board solution-board">{solution_txt}</pre>
            </div>
          </div>

          <div class="card-controls">
            <button class="btn btn-primary" onclick="toggleSolution('{puzzle.id}')" id="btn-sol-{puzzle.id}">
              💡 解答・正解を表示
            </button>
            <button class="btn btn-secondary" onclick="toggleHints('{puzzle.id}')" id="btn-hint-{puzzle.id}">
              🔍 論理的ヒントを展開
            </button>
            <button class="btn btn-outline" onclick="copyPuzzleText('{puzzle.id}')">
              📋 テキストをコピー
            </button>
          </div>

          <div class="deduction-box" id="hints-{puzzle.id}" style="display: none;">
            <h4>《論理的解法ステップ》</h4>
            <div class="steps-list">
              {steps_rendered}
            </div>
            <div class="uniqueness-tag">
              ✅ <strong>Z3 SMT 数学的一意性証明済み</strong>: 厳密な制約充足探索により解が唯一であることが検証されています。
            </div>
          </div>
        </div>
        """

    @classmethod
    def render_full_book(cls, puzzles: List[Puzzle], title: str = "極小ヒント虫食い算傑作問題集") -> str:
        """Renders complete standalone HTML document."""
        cards = "\n".join(cls.render_puzzle_html_card(p, i) for i, p in enumerate(puzzles, 1))

        div_count = sum(1 for p in puzzles if p.operation == Operation.DIVISION)
        mul_count = sum(1 for p in puzzles if p.operation == Operation.MULTIPLICATION)
        add_count = sum(1 for p in puzzles if p.operation == Operation.ADDITION)
        sub_count = sum(1 for p in puzzles if p.operation == Operation.SUBTRACTION)

        html = f"""<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} 〜孤独の7から始まる極限覆面算の世界〜</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root {{
      --primary: #1e3a8a;
      --primary-light: #3b82f6;
      --bg-main: #f8fafc;
      --bg-card: #ffffff;
      --border-color: #e2e8f0;
      --text-main: #0f172a;
      --text-muted: #475569;
      --board-bg: #fcfbf9;
      --board-border: #d6cebf;
      --accent-red: #b91c1c;
      --accent-green: #15803d;
      --accent-purple: #6d28d9;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif;
      background-color: var(--bg-main);
      color: var(--text-main);
      line-height: 1.6;
      padding-bottom: 60px;
    }}
    .container {{
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }}
    header.site-header {{
      background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
      color: white;
      padding: 40px 20px;
      text-align: center;
      margin-bottom: 30px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }}
    header h1 {{
      font-size: 2.2rem;
      margin-bottom: 10px;
      letter-spacing: 0.05em;
    }}
    header p.subtitle {{
      font-size: 1.1rem;
      opacity: 0.9;
      max-width: 700px;
      margin: 0 auto 15px;
    }}
    .stats-bar {{
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 15px;
      flex-wrap: wrap;
    }}
    .stat-chip {{
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(4px);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.9rem;
    }}
    
    .filters-bar {{
      background: white;
      padding: 16px 20px;
      border-radius: 12px;
      border: 1px solid var(--border-color);
      margin-bottom: 25px;
      display: flex;
      gap: 15px;
      align-items: center;
      flex-wrap: wrap;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }}
    .filter-btn {{
      padding: 6px 14px;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      background: white;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s;
    }}
    .filter-btn.active {{
      background: var(--primary);
      color: white;
      border-color: var(--primary);
    }}
    .print-btn {{
      margin-left: auto;
      background: #334155;
      color: white;
    }}

    .puzzle-card {{
      background: var(--bg-card);
      border-radius: 12px;
      border: 1px solid var(--border-color);
      padding: 24px;
      margin-bottom: 25px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      transition: transform 0.2s, box-shadow 0.2s;
    }}
    .puzzle-card:hover {{
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.08);
    }}
    .card-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 8px;
    }}
    .header-left {{
      display: flex;
      align-items: center;
      gap: 10px;
    }}
    .puzzle-id {{
      font-weight: 800;
      color: var(--primary);
      font-size: 1.1rem;
    }}
    .op-badge {{
      font-size: 0.8rem;
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: bold;
    }}
    .badge-division {{ background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; }}
    .badge-multiplication {{ background: #faf5ff; color: #7e22ce; border: 1px solid #e9d5ff; }}
    .badge-addition {{ background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; }}
    .badge-subtraction {{ background: #fff7ed; color: #c2410c; border: 1px solid #fed7aa; }}
    .base-badge {{
      font-size: 0.8rem;
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: bold;
      background: #fef3c7;
      color: #92400e;
      border: 1px solid #fde68a;
    }}
    .base-2 {{ background: #e0f2fe; color: #0369a1; border-color: #bae6fd; }}
    .base-8 {{ background: #fef3c7; color: #b45309; border-color: #fde68a; }}
    .base-12 {{ background: #f3e8ff; color: #7e22ce; border-color: #e9d5ff; }}
    .base-16 {{ background: #fee2e2; color: #b91c1c; border-color: #fecaca; }}

    .difficulty-stars {{
      color: #eab308;
      font-weight: bold;
      font-size: 0.95rem;
    }}
    .hint-pill {{
      background: #f1f5f9;
      color: #334155;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.85rem;
    }}
    .puzzle-title {{
      font-size: 1.35rem;
      margin-bottom: 8px;
      color: #0f172a;
    }}
    .puzzle-desc {{
      color: var(--text-muted);
      font-size: 0.95rem;
      margin-bottom: 16px;
    }}

    .board-container {{
      display: flex;
      gap: 20px;
      margin: 16px 0;
      flex-wrap: wrap;
    }}
    .board-column {{
      flex: 1;
      min-width: 300px;
    }}
    .board-label {{
      font-size: 0.85rem;
      font-weight: bold;
      color: var(--text-muted);
      margin-bottom: 6px;
    }}
    .solution-label {{
      color: var(--accent-green);
    }}
    pre.mushikui-board {{
      background: var(--board-bg);
      border: 1.5px solid var(--board-border);
      border-radius: 8px;
      padding: 16px;
      font-family: 'JetBrains Mono', 'Cascadia Code', 'Fira Code', 'Consolas', 'Courier New', monospace;
      font-size: 1.05rem;
      line-height: 1.45;
      letter-spacing: 0;
      overflow-x: auto;
      white-space: pre;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.03);
    }}
    pre.solution-board {{
      border-color: #86efac;
      background: #f0fdf4;
      color: #14532d;
    }}

    .card-controls {{
      display: flex;
      gap: 10px;
      margin-top: 15px;
      flex-wrap: wrap;
    }}
    .btn {{
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: all 0.2s;
    }}
    .btn-primary {{
      background: var(--primary);
      color: white;
    }}
    .btn-primary:hover {{ background: var(--primary-light); }}
    .btn-secondary {{
      background: #f1f5f9;
      color: #334155;
      border: 1px solid #cbd5e1;
    }}
    .btn-secondary:hover {{ background: #e2e8f0; }}
    .btn-outline {{
      background: transparent;
      color: var(--text-muted);
      border: 1px solid #cbd5e1;
    }}
    .btn-outline:hover {{ background: #f8fafc; }}

    .deduction-box {{
      margin-top: 16px;
      background: #f8fafc;
      border-left: 4px solid var(--primary);
      padding: 16px;
      border-radius: 0 8px 8px 0;
    }}
    .deduction-box h4 {{
      margin-bottom: 10px;
      color: var(--primary);
    }}
    .step-item {{
      margin-bottom: 10px;
      font-size: 0.92rem;
    }}
    .step-badge {{
      background: #e2e8f0;
      color: #1e293b;
      font-size: 0.75rem;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: bold;
      margin-right: 6px;
    }}
    .step-detail {{
      margin-left: 20px;
      color: #334155;
    }}
    .uniqueness-tag {{
      margin-top: 12px;
      padding-top: 10px;
      border-top: 1px dashed #cbd5e1;
      font-size: 0.85rem;
      color: #166534;
    }}

    @media print {{
      header.site-header, .filters-bar, .card-controls, .btn {{ display: none !important; }}
      .puzzle-card {{ page-break-inside: avoid; border: 1px solid #999; box-shadow: none; }}
      .solution-column {{ display: none !important; }}
    }}
  </style>
</head>
<body>

  <header class="site-header">
    <div class="container">
      <h1>🧮 極小ヒント虫食い算傑作問題集</h1>
      <p class="subtitle">
        名作「孤独の7」をはじめ、極めて少ない初期ヒント（0個〜2個）から論理的推論だけで答えが一意に確定する珠玉の筆算覆面算集
      </p>
      <div class="stats-bar">
        <div class="stat-chip">総問題数: <strong>{len(puzzles)}</strong> 問</div>
        <div class="stat-chip">割算: <strong>{div_count}</strong> 問</div>
        <div class="stat-chip">掛算: <strong>{mul_count}</strong> 問</div>
        <div class="stat-chip">足算: <strong>{add_count}</strong> 問</div>
        <div class="stat-chip">引算: <strong>{sub_count}</strong> 問</div>
        <div class="stat-chip">全問 Z3 数学的一意性証明済</div>
      </div>
    </div>
  </header>

  <div class="container">
    <div class="filters-bar">
      <span>絞り込み:</span>
      <button class="filter-btn active" onclick="filterCategory('all', this)">すべて表示</button>
      <button class="filter-btn" onclick="filterCategory('division', this)">割算 (除算)</button>
      <button class="filter-btn" onclick="filterCategory('multiplication', this)">掛算 (乗算)</button>
      <button class="filter-btn" onclick="filterCategory('addition', this)">足算 (加算)</button>
      <button class="filter-btn" onclick="filterCategory('subtraction', this)">引算 (減算)</button>
      <button class="filter-btn print-btn" onclick="window.print()">🖨️ 印刷用問題用紙</button>
    </div>

    <div class="puzzle-list">
      {cards}
    </div>
  </div>

  <script>
    function toggleSolution(id) {{
      const sol = document.getElementById('sol-col-' + id);
      const btn = document.getElementById('btn-sol-' + id);
      if (sol.style.display === 'none') {{
        sol.style.display = 'block';
        btn.innerText = '🙈 解答を隠す';
        btn.style.background = '#059669';
      }} else {{
        sol.style.display = 'none';
        btn.innerText = '💡 解答・正解を表示';
        btn.style.background = '';
      }}
    }}

    function toggleHints(id) {{
      const hint = document.getElementById('hints-' + id);
      const btn = document.getElementById('btn-hint-' + id);
      if (hint.style.display === 'none') {{
        hint.style.display = 'block';
        btn.innerText = '🔼 ヒントを閉じる';
      }} else {{
        hint.style.display = 'none';
        btn.innerText = '🔍 論理的ヒントを展開';
      }}
    }}

    function copyPuzzleText(id) {{
      const card = document.getElementById('puzzle-' + id);
      const pre = card.querySelector('.problem-board');
      navigator.clipboard.writeText(pre.innerText).then(() => {{
        alert('【問題 ' + id + '】の盤面テキストをクリップボードにコピーしました！');
      }});
    }}

    function filterCategory(op, el) {{
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
      const cards = document.querySelectorAll('.puzzle-card');
      cards.forEach(c => {{
        if (op === 'all' || c.getAttribute('data-op') === op) {{
          c.style.display = 'block';
        }} else {{
          c.style.display = 'none';
        }}
      }});
    }}
  </script>
</body>
</html>
"""
        return html
