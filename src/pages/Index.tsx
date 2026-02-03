import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MisionVisionSection from "@/components/MisionVisionSection";
import ServicesSection from "@/components/ServicesSection";
import InteractiveSection from "@/components/InteractiveSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MisionVisionSection />
      <ServicesSection />
      <InteractiveSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
