# Inbox Orbit

Inbox Orbit is a Next.js app that unifies Gmail and Google Calendar into a polished productivity dashboard. It includes email+calendar landing pages, auth routes, Prisma-backed user signup/login, and a professional marketing site with pricing and contact pages.

## Features

- Landing page with marketing content and official footer
- Signup and login with email/password authentication
- Auth API routes under `src/app/api/auth`
- Dashboard redirect after successful login/signup
- Pricing page at `/pricing`
- Contact page at `/contact`
- Prisma + PostgreSQL for user data
- Cookie-based auth token storage

## Pages

- `/` — homepage
- `/signup` — signup page with full name, email, and password
- `/login` — login page
- `/dashboard` — authenticated dashboard
- `/pricing` — pricing page
- `/contact` — contact page

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file with your database connection and any required secrets.

3. Run the development server:

```bash
npm run dev
```

4. Open the app in your browser:

```bash
http://localhost:3000
```

If port `3000` is occupied, Next.js will automatically use the next available port.

## Build & Production

```bash
npm run build
npm start
```

## Code Structure

- `src/app/layout.tsx` — root layout and metadata
- `src/app/page.tsx` — homepage landing page
- `src/app/signup/page.tsx` — signup flow
- `src/app/login/page.tsx` — login flow
- `src/app/dashboard/page.tsx` — dashboard page
- `src/app/pricing/page.tsx` — pricing page
- `src/app/contact/page.tsx` — contact page
- `src/app/api/auth/signup/route.ts` — signup API route
- `src/app/api/auth/login/route.ts` — login API route
- `src/lib/auth.ts` — auth helpers
- `src/lib/db.ts` — Prisma client setup
- `prisma/schema.prisma` — database schema

## Scripts

- `npm run dev` — start development server
- `npm run build` — build production app
- `npm start` — run production server
- `npm run lint` — run ESLint

## Deployment

This app can be deployed on Vercel or any platform that supports Next.js. Make sure your environment includes the database URL and any auth-related secrets.
