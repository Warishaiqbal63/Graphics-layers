import { ArrowUpRight, MapPin } from "lucide-react";
import { useEffect } from "react";
import { SITE } from "../data/content";
import Reveal from "./Reveal";

const ELFSIGHT_SRC = "https://static.elfsight.com/platform/platform.js";

export default function GoogleReviews() {
  // The original page never loaded the Elfsight script, so the widget div stayed empty.
  useEffect(() => {
    if (document.querySelector(`script[src="${ELFSIGHT_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = ELFSIGHT_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section className="section-padding py-24 md:py-32">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-[linear-gradient(135deg,rgba(16,64,152,0.08),rgba(15,127,166,0.03),rgba(255,255,255,0.95))] px-7 py-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.09)] md:px-16 md:py-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
          <div className="relative">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Google Business Profile
            </span>
            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold tracking-[-0.04em] md:text-5xl">
              See what people are saying about{" "}
              <span className="text-gradient">Graphics Layers.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Reviews from our Sialkot Google profile.
            </p>

            <div
              className="elfsight-app-e8412517-fdeb-42e1-9caa-194568866d94 mb-8 text-left"
              data-elfsight-app-lazy
            />

            <a
              href={SITE.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
            >
              Read our Google reviews
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
