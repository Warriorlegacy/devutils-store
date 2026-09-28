#!/usr/bin/env node
/**
 * commit-helper — Generate conventional commit messages from your staged diff.
 * Analyzes changes and suggests properly formatted commit messages.
 * Zero dependencies. One-time purchase, lifetime use.
 */
const { execSync } = require("child_process");
const fs = require("fs");

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { help: false, dryRun: false };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--help" || a === "-h") opts.help = true;
    else if (a === "--dry-run") opts.dryRun = true;
  }
  return opts;
}

function getDiff() {
  try {
    const out = execSync("git diff --cached --stat", {
      encoding: "utf8",
      shell: "cmd.exe",
    });
    if (!out.trim()) {
      console.log("No staged changes. Stage files with 'git add' first.");
      process.exit(0);
    }
    return out;
  } catch (e) {
    console.error("Not a git repository or no staged changes.");
    process.exit(1);
  }
}

function classifyChange(diff) {
  const lines = diff.toLowerCase();
  const types = [];

  if (/\b(test|spec|__tests__)\b/.test(lines)) types.push("test");
  if (/\b(docs|readme|changelog|documentation)\b/.test(lines)) types.push("docs");
  if (/\b(style|format|prettier|eslint)\b/.test(lines)) types.push("style");
  if (/\b(deps|package\.json|requirements|cargo\.toml|go\.mod)\b/.test(lines))
    types.push("chore");
  if (/\b(ci|github|workflow|\.github)\b/.test(lines)) types.push("ci");
  if (/\b(build|webpack|vite|rollup|tsc)\b/.test(lines)) types.push("build");
  if (/\b(fix|bug|issue|error|crash)\b/.test(lines)) types.push("fix");
  if (/\b(perf|optimize|performance|slow)\b/.test(lines)) types.push("perf");
  if (/\b(refactor|cleanup|restructure)\b/.test(lines)) types.push("refactor");
  if (/\b(feat|feature|add|new)\b/.test(lines)) types.push("feat");

  if (types.length === 0) types.push("chore");
  return types[0];
}

function extractScope(diff) {
  const match = diff.match(/src\/([^/]+)\//);
  return match ? match[1] : null;
}

function generateMessage(diff) {
  const type = classifyChange(diff);
  const scope = extractScope(diff);
  const files = diff.match(/[\w\-]+\.\w+/g) || [];
  const fileCount = files.length;

  let desc = "";
  if (type === "feat") desc = `add ${fileCount} file${fileCount > 1 ? "s" : ""}`;
  else if (type === "fix") desc = `resolve issue in ${fileCount} file${fileCount > 1 ? "s" : ""}`;
  else if (type === "docs") desc = `update documentation`;
  else if (type === "test") desc = `add/update tests`;
  else if (type === "refactor") desc = `improve code structure`;
  else if (type === "perf") desc = `optimize performance`;
  else desc = `update ${fileCount} file${fileCount > 1 ? "s" : ""}`;

  const scopePart = scope ? `(${scope})` : "";
  return `${type}${scopePart}: ${desc}`;
}

function main() {
  const opts = parseArgs();
  if (opts.help) {
    console.log(`
commit-helper — Generate conventional commit messages from staged changes.

Usage:
  git add .
  commit-helper
  commit-helper --dry-run

Options:
  --dry-run   Preview message without copying to clipboard
  --help, -h  Show this help
`);
    return;
  }

  const diff = getDiff();
  const message = generateMessage(diff);

  console.log(`\n💡 Suggested commit message:\n`);
  console.log(`   ${message}\n`);

  if (!opts.dryRun) {
    try {
      const { execSync } = require("child_process");
      execSync(`echo "${message}" | clip`, { shell: "cmd.exe" });
      console.log("✓ Copied to clipboard!");
    } catch {
      console.log("(Copy the message above manually)");
    }
  }

  console.log("\nTo commit:");
  console.log(`  git commit -m "${message}"\n`);
}

main();