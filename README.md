# Allind Safety

Mobile-first safety net and invisible grill website for Pune, built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Local development

Run `npm ci`, then `npm run dev`.

## Production

Run `npm run build` and `npm run verify`. The site exports every service and location route into `out/`. Run `npm start` to serve the export locally.

## Images and interactions

`node scripts/optimize-images.cjs` creates responsive WebP images from the hero artwork and real installation photos. The hero prioritizes its mobile-sized image; other images load lazily. Most pages render with server components. The gallery uses a keyboard- and touch-friendly native dialog. The office map loads only when requested, and enquiry forms open WhatsApp directly. No enquiry is stored automatically.

## Sites

`.openai/hosting.json` stores the Sites identity and static export configuration. Source preparation and publishing use the Sites plugin. The `.sites-release/` folder contains the isolated publishing checkout; the application source remains in this repository.

## Animation and Vercel

GSAP animates page entrances and desktop hero parallax. Framer Motion supplies section reveals and spring card interactions. Motion loads on demand and respects reduced-motion preferences.

Vercel deploys the GitHub main branch. Production metadata defaults to https://www.allindsafety.com; SITE_ORIGIN can override it for other hosts.
