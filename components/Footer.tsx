import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="brand-name">ARTISAN WEDDINGS</div>
      <p>
        Luxury wedding photography & films. We stay close to the heartbeat of
        the day so your album feels like memory, not performance.
      </p>
      <div className="footer-links">
        <Link href="/photos">Photos</Link>
        <Link href="/films">Films</Link>
        <Link href="/weddings">Stories</Link>
        <Link href="/contact">Enquire</Link>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Artisan Weddings · Tirupati & beyond</div>
    </footer>
  );
}
