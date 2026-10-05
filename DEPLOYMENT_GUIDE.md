# 🚀 GitHub Pages 公開 & ホームページ連携手順書

本手順書は、極小ヒント虫食い算スタジオ（Mushikui Studio）を **GitHub の新規リポジトリとして作成・公開し、ご自身のホームページ（Hugo Blox on GitHub Pages）からリンク・統合する手順** を分かりやすくまとめたものです。

すでにローカル環境には以下の準備が完了しています：
- ✅ 全36問の盤面・解法・Z3一意性検証済みデータ
- ✅ Web アプリケーション本体 (`web/`)
- ✅ 自動テスト＆Pagesデプロイ用 GitHub Actions ワークフロー (`.github/workflows/deploy.yml`)
- ✅ 単体テストスイート (`tests/`)
- ✅ プロジェクト解説書 (`README.md`)

あとは **「GitHub でリポジトリを作成して push するだけ」** で世界中に公開されます。

---

## 📋 全体の流れ（3ステップ・所要時間 約3分）

1. **GitHub で空の新規リポジトリを作成する**
2. **ローカルからコードを push する**
3. **GitHub Pages の設定で「GitHub Actions」を選ぶ**

---

## 🛠️ 詳細手順

### ステップ 1: GitHub で新規リポジトリを作成する

1. ブラウザで [GitHub](https://github.com/) にアクセスし、ログインします。
2. 画面右上の **「+」** アイコンをクリックし、**「New repository」** を選択します。
3. 以下の項目を設定します：
   - **Repository name**: `mushikui-studio`（または `lonely7-puzzle` などお好みの名前）
   - **Description**: `極小ヒント虫食い算スタジオ 〜伝説の名作『孤独の7』から始まる極限覆面算の世界〜`（任意）
   - **Public / Private**: **Public** を選択（※GitHub Pages を無料利用するため）
   - **Initialize this repository with**:
     - ⚠️ **「Add a README file」のチェックを外す**
     - ⚠️ **「Add .gitignore」は None のまま**
     - ⚠️ **「Choose a license」は None のまま**
     *(空のリポジトリを作成します)*
4. 一番下の **「Create repository」** ボタンをクリックします。

---

### ステップ 2: ローカルから GitHub へ push する

ターミナル（本プロジェクトのルートディレクトリ）で、以下のコマンドを実行します：

```bash
# 1. 作成した GitHub リポジトリを origin として追加
# （※ <あなたのユーザー名> と <リポジトリ名> はご自身のものに置き換えてください）
git remote add origin https://github.com/<あなたのユーザー名>/mushikui-studio.git

# 2. GitHub へ push
git push -u origin main
```

> **Note**: もし GitHub の認証（Personal Access Token または SSH 鍵）を求められた場合は、ご自身の GitHub 認証情報を入力してください。

---

### ステップ 3: GitHub Pages のデプロイ元を設定する

push が完了したら、GitHub 上のリポジトリページで GitHub Pages を有効化します。

1. GitHub リポジトリの上部メニューから **「Settings」**（歯車アイコン）をクリックします。
2. 左サイドバーの **「Code and automation」** の中にある **「Pages」** をクリックします。
3. **「Build and deployment」** の設定項目にある **「Source」** ドロップダウンを開きます：
   - デフォルトの「Deploy from a branch」から **「GitHub Actions」** に変更します。
4. 設定はこれだけで完了です！

> **自動デプロイの仕組み**:
> `.github/workflows/deploy.yml` が自動的に起動し、以下の処理がクラウド上で実行されます：
> 1. Z3 SMT ソルバーによる全36問の数学的一意性検証
> 2. 全単体テストの実行
> 3. 最新の書籍版 HTML の同期
> 4. `web/` ディレクトリを GitHub Pages へ安全にデプロイ
> 
> リポジトリの **「Actions」** タブを開くと、進捗状況（約1分で完了）を確認できます。

---

### ステップ 4: 公開されたサイトを確認する

デプロイが完了すると、以下の URL で全世界にサイトが公開されます：

$$\text{https://<あなたのユーザー名>.github.io/<リポジトリ名>/}$$

- **Web アプリ本体**: `https://<あなたのユーザー名>.github.io/mushikui-studio/`
- **書籍版 HTML（全36問単一ページ）**: `https://<あなたのユーザー名>.github.io/mushikui-studio/PROBLEM_BOOK.html`

スマートフォンや PC のブラウザからアクセスし、インタラクティブ挑戦や印刷用ワークシート機能が正常に動作することをご確認ください。

---

## 🌐 ご自身のホームページ（Hugo Blox）への連携方法

Hugo Blox（Academic テーマ）で構築されたご自身のホームページに組み込むための、おすすめの連携パターンです。お好みの方法をお選びいただけます。

### パターン A: ナビゲーションメニューにリンクを追加する（手軽・おすすめ）

サイト上部のメニューバーに「虫食い算」や「Puzzles」を追加し、訪問者がワンクリックで飛べるようにします。

Hugo Blox のリポジトリ内の `config/_default/menus.yaml` に以下を追記します：

```yaml
main:
  - name: 虫食い算スタジオ
    url: https://<あなたのユーザー名>.github.io/mushikui-studio/
    weight: 60
```

---

### パターン B: ポートフォリオ（Projects）カードとして掲載する（見栄え抜群★）

ご自身の HP の「Projects」セクションに、サムネイル付きの作品カードとして追加します。

Hugo Blox の `content/project/mushikui-studio/index.md` を新規作成します：

```markdown
---
title: 極小ヒント虫食い算スタジオ (Mushikui Studio)
summary: 伝説の名作『孤独の7』から始まる極限覆面算の世界。Z3 SMTソルバーによる数学的一意性証明とインタラクティブWebスタジオ。
tags:
  - Mathematics
  - Cryptarithm
  - Python
  - Z3 SMT Solver
  - Web App
date: "2026-10-05T00:00:00Z"

# 外部リンク
links:
  - icon: globe
    icon_pack: fas
    name: Live Demo
    url: https://<あなたのユーザー名>.github.io/mushikui-studio/
  - icon: github
    icon_pack: fab
    name: Source Code
    url: https://github.com/<あなたのユーザー名>/mushikui-studio
---

1922年に発表された名作『孤独の7』をはじめ、たった1〜2個のヒントから筆算の構造だけで全ての数字が一意に定まる珠玉の覆面算・虫食い算を体系的に作成・検証しました。

### 主な特徴
- **Z3 SMT 定理証明ソルバーによる数学的一意性の完全保証**（全36問）
- 10進法に加え、コンピュータサイエンスで重要な **2進法・8進法・12進法・16進法** にも対応
- ブラウザ上で空欄をクリックして直接数字を入力できるインタラクティブWebアプリ
- 印刷して解けるワークシート生成機能

[👉 虫食い算スタジオで遊ぶ (Live Demo)](https://<あなたのユーザー名>.github.io/mushikui-studio/)
```

---

### パターン C: ブログ記事（Post）の中で直接遊べるように埋め込む（インライン iframe）

Hugo Blox のブログ記事や解説記事の中で、**記事の本文に直接アプリの画面を埋め込む** ことも可能です。

Hugo Blox の記事 Markdown 内に、以下の HTML をそのまま記述します：

```html
### 🎮 実際にブラウザで挑戦してみる

以下の埋め込み画面から直接数字を入力して解くことができます：

<iframe 
  src="https://<あなたのユーザー名>.github.io/mushikui-studio/" 
  width="100%" 
  height="750px" 
  style="border: 2px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);"
  loading="lazy">
</iframe>

<p style="text-align: right; font-size: 0.9em;">
  <a href="https://<あなたのユーザー名>.github.io/mushikui-studio/" target="_blank" rel="noopener">
    ↗ 全画面で開く
  </a>
</p>
```

訪問者はあなたの HP から離れることなく、記事の中でパズルを直接クリックして遊ぶことができます。

---

## 🔄 今後の更新フロー（問題の追加や修正時）

今後、新しい問題を追加したりコードを修正した場合は、ローカルで変更して push するだけで、自動的にテストが走り GitHub Pages に最新版が反映されます：

```bash
git add .
git commit -m "feat: add new puzzle"
git push
```

CI/CD パイプラインが数学的一意性の検証を自動で行ってくれるため、安心してコンテンツを拡張できます。
