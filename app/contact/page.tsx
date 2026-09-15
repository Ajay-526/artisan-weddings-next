"use client";
import { FormEvent, useState } from "react";
export default function ContactPage() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent) { e.preventDefault(); setSent(true); }
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1800&q=80)" }}>
        <h1>Get a quote</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">Begin the conversation</p>
        <h2>Tell us the shape of your day</h2>
        <p className="lead">Share your date, city and the ceremonies you want held in light.</p>
        {sent ? <p className="lead" style={{ marginTop: 40 }}>Thank you. Your enquiry is with us.</p> : (
          <form className="form" onSubmit={onSubmit}>
            <input required name="name" placeholder="Your names" />
            <input required type="email" name="email" placeholder="Email" />
            <input name="phone" placeholder="Phone / WhatsApp" />
            <input name="date" placeholder="Wedding date & city" />
            <select name="need" defaultValue="">
              <option value="" disabled>What do you need?</option>
              <option>Photography</option>
              <option>Films</option>
              <option>Photography & films</option>
            </select>
            <textarea name="note" placeholder="A few words about your celebration" />
            <button className="btn gold" type="submit">Send enquiry</button>
          </form>
        )}
      </section>
    </main>
  );
}
