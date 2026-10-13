import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";
import Reveal from "./components/Reveal";
import SEO from "./components/SEO";
import WhatsAppButton from "./components/WhatsAppButton";
import { SITE } from "./data/content";

const field =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}\nPhone: ${d.get("phone")}\nService: ${d.get("service")}\n\n${d.get("message")}`;
    window.location.href = `mailto:${SITE.emails[0]}?subject=${encodeURIComponent(
      "Project inquiry from " + d.get("name")
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const info = [
    { icon: Phone, title: "Call us", lines: [SITE.phonePk, SITE.phoneUk], href: `tel:${SITE.phonePkHref}` },
    { icon: Mail, title: "Email us", lines: SITE.emails, href: `mailto:${SITE.emails[0]}` },
    { icon: MapPin, title: "Visit us", lines: ["Kent Mall, Aziz Shaheed Road, Sialkot 51410, Punjab, Pakistan"], href: undefined },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Graphics Layers — Get a Free Digital Marketing Audit"
        description="Talk to Graphics Layers about SEO, social media, paid ads and web development. Get a free audit for your business."
        path="/contact"
        home={false}
      />
      <Navbar />
      <main>
        <PageHeader
          title="Contact"
          crumb="Contact"
          description="Tell us about your business and we'll get back with a free, no-obligation audit."
        />
        <section className="section-padding pb-28 md:pb-36">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="space-y-4">
              {info.map(({ icon: Icon, title, lines, href }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="mb-1 font-semibold">{title}</h3>
                    {lines.map((l) => (
                      <p key={l} className="break-words text-sm text-muted-foreground">
                        {href ? <a href={href} className="hover:text-primary">{l}</a> : l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Chat on WhatsApp <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" required placeholder="Your name" className={field} />
                  <input name="phone" placeholder="Phone / WhatsApp" className={field} />
                </div>
                <select name="service" defaultValue="SEO" className={field}>
                  {["SEO", "Social Media Marketing", "Paid Ads", "Website Development", "Branding", "Other"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <textarea name="message" required rows={6} placeholder="Tell us about your project" className={field} />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground"
                >
                  Send Message <ArrowUpRight className="h-4 w-4" />
                </button>
                {sent && <p className="text-sm text-muted-foreground">Opening your email app…</p>}
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
