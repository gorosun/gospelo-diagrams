---
name: gospelo-diagrams
description: Generate and edit system architecture diagrams from JSON definitions. Supports incremental editing with eval command. Outputs HTML, SVG, or enriched JSON. Also provides icon catalog search. Use when asked to create, modify, or visualize AWS/Azure/GCP architecture diagrams, or when searching for available icons.
allowed-tools: Read, Bash(bun:*), Bash(gospelo-diagrams:*)
---

# System Diagram Generator Skill

Generate and edit system architecture diagrams from JSON definitions. Supports AWS, Azure, GCP, and other tech stack icons.

## Prerequisites

Install Bun runtime and gospelo-diagrams:

```bash
# Install Bun
npm install -g bun

# Install gospelo-diagrams
npm install -g gospelo-diagrams
```

## When to Use

Activate this skill when the user asks to:

- Create a system architecture diagram
- Modify an existing diagram (add/remove/move nodes)
- Generate infrastructure visualization
- Create AWS/Azure/GCP architecture diagrams
- Export diagram to HTML, SVG, or enriched JSON
- Search for available icons (e.g., "What's the icon name for Lambda?", "Find S3-related icons")

## Output Commands

### For Web Claude (Artifact Display)

Use the `preview` command to generate Base64-embedded HTML for Artifact display:

```bash
# Generate preview HTML (Base64 embedded, with Confidential badge)
bun bin/cli.ts preview diagram.json
# -> diagram_preview.html
```

### For Claude Code (Local Editing)

Use the `editor` command to generate editable HTML:

```bash
# Generate editable HTML
bun bin/cli.ts editor diagram.json
# -> diagram_editor.html
```

After output, prompt the user:
- If already open in browser: Reload the tab
- If first time: Run `open diagram_editor.html`

## Workflow: Creating a New Diagram

Follow these steps when creating a diagram:

### Step 1: Search for Icon IDs

**Important**: Do not guess icon names. Always search to confirm the exact ID.

```bash
# Search for icon IDs of services you want to use
gospelo-diagrams --icon-search lambda
gospelo-diagrams --icon-search "api gateway"
gospelo-diagrams --icon-search dynamodb
```

Example search results:
```
📦 AWS (1 matches)
   aws:lambda - Lambda [Compute]

📦 AWS (1 matches)
   aws:api_gateway - Api Gateway [App-Integration]
```

**Common mistakes**:
- ❌ `aws:api-gateway` (hyphen)
- ✅ `aws:api_gateway` (underscore)

### Step 2: Create JSON Definition

Use the icon IDs confirmed from search:

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

### Step 3: Generate Preview

```bash
bun bin/cli.ts preview diagram.json
open diagram_preview.html
```

## Quick Start

```bash
# View diagram structure (opens editor in browser)
gospelo-diagrams --open --diagram system.json

# HTML output
gospelo-diagrams --output html --diagram system.json  # -> _editor.html
bun bin/cli.ts preview system.json                    # -> _preview.html
gospelo-diagrams --output svg --diagram system.json   # -> .svg

# Add node (positioned below reference node)
gospelo-diagrams --insert-below lambda --node '{"id":"db","icon":"aws:dynamodb","label":"DynamoDB"}' --diagram system.json

# Update node
gospelo-diagrams --update-node lambda --node '{"label":"Updated Lambda","sublabel":"Python 3.12"}' --diagram system.json

# Remove node
gospelo-diagrams --remove-node old_node --diagram system.json
```

## Eval Command (Advanced)

The most flexible method. `b` is a DiagramBuilder instance.

```bash
# Add a node
bun bin/cli.ts eval diagram.json 'b.addNode({id:"lambda",icon:"aws:lambda",label:"Lambda",position:[400,300]})'

# Add node to the right of reference node
bun bin/cli.ts eval diagram.json 'b.insertRight("api",{id:"lambda",icon:"aws:lambda",label:"Lambda"})'

# Chain multiple operations
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
# Search icons (across all providers)
gospelo-diagrams --icon-search lambda
gospelo-diagrams --icon-search "cloud function"  # AND search

# Display catalog HTML paths
gospelo-diagrams --icon-catalog

# Specific provider only
gospelo-diagrams --icon-catalog aws

# Open in browser
gospelo-diagrams --icon-catalog --open
```

## AI Response Guidelines

Provide editing opportunities after generating a diagram:

1. **After preview generation**: Display in Artifact and prompt the user
   - "I've created the diagram. Would you like to edit anything?"
   - "Preview generated. Let me know if you'd like to add, remove, or move any nodes."

2. **Editing workflow**:
   - Receive user's edit request
   - Update JSON using eval command or flag-style commands
   - Regenerate preview and display in Artifact
   - "Updated. Any other changes?"

3. **After editing is complete**:
   - Once user is satisfied, provide final preview HTML
   - Guide on download method if needed

## References

See `references/` directory for detailed command references:

- `references/cli-reference.md` - Full CLI command reference
- `references/builder-api.md` - DiagramBuilder API reference
- `references/schema.md` - JSON Schema details
