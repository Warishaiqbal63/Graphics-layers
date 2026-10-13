import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Props { title: string; description?: string; crumb: string }

export default function PageHeader({ title, description, crumb }: Props) {
  return (
    <header className="section-padding relative overflow-hidden pb-16 pt-40 text-center md:pb-24 md:pt-52">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 animate-float rounded-full bg-primary/20 blur-[120px] md:h-[28rem] md:w-[28rem]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-3xl"
      >
        <h1 className="heading-lg mb-5">
          Our <span className="text-gradient">{title}</span>
        </h1>
        {description && <p className="body-md mx-auto mb-8 max-w-2xl text-muted-foreground">{description}</p>}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <li><a href="/" className="transition-colors hover:text-primary">Home</a></li>
            <li aria-hidden><ChevronRight className="h-3.5 w-3.5 text-primary" /></li>
            <li aria-current="page" className="font-semibold text-foreground">{crumb}</li>
          </ol>
        </nav>
      </motion.div>
    </header>
  );
}
