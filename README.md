# NextConnect Law — Website

Production-ready rebuild of nextconnectlaw.com on Next.js App Router, TypeScript and plain global CSS (no CSS modules, no Tailwind).

See [`docs/CONTENT-AUDIT.md`](docs/CONTENT-AUDIT.md) for a full log of which firm facts are confirmed, which are placeholders, and which source-document conflicts still need the firm's sign-off before launch.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/              Routes (App Router) — one folder per page, plus [slug] dynamic routes
components/       Reusable UI (ui/, layout/, sections/, forms/)
config/           Site-wide config (nav, site metadata)
content/          Firm content as typed data (firm, practice areas, team, locations, FAQs)
lib/              Shared types and logic (contact form validation, etc.)
styles/           Global CSS design system (variables, reset, base, layout, components)
docs/             Content audit / source-of-truth log
```

## Design system

All colors, typography, spacing and breakpoints are defined once as CSS custom properties in `styles/variables.css` and consumed everywhere via `var(--token)`. Do not introduce inline styles, CSS modules, or Tailwind — extend `styles/components.css` or `styles/layout.css` instead.

## Contact form

The contact form (`/contact`) validates client- and server-side, includes honeypot + timing-based spam protection, and runs as a Next.js Server Action (`app/contact/actions.ts`). **Email/CRM delivery is not yet wired up** — submissions are currently logged server-side only. See `.env.example` and the TODO in `app/contact/actions.ts` before launch.

## Scripts

```bash
npm run dev          # start dev server
npm run build         # production build
npm run start         # run production build
npm run lint           # ESLint
npm run format          # Prettier write
npm run format:check     # Prettier check
```
