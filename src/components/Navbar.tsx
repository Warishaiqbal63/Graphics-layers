import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/content";
import { SERVICE_CARDS } from "../data/servicesPage";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobSvc, setMobSvc] = useState(false);
  const activePath = typeof window !== "undefined" ? window.location.pathname : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-foreground/10 bg-background/80 py-3 backdrop-blur-xl"
            : "py-6"
        }`}
      >
        <div className="global-container flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5" aria-label="Graphics Layers home">
            <img
              src="/images/branding/graphics-layers-logo-dark.png"
              alt="Graphics Layers"
              className="h-10 w-auto md:h-11"
              width={260}
              height={40}
            />
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {NAV_LINKS.map((link) => {
              const active = activePath.replace(/\/+$/, "") === link.href || (link.href !== "/" && activePath.startsWith(link.href + "/"));
              if (link.href === "/services") {
                return (
                  <div key={link.href} className="group relative">
                    <a
                      href={link.href}
                      className={`flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    </a>
                    <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <div className="rounded-xl border border-border bg-card p-3 shadow-[0_24px_60px_rgba(16,64,152,0.18)]">
                        {SERVICE_CARDS.map((s, i) => (
                          <a
                            key={s.href}
                            href={s.href}
                            className={`block px-3 py-3 text-center text-[15px] font-medium text-foreground transition-colors hover:text-primary ${i > 0 ? "border-t border-primary/30" : ""}`}
                          >
                            {s.title.replace("Graphic Design & Branding", "Graphic Designing")}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="/contact"
              className="rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.35)]"
            >
              Get a Free Audit
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-foreground shadow-sm transition-transform duration-300 active:scale-95 xl:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-background/95 px-6 pb-10 pt-28 backdrop-blur-2xl xl:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              className="space-y-1"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  {link.href === "/services" ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={mobSvc}
                        onClick={() => setMobSvc((v) => !v)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                        <ChevronDown className={`h-6 w-6 transition-transform ${mobSvc ? "rotate-180" : ""}`} />
                      </button>
                      {mobSvc && (
                        <div className="mb-2 ml-3 space-y-1 border-l-2 border-primary/30 pl-4">
                          <a href="/services" onClick={() => setOpen(false)} className="block py-2 text-lg font-medium text-muted-foreground hover:text-primary">All Services</a>
                          {SERVICE_CARDS.map((s) => (
                            <a key={s.href} href={s.href} onClick={() => setOpen(false)} className="block py-2 text-lg font-medium text-muted-foreground hover:text-primary">{s.title}</a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                  )}
                </motion.li>
              ))}
            </motion.ul>
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground"
            >
              Get a Free Audit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
