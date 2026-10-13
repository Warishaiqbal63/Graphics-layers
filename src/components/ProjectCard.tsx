import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "../data/portfolio";

export default function ProjectCard({ project }: { project: PortfolioProject }) {
  const href = `/portfolio/${project.slug}`;
  return (
    <motion.a
      href={href}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-foreground/10 bg-card shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition-colors duration-500 hover:border-primary/30"
    >
      <div className="relative h-64 overflow-hidden md:h-72">
        <img
          src={project.image}
          alt={project.title}
          width={600}
          height={450}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 items-center justify-between gap-4 p-6">
        <div>
          <p className="mb-2 text-xs leading-relaxed text-muted-foreground">
            {project.tags.map((t) => `#${t}`).join(" ")}
          </p>
          <h3 className="text-xl font-bold tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
        </span>
      </div>
    </motion.a>
  );
}
