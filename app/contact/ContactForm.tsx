"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { isServiceable } from "@/lib/data";

export default function ContactForm() {
  const router = useRouter();
  const [city, setCity] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const place = String(fd.get("city") || city);
    const names = String(fd.get("name") || "");
    const q = new URLSearchParams({ city: place, names });
    if (isServiceable(place)) router.push(`/contact/success?${q}`);
    else router.push(`/contact/regret?${q}`);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input required name="name" placeholder="Your names" />
      <input required type="email" name="email" placeholder="Email" />
      <input name="phone" placeholder="Phone / WhatsApp" />
      <input name="date" placeholder="Wedding date" />
      <input required name="city" placeholder="City / town of the wedding" value={city} onChange={(e) => setCity(e.target.value)} />
      <select name="need" defaultValue="Photography & films">
        <option>Photography</option>
        <option>Films</option>
        <option>Photography & films</option>
      </select>
      <textarea name="note" placeholder="Ceremonies, guest count, anything we should know" />
      <button className="btn gold" type="submit">See if we can be there</button>
    </form>
  );
}
