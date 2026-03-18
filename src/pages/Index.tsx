import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HighlightsSection from "@/components/HighlightsSection";
import ForWhoSection from "@/components/ForWhoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StoriesSection from "@/components/StoriesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  const goToApp = () => {
    window.location.href = "https://storiera.run.place/";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenModal={goToApp} />
      <Hero onOpenModal={goToApp} />
      <HighlightsSection />
      <ForWhoSection />
      <StoriesSection onOpenModal={goToApp} />
      <HowItWorksSection />
      <PricingSection onOpenModal={goToApp} />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection onOpenModal={goToApp} />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
