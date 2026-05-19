# Afriwood Studios — Frontend

Official marketing website for Afriwood Studios (Africa's first superhero universe).

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

## Requirements

- Node.js 20+
- npm 10+

## Setup

```bash
npm install
cp .env.example .env.local   # optional — for future API integration
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Project structure

```
src/
├── app/              Routes (App Router)
├── components/
│   ├── layout/       Navbar, Footer, shared layout
│   ├── sections/     Homepage sections
│   ├── movies/       Movies page
│   └── universe/     Universe page
└── lib/              Constants and utilities

public/assets/        Brand images (heroes, comics, backgrounds, UI)
```

## Pages (Milestone 1)

| Route | Status |
|-------|--------|
| `/` | Complete — responsive homepage |
| `/universe` | Complete |
| `/movies` | Complete |
| `/about` | Complete |
| `/store`, `/ngo`, `/academy`, etc. | Under development (placeholder) |

## Environment variables

See `.env.example`. No secrets are required for the static frontend. When the backend is connected, set `NEXT_PUBLIC_API_URL`.

## Deployment

```bash
npm run build
npm run start
```

Compatible with Vercel, Netlify, or any Node.js host.

## License

Proprietary — Afriwood Studios.
