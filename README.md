# Canyon Plumbing & Heating — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.canyonplumbers.com/ (Boulder, CO).
Preview: https://cph.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

All business content is in `src/site.js`; colors and fonts are in `src/theme.css`. `src/App.jsx` is the shared layout.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `canyon-plumbing-heating` (framework: Vite). Connect the repo under Vercel → Settings → Git so pushes to `main` deploy automatically.
Domain `cph.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional):

| Variable | Purpose |
|---|---|
| `VITE_CONCEPT_END_DATE` | Countdown end date in the concept widget (defaults to 2026-11-20) |
| `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` | Live Google rating and review excerpts (`api/google-reviews.js`) |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Request-form emails (`api/contact.js`). Without them the form shows a demo message |

The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## What changed from the current site

- Real Canyon logo (from canyon_logo.jpg, made transparent) in the header and footer; favicon from their ring icon.
- Palette built from their logo green (#13f604 / #00ff00) and black, with a deeper green (#0b7a22) for readable text on light backgrounds.
- Hero uses their own crew photo in front of the Flatirons; services, about and team sections use their own job and staff photos (Meet the Team page).
- Expertise.com "Best Plumbers in Boulder" 2023 and 2025 awards from the home page now sit in a dedicated awards row.
- Six real testimonials from the current site, quoted verbatim and labeled with the source the site gives (Google or Facebook).
- Coupons, the VIP Protection Plan and Wisetack financing are on the home page instead of buried in sub-pages.
- "Book Online" now opens a real service request form; on the current site it links to #.
- Main menu headers and the Heat Pump link go somewhere (they link to # or nothing on the current site).
- One email address: the current contact link opens amber@ while the page shows service@.
- Removed the unfilled SMS-consent template text ([TYPES OF MESSAGE CONTENT ...]), which is also a compliance issue.
- Grouped 25+ scattered services into seven clear categories and lists all 16 service-area towns.

## Before client presentation

- Confirm the Google rating and count. 4.8 / 271 is a fallback from a third-party listing checked 2026-10-14.
- Get the Expertise.com badge images (the embeds load from Expertise's CDN, which wasn't reachable); the concept shows a styled text badge for 2023 and 2025.
- Membership naming: the home page calls it the "Premier Service Plan", the Memberships page sells the "VIP Protection Plan" ($299/yr). The concept uses the VIP plan; confirm name and price.
- Confirm emergency/after-hours availability. The current site says "day and night" and "same-day service" but lists Mon–Fri 8–4; the concept shows business hours only.
- Confirm the coupons ($50 new customer, $150 water heater, $250 tankless, free plumbing inspection) are current.
- Confirm the team roster and photos (Dan, Sean, Eric, Jacob, Mikhail, Rosa) are current, and permission to use staff photos.
- Confirm "Since 2000" (About page) and whether evaporative cooling is still offered.
- Confirm license labels for PC.0001573 and MP.00600504.
- Confirm service@canyonplumbers.com is the right inbox for website requests.
- Keep the independent-concept disclaimer visible; do not imply this is the company's official site.
- The countdown is display-only, not access control. The subdomain is public to anyone with the URL.
