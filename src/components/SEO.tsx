import { Helmet } from "react-helmet-async";
import { FAQS, SITE } from "../data/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MarketingAgency",
      name: SITE.name,
      alternateName: "GraphicsLayers",
      url: SITE.url,
      logo: SITE.logo,
      description:
        "Graphics Layers is a top digital marketing agency in Pakistan offering SEO, social media marketing, branding, web development, and performance marketing services.",
      telephone: SITE.phonePkHref,
      email: SITE.emails[0],
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "Kent Mall, Aziz Shaheed Road",
          addressLocality: "Sialkot",
          addressRegion: "Punjab",
          postalCode: "51410",
          addressCountry: "PK",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "87 Fields Farm Rd",
          addressLocality: "Manchester",
          postalCode: "SK14 3NU",
          addressCountry: "GB",
        },
      ],
      sameAs: [
        "https://www.facebook.com/share/1SqdbBwsFT/",
        "https://www.instagram.com/graphicslayers",
        "https://www.linkedin.com/company/graphicslayers/",
        "https://x.com/graphicslayers",
        "https://www.youtube.com/@graphicslayers",
      ],
      areaServed: ["Pakistan", "United Kingdom", "United States", "Middle East"],
      serviceType: [
        "SEO Services",
        "Social Media Marketing",
        "Paid Ads",
        "Brand Identity Design",
        "Web Development",
        "Content Creation",
        "E-commerce Development",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  /** Home page par schema (JSON-LD) dikhana hai, baqi pages par nahi. */
  home?: boolean;
}

export default function SEO({
  title = SITE.title,
  description = SITE.description,
  path = "",
  home = true,
}: SEOProps = {}) {
  const url = `${SITE.url.replace(/\/$/, "")}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="keywords" content={SITE.keywords} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={SITE.ogImage} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SITE.ogImage} />

      {home && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
