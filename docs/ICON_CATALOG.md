# Icon Catalog

Over 1,500 icons available for system architecture diagrams.

## Browse Icons

| Provider | Icons | Interactive Catalog |
|----------|-------|---------------------|
| AWS | 783 | [Browse AWS Icons](https://gorosun.github.io/gospelo-diagrams/icons/aws_catalog_full.html) |
| Azure | 291 | [Browse Azure Icons](https://gorosun.github.io/gospelo-diagrams/icons/azure_catalog_full.html) |
| Google Cloud | 216 | [Browse GCP Icons](https://gorosun.github.io/gospelo-diagrams/icons/gcp_catalog_full.html) |
| Tech Stack | 268 | [Browse Tech Icons](https://gorosun.github.io/gospelo-diagrams/icons/tech_stack_catalog_full.html) |

## Icon ID Format

Icons use the format `provider:name`:

```
aws:lambda
aws:s3
azure:functions
gcp:cloud_run
tech:python
```

## CLI Search

```bash
# Search icons across all providers
gospelo-diagrams --icon-search lambda
gospelo-diagrams --icon-search "cloud function"  # AND search

# Open catalog in browser
gospelo-diagrams --icon-catalog --open
```

## Download HTML Catalogs

For offline use, download the HTML catalogs:

- [AWS Catalog](icons/aws_catalog_full.html)
- [Azure Catalog](icons/azure_catalog_full.html)
- [GCP Catalog](icons/gcp_catalog_full.html)
- [Tech Stack Catalog](icons/tech_stack_catalog_full.html)
