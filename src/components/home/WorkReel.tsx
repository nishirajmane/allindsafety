"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { work, workSrc } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

const picks = [0, 2, 1, 4, 3, 8, 6];

/**
 * Desktop: the section pins and the reel travels sideways with scroll, each photo
 * drifting inside its frame. Touch: a native swipe rail with scroll-snap.
 */
export function WorkReel() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const rail = track.current;
    if (!el || !rail) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = () => rail.scrollWidth - window.innerWidth;
      const move = gsap.to(rail, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      gsap.utils.toArray<HTMLElement>(".reel__frame img", rail).forEach((img) => {
        gsap.fromTo(
          img,
          { xPercent: -8 },
          {
            xPercent: 8,
            ease: "none",
            scrollTrigger: { trigger: img.parentElement, containerAnimation: move, start: "left right", end: "right left", scrub: true },
          },
        );
      });
    });
    return () => mm.revert();
  }, []);

  // Stable wrapper: GSAP pinning re-parents the section into a pin-spacer.

  return (
    <div>
    <section ref={root} className="reel" data-theme="dark">
      <div className="reel__head wrap">
        <p className="mono label">(06) Selected installs</p>
        <h2 className="h2">
          Proof, <em>knotted.</em>
        </h2>
        <Link href="/gallery" className="btn btn--ghost">
          All {work.length} projects
        </Link>
      </div>
      <div className="reel__viewport">
        <div ref={track} className="reel__track">
          {picks.map((index, i) => {
            const item = work[index];
            const tall = item.h > item.w;
            return (
              <Link href="/gallery" key={item.slug} className="reel__item" data-tall={tall || undefined} data-cursor="View">
                <span className="reel__frame">
                  <img src={workSrc(item, tall ? 720 : 1280)} alt={`${item.title} — ${item.kind} by Allind Safety`} width={item.w} height={item.h} loading="lazy" decoding="async" />
                </span>
                <span className="reel__caption">
                  <span className="mono">0{i + 1}</span>
                  <span>{item.title}</span>
                  <span className="mono">{item.kind}</span>
                </span>
              </Link>
            );
          })}
          <Link href="/gallery" className="reel__more" data-cursor="Open">
            <span>
              See every
              <br />
              <em>install</em> ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}
