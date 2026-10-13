import { CLIENT_ROWS } from "../data/content";

const logoBox =
  "flex h-10 w-24 shrink-0 items-center justify-center opacity-90 grayscale transition duration-300 hover:grayscale-0 sm:h-12 sm:w-28 md:h-16 md:w-40";

function Group({
  row,
  hidden,
}: {
  row: { name: string; file: string }[];
  hidden?: boolean;
}) {
  return (
    <div className="logo-marquee-group" aria-hidden={hidden}>
      {row.map((c) => (
        <div key={c.file} className={logoBox}>
          <img
            src={`/images/clients/${c.file}`}
            alt={hidden ? "" : `${c.name} logo`}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default function ClientsMarquee() {
  return (
    <section
      id="trusted-brands"
      className="relative overflow-hidden border-y border-border/50 py-16 md:py-20"
    >
      <div className="section-padding mb-9 md:mb-12">
        <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by brands across Pakistan and around the world
        </p>
      </div>

      <div className="relative space-y-5 md:space-y-7" aria-label="Our clients">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-32 lg:w-44" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-32 lg:w-44" />

        {CLIENT_ROWS.map((row, i) => (
          <div key={i} className="overflow-hidden">
            <div
              className={`logo-marquee-track ${i % 2 === 0 ? "marquee-left" : "marquee-right"}`}
            >
              <Group row={row} />
              <Group row={row} hidden />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
