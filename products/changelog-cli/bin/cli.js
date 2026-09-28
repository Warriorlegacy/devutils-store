#!/usr/bin/env node
/**
 * changelog-cli — Generate beautiful changelogs from git history.
 * Parses conventional commits, groups by type, and outputs clean markdown.
 * No dependencies. Works offline. One-time purchase, lifetime use.
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const TYPE_LABELS = {
  feat: "Added",
  fix: "Fixed",
  perf: "Improved",
  refactor: "Changed",
  docs: "Documentation",
  chore: "Chores",
  style: "Styles",
  test: "Tests",
  build: "Build System",
  ci: "Continuous Integration",
  revert: "Reverted",
};

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    from: null,
    to: "HEAD",
    output: null,
    title: null,
    help: false,
  };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--from") opts.from = args[++i];
    else if (a === "--to") opts.to = args[++i];
    else if (a === "--output" || a === "-o") opts.output = args[++i];
    else if (a === "--title") opts.title = args[++i];
    else if (a === "--help" || a === "-h") opts.help = true;
  }
  return opts;
}

function getGitLog(from, to) {
  const range = from ? `${from}..${to}` : to;
  const cmd = `git log --pretty=format:%H%x09%s%x09%b ${range}`;
  try {
    const out = execSync(cmd, { encoding: "utf8", maxBuffer: 10 * 1024 * 1024, shell: "cmd.exe" });
    return out.trim().split("\n").filter(Boolean);
  } catch (e) {
    console.error("Error reading git log. Are you in a git repository?");
    process.exit(1);
  }
}

function parseCommit(line) {
  const parts = line.split("\t");
  const hash = parts[0];
  const subject = parts[1] || "";
  const body = parts.slice(2).join("\t") || "";
  const m = subject.match(/^(\w+)(?:\(([^)]+)\))?!?:\s*(.*)$/);
  if (!m) return { type: "chore", scope: null, desc: subject, raw: subject };
  return { type: m[1], scope: m[2], desc: m[3], raw: subject, body };
}

function groupCommits(commits) {
  const groups = {};
  for (const c of commits) {
    if (!c.desc || !c.desc.trim()) continue;
    const label = TYPE_LABELS[c.type] || c.type;
    if (!groups[label]) groups[label] = [];
    const entry = `- ${c.desc}`;
    groups[label].push(c.scope ? `**${c.scope}:** ${c.desc}` : entry);
  }
  return groups;
}

function generateMarkdown(groups, title, from, to) {
  const date = new Date().toISOString().split("T")[0];
  const header = title || `Changelog (${from ? from.slice(0, 7) : "initial"} → ${to === "HEAD" ? "latest" : to.slice(0, 7)})`;
  let md = `# ${header}\n\n_Generated ${date}_\n\n`;
  const ordered = [
    "Added", "Fixed", "Improved", "Changed", "Documentation",
    "Chores", "Styles", "Tests", "Build System", "Continuous Integration", "Reverted"
  ];
  for (const label of ordered) {
    if (groups[label]) {
      md += `## ${label}\n\n`;
      md += groups[label].join("\n") + "\n\n";
    }
  }
  return md.trim() + "\n";
}

function main() {
  const opts = parseArgs();
  if (opts.help) {
    console.log(`
changelog-cli — Generate changelogs from git history.

Usage:
  changelog-cli --from v1.0.0 --to v1.1.0
  changelog-cli --from v1.0.0 --output CHANGELOG.md
  changelog-cli --title "Release 2.0"

Options:
  --from <tag>    Starting commit/tag (default: all history)
  --to <ref>      Ending ref (default: HEAD)
  --output, -o    Write to file instead of stdout
  --title <text>  Custom changelog title
  --help, -h      Show this help
`);
    return;
  }

  const logLines = getGitLog(opts.from, opts.to);
  const commits = logLines.map(parseCommit);
  const groups = groupCommits(commits);
  const md = generateMarkdown(groups, opts.title, opts.from, opts.to);

  if (opts.output) {
    fs.writeFileSync(opts.output, md);
    console.log(`✓ Changelog written to ${opts.output} (${commits.length} commits)`);
  } else {
    process.stdout.write(md);
  }
}

main();