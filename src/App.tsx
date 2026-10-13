import Blog from "./components/Blog";
import CaseStudies from "./components/CaseStudies";
import ClientsMarquee from "./components/ClientsMarquee";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GoogleReviews from "./components/GoogleReviews";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platforms from "./components/Platforms";
import Process from "./components/Process";
import SEO from "./components/SEO";
import Services from "./components/Services";
import SocialReels from "./components/SocialReels";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyUs from "./components/WhyUs";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import PortfolioPage from "./PortfolioPage";
import PricingPage from "./PricingPage";
import ProjectDetailPage from "./data/ProjectDetailPage";
import ContactPage from "./ContactPage";
import ServicesPage from "./ServicesPage";
import ServiceDetailPage from "./ServiceDetailPage";

export default function App() {
  // Simple path-based routing (project me router nahi hai)
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/about") return <AboutPage />;
  if (path === "/blog" || path === "/blogs") return <BlogPage />;
  if (path === "/contact") return <ContactPage />;
  if (path === "/services") return <ServicesPage />;
  if (path.startsWith("/services/")) return <ServiceDetailPage slug={path.split("/")[2]} />;
  if (path === "/pricing" || path === "/packages") return <PricingPage />;
  if (path === "/portfolio") return <PortfolioPage />;
  if (path.startsWith("/portfolio/")) return <ProjectDetailPage slug={path.split("/")[2]} />;

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <ClientsMarquee />
        <Services />
        <Process />
        <CaseStudies />
        <WhyUs />
        <GoogleReviews />
        <Platforms />
        <SocialReels />
        <FAQ />
        <Blog />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
