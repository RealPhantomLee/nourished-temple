# NOURISHED TEMPLE: SHIPPING PLAN
**Status:** Production-Ready (90% complete)  
**Timeline:** 1 week to full launch  
**Target:** Ship e-commerce platform with Stripe checkout + referral system live

---

## PHASE 1: Add Test Coverage (3-4 Days)

### 1.1 Jest Test Suite for Critical Paths

#### Auth Tests (`tests/api/auth.test.ts`)
- Login with valid/invalid credentials
- JWT token refresh
- Session expiry
- **Time:** 1 day

#### Checkout Tests (`tests/api/checkout/route.test.ts`)
- Create session with valid cart
- Invalid cart raises 400
- Referral metadata attached
- Webhook signature verification
- Payment_intent.succeeded updates earnings
- **Time:** 1-2 days

#### Referral Tests (`tests/api/referral/route.test.ts`)
- Generate unique referral code
- Get user earnings
- Attribute purchase to referrer
- Multiple referrals accumulate
- **Time:** 1 day

#### Contact Form Tests (`tests/api/contact/route.test.ts`)
- Valid submission stored
- Missing fields rejected
- Wellness intake captures alkaline level
- **Time:** 1 day

**Target:** 75%+ coverage of API routes  

### 1.2 Cypress E2E Tests
- [ ] Homepage → featured products visible
- [ ] Add product → checkout → Stripe modal
- [ ] Complete test payment (test keys)
- [ ] Confirmation email mock
- [ ] Referral link → friend signup → earnings
- [ ] Contact form submit → admin dashboard
- **Time:** 1-2 days

---

## PHASE 2: Structured Logging & Error Handling (2 Days)

### 2.1 Implement Sentry
- Create Sentry project, add DSN to `.env.local`
- Initialize in `src/lib/sentry.ts`
- Wrap API routes with error capture
- **Time:** 1 day

### 2.2 Webhook Error Handling
- Add structured logging (JSON with timestamp, event_type, user_id, status, error)
- Alert on critical failures (e.g., payment confirmation failed)
- Handle edge cases: refunds, payment failures, delayed webhooks
- **Time:** 1 day

---

## PHASE 3: Email Notifications (2 Days)

### 3.1 Purchase Confirmation Email
- **When:** After `checkout.session.completed` webhook fires
- **Template:** Order confirmation with items, total, tracking link
- **Library:** Resend (already imported)
- **Time:** 1 day

### 3.2 Referral Earnings Email
- **When:** Referral purchase completed
- **Template:** Earnings notification + monthly total + withdrawal link
- **Time:** 1 day

---

## PHASE 4: Admin Dashboard Enhancements (1 Day)

### 4.1 Order Management (`src/app/admin/orders/page.tsx`)
- [ ] List all orders with status (paid, pending, refunded)
- [ ] Order details (items, customer, referrer, total)
- [ ] Manual actions (ship, refund, resend confirmation)

### 4.2 Referral Dashboard (`src/app/admin/referrals/page.tsx`)
- [ ] Top referrers leaderboard
- [ ] Earnings breakdown
- [ ] Pending payments
- [ ] Export referral CSV

### 4.3 Analytics (`src/app/admin/analytics/page.tsx`)
- [ ] Revenue (this month / all-time)
- [ ] Orders this week
- [ ] Referral conversion rate
- [ ] Top products by volume

---

## PHASE 5: Deployment & Configuration (1 Day)

### 5.1 Environment Variables
- DATABASE_URL, STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY
- SENDGRID_API_KEY (or RESEND_API_KEY)
- SENTRY_DSN, NEXT_PUBLIC_SITE_URL

### 5.2 Vercel Deployment
- Push to `main` branch → Vercel auto-builds
- Verify build logs (no errors)
- Test production: Stripe checkout, emails, analytics

### 5.3 DNS & Domain
- Ensure `nourishedtemple.com` points to Vercel
- Update DNS records (A or CNAME)
- SSL auto-provisioned by Vercel

---

## PHASE 6: Launch & Monitoring (Ongoing)

### 6.1 Go-Live Checklist
- [ ] All tests passing locally
- [ ] Staging/preview deployment verified
- [ ] Production secrets in Vercel
- [ ] Email templates tested (send test order)
- [ ] Stripe webhooks live (verify dashboard)
- [ ] Sentry alerts configured
- [ ] Database backups enabled
- [ ] support@nourishedtemple.com setup

### 6.2 Monitor First 48 Hours
- **Metrics:** Uptime, Stripe webhook success (>99%), email delivery (>98%), API response time (<500ms)
- **Action:** Check Vercel logs + Sentry + Stripe hourly

### 6.3 Post-Launch
- **Day 1:** Monitor + fix immediate issues
- **Day 7:** Review analytics, gather feedback
- **Week 2:** Iterate on UX or add features (loyalty bonuses)

---

## DELIVERABLES CHECKLIST

**Code Quality:**
- [ ] Jest tests (75%+ coverage) passing
- [ ] Cypress E2E tests passing
- [ ] Sentry integration live + alerting
- [ ] Error handling in webhooks
- [ ] Email notifications sent
- [ ] Admin dashboards built

**Deployment:**
- [ ] Env vars configured in Vercel
- [ ] Production Stripe keys live
- [ ] Custom domain + SSL
- [ ] Database backups enabled
- [ ] Monitoring + alerting

**Testing:**
- [ ] Manual: Add cart → checkout → confirmation email received
- [ ] Manual: Referral code → friend purchase → earnings appear
- [ ] Manual: Simulate Stripe webhook → order + email + earnings updated

---

## SUCCESS METRICS (7 days post-launch)

- ✅ 10+ orders received
- ✅ $100+ revenue
- ✅ 0 critical errors (Sentry)
- ✅ 100% email delivery rate
- ✅ >20% checkout conversion
- ✅ 0 Stripe webhook failures

---

**Owner:** RealPhantomLee | **Status:** Ready to execute | **Last updated:** 2026-06-23
