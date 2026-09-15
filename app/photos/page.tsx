import { photos } from "@/lib/data";

export const metadata = { title: "Photos | Artisan Weddings" };

export default function PhotosPage() {
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80)" }}>
        <h1>Photographs</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">Still frames that keep moving</p>
        <h2>A living press of the day</h2>
        <p className="lead">Not a catalogue of poses. A sequence of rooms, hands, and weather.</p>
      </section>
      <section className="section">
        <div className="masonry">
          {photos.map((src) => (
            <img key={src} src={src} alt="Artisan Weddings photograph" />
          ))}
        </div>
      </section>
    </main>
  );
}
