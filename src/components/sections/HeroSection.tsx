import { RatoflixButton } from "@/components/ui/ratoflix-button"
import { Lock } from "lucide-react"
import { useCallback } from "react"

export function HeroSection() {
  const handleScrollToBenefits = useCallback(() => {
    const benefitsSection = document.getElementById('benefits-section');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center justify-center px-4 py-8 sm:py-12">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-rise-red/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-rise-purple/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto flex items-center justify-center relative z-10">
        {/* Enhanced Content - Centered */}
        <div className="space-y-8 lg:space-y-12 text-center max-w-4xl">
          {/* Enhanced Logo */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none">
              <span className="bg-gradient-primary bg-clip-text text-transparent">RISE</span>
              <br />
              <span className="text-foreground">COMMUNITY</span>
            </h1>
            <div className="flex gap-2 lg:gap-3 justify-center">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-3 h-3 lg:w-4 lg:h-4 bg-rise-red rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Enhanced Main Title */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Maior comunidade de{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Rateio &<br />Networking
              </span>{" "}
              do Brasil +<br />
              Fornecedores{" "}
              <span className="text-2xl lg:text-3xl inline-block animate-bounce">🔥</span>
            </h2>

            <p className="text-rise-gray text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              O maior acervo de conteúdos do Brasil localizado na palma da sua mão, já imaginou?
            </p>
          </div>

          {/* Enhanced CTA Button */}
          <div className="pt-4">
            <RatoflixButton 
              variant="hero" 
              size="xl" 
              className="gap-3 shadow-primary hover:shadow-glow transition-all duration-500 hover:scale-105"
              onClick={handleScrollToBenefits}
            >
              <Lock className="w-5 h-5" />
              Quero saber mais
            </RatoflixButton>
          </div>
        </div>
      </div>
    </section>
  )
}