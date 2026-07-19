import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyUnik from "@/components/sections/WhyUnik";
import CookiesGrid from "@/components/sections/CookiesGrid";
import SavoirFaire from "@/components/sections/SavoirFaire";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import TikTokGrid from "@/components/sections/TikTokGrid";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
      {/* Global UI Elements */}
      <CustomCursor />
      <ScrollProgress />
      <WhatsAppFloat />

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main id="main-content">
        <Hero />
        <WhyUnik />
        <CookiesGrid />
        <SavoirFaire />
        <Testimonials />
        <Stats />
        <TikTokGrid />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
