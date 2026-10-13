export interface Plan { name: string; price: string; period: string; features: string[] }
export interface PricingGroup { id: string; label: string; plans: Plan[] }

const SOCIAL = "Facebook | Instagram | LinkedIn | Pinterest | Twitter | YouTube | TikTok";
const WEB_NOTE = ["SMS & Payment Gateway Integration Cost Not Included", "All Prices Are Exclusive Of Taxes"];

/** Prices/features yahan se edit karo. */
export const PRICING: PricingGroup[] = [
  {
    id: "seo",
    label: "Search Engine Optimization",
    plans: [
      { name: "Growth", price: "Rs. 29,000", period: "/month", features: ["Keyword Research (10 Keywords)", "Website & Technical SEO Audit", "On Page SEO (Up to 25 pages)", "Setup of Google Analytics, Tag Manager & Search Console", "Off Page SEO (Link Building on 50 Relevant Websites)", "Blogs Submission (1 Blog, up to 1000 words total)", "Local Search Optimization", "Google My Business Setup & Image Upload (up to 5 images)", "Customer Review Support (Up to 03)", "Basic Competitor Overview", "Monthly Report with insights"] },
      { name: "Booster", price: "Rs. 44,000", period: "/month", features: ["Keyword Research (25 Keywords)", "In-Depth Technical + Content SEO Audit", "On Page SEO (Up to 50 pages)", "Setup of Google Analytics, Tag Manager & Search Console", "Off Page SEO (Link Building on 75 Relevant Websites)", "Blogs Submission (2 Blogs, up to 2000 words total)", "Local Search Optimization", "Google My Business Setup & Image Upload (up to 10 images)", "Customer Review Support (Up to 05)", "Basic Competitor Overview", "Monthly Report with Recommendations"] },
    ],
  },
  {
    id: "smm",
    label: "Social Media Management",
    plans: [
      { name: "Growth", price: "Rs. 45,000", period: "/month", features: ["Social Media Audit", `Select 4 (${SOCIAL})`, "Strategy Development", "Up to 12 Monthly Creative Image Posts", "Up to 02 Monthly 2D Animated/Video Posts", "Cover Image Design", "Content Writing", "Community Management (Inbox Monitoring)", "Social Media Analytics & Reporting"] },
      { name: "Booster", price: "Rs. 75,000", period: "/month", features: ["Social Media Audit", `All Platforms Included (${SOCIAL})`, "Strategy Development", "Up to 16 Monthly Creative Image Posts", "Up to 04 Monthly 2D Animated/Video Posts", "Cover Image Design", "Content Writing", "Community Management (Comment / Inbox Monitoring)", "Social Media Analytics & Reporting"] },
    ],
  },
  {
    id: "performance",
    label: "Performance Marketing",
    plans: [
      { name: "Growth", price: "Rs. 30,000", period: "/month", features: ["6 Ad Creatives (Static or Carousel)", "Platforms Included (Facebook | Instagram)", "2 Basic GIF Ads", "Ad Copywriting for all Creatives", "Graphic Design (Meta Ads Specs)", "Audience Targeting Strategy", "Campaign Structure & Launch (One-time)", "Meta Pixel Setup (If Needed)", "Ad Account Access Assistance"] },
      { name: "Booster", price: "Rs. 50,000", period: "/month", features: ["12 Ad Creatives (Static or Carousel)", "Platforms Included (Facebook | Instagram | Google Ads | TikTok)", "2 Animated Video Ads (15 Sec, 2D)", "4 Basic GIF Ads", "Copywriting & Design (All Platforms)", "Advanced Audience & Retargeting Setup", "A/B Testing For 2 Meta/Google Creatives", "Conversion Tracking (Google Tag/TikTok Pixel/Meta Pixel)", "Monthly Performance Report with key insights", "Access Setup on all Platforms"] },
    ],
  },
  {
    id: "web",
    label: "Website Development",
    plans: [
      { name: "Professional Business Website", price: "Rs. 3,500", period: "/month", features: ["Choose Your Layout From Our Various Templates", "Contact Form For Receiving Valuable Leads", "Up To 10 Website Pages", "Up To 10 Email Accounts", "5GB Hosting Storage", "No Setup Or Development Charges", "Included CMS For Managing Website"] },
      { name: "E-Commerce Website (Starter Plan)", price: "Rs. 5,500", period: "/month", features: ["Standard Application (Cloud-Based)", "Up To 100 Products", "Setup / Deployment Charges: Rs. 35,000", ...WEB_NOTE] },
      { name: "E-Commerce Website (Growth Plan)", price: "Rs. 9,500", period: "/month", features: ["Customized Design (Cloud-Based)", "Up To 500 Products", "Setup / Deployment Charges: Rs. 75,000", ...WEB_NOTE] },
      { name: "E-Commerce Website (Booster Plan)", price: "Rs. 12,000", period: "/month", features: ["Customized Design & Customized Features (Cloud-Based)", "Up To 2000 Products", "Setup / Deployment Charges: Rs. 100,000", ...WEB_NOTE] },
    ],
  },
];
