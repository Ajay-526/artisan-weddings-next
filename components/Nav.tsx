"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const left = [
  { href: "/", label: "Home" },
  { href: "/photos", label: "Photos" },
  { href: "/films", label: "Films" },
  { href: "/weddings", label: "Real Weddings" },
];

const right = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Get Quote" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <header className="nav">
      <nav className="nav-left">
        {left.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={path === item.href ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="/" className="brand">
        <img src="/logo.svg" alt="Artisan Weddings" />
        <span>Artisan Weddings</span>
      </Link>
      <nav className="nav-right">
        {right.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={path === item.href ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
