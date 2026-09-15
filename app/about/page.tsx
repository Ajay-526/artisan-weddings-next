export default function AboutPage() {
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1800&q=80)" }}>
        <h1>About the studio</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">Who we are</p>
        <h2>A boutique team with a documentary pulse</h2>
        <p className="lead">Artisan Weddings is a small circle of photographers and filmmakers who believe luxury is not excess — it is attention. We work across South India and wherever your people gather.</p>
        <p className="lead">Our style blends candid documentary with a few intentional editorial portraits. We do not interrupt a ritual to rearrange it. We wait, we watch, we keep the feeling intact.</p>
      </section>
      <section className="quote-strip">
        <blockquote>“Your wedding is not content. It is a family becoming larger in real time. We are here to honour that, frame by frame.”</blockquote>
        <cite>Studio manifesto</cite>
      </section>
    </main>
  );
}
