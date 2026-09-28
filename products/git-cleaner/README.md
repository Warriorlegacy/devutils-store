# git-cleaner

Remove sensitive files from git history in seconds.

**Stop leaking secrets.** If you've ever committed `.env`, API keys, or credentials to git, this tool scans your entire history and tells you exactly where they are.

## Features

- Scans ALL branches for sensitive files
- Pattern matching (`.env`, `*.pem`, `credentials.json`, etc.)
- Dry-run mode to preview before purging
- Shows commit hash, author, date, and message for each match
- Zero dependencies, works offline

## Installation

```bash
npm install -g git-cleaner
```

## Usage

```bash
# Scan for a specific file
git-cleaner --file ".env"

# Scan with glob pattern
git-cleaner --pattern "*.pem"

# Preview without purging
git-cleaner --file "secrets.json" --dry-run
```

## Example Output

```
🔍 Scanning history for: .env

  [main] a1b2c3d | John Doe | 2026-09-15 | Add environment config
  [main] e4f5g6h | Jane Smith | 2026-09-10 | Initial setup

📊 Found 2 commit(s) matching ".env"

⚠️  WARNING: This will rewrite git history.
   Backup your repo first: git clone --mirror <repo-url>
```

## Price

$7 USD (one-time, lifetime use)

## License

MIT