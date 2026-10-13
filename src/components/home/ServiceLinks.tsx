import Link from "next/link";
import { servicesData } from "@/data/services";

/** Static, crawlable list of every service, directly under the hero. */
export function ServiceLinks() {
  return (
    <nav className="svc-strip" aria-label="Our safety solutions in Pune" data-theme="dark">
      <div className="wrap svc-strip__inner">
        <p className="mono">We install in Pune</p>
        <ul>
          {servicesData.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="chip">
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
