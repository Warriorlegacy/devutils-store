# changelog-cli — Gumroad Product Page

## Product Title
changelog-cli: Generate Beautiful Changelogs from Git History in Seconds

## Tagline
Stop manually writing release notes. One command. Zero dependencies. Works offline.

## Price
$9.00 USD (one-time, lifetime use)

## Category
Developer Tools

## Product Description

### The Problem
Every release, you manually write release notes. You grep git log, copy-paste into a Markdown file, group commits by hand, and format it all. It takes 20-30 minutes per release — time you could spend coding.

### The Solution
`changelog-cli` parses your git history, understands conventional commits, groups them by type, and outputs a clean, professional changelog in seconds.

```bash
# Install globally
npm install -g changelog-cli

# Generate full changelog
changelog-cli

# From a specific tag
changelog-cli --from v1.0.0 --to v1.1.0

# Save to file
changelog-cli --from v1.0.0 --output CHANGELOG.md

# Custom title
changelog-cli --title "Release 2.0.0"
```

### Example Output

```markdown
# v2.8.0

_Generated 2026-09-28_

## Added

- content-craft upgrade — supply-demand gate, density scoring, MVP ladder

## Fixed

- transparency pass per OECD skill-review audit + Chinese name 来财

## Chores

- bump version and changelog (v2.8.0)
```

### Features

- **Conventional commits parsing** — understands `feat:`, `fix:`, `perf:`, `refactor:`, `docs:`, `chore:`, etc.
- **Scope extraction** — `feat(api): add endpoint` becomes `**api:** add endpoint`
- **Range filtering** — generate changelogs between any two tags/commits
- **Custom titles** — brand your changelog per release
- **File output** — pipe directly to `CHANGELOG.md`
- **Zero dependencies** — no npm install hell, works in any Node.js >= 14 project
- **Works offline** — no API calls, no network required
- **MIT licensed** — use it in personal and commercial projects

### Who This Is For

- **Open source maintainers** — automate your release notes
- **Solo developers** — ship faster without boring manual work
- **Dev teams** — standardize changelog format across releases
- **Technical writers** — generate first drafts from git history

### What You Get

- `bin/cli.js` — the standalone CLI script (no dependencies)
- `README.md` — full documentation with examples
- `package.json` — npm package metadata
- MIT License — use it freely

### Demo

Try it live on the Show-me-the-money repo:

```bash
# Clone this repo to test
git clone https://github.com/iamzifei/show-me-the-money.git
cd show-me-the-money
npx changelog-cli --from v2.7.0 --to v2.8.0 --title "v2.8.0"
```

### FAQ

**Q: Does it require an AI API key?**
A: No. It works entirely offline using regex-based commit parsing.

**Q: Can I customize the output format?**
A: Yes — the TYPE_LABELS map at the top of `cli.js` lets you rename categories.

**Q: What commit format does it expect?**
A: Conventional Commits (https://www.conventionalcommits.org/). Non-conforming commits are grouped under "Chores".

**Q: Is there a refund policy?**
A: 30-day no-questions-asked refund. If it doesn't save you time, I'll refund you.

### Support

Open an issue on GitHub or email [your email] for support.

---

**Last updated:** 2026-09-28  
**Version:** 1.0.0  
**License:** MIT
