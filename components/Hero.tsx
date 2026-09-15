"use client";

import { useEffect, useRef } from "react";

const VIDEO =
  "https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_24fps.mp4";

export default function Hero() {
  const media = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = media.current;
      if (!el) return;
      const p = Math.min(1, window.scrollY / window.innerHeight);
      el.style.transform = `translate3d(0, ${-p * 28}%, 0) scale(${1 + p * 0.18})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero-pin" aria-label="Opening film">
      <video
        ref={media}
        className="hero-media"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
      >
        <source src={VIDEO} type="video/mp4" />
      </video>
      <div className="hero-veil" />
      <div className="hero-caption">
        <p>South India · Photography & films</p>
        <h1>The day keeps moving. We keep the weather of it.</h1>
      </div>
    </section>
  );
}
