import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, ChevronRight, Eye, Search } from "lucide-react";
import { useMemo, useState } from "react";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SEO from "./components/SEO";
import WhatsAppButton from "./components/WhatsAppButton";
import { BLOG_POSTS_ALL , BlogPost } from "./data/blogPosts";

const PAGE_SIZE = 9;
const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

function PostCard({ post }: { post: BlogPost }) {
  const href = `/blog/${post.slug}`;
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition-colors duration-500 hover:border-primary/30"
    >
      <a href={href} tabIndex={-1} aria-hidden className="relative block aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          width={600}
          height={375}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <span className="absolute inset-x-0 -top-full h-full bg-primary/25 transition-all duration-500 group-hover:top-0" />
      </a>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5 text-primary" />{fmtDate(post.date)}</span>
          <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5 text-primary" />{post.views.toLocaleString()}</span>
        </div>
        <h3 className="mb-3 text-xl font-bold leading-snug tracking-[-0.02em] transition-colors duration-300 group-hover:text-primary">
          <a href={href}>{post.title}</a>
        </h3>
        <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <a
          href={href}
          aria-label={`Read about ${post.title}`}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 hover:text-primary"
        >
          Read More
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? BLOG_POSTS_ALL.filter((p) => `${p.title} ${p.excerpt}`.toLowerCase().includes(q)) : BLOG_POSTS_ALL;
  }, [query]);

  const shown = filtered.slice(0, visible);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Digital Marketing Blog | Latest News & Insights — Graphics Layers"
        description="Read expert tips, strategies, and trends in digital marketing. Learn how to grow your brand online with our insights. Stay updated."
        path="/blog"
        home={false}
      />
      <Navbar />
      <main>
        <header className="section-padding relative overflow-hidden pb-14 pt-40 text-center md:pb-20 md:pt-52">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 animate-float rounded-full bg-primary/20 blur-[120px] md:h-[28rem] md:w-[28rem]" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-3xl"
          >
            <h1 className="heading-lg mb-5">Our Recent <span className="text-gradient">Blogs</span></h1>
            <p className="body-md mx-auto mb-8 max-w-2xl text-muted-foreground">
              Expert tips, strategies and trends to help you grow your brand online.
            </p>
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <li><a href="/" className="transition-colors hover:text-primary">Home</a></li>
                <li aria-hidden><ChevronRight className="h-3.5 w-3.5 text-primary" /></li>
                <li aria-current="page" className="font-semibold text-foreground">Blogs</li>
              </ol>
            </nav>
          </motion.div>
        </header>

        <section className="section-padding pb-32 md:pb-40">
          <div className="mx-auto max-w-7xl">
            <div className="relative mx-auto mb-12 max-w-xl">
              <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setVisible(PAGE_SIZE); }}
                placeholder="Search blogs..."
                aria-label="Search blogs"
                className="w-full rounded-full border border-foreground/10 bg-foreground/5 py-3.5 pl-12 pr-5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
              />
            </div>

            <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {shown.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.45, delay: (i % PAGE_SIZE) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <PostCard post={p} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <p className="py-20 text-center text-muted-foreground">
                “{query}” se koi blog nahi mila. Doosra keyword try karo.
              </p>
            )}

            {visible < filtered.length && (
              <div className="mt-14 text-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="rounded-full border border-foreground/10 bg-foreground/5 px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                >
                  Load More ({filtered.length - visible} remaining)
                </button>
              </div>
            )}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
