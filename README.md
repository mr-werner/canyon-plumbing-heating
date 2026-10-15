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

- "Book Online" now opens a real service request form; on the current site it links to #.
- Main menu headers and the Heat Pump link go somewhere (they link to # or nothing on the current site).
- One email address: the current contact link opens amber@ while the page shows service@.
- Removed the unfilled SMS-consent template text ([TYPES OF MESSAGE CONTENT ...]), which is also a compliance issue.
- Grouped 25+ scattered services into eight clear categories and lists all 16 service-area towns.

## Before client presentation

- Confirm the Google rating and count. 4.8 / 271 is a fallback from a third-party listing checked 2026-10-14.
- Confirm emergency/after-hours availability. The current site says "day and night" but lists Mon–Fri 8–4; the concept shows business hours only.
- Confirm the $50 first-time-customer offer and what the Premier Service Plan includes (pricing isn't on the home page).
- Confirm license labels for PC.0001573 and MP.00600504, financing options, and whether evaporative cooling is still offered.
- Confirm service@canyonplumbers.com is the right inbox for website requests.
- Replace the icon wordmark with the business's real logo, and add real photos with permission.
- Keep the independent-concept disclaimer visible; do not imply this is the company's official site.
- The countdown is display-only, not access control. The subdomain is public to anyone with the URL.
