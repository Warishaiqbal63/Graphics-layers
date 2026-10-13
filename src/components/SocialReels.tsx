import { ArrowUpRight } from "lucide-react";
import { REELS_MOBILE, REEL_COLUMNS, SITE } from "../data/content";
import Reveal from "./Reveal";

const reelUrl = (id: string) => `https://www.instagram.com/reel/${id}/`;

function ReelCard({ id, label }: { id: string; label: string }) {
  return (
    <a
      aria-label={label}
      href={reelUrl(id)}
      target="_blank"
      rel="noreferrer"
      className="group relative block aspect-[9/16] overflow-hidden rounded-xl border border-border/50 bg-secondary/40"
    >
      <iframe
        src={`${reelUrl(id)}embed/`}
        title={label}
        className="pointer-events-none absolute inset-0 h-full w-full border-0"
        loading="lazy"
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
      <span className="absolute inset-0 z-10" aria-hidden="true" />
      <span className="pointer-events-none absolute right-3 top-3 z-20 rounded-full bg-background/70 p-2 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}

function ReelColumn({ ids, direction }: { ids: string[]; direction: "up" | "down" }) {
  return (
    <div className="overflow-hidden">
      <div className={`reel-column-track ${direction === "up" ? "reel-column-up" : "reel-column-down"}`}>
        {[false, true].map((hidden) => (
          <div
            key={String(hidden)}
            className="flex flex-col gap-3 pb-3 md:gap-5 md:pb-5"
            aria-hidden={hidden}
          >
            {ids.map((id) => (
              <ReelCard key={id} id={id} label="Watch reel on Instagram" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SocialReels() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 py-20 md:py-28">
      <div className="section-padding mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="max-w-xl">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Follow the Culture
          </span>
          <h2 className="heading-lg mb-6 max-w-lg">
            Ideas. Strategies. <span className="text-gradient">Results.</span>
          </h2>
          <p className="body-md mb-8 max-w-lg text-muted-foreground">
            Follow us for daily content, behind-the-scenes moments, and a front-row seat to
            the culture we're building — one post at a time.
          </p>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.35)]"
          >
            Follow @graphicslayers
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </Reveal>

        {/* Desktop: scrolling columns */}
        <div className="relative hidden h-[580px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] md:block lg:h-[720px]">
          <div className="grid h-full grid-cols-3 gap-4 md:gap-6 lg:gap-7">
            {REEL_COLUMNS.map((ids, i) => (
              <ReelColumn key={i} ids={ids} direction={i % 2 === 0 ? "up" : "down"} />
            ))}
          </div>
        </div>

        {/* Mobile: static grid */}
        <div className="grid grid-cols-2 gap-[10px] md:hidden">
          {REELS_MOBILE.map((id, i) => (
            <ReelCard key={id} id={id} label={`Watch reel ${i + 1} on Instagram`} />
          ))}
        </div>
      </div>
    </section>
  );
}
