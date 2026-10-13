import { motion, useScroll, useSpring } from "framer-motion";
import { Rocket, Search, Sparkles, Target, TrendingUp, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import { PROCESS } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS: Record<(typeof PROCESS)[number]["icon"], LucideIcon> = {
  search: Search,
  target: Target,
  rocket: Rocket,
  trending: TrendingUp,
  sparkles: Sparkles,
};

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section className="section-padding relative overflow-hidden py-32 md:py-40">
      <div className="absolute inset-x-0 top-32 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <SectionHeading
        eyebrow="How We Work"
        description="A proven methodology that transforms strategic insight into measurable business growth."
      >
        From Vision to <span className="text-gradient">Results</span>
      </SectionHeading>

      <div ref={ref} className="relative mx-auto max-w-6xl">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-foreground/10 to-transparent lg:block">
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="h-full w-full bg-gradient-to-b from-primary/60 to-primary"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {PROCESS.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal key={p.step} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative h-full overflow-hidden rounded-[30px] border border-foreground/10 bg-[linear-gradient(180deg,rgba(16,64,152,0.025),rgba(255,255,255,0.95))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.07)] backdrop-blur-xl transition-colors duration-500 hover:border-primary/35"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-5xl font-black leading-none text-foreground/10">
                      {p.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
