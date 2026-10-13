import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface Props {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  children,
  description,
  align = "center",
}: Props) {
  return (
    <Reveal
      className={`mb-16 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.32em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mb-6 text-4xl font-bold tracking-[-0.04em] md:text-6xl lg:text-7xl">
        {children}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>
      )}
    </Reveal>
  );
}
