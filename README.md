# Ai-Accountant — Marketing Site

A modern marketing website for **Ai-Accountant**, an AI-powered financial agent
company. Built with Next.js 14 (App Router) + Tailwind CSS, inspired by the
professional financial-tech aesthetic of [rillet.com/product/aura-ai](https://www.rillet.com/product/aura-ai).

## Design system

- Background: white (#ffffff)
- Primary accent: deep brown (#4a3728 / #2b1f17)
- Secondary accent: warm gold (#c8a882)
- Surface tint: cream (#faf6f1)
- Fonts: Geist Sans + Geist Mono

## Features

- **Hero** — "Offload the busy work. Keep the control." with a live-feeling
  product mock dashboard.
- **Project / Features** — 8 capability cards (automated bookkeeping,
  reconciliation, reporting, month-end close, forecasting, NL, audit trail,
  monitoring).
- **Customers** — 6 target segments (scaling SaaS, accounting firms,
  e-commerce, founders, fintech, multi-entity).
- **Demo video** — Video placeholder + chapter navigation.
- **About Us** — Mission, values, stats.
- **Auth** — Sign-up + log-in (localStorage-backed, ready to swap for
  NextAuth.js + DB).
- **License page** — Disabled CTA ("Coming soon").
- **Download page** — Protected route, requires auth, macOS + Windows download
  cards.

## Tech stack

- Next.js 16 / React 19
- Tailwind CSS 4
- TypeScript
- localStorage-backed auth (drop-in NextAuth.js compatible)

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deployment to Vercel

The fastest path is the Vercel dashboard (no CLI needed):

1. Push this repo to GitHub:
   ```bash
   git remote add origin git@github.com:YOUR_USER/ai-accountant.git
   git branch -M main
   git push -u origin main
   ```
2. Visit [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**.
4. (Optional) Add a custom domain in **Settings → Domains**.

### CLI alternative

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + AuthProvider
│   ├── page.tsx          # Homepage
│   ├── project/          # Deep-dive on the agent
│   ├── download/         # Protected: macOS/Windows download
│   ├── license/          # License + disabled CTA
│   ├── login/            # Login form
│   └── signup/           # Sign-up form
├── components/
│   ├── SiteShell.tsx     # Navbar + Footer wrapper
│   ├── Navbar.tsx        # Top navigation (auth-aware)
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Project.tsx
│   ├── Customers.tsx
│   ├── Demo.tsx
│   ├── About.tsx
│   └── CTA.tsx
└── lib/
    ├── utils.ts          # cn() helper
    └── auth-context.tsx  # AuthProvider + useAuth
```

## Swapping in real auth

`src/lib/auth-context.tsx` is intentionally minimal. To wire up real
authentication, replace the localStorage calls with NextAuth.js + a database
(e.g. Postgres + Prisma). The `useAuth()` API surface stays the same, so no
component changes are required.

## License & assets

The repository is the source for the company website only. The actual
Ai-Accountant desktop agent (macOS / Windows) ships separately.