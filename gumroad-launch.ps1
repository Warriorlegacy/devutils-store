#!/usr/bin/env pwsh
# DevUtils Gumroad Auto-Launch
# Creates all 4 products on Gumroad via CLI
# Requires: gumroad CLI installed, user to approve OAuth in browser

param(
    [switch]$SkipAuth
)

$ErrorActionPreference = "Stop"
$GUMROAD = "$env:USERPROFILE\.gumroad\gumroad.exe"
$PRODUCTS_DIR = "d:\smtm-launch\products"

function Write-Step($step, $total, $msg) {
    Write-Host "`n[$step/$total] $msg" -ForegroundColor Cyan
    Write-Host ("=" * 60) -ForegroundColor DarkGray
}

function Wait-ForAuth {
    Write-Host "`nA browser window will open. Please approve the Gumroad access request." -ForegroundColor Yellow
    Write-Host "If no browser opens, copy this URL manually:`n" -ForegroundColor Yellow
    & $GUMROAD auth login --no-input 2>&1 | Write-Host
    Write-Host "`nPress Enter after approving in browser..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}

function New-GumroadProduct {
    param(
        [string]$Name,
        [string]$Price,
        [string]$Description,
        [string]$File,
        [string]$Type = "digital",
        [string[]]$Tags = @()
    )
    
    $args = @(
        "products", "create",
        "--no-input",
        "--json",
        "--name", $Name,
        "--price", $Price,
        "--currency", "usd",
        "--type", $Type,
        "--category", "developer-tools",
        "--description", $Description,
        "--file", $File,
        "--file-name", (Split-Path $File -Leaf)
    )
    
    foreach ($tag in $Tags) {
        $args += @("--tag", $tag)
    }
    
    Write-Host "Creating: $Name" -ForegroundColor White
    $output = & $GUMROAD @args 2>&1
    $output | Out-Host
    
    # Extract product ID from JSON output
    if ($LASTEXITCODE -eq 0 -and $output -match '"id"\s*:\s*"([^"]+)"') {
        return $matches[1]
    }
    return $null
}

function Publish-GumroadProduct {
    param([string]$ProductId)
    if (-not $ProductId) {
        Write-Host "  No product ID, skipping publish" -ForegroundColor Yellow
        return
    }
    Write-Host "  Publishing product $ProductId..." -ForegroundColor Gray
    & $GUMROAD products publish $ProductId --no-input 2>&1 | Out-Null
    Write-Host "  ✓ Published" -ForegroundColor Green
}

# Main execution
Write-Host "`n============================================" -ForegroundColor Magenta
Write-Host "  DevUtils Gumroad Auto-Launch" -ForegroundColor Magenta
Write-Host "============================================`n" -ForegroundColor Magenta

# Check gumroad CLI
if (-not (Test-Path $GUMROAD)) {
    Write-Host "ERROR: Gumroad CLI not found at $GUMROAD" -ForegroundColor Red
    Write-Host "Run: go build -o $GUMROAD ./cmd/gumroad" -ForegroundColor Yellow
    exit 1
}

# Authenticate
if (-not $SkipAuth) {
    Write-Step 1 5 "Authenticating with Gumroad"
    Wait-ForAuth
} else {
    Write-Host "`n[Skipping auth - using existing token]"
}

# Create products
$productIds = @{}

Write-Step 2 5 "Creating changelog-cli"
$productIds["changelog-cli"] = New-GumroadProduct `
    -Name "changelog-cli — Generate Changelogs from Git History" `
    -Price "9" `
    -Description "Generate beautiful changelogs from git history in seconds. Zero dependencies, works offline. Supports conventional commits, scope extraction, and range filtering." `
    -File (Join-Path $PRODUCTS_DIR "changelog-cli.zip") `
    -Type "digital" `
    -Tags @("cli", "git", "developer-tools", "changelog")

Write-Step 3 5 "Creating git-cleaner"
$productIds["git-cleaner"] = New-GumroadProduct `
    -Name "git-cleaner — Remove Sensitive Files from Git History" `
    -Price "7" `
    -Description "Stop leaking secrets. Scan your entire git history for .env files, API keys, credentials, and remove them permanently. Zero dependencies." `
    -File (Join-Path $PRODUCTS_DIR "git-cleaner.zip") `
    -Type "digital" `
    -Tags @("git", "security", "developer-tools", "secrets")

Write-Step 4 5 "Creating commit-helper"
$productIds["commit-helper"] = New-GumroadProduct `
    -Name "commit-helper — Generate Commit Messages from Diff" `
    -Price "9" `
    -Description "Generate conventional commit messages from your staged diff. Auto-detects change type, extracts scope, copies to clipboard. Zero dependencies." `
    -File (Join-Path $PRODUCTS_DIR "commit-helper.zip") `
    -Type "digital" `
    -Tags @("git", "cli", "developer-tools", "commits")

Write-Step 5 5 "Creating DevUtils Bundle"
$productIds["devutils-bundle"] = New-GumroadProduct `
    -Name "DevUtils Bundle — All 3 CLI Tools" `
    -Price "19" `
    -Description "Get all 3 tools: changelog-cli, git-cleaner, and commit-helper. Save $11. Zero dependencies, MIT licensed." `
    -File (Join-Path $PRODUCTS_DIR "devutils-bundle.zip") `
    -Type "bundle" `
    -Tags @("bundle", "developer-tools", "cli")

# Publish all products
Write-Host "`nPublishing all products..." -ForegroundColor Cyan
foreach ($product in $productIds.GetEnumerator()) {
    Publish-GumroadProduct -ProductId $product.Value
}

# Save product IDs
$output = @{}
foreach ($product in $productIds.GetEnumerator()) {
    $output[$product.Key] = $product.Value
}
$output | ConvertTo-Json | Set-Content "d:\smtm-launch\gumroad-product-ids.json"
Write-Host "`nProduct IDs saved to d:\smtm-launch\gumroad-product-ids.json" -ForegroundColor Green

# Summary
Write-Host "`n============================================" -ForegroundColor Green
Write-Host "  ALL PRODUCTS CREATED!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host "`nProduct IDs:"
foreach ($product in $productIds.GetEnumerator()) {
    Write-Host "  $($product.Key): $($product.Value)"
}
Write-Host "`nNext steps:"
Write-Host "1. Go to https://gumroad.com/dashboard"
Write-Host "2. Verify all 4 products are live"
Write-Host "3. Copy your Gumroad profile URL"
Write-Host "4. Update storefront.html with product URLs"
Write-Host "5. Post outreach from OUTREACH_POSTS.md"
Write-Host ""
