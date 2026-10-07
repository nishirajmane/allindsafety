import Link from "next/link";
import { ShieldCheck, Check, Phone } from "lucide-react";
export function HeroSection() {
  return <section className="hero-shell editorial-hero">
    <div className="site-container hero-topline"><span className="eyebrow">PUNE’S SAFETY NET SPECIALISTS</span><span>PROTECTION WITHOUT COMPROMISE / EST. 2018</span></div>
    <div className="site-container hero-grid"><div className="hero-copy">
      <h1 aria-label="Big views. Zero worries."><span className="hero-line" aria-hidden="true"><span>Big views.</span></span><span className="hero-line hero-line-outline" aria-hidden="true"><span>Zero worries<span className="hero-period">.</span></span></span></h1>
      <div className="hero-bottom-copy"><p>Let the fresh air in. Keep the worries out. Safety nets and invisible grills that protect your people, pets, and peace of mind.</p><div><div className="hero-actions"><Link className="action action-lime" href="/contact">Get a free site visit</Link><a className="action action-outline" href="tel:+919797974476"><Phone size={18}/> Let’s talk</a></div><div className="hero-notes"><span><Check size={16}/> Free measurements</span><span><Check size={16}/> Custom installation</span></div></div></div>
    </div><div className="hero-visual"><picture><source type="image/webp" srcSet="/optimized/hero-image-640.webp 640w, /optimized/hero-image-1200.webp 1200w" sizes="(max-width: 760px) 100vw, 90vw"/><img src="/optimized/hero-image-1200.webp" alt="Balcony protected with safety netting, with an open view of the city" width="1448" height="1086" fetchPriority="high"/></picture><span className="image-label"><ShieldCheck size={18}/> A little protection. A lot of freedom.</span><div className="hero-sticker">SAFE<br/><span>looks good.</span><ShieldCheck size={28}/></div><div className="hero-caption"><span>YOUR BALCONY, UPGRADED.</span><span>01 / ALLIND SAFETY</span></div></div></div>
    <div className="trust-strip site-container"><span>Small details. <strong>Big peace of mind.</strong></span><div><b>10+ YEARS</b><span>of installation experience</span></div><div><b>5,000+</b><span>spaces protected</span></div><div><b>PUNE & AROUND</b><span>local people, local support</span></div></div>
    <div className="kinetic-band" aria-label="Safety that gives you freedom"><div className="kinetic-track" aria-hidden="true">{[0,1,2,3].map(i=><span key={i}>MORE SKY. <i>LESS WORRY.</i> <b>✳</b></span>)}</div></div>
  </section>;
}
