# changelog-cli Launch Guide — First $100 Plan

## What You Have

✅ **Product**: `changelog-cli` — zero-dependency Node.js CLI that generates changelogs from git history
✅ **Price**: $9 USD one-time (Gumroad)
✅ **Target**: 12 sales = $108 (first $100 milestone)
✅ **Assets**: ZIP package, demo page, outreach posts, Gumroad listing copy

---

## Step 1: Upload to Gumroad (15 minutes)

1. Go to https://gumroad.com and sign up / log in
2. Click **"New Product"**
3. Fill in:
   - **Name**: changelog-cli — Generate Changelogs from Git History
   - **Price**: $9.00
   - **Category**: Developer Tools
   - **Description**: Copy from `GUMROAD_LISTING.md`
4. Upload `changelog-cli-v1.0.0.zip` as the product file
5. Set visibility to **Public**
6. Save and get your product URL (e.g., `https://gumroad.com/l/your-product`)
7. **Update the placeholder links** in `index.html` and `OUTREACH_POSTS.md` with your actual Gumroad URL

---

## Step 2: Deploy Demo Page (10 minutes)

1. Create a new GitHub repo: `changelog-cli-demo`
2. Upload `index.html`
3. Enable GitHub Pages in repo settings
4. Your demo URL will be: `https://[username].github.io/changelog-cli-demo/`
5. Use this URL in outreach posts as social proof

---

## Step 3: Launch Outreach (Today — Parallel)

### A. Reddit Posts (Post in r/programming, r/node, r/webdev)

Copy the posts from `OUTREACH_POSTS.md` and post them. Follow these rules:
- Wait 2-3 days between posts in different subreddits
- Don't spam — add genuine value
- Be ready to answer questions
- If a mod removes your post, don't argue — move on

**Best times to post**: 8-10 AM EST on Tuesday, Wednesday, or Thursday

### B. Hacker News (Show HN)

Post the Show HN thread from `OUTREACH_POSTS.md`. 
- Best time: 8-10 AM EST
- Be ready for comments — engage genuinely
- If it takes off, respond quickly to build momentum

### C. Twitter/X

Post the 3 tweets from `OUTREACH_POSTS.md`:
- Tweet 1: Direct pitch with link to Gumroad
- Tweet 2: Philosophy/building-in-public angle
- Tweet 3: Case study ("first sale in 3 days")
- Tag relevant accounts: @gumroad, @ProductHunt, indie dev accounts
- Use hashtags: #buildinpublic #indiehacker #devtools

### D. IndieHackers

Post the IndieHackers thread. This community loves "how I built X" posts.

---

## Step 4: Micro-Service (Parallel Cash Flow)

While the product sells, offer a specific service to guarantee cash:

**Offer**: "I'll build you a custom Node.js/Python automation script for $25-50, delivered in 24 hours."

**Where to post**:
- Twitter/X with #buildinpublic
- r/forhire (follow their rules)
- Upwork/Fiverr (create a gig)
- Local business Facebook groups
- Reddit: r/smallbusiness, r/entrepreneur

**Template post**:
> Software engineer available for quick automation scripts. 
> - Web scraping bots: $30
> - Data processing scripts: $25
> - API integrations: $40
> - Custom CLI tools: $50
> 
> PayPal, 24h delivery, free revisions. DM for details.

**Target**: 2-4 gigs = $50-200 (guaranteed cash while product sells)

---

## Step 5: Track & Iterate (Daily)

Update `~/.smtm/smtm-tracker.json` daily:

```json
{
  "date": "2026-09-28",
  "product_sales": 0,
  "micro_service_gigs": 0,
  "revenue_today": 0,
  "revenue_total": 0,
  "outreach_channels": ["reddit", "twitter", "hackernews"],
  "notes": "Launched product, posted to 3 subreddits"
}
```

---

## Revenue Milestones

| Milestone | Sales Needed | Revenue | Next Action |
|-----------|-------------|---------|-------------|
| First sale | 1 | $9 | Celebrate — you have a buyer! |
| $50 | 6 | $54 | Add testimonials to Gumroad |
| $100 (GOAL) | 12 | $108 | Build second product or expand marketing |
| $500 | 56 | $504 | Consider lowering price or adding upsell |
| $1000 | 112 | $1008 | Launch second product, build email list |

---

## Timeline to $100

**Week 1 (Today - Day 7)**:
- Day 1: Upload to Gumroad, deploy demo page
- Day 1-2: Post to Reddit, HN, Twitter
- Day 2-3: Post micro-service offer
- Day 3-7: Engage with comments, answer questions, iterate on messaging

**Week 2 (Day 8-14)**:
- Continue outreach
- Add testimonials from first buyers
- Consider price increase to $14 if demand is strong
- Build email list for future products

**Week 3-4**:
- If no sales by Day 14, pivot:
  - Lower price to $5
  - Add more distribution channels
  - Improve demo page
  - Consider bundling with other tools

---

## Key Metrics to Track

1. **Outreach reach**: How many people saw your posts?
2. **Click-through rate**: Gumroad views from outreach
3. **Conversion rate**: Views to purchases
4. **Time to first sale**: Benchmark for future products

---

## Next Products (After $100)

Once you hit $100, build more tools:
1. **commit-mate** — AI-powered commit messages ($9)
2. **git-cleaner** — remove sensitive files from git history ($7)
3. **repo-stats** — GitHub repo analytics CLI ($12)
4. **Bundle**: All 3 tools for $19

Stack products to reach $1000/month.

---

## Files Reference

- `bin/cli.js` — The CLI tool
- `package.json` — npm package metadata
- `README.md` — Product documentation
- `GUMROAD_LISTING.md` — Gumroad product page copy
- `OUTREACH_POSTS.md` — Reddit, HN, Twitter, IndieHackers posts
- `index.html` — Demo/landing page
- `changelog-cli-v1.0.0.zip` — Ready-to-upload product file

---

## Support

If you hit any issues:
1. Check Gumroad's seller docs: https://help.gumroad.com
2. Reddit self-promotion rules: https://reddit.zendesk.com/hc/en-us/articles/204536839
3. For code issues, open a GitHub issue

---

**You're ready to launch. Go make your first $100.**
