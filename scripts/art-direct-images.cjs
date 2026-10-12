// Re-grades the raw installation photos into one consistent, editorial look
// (warm highlights, softened saturation, lifted contrast) and gives them clean names.
// Run: node scripts/art-direct-images.cjs
const sharp = require("sharp");
const fs = require("node:fs");
const path = require("node:path");

const out = path.join(process.cwd(), "public", "art");
fs.mkdirSync(path.join(out, "work"), { recursive: true });
fs.mkdirSync(path.join(out, "services"), { recursive: true });

const work = [
  ["WhatsApp Image 2026-06-20 at 11.18.32.jpeg", "01-invisible-grill-night"],
  ["WhatsApp Image 2026-06-20 at 11.16.36 (1).jpeg", "02-curved-terrace-net"],
  ["WhatsApp Image 2026-06-20 at 11.16.37.jpeg", "03-kid-safe-balcony"],
  ["WhatsApp Image 2026-06-20 at 11.16.47.jpeg", "04-garden-view-net"],
  ["WhatsApp Image 2026-06-20 at 11.18.29 (1).jpeg", "05-invisible-grill-long"],
  ["WhatsApp Image 2026-06-20 at 11.16.38.jpeg", "06-sports-net"],
  ["WhatsApp Image 2026-06-20 at 11.16.36.jpeg", "07-full-height-net"],
  ["WhatsApp Image 2026-06-20 at 11.16.46.jpeg", "08-glass-rail-net"],
  ["WhatsApp Image 2026-06-20 at 11.16.38 (1).jpeg", "09-invisible-grill-dusk"],
  ["WhatsApp Image 2026-06-20 at 11.16.47 (1).jpeg", "10-mid-rise-net"],
  ["WhatsApp Image 2026-06-20 at 11.16.37 (1).jpeg", "11-tension-check"],
  ["WhatsApp Image 2026-06-20 at 11.18.40.jpeg", "12-invisible-grill-skyline"],
  ["WhatsApp Image 2026-06-20 at 11.16.37 (2).jpeg", "13-bird-spikes-macro"],
];

// Gentle warm grade: R up, B down, slight contrast lift.
const grade = (img) =>
  img
    .modulate({ saturation: 0.86, brightness: 1.01 })
    .recomb([
      [1.05, 0.03, 0],
      [0.01, 1.0, 0.01],
      [0, 0.02, 0.93],
    ])
    .linear(1.07, -7);

async function run() {
  const jobs = [];
  for (const [file, name] of work) {
    const src = path.join("public", "gallery", file);
    for (const width of [720, 1280]) {
      jobs.push(
        grade(sharp(src).trim({ threshold: 18 }).resize({ width, withoutEnlargement: true }))
          .webp({ quality: 80 })
          .toFile(path.join(out, "work", `${name}-${width}.webp`)),
      );
    }
  }
  for (const file of fs.readdirSync(path.join("public", "services"))) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue;
    const name = file.replace(/\.[^.]+$/, "");
    jobs.push(
      grade(sharp(path.join("public", "services", file)).resize({ width: 960, withoutEnlargement: true }))
        .webp({ quality: 80 })
        .toFile(path.join(out, "services", `${name}.webp`)),
    );
  }
  await Promise.all(jobs);
  console.log(`Art-directed ${jobs.length} images into public/art`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
