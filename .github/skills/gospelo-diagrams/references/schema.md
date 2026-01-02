# Diagram JSON Schema

## Basic Structure

```json
{
  "title": "My Architecture",
  "subtitle": "Optional subtitle",
  "background": {
    "type": "gradient",
    "direction": "south"
  },
  "nodes": [...],
  "connections": [...]
}
```

## Node Schema

```json
{
  "id": "lambda",
  "icon": "aws:lambda",
  "label": "Lambda Function",
  "sublabel": "Python 3.9",
  "position": [400, 250],
  "type": "icon"
}
```

### Node Types

- `icon` (default) - アイコンノード
- `group` - グループ（子ノードを含む）
- `composite` - 複合ノード（複数アイコン）
- `text_box` - テキストボックス
- `label` - ラベル（枠なし）
- `person` - 人物アイコン

## Connection Schema

```json
{
  "from": "api_gateway",
  "to": "lambda",
  "type": "data",
  "color": "orange",
  "bidirectional": false,
  "label": "REST API"
}
```

### Connection Types

- `data` - データフロー
- `auth` - 認証フロー
- `flow` - 一般的なフロー

## Supported Icon Providers

| Provider | Prefix   | Example                    |
| -------- | -------- | -------------------------- |
| AWS      | `aws:`   | `aws:lambda`, `aws:s3`, `aws:api_gateway`, `aws:dynamodb` |
| Azure    | `azure:` | `azure:functions`, `azure:blob_storage` |
| GCP      | `gcp:`   | `gcp:cloud_functions`, `gcp:cloud_storage` |
| Tech     | `tech:`  | `tech:python`, `tech:react`, `tech:docker` |

## Background Types

```json
// 白背景
{"type": "white"}

// 単色背景
{"type": "solid", "color": "#f0f0f0"}

// グラデーション背景
{"type": "gradient", "startColor": "#fff", "endColor": "#eee", "direction": "south"}
```
