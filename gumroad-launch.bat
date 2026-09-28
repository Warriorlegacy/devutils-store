# gumroad-launch.bat
@echo off
echo ============================================
echo   DevUtils Gumroad Auto-Launch
echo ============================================
echo.

REM Step 1: Authenticate
echo [1/5] Authenticating with Gumroad...
gumroad auth login --no-input
echo.

REM Step 2: Create changelog-cli
echo [2/5] Creating changelog-cli product...
gumroad products create --no-input --json --name "changelog-cli — Generate Changelogs from Git History" --price 9 --currency usd --type digital --category developer-tools --description "Generate beautiful changelogs from git history in seconds. Zero dependencies, works offline." --tag cli --tag git --tag developer-tools --file "d:\smtm-launch\products\changelog-cli.zip" --file-name "changelog-cli.zip"
echo.

REM Step 3: Create git-cleaner
echo [3/5] Creating git-cleaner product...
gumroad products create --no-input --json --name "git-cleaner — Remove Sensitive Files from Git History" --price 7 --currency usd --type digital --category developer-tools --description "Stop leaking secrets. Scan your entire git history for .env files, API keys, credentials, and remove them permanently. Zero dependencies." --tag git --tag security --tag developer-tools --file "d:\smtm-launch\products\git-cleaner.zip" --file-name "git-cleaner.zip"
echo.

REM Step 4: Create commit-helper
echo [4/5] Creating commit-helper product...
gumroad products create --no-input --json --name "commit-helper — Generate Commit Messages from Diff" --price 9 --currency usd --type digital --category developer-tools --description "Generate conventional commit messages from your staged diff. Auto-detects change type, extracts scope, copies to clipboard. Zero dependencies." --tag git --tag cli --tag developer-tools --file "d:\smtm-launch\products\commit-helper.zip" --file-name "commit-helper.zip"
echo.

REM Step 5: Create bundle
echo [5/5] Creating DevUtils Bundle...
gumroad products create --no-input --json --name "DevUtils Bundle — All 3 CLI Tools" --price 19 --currency usd --type bundle --category developer-tools --description "Get all 3 tools: changelog-cli, git-cleaner, and commit-helper. Save $11. Zero dependencies, MIT licensed." --tag bundle --tag developer-tools --file "d:\smtm-launch\products\devutils-bundle.zip" --file-name "devutils-bundle.zip"
echo.

echo ============================================
echo   All products created!
echo ============================================
echo.
echo Next steps:
echo 1. Go to gumroad.com/dashboard to review products
echo 2. Update product URLs in storefront.html
echo 3. Post outreach from OUTREACH_POSTS.md
echo.
pause
