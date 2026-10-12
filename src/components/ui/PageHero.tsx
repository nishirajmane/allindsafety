import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/system/Reveal";

interface Crumb {
  label: string;
  href?: string;
}

export function PageHero({ crumbs, title, lede, children }: { crumbs: Crumb[]; title: ReactNode; lede?: ReactNode; children?: ReactNode }) {
  return (
    <section className="page-hero" data-theme="dark">
      <div className="wrap">
        <nav className="page-hero__crumbs mono" aria-label="Breadcrumb">
          <Link href="/">Allind</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <i aria-hidden="true">/</i>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <Reveal as="h1" className="page-hero__title" immediate>
          {title}
        </Reveal>
        {(lede || children) && (
          <div className="page-hero__foot">
            {lede && (
              <Reveal as="p" className="page-hero__lede" mode="fade" delay={0.3} immediate>
                {lede}
              </Reveal>
            )}
            {children && <div className="page-hero__actions">{children}</div>}
          </div>
        )}
      </div>
    </section>
  );
}
