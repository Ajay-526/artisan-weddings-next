import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="brand-name">ARTISAN WEDDINGS</div>
      <p>
        Documentary luxury for South Indian weddings. Tirupati at the centre,
        the peninsula as our studio.
      </p>
      <div className="footer-links">
        <Link href="/photos">Photos</Link>
        <Link href="/ceremonies">Ceremonies</Link>
        <Link href="/films">Films</Link>
        <Link href="/love-stories">Love Stories</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Artisan Weddings</div>
    </footer>
  );
}
