# commit-helper

Generate conventional commit messages from your staged diff in one command.

**Stop staring at the terminal trying to write the perfect commit message.** This tool analyzes your staged changes and generates a properly formatted conventional commit message instantly.

## Features

- Auto-detects change type (feat, fix, docs, test, refactor, etc.)
- Extracts scope from file paths (`src/api/` → `(api)`)
- Copies message to clipboard automatically
- Zero dependencies, works offline

## Installation

```bash
npm install -g commit-helper
```

## Usage

```bash
# Stage your changes
git add .

# Generate commit message
commit-helper

# Preview without copying
commit-helper --dry-run
```

## Example Output

```
💡 Suggested commit message:

   feat(api): add 3 files

✓ Copied to clipboard!

To commit:
  git commit -m "feat(api): add 3 files"
```

## Price

$9 USD (one-time, lifetime use)

## License

MIT