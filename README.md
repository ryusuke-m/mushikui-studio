# 🧮 極小ヒント虫食い算スタジオ (Mushikui Studio)

[![Deploy to GitHub Pages](https://github.com/ryusuke-m/mushikui-studio/actions/workflows/deploy.yml/badge.svg)](https://github.com/ryusuke-m/mushikui-studio/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-GitHub%20Pages-blue.svg)](https://ryusuke-m.github.io/mushikui-studio/)
![Python 3.10+](https://img.shields.io/badge/python-3.10%2B-blue.svg)
![Z3 SMT Solver](https://img.shields.io/badge/solver-Z3%20SMT%205.1-orange.svg)
![Puzzles](https://img.shields.io/badge/curated%20puzzles-36%20unique-green.svg)
![License](https://img.shields.io/badge/license-MIT-purple.svg)

> **〜伝説の名作『孤独の7』から始まる極限覆面算の世界〜**  
> わずか0〜2個の数字しか書かれていない初期盤面から、筆算の段の桁数・引き算・繰り上がり・繰り下がりの数学的制約だけで全ての数字が一意に定まる珠玉の虫食い算（覆面算）自動作成・検証・問題集提示システム。

---

## 📖 概要と背景：「孤独の7」とは

### 1. 歴史的傑作『孤独の7』
1922年、イギリスの雑誌『ストランド・マガジン』に掲載された **E・F・オドリング（E. F. Odling）** 考案の割り算覆面算です。日本では海野十三（筆名：佐野昌一）の『虫喰ひ算大會』（1946年）で広く知られるようになりました。

問題の盤面には、商の千の位に**たった1つの「7」**しか書かれていません。それ以外の数字はすべて空欄（`□`）です。しかし、筆算の段の桁数や二重桁下げの構造を論理的に追うことで、**総当たり（しらみつぶし）を一切せずに**、以下の計算式であることが唯一無二に証明されます。

$$12,128,316 \div 124 = 97,809$$

```text
              □ 7 □ □ □
      ┌────────────────
□ □ □ │ □ □ □ □ □ □ □ □
        □ □ □ □
       ─────────
            □ □ □
            □ □ □
           ───────
            □ □ □ □
              □ □ □
             ───────
                □ □ □ □
                □ □ □ □
               ─────────
                      0
```

この作品の衝撃的な美しさに敬意を表し、提示されるヒントが1文字しかない極限の虫食い算を**「孤独のn」**と呼ぶようになりました。

### 2. 本プロジェクトの目的
本プロジェクトは、この「孤独の7」のように**極めて少ない初期ヒント（0個〜2個）から答えが一意に絞り込める虫食い算**を体系的に研究・生成・検証する総合エンジンおよび問題集です。
割り算だけでなく、**掛け算（下平和夫氏の『新数学事典』掲載の名作「孤独の8」等）・足し算・引き算**の筆算にも拡張し、全問について **Microsoft Research 製 Z3 SMT 定理証明ソルバーによる数学的一意性の完全証明** を付与しています。

---

## 🌟 主な機能と特徴

1. **数学的一意性の100%保証 (Z3 SMT Solver Integration)**
   - 全問について Z3 SMT ソルバーにより制約充足探索を実施。
   - 解がちょうど 1 つ（余剰解なし、不能解なし）であることを厳密に証明済み。
2. **4大演算 ＋ 多進法（N進法）の完全サポート（全36問）**
   - **割り算（除算）**: オドリングの孤独の7、千位の孤独、十位の孤独、孤独の8、孤独の9、除数末尾の7など（13問）
   - **掛け算（乗算）**: 名作「孤独の8」（112×89=9968）、二つのヒント「万の境界線」、2桁乗算など（9問）
   - **足し算（加算）**: 「孤独の1」足し算（999+1=1000）、繰り上がりの境界、九十八の残響など（6問）
   - **引き算（減算）**: 「孤独の1」引き算（1000-999=1）、繰り下がり二重連鎖、「孤独の8」引き算など（8問）
3. **N進法（多進法）虫食い算の数学的探究**
   - **8進法**: 『8進法における孤独の7』（乗算篇・除算篇）
   - **16進法**: 『16進法における孤独のF』（乗算篇・除算篇）、『16進法における孤独の1』（減算篇）
   - **12進法**: 『12進法における孤独のB』（乗算篇）
   - **2進法**: 『0文字覆面算』（盤面にヒントが1文字もない完全空欄□から筆算の形状だけで全桁が定まる究極の覆面算：乗算・除算・加算・減算）
4. **筆算形式のグラフィカル表示**
   - ターミナル・Markdown 用の等幅 Unicode 筆算レンダラー（`┌───`, `│`, `─────`）
   - スタンドアロン HTML 問題集（`PROBLEM_BOOK.html`）
   - Markdown 問題集（`PROBLEM_BOOK.md`）
5. **インタラクティブ Web アプリケーション (`web/index.html`)**
   - ブラウザ上で空欄（`□`）をクリックし、直接数字・16進文字（0〜9, A〜F）を入力して解けるデジタル問題集。
   - 10進法/2進法/8進法/12進法/16進法フィルター、0ヒント/1ヒント/2ヒントフィルター。
   - 即時判定、ステップごとの論理ヒント表示、正解展開、入力リセット。
   - **印刷用ワークシートモード**: 印刷ボタン（または `Ctrl+P`）を押すと、解答やボタンが自動で隠れ、綺麗な紙面プリント用ワークシートに早変わりします。
6. **充実の CLI ツール (`mushikui_cli.py`)**
   - 問題一覧表示、個別問題の盤面・解説表示、一意性一括検証、Markdown / HTML への一括エクスポート。
7. **CI/CD 自動デプロイ (`.github/workflows/deploy.yml`)**
   - リポジトリに push すると自動で全問の Z3 一意性検証とテストを実行し、GitHub Pages へ即座にデプロイされます。

---

## 🚀 クイックスタート

### 動作要件
- Python 3.10 以上
- `uv` または `pip` (`z3-solver` を使用)
- Web ブラウザ (Google Chrome, Firefox, Safari, Edge)

### 1. インタラクティブ Web アプリをローカルで起動する
`web/` ディレクトリは静的ファイルのみで構成されているため、ローカルサーバーですぐに動きます。

```bash
# ローカルHTTPサーバーで閲覧する場合:
python3 -m http.server 8080 -d web

# ブラウザで http://localhost:8080 を開く
```

ブラウザで開くと以下の機能を利用できます：
- **問題集タブ**: 全36問のカード一覧。演算種別、基数（進法）、難易度（★1〜★5）、ヒント数で絞り込み可能。
- **インタラクティブ挑戦タブ**: 画面上で数字や英字をマスに入力し、答え合わせや論理ヒントの閲覧が可能。
- **解説タブ**: 『孤独の7』の歴史的背景と人間の論理的思考プロセスを詳解。
- **書籍版HTML**: 単一ファイルで全36問を網羅した印刷・保存対応の HTML 問題集。
- **印刷用問題用紙**: ワンクリックで解答を伏せたプリント用紙を出力。

---

## 🛠️ CLI ツール (`mushikui_cli.py`) の使い方

```bash
# 依存パッケージのインストール
pip install z3-solver

# 全問題の一覧を表示
python3 mushikui_cli.py list

# 割り算のみ一覧表示
python3 mushikui_cli.py list --op division

# 指定した問題の盤面・ヒント・解答を表示
python3 mushikui_cli.py show DIV-001

# 全36問の一意性を Z3 SMT ソルバーで一括検証
python3 mushikui_cli.py verify

# 最新の Markdown 問題集を生成
python3 mushikui_cli.py export-markdown -o PROBLEM_BOOK.md

# 最新のスタンドアロン HTML 問題集を生成
python3 mushikui_cli.py export-html -o PROBLEM_BOOK.html
```

---

## 📚 収録問題カタログ（全36問の概要）

全問とも **Z3 SMT ソルバーによって数学的に解が唯一であることが厳密に証明済み** です。

### 1. 10進法・割り算篇 (10問)
- **DIV-001**: E・F・オドリングの不朽の名作『孤独の7』 (★5, ヒント1個)
- **DIV-002**: 孤独の7・第二章「千位の孤独」 (★4, ヒント1個)
- **DIV-003**: 孤独の7・第三章「十位の孤独」 (★4, ヒント1個)
- **DIV-004**: 孤独の8・割り算篇「千位の8」 (★4, ヒント1個)
- **DIV-005**: 孤独の8・割り算篇「百位の8」 (★4, ヒント1個)
- **DIV-006**: 孤独の8・割り算篇「一位の8」 (★4, ヒント1個)
- **DIV-007**: 孤独の8・手軽な2桁商「極小の除数」 (★3, ヒント1個)
- **DIV-008**: 孤独の9・入門篇「二桁の小宇宙」 (★2, ヒント1個)
- **DIV-009**: 孤独の7・除数篇「末尾の七」 (★3, ヒント1個)
- **DIV-010**: 奇跡の二文字「2と9のシンメトリー」 (★3, ヒント2個)

### 2. 10進法・掛け算篇 (5問)
- **MUL-001**: 名作「孤独の8」掛け算 (★4, ヒント1個)
- **MUL-002**: 二つのヒント「万の境界線」 (★3, ヒント2個)
- **MUL-003**: 2桁乗算の孤独な乗数「91」 (★2, ヒント2個)
- **MUL-004**: 末尾2と80台の乗算 (★3, ヒント2個)
- **MUL-005**: 極小乗算「12の倍数」 (★2, ヒント2個)

### 3. 10進法・足し算篇 (5問)
- **ADD-001**: 「孤独の1」足し算 (★1, ヒント1個)
- **ADD-002**: 繰り上がりの境界「0と1の手がかり」 (★2, ヒント2個)
- **ADD-003**: 「九十八の残響」 (★3, ヒント2個)
- **ADD-004**: 繰り上がりの連鎖「零と八の共鳴」 (★2, ヒント2個)
- **ADD-005**: 和の制約「一と九の手がかり」 (★2, ヒント2個)

### 4. 10進法・引き算篇 (6問)
- **SUB-001**: 「孤独の1」引き算（至高の差1） (★2, ヒント1個)
- **SUB-002**: 「孤独の1」引き算（末尾一の宿命） (★2, ヒント1個)
- **SUB-003**: 「孤独の8」引き算 (★2, ヒント1個)
- **SUB-004**: 繰り下がり二重連鎖「零一の減算」 (★3, ヒント2個)
- **SUB-005**: 繰り下がりの極限「九と一の減算」 (★2, ヒント2個)
- **SUB-006**: 繰り下がりの境界「八と零の減算」 (★2, ヒント2個)

### 5. N進法（多進法）篇 (10問)
- **BASE8-MUL-001**: 8進法における『孤独の7』（乗算篇） (★3, ヒント1個)
- **BASE8-DIV-001**: 8進法における『孤独の7』（除算篇） (★3, ヒント1個)
- **BASE16-MUL-001**: 16進法における『孤独のF』（乗算篇） (★3, ヒント1個)
- **BASE16-DIV-001**: 16進法における『孤独のF』（除算篇） (★3, ヒント1個)
- **BASE12-MUL-001**: 12進法における『孤独のB』（乗算篇） (★3, ヒント1個)
- **BASE2-MUL-001**: 2進法の極限『0文字覆面算』（完全空欄乗算） (★3, ヒント0個)
- **BASE2-ADD-001**: 2進法の極限『0文字加算』（繰り上がり連鎖） (★2, ヒント0個)
- **BASE2-SUB-001**: 2進法の極限『0文字減算』（桁借り連鎖） (★2, ヒント0個)
- **BASE2-DIV-001**: 2進法の『0文字除算』（完全空欄長除法） (★3, ヒント0個)
- **BASE16-SUB-001**: 16進法における『孤独の1』（減算篇） (★2, ヒント1個)

※ 全36問の完全な問題・ヒント・解答は [`PROBLEM_BOOK.md`](PROBLEM_BOOK.md) または [`PROBLEM_BOOK.html`](PROBLEM_BOOK.html) をご覧ください。

---

## 🧪 テストの実行

```bash
# 全テストスイートの実行 (Z3 ソルバー、オドリング孤独の7検証、全カタログ一意性検証)
uv run --with z3-solver python3 -m unittest discover -s tests -p "test_*.py" -v
# または
python3 -m unittest discover -s tests -p "test_*.py" -v
```

出力例:
```text
test_division_generator_creates_valid_structure ... ok
test_minimalizer_preserves_uniqueness ... ok
test_multiplication_generator_creates_valid_structure ... ok
test_original_lonely7_uniqueness ... ok
test_row_formatting ... ok
test_addition_lonely1 ... ok
test_multiplication_lonely8 ... ok
test_subtraction_lonely1 ... ok
test_subtraction_lonely8 ... ok
test_all_catalog_puzzles_are_unique ... ok
test_base_conversions ... ok
test_base_n_puzzles_exist ... ok
test_zero_clue_puzzles_unique ... ok

----------------------------------------------------------------------
Ran 13 tests in 1.123s

OK
```

---

## 📁 ディレクトリ構成

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 自動テスト＆Pagesデプロイ
├── mushikui_engine/           # コア推論・生成・検証エンジン
│   ├── models.py              # パズル、行、推論ステップのデータモデル
│   ├── catalog.py             # 全36問のマスターカタログ（ネタバレ排除済み）
│   ├── explainer.py           # 論理的思考プロセスの解説生成
│   ├── solvers/               # Z3 SMT ソルバー実装群
│   │   ├── division.py        # 割り算ソルバー（二重桁下げ対応）
│   │   ├── multiplication.py  # 掛け算ソルバー
│   │   ├── addition.py        # 足し算ソルバー
│   │   ├── subtraction.py     # 引き算ソルバー
│   │   └── verifier.py        # 統一的一意性検証インターフェース
│   ├── generators/            # パズル生成・盤面配置エンジン
│   │   ├── division_gen.py    # 割り算盤面生成（等幅厳密配置）
│   │   ├── multiplication_gen.py # 掛け算盤面生成
│   │   ├── addition_gen.py    # 足し算盤面生成
│   │   ├── subtraction_gen.py # 引き算盤面生成
│   │   └── minimalizer.py     # 極小ヒント探索
│   └── renderers/             # 筆算レンダラー
│       ├── text_renderer.py   # テキスト・Markdown 筆算整形
│       ├── svg_renderer.py    # ベクター SVG 出力
│       └── html_renderer.py   # Web・印刷用 HTML 生成
├── web/                       # インタラクティブ Web アプリケーション (GitHub Pages 公開対象)
│   ├── index.html             # メイン HTML (問題集 & デジタル解答スタジオ)
│   ├── style.css              # 等幅フォント対応スタイルシート (印刷スタイル内包)
│   ├── app.js                 # インタラクティブ入力・判定・ヒント制御
│   ├── puzzles_data.js        # カタログ全問の JSON データ
│   └── PROBLEM_BOOK.html      # 書籍版 HTML (単体で全問閲覧可能)
├── tests/                     # 自動テストスイート
│   ├── test_solvers.py        # 各ソルバーの単体テスト
│   ├── test_lonely7.py        # 『孤独の7』の完全復元・一意性専用テスト
│   ├── test_uniqueness.py     # カタログ全問の一意性検証テスト
│   └── test_generators.py     # 生成器・レイアウト構築テスト
├── requirements.txt          # Python 依存パッケージ定義
├── mushikui_cli.py            # 統合コマンドラインツール
├── PROBLEM_BOOK.md            # 完全問題集 (Markdown 版・36問)
├── PROBLEM_BOOK.html          # 完全問題集 (単一 HTML 版・36問)
└── README.md                  # プロジェクト総合解説書（本ファイル）
```

---

## 📜 ライセンス & クレジット

- **原典**: E. F. Odling (1922, *The Strand Magazine*), 佐野昌一（海野十三）『虫喰ひ算大會』（1946年, 青空文庫パブリックドメイン）, 下平和夫『新数学事典』
- **制作**: Mushikui Cryptarithm Engine Team
- **ライセンス**: MIT License
