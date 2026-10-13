import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";
import SEO from "./components/SEO";
import WhatsAppButton from "./components/WhatsAppButton";
import { FAQ_GROUPS , SERVICE_CARDS } from "./data/servicesPage";

function AccordionItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`overflow-hidden rounded-xl border transition-colors duration-300 ${open ? "border-primary/40 bg-primary/[0.04]" : "border-foreground/10 bg-foreground/[0.03]"}`}>
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-center justify-between gap-4 p-5 text-left">
        <span className={`text-base font-semibold transition-colors duration-300 md:text-lg ${open ? "text-primary" : ""}`}>{q}</span>
        <Plus className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open ? "rotate-45 text-primary" : "text-muted-foreground"}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const group = FAQ_GROUPS[tab];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Services | Digital Marketing Agency — Graphics Layers"
        description="Result-driven digital marketing services: SEO, social media, performance marketing, web development and graphic designing."
        path="/services"
        home={false}
      />
      <Navbar />
      <main>
        <PageHeader
          title="Marketing Services"
          crumb="Services"
          description="Everything your brand needs to grow online, all under one roof."
        />

        <section className="section-padding pb-28 md:pb-36">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4">
            {SERVICE_CARDS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1} className="w-full md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]">
                <motion.a
                  href={s.href}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group relative block h-[26rem] overflow-hidden rounded-xl border border-foreground/10 shadow-[0_25px_80px_rgba(0,0,0,0.1)]"
                >
                  <img src={s.image} alt={s.title} width={600} height={520} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span aria-hidden className="absolute inset-0" style={{ background: `linear-gradient(to top, ${s.tint}F0 0%, ${s.tint}B3 45%, ${s.tint}33 100%)` }} />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <h3 className="mb-3 text-2xl font-bold tracking-[-0.02em]">{s.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-white/90">{s.text}</p>
                    <span className="inline-flex items-center gap-1.5 border-b-2 border-white/70 pb-0.5 text-sm font-semibold">
                      Learn more <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-padding bg-[linear-gradient(180deg,rgba(16,64,152,0.025),rgba(15,127,166,0.025))] py-28 md:py-36">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="FAQs" description="Quick answers to the questions we hear most.">
              Frequently Asked <span className="text-gradient">Questions</span>
            </SectionHeading>

            <div className="grid gap-8 lg:grid-cols-12">
              <div role="tablist" aria-label="FAQ categories" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] lg:sticky lg:top-28 lg:col-span-3 lg:flex-col lg:self-start lg:overflow-visible [&::-webkit-scrollbar]:hidden">
                {FAQ_GROUPS.map((g, i) => {
                  const on = i === tab;
                  return (
                    <button
                      key={g.label}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => { setTab(i); setOpen(0); }}
                      className={`relative shrink-0 rounded-xl border px-5 py-3.5 text-left text-sm font-semibold transition-colors duration-300 ${on ? "border-primary text-primary-foreground" : "border-foreground/10 bg-foreground/5 text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}
                    >
                      {on && <motion.span layoutId="faq-tab" transition={{ type: "spring", stiffness: 380, damping: 30 }} className="absolute inset-0 rounded-xl bg-primary" />}
                      <span className="relative z-10">{g.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-9">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {group.items.map(([q, a], i) => (
                      <AccordionItem key={q} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
