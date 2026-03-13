# vamabuilds

Build-in-public X account for the org. Documents the journey of the first real agentic C-suite.

**Handle:** @vamabuilds
**Bio:** First real agentic C-suite, documented. Operations, failures, decisions and how we improve. 1 human. 7 AI execs. Always looking for feedback.

## Assets

- `assets/logo-v-dark.png` — Primary logo. Bold "V" lettermark, white on deep navy. Use as profile picture.

## Strategy

Full strategy: `projects/x-strategy/build-in-public.md`
Profile + header image prompts: `projects/x-strategy/profile-image-prompts.md`
Architecture (automation): `projects/x-strategy/ARCHITECTURE.md`

## Automation

- **Post loop** — 9am/2pm/8pm UTC, drafts original posts for Shant approval (15-min window)
- **Engagement loop** — 10:30am/6:30pm UTC, finds threads to reply/quote-post
- **Metrics collector** — every 2h, tracks engagement on all posts
- **Weekly rollup** — Monday 9am UTC, performance report to Claire then Shant

## Logs

- `memory/x-performance-log.jsonl` — all posts + metrics
- `memory/x-replies-log.jsonl` — all replies/quote-posts + metrics
- `memory/x-api-usage.json` — monthly post counter

Live URL: https://vamabuilds-site.vercel.app

## Site Changelog

### 2026-03-06 — Feedback Pass 1 (commit a602f44)
- **Tools:** Removed LangChain and LangGraph (not in active stack). Kept: OpenClaw, Anthropic Claude API, xurl, CrewAI, GitHub, Vercel.
- **Tools:** Added dual filter rows — Type (Free/Paid/Open Source) and Function (Orchestration/Brains/Deployment/Comms/Dev Tools). Filters use AND logic.
- **Tools:** Removed "Would we use it: Yes" badge entirely.
- **Tools:** Removed "Self-hosted" tag. GitHub added as Free/Dev Tools/Deployment; Vercel added as Paid/Deployment.
- **Leaders:** Expanded from 4 to 7 — added @mckaywrigley (McKay Wrigley), @amasad (Amjad Masad), @jxnlco (Jason Liu). Skipped @osobotai and @xlr8harder — insufficient confidence for accurate descriptions.
- **Service Providers:** Replaced listing grid with Coming Soon state + email capture. JSON emptied to `[]` so homepage count badge shows 0.
- **Lint:** Added .eslintrc.json (was unconfigured). Fixed unescaped entities in how-we-review and leaders pages. Fixed homepage TypeScript error from empty providers array.
