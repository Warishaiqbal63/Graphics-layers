import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ChevronRight, Minus, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

/* ============================== DATA ============================== */

const services = [
  { title: 'SEO Services', href: '/services/search-engine-optimization', image: 'https://kdmagency.com/uploads/kdm/vgGU9b7lq6KRkE5bzuSnuBhQsBKAYuOMHzv6ZsjM.png', text: 'Rank higher on Google and attract traffic that actually converts.' },
  { title: 'Paid Ads and Performance Marketing', href: '/services/performance-marketing', image: 'https://kdmagency.com/uploads/kdm/9dTJlviAaRwiE2zVObEimaue2FOc1YjHlazKOIo0.jpg', text: 'Launch targeted campaigns that deliver fast, measurable results.' },
  { title: 'Social Media Marketing', href: '/services/social-media-management', image: 'https://kdmagency.com/uploads/kdm/mSvwpJZOwoWd7CevkN6Cc8c8mP7R2gO6aDWMJjU9.png', text: 'Engage your audience and grow your brand across social platforms.' },
  { title: 'Web and Ecommerce Development', href: '/services/website-development', image: 'https://kdmagency.com/uploads/kdm/hYMqZzuEhnW9emInmnnvKE7N3BLnK05cbWFGaC1L.webp', text: 'Build fast, responsive websites and stores that convert visitors.' },
  { title: 'Graphic Design & Branding', href: '/services/graphic-designing', image: 'https://kdmagency.com/uploads/kdm/SjMcSzL6ZeP4wuAWzhsLAV6qigpMVLoVUi6p3CrM.webp', text: 'Create consistent brand visuals and creative for every customer touchpoint.' },
]

// FAQ aap ki apni website (Graphics Layers) ke sawalon se liye hain.
// Naye sawal ya tab add karne ke liye bas is array mein add karen.
const faqTabs = [
  {
    label: 'Getting Started',
    items: [
      { q: 'What type of digital marketing agency is Graphics Layers?', a: 'Graphics Layers is a full-service digital marketing agency with HQ in the United Kingdom, offering SEO, social media marketing, paid advertising, content strategy, and web development under one roof. Whether you need a single service or a complete strategy, we build a plan around what your business actually needs.' },
      { q: 'Do you only work with large businesses, or do you help small businesses too?', a: 'Our Pakistani branch works with businesses of every size, from local SMEs in Lahore, Karachi, Islamabad, and Rawalpindi to larger, established brands. Our strategies are built around your budget and goals, not a fixed package.' },
      { q: 'What kind of ROI can I expect from SEO and digital marketing services?', a: "ROI depends on your industry, competition, and starting point, so we won't promise a specific number upfront. What we do promise is transparent monthly reporting that ties your activity to real outcomes: traffic, leads, and conversions." },
    ],
  },
  {
    label: 'SEO Services',
    items: [
      { q: 'Do you offer SEO packages for businesses in Pakistan?', a: "Yes, we offer SEO tailored to your business, whether you need local SEO in a city like Lahore or Karachi, or a national strategy for an e-commerce or service brand. Every SEO package starts with a free audit so you know exactly what you're paying for." },
    ],
  },
  {
    label: 'Social Media',
    items: [
      { q: 'Can you help create viral content for TikTok and Instagram?', a: 'Yes, short-form content strategy for TikTok and Instagram is one of our core services. We build content around what gets shared and saved, and pair it with paid social where it makes sense to accelerate reach.' },
    ],
  },
]

/* ============================== HELPERS ============================== */

const ease = [0.22, 1, 0.36, 1] as const

function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

/* ============================== SECTIONS ============================== */

function Banner() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden pb-24 pt-44">
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          animate={reduce ? undefined : { y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[120px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>
      <div className="section-padding relative text-center">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-5 text-4xl font-bold tracking-[-0.03em] md:text-6xl lg:text-7xl"
        >
          Our <span className="text-gradient">Services</span>
        </motion.h1>
        <motion.nav
          aria-label="Breadcrumb"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ol className="flex items-center justify-center gap-2 text-sm">
            <li className="flex items-center gap-2">
              <a href="/" className="text-muted-foreground transition-colors hover:text-primary">Home</a>
              <ChevronRight className="h-4 w-4 text-primary" aria-hidden="true" />
            </li>
            <li aria-current="page" className="font-semibold">Services</li>
          </ol>
        </motion.nav>
      </div>
    </section>
  )
}

function ServicesGrid() {
  return (
    <section className="section-padding relative pb-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.href} delay={(i % 3) * 0.1}>
            <a href={s.href} className="group relative block h-[26rem] overflow-hidden rounded-xl border border-foreground/10 shadow-lg">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-primary/30 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em] text-foreground">{s.title}</h2>
                <p className="mb-5 text-sm leading-relaxed text-foreground/80">{s.text}</p>
                <span className="inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-sm font-semibold text-primary">
                  Visit
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Faqs() {
  const [tab, setTab] = useState(0)
  const [open, setOpen] = useState<number | null>(0)
  const current = faqTabs[tab]

  const pick = (i: number) => {
    setTab(i)
    setOpen(0)
  }

  return (
    <section className="section-padding relative border-t border-border/50 bg-foreground/[0.02] py-24">
      <Reveal className="mx-auto mb-14 max-w-7xl">
        <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-6xl">
          <span className="text-gradient">FAQs</span>
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[18rem_1fr]">
        {/* Tabs */}
        <div role="tablist" aria-orientation="vertical" className="flex gap-2 overflow-x-auto lg:flex-col lg:self-start lg:overflow-visible">
          {faqTabs.map((t, i) => (
            <button
              key={t.label}
              role="tab"
              id={`faq-tab-${i}`}
              aria-selected={tab === i}
              aria-controls="faq-panel"
              onClick={() => pick(i)}
              className={`whitespace-nowrap rounded-xl border px-5 py-4 text-left text-sm font-semibold transition-all duration-300 lg:text-base ${
                tab === i
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-foreground/10 bg-foreground/5 text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div id="faq-panel" role="tabpanel" aria-labelledby={`faq-tab-${tab}`}>
          {current.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="mb-2 border-b border-foreground/10">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`flex w-full items-center justify-between gap-4 p-4 text-left text-base font-medium transition-colors md:text-lg ${isOpen ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    {item.q}
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current">
                      {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="overflow-hidden"
                    >
                      <p className="p-4 pt-0 leading-relaxed text-muted-foreground">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ============================== PAGE ============================== */

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services | Graphics Layers'
  }, [])

  return (
    <main>
      <Banner />
      <ServicesGrid />
      <Faqs />
    </main>
  )
}