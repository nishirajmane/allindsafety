"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
export function Navbar() {
 const [open,setOpen] = useState(false);
 const links = [["Services","/#services"],["Our work","/gallery"],["About us","/about"],["Locations","/locations"]];
 return <header className="site-header"><div className="site-container nav-inner"><Link href="/" className="brand" aria-label="Allind Safety home" onClick={()=>setOpen(false)}><span className="brand-mark"><ShieldCheck size={24}/></span><span>allind<span className="brand-sub">SAFETY. SORTED.</span></span></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}</nav><Link href="/contact" className="action action-dark nav-quote">Get a free quote</Link><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div>{open && <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">{[...links,["Contact & free quote","/contact"]].map(([label,href])=><Link key={label} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>}</header>;
}
