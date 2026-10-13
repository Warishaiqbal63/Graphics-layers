import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SEO from "./components/SEO";
import WhatsAppButton from "./components/WhatsAppButton";
import { SERVICES } from "./data/content";
import { SERVICE_LONG } from "./data/servicesLong";
import { SERVICE_CARDS, SERVICE_DETAILS, SERVICE_FAQS } from "./data/servicesPage";

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const service = SERVICE_CARDS.find((item) => item.href.endsWith(`/${slug}`));
  const detail = SERVICE_DETAILS[slug];
  const long = SERVICE_LONG[slug];

  if (!service || !detail) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding flex min-h-[65vh] flex-col items-center justify-center pt-28 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Service not found</p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight">Let’s find the right service.</h1>
          <a href="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white">
            <ArrowLeft className="h-4 w-4" /> View all services
          </a>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  const relatedServices = SERVICES.filter((item) => item.href !== service.href);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${service.title} | Graphics Layers`}
        description={service.text}
        path={service.href}
        home={false}
      />
      <Navbar />
      <main>
        <section className="section-padding relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
          <div aria-hidden className="pointer-events-none absolute -right-28 top-16 h-[32rem] w-[32rem] rounded-full bg-primary/[0.08] blur-[110px]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
            <div>
              <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                <a href="/" className="transition-colors hover:text-primary">Home</a><span>/</span>
                <a href="/services" className="transition-colors hover:text-primary">Services</a><span>/</span>
                <span aria-current="page" className="font-medium text-foreground">{service.title}</span>
              </nav>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-4 w-4" /> {detail.eyebrow}
              </p>
              <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl lg:text-6xl">
                {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-gradient">{service.title.split(" ").slice(-1)}</span>
              </h1>
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{detail.intro}</p>
              <div className="mb-9 flex flex-wrap gap-2">
                {detail.deliverables.slice(0, 3).map((item) => (
                  <span key={item} className="rounded-full border border-border bg-card/80 px-3.5 py-2 text-xs font-medium text-accent md:text-sm">{item}</span>
                ))}
              </div>
              <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(16,64,152,0.2)] transition hover:-translate-y-0.5 md:text-base">
                Discuss your project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-border bg-card p-2.5 shadow-[0_28px_90px_rgba(0,0,0,0.14)]">
                <img src={long?.hero ?? service.image} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = service.image; }} alt={`${service.title} by Graphics Layers`} className="aspect-[1.2/1] w-full rounded-[1.1rem] object-cover" width={900} height={760} fetchPriority="high" />
                <div className="flex items-center justify-between gap-4 px-3 py-4">
                  <div><p className="text-xs font-medium text-muted-foreground">A clear plan. Focused execution.</p><p className="mt-1 font-bold">Built around your next goal</p></div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><ArrowRight className="h-5 w-5" /></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {long?.sections.map((sec, n) => (
          <section key={sec.t} className={`section-padding py-16 md:py-24 ${n % 2 === 0 ? "bg-secondary/60" : "bg-card"} border-b border-border/60`}>
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={n % 2 === 0 ? "" : "lg:order-2"}>
                <img src={sec.i} alt={sec.t} loading="lazy" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = service.image; }} className="aspect-[4/3] w-full rounded-3xl border border-border object-cover shadow-[0_24px_70px_rgba(16,64,152,0.14)]" />
              </div>
              <div className={n % 2 === 0 ? "" : "lg:order-1"}>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">0{n + 1}</p>
                <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl">{sec.t}</h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{sec.x}</p>
              </div>
            </div>
          </section>
        ))}

        <section className="section-padding border-y border-border/70 bg-card/60 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">What this helps you achieve</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Work that connects to <span className="text-gradient">real outcomes.</span></h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {detail.outcomes.map((outcome, i) => (
                <div key={outcome} className="rounded-2xl border border-border/80 bg-background p-5 md:p-6">
                  <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary"><Check className="h-4 w-4" /></span>
                  <p className="font-semibold leading-snug">{outcome}</p>
                  <span className="mt-3 block text-xs font-medium tracking-[0.16em] text-muted-foreground">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">What’s included</p>
              <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl">The right pieces, working together.</h2>
              <p className="leading-relaxed text-muted-foreground">We shape the scope to fit your business, then keep priorities and progress easy to follow.</p>
              <a href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="h-4 w-4" /> All services</a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {detail.deliverables.map((item, i) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-border/80 bg-card p-5 shadow-[0_12px_38px_rgba(0,0,0,0.04)]">
                  <span className="text-sm font-bold text-primary">0{i + 1}</span>
                  <p className="font-semibold leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[linear-gradient(180deg,rgba(16,64,152,0.025),rgba(15,127,166,0.025))] py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">How we work</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">A simple path from brief to progress.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {detail.process.map((step, i) => (
                <article key={step.title} className="rounded-2xl border border-border/80 bg-card p-6 md:p-8">
                  <span className="mb-8 block text-sm font-bold tracking-[0.18em] text-primary">STEP 0{i + 1}</span>
                  <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {long && long.plans.length > 0 && (
          <section className="section-padding py-20 md:py-28">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Pricing</p><h2 className="text-3xl font-bold tracking-tight md:text-4xl">{service.title} Pricing Plans</h2></div>
              <div className="flex flex-wrap justify-center gap-5">
                {long.plans.map((pl) => (
                  <article key={pl.name} className="flex w-full flex-col rounded-3xl border border-border bg-card p-7 shadow-[0_20px_60px_rgba(16,64,152,0.1)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                    <h3 className="border-b border-border pb-4 text-lg font-bold">{pl.name}</h3>
                    <p className="my-5"><span className="text-4xl font-bold text-primary">{pl.price}</span><span className="text-muted-foreground"> {pl.per}</span></p>
                    <ul className="mb-6 flex-1 space-y-2.5">
                      {pl.features.map((f) => (<li key={f} className="flex gap-2.5 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{f}</li>))}
                    </ul>
                    <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Get Started Now <ArrowUpRight className="h-4 w-4" /></a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {(SERVICE_FAQS[slug] ?? []).length > 0 && (
          <section className="section-padding py-20 md:py-28">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">FAQs</p>
              <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Common questions</h2>
              <div className="space-y-3">
                {SERVICE_FAQS[slug].map(([q, a]) => (
                  <details key={q} className="group rounded-2xl border border-border bg-card px-5 py-4 shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<span className="text-xl text-primary transition group-open:rotate-45">+</span></summary>
                    <p className="mt-3 text-muted-foreground">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedServices.length > 0 && (
          <section className="section-padding py-20 md:py-28">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">More ways to grow</p><h2 className="text-3xl font-bold tracking-tight">Related services</h2></div>
                <a href="/services" className="hidden items-center gap-2 text-sm font-semibold text-primary sm:inline-flex">All services <ArrowUpRight className="h-4 w-4" /></a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {relatedServices.slice(0, 4).map((item) => (
                  <a key={item.href} href={item.href} className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_48px_rgba(0,0,0,0.08)]">
                    <h3 className="mb-3 font-bold group-hover:text-primary">{item.title}</h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
