import { PLATFORMS } from "../data/content";
import Reveal from "./Reveal";

export default function Platforms() {
  return (
    <section className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-[-0.04em] md:text-5xl">
            Find Us on <span className="text-gradient">Trusted Platforms</span>
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Explore our profiles on leading agency directories and learn more about our
            services and expertise.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} y={30}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-w-0 flex-col rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-foreground/[0.06] hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-6"
              >
                <div className="mb-5 flex h-32 w-full items-center justify-center overflow-hidden rounded-xl bg-card p-3 sm:h-40 sm:p-5">
                  <img
                    src={p.image}
                    alt={`${p.name} logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="mb-2 text-sm font-semibold leading-snug text-foreground sm:text-base">
                  Listed on {p.name}
                </span>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent">
                  View Profile ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
