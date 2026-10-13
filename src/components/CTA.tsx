import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden py-32 md:py-40">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full bg-primary/15 blur-[180px]" />

      <Reveal
        scale={0.96}
        className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-foreground/10 bg-[linear-gradient(135deg,rgba(16,64,152,0.09),rgba(15,127,166,0.035),rgba(255,255,255,0.95))] px-6 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.11)] backdrop-blur-2xl md:px-12 md:py-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,64,152,0.13),transparent_28%)]" />
        <div className="relative z-10 text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            Ready to grow?
          </p>
          <h2 className="mb-8 text-4xl font-bold tracking-[-0.05em] text-foreground md:text-6xl lg:text-7xl">
            Ready to{" "}
            <span className="text-gradient">Turn Your Digital Presence Into Growth?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
            Get a free audit of your website, SEO, or ad account. No obligation, just a
            clear look at where you stand and what to fix first.
          </p>
          <motion.a
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_18px_50px_rgba(16,64,152,0.22)] transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(16,64,152,0.32)] md:px-10 md:py-5 md:text-base"
          >
            Book Your Free Consultation
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}
