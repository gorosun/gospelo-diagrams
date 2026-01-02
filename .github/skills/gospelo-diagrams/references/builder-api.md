# DiagramBuilder API Reference

`eval`コマンドで使用可能なメソッド。`b`はDiagramBuilderインスタンスです。

## Node Operations

| Method | Description |
| ------ | ----------- |
| `addNode({id, icon, label, position, ...})` | ノードを追加 |
| `insertAbove(refNodeId, nodeInput, offsetY?)` | 基準ノードの上にノードを追加 (デフォルト: Y-100) |
| `insertBelow(refNodeId, nodeInput, offsetY?)` | 基準ノードの下にノードを追加 (デフォルト: Y+100) |
| `insertLeft(refNodeId, nodeInput, offsetX?)` | 基準ノードの左にノードを追加 (デフォルト: X-150) |
| `insertRight(refNodeId, nodeInput, offsetX?)` | 基準ノードの右にノードを追加 (デフォルト: X+150) |
| `removeNode(id)` | ノードと関連接続を削除 |
| `updateNode(id, {label, icon, ...})` | ノードを更新 |
| `moveNode(id, [x, y])` | ノードを移動 |
| `setNodeLabel(id, label, sublabel?)` | ラベルを変更 |
| `setNodeIcon(id, icon)` | アイコンを変更 |

## Alignment Operations

| Method | Description |
| ------ | ----------- |
| `alignTop(refNodeId, nodeIds[])` | 複数ノードのY座標を基準ノードに揃える |
| `alignLeft(refNodeId, nodeIds[])` | 複数ノードのX座標を基準ノードに揃える |
| `distributeHorizontally(nodeIds[], spacing?)` | ノードを等間隔に水平配置 (デフォルト: 150px) |
| `distributeVertically(nodeIds[], spacing?)` | ノードを等間隔に垂直配置 (デフォルト: 100px) |

## Connection Operations

| Method | Description |
| ------ | ----------- |
| `addConnection({from, to, type?, color?})` | 接続を追加 |
| `removeConnection(from, to)` | 接続を削除 |
| `updateConnection(from, to, {...})` | 接続を更新 |

## Group/Composite Child Nodes

グループ (`type: "group"`) やコンポジット (`type: "composite"`) の子ノードは、基本的に `layout` プロパティに従って自動配置されます。

| Layout | Description |
| ------ | ----------- |
| `horizontal` | 子ノードを横並びに自動配置（デフォルト） |
| `vertical` | 子ノードを縦並びに自動配置 |

### 子ノードの相対座標指定

子ノードに `position` を指定すると、親ノードからの相対座標で配置できます。

```json
{
  "id": "ai_models",
  "type": "group",
  "position": [720, 100],
  "size": [280, 180],
  "children": [
    {"id": "bedrock", "icon": "aws:bedrock", "position": [0, 0]},
    {"id": "model1", "type": "text_box", "position": [100, 50]}
  ]
}
```

- `position: [0, 0]` = 親グループの左上角
- 自動配置と手動配置を混在させることも可能

## Metadata Operations

| Method | Description |
| ------ | ----------- |
| `setTitle(title)` | タイトルを設定 |
| `setSubtitle(subtitle)` | サブタイトルを設定 |
| `setBackground({type, ...})` | 背景を設定 |

## Examples

```bash
# ノードを追加
bun bin/cli.ts eval diagram.json 'b.addNode({id:"lambda",icon:"aws:lambda",label:"Lambda",position:[400,300]})'

# 基準ノードの右にノードを追加
bun bin/cli.ts eval diagram.json 'b.insertRight("api",{id:"lambda",icon:"aws:lambda",label:"Lambda"})'

# ノードを移動
bun bin/cli.ts eval diagram.json 'b.moveNode("lambda",[500,400])'

# 複数操作をチェーン
bun bin/cli.ts eval diagram.json 'b.addNode({id:"a",icon:"aws:s3"}).addConnection({from:"api",to:"a"})'

# ラベル変更
bun bin/cli.ts eval diagram.json 'b.setNodeLabel("lambda","New Label","New Sublabel")'

# ノードのY座標を揃える
bun bin/cli.ts eval diagram.json 'b.alignTop("api",["lambda","db","s3"])'

# ノードのX座標を揃える
bun bin/cli.ts eval diagram.json 'b.alignLeft("api",["waf","cloudfront"])'

# ノードを等間隔に水平配置
bun bin/cli.ts eval diagram.json 'b.distributeHorizontally(["api","lambda","db"],200)'
```
