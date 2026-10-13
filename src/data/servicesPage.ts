/** Services use local project assets so the pages work without third-party image URLs. */
export const SERVICE_CARDS = [
  { title: "Search Engine Optimization", href: "/services/search-engine-optimization", text: "Rank higher on Google and attract the right visitors with technical, local, and content-led SEO.", image: "https://kdmagency.com/uploads/kdm/vgGU9b7lq6KRkE5bzuSnuBhQsBKAYuOMHzv6ZsjM.png", tint: "#104098" },
  { title: "Social Media Management", href: "/services/social-media-management", text: "Build an active community with thoughtful content, consistent publishing, and responsive management.", image: "https://kdmagency.com/uploads/kdm/mSvwpJZOwoWd7CevkN6Cc8c8mP7R2gO6aDWMJjU9.png", tint: "#0F7FA6" },
  { title: "Performance Marketing", href: "/services/performance-marketing", text: "Turn ad spend into measurable leads and sales with campaigns built to improve over time.", image: "https://kdmagency.com/uploads/kdm/9dTJlviAaRwiE2zVObEimaue2FOc1YjHlazKOIo0.jpg", tint: "#0B5FA5" },
  { title: "Website Development", href: "/services/website-development", text: "Create a fast, mobile-first website or store that makes it easy for visitors to take action.", image: "https://kdmagency.com/uploads/kdm/hYMqZzuEhnW9emInmnnvKE7N3BLnK05cbWFGaC1L.webp", tint: "#104098" },
  { title: "Graphic Design & Branding", href: "/services/graphic-designing", text: "Create a recognizable brand system and clear, consistent creative for every customer touchpoint.", image: "https://kdmagency.com/uploads/kdm/SjMcSzL6ZeP4wuAWzhsLAV6qigpMVLoVUi6p3CrM.webp", tint: "#0F7FA6" },
];

export const SERVICE_DETAILS: Record<string, {
  eyebrow: string;
  intro: string;
  outcomes: string[];
  deliverables: string[];
  process: { title: string; text: string }[];
}> = {
  "search-engine-optimization": {
    eyebrow: "Be easier to find",
    intro: "We build practical SEO programs around how your customers search — from technical foundations and useful content to local visibility across Pakistan.",
    outcomes: ["More qualified organic traffic", "Stronger local search visibility", "Clear technical priorities", "Reporting tied to leads and growth"],
    deliverables: ["Technical SEO audit", "Keyword and competitor research", "On-page and content optimization", "Local SEO and monthly reporting"],
    process: [
      { title: "Audit & opportunity", text: "We review your site, search footprint, competitors, and the pages closest to converting." },
      { title: "Prioritized roadmap", text: "You get a clear plan of technical fixes, content improvements, and local search actions." },
      { title: "Improve & measure", text: "We implement, track rankings and traffic, and keep refining the work against business goals." },
    ],
  },
  "social-media-management": {
    eyebrow: "Build a community that cares",
    intro: "Make your brand feel consistent and present on the channels your audience uses. We combine a clear content direction with reliable publishing and community management.",
    outcomes: ["A recognizable brand voice", "Consistent, quality publishing", "More meaningful engagement", "Content shaped by performance"],
    deliverables: ["Channel and audience strategy", "Monthly content calendar", "Post and short-form creative", "Publishing, moderation, and insights"],
    process: [
      { title: "Understand the brand", text: "We learn your audience, voice, offers, and what success on social should actually mean." },
      { title: "Plan & create", text: "We map content themes and prepare platform-ready posts, videos, and campaign ideas." },
      { title: "Publish & learn", text: "We manage the schedule, engage with your audience, and use insights to improve the next cycle." },
    ],
  },
  "performance-marketing": {
    eyebrow: "Make every campaign accountable",
    intro: "Reach the right people with well-structured paid campaigns across search and social. We connect targeting, creative, and conversion tracking so spend can be optimized with confidence.",
    outcomes: ["Clearer campaign performance", "More qualified leads or sales", "Smarter budget allocation", "Ongoing creative and audience tests"],
    deliverables: ["Account and tracking audit", "Campaign and audience setup", "Ad creative direction", "Optimization and performance reporting"],
    process: [
      { title: "Set the target", text: "We agree on your audience, conversion goal, budget, and the numbers that define success." },
      { title: "Launch with tracking", text: "Campaigns are structured around the customer journey, with conversion measurement checked before launch." },
      { title: "Test & optimize", text: "We monitor results, test audiences and creative, and move budget toward the best opportunities." },
    ],
  },
  "website-development": {
    eyebrow: "Turn visits into action",
    intro: "From a focused landing page to a full ecommerce experience, we create fast, responsive websites that make your offer easy to understand and act on.",
    outcomes: ["A stronger first impression", "A smooth mobile experience", "Clear paths to contact or purchase", "A flexible foundation for growth"],
    deliverables: ["Website planning and page structure", "Responsive design and development", "SEO and performance foundations", "Launch support and handover"],
    process: [
      { title: "Plan the experience", text: "We map your audience, content, and key actions into a straightforward site structure." },
      { title: "Design & build", text: "We create responsive pages, integrate the agreed features, and keep the experience clear on every screen." },
      { title: "Test & launch", text: "We check essential journeys, performance, and responsive behavior before launch and handover." },
    ],
  },
  "graphic-designing": {
    eyebrow: "Look consistent everywhere",
    intro: "Give your business a visual identity people can recognize. We design the core brand system and adaptable creative for campaigns, social channels, and everyday communication.",
    outcomes: ["A more recognizable identity", "Consistent visual communication", "Creative that fits each platform", "Reusable brand-ready assets"],
    deliverables: ["Logo and identity refinement", "Color and typography direction", "Social media design system", "Campaign and advertising creative"],
    process: [
      { title: "Discover the direction", text: "We align on your audience, positioning, references, and the practical places the design will be used." },
      { title: "Design the system", text: "We develop visual directions and refine the chosen route into reusable brand assets." },
      { title: "Prepare for use", text: "We deliver platform-ready creative and straightforward files your team can use consistently." },
    ],
  },
};

type QA = [question: string, answer: string];

export const FAQ_GROUPS: { label: string; items: QA[] }[] = [
  {
    label: "Getting Started",
    items: [
      ["What digital marketing services does Graphics Layers offer?", "Graphics Layers offers Search Engine Optimization, Social Media Management, Performance Marketing, Website Development, and Graphic Design & Branding, all under one roof."],
      ["Can I hire Graphics Layers for multiple services at once?", "Yes. We offer integrated packages where SEO, social media, paid ads, and web development work together for stronger, faster results."],
      ["Do you work with businesses of all sizes?", "Absolutely. We work with startups, SMEs, and established brands, customizing our strategies to match your goals and budget."],
      ["How do I get started with Graphics Layers?", "Simply reach out through our contact form or WhatsApp. We'll schedule a free consultation to understand your needs and recommend the right services."],
      ["Do you offer customized service packages?", "Yes. We understand that every business is different, so we tailor our service packages based on your specific industry, objectives, and budget."],
      ["How do you measure the success of your digital marketing services?", "We track performance through KPIs such as organic traffic, lead generation, conversion rates, ad ROI, and engagement metrics shared with you through regular reports."],
    ],
  },
  {
    label: "Search Engine Optimization",
    items: [
      ["Do you offer local SEO for Karachi-based businesses?", "Yes. We help local businesses rank in Google's local pack and map results, targeting customers in their specific city or area."],
      ["What tools do you use for SEO audits and keyword research?", "We use industry-leading tools like SEMrush, Ahrefs, and Google Search Console to identify opportunities and track performance."],
      ["Is SEO a one-time service or an ongoing process?", "SEO is an ongoing process. Search engines constantly update their algorithms, so continuous optimization is necessary to maintain and improve rankings."],
    ],
  },
  {
    label: "Social Media Management",
    items: [
      ["Will you manage my existing social media accounts or create new ones?", "We can do both: take over your existing accounts or set up new ones with a strong brand presence from scratch."],
      ["Do you run paid promotions alongside organic social media management?", "Yes. We can combine organic content strategy with paid social campaigns for maximum reach and faster growth."],
      ["How do you handle negative comments or a social media crisis?", "We monitor your accounts actively and respond professionally to protect your brand reputation at all times."],
    ],
  },
  {
    label: "Performance Marketing",
    items: [
      ["What is performance marketing and how is it different from traditional advertising?", "Performance marketing means you only pay for measurable results (clicks, leads, or conversions), unlike traditional ads where you pay upfront regardless of outcome."],
      ["Do you handle the full ad campaign setup or just management?", "We handle everything from audience research, ad creatives, campaign setup, to ongoing optimization and reporting."],
      ["Can you retarget people who already visited my website?", "Yes. We set up retargeting campaigns to re-engage visitors who didn't convert on their first visit."],
    ],
  },
  {
    label: "Website Development",
    items: [
      ["Which technologies do you use for website development?", "We work with Laravel, WordPress, and modern frontend frameworks depending on your project requirements and scale."],
      ["How long does it take to develop a website?", "A standard website typically takes 2 to 6 weeks. Timelines vary based on complexity, features, and client feedback rounds."],
      ["Do you build SEO-friendly websites from the start?", "Yes. We follow SEO best practices during development: clean code structure, fast load times, proper heading hierarchy, and mobile responsiveness."],
    ],
  },
  {
    label: "Graphic Designing",
    items: [
      ["How many revision rounds do you offer for design projects?", "We offer multiple revision rounds to ensure the final design fully aligns with your vision and brand identity."],
      ["Can you design graphics that match my existing brand colors and style?", "Absolutely. We study your existing brand assets before designing to ensure everything stays visually consistent."],
      ["Do you also design assets for paid ad campaigns?", "Yes. We create platform-optimized ad creatives for Google, Facebook, Instagram, and other channels."],
    ],
  },
];

export const SERVICE_FAQS: Record<string, [string, string][]> = {
  "search-engine-optimization": [["How long does SEO take to show results?", "Most businesses start noticing results within 3–6 months, depending on competition and site condition."], ["Can you guarantee #1 rankings?", "No one honestly can, but our strategies maximize visibility and authority in your industry."], ["Do you offer local SEO?", "Yes — we help you rank in Google's local pack and maps for your city or area."]],
  "social-media-management": [["Which platforms do you manage?", "Facebook, Instagram, LinkedIn, TikTok, X and more, depending on your goals."], ["Do you create the content too?", "Yes — content creation, design, copywriting, scheduling and analysis."], ["Can social media bring leads?", "With a strategic approach, yes: it builds trust and converts followers into customers."]],
  "performance-marketing": [["Which platforms do you run ads on?", "Google Ads, Facebook, Instagram, LinkedIn, TikTok and YouTube."], ["How do you avoid wasted spend?", "Precise targeting, A/B testing and conversion tracking."], ["Do you share reports?", "Yes — spend, conversions, CTR, CPC and ROI."]],
  "website-development": [["How long does a website take?", "A standard website typically takes 2–6 weeks, depending on features and feedback rounds."], ["Can you build online stores?", "Yes — secure, scalable, conversion-focused ecommerce sites."], ["Do you offer post-launch support?", "Yes — maintenance, updates, bug fixes and performance tuning."]],
  "graphic-designing": [["Which file formats do you deliver?", "AI, PSD, PNG, JPEG and PDF, depending on your needs."], ["Can you match my brand colors?", "Yes — we study your existing assets so everything stays consistent."], ["Do you design for print too?", "Yes — digital and print, including brochures and packaging."]],
};
