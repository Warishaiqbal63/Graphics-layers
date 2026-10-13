import { PORTFOLIO_FILTERS, type PortfolioProject } from "./portfolio";

export interface ProjectDetail {
  /** Project ka overview (agar nahi diya to auto-text banta hai) */
  description?: string;
  /** Live website ka link (optional) */
  liveUrl?: string;
}

/**
 * Yahan slug ke hisab se apne real project ki details likho.
 * Misal:
 * "shine-humanity": { description: "...", liveUrl: "https://example.com" },
 */
export const DETAILS: Record<string, ProjectDetail> = {};

const SERVICE_TAGS = new Set(["WebDevelopment", "WebsiteDevelopment", "SEO", "SEM", "SMM", "PaidAds", "Branding"]);

export const serviceLabels = (p: PortfolioProject) =>
  p.categories.map((c) => PORTFOLIO_FILTERS.find((f) => f.id === c)?.label ?? c);

export const industryTags = (p: PortfolioProject) => p.tags.filter((t) => !SERVICE_TAGS.has(t));

export function getDetail(p: PortfolioProject) {
  const custom = DETAILS[p.slug] ?? {};
  const services = serviceLabels(p);
  const description =
    custom.description ??
    `We partnered with ${p.title} to grow their digital presence through ${services
      .join(", ")
      .toLowerCase()}. Our team handled strategy, execution and ongoing optimisation so the brand could reach the right audience and turn attention into enquiries.`;
  return { ...custom, description, services, industry: industryTags(p) };
}
