import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section className="section-padding relative py-32 md:py-40">
      <SectionHeading
        eyebrow="What We Do"
        description="From SEO and paid advertising to social media and web development, we build connected marketing systems that generate qualified traffic, leads, and sales."
      >
        One Team for Your
        <br />
        <span className="text-gradient">Full-Funnel Growth</span>
      </SectionHeading>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.href} delay={(i % 2) * 0.12}>
            <motion.a
              href={s.href}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group block h-full"
            >
              <div className="relative h-full overflow-hidden rounded-[10px] border border-foreground/10 bg-card shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-primary/30 hover:shadow-[0_25px_80px_rgba(16,64,152,0.09)]">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/55 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="relative z-10 -mt-14 p-6 md:p-9">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
                    Growth service
                  </div>
                  <h3 className="mb-3 text-2xl font-bold tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-primary md:text-[2rem]">
                    {s.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {s.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore services
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
