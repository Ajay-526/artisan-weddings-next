import Link from "next/link";

export default function FilmsPage() {
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1800&q=80)" }}>
        <h1>Wedding films</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">Cinematic storytelling</p>
        <h2>Motion for the moments still ringing in your ears</h2>
        <p className="lead">Our films are short, lyrical documents — not highlight reels of poses.</p>
        <blockquote className="serif" style={{ fontStyle: "italic", fontSize: 28, marginTop: 40, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
          “A photograph keeps the face. A film keeps the weather of the day.”
        </blockquote>
        <div className="actions">
          <Link className="btn gold" href="/contact">Commission a film</Link>
        </div>
      </section>
    </main>
  );
}
