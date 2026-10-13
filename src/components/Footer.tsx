import { ArrowUpRight } from "lucide-react";
import { FOOTER_COMPANY, FOOTER_SERVICES, SITE, SOCIALS } from "../data/content";
import Reveal from "./Reveal";

const linkCls = "text-sm text-muted-foreground transition-colors duration-300 hover:text-primary";
const headCls = "mb-7 text-sm font-semibold uppercase tracking-[0.22em] text-foreground";

export default function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(234,241,251,1))]">
      <div className="section-padding py-20 md:py-24">
        <Reveal y={30} className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="mb-7 flex items-center gap-2.5">
              <img
              src="/images/branding/graphics-layers-logo-dark.png"
              alt="Graphics Layers"
              className="h-10 w-auto md:h-11"
              width={260}
              height={40} loading="lazy"
            />
            </a>
            <p className="mb-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Graphics Layers is a digital marketing agency in Pakistan delivering social
              media marketing, paid ads and performance marketing, web and ecommerce
              development, and SEO for clients in Sialkot, Lahore, Islamabad, and globally.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  aria-label={`Follow Graphics Layers on ${s.label}`}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={headCls}>Services</h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={headCls}>Company</h4>
            <ul className="space-y-3">
              {FOOTER_COMPANY.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={headCls}>Get in Touch</h4>
            <div className="mb-8 space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="mb-1 font-medium text-foreground">Pakistan Office</p>
                <p>
                  Kent Mall, Aziz Shaheed Road,
                  <br />
                  Sialkot 51410, Punjab, Pakistan
                </p>
              </div>
              <div>
                <p className="mb-1 font-medium text-foreground">UK Office</p>
                <p>
                  87 Fields Farm Rd,
                  <br />
                  Manchester SK14 3NU, UK
                </p>
              </div>
              <p>
                <a className="transition-colors hover:text-primary" href={`tel:${SITE.phonePkHref}`}>
                  {SITE.phonePk}
                </a>
              </p>
              <p>
                <a className="transition-colors hover:text-primary" href={`tel:${SITE.phoneUkHref}`}>
                  {SITE.phoneUk}
                </a>
              </p>
              <p>
                {SITE.emails.map((e) => (
                  <a
                    key={e}
                    className="block break-all transition-colors hover:text-primary"
                    href={`mailto:${e}`}
                  >
                    {e}
                  </a>
                ))}
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_rgba(16,64,152,0.18)] transition-all duration-500 hover:-translate-y-0.5"
            >
              Get a Free Audit
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-7 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Graphics Layers. All rights reserved. Best
            marketing company in Pakistan.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="/privacy" className={linkCls}>
              Privacy Policy
            </a>
            <a href="/terms" className={linkCls}>
              Terms &amp; Conditions
            </a>
            <a href="/cookies" className={linkCls}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
