import React from "react";
interface SectionHeaderProps { badge?:string; title:string; subtitle?:string; align?:"left"|"center"; className?:string; }
export function SectionHeader({badge,title,subtitle,align="center",className=""}:SectionHeaderProps) { return <div className={`page-heading ${align === "left" ? "page-heading-left" : ""} ${className}`}>{badge && <span className="eyebrow">{badge}</span>}<h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>; }
