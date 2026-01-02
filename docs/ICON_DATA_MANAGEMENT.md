# アイコンデータ管理ガイド

このドキュメントでは、gospelo-diagramsのアイコンデータの管理方法について説明します。

## ディレクトリ構造

```
gospelo-diagrams/
├── .icons/                    # 外部アイコンリポジトリ（.gitignore対象）
│   ├── aws-icons/             # AWS公式アイコン
│   ├── azure-icons/           # Azure公式アイコン
│   ├── gcp-icons/             # Google Cloud公式アイコン
│   └── tech-stack-icons/      # Simple Icons
│
├── src/icons/                 # アイコンカタログJSON（Git管理対象）
│   ├── _providers.json        # プロバイダー一覧とメタデータ
│   ├── aws/
│   │   ├── _meta.json         # ソースリポジトリ情報
│   │   ├── _index.json        # カテゴリ一覧
│   │   ├── compute.json       # カテゴリ別アイコン
│   │   └── ...
│   ├── azure/
│   ├── google-cloud/
│   └── tech-stack/
│
├── src/data/
│   ├── iconCatalog.ts         # 生成されるTypeScriptカタログ
│   └── iconCatalogCompressed.ts  # 圧縮版（URLテンプレート使用）
│
└── scripts/
    ├── build-catalog.ts       # JSON → TypeScript生成
    ├── split-catalog.ts       # TypeScript → JSON分割
    ├── add-tech-stack.ts      # Tech Stackアイコン追加
    └── compress-catalog.ts    # 圧縮版生成
```

## アイコンソースリポジトリ

| プロバイダー | リポジトリ | ライセンス |
|-------------|-----------|-----------|
| AWS | https://github.com/AwesomeLogos/aws-icons | Apache 2.0 |
| Azure | https://github.com/benc-uk/icon-collection | MIT |
| Google Cloud | https://github.com/AwesomeLogos/google-cloud-icons | Apache 2.0 |
| Tech Stack | https://github.com/simple-icons/simple-icons | CC0 1.0 |

## .gitignore設定

`.icons/` ディレクトリはGit管理対象外です。以下の設定を確認してください：

```gitignore
# External icon repositories (cloned locally for verification)
.icons/
```

**理由:**
- 外部リポジトリは巨大（数百MB）
- ライセンスの再配布問題を回避
- 必要時にクローンすれば取得可能
- CDN経由でアイコンを参照するため、ローカルコピー不要

## アイコン更新ワークフロー

### 1. 外部リポジトリのクローン（初回のみ）

```bash
mkdir -p .icons
cd .icons

# AWS Icons
git clone --depth 1 https://github.com/AwesomeLogos/aws-icons.git aws-icons

# Azure Icons
git clone --depth 1 https://github.com/benc-uk/icon-collection.git azure-icons

# Google Cloud Icons
git clone --depth 1 https://github.com/AwesomeLogos/google-cloud-icons.git gcp-icons

# Tech Stack (Simple Icons)
git clone --depth 1 https://github.com/simple-icons/simple-icons.git tech-stack-icons
```

### 2. 差分更新の確認

```bash
cd .icons/aws-icons
git fetch origin
git log HEAD..origin/main --oneline  # 新しいコミットを確認
git pull origin main
```

### 3. アイコンカタログの更新

#### 方法A: 既存カタログに追加

```bash
# Tech Stackの場合
bun scripts/add-tech-stack.ts

# カタログ再生成
bun scripts/build-catalog.ts
```

#### 方法B: 完全再生成

```bash
# 1. 既存カタログを分割JSONに変換
bun scripts/split-catalog.ts

# 2. 必要に応じてJSONファイルを編集

# 3. TypeScriptカタログを再生成
bun scripts/build-catalog.ts

# 4. 圧縮版を生成（オプション）
bun scripts/compress-catalog.ts
```

### 4. 動作確認

```bash
# カタログHTMLを生成
bun scripts/generate-catalog-json.ts

# HTMLをレンダリング
bun bin/cli.ts render docs/icons/aws_catalog_full.json --output docs/icons/aws_catalog_full.html
bun bin/cli.ts render docs/icons/tech_stack_catalog_full.json --output docs/icons/tech_stack_catalog_full.html

# ブラウザで確認
open docs/icons/aws_catalog_full.html
```

## JSONファイル形式

### _providers.json

```json
{
  "providers": ["aws", "azure", "google-cloud", "tech-stack"],
  "sources": {
    "aws": {
      "repository": "https://github.com/AwesomeLogos/aws-icons",
      "commitId": "b60dadba55b9a04faf334401114d529cd93d9748",
      "commitDate": "2024-03-11",
      "lastUpdated": "2025-01-02"
    }
  }
}
```

### カテゴリファイル（例: aws/compute.json）

```json
{
  "category": "Compute",
  "count": 25,
  "icons": [
    {
      "slug": "lambda",
      "displayName": "AWS Lambda",
      "url": "https://raw.githubusercontent.com/..."
    }
  ]
}
```

## アイコン追加手順

### 単一アイコンの追加

1. 対象プロバイダーのカテゴリJSONを開く
2. `icons` 配列に新しいエントリを追加
3. `count` を更新
4. `bun scripts/build-catalog.ts` を実行

```json
{
  "slug": "new-service",
  "displayName": "New Service",
  "url": "https://cdn.example.com/icons/new-service.svg"
}
```

### 新規カテゴリの追加

1. `src/icons/{provider}/` に新しいJSONファイルを作成
2. `_index.json` の `categories` 配列にファイル名を追加
3. `bun scripts/build-catalog.ts` を実行

### 新規プロバイダーの追加

1. `src/icons/{provider}/` ディレクトリを作成
2. `_meta.json`, `_index.json`, カテゴリJSONを作成
3. `_providers.json` を更新
4. `scripts/generate-catalog-json.ts` に設定を追加
5. `bun scripts/build-catalog.ts` を実行

## URL形式

### CDN経由（推奨）

```
# jsDelivr (npm)
https://cdn.jsdelivr.net/npm/simple-icons/icons/{slug}.svg

# jsDelivr (GitHub)
https://cdn.jsdelivr.net/gh/{owner}/{repo}/{path}

# GitHub Raw
https://raw.githubusercontent.com/{owner}/{repo}/{branch}/{path}
```

### URL検証

アイコンURLが有効かどうかを確認：

```bash
# 単一URL
curl -s -o /dev/null -w "%{http_code}" "https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg"

# 一括確認（Python）
python3 << 'EOF'
import json
import urllib.request

with open('src/icons/tech-stack/languages.json') as f:
    data = json.load(f)

for icon in data['icons']:
    try:
        urllib.request.urlopen(icon['url'], timeout=5)
        print(f"✓ {icon['slug']}")
    except:
        print(f"✗ {icon['slug']}: {icon['url']}")
EOF
```

## トラブルシューティング

### アイコンが表示されない

1. **URL確認**: ブラウザでURLを直接開いて確認
2. **CORS問題**: CDN経由のURLを使用しているか確認
3. **大文字小文字**: ファイル名の大文字小文字を確認（Azure特に注意）

### 差分が大きすぎる

1. カテゴリ単位でJSONを更新
2. `git diff --stat` で変更量を確認
3. 必要に応じて複数コミットに分割

### TypeScript生成エラー

```bash
# JSONの構文チェック
for f in src/icons/**/*.json; do
  python3 -m json.tool "$f" > /dev/null || echo "Error: $f"
done
```

## 定期メンテナンス

### 月次タスク

1. 外部リポジトリの更新確認
2. 新規アイコンの追加
3. 壊れたURLの修復
4. カタログHTMLの再生成

### リリース前タスク

1. 全アイコンURLの疎通確認
2. カタログHTMLでの目視確認
3. `iconSourceVersions` のコミットID更新
