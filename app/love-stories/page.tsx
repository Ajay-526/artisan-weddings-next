import { loveStories } from "@/lib/data";

export const metadata = { title: "Love Stories | Artisan Weddings" };

export default function LoveStoriesPage() {
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=80)" }}>
        <h1>Love stories</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">Couples we were trusted with</p>
        <h2>Their rooms, their weather</h2>
      </section>
      <section className="section">
        <div className="grid">
          {loveStories.map((s) => (
            <article key={s.slug} className="card" style={{ backgroundImage: `url(${s.img})`, minHeight: 420 }}>
              <div>
                <p>{s.place}</p>
                <h3>{s.couple}</h3>
                <p style={{ textTransform: "none", letterSpacing: 0, marginTop: 8 }}>{s.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
