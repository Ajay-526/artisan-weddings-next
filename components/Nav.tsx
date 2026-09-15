"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const left = [
  { href: "/", label: "Home" },
  { href: "/photos", label: "Photos" },
  { href: "/ceremonies", label: "Ceremonies" },
  { href: "/films", label: "Films" },
];

const right = [
  { href: "/love-stories", label: "Love Stories" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Nav() {
  const path = usePathname();
  const on = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));
  return (
    <header className="nav">
      <nav className="nav-left">
        {left.map((item) => (
          <Link key={item.href} href={item.href} className={on(item.href) ? "active" : ""}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="/" className="brand" aria-label="Artisan Weddings home">
        <img src="/logo.svg" alt="" />
      </Link>
      <nav className="nav-right">
        {right.map((item) => (
          <Link key={item.href} href={item.href} className={on(item.href) ? "active" : ""}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
