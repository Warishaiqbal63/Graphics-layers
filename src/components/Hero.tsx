import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { STATS } from "../data/content";
import CountUp from "./CountUp";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image + fade */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://unsplash.com/photos/gEvMA8O6Et4/download?force=true&w=1920"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/images/general/hero-bg.jpg"; }}
          alt="Graphics Layers — digital growth ecosystem"
          className="h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
      </div>

      {/* Glow blobs */}
      <div aria-hidden className="absolute inset-0 z-[1]">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[100px]" />
      </div>

      {/* Grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(222 55% 20% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(222 55% 20% / 0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="section-padding relative z-10 w-full pb-20 pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-7xl text-left"
        >
          <motion.div variants={item} className="mb-10">
            <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Trusted by Brands Worldwide
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-10 text-3xl font-bold leading-[1.1] tracking-[-0.03em] md:text-5xl lg:text-6xl xl:text-[4.5rem]"
          >
            <span className="mb-3 block">Marketing That Gets You Found</span>
            <span className="text-gradient block">Results That Get You Trusted</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-14 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:text-2xl"
          >
            Graphics Layers is a full-service digital agency helping businesses across Lahore,
            Karachi, Islamabad, Rawalpindi, and Sialkot grow with SEO, paid media, social, and
            web development — built around one goal: real, measurable growth.
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="glow-primary group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] md:gap-3 md:px-9 md:py-5 md:text-lg"
            >
              Get a Free Digital Marketing Audit
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-500 hover:border-primary/30 hover:bg-secondary/50 md:gap-3 md:px-9 md:py-5 md:text-lg"
            >
              <Play className="h-4 w-4" />
              See Our Work
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mt-24 grid grid-cols-2 gap-1 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6 text-center transition-colors duration-500 hover:bg-foreground/[0.06] md:p-8"
              >
                <div className="text-gradient mb-3 text-3xl font-bold md:text-5xl">
                  <CountUp value={s.value} />
                </div>
                <div className="text-sm tracking-wide text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1.5">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </div>
      </div>
    </section>
  );
}
