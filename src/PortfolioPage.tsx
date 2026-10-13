import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";
import PortfolioGrid from "./components/PortfolioGrid";
import SEO from "./components/SEO";
import WhatsAppButton from "./components/WhatsAppButton";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Portfolio | Branding, SEO & Social Media Projects — Graphics Layers"
        description="See how we've helped businesses grow with branding, web development, SEO, and social media marketing. Browse our portfolio and start your success story with us."
        path="/portfolio"
        home={false}
      />
      <Navbar />
      <main>
        <PageHeader
          title="Portfolio"
          crumb="Portfolio"
          description="Branding, web, SEO and social media projects we've delivered for growing businesses."
        />
        <PortfolioGrid />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
