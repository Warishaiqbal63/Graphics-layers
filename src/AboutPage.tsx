import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";
import SEO from "./components/SEO";
import WhatsAppButton from "./components/WhatsAppButton";
import { ABOUT_IMAGES , GALLERY, STORY, TEAM, TECH_STACK, VALUES, VALUES_INTRO } from "./data/about";
import { SITE } from "./data/content";

const roundImg =
  "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`About Us | ${SITE.name} — Digital Marketing Agency`}
        description="Explore how our data-driven team delivers ROI-focused marketing, brand development, and business growth through modern digital tools."
        path="/about"
        home={false}
      />
      <Navbar />
      <main>
        {/* Header */}
        <header className="section-padding relative overflow-hidden pb-16 pt-40 text-center md:pb-24 md:pt-52">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 animate-float rounded-full bg-primary/20 blur-[120px] md:h-[28rem] md:w-[28rem]" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-3xl"
          >
            <h1 className="heading-lg mb-6">About <span className="text-gradient">Us</span></h1>
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <li><a href="/" className="transition-colors hover:text-primary">Home</a></li>
                <li aria-hidden><ChevronRight className="h-3.5 w-3.5 text-primary" /></li>
                <li aria-current="page" className="font-semibold text-foreground">About Us</li>
              </ol>
            </nav>
          </motion.div>
        </header>

        {/* Story */}
        <section className="section-padding pb-28 md:pb-36">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4" scale={0.95}>
              <div className="group aspect-[3/4] overflow-hidden rounded-full border border-foreground/10">
                <img src={ABOUT_IMAGES.story1} alt="Our team at work" width={480} height={640} loading="lazy" className={roundImg} />
              </div>
            </Reveal>
            <Reveal className="md:col-span-5" delay={0.1}>
              <h2 className="mb-6 text-3xl font-bold tracking-[-0.04em] md:text-4xl lg:text-5xl">{STORY.title}</h2>
              {STORY.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="body-md mb-5 text-muted-foreground">{p}</p>
              ))}
            </Reveal>
            <Reveal className="hidden md:col-span-3 md:block" delay={0.2} scale={0.95}>
              <div className="group aspect-[3/4] overflow-hidden rounded-full border border-foreground/10 md:mt-32">
                <img src={ABOUT_IMAGES.story2} alt="Creative work session" width={360} height={480} loading="lazy" className={roundImg} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-[linear-gradient(180deg,rgba(16,64,152,0.02),rgba(15,127,166,0.018))] py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl items-center gap-14 xl:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Our Values" align="left" description={VALUES_INTRO}>
                What Fuels Us <span className="text-gradient">Every Day?</span>
              </SectionHeading>
              <div className="flex flex-col gap-4">
                {VALUES.map(({ title, text, icon: Icon }, i) => (
                  <Reveal key={title} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className="group flex flex-col gap-4 rounded-2xl border border-foreground/10 bg-card p-6 transition-colors duration-500 hover:border-primary/30 sm:flex-row"
                    >
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="mb-2 text-xl font-bold tracking-[-0.02em]">{title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                      </div>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal className="grid gap-6 sm:grid-cols-2" scale={0.95}>
              <div className="group self-end overflow-hidden rounded-full border border-foreground/10">
                <img src={ABOUT_IMAGES.values1} alt="Team collaboration" width={400} height={560} loading="lazy" className={`${roundImg} aspect-[3/4]`} />
              </div>
              <div className="group hidden self-start overflow-hidden rounded-full border border-foreground/10 sm:block">
                <img src={ABOUT_IMAGES.values2} alt="Strategy meeting" width={400} height={560} loading="lazy" className={`${roundImg} aspect-[3/4]`} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-padding py-28 md:py-36">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Leadership" description="Strategic leaders driving every move with experience, clarity, and a vision for lasting impact.">
              The Pillars Behind <span className="text-gradient">{SITE.name}</span>
            </SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.12}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="group overflow-hidden rounded-[10px] border border-foreground/10 bg-card transition-colors duration-500 hover:border-primary/30"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img src={m.image} alt={m.name} width={480} height={600} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold tracking-[-0.02em]">{m.name}</h3>
                      <p className="mt-1 text-sm text-primary">{m.role}</p>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="section-padding bg-[linear-gradient(180deg,rgba(16,64,152,0.02),rgba(15,127,166,0.018))] py-28 md:py-36">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Tech Stack" description="Powered by modern tools and platforms to scale campaigns and drive real results.">
              Our <span className="text-gradient">Tech Stack</span>
            </SectionHeading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {TECH_STACK.map((t, i) => (
                <Reveal key={t.name} delay={(i % 5) * 0.06} y={24}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.03] p-4 transition-colors duration-300 hover:border-primary/30"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-card p-2">
                      <img src={t.logo} alt="" width={32} height={32} loading="lazy" className="h-full w-full object-contain" />
                    </span>
                    <span className="text-sm font-semibold">{t.name}</span>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Life at agency */}
        <section className="overflow-hidden py-28 md:py-36">
          <div className="section-padding">
            <SectionHeading eyebrow="Our Culture" description="Where collaboration meets creativity and every day brings new ideas, challenges, and wins worth celebrating.">
              A Glimpse into Life at <span className="text-gradient">{SITE.name}</span>
            </SectionHeading>
          </div>
          <div className="logo-marquee-track marquee-left">
            {[0, 1].map((g) => (
              <div key={g} className="logo-marquee-group" aria-hidden={g === 1}>
                {GALLERY.map((src, i) => (
                  <img
                    key={`${g}-${src}`}
                    src={src}
                    alt={g === 0 ? `Team moment ${i + 1}` : ""}
                    width={384}
                    height={288}
                    loading="lazy"
                    className="aspect-[4/3] w-72 rounded-2xl border border-foreground/10 object-cover shadow-2xl md:w-96"
                  />
                ))}
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
