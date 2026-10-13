import { motion } from "framer-motion";
import {
  Award,
  BarChart3,
  Globe,
  Shield,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { WHY_US } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS: Record<(typeof WHY_US)[number]["icon"], LucideIcon> = {
  chart: BarChart3,
  award: Award,
  shield: Shield,
  zap: Zap,
  globe: Globe,
  users: Users,
};

export default function WhyUs() {
  return (
    <section className="section-padding relative overflow-hidden py-32 md:py-40">
      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10">
        <SectionHeading eyebrow="Why Graphics Layers">
          Marketing That Understands
          <br />
          <span className="text-gradient">How Business Works.</span>
        </SectionHeading>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {WHY_US.map((w, i) => {
          const Icon = ICONS[w.icon];
          return (
            <Reveal key={w.title} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-[28px] border border-primary/15 bg-[linear-gradient(135deg,rgba(16,64,152,0.06),rgba(15,127,166,0.025),rgba(255,255,255,0.95))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_25px_80px_rgba(16,64,152,0.08)]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/15">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{w.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
