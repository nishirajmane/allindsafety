import { siteOrigin } from "@/data/site";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionExperience } from "@/components/motion/MotionExperience";
const inter=Inter({variable:"--font-inter",subsets:["latin"],display:"swap"});
const manrope=Manrope({variable:"--font-manrope",subsets:["latin"],display:"swap"});
export const metadata:Metadata={title:"Allind Safety | Big Views. Zero Worries.",description:"Safety nets, invisible grills, and bird protection in Pune. Protect your people, pets, and peace of mind. Book a free site visit with Allind Safety.",metadataBase:new URL(siteOrigin),keywords:["Safety Nets Pune","Balcony Safety Nets","Pigeon Nets Pune","Invisible Grills","Children Safety Nets"],openGraph:{title:"Allind Safety | Big Views. Zero Worries.",description:"A safer space. A little more peace of mind. Safety nets and invisible grills in Pune.",siteName:"Allind Safety",locale:"en_IN",type:"website"},twitter:{card:"summary",title:"Allind Safety | Big Views. Zero Worries.",description:"Safety nets and invisible grills in Pune. Get a free site visit."},icons:{icon:[{url:"/favicon/favicon.ico"},{url:"/favicon/favicon-96x96.png",sizes:"96x96",type:"image/png"}],apple:[{url:"/favicon/apple-touch-icon.png",sizes:"180x180",type:"image/png"}]},manifest:"/favicon/site.webmanifest"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${inter.variable} ${manrope.variable} antialiased`}><body><MotionExperience><a className="skip-link" href="#main-content">Skip to content</a><Navbar/><main id="main-content" className="site-main">{children}</main><Footer/></MotionExperience></body></html>;}
