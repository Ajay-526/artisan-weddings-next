const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1591604466107-ec97de576aa3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fe3cdb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522673607200-164e1b6ca4ea?auto=format&fit=crop&w=900&q=80"
];
export default function PhotosPage() {
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80)" }}>
        <h1>Photographs</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">Still frames that keep moving</p>
        <h2>A gallery of living ceremonies</h2>
        <p className="lead">Haldi, mehendi, pheras, first look, last dance — scroll slowly. Let a picture choose you.</p>
      </section>
      <section className="section">
        <div className="masonry">
          {images.map((src) => (
            <img key={src} src={src} alt="Wedding photograph by Artisan Weddings" />
          ))}
        </div>
      </section>
    </main>
  );
}
