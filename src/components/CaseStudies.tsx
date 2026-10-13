import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "../data/content";
import Reveal from "./Reveal";

export default function CaseStudies() {
  return (
    <section className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,rgba(16,64,152,0.02),rgba(15,127,166,0.018))] py-32 md:py-40">
      <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            Case Studies
          </span>
          <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Real Results from
            <br />
            <span className="text-gradient">Pakistan's Top Agency</span>
          </h2>
        </div>
        <a
          href="/portfolio"
          className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
        >
          View All Cases
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>

      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {CASE_STUDIES.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.12}>
            <motion.a
              href="/portfolio"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group block h-full"
            >
              <div className="h-full overflow-hidden rounded-[10px] border border-foreground/10 bg-card shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition-colors duration-500 group-hover:border-primary/30">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-foreground/10 bg-card/85 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md">
                    {c.tag}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="mb-3 text-2xl font-bold tracking-[-0.03em] text-foreground">
                    {c.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                  <div className="border-t border-foreground/10 pt-5">
                    <span className="text-gradient block text-4xl font-black tracking-[-0.05em]">
                      {c.metric}
                    </span>
                    <span className="mt-2 block text-sm text-muted-foreground">
                      {c.metricLabel}
                    </span>
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
