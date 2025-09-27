import React, { Suspense, lazy, useEffect } from "react"
import { HeroSection } from "@/components/sections/HeroSection"
import { BenefitsSection } from "@/components/sections/BenefitsSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { LazySection } from "@/components/ui/lazy-section"

// Lazy load non-critical sections only
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
  // Prefetch below-the-fold sections as soon as the main thread is idle
  useEffect(() => {
    const prefetch = () => {
      import("@/components/sections/TestimonialsSection")
      import("@/components/sections/ComparisonSection")
      import("@/components/sections/FinalOfferSection")
      import("@/components/sections/FaqSection")
      import("@/components/sections/WhatsAppContactSection")
      import("@/components/sections/FooterSection")
    }
    if ("requestIdleCallback" in window) {
      ;(window as any).requestIdleCallback(prefetch)
    } else {
      setTimeout(prefetch, 0)
    }
  }, [])
  return (
    <div className="min-h-screen bg-background">
      {/* Critical: Always load immediately - TOP PRIORITY */}
      <HeroSection />
      
      {/* Second priority: Load immediately without lazy loading */}
      <BenefitsSection />

      <PricingSection />

      <LazySection rootMargin="1200px">
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="1200px">
        <Suspense fallback={<SectionSkeleton />}>
          <ComparisonSection />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="1200px">
        <Suspense fallback={<SectionSkeleton />}>
          <FinalOfferSection />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="1200px">
        <Suspense fallback={<SectionSkeleton />}>
          <FaqSection />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="1200px">
        <Suspense fallback={<SectionSkeleton />}>
          <WhatsAppContactSection />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="1200px">
        <Suspense fallback={<SectionSkeleton />}>
          <FooterSection />
        </Suspense>
      </LazySection>
    </div>
  );
};

export default Index;
