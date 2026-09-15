export const metadata = { title: "Testimonials | Artisan Weddings" };

const words = [
  { q: "They did not photograph our wedding. They remembered it — the tears we missed, the dance we thought no one saw.", who: "Meera & Arjun · Tirupati" },
  { q: "Quiet on the floor, fierce in the edit. Our film still makes the room go still.", who: "Nisha & Sid · Bengaluru" },
  { q: "From haldi gold to midnight reception light, every frame feels like it belongs to our family.", who: "Ananya & Rohan · Hyderabad" },
  { q: "They knew when to vanish. That is rarer than a beautiful picture.", who: "Janna & Vishwas · Coast" },
  { q: "Our parents keep opening the gallery as if the day might still be happening.", who: "Diya & Karthik · Chennai" },
  { q: "The quote felt like a conversation, not a menu. The pictures felt the same.", who: "Sana & Vivek · Vijayawada" },
];

export default function TestimonialsPage() {
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1800&q=80)" }}>
        <h1>Testimonials</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">In their words</p>
        <h2>What remains after the lights come down</h2>
      </section>
      <section className="section">
        <div className="testimonials">
          {words.map((w) => (
            <article key={w.who} className="testimonial">
              <p>“{w.q}”</p>
              <strong>{w.who}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
