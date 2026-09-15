"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function Body() {
  const sp = useSearchParams();
  const city = sp.get("city") || "that city";
  const names = sp.get("names") || "there";

  useEffect(() => {
    document.title = `${city} is not yet on our map | Artisan Weddings`;
    const set = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", name);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };
    set("robots", "noindex,follow");
    set("geo.placename", city);
    set("geo.region", "IN");
    set("service-area", city);
    set("availability", "unserved");
    set("expansion-signal", "true");
    set("unserved-market", city);
  }, [city]);

  return (
    <section className="section center" style={{ minHeight: "70vh" }}>
      <p className="eyebrow">Not yet</p>
      <h2>We cannot stand in {city} — yet</h2>
      <p className="lead">{names}, thank you for asking. {city} sits outside the towns we can honour properly right now. Your enquiry is marked so we know where demand is gathering.</p>
      <div className="actions">
        <Link className="btn" href="/contact">Try another city</Link>
        <Link className="btn gold" href="/">Home</Link>
      </div>
    </section>
  );
}

export default function RegretPage() {
  return (
    <main>
      <Suspense>
        <Body />
      </Suspense>
    </main>
  );
}
