# CLI Reference

## Flag-style Commands (Recommended for Agent Skills)

```bash
# ダイアグラム構造を表示
gospelo-diagrams --open --diagram <file.json>

# HTML/SVG出力
gospelo-diagrams --output html --diagram <file.json>
gospelo-diagrams --output svg --diagram <file.json>

# 出力先ディレクトリを指定
gospelo-diagrams --output html --diagram <file.json> --output-dir ./output

# ノード追加（基準ノードの上/下に配置）
gospelo-diagrams --insert-above <ref-node-id> --node '<json>' --diagram <file.json>
gospelo-diagrams --insert-below <ref-node-id> --node '<json>' --diagram <file.json>

# ノード更新
gospelo-diagrams --update-node <node-id> --node '<json>' --diagram <file.json>

# ノード削除
gospelo-diagrams --remove-node <node-id> --diagram <file.json>

# ノード整列（Y座標を基準ノードに揃える）
gospelo-diagrams --align-top <ref-node-id> --nodes '<id1,id2,...>' --diagram <file.json>

# ノード整列（X座標を基準ノードに揃える）
gospelo-diagrams --align-left <ref-node-id> --nodes '<id1,id2,...>' --diagram <file.json>
```

## Traditional Commands

```bash
# レンダリング
bun bin/cli.ts render <input.json> <output.html>
bun bin/cli.ts svg <input.json> <output.svg>
bun bin/cli.ts enrich <input.json> <output.json> --pretty

# メタデータ
bun bin/cli.ts meta <input.json> --pretty

# eval - 最も柔軟（JS式を実行）
bun bin/cli.ts eval <input.json> '<expression>' [output.json]

# 個別コマンド
bun bin/cli.ts add-node <input.json> '<node-json>' [output.json]
bun bin/cli.ts remove-node <input.json> <node-id> [output.json]
bun bin/cli.ts move-node <input.json> <node-id> <x> <y> [output.json]
bun bin/cli.ts add-connection <input.json> <from> <to> [output.json]
bun bin/cli.ts remove-connection <input.json> <from> <to> [output.json]
bun bin/cli.ts edit <input.json> <patch.json> [output.json]
```

## Options

| Option             | Description                          |
| ------------------ | ------------------------------------ |
| `--width <number>` | Diagram width (default: 800)         |
| `--height <number>`| Diagram height (default: 600)        |
| `--pretty`         | Pretty-print JSON output             |
| `--in-place`       | Modify input file in place           |
| `--help`           | Show help                            |
