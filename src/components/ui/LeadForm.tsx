"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import { whatsappLink } from "@/data/site";

/** No backend: the form composes a WhatsApp message and opens it. Nothing is stored. */
export function LeadForm({ defaultService, defaultArea }: { defaultService?: string; defaultArea?: string }) {
  const [error, setError] = useState("");
  const [link, setLink] = useState("");
  const [service, setService] = useState(defaultService ?? servicesData[0].title);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").replace(/\D/g, "").slice(-10);
    if (name.length < 2 || !/^[6-9]\d{9}$/.test(phone)) {
      setError("Please add your name and a valid 10-digit mobile number.");
      return;
    }
    const message = [
      "Hi Allind Safety! I'd like a free site visit.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Area: ${data.get("area")}`,
      `Service: ${service}`,
      `Notes: ${String(data.get("message") || "").trim() || "Please call me to fix a time."}`,
    ].join("\n");
    const url = whatsappLink(message);
    setError("");
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="lead">
      <AnimatePresence mode="wait" initial={false}>
        {link ? (
          <motion.div
            key="done"
            className="lead__done"
            role="status"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <span className="lead__check" aria-hidden="true">
              ✓
            </span>
            <h3>Your message is ready.</h3>
            <p>Hit send in WhatsApp and our team will call you back to fix a visit time. If WhatsApp didn&rsquo;t open, use the button below.</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn--sky btn--lg">
              Open WhatsApp
            </a>
            <button type="button" className="text-btn" onClick={() => setLink("")}>
              Edit my request
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={submit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <fieldset className="lead__services">
              <legend className="mono label">What do you need?</legend>
              <div>
                {servicesData.map((s) => (
                  <label key={s.slug} className="choice" data-checked={service === s.title || undefined}>
                    <input type="radio" name="service" value={s.title} checked={service === s.title} onChange={() => setService(s.title)} />
                    {s.title.replace(" Safety", "")}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="lead__grid">
              <div className="field">
                <input id="lead-name" name="name" autoComplete="name" placeholder=" " required minLength={2} />
                <label htmlFor="lead-name">Your name</label>
              </div>
              <div className="field">
                <input id="lead-phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder=" " required maxLength={14} />
                <label htmlFor="lead-phone">Mobile number</label>
              </div>
              <div className="field field--select">
                <select id="lead-area" name="area" defaultValue={defaultArea ?? "Pune"}>
                  <option value="Pune">Pune — other area</option>
                  {locationsData.map((l) => (
                    <option key={l.slug} value={l.name}>
                      {l.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="lead-area">Your area</label>
              </div>
              <div className="field">
                <input id="lead-message" name="message" placeholder=" " />
                <label htmlFor="lead-message">Floor, size, best time to call (optional)</label>
              </div>
            </div>
            {error && (
              <p role="alert" className="lead__error">
                {error}
              </p>
            )}
            <div className="lead__submit">
              <button type="submit" className="btn btn--sky btn--lg">
                Send on WhatsApp →
              </button>
              <span className="mono">Opens WhatsApp. Nothing is stored here.</span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
