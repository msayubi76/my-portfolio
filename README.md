# Salah ud Din — Portfolio

Recruiter- and client-focused portfolio built with **Nuxt.js**, **Vue.js**, **TypeScript** and **Tailwind CSS v4**.

## Stack

- Nuxt.js SSR / static generation
- Vue.js + TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite`
- Responsive mobile-first layout
- Light theme by default with SSR-safe cookie persistence for light/dark preference
- SEO + Open Graph + Schema.org profile metadata
- Printable `/resume` route
- Dynamic engineering case-study routes

## Local development

```bash
npm install
npm run typecheck
npm run dev
```

Open `http://localhost:3000`.

## Production

SSR build:

```bash
npm run build
npm run preview
```

Static generation:

```bash
npm run generate
```

## Tailwind setup

Tailwind is loaded from `app/assets/css/main.css`:

```css
@import "@fontsource-variable/inter/wght.css";
@import "tailwindcss";
```

and registered using the Tailwind v4 Vite plugin in `nuxt.config.ts`.

Most visual styling lives directly in Vue templates as Tailwind utility classes. `main.css` keeps the self-hosted Inter Variable font import, global theme tokens, base behavior, accessibility preferences and resume print rules. Theme preference is stored in a cookie so SSR and client hydration begin with the same theme state.

## Content

Portfolio content is centralized in:

```text
app/data/portfolio.ts
```

Update that file when adding projects, experience, skills or case-study content.

## Key routes

- `/` — portfolio homepage
- `/resume` — printable recruiter resume
- `/work/[slug]` — engineering case studies

## Resume PDF and share images

`public/Salah-ud-Din-Resume.pdf` and `public/og/<slug>.png` are generated from the site itself with headless Chrome/Edge. After changing resume or project content:

```bash
npm run dev        # in one terminal
npm run assets     # in another
```

## Analytics (optional)

Cookie-less Cloudflare Web Analytics is injected only when a token is set at build time:

```bash
NUXT_PUBLIC_CF_BEACON_TOKEN=your-token npm run generate
```

## Deploying to salahuddin.pk

`npm run generate`, then upload the contents of `.output/public/` to the web root. `public/.htaccess` serves `404.html` and sets caching on Apache/cPanel hosts.

## Adding media

- Photo: put a square image in `public/` and set `profile.photo` in `app/data/portfolio.ts`.
- Project screenshots or video: put files in `public/work/` and set `image` / `video` on the project.
- Recommendations: paste the text into `testimonials` in `app/data/portfolio.ts`. The section appears automatically.
