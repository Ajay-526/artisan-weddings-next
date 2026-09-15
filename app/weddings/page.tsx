import Link from "next/link";
const stories = [
  { couple: "Deeksha & Denny", place: "Hills of Coorg", line: "A decade of quiet love, then colour everywhere.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80" },
  { couple: "Janna & Vishwas", place: "Mangalore", line: "An intimate South Indian celebration across two homes.", img: "https://images.unsplash.com/photo-1591604466107-ec97de576aa3?auto=format&fit=crop&w=1200&q=80" },
  { couple: "Nisha & Sid", place: "Bengaluru", line: "Creative freedom, candid emotion, midnight gold.", img: "https://images.unsplash.com/photo-1511285560929-80b456fe3cdb?auto=format&fit=crop&w=1200&q=80" }
];
export default function WeddingsPage() {
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=80)" }}>
        <h1>Real weddings</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">Stories we were trusted with</p>
        <h2>Not portfolios. People.</h2>
        <p className="lead">When you choose Artisan, you choose artists who treat every client as a first.</p>
      </section>
      <section className="section">
        <div className="grid">
          {stories.map((s) => (
            <article key={s.couple} className="card" style={{ backgroundImage: `url(${s.img})`, minHeight: 420 }}>
              <div>
                <p>{s.place}</p>
                <h3>{s.couple}</h3>
                <p style={{ textTransform: "none", letterSpacing: 0, marginTop: 8 }}>{s.line}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="actions"><Link className="btn" href="/contact">Tell us your date</Link></div>
      </section>
    </main>
  );
}
