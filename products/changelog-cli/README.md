# changelog-cli

Generate beautiful, human-readable changelogs from your git history in seconds.

No dependencies. Works offline. One-time purchase, lifetime use.

## Features

- Parses conventional commits (`feat:`, `fix:`, `perf:`, etc.)
- Groups by category (Added, Fixed, Improved, Changed...)
- Supports scope extraction (`feat(api): ...`)
- Range filtering (`--from v1.0.0 --to HEAD`)
- Output to stdout or file (`--output CHANGELOG.md`)
- Custom titles

## Installation

```
npm install -g changelog-cli
```

Or download the standalone script.

## Usage

```bash
# Full changelog
changelog-cli

# From a specific tag
changelog-cli --from v1.0.0 --to v1.1.0

# Save to file
changelog-cli --from v1.0.0 --output CHANGELOG.md

# Custom title
changelog-cli --title "Release 2.0.0"
```

## Example

Given commits:
```
feat: add user authentication
fix(api): handle null response
docs: update README
```

Output:
```markdown
# Changelog (v1.0.0 → v1.1.0)

_Generated 2026-09-28_

## Added

- Add user authentication

## Fixed

- **api:** Handle null response

## Documentation

- Update README
```

## License

MIT