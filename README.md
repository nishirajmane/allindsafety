# Allind Safety

Mobile-first safety net and invisible grill website for Pune, built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Local development

Run `npm ci`, then `npm run dev`.

## Production

Run `npm run build` and `npm run verify`. The site exports every service and location route into `out/`. Run `npm start` to serve the export locally.

## Design

Concept: "Held." Ink, bone and a single cobalt accent; Inter Tight, Instrument Serif italics and JetBrains Mono.

- The home hero is a live three.js safety net (verlet physics). Pointer presses into it; a click or tap throws a ball the net catches. It pauses off-screen and falls back to a static frame for reduced motion.
- GSAP + ScrollTrigger drive the pinned "anatomy of a knot", the horizontal work reel, the process card deck and line reveals (SplitText). Lenis smooths wheel scrolling; touch keeps native momentum.
- Framer Motion handles the menu, route curtain, gallery lightbox, reviews and FAQ.
- Enquiry forms compose a WhatsApp message; nothing is stored.

## Images

`node scripts/art-direct-images.cjs` re-grades the raw photos in `public/gallery` and `public/services` into `public/art` with one consistent look and clean file names.
## Sites

`.openai/hosting.json` stores the Sites identity and static export configuration. Source preparation and publishing use the Sites plugin. The `.sites-release/` folder contains the isolated publishing checkout; the application source remains in this repository.

## Vercel

Vercel deploys the GitHub main branch. Production metadata defaults to https://www.allindsafety.com; SITE_ORIGIN can override it for other hosts.
