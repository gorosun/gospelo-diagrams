---
name: gospelo-diagrams
description: Generate and edit system architecture diagrams from JSON definitions. Supports incremental editing with eval command. Outputs HTML, SVG, or enriched JSON. Also provides icon catalog search. Use when asked to create, modify, or visualize AWS/Azure/GCP architecture diagrams, or when searching for available icons.
allowed-tools: Read, Bash(bun:*), Bash(gospelo-diagrams:*)
---

# System Diagram Generator Skill

JSON定義からシステムアーキテクチャ図を生成・編集するスキルです。AWS、Azure、GCP、その他テックスタックのアイコンをサポートしています。

## When to Use

Activate this skill when the user asks to:

- Create a system architecture diagram
- Modify an existing diagram (add/remove/move nodes)
- Generate infrastructure visualization
- Create AWS/Azure/GCP architecture diagrams
- Export diagram to HTML, SVG, or enriched JSON
- Search for available icons (e.g., "Lambdaのアイコン名は？", "S3関連のアイコンを探して")

## Output Commands

### For Web Claude (Artifact Display)

Web版Claudeでは`preview`コマンドでBase64埋め込みHTMLを生成し、Artifactとして表示:

```bash
# プレビューHTML生成（Base64埋め込み、Confidentialバッジ付き）
bun bin/cli.ts preview diagram.json
# -> diagram_preview.html
```

### For Claude Code (Local Editing)

Claude Codeでは`editor`コマンドで編集可能なHTMLを生成:

```bash
# 編集可能HTML生成
bun bin/cli.ts editor diagram.json
# -> diagram_editor.html
```

出力後、ユーザーに確認メッセージを表示:
- 既にブラウザで開いている場合: タブをリロード
- 初回の場合: `open diagram_editor.html` を実行

## Quick Start

```bash
# ダイアグラムの構造を確認（editorをブラウザで開く）
gospelo-diagrams --open --diagram system.json

# HTML出力
gospelo-diagrams --output html --diagram system.json  # -> _editor.html
bun bin/cli.ts preview system.json                    # -> _preview.html
gospelo-diagrams --output svg --diagram system.json   # -> .svg

# ノード追加（基準ノードの下に配置）
gospelo-diagrams --insert-below lambda --node '{"id":"db","icon":"aws:dynamodb","label":"DynamoDB"}' --diagram system.json

# ノード更新
gospelo-diagrams --update-node lambda --node '{"label":"Updated Lambda","sublabel":"Python 3.12"}' --diagram system.json

# ノード削除
gospelo-diagrams --remove-node old_node --diagram system.json
```

## Eval Command (Advanced)

最も柔軟な方法。`b` はDiagramBuilderインスタンスです。

```bash
# ノードを追加
bun bin/cli.ts eval diagram.json 'b.addNode({id:"lambda",icon:"aws:lambda",label:"Lambda",position:[400,300]})'

# 基準ノードの右にノードを追加
bun bin/cli.ts eval diagram.json 'b.insertRight("api",{id:"lambda",icon:"aws:lambda",label:"Lambda"})'

# 複数操作をチェーン
bun bin/cli.ts eval diagram.json 'b.addNode({...}).addConnection({from:"a",to:"b"})'
```

## Diagram JSON Example

```json
{
  "title": "My Architecture",
  "nodes": [
    {"id": "api", "icon": "aws:api_gateway", "label": "API Gateway", "position": [200, 150]},
    {"id": "lambda", "icon": "aws:lambda", "label": "Lambda", "position": [400, 150]}
  ],
  "connections": [
    {"from": "api", "to": "lambda"}
  ]
}
```

## Supported Icon Providers

| Provider | Prefix   | Example                    |
| -------- | -------- | -------------------------- |
| AWS      | `aws:`   | `aws:lambda`, `aws:s3`, `aws:dynamodb` |
| Azure    | `azure:` | `azure:functions`          |
| GCP      | `gcp:`   | `gcp:cloud_functions`      |
| Tech     | `tech:`  | `tech:python`, `tech:react`|

## Icon Catalog Commands

```bash
# アイコン検索（全プロバイダーから）
gospelo-diagrams --icon-search lambda
gospelo-diagrams --icon-search "cloud function"  # AND検索

# カタログHTMLのパスを表示
gospelo-diagrams --icon-catalog

# 特定プロバイダーのみ
gospelo-diagrams --icon-catalog aws

# ブラウザで開く
gospelo-diagrams --icon-catalog --open
```

## AI Response Guidelines

ダイアグラム生成後、ユーザーに編集の機会を提供する:

1. **プレビュー生成後**: Artifactで表示し、ユーザーに確認を促す
   - 「ダイアグラムを作成しました。どこか編集しますか？」
   - 「プレビューを生成しました。ノードの追加・削除・移動などご希望があればお知らせください。」

2. **編集のワークフロー**:
   - ユーザーの編集リクエストを受ける
   - evalコマンドまたはフラグスタイルコマンドでJSONを更新
   - 再度previewを生成してArtifactで表示
   - 「更新しました。他に変更はありますか？」

3. **編集完了後**:
   - ユーザーが満足したら、最終版のpreview HTMLを提供
   - 必要に応じてダウンロード方法を案内

## References

詳細なコマンドリファレンスは `references/` ディレクトリを参照:

- `references/cli-reference.md` - 全CLIコマンド一覧
- `references/builder-api.md` - DiagramBuilder APIリファレンス
- `references/schema.md` - JSON Schema詳細
