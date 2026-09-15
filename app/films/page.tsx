import { films } from "@/lib/data";

export const metadata = { title: "Films | Artisan Weddings" };

export default function FilmsPage() {
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1800&q=80)" }}>
        <h1>Films</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">Moving pictures</p>
        <h2>Short films for days that still ring</h2>
        <p className="lead">We cut wedding films the way a letter is written — brief, specific.</p>
      </section>
      <section className="section film-grid">
        {films.map((f) => (
          <article key={f.youtube} className="film">
            <iframe src={`https://www.youtube.com/embed/${f.youtube}`} title={f.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <h3 style={{ marginTop: 16 }}>{f.title}</h3>
            <p className="lead" style={{ marginTop: 8 }}>{f.note}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
