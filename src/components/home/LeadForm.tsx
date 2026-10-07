"use client";
import { useState, type FormEvent } from "react";
import { MessageCircle, Check } from "lucide-react";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
export function LeadForm({minimal=false}:{minimal?:boolean}) {
 const [error,setError] = useState("");
 const [sent,setSent] = useState(false);
 const [whatsapp,setWhatsapp] = useState("");
 function submit(event:FormEvent<HTMLFormElement>) {
  event.preventDefault(); const data = new FormData(event.currentTarget);
  const name = String(data.get("name")||"").trim(); const phone = String(data.get("phone")||"").replace(/\D/g,"");
  if (name.length<2 || !/^[6-9]\d{9}$/.test(phone)) { setError("Please enter your name and a valid 10-digit Indian mobile number."); return; }
  const message = `Hi Allind Safety! I’d like a free site visit.\nName: ${name}\nPhone: ${phone}\nArea: ${data.get('city')}\nService: ${data.get('service')}\nMessage: ${data.get('message')||'Please contact me with the next steps.'}`;
  const url = `https://wa.me/919199199976?text=${encodeURIComponent(message)}`;
  setError(""); setWhatsapp(url); setSent(true); window.open(url,"_blank","noopener,noreferrer");
 }
 const form = <div className="quote-card">{sent ? <div className="quote-success" role="status"><Check size={36}/><h3>Your message is ready.</h3><p>Send it in WhatsApp to share your request with our team. If WhatsApp didn’t open, use the button below.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="action action-lime">Continue in WhatsApp</a><button className="text-link" onClick={()=>setSent(false)}>Edit my request</button></div> : <form onSubmit={submit}><h3>Tell us about your space.</h3><p>We’ll help you find the right fit.</p><div className="form-grid"><div><label htmlFor="quote-name">Your name</label><input id="quote-name" name="name" autoComplete="name" placeholder="Full name" required minLength={2}/></div><div><label htmlFor="quote-phone">Mobile number</label><input id="quote-phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="10-digit mobile" required pattern="[6-9][0-9]{9}" maxLength={10}/></div><div><label htmlFor="quote-city">Your area</label><select id="quote-city" name="city" defaultValue="Pune"><option value="Pune">Pune / another area</option>{locationsData.map(loc=><option key={loc.slug}>{loc.name}</option>)}</select></div><div><label htmlFor="quote-service">What do you need?</label><select id="quote-service" name="service" defaultValue="" required><option value="" disabled>Select a service</option>{servicesData.map(service=><option key={service.slug}>{service.title}</option>)}</select></div></div><label htmlFor="quote-message">Anything else? <span>(optional)</span></label><textarea id="quote-message" name="message" rows={3} placeholder="Balcony size, your questions, or a good time to call…"/>{error && <p role="alert" className="form-error">{error}</p>}<button type="submit" className="action action-lime quote-submit"><MessageCircle size={18}/> Send request on WhatsApp</button><span className="form-note">Your details are shared when you send the WhatsApp message.</span></form>}</div>;
 return minimal ? form : <section id="quote-form" className="quote-section section-space"><div className="site-container quote-layout"><div><span className="eyebrow">06 / LET’S MAKE YOUR SPACE SAFER</span><h2>Your next step?<br/><span>A free site visit.</span></h2><p>We’ll measure your space, walk you through the options, and give you a clear quote. Easy.</p><div className="quote-points"><span><Check size={18}/> No charge for measurements</span><span><Check size={18}/> Advice for your space</span><span><Check size={18}/> A quote before we start</span></div></div>{form}</div></section>;
}
