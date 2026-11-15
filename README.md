# Northside Strength — demo landing page

Fictional demo built with the `landing-page` skill (Next.js 16 + Tailwind v4).

## Edit content
All business data (name, phone, services, reviews, FAQ…) is in `src/content/site.ts`.
Brand colors are in the `@theme` block of `src/app/globals.css`.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Go live
1. In `src/content/site.ts`: set `demo: false`, the real `seo.url`, and a Formspree `form.endpoint`.
2. Push to GitHub and import the repo in Vercel.
3. Connect the domain and submit `/sitemap.xml` in Google Search Console.
