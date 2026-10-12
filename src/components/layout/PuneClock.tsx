"use client";

import { useSyncExternalStore } from "react";
import { business } from "@/data/site";

function subscribe(callback: () => void) {
  const id = window.setInterval(callback, 15000);
  return () => window.clearInterval(id);
}

const snapshot = () =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date());

/** Live Pune time with an open/closed dot — set by business hours. */
export function PuneClock() {
  const time = useSyncExternalStore(subscribe, snapshot, () => "");
  const hour = time ? Number(time.slice(0, 2)) : -1;
  const open = hour >= business.hours.open && hour < business.hours.close;
  return (
    <p className="clock mono" data-open={time ? open : undefined}>
      <i aria-hidden="true" />
      {time ? `Pune ${time} IST · ${open ? "We're open" : "Back at 8am"}` : business.hours.label}
    </p>
  );
}
