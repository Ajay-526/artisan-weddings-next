import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | Artisan Weddings",
  description: "Enquire for wedding photography and films across South India.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1800&q=80)" }}>
        <h1>Contact us</h1>
      </section>
      <section className="section center">
        <p className="eyebrow">Begin the conversation</p>
        <h2>Tell us the city. We will tell you if we can stand in that room.</h2>
        <p className="lead">We cover Tirupati and a constellation of South Indian cities. If your town is outside our present map, we will say so plainly.</p>
        <ContactForm />
      </section>
    </main>
  );
}
