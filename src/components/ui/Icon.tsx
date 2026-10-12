// Inline SVG glyphs. Unicode arrows/asterisks (↗ → ✳ …) render as colour emoji on
// many phones, so every decorative glyph on the site is drawn here instead.

const paths = {
  "up-right": "M7 17 17 7M8 7h9v9",
  right: "M4 12h16M14 6l6 6-6 6",
  left: "M20 12H4M10 6l-6 6 6 6",
  up: "M12 20V4M6 10l6-6 6 6",
  down: "M12 4v16M6 14l6 6 6-6",
  close: "M6 6l12 12M18 6 6 18",
  check: "M5 12.5l4.5 4.5L19 7",
  asterisk: "M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  );
}
