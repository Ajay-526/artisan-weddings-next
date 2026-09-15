import Link from "next/link";
import { ceremonies } from "@/lib/data";

export const metadata = { title: "Ceremonies | Artisan Weddings" };

export default function CeremoniesPage() {
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1800&q=80)" }}>
        <h1>Ceremonies</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">The rites we know by heart</p>
        <h2>Each ceremony has its own climate</h2>
        <p className="lead">Engagement through reception — every ritual as a chapter, not a checkbox.</p>
      </section>
      <section className="section">
        <div className="grid">
          {ceremonies.map((c) => (
            <Link key={c.slug} href={`/ceremonies/${c.slug}`} className="card" style={{ backgroundImage: `url(${c.cover})` }}>
              <div>
                <p>{c.kicker}</p>
                <h3>{c.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
