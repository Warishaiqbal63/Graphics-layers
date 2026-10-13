import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "../data/content";
import Reveal from "./Reveal";

export default function Blog() {
  return (
    <section className="section-padding py-40">
      <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Insights
          </span>
          <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.03em] md:text-6xl">
            Latest from the
            <br />
            <span className="text-gradient">Blog</span>
          </h2>
        </div>
        <a
          href="/blog"
          className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/50"
        >
          All Articles
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        {BLOG_POSTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.12}>
            <motion.a href="/blog" whileHover={{ y: -8 }} className="group block h-full">
              <div className="h-full overflow-hidden rounded-3xl border border-border bg-card transition-colors duration-500 group-hover:border-primary/30">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={p.image}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/images/general/hero-bg.jpg"; }}
                    alt={`${p.title} — digital marketing blog by Graphics Layers Pakistan`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={600}
                    height={340}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-primary/90 px-3 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                  <h3 className="mb-3 mt-2 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
