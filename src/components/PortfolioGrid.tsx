import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PORTFOLIO_FILTERS, PROJECTS, type FilterId } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function PortfolioGrid() {
  const [active, setActive] = useState<FilterId>("all");

  const visible = useMemo(
    () => (active === "all" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(active))),
    [active],
  );

  return (
    <section className="section-padding pb-32 md:pb-40">
      <Reveal>
        <div
          role="tablist"
          aria-label="Filter projects"
          className="mx-auto mb-14 flex max-w-7xl gap-3 overflow-x-auto pb-2 [scrollbar-width:none] md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden"
        >
          {PORTFOLIO_FILTERS.map((f) => {
            const on = f.id === active;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setActive(f.id)}
                className={`relative shrink-0 rounded-full border px-6 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  on
                    ? "border-primary text-primary-foreground"
                    : "border-foreground/10 bg-foreground/5 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="portfolio-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 -z-0 rounded-full bg-primary shadow-[0_0_30px_hsl(var(--primary)/0.35)]"
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <motion.div layout className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="py-20 text-center text-muted-foreground">Is category me abhi koi project nahi hai.</p>
      )}
    </section>
  );
}
