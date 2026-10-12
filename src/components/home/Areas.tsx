import Link from "next/link";
import { locationsData } from "@/data/locations";
import { Marquee } from "@/components/system/Marquee";

export function Areas() {
  const half = Math.ceil(locationsData.length / 2);
  const rows = [locationsData.slice(0, half), locationsData.slice(half)];
  return (
    <section className="areas" data-theme="sky">
      <div className="wrap areas__head">
        <p className="mono label">(08) Where we work</p>
        <p className="areas__lede">
          Every corner of Pune — and the bits in between. Local crews, usually <em>on site within 24 hours.</em>
        </p>
      </div>
      <div className="areas__marquees" aria-hidden="true">
        {rows.map((row, r) => (
          <Marquee key={r} reverse={r === 1} className="areas__marquee">
            {row.map((loc) => (
              <span key={loc.slug} className="areas__name">
                {loc.name}
                <i>✳</i>
              </span>
            ))}
          </Marquee>
        ))}
      </div>
      <nav className="wrap areas__chips" aria-label="Service areas">
        {locationsData.map((loc) => (
          <Link key={loc.slug} href={`/locations/${loc.slug}`} className="chip">
            {loc.name}
            <span className="mono">{loc.postalCode}</span>
          </Link>
        ))}
        <Link href="/locations" className="chip chip--solid">
          All areas ↗
        </Link>
      </nav>
    </section>
  );
}
