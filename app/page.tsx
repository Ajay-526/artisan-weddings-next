import Link from "next/link";

const heroImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2000&q=80",
];

const ceremonies = [
  { title: "Haldi", line: "Turmeric, laughter, sunlight", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80" },
  { title: "Mehendi", line: "Stories drawn on skin", img: "https://images.unsplash.com/photo-1611601322175-ef8ec8c45b28?auto=format&fit=crop&w=900&q=80" },
  { title: "Sangeet", line: "Feet that forget the clock", img: "https://images.unsplash.com/photo-1511285560929-80b456fe3cdb?auto=format&fit=crop&w=900&q=80" },
  { title: "Ceremony", line: "Vows under fire and sky", img: "https://images.unsplash.com/photo-1591604466107-ec97de576aa3?auto=format&fit=crop&w=900&q=80" },
  { title: "Portraits", line: "The quiet between rituals", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80" },
  { title: "Reception", line: "Gold light, last dance", img: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=900&q=80" },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-track">
          {heroImages.map((src) => (
            <div key={src} className="hero-slide" style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
        <div className="hero-veil" />
        <div className="hero-caption">
          <p>Luxury photography & films</p>
          <h1>Where a wedding begins to live forever</h1>
        </div>
      </section>
      <section className="section center">
        <p className="eyebrow">Artisan Weddings</p>
        <h2>Luxury Wedding Photographers & Films</h2>
        <div className="awards">
          <div className="award"><strong>2025</strong><span>Fearless</span><span>Photographer</span></div>
          <div className="award"><strong>2024</strong><span>Storyteller</span><span>of the Year</span></div>
        </div>
        <p className="lead">At Artisan Weddings we chase the unrepeatable: a grandmother’s palm on a veil, the hush before the pheras, the laugh that undoes a carefully planned pose.</p>
        <p className="lead">Our photographers and filmmakers document real emotion, candid motion and the small architecture of a day.</p>
        <div className="actions">
          <Link className="btn" href="/photos">View Photos</Link>
          <Link className="btn gold" href="/films">View Films</Link>
        </div>
      </section>
      <section className="story-band">
        <div className="story-photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1591604466107-ec97de576aa3?auto=format&fit=crop&w=1400&q=80)" }} />
        <div className="story-copy">
          <p className="eyebrow">What sets us apart</p>
          <h2>We become quiet friends of the day</h2>
          <p>Great wedding photography begins with real connection. We take time to know your pace, then disappear into the rhythm of the ceremony.</p>
          <Link className="btn gold" href="/weddings">See our work</Link>
        </div>
      </section>
      <section className="quote-strip">
        <blockquote>“Love does not ask to be posed. It only asks to be noticed — and kept.”</blockquote>
        <cite>An Artisan note</cite>
      </section>
      <section className="section">
        <div className="center" style={{ marginBottom: 36 }}>
          <p className="eyebrow">Ceremonies</p>
          <h2>Every ritual, still breathing</h2>
        </div>
        <div className="grid">
          {ceremonies.map((c) => (
            <Link key={c.title} href="/photos" className="card" style={{ backgroundImage: `url(${c.img})` }}>
              <div><p>{c.line}</p><h3>{c.title}</h3></div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="center" style={{ marginBottom: 36 }}>
          <p className="eyebrow">Kind words</p>
          <h2>Client testimonials</h2>
        </div>
        <div className="testimonials">
          <article className="testimonial"><p>“They did not photograph our wedding. They remembered it for us.”</p><strong>Meera & Arjun</strong></article>
          <article className="testimonial"><p>“Quiet on the floor, fierce in the edit. Our film still makes the room go still.”</p><strong>Nisha & Sid</strong></article>
          <article className="testimonial"><p>“From Haldi gold to midnight reception light, every frame feels like family.”</p><strong>Ananya & Rohan</strong></article>
        </div>
        <div className="actions"><Link className="btn" href="/contact">Contact us</Link></div>
      </section>
    </main>
  );
}
