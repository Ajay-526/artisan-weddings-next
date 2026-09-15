export const metadata = { title: "About Us | Artisan Weddings" };

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1800&q=80)" }}>
        <h1>About us</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">The studio</p>
        <h2>A boutique bench with a documentary pulse</h2>
        <p className="lead">Artisan Weddings began in Tirupati — a town that already understands pilgrimage. We treat a wedding the same way: a journey with a precise hour at its centre.</p>
        <p className="lead">Luxury, for us, is attention. A small team, analogue patience, digital craft.</p>
      </section>
      <section className="quote-strip">
        <blockquote>“Your wedding is not content. It is a family becoming larger. We are here to honour that, frame by frame.”</blockquote>
        <cite>Studio manifesto</cite>
      </section>
    </main>
  );
}
