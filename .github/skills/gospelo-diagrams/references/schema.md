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

- `icon` (default) - Icon node
- `group` - Group (contains child nodes)
- `composite` - Composite node (multiple icons)
- `text_box` - Text box
- `label` - Label (no border)
- `person` - Person icon

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

- `data` - Data flow
- `auth` - Authentication flow
- `flow` - General flow

## Supported Icon Providers

| Provider | Prefix   | Example                    |
| -------- | -------- | -------------------------- |
| AWS      | `aws:`   | `aws:lambda`, `aws:s3`, `aws:api_gateway`, `aws:dynamodb` |
| Azure    | `azure:` | `azure:functions`, `azure:blob_storage` |
| GCP      | `gcp:`   | `gcp:cloud_functions`, `gcp:cloud_storage` |
| Tech     | `tech:`  | `tech:python`, `tech:react`, `tech:docker` |

## Background Types

```json
// White background
{"type": "white"}

// Solid color background
{"type": "solid", "color": "#f0f0f0"}

// Gradient background
{"type": "gradient", "startColor": "#fff", "endColor": "#eee", "direction": "south"}
```
