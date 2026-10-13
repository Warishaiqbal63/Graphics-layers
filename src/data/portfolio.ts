export type CategoryId = "seo" | "performance" | "smm" | "web" | "graphic";
export type FilterId = CategoryId | "all";

export interface PortfolioProject {
  slug: string;
  title: string;
  image: string;
  tags: string[];
  categories: CategoryId[];
}

export const PORTFOLIO_FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "seo", label: "Search Engine Optimization" },
  { id: "performance", label: "Performance Marketing" },
  { id: "smm", label: "Social Media Marketing" },
  { id: "web", label: "Website Development" },
  { id: "graphic", label: "Graphic Designing" },
];

const img = (f: string) => `https://kdmagency.com/uploads/kdm/${f}.webp`;

export const PROJECTS: PortfolioProject[] = [
  { slug: "shine-humanity", title: "Shine Humanity", image: img("7PUKKwb9NRY2x02vhYzhAGHV8BTInHDp0CVygM8j"), tags: ["WebDevelopment", "SEO", "NGO"], categories: ["seo", "web"] },
  { slug: "ziewnic", title: "Ziewnic", image: img("RwfODkSQToSBI1aG3BY5RGLyDFZ24TAabXPcdBNh"), tags: ["SMM", "Branding", "Energy", "Manufacturer"], categories: ["performance", "smm", "graphic"] },
  { slug: "springfield-medical-clinic", title: "Springfield Medical Clinic", image: img("p6kYs7ohGqBQThObjbi6eSTrmlIsR8KerWMQYfFy"), tags: ["SMM", "SEM", "WebDevelopment", "Healthcare", "MedicalClinic"], categories: ["seo", "smm", "web"] },
  { slug: "sara-electric", title: "Sara Electric", image: img("2wqGC3QELYeA2g32bWGBjGIIMnbriRYksjCBXT7v"), tags: ["SMM", "SEO", "PaidAds", "Branding", "Energy", "Manufacturer"], categories: ["seo", "smm", "web", "graphic"] },
  { slug: "dynamic-worldwide-logistics-group-dwwlg", title: "Dynamic Worldwide Logistics Group (DWWLG)", image: img("It6ahpjlPTedpkmP0DJCT4Kcq39Fz2kjzlxvVX5F"), tags: ["WebDevelopment", "SEO", "DWWLG", "Logistic"], categories: ["seo", "web"] },
  { slug: "nowpdp", title: "NowPDP", image: img("mvQG7t1ztxE6gNCrcHehL0ICeqFKNDrKhqEnIZhX"), tags: ["WebsiteDevelopment"], categories: ["web"] },
  { slug: "the-academy", title: "The Academy", image: img("cdmfax0WWW3wG4YaHxfC51bPvAQzk6xAlkjOUN47"), tags: ["WebsiteDevelopment", "Education"], categories: ["web"] },
  { slug: "comprehensive-vein-care-cvc", title: "Comprehensive Vein Care (CVC)", image: img("Qzec6nwJ2nTiGsmSVb89GhWs6p8ClUzBcL8UD9tS"), tags: ["WebsiteDevelopment", "SEO", "SMM", "Healthcare", "Medicalclinic"], categories: ["seo", "performance", "smm", "web"] },
];