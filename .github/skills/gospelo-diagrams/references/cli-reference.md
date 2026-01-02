# CLI Reference

## Flag-style Commands (Recommended for Agent Skills)

```bash
# View diagram structure
gospelo-diagrams --open --diagram <file.json>

# HTML/SVG output
gospelo-diagrams --output html --diagram <file.json>
gospelo-diagrams --output svg --diagram <file.json>

# Specify output directory
gospelo-diagrams --output html --diagram <file.json> --output-dir ./output

# Add node (positioned above/below reference node)
gospelo-diagrams --insert-above <ref-node-id> --node '<json>' --diagram <file.json>
gospelo-diagrams --insert-below <ref-node-id> --node '<json>' --diagram <file.json>

# Update node
gospelo-diagrams --update-node <node-id> --node '<json>' --diagram <file.json>

# Remove node
gospelo-diagrams --remove-node <node-id> --diagram <file.json>

# Align nodes (align Y-coordinates to reference node)
gospelo-diagrams --align-top <ref-node-id> --nodes '<id1,id2,...>' --diagram <file.json>

# Align nodes (align X-coordinates to reference node)
gospelo-diagrams --align-left <ref-node-id> --nodes '<id1,id2,...>' --diagram <file.json>
```

## Traditional Commands

```bash
# Rendering
bun bin/cli.ts render <input.json> <output.html>
bun bin/cli.ts svg <input.json> <output.svg>
bun bin/cli.ts enrich <input.json> <output.json> --pretty

# Metadata
bun bin/cli.ts meta <input.json> --pretty

# eval - Most flexible (executes JS expression)
bun bin/cli.ts eval <input.json> '<expression>' [output.json]

# Individual commands
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
