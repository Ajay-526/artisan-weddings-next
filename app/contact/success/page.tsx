"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function Body() {
  const sp = useSearchParams();
  const city = sp.get("city") || "your city";
  const names = sp.get("names") || "there";

  useEffect(() => {
    document.title = `We can be in ${city} | Artisan Weddings`;
    const set = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", name);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };
    set("geo.placename", city);
    set("geo.region", "IN");
    set("service-area", city);
    set("availability", "serviceable");
  }, [city]);

  return (
    <section className="section center" style={{ minHeight: "70vh" }}>
      <p className="eyebrow">A yes</p>
      <h2>Yes — {city} is on our map</h2>
      <p className="lead">{names}, thank you. We work this city and will write back with dates and a sense of the investment.</p>
      <div className="actions">
        <Link className="btn gold" href="/love-stories">See recent work</Link>
        <Link className="btn" href="/">Home</Link>
      </div>
    </section>
  );
}

export default function SuccessPage() {
  return (
    <main>
      <Suspense>
        <Body />
      </Suspense>
    </main>
  );
}
