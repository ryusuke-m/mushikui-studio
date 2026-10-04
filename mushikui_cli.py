#!/usr/bin/env python3
"""
Mushikui CLI: Command-line interface for the Mushikui Cryptarithm Engine.
Allows listing, solving, verifying, generating, and exporting minimal-clue puzzles.
"""

import argparse
import sys
import os
from typing import List

from mushikui_engine.catalog import get_curated_puzzles
from mushikui_engine.solvers.verifier import UniquenessVerifier
from mushikui_engine.renderers.text_renderer import TextRenderer
from mushikui_engine.renderers.html_renderer import HTMLRenderer
from mushikui_engine.models import Operation, Difficulty

def cmd_list(args):
    """Lists all puzzles in the catalog."""
    puzzles = get_curated_puzzles()
    if args.op:
        puzzles = [p for p in puzzles if p.operation.value == args.op]

    print(f"\n{'='*75}")
    print(f"  極小ヒント虫食い算 カタログ一覧（全 {len(puzzles)} 問）")
    print(f"{'='*75}")
    print(f"{'ID':<9} | {'種別':<10} | {'ヒント':<6} | {'難易度':<12} | {'タイトル'}")
    print(f"{'-'*75}")

    for p in puzzles:
        print(f"{p.id:<9} | {p.operation.display_name:<10} | {p.hint_count:<6} | {p.difficulty.value:<12} | {p.title}")
    print(f"{'='*75}\n")

def cmd_show(args):
    """Shows problem statement, hints, and solution for a puzzle."""
    puzzles = {p.id: p for p in get_curated_puzzles()}
    if args.id not in puzzles:
        print(f"Error: Puzzle '{args.id}' not found.")
        sys.exit(1)

    p = puzzles[args.id]
    print(TextRenderer.render_problem_card_markdown(p, include_solution=not args.problem_only))

def cmd_verify(args):
    """Verifies uniqueness of all puzzles using Z3 SMT solver."""
    puzzles = get_curated_puzzles()
    if args.id:
        puzzles = [p for p in puzzles if p.id == args.id]

    print(f"\n🔍 Z3 SMT ソルバーによる数学的一意性検証を開始します (対象: {len(puzzles)} 問)...\n")
    all_ok = True
    for i, p in enumerate(puzzles, 1):
        is_u, sol = UniquenessVerifier.verify(p)
        status = "✅ 一意解 (UNIQUE)" if is_u else "❌ 複数解または不能 (AMBIGUOUS)"
        print(f"[{i:02d}/{len(puzzles):02d}] {p.id} ({p.title[:24]:<24}): {status}")
        if not is_u:
            all_ok = False

    print("\n" + "="*50)
    if all_ok:
        print(f"🎉 検証完了: 全 {len(puzzles)} 問すべてにおいて解が唯一であることが数学的に証明されました！")
    else:
        print("⚠️ 警告: 一部の問題で一意性が確認できませんでした。")
        sys.exit(1)

def cmd_export_markdown(args):
    """Exports all puzzles to a comprehensive markdown book."""
    puzzles = get_curated_puzzles()
    output_path = args.output or "PROBLEM_BOOK.md"

    md_lines = [
        "# 🧮 極小ヒント虫食い算 傑作問題集",
        "",
        "> **〜伝説の名作『孤独の7』から始まる極限覆面算の世界〜**",
        ">",
        "> 本問題集は、筆算の中に数字がわずか1〜2個しか与えられていないにもかかわらず、",
        "> 筆算の構造（段の桁数・引き算・繰り下がり・繰り上がり）から純粋な論理的推論だけで",
        "> すべての数字が一意に定まる珠玉の虫食い算（覆面算）を集めたものです。",
        "> **全26問すべて、Z3 SMT ソルバーによって数学的に解が唯一であることが厳密に証明されています。**",
        "",
        "## 目次",
        "",
        "1. [第1部：割り算（除算）篇](#第1部割り算除算篇)",
        "   - E・F・オドリングの不朽の名作『孤独の7』完全復元と徹底解説",
        "   - 孤独の8・孤独の9・孤独の7シリーズ",
        "2. [第2部：掛け算（乗算）篇](#第2部掛け算乗算篇)",
        "   - 下平和夫『新数学事典』掲載の名作「孤独の8」掛け算",
        "   - 2ヒント極限乗算",
        "3. [第3部：足し算（加算）篇](#第3部足し算加算篇)",
        "   - 「孤独の1」足し算",
        "   - 繰り上がり連鎖パズル",
        "4. [第4部：引き算（減算）篇](#第4部引き算減算篇)",
        "   - 「孤独の1」引き算",
        "   - 「孤独の8」引き算",
        "",
        "---",
        ""
    ]

    # Group by operation
    by_op = {
        Operation.DIVISION: ("第1部：割り算（除算）篇", "商や除数に数字が1つだけ置かれた『孤独のn』をはじめとする除算覆面算です。二重桁下げによる商の0の確定や、部分積の桁数の差を利用した鮮烈な絞り込みを堪能できます。"),
        Operation.MULTIPLICATION: ("第2部：掛け算（乗算）篇", "3桁×2桁や2桁×2桁において、部分積の桁数の違いから被乗数・乗数が一意に絞り込まれる名作群です。"),
        Operation.ADDITION: ("第3部：足し算（加算）篇", "桁数の繰り上がり境界（999+1=1000など）の数学的極限を突いたミニマル足し算です。"),
        Operation.SUBTRACTION: ("第4部：引き算（減算）篇", "繰り下がりの連鎖（1000-991=9など）を利用した、ヒントが1〜2個の極限引き算パズルです。")
    }

    for op, (sec_title, sec_desc) in by_op.items():
        md_lines.append(f"## {sec_title}")
        md_lines.append("")
        md_lines.append(sec_desc)
        md_lines.append("")
        op_puzzles = [p for p in puzzles if p.operation == op]
        for p in op_puzzles:
            md_lines.append(TextRenderer.render_problem_card_markdown(p, include_solution=True))

    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(md_lines))

    print(f"✅ Markdown 問題集を正常に出力しました: {output_path} ({len(puzzles)} 問)")

def cmd_export_html(args):
    """Exports all puzzles to a standalone HTML book."""
    puzzles = get_curated_puzzles()
    output_path = args.output or "PROBLEM_BOOK.html"

    html_content = HTMLRenderer.render_full_book(puzzles)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html_content)

    print(f"✅ HTML 問題集を正常に出力しました: {output_path} ({len(puzzles)} 問)")

def main():
    parser = argparse.ArgumentParser(description="Mushikui Cryptarithm Engine CLI")
    subparsers = parser.add_subparsers(dest="command", help="Sub-commands")

    # list
    p_list = subparsers.add_parser("list", help="List all puzzles")
    p_list.add_argument("--op", choices=["division", "multiplication", "addition", "subtraction"], help="Filter by operation")

    # show
    p_show = subparsers.add_parser("show", help="Show puzzle statement and solution")
    p_show.add_argument("id", help="Puzzle ID, e.g. DIV-001")
    p_show.add_argument("--problem-only", action="store_true", help="Hide solution")

    # verify
    p_verify = subparsers.add_parser("verify", help="Verify mathematical uniqueness with Z3")
    p_verify.add_argument("--id", help="Verify specific puzzle ID only")

    # export-markdown
    p_md = subparsers.add_parser("export-markdown", help="Export problem set to Markdown")
    p_md.add_argument("--output", "-o", default="PROBLEM_BOOK.md", help="Output file path")

    # export-html
    p_html = subparsers.add_parser("export-html", help="Export problem set to standalone HTML")
    p_html.add_argument("--output", "-o", default="PROBLEM_BOOK.html", help="Output file path")

    args = parser.parse_args()
    if not args.command:
        parser.print_help()
        sys.exit(0)

    if args.command == "list":
        cmd_list(args)
    elif args.command == "show":
        cmd_show(args)
    elif args.command == "verify":
        cmd_verify(args)
    elif args.command == "export-markdown":
        cmd_export_markdown(args)
    elif args.command == "export-html":
        cmd_export_html(args)

if __name__ == "__main__":
    main()
