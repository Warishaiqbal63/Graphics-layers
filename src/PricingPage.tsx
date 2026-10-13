import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";
import Reveal from "./components/Reveal";
import SEO from "./components/SEO";
import WhatsAppButton from "./components/WhatsAppButton";
import { PRICING ,Plan } from "./data/pricing";

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="flex h-full flex-col rounded-2xl border border-foreground/10 bg-card p-6 shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition-colors duration-500 hover:border-primary/30"
    >
      <h3 className="border-b border-foreground/10 pb-4 text-center text-xl font-bold tracking-[-0.02em]">{plan.name}</h3>
      <div className="my-6 flex items-end justify-center gap-1">
        <span className="text-gradient text-4xl font-black tracking-[-0.04em]">{plan.price}</span>
        <span className="pb-1 text-sm text-muted-foreground">{plan.period}</span>
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-shadow duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
      >
        Get Started Now
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </motion.article>
  );
}

export default function PricingPage() {
  const [active, setActive] = useState(PRICING[0].id);
  const group = PRICING.find((g) => g.id === active) ?? PRICING[0];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Digital Marketing Packages & Pricing — Graphics Layers"
        description="Explore flexible pricing for SEO, social media, performance marketing and web development tailored to your budget."
        path="/pricing"
        home={false}
      />
      <Navbar />
      <main>
        <PageHeader
          title="Plans & Pricing"
          crumb="Pricing"
          description="Flexible packages for SEO, social media, ads and web development, built around your budget."
        />

        <section className="section-padding pb-28 md:pb-36">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div role="tablist" aria-label="Choose a service" className="mb-12 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden">
                {PRICING.map((g) => {
                  const on = g.id === active;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => setActive(g.id)}
                      className={`relative shrink-0 rounded-full border px-6 py-2.5 text-sm font-medium transition-colors duration-300 md:text-base ${on ? "border-primary text-primary-foreground" : "border-foreground/10 bg-foreground/5 text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}
                    >
                      {on && <motion.span layoutId="pricing-pill" transition={{ type: "spring", stiffness: 380, damping: 30 }} className="absolute inset-0 rounded-full bg-primary shadow-[0_0_30px_hsl(var(--primary)/0.35)]" />}
                      <span className="relative z-10">{g.label}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <AnimatePresence mode="wait">
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap justify-center gap-5"
              >
                {group.plans.map((p) => (
                  <div key={p.name} className="w-full md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]">
                    <PlanCard plan={p} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
