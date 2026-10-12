export interface WorkItem {
  slug: string;
  title: string;
  kind: string;
  w: number;
  h: number;
}

// Graded images live in /public/art/work/<slug>-<720|1280>.webp
export const work: WorkItem[] = [
  { slug: "01-invisible-grill-night", title: "Skyline, uninterrupted", kind: "Invisible grill", w: 1280, h: 591 },
  { slug: "02-curved-terrace-net", title: "The curved terrace", kind: "Balcony net", w: 1000, h: 667 },
  { slug: "03-kid-safe-balcony", title: "Room to be curious", kind: "Children net", w: 960, h: 1280 },
  { slug: "04-garden-view-net", title: "Green, kept close", kind: "Balcony net", w: 1200, h: 1600 },
  { slug: "05-invisible-grill-long", title: "Forty feet of quiet", kind: "Invisible grill", w: 591, h: 1280 },
  { slug: "06-sports-net", title: "Box cricket, boxed in", kind: "Sports net", w: 554, h: 498 },
  { slug: "07-full-height-net", title: "Monsoon-proof, floor to ceiling", kind: "Balcony net", w: 720, h: 1280 },
  { slug: "08-glass-rail-net", title: "Glass rail, double guard", kind: "Balcony net", w: 583, h: 1280 },
  { slug: "09-invisible-grill-dusk", title: "Blue hour", kind: "Invisible grill", w: 706, h: 989 },
  { slug: "10-mid-rise-net", title: "Mid-rise, full span", kind: "Pigeon net", w: 738, h: 1600 },
  { slug: "11-tension-check", title: "Every knot, tested", kind: "On site", w: 500, h: 500 },
  { slug: "12-invisible-grill-skyline", title: "Lights on, risk off", kind: "Invisible grill", w: 1280, h: 591 },
  { slug: "13-bird-spikes-macro", title: "Polycarbonate, up close", kind: "Bird spikes", w: 1000, h: 1000 },
];

export const workSrc = (item: WorkItem, size: 720 | 1280 = 1280) => `/art/work/${item.slug}-${size}.webp`;

export const testimonials = [
  {
    name: "Rohan Deshmukh",
    area: "Koregaon Park",
    service: "Balcony net",
    text: "They finished in two hours, cleaned everything up, and the view is completely untouched. My daughter plays out there now and I don't hover.",
  },
  {
    name: "Priyanka Nair",
    area: "Kothrud",
    service: "Pigeon net",
    text: "Three years of pigeons, solved in one afternoon. Clean installation, quick response, and honestly you can barely see the net.",
  },
  {
    name: "Karthik Reddy",
    area: "Baner",
    service: "Sports net",
    text: "Heavy-duty mesh for our society's cricket cage and a properly sturdy pole setup. Two seasons in, not a single sag.",
  },
];

export const process = [
  {
    title: "Say hello",
    text: "Call or WhatsApp. Tell us your floor, your space and what's worrying you. Two minutes, tops.",
    meta: "Day 0",
  },
  {
    title: "Free site visit",
    text: "We measure, check anchor points and bring material samples to touch. No charge, no pressure.",
    meta: "Within 24 hrs",
  },
  {
    title: "One clear quote",
    text: "A single price, in writing, before we drill a single hole. No surprises at the end.",
    meta: "Same visit",
  },
  {
    title: "Installed & load-tested",
    text: "Most balconies are done in about two hours. We tension every knot, test the load and leave it spotless.",
    meta: "~2 hrs",
  },
];

export const faqs = [
  {
    question: "Safety nets or invisible grills — which should I choose?",
    answer:
      "Nets suit balconies, pets and bird protection and are the most economical. Invisible grills use slim marine-grade steel cables for a more permanent, architectural barrier. We'll look at your space and recommend honestly during the free site visit.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most standard balconies are finished in about two hours. Larger spaces, duct areas or special fittings may take longer — we confirm timing after measuring your site.",
  },
  {
    question: "Will the nets survive Pune's sun and monsoon?",
    answer:
      "Yes. We use UV-stabilised HDPE and copolymer nylon built for outdoor exposure, with rust-proof stainless fittings. Expected lifespan ranges from 7 to 15 years depending on material and exposure.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on area, material and fittings. The site visit and measurements are free, and you get one clear written quote before any work begins.",
  },
  {
    question: "Is there a warranty?",
    answer:
      "Yes — 5 to 7 years depending on the product. Our team explains the coverage and includes the terms with your quote.",
  },
  {
    question: "Can the nets hold real weight?",
    answer:
      "Our balcony nets are rated at 120–150 kg breaking load per knot, children nets at 160 kg and invisible grill cables up to 400 kg tensile strength.",
  },
];
