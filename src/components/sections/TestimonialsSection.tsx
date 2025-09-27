import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel"

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rise-red/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-12">
          {/* Enhanced Title */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mx-auto">
              O que{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse">
                nossos membros
              </span>
              <br />
              estão falando
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          {/* Enhanced Carousel */}
          <div className="py-8">
            <TestimonialsCarousel />
          </div>

          {/* Enhanced Member Count */}
          <div className="bg-gradient-card p-8 rounded-3xl border border-white/10 shadow-card max-w-md mx-auto">
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-black">
                Contagem de membros{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  3.257 Membros
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}