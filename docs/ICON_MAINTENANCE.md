# Icon Maintenance Guide

This document describes how to maintain and update the icon catalog in gospelo-diagrams.

## Icon Architecture Overview

### File Structure

```
src/
  core/
    icons.ts          # Icon URL resolution logic
  data/
    iconCatalog.ts    # Auto-generated icon catalog (600KB+)
scripts/
  fix-resource-icons.ts  # Resource icon URL fixer
```

### Icon Sources

| Provider | Icon Count | CDN | Repository |
|----------|------------|-----|------------|
| AWS | 799+ | raw.githubusercontent.com | AwesomeLogos/aws-icons |
| Azure | 291+ | cdn.jsdelivr.net | benc-uk/icon-collection |
| Google Cloud | 216+ | raw.githubusercontent.com | AwesomeLogos/google-cloud-icons |
| Tech Stack | 100+ | cdn.jsdelivr.net | simple-icons |

### Icon ID Format

Icons are referenced using the format `provider:icon_name`:

```
aws:lambda
aws:dynamodb
aws:res_ec2_instance      # Resource icons use res_ prefix
azure:virtual_machines
google-cloud:cloud_run
tech-stack:typescript
```

## AWS Icon URL Patterns

AWS icons have two distinct URL patterns:

### 1. Architecture Service Icons

Standard service icons (Lambda, DynamoDB, S3, etc.):

```
https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/
  Architecture-Service-Icons/
    Arch_{Category}/
      64/
        Arch_{Service-Name}_64.svg
```

Example:
```
aws:lambda -> Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Lambda_64.svg
```

### 2. Resource Icons

Detailed resource icons (EC2 Instance, Lambda Function, S3 Bucket, etc.):

```
https://raw.githubusercontent.com/AwesomeLogos/aws-icons/main/docs/images/
  Resource-Icons/
    Res_{Category}/
      Res_{Service}_{Resource}_48.svg
```

Special case - General Icons have a subdirectory:
```
Resource-Icons/
  Res_General-Icons/
    Res_48_Light/
      Res_{Name}_48_Light.svg
```

Examples:
```
aws:res_ec2_instance -> Resource-Icons/Res_Compute/Res_Amazon-EC2_Instance_48.svg
aws:res_alert -> Resource-Icons/Res_General-Icons/Res_48_Light/Res_Alert_48_Light.svg
```

### Resource Icon Categories

| Category | Directory | Example Icons |
|----------|-----------|---------------|
| Analytics | Res_Analytics | Glue Crawler, EMR Cluster |
| Application-Integration | Res_Application-Integration | API Gateway Endpoint, SQS Queue |
| Compute | Res_Compute | EC2 Instance, Lambda Function |
| Containers | Res_Containers | ECS Task, ECR Image |
| Database | Res_Database | Aurora Instance, DynamoDB Table |
| End-User-Computing | Res_End-User-Computing | WorkSpaces |
| General-Icons | Res_General-Icons/Res_48_Light | Alert, User, Database |
| Machine-Learning | Res_Machine-Learning | SageMaker Notebook |
| Management-Governance | Res_Management-Governance | CloudWatch Alarm |
| Migration-Transfer | Res_Migration-Transfer | Transfer Family SFTP |
| Networking-Content-Delivery | Res_Networking-Content-Delivery | VPC, Subnet |
| Security-Identity-Compliance | Res_Security-Identity-Compliance | IAM Role |
| Storage | Res_Storage | S3 Bucket, EBS Volume |

## Updating the Icon Catalog

### Step 1: Regenerate Icon Catalog

The icon catalog is generated from external icon repositories. To regenerate:

```bash
# Generate the full catalog (requires network access)
bun scripts/generate-icon-catalog.ts
```

### Step 2: Fix Resource Icon URLs

Resource icons require special URL handling. Run the fix script:

```bash
bun scripts/fix-resource-icons.ts
```

This script:
1. Fetches the correct file list from GitHub API
2. Maps icon slugs to correct URLs
3. Updates `src/data/iconCatalog.ts`

### Step 3: Verify Icons

After updating, verify icons load correctly:

```bash
# Render a test diagram
bun bin/cli.ts render docs/icons/test_res_icons.json test.html

# Open in browser and check console for errors
# Failed icons will log: [gospelo-diagrams] Icon load failed: {...}
```

## Error Handling

### Browser Console Logging

When an icon fails to load, the browser console displays:

```javascript
[gospelo-diagrams] Icon load failed: {
  id: 'node_id',
  icon: 'aws:res_example',
  x: 100,
  y: 200,
  url: 'https://...'
}
```

This helps identify:
- Which node has the issue (`id`)
- Which icon was requested (`icon`)
- The position in the diagram (`x`, `y`)
- The actual URL that failed (`url`)

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| 404 Not Found | Wrong URL path | Check URL pattern, run fix script |
| CORS Error | CDN restriction | Verify domain is allowed |
| Icon not showing | URL exists but path wrong | Check category/filename mapping |

## Version Management

### Icon Catalog Versioning

The icon catalog is versioned alongside the main package. When updating icons:

1. Update `package.json` version (minor version for icon additions)
2. Document changes in CHANGELOG.md
3. Tag release with icon update note

### Upstream Repository Changes

AWS, Azure, and GCP may update their icon repositories. Monitor:

- [AwesomeLogos/aws-icons](https://github.com/AwesomeLogos/aws-icons) - AWS icons
- [benc-uk/icon-collection](https://github.com/benc-uk/icon-collection) - Azure icons
- [AwesomeLogos/google-cloud-icons](https://github.com/AwesomeLogos/google-cloud-icons) - GCP icons

### Breaking Changes

If upstream repositories change their URL structure:

1. Update URL patterns in `src/core/icons.ts`
2. Update fix scripts in `scripts/`
3. Regenerate and verify the catalog
4. Increment major version if icon IDs change

## Adding New Icon Providers

To add a new icon provider:

1. Add provider configuration in `src/core/icons.ts`:

```typescript
// In generateFallbackUrl()
case 'new-provider':
  return `https://cdn.example.com/icons/${iconName}.svg`;
```

2. Add to catalog generation script
3. Update documentation
4. Add to required domains list for Web Claude

## Required External Domains

For Web Claude compatibility, these domains must be accessible:

```typescript
export const REQUIRED_DOMAINS = [
  'cdn.jsdelivr.net',           // Azure, Tech Stack icons
  'raw.githubusercontent.com',  // AWS, Google Cloud icons
];
```

## Troubleshooting

### Icon Not Found

1. Check if icon ID exists in catalog:
   ```bash
   grep "aws:your_icon" src/data/iconCatalog.ts
   ```

2. Verify URL is accessible:
   ```bash
   curl -I "https://raw.githubusercontent.com/..."
   ```

3. Check for typos in icon name

### Bulk URL Validation

To validate all URLs in the catalog (slow, use sparingly):

```bash
# Extract and test URLs
grep -o '"https://[^"]*\.svg"' src/data/iconCatalog.ts | \
  tr -d '"' | \
  head -100 | \
  xargs -I {} curl -s -o /dev/null -w "%{http_code} {}\n" {}
```

### Regenerating After Upstream Changes

```bash
# Full regeneration workflow
bun scripts/generate-icon-catalog.ts
bun scripts/fix-resource-icons.ts
bun bin/cli.ts render docs/icons/aws_catalog_full.json docs/icons/aws_catalog_full.html
# Open HTML and check console for errors
```

## Compressed Catalog Format

The icon catalog can be compressed using URL templates to reduce file size significantly (~73% reduction).

### Compression Script

```bash
bun scripts/compress-catalog.ts
```

This generates `src/data/iconCatalogCompressed.ts` with:

### Provider Metadata Structure

```typescript
export const providerMetadata: Record<string, ProviderMetadata> = {
  aws: {
    baseUrl: "https://raw.githubusercontent.com/.../",
    templates: {
      "arch": {
        pattern: "Architecture-Service-Icons/Arch_{category}/{size}/Arch_{filename}_{size}.svg",
        defaults: { size: "64" },
        description: "AWS Architecture Service Icons"
      },
      "res": {
        pattern: "Resource-Icons/Res_{category}/Res_{filename}_{size}.svg",
        defaults: { size: "48" },
        description: "AWS Resource Icons"
      },
      "res-general": {
        pattern: "Resource-Icons/Res_General-Icons/Res_{size}_Light/Res_{filename}_{size}_Light.svg",
        defaults: { size: "48" },
        description: "AWS General Resource Icons"
      }
    },
    source: {
      repository: "https://github.com/AwesomeLogos/aws-icons",
      commitId: "b60dadba...",
      commitDate: "2024-03-11",
      lastUpdated: "2025-01-02"
    }
  }
};
```

### Compressed Icon Entry Format

Icons are stored with short keys to minimize size:

| Key | Full Name | Description |
|-----|-----------|-------------|
| `t` | template | Template type (arch, res, res-general, default, full) |
| `c` | category | Category name (for categorized icons) |
| `f` | filename | Filename without extension |
| `d` | displayName | Icon slug/display name |
| `o` | overrides | Override values for template placeholders |

Example:
```typescript
// Before (full URL): 180 characters
"aws:lambda": "https://raw.githubusercontent.com/.../Architecture-Service-Icons/Arch_Compute/64/Arch_AWS-Lambda_64.svg"

// After (compressed): 55 characters
{ "t": "arch", "c": "Compute", "f": "AWS-Lambda", "d": "lambda" }
```

### URL Resolution

Use `resolveIconUrl()` or `getIconUrl()` to convert compressed entries back to full URLs:

```typescript
import { getIconUrl, resolveIconUrl } from './iconCatalogCompressed';

// By icon ID
const url = getIconUrl('aws:lambda');

// By entry object
const entry = { t: 'arch', c: 'Compute', f: 'AWS-Lambda', d: 'lambda' };
const url = resolveIconUrl('aws', entry);
```

### Template Types

| Type | Usage | Example Pattern |
|------|-------|-----------------|
| `arch` | AWS Architecture Service Icons | `Architecture-Service-Icons/Arch_{category}/{size}/Arch_{filename}_{size}.svg` |
| `res` | AWS Resource Icons | `Resource-Icons/Res_{category}/Res_{filename}_{size}.svg` |
| `res-general` | AWS General Resource Icons | `Resource-Icons/Res_General-Icons/Res_{size}_Light/Res_{filename}_{size}_Light.svg` |
| `default` | Azure, GCP, Tech Stack | `{filename}.svg` or provider-specific path |
| `full` | Full URL stored directly | Used when no template matches |
