import { HeroSection } from "@/components/sections/HeroSection"
import { BenefitsSection } from "@/components/sections/BenefitsSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"
import { FinalOfferSection } from "@/components/sections/FinalOfferSection"
import { FaqSection } from "@/components/sections/FaqSection"
import { FooterSection } from "@/components/sections/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <ComparisonSection />
      <FinalOfferSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};

export default Index;
