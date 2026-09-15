import Link from "next/link";
import { ceremonies } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return ceremonies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = ceremonies.find((x) => x.slug === params.slug);
  return { title: c ? `${c.title} | Artisan Weddings` : "Ceremony" };
}

export default function CeremonyPage({ params }: { params: { slug: string } }) {
  const c = ceremonies.find((x) => x.slug === params.slug);
  if (!c) notFound();
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: `url(${c.cover})` }}>
        <h1>{c.title}</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">{c.kicker}</p>
        <h2>{c.title}</h2>
        <p className="lead">{c.summary}</p>
      </section>
      <section className="section">
        <div className="masonry">
          {[c.cover, ...c.gallery].map((src) => (
            <img key={src} src={src} alt={`${c.title} wedding photography`} />
          ))}
        </div>
        <div className="actions">
          <Link className="btn" href="/ceremonies">All ceremonies</Link>
          <Link className="btn gold" href="/contact">Plan this rite with us</Link>
        </div>
      </section>
    </main>
  );
}
