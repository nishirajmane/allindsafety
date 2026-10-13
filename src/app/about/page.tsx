import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/system/Reveal";
import { Counter } from "@/components/system/Counter";
import { Cta } from "@/components/home/Cta";
import { stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us — Pune's Safety Net Specialists",
  description: "Meet Allind Safety: a Pune-based crew making balconies safer with safety nets, invisible grills and bird protection for over 10 years.",
  alternates: { canonical: "/about/" },
};

const values = [
  { title: "Protection with purpose", text: "We recommend the barrier your home actually needs — for children, pets or pigeons — and explain the materials in plain words." },
  { title: "A fit that feels right", text: "Every balcony is different. We measure yours, tailor the installation and keep light, air and the view exactly where they were." },
  { title: "People you can call", text: "From the first call to aftercare, you speak to the people who install. You'll always know what's next and who to ring." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About" }]}
        title={
          <>
            Life feels better when it feels <em>safe.</em>
          </>
        }
        lede="We're a Pune crew installing safety nets, invisible grills and bird spikes, spending our days on other people's balconies — tying knots, tensioning cables and making high-rise living a little less nerve-wracking."
      />

      <section className="section about" data-theme="light">
        <div className="wrap about__grid">
          <div className="about__copy">
            <p className="mono label">(01) Our story</p>
            <Reveal as="p" className="detail__lead">
              Fresh air on the balcony. Children at play. Pets exploring. A home should have room for all of it — without anyone holding their breath.
            </Reveal>
            <p>
              From our base in Sangamwadi, we&rsquo;ve spent more than a decade protecting homes across Pune&rsquo;s neighbourhoods and housing societies with safety nets, invisible
              grills and bird protection. Simple solutions, fitted carefully, that quietly do their job for years.
            </p>
            <Link href="/gallery" className="btn btn--ghost btn--lg">
              See our work
            </Link>
          </div>
          <ParallaxImage src="/art/work/03-kid-safe-balcony-1280.webp" alt="A child safely standing at a netted balcony" width={960} height={1280} className="about__img" />
        </div>
      </section>

      <section className="section" data-theme="dark">
        <div className="wrap">
          <p className="mono label">(02) What we care about</p>
          <div className="values">
            {values.map((v, i) => (
              <article key={v.title}>
                <span className="values__num">0{i + 1}</span>
                <h2>{v.title}</h2>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
          <dl className="stats stats--dark">
            {stats.map((s) => (
              <div key={s.label} className="stats__item">
                <dt className="mono">{s.label}</dt>
                <dd>
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Cta
        title={
          <>
            Meet the crew. <em>Free of charge.</em>
          </>
        }
      />
    </>
  );
}
