/** Mark: a 3×3 knotted mesh with one cobalt knot — the one we're holding. */
export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true" className="logo-mark">
      <rect x="1" y="1" width="26" height="26" rx="7" fill="currentColor" />
      <g stroke="var(--logo-thread, #0b0c0e)" strokeWidth="1.4" strokeLinecap="round">
        <path d="M5 10.5 Q14 12.5 23 10.5" />
        <path d="M5 17.5 Q14 19.5 23 17.5" />
        <path d="M10.5 5 Q12 14 10.5 23" />
        <path d="M17.5 5 Q19 14 17.5 23" />
      </g>
      <circle cx="17.9" cy="18.6" r="2.6" fill="var(--sky)" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="wordmark">
      <LogoMark />
      <span>
        Allind<span className="wordmark__sub">Safety</span>
      </span>
    </span>
  );
}
