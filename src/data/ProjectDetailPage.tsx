import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import WhatsAppButton from "../components/WhatsAppButton";
import { PROJECTS } from "../data/portfolio";
import { getDetail } from "../data/portfolioDetails";

export default function ProjectDetailPage({ slug }: { slug: string }) {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[index];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding flex min-h-screen flex-col items-center justify-center text-center">
          <h1 className="heading-lg mb-4">Project <span className="text-gradient">not found</span></h1>
          <p className="body-md mb-8 text-muted-foreground">Ye project mojood nahi hai ya hata diya gaya hai.</p>
          <a href="/portfolio" className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground">Back to Portfolio</a>
        </main>
        <Footer />
      </div>
    );
  }

  const detail = getDetail(project);
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const related = PROJECTS.filter((p) => p.slug !== slug && p.categories.some((c) => project.categories.includes(c))).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${project.title} | Portfolio — Graphics Layers`}
        description={detail.description}
        path={`/portfolio/${project.slug}`}
        home={false}
      />
      <Navbar />
      <main>
        <header className="section-padding relative overflow-hidden pb-12 pt-36 md:pt-48">
          <div aria-hidden className="pointer-events-none absolute -right-20 top-20 h-80 w-80 animate-float rounded-full bg-primary/15 blur-[120px]" />
          <div className="relative mx-auto max-w-7xl">
            <motion.a
              href="/portfolio"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Portfolio
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-muted-foreground">#{t}</span>
                ))}
              </div>
              <h1 className="heading-lg max-w-4xl">{project.title}</h1>
            </motion.div>
          </div>
        </header>

        <section className="section-padding pb-24">
          <div className="mx-auto max-w-7xl">
            <Reveal scale={0.97}>
              <div className="overflow-hidden rounded-[14px] border border-foreground/10 bg-card">
                <img src={project.image} alt={project.title} width={1200} height={700} className="h-auto max-h-[560px] w-full object-cover" />
              </div>
            </Reveal>

            <div className="mt-16 grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Reveal>
                  <h2 className="mb-5 text-3xl font-bold tracking-[-0.03em] md:text-4xl">Project Overview</h2>
                  <p className="body-md mb-12 text-muted-foreground">{detail.description}</p>
                </Reveal>

                <Reveal delay={0.1}>
                  <h2 className="mb-6 text-3xl font-bold tracking-[-0.03em] md:text-4xl">What We Delivered</h2>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {detail.services.map((s) => (
                      <li key={s} className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.03] p-4 transition-colors duration-300 hover:border-primary/30">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        <span className="font-medium">{s}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal delay={0.15}>
                <aside className="sticky top-28 rounded-2xl border border-foreground/10 bg-card p-7">
                  <h3 className="mb-6 text-xl font-bold">Project Info</h3>
                  <dl className="space-y-5 text-sm">
                    <div>
                      <dt className="mb-1 text-muted-foreground">Client</dt>
                      <dd className="font-semibold">{project.title}</dd>
                    </div>
                    {detail.industry.length > 0 && (
                      <div>
                        <dt className="mb-1 text-muted-foreground">Industry</dt>
                        <dd className="font-semibold">{detail.industry.join(", ")}</dd>
                      </div>
                    )}
                    <div>
                      <dt className="mb-1 text-muted-foreground">Services</dt>
                      <dd className="font-semibold">{detail.services.join(", ")}</dd>
                    </div>
                  </dl>
                  {detail.liveUrl && (
                    <a href={detail.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-7 flex items-center justify-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/40">
                      Visit Website <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  <a href="/contact" className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-shadow duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
                    Start a Similar Project <ArrowRight className="h-4 w-4" />
                  </a>
                </aside>
              </Reveal>
            </div>

            <Reveal className="mt-20 grid gap-4 sm:grid-cols-2">
              {[{ p: prev, label: "Previous Project", icon: <ArrowLeft className="h-5 w-5" />, right: false }, { p: next, label: "Next Project", icon: <ArrowRight className="h-5 w-5" />, right: true }].map(({ p, label, icon, right }) => (
                <a key={label} href={`/portfolio/${p.slug}`} className={`group flex items-center gap-4 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition-colors duration-300 hover:border-primary/30 ${right ? "flex-row-reverse text-right" : ""}`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">{icon}</span>
                  <span>
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="block text-lg font-bold">{p.title}</span>
                  </span>
                </a>
              ))}
            </Reveal>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-padding pb-32">
            <div className="mx-auto max-w-7xl">
              <Reveal><h2 className="mb-10 text-3xl font-bold tracking-[-0.03em] md:text-5xl">More Projects</h2></Reveal>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {related.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 0.1}><ProjectCard project={p} /></Reveal>
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
