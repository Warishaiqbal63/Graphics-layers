export const SITE = {
  name: "Graphics Layers",
  url: "https://graphicslayers.com/",
  title: "Digital Marketing Agency in Sialkot | Graphics Layers",
  description:
    "Graphics Layers is a Sialkot-based digital marketing agency offering SEO, social media, paid ads, branding, and web development for local and global brands.",
  keywords:
    "best digital marketing agency Pakistan, digital marketing agency Lahore, digital marketing agency Karachi, SEO agency Pakistan, SEO services Lahore, SEO services Karachi, web development company Pakistan, social media marketing Pakistan, SMM Pakistan, branding agency Pakistan",
  ogImage: "https://graphicslayers.com/images/general/hero-bg.jpg",
  logo: "/images/branding/graphics-layers-logo.png",
  phonePk: "+92 314 2559167",
  phonePkHref: "+923142559167",
  phoneUk: "+44 0000 000000",
  phoneUkHref: "+440000000000",
  emails: ["info@graphicslayers.com"],
  whatsapp:
    "https://wa.me/923142559167?text=Hi%20Graphics%20Layers%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  reviewsUrl: "https://maps.app.goo.gl/6wNEqefnd1krpL7VA",
  instagramUrl: "https://www.instagram.com/graphicslayers/",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export interface Service {
  title: string;
  href: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
}

export const SERVICES: Service[] = [
  {
    title: "SEO Services",
    href: "/services/search-engine-optimization",
    image: "https://kdmagency.com/uploads/kdm/vgGU9b7lq6KRkE5bzuSnuBhQsBKAYuOMHzv6ZsjM.png",
    alt: "SEO services by digital marketing agency in Pakistan",
    description:
      "Rank higher on Google in Lahore, Karachi, Islamabad, and across Pakistan with technical, on-page, content, and local SEO built around real search intent.",
    tags: ["Technical SEO", "Local SEO", "Content Strategy", "On-Page SEO"],
  },
  {
    title: "Paid Ads and Performance Marketing",
    href: "/services/performance-marketing",
    image: "https://kdmagency.com/uploads/kdm/9dTJlviAaRwiE2zVObEimaue2FOc1YjHlazKOIo0.jpg",
    alt: "Digital marketing and advertising services in Pakistan",
    description:
      "Paid social, Google Ads, and full-funnel campaigns run by a digital marketing agency that treats your budget like its own, with every campaign tied to leads, ROAS, or revenue.",
    tags: ["Google Ads", "Paid Social", "Performance Marketing", "Lead Generation"],
  },
  {
    title: "Social Media Marketing",
    href: "/services/social-media-management",
    image: "https://kdmagency.com/uploads/kdm/mSvwpJZOwoWd7CevkN6Cc8c8mP7R2gO6aDWMJjU9.png",
    alt: "Social media marketing agency in Pakistan",
    description:
      "Content, community, and campaigns that turn followers into customers across Pakistan's most active platforms, with strategy and paid social tied back to business goals.",
    tags: ["Content Strategy", "Community Management", "Paid Social", "Reels & Ads"],
  },
  {
    title: "Web and Ecommerce Development",
    href: "/services/website-development",
    image: "https://kdmagency.com/uploads/kdm/hYMqZzuEhnW9emInmnnvKE7N3BLnK05cbWFGaC1L.webp",
    alt: "Web development company in Pakistan — Graphics Layers",
    description:
      "Fast, mobile-first websites and Shopify or WordPress stores built to convert, with local payment gateways, shipping logistics, and Pakistani shoppers in mind.",
    tags: ["Website Development", "Shopify Stores", "WordPress", "Landing Pages"],
  },
  {
    title: "Graphic Design & Branding",
    href: "/services/graphic-designing",
    image: "https://kdmagency.com/uploads/kdm/SjMcSzL6ZeP4wuAWzhsLAV6qigpMVLoVUi6p3CrM.webp",
    alt: "Brand identity and graphic design services by Graphics Layers",
    description:
      "Build a memorable, consistent brand with visual identity, social content, and campaign creative designed for the people you want to reach.",
    tags: ["Brand Identity", "Social Creatives", "Ad Design", "Print Design"],
  },
];

export const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "3x", label: "Avg. ROI Growth" },
  { value: "5+", label: "Years Experience" },
];

export const CLIENT_ROWS: { name: string; file: string }[][] = [
  [
    { name: "Doh Ghaar", file: "doh-ghaar.jpeg" },
    { name: "HighLine Industries", file: "highline-industries.jpeg" },
    { name: "IBH Apparel", file: "ibh-apparel.jpeg" },
    { name: "IFN", file: "ifn.jpeg" },
    { name: "StepStone", file: "stepstone-education.png" },
    { name: "Viprex Wears", file: "viprex-wears.png" },
    { name: "Nature Expedition", file: "nature-expedition.png" },
  ],
  [
    { name: "Mufassa Motors", file: "mufassa-motors.png" },
    { name: "Viprex Enterprises", file: "viprex-enterprises.png" },
    { name: "Mystere Beaute", file: "mystere-beaute.png" },
    { name: "Lumina Clinic", file: "lumina-clinic.jpeg" },
    { name: "M18 Roof Top", file: "m18-roof-top.jpeg" },
    { name: "Skinsation", file: "skinsation.jpeg" },
    { name: "TinyWorld", file: "tinyworld.jpeg" },
  ],
  [
    { name: "Win Wears", file: "win-wears.jpeg" },
    { name: "AA Dental Complex", file: "AA-Dental-Complex.png" },
    { name: "Allpoints Unlimited", file: "Allpoints-unlimited.png" },
    { name: "Kashmir Zari House", file: "Kashmir-zari-house.png" },
    { name: "Sial Housing", file: "Sial-housing.png" },
    { name: "Sialkot Trade Center", file: "Sialkot-trade-center.png" },
    { name: "T.intl", file: "T.intl.png" },
    { name: "Vertigo International", file: "Vertigo-international.png" },
  ],
];

export const PROCESS = [
  {
    step: "01",
    icon: "search",
    title: "Discover",
    text: "We deep-dive into your brand, audience, competitors, and market position to uncover growth opportunities.",
  },
  {
    step: "02",
    icon: "target",
    title: "Strategy",
    text: "We craft a data-backed roadmap aligned to your KPIs — from channel selection to content pillars.",
  },
  {
    step: "03",
    icon: "rocket",
    title: "Execute",
    text: "Our team deploys campaigns, creates assets, and optimizes in real-time for maximum performance.",
  },
  {
    step: "04",
    icon: "trending",
    title: "Optimize",
    text: "We refine every funnel touchpoint and turn insights into faster wins and better efficiency.",
  },
  {
    step: "05",
    icon: "sparkles",
    title: "Scale",
    text: "Continuous optimization, transparent reporting, and strategic scaling to multiply your returns.",
  },
] as const;

export const CASE_STUDIES = [
  {
    title: "Nexon Botanics",
    tag: "Website Design & SEO",
    image: "/images/case-studies/Nexon-botanics-website-casestudy.webp",
    alt: "Nexon Botanics — Website Design & SEO case study by performance marketing agency Pakistan",
    text: "Conversion-focused website design, technical SEO foundations, and ongoing maintenance for a premium botanical skincare brand.",
    metric: "2.6%",
    metricLabel: "increase in organic search traffic",
  },
  {
    title: "Vertigo International",
    tag: "Website, Social Media & Paid Advertising",
    image: "/images/case-studies/Vertigo-casestudy.webp",
    alt: "Vertigo International — Website, Social Media & Paid Advertising case study by performance marketing agency Pakistan",
    text: "Conversion-focused website design, social growth, and targeted paid campaigns aligned around one consistent brand message.",
    metric: "Growth",
    metricLabel: "across connected digital channels",
  },
  {
    title: "Skinsation",
    tag: "Social Media Marketing",
    image: "/images/case-studies/skinsation-casestudy.webp",
    alt: "Skinsation — Social Media Marketing case study by performance marketing agency Pakistan",
    text: "Platform-specific content strategy built around audience discovery, real intent signals, and growth across Instagram, Facebook, and TikTok.",
    metric: "222.7K",
    metricLabel: "Instagram views in 1 month",
  },
];

export const WHY_US = [
  {
    icon: "chart",
    title: "One Team, Full Funnel",
    text: "SEO, ads, social, and web development work together instead of being outsourced to five different vendors.",
  },
  {
    icon: "award",
    title: "Local Market Knowledge",
    text: "We understand how Pakistani consumers search, shop, and decide, while helping local brands reach international customers.",
  },
  {
    icon: "shield",
    title: "Transparent Reporting",
    text: "You see the same numbers we do every month, from qualified traffic to cost per lead, ROAS, and revenue.",
  },
  {
    icon: "zap",
    title: "Built to Scale",
    text: "From a first website to a multi-channel growth engine, our work grows with your business.",
  },
  {
    icon: "globe",
    title: "Pakistan & Beyond",
    text: "We serve businesses in Sialkot, Lahore, Karachi, Islamabad, Rawalpindi, across Pakistan, and internationally.",
  },
  {
    icon: "users",
    title: "Flexible Engagement",
    text: "Choose project-based or retainer support that fits your budget, stage, and growth goals.",
  },
] as const;

export const PLATFORMS = [
  {
    name: "Clutch",
    href: "https://clutch.co/profile/graphics-layers",
    image: "/images/badges/Top Clutch Seo Company Arts Entertainment Music Pakistan.png",
  },
  {
    name: "DesignRush",
    href: "https://www.designrush.com/agency/profile/graphics-layers",
    image: "/images/badges/design-rush-badge.jpg",
  },
  {
    name: "Sortlist",
    href: "https://www.sortlist.com/agency/graphics-layers",
    image: "/images/badges/sortlist-badge.jpg",
  },
  {
    name: "TechBehemoths",
    href: "https://techbehemoths.com/company/graphics-layers",
    image: "/images/badges/tech-behemonth-badge.png",
  },
];

export const REEL_COLUMNS: string[][] = [
  ["DVgFFMCCN2g", "DVPFhMLiJRR", "DaP-8zeqEU5", "DbTJJKQKdkl", "DOyWSHpjc9s"],
  ["DXMVr_YCGN7", "Dcv-vLpt1nX", "DcTJQs1K7Yc", "DdrNsm1IHT5", "DWl5_FZjEY_"],
  ["DdRUMD5oboP", "Dbf7MCJtfC9", "DbQXOvvKFkf", "DOqjQSgDVIn"],
];

export const REELS_MOBILE = ["DVgFFMCCN2g", "DXMVr_YCGN7", "DdRUMD5oboP", "DVPFhMLiJRR"];

export const FAQS = [
  {
    q: "What type of digital marketing agency is Graphics Layers?",
    a: "Graphics Layers is a full-service digital marketing agency with HQ in the United Kingdom, offering SEO, social media marketing, paid advertising, content strategy, and web development under one roof. Whether you need a single service like SEO or a complete digital marketing strategy, we build a plan around what your business actually needs.",
  },
  {
    q: "Do you only work with large businesses, or do you help small businesses too?",
    a: "Our Pakistani branch works with businesses of every size, from local SMEs in Lahore, Karachi, Islamabad, and Rawalpindi to larger, established brands across Pakistan. Our strategies are built around your budget and goals, not a fixed package that assumes you're a certain size.",
  },
  {
    q: "What kind of ROI can I expect from SEO and digital marketing services?",
    a: "ROI depends on your industry, competition, and starting point, so we won't promise a specific number upfront; anyone who does is likely overselling. What we can promise is transparent monthly reporting that ties your SEO services and digital marketing activity directly to real outcomes: traffic, leads, and conversions, not just rankings or reach.",
  },
  {
    q: "Do you offer SEO packages for businesses in Pakistan?",
    a: "Yes, we offer SEO services in Pakistan tailored to your business, whether you need local SEO in a specific city like Lahore or Karachi, or a national SEO strategy for an e-commerce or service-based brand. Every SEO package starts with a free audit so you know exactly what you're paying for before committing.",
  },
  {
    q: "Can you help create viral content for TikTok and Instagram?",
    a: "Yes, short-form content strategy for TikTok and Instagram is one of our core services. We build content around what actually gets shared and saved, not just posted, and pair it with paid social where it makes sense to accelerate reach.",
  },
];

export const BLOG_POSTS = [
  {
    title: "Content Creation Strategies That Drive 10x Engagement",
    tag: "Social Media Marketing",
    date: "Oct 2024",
    image: "https://kdmagency.com/uploads/kdm/f50Ul2XgcyU8UXPBfwMVj0Vd9VARflydC4xX96di.jpg",
    text: "Learn how top brands craft content that captures attention and drives conversions in competitive markets across Pakistan.",
  },
  {
    title: "Paid Ads for Small Businesses: Maximize ROI on Any Budget",
    tag: "Paid Ads & Performance Marketing",
    date: "Oct 2024",
    image: "https://kdmagency.com/uploads/kdm/vWQzlqKGxeWpKHXfmozmWofNGW8W6qtY9xnqLRMb.webp",
    text: "Discover proven PPC strategies from Pakistan's best performance marketing agency to compete with enterprise budgets.",
  },
  {
    title: "Branding in the Digital Age: Why Identity Matters More Than Ever",
    tag: "Digital Marketing Strategy",
    date: "Sep 2025",
    image: "https://kdmagency.com/uploads/kdm/osATBwbBdGDtYMDIASSZ8x3M6sIuf4feJiTf48LT.webp",
    text: "Your brand is more than a logo. Learn why strategic brand identity is the foundation of digital growth.",
  },
];

export const FOOTER_SERVICES = SERVICES.map((s) => ({ label: s.title, href: s.href }));

export const FOOTER_COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1SqdbBwsFT/",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/graphicslayers",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/graphicslayers/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/graphicslayers",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@graphicslayers",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];
