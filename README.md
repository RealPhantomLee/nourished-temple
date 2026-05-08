# Nourished Temple

**E-commerce and wellness platform for Nourished Temple LLC — alkaline-electric "Cell Food Kreationz." Built on Next.js 16 with Stripe checkout, NextAuth, Prisma + Postgres, Sanity CMS, and a referral-revenue model.**

> Real production storefront for a real business — not a portfolio toy.

---

## What the site does

Nourished Temple LLC sells alkaline-electric foods rooted in Dr. Sebi's nutritional philosophy. The site needs to:

- Showcase the brand and product line (shop, herbs, services, events)
- Let customers check out with a card via Stripe
- Capture wellness-intake submissions (alkaline level, dietary restrictions, health concerns)
- Run a referral program where customers earn on referred orders
- Let admins manage content via the Sanity Studio embedded at `/studio`
- Refresh upcoming events on a Vercel cron schedule

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | **Next.js 16** (App Router, RSC) |
| UI | **React 19**, **Tailwind CSS 4** |
| Auth | **NextAuth (`next-auth` + `@auth/core`)** with credential + role-based access |
| DB | **PostgreSQL** via **Prisma 5** ORM |
| Payments | **Stripe** (checkout sessions + `@stripe/stripe-js`) |
| CMS | **Sanity** (`next-sanity`) embedded at `/studio` |
| Hosting | **Vercel** with scheduled crons |
| Lang | TypeScript 5 |

---

## Application surface

```
/                  Landing page
/about             Brand story
/shop              Product catalog (Sanity-backed)
/herbs             Herbal index
/services          Wellness services
/events            Events calendar (cron-refreshed)
/contact           Wellness intake form (writes to ContactSubmission)
/cart              Cart
/api/checkout      Stripe checkout session
/api/cron/refresh-events  Scheduled event refresh (Vercel cron, 3×/week)
/dashboard         Customer dashboard (orders, referral earnings)
/admin             Admin tools
/studio            Sanity CMS (embedded)
/privacy /terms /not-found
```

---

## Data model (Prisma)

The schema models the real business:

- `User` — customers and admins, with **referral codes**, **referrals counted**, and **earnings tracked**
- `ContactSubmission` — wellness intake form with alkaline level, dietary restrictions, health concerns
- `Order` — orders linked to a Stripe session ID, with referral code attribution and JSON line items

See [`prisma/schema.prisma`](prisma/schema.prisma) for the full schema.

---

## Local development

```bash
# 1) Install
npm install

# 2) Configure environment
cp .env.example .env
# Fill in: DATABASE_URL, NEXTAUTH_SECRET, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET,
#          SANITY_PROJECT_ID, SANITY_DATASET, CRON_SECRET, ...

# 3) Set up the database
npx prisma migrate dev

# 4) Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The Sanity studio is served at [http://localhost:3000/studio](http://localhost:3000/studio).

---

## Deployment

The site deploys to Vercel. The `vercel.json` configures a cron that hits `/api/cron/refresh-events` Mon/Thu/Sat at 07:00 UTC, gated by a shared `CRON_SECRET`.

`npm run build` runs `prisma generate` before `next build`, so the Prisma client is always in sync with the schema in production builds.

---

## Notes for AI agents working on this codebase

This project is on **Next.js 16**, which has breaking changes from earlier versions (App Router conventions, RSC behavior, file structure). When in doubt, read the relevant guide in `node_modules/next/dist/docs/` or the official Next.js 16 docs rather than relying on training data. See [`AGENTS.md`](AGENTS.md).

---

## Author

**RealPhantomLee Tucker** — [github.com/RealPhantomLee](https://github.com/RealPhantomLee)
