import Link from "next/link";
import Hero from "@/components/Hero";
import { ceremonies, loveStories } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="content-rise">
        <section className="section center">
          <p className="eyebrow">Luxury Wedding Photographers & Films</p>
          <h2>Made for the hour that will not happen twice</h2>
          <div className="awards">
            <div className="award">
              <strong>South</strong>
              <span>India</span>
              <span>first</span>
            </div>
            <div className="award">
              <strong>Still</strong>
              <span>&amp; moving</span>
              <span>image</span>
            </div>
          </div>
          <p className="lead">
            We work the way a good guest does: present, unhurried, a little
            invisible. Haldi gold, mehendi quiet, the mandap’s thin air — our
            photographs keep the temperature of those rooms so you can walk
            back into them years from now.
          </p>
          <p className="lead">
            Artisan is a small bench of photographers and filmmakers based in
            Tirupati. We travel where your people gather, and we leave with a
            gallery that feels inherited, not produced.
          </p>
          <div className="actions">
            <Link className="btn" href="/photos">See photographs</Link>
            <Link className="btn gold" href="/films">Watch films</Link>
          </div>
        </section>

        <section className="story-band">
          <div className="story-photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1591604466107-ec97de576aa3?auto=format&fit=crop&w=1400&q=80)" }} />
          <div className="story-copy">
            <p className="eyebrow">How we stand in the room</p>
            <h2>Close enough to hear, far enough not to arrange</h2>
            <p>
              Before the first frame we learn your pace — who you look for in a
              crowd, which grandmother must be in the line of sight. Then we
              disappear into the ritual and come back with a story that still
              belongs to you.
            </p>
            <Link className="btn gold" href="/love-stories">Read love stories</Link>
          </div>
        </section>

        <section className="quote-strip">
          <blockquote>
            “A wedding is not a set. It is a family changing size in real time.
            Our work is to notice — and not interrupt.”
          </blockquote>
          <cite>Studio note</cite>
        </section>

        <section className="section">
          <div className="center" style={{ marginBottom: 36 }}>
            <p className="eyebrow">Ceremonies</p>
            <h2>Every rite, still breathing</h2>
          </div>
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

        <section className="section">
          <div className="center" style={{ marginBottom: 36 }}>
            <p className="eyebrow">Love stories</p>
            <h2>People, not portfolios</h2>
          </div>
          <div className="grid">
            {loveStories.slice(0, 3).map((s) => (
              <Link key={s.slug} href="/love-stories" className="card" style={{ backgroundImage: `url(${s.img})` }}>
                <div>
                  <p>{s.place}</p>
                  <h3>{s.couple}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="actions">
            <Link className="btn" href="/contact">Ask if we travel to you</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
