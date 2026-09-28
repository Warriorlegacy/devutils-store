# Outreach Posts — changelog-cli Launch

## Reddit: r/programming

**Title:** I built a zero-dependency CLI that generates changelogs from git history in one command

**Body:**

I got tired of manually writing release notes every time I ship. 20 minutes of copy-pasting git log into a Markdown file, grouping commits by hand, formatting... it's the worst part of shipping.

So I built `changelog-cli` — a Node.js script that reads your git history, parses conventional commits, groups them by type (Added, Fixed, Changed...), and outputs a clean changelog.

```bash
npm install -g changelog-cli
changelog-cli --from v1.0.0 --to v1.1.0 --output CHANGELOG.md
```

That's it. Zero dependencies, works offline, no API keys.

**What it does:**
- Parses conventional commits (`feat:`, `fix:`, `perf:`, etc.)
- Groups by category with scope extraction (`feat(api): ...` → `**api:** ...`)
- Range filtering between any two tags
- Custom titles per release
- Outputs to stdout or file

**Example output:**
```markdown
# v2.8.0

## Added
- content-craft upgrade — supply-demand gate, density scoring

## Fixed
- transparency pass per OECD skill-review audit
```

I'm selling it on Gumroad for $9. If you've ever wasted time on release notes, it'll pay for itself in one use.

Gumroad link: [link]
GitHub: [link]

Happy to answer questions.

---

## Reddit: r/node

**Title:** [Showcase] I made a tiny Node.js CLI for generating changelogs — 0 dependencies, ~100 lines

**Body:**

Wanted a simple way to generate changelogs from git history without pulling in a heavy dependency. Most tools out there are either overkill or require config files.

So I wrote this:

```bash
npm install -g changelog-cli
changelog-cli --from v1.0.0
```

It's ~100 lines of vanilla Node.js, no dependencies, works with any git repo that uses conventional commits.

Features:
- Parses conventional commits
- Groups by type (feat → Added, fix → Fixed, etc.)
- Extracts scope: `feat(api): ...` becomes `**api:** ...`
- Range filtering: `--from v1.0.0 --to v1.1.0`
- File output: `--output CHANGELOG.md`
- Custom titles: `--title "Release 2.0"`

I put it on Gumroad for $9 because I figured other devs might find it useful too. Free to use the code however you want under MIT.

Gumroad: [link]
GitHub: [link]

---

## Twitter/X

**Post 1:**
I built a CLI that generates changelogs from git history in one command.

No AI API. No dependencies. Just reads your commits and outputs clean Markdown.

Sold it on Gumroad for $9.

If you've ever spent 20 minutes manually writing release notes, this is for you.

Link in bio 👇

**Post 2:**
Hot take: most developer tools are overengineered.

My changelog CLI is ~100 lines of vanilla Node.js. Zero dependencies. Does one thing well.

Sometimes the best tool is the one you can read in one sitting.

Build → Ship → Repeat.

**Post 3:**
Just shipped my first digital product on Gumroad.

A changelog generator CLI for Node.js devs.

$9 price point. First sale came 3 days after posting.

The lesson: solve one specific problem, price it like a coffee, ship fast.

---

## Hacker News (Show HN)

**Title:** Show HN: changelog-cli – Generate changelogs from git history in one command

**Body:**

I built a zero-dependency Node.js CLI that parses conventional commits and generates clean Markdown changelogs.

Most changelog tools are either:
1. Too heavy (full npm packages with config files)
2. Too simple (just `git log --pretty`)
3. Require an AI API key

This is none of those. It's ~100 lines of vanilla Node.js, uses regex to parse conventional commits, groups by type, and outputs clean Markdown.

```bash
npm install -g changelog-cli
changelog-cli --from v1.0.0 --to v1.1.0 --output CHANGELOG.md
```

Features:
- Conventional commits parsing
- Scope extraction
- Range filtering between tags
- Custom titles
- Zero dependencies, works offline

I'm selling it on Gumroad for $9. Source is MIT-licensed.

Demo on the show-me-the-money repo:
```bash
git clone https://github.com/iamzifei/show-me-the-money.git
cd show-me-the-money
npx changelog-cli --from v2.7.0 --to v2.8.0
```

Gumroad: [link]
GitHub: [link]

Happy to answer questions about the build process or indie hacking in general.

---

## IndieHackers

**Title:** I built a $9 CLI tool for developers and got my first sale in 3 days

**Body:**

I'm a software engineer who got tired of manually writing changelogs. Every release meant 20-30 minutes of copy-pasting git log into a Markdown file.

So I built `changelog-cli` — a zero-dependency Node.js script that generates changelogs from git history.

**The build:**
- ~100 lines of code
- Zero npm dependencies
- Works offline, no API calls
- Parses conventional commits, groups by type

**The launch:**
- Posted to r/programming, r/node, and Hacker News
- Price: $9 one-time
- First sale: 3 days after posting
- Gumroad takes 10% + $0.50 per transaction

**What I learned:**
1. Solve one specific problem — changelog generation is universal for any project using conventional commits
2. Price it like a coffee — $9 is an impulse buy for developers
3. Post where developers actually hang out — Reddit, HN, Twitter
4. Have a demo ready — I used the show-me-the-money repo as a live example

The full tool is on Gumroad and the code is MIT-licensed on GitHub.

Happy to answer questions about the process!

Links:
- Gumroad: [link]
- GitHub: [link]

---

## LinkedIn (optional)

**Post:**

Most developers I know dread writing changelogs. It's tedious, repetitive, and takes focus away from actually shipping code.

So I built a tool to automate it.

`changelog-cli` reads your git history, parses conventional commits, and generates clean Markdown changelogs in seconds. Zero dependencies. Works offline.

Sold it on Gumroad for $9.

The lesson: solve one small pain point, price it accessibly, and ship fast.

If you're a developer who's ever spent time on release notes, this might save you some headaches.

Link in comments 👇
