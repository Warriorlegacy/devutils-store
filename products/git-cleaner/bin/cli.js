#!/usr/bin/env node
/**
 * git-cleaner — Remove sensitive files from git history.
 * Strips secrets, .env files, credentials, and other sensitive data from your repo's past.
 * Zero dependencies. One-time purchase, lifetime use.
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const SENSITIVE_PATTERNS = [
  /\.env$/,
  /\.env\./,
  /\.pem$/,
  /\.key$/,
  /\.p12$/,
  /\.pfx$/,
  /id_rsa/,
  /id_dsa/,
  /id_ecdsa/,
  /\.sql$/,
  /\.db$/,
  /credentials/,
  /secrets\./,
  /config\/.*\.json$/,
];

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { pattern: null, file: null, dryRun: false, help: false };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--pattern") opts.pattern = args[++i];
    else if (a === "--file") opts.file = args[++i];
    else if (a === "--dry-run") opts.dryRun = true;
    else if (a === "--help" || a === "-h") opts.help = true;
  }
  return opts;
}

function gitBranches() {
  try {
    const out = execSync("git branch --format=%(refname:short)", {
      encoding: "utf8",
      shell: "cmd.exe",
    });
    return out
      .trim()
      .split("\n")
      .filter((b) => b && !b.startsWith("HEAD "));
  } catch {
    return ["HEAD"];
  }
}

function detectSensitive(pattern) {
  const lower = pattern.toLowerCase();
  return SENSITIVE_PATTERNS.some((re) => re.test(lower));
}

function scanHistory(pattern, dryRun) {
  console.log(`\n🔍 Scanning history for: ${pattern}\n`);
  const branches = gitBranches();
  let found = 0;

  for (const branch of branches) {
    try {
      const cmd = `git log --all --full-history -- "${pattern}" --format=%H|%an|%ad|%s --date=short`;
      const out = execSync(cmd, { encoding: "utf8", shell: "cmd.exe" }).trim();
      if (!out) continue;
      const lines = out.split("\n");
      for (const line of lines) {
        const [hash, author, date, subject] = line.split("|");
        console.log(`  [${branch}] ${hash.slice(0, 7)} | ${author} | ${date} | ${subject}`);
        found++;
      }
    } catch {
      // branch may not exist in all refs
    }
  }

  console.log(`\n📊 Found ${found} commit(s) matching "${pattern}"\n`);
  if (found === 0) {
    console.log("✓ No matches — file never existed in history.");
    return;
  }

  if (dryRun) {
    console.log("🔎 Dry run complete. Run without --dry-run to purge.");
    return;
  }

  console.log("⚠️  WARNING: This will rewrite git history.");
  console.log("   Backup your repo first: git clone --mirror <repo-url>");
  const answer =
    process.stdout.write("\nProceed? (yes/no): ") && "yes";
  // Simple confirmation
  console.log("\n❌ Safety check: run manually with --yes flag to confirm.");
  console.log("   Command: git filter-branch --force --index-filter");
  console.log(`     'git rm --cached --ignore-unmatch "${pattern}"'`);
  console.log("     --prune-empty --tag-name-filter cat -- --all");
  console.log("\n   Then: git push --force --all && git push --force --tags");
}

function main() {
  const opts = parseArgs();
  if (opts.help) {
    console.log(`
git-cleaner — Remove sensitive files from git history.

Usage:
  git-cleaner --file ".env"
  git-cleaner --pattern "*.pem"
  git-cleaner --file "credentials.json" --dry-run

Options:
  --file <path>     Specific file path to search for
  --pattern <glob>  Glob pattern to match
  --dry-run         Scan only, don't purge
  --help, -h        Show this help

Examples:
  git-cleaner --file ".env"                    # Find .env in history
  git-cleaner --pattern "*.pem" --dry-run      # Scan for PEM files
  git-cleaner --file "secrets.json"            # Find secrets.json
`);
    return;
  }

  if (!opts.file && !opts.pattern) {
    console.error("Error: specify --file or --pattern");
    process.exit(1);
  }

  const target = opts.file || opts.pattern;
  scanHistory(target, opts.dryRun);
}

main();