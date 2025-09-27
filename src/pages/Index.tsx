import React, { Suspense, lazy } from "react"
import { HeroSection } from "@/components/sections/HeroSection"
import { LazySection } from "@/components/ui/lazy-section"

// Lazy load non-critical sections
const BenefitsSection = lazy(() => import("@/components/sections/BenefitsSection").then(m => ({ default: m.BenefitsSection })))
const PricingSection = lazy(() => import("@/components/sections/PricingSection").then(m => ({ default: m.PricingSection })))
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })))
const ComparisonSection = lazy(() => import("@/components/sections/ComparisonSection").then(m => ({ default: m.ComparisonSection })))
const FinalOfferSection = lazy(() => import("@/components/sections/FinalOfferSection").then(m => ({ default: m.FinalOfferSection })))
const FaqSection = lazy(() => import("@/components/sections/FaqSection").then(m => ({ default: m.FaqSection })))
const WhatsAppContactSection = lazy(() => import("@/components/sections/WhatsAppContactSection").then(m => ({ default: m.WhatsAppContactSection })))
const FooterSection = lazy(() => import("@/components/sections/FooterSection").then(m => ({ default: m.FooterSection })))

// Loading fallback component
const SectionSkeleton = () => (
  <div className="py-20 bg-gradient-secondary">
    <div className="container mx-auto px-4">
      <div className="animate-pulse space-y-8">
        <div className="h-12 bg-gradient-glow/20 rounded-lg w-3/4 mx-auto"></div>
        <div className="h-6 bg-gradient-glow/10 rounded w-1/2 mx-auto"></div>
        <div className="grid gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-20 bg-gradient-glow/10 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Critical: Always load immediately */}
      <HeroSection />
      
      {/* Lazy load with intersection observer */}
      <LazySection rootMargin="200px">
        <Suspense fallback={<SectionSkeleton />}>
          <BenefitsSection />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionSkeleton />}>
          <PricingSection />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionSkeleton />}>
          <ComparisonSection />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionSkeleton />}>
          <FinalOfferSection />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionSkeleton />}>
          <FaqSection />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionSkeleton />}>
          <WhatsAppContactSection />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionSkeleton />}>
          <FooterSection />
        </Suspense>
      </LazySection>
    </div>
  );
};

export default Index;
