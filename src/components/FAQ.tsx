import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQS } from "../data/content";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-secondary/20 py-40">
      <Reveal className="mb-20 text-center">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          FAQ
        </span>
        <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.03em] md:text-6xl">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
      </Reveal>

      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={f.q} delay={i * 0.06} y={24}>
              <div
                className={`rounded-2xl border bg-card/30 backdrop-blur-sm transition-colors duration-300 ${
                  isOpen ? "border-primary/30" : "border-border hover:border-primary/20"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-7 text-left"
                >
                  <span className="text-base font-semibold text-foreground">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-7 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
