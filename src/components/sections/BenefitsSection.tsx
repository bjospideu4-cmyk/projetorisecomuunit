import React from "react"
import { CheckCircle2 } from "lucide-react"
import { LazyImage } from "@/components/ui/lazy-image"
import mockupImageLeft from "@/assets/mockup-image-left.png"
import mockupImage2 from "@/assets/mockup-image-2.png"

const benefits = [
  "📂 | +20.000 Cursos via fornecedores",
  "📊 | +100k de PDF's & Ebooks",
  "📱 | Aplicativos Premium",
  "🔌 | Extensão e Plugins Premium",
  "💎 | Os melhores drives do Digital",
  "🎯 | +100k em designs prontos de diferentes nichos",
  "🎬 | +2T de arquivos de edição de Vídeo",
  "🔥 | Operação HOT com Scripts, funis e métodos",
  "📹 | +300k Videos & Ganchos Virais",
  "📚 | Source completa de Cassinos & Materiais de divulgação",
  "📋 | +100 modelos de contratos & documentos editáveis",
  "📊 | +10k de planilhas",
  "🎯 | Fornecedores & templates de dropshipping",
  "🎨 | +10k em prompts para IA",
  "📝 | Copy's & Headlines validadas",
  "⚡ | Scripts e Funis lucrativos",
  "💰 | Funis lucrativos, gamificados e validados",
  "📈 | +100k em PLR's de diferentes nichos e línguas",
  "📱 | Estratégias de Contingência BM & WhatsApp",
  "🎯 | Gerador de prova social e Notificações Fake",
  "🔧 | +100k Templates prontos editáveis de sites de diferentes nichos",
  "📧 | Módulos de Puxar Dados oficial",
  "📨 | Modelos validados de email-marketing",
  "🎮 | Jogos",
  "📱 | Figurinhas de Whp",
  "🎬 | Filmes, Séries, IPTV"
]

export function BenefitsSection() {
  return (
    <section id="benefits-section" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background effects - hidden on mobile to reduce GPU cost */}
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-rise-orange/5 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-0 left-0 w-72 h-72 bg-rise-red/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Enhanced Left side - Ultra-realistic Phone mockups */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative group">
              {/* Ultra-realistic phone mockups - Enhanced for mobile */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {/* Phone mockup 1 - Ultra-realistic */}
                <div className="w-52 h-[420px] sm:w-56 sm:h-[450px] md:w-60 md:h-[480px] transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                  {/* Ultra-realistic phone frame with extreme metallic detail */}
                  <div className="relative w-full h-full rounded-[2.5rem]" style={{
                    background: `
                      linear-gradient(145deg, 
                        #f8f8f8 0%,
                        #e1e1e1 10%, 
                        #d0d0d0 25%,
                        #bfbfbf 40%,
                        #a8a8a8 55%,
                        #959595 70%,
                        #888888 85%,
                        #7a7a7a 100%
                      )`,
                    boxShadow: `
                      0 35px 60px -15px rgba(0, 0, 0, 0.5),
                      0 15px 25px -10px rgba(0, 0, 0, 0.3),
                      0 0 0 1px rgba(255, 255, 255, 0.2),
                      inset 0 2px 4px rgba(255, 255, 255, 0.4),
                      inset 0 -2px 6px rgba(0, 0, 0, 0.15),
                      inset 2px 0 3px rgba(255, 255, 255, 0.1),
                      inset -2px 0 3px rgba(0, 0, 0, 0.1)
                    `,
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}>
                    {/* Metallic edge highlight */}
                    <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/20 ring-offset-1 ring-offset-transparent"></div>
                    
                    {/* Camera module with extreme realism */}
                    <div className="absolute top-4 left-4 w-16 h-12 rounded-2xl" style={{
                      background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                      boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.3)'
                    }}>
                      <div className="absolute top-2 left-2 w-4 h-4 rounded-full" style={{
                        background: 'radial-gradient(circle at 30% 30%, #666, #333, #000)',
                        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.5)'
                      }}></div>
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full" style={{
                        background: 'radial-gradient(circle at 30% 30%, #666, #333, #000)',
                        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.5)'
                      }}></div>
                    </div>
                    
                    {/* Phone screen with ultra-realistic bezel */}
                    <div className="absolute inset-1.5 rounded-[2rem] overflow-hidden" style={{
                      background: 'linear-gradient(145deg, #1a1a1a, #000)',
                      boxShadow: `
                        inset 0 0 0 1px rgba(255, 255, 255, 0.05),
                        inset 0 3px 8px rgba(0, 0, 0, 0.4),
                        inset 0 -1px 2px rgba(255, 255, 255, 0.05)
                      `
                    }}>
                      {/* App content */}
                      <LazyImage 
                        src="https://i.ibb.co/rfQ26p8F/mockup-left.png" 
                        alt="Rise Community Interface" 
                        className="w-full h-full object-cover rounded-lg"
                        wrapperClassName="w-full h-full"
                        priority={true}
                      />
                      {/* Ultra-realistic screen reflection layers */}
<div className="hidden md:block absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-black/25 pointer-events-none"></div>
<div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-transparent via-white/4 to-transparent pointer-events-none"></div>
<div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-2000 pointer-events-none"></div>
                    </div>
                    
                    {/* Ultra-realistic side buttons with extreme metallic detail */}
                    <div className="absolute -left-1 top-16 w-1 h-8 rounded-l-full" style={{
                      background: `
                        linear-gradient(90deg, 
                          #888 0%, 
                          #bbb 15%, 
                          #ddd 50%, 
                          #bbb 85%, 
                          #888 100%
                        )`,
                      boxShadow: `
                        inset 0 1px 3px rgba(0,0,0,0.3),
                        inset 0 -1px 2px rgba(255,255,255,0.2),
                        0 1px 2px rgba(0,0,0,0.2)
                      `
                    }}></div>
                    <div className="absolute -left-1 top-28 w-1 h-12 rounded-l-full" style={{
                      background: `
                        linear-gradient(90deg, 
                          #888 0%, 
                          #bbb 15%, 
                          #ddd 50%, 
                          #bbb 85%, 
                          #888 100%
                        )`,
                      boxShadow: `
                        inset 0 1px 3px rgba(0,0,0,0.3),
                        inset 0 -1px 2px rgba(255,255,255,0.2),
                        0 1px 2px rgba(0,0,0,0.2)
                      `
                    }}></div>
                    <div className="absolute -right-1 top-20 w-1 h-16 rounded-r-full" style={{
                      background: `
                        linear-gradient(270deg, 
                          #888 0%, 
                          #bbb 15%, 
                          #ddd 50%, 
                          #bbb 85%, 
                          #888 100%
                        )`,
                      boxShadow: `
                        inset 0 1px 3px rgba(0,0,0,0.3),
                        inset 0 -1px 2px rgba(255,255,255,0.2),
                        0 1px 2px rgba(0,0,0,0.2)
                      `
                    }}></div>
                    
                    {/* Charging port with realistic depth */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 rounded-full" style={{
                      background: 'linear-gradient(180deg, #000, #333)',
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)'
                    }}></div>
                    
                    {/* Speaker grille with metallic finish */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-0.5 h-0.5 rounded-full" style={{
                          background: 'radial-gradient(circle, #333, #000)',
                          boxShadow: 'inset 0 0.5px 1px rgba(0,0,0,0.5)'
                        }}></div>
                      ))}
                    </div>

                    {/* Additional metallic shine effects */}
                    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
                    <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
                    <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-full"></div>
                    <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-full"></div>
                  </div>
                </div>

                {/* Phone mockup 2 - Ultra-realistic */}
                <div className="w-52 h-[420px] sm:w-56 sm:h-[450px] md:w-60 md:h-[480px] transform -rotate-6 -mt-8 group-hover:-rotate-3 transition-transform duration-500">
                  {/* Ultra-realistic phone frame with extreme metallic detail */}
                  <div className="relative w-full h-full rounded-[2.5rem]" style={{
                    background: `
                      linear-gradient(145deg, 
                        #f8f8f8 0%,
                        #e1e1e1 10%, 
                        #d0d0d0 25%,
                        #bfbfbf 40%,
                        #a8a8a8 55%,
                        #959595 70%,
                        #888888 85%,
                        #7a7a7a 100%
                      )`,
                    boxShadow: `
                      0 35px 60px -15px rgba(0, 0, 0, 0.5),
                      0 15px 25px -10px rgba(0, 0, 0, 0.3),
                      0 0 0 1px rgba(255, 255, 255, 0.2),
                      inset 0 2px 4px rgba(255, 255, 255, 0.4),
                      inset 0 -2px 6px rgba(0, 0, 0, 0.15),
                      inset 2px 0 3px rgba(255, 255, 255, 0.1),
                      inset -2px 0 3px rgba(0, 0, 0, 0.1)
                    `,
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}>
                    {/* Metallic edge highlight */}
                    <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/20 ring-offset-1 ring-offset-transparent"></div>
                    
                    {/* Camera module with extreme realism */}
                    <div className="absolute top-4 left-4 w-16 h-12 rounded-2xl" style={{
                      background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                      boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.3)'
                    }}>
                      <div className="absolute top-2 left-2 w-4 h-4 rounded-full" style={{
                        background: 'radial-gradient(circle at 30% 30%, #666, #333, #000)',
                        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.5)'
                      }}></div>
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full" style={{
                        background: 'radial-gradient(circle at 30% 30%, #666, #333, #000)',
                        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.5)'
                      }}></div>
                    </div>
                    
                    {/* Phone screen with ultra-realistic bezel */}
                    <div className="absolute inset-1.5 rounded-[2rem] overflow-hidden" style={{
                      background: 'linear-gradient(145deg, #1a1a1a, #000)',
                      boxShadow: `
                        inset 0 0 0 1px rgba(255, 255, 255, 0.05),
                        inset 0 3px 8px rgba(0, 0, 0, 0.4),
                        inset 0 -1px 2px rgba(255, 255, 255, 0.05)
                      `
                    }}>
                      {/* App content */}
                      <LazyImage 
                        src="https://i.ibb.co/0R0ynCfB/mockup-right.png" 
                        alt="Rise Community Interface" 
                        className="w-full h-full object-cover rounded-lg"
                        wrapperClassName="w-full h-full"
                        priority={true}
                      />
                      {/* Ultra-realistic screen reflection layers */}
<div className="hidden md:block absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-black/25 pointer-events-none"></div>
<div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-transparent via-white/4 to-transparent pointer-events-none"></div>
<div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-2200 pointer-events-none"></div>
                    </div>
                    
                    {/* Ultra-realistic side buttons with extreme metallic detail */}
                    <div className="absolute -left-1 top-16 w-1 h-8 rounded-l-full" style={{
                      background: `
                        linear-gradient(90deg, 
                          #888 0%, 
                          #bbb 15%, 
                          #ddd 50%, 
                          #bbb 85%, 
                          #888 100%
                        )`,
                      boxShadow: `
                        inset 0 1px 3px rgba(0,0,0,0.3),
                        inset 0 -1px 2px rgba(255,255,255,0.2),
                        0 1px 2px rgba(0,0,0,0.2)
                      `
                    }}></div>
                    <div className="absolute -left-1 top-28 w-1 h-12 rounded-l-full" style={{
                      background: `
                        linear-gradient(90deg, 
                          #888 0%, 
                          #bbb 15%, 
                          #ddd 50%, 
                          #bbb 85%, 
                          #888 100%
                        )`,
                      boxShadow: `
                        inset 0 1px 3px rgba(0,0,0,0.3),
                        inset 0 -1px 2px rgba(255,255,255,0.2),
                        0 1px 2px rgba(0,0,0,0.2)
                      `
                    }}></div>
                    <div className="absolute -right-1 top-20 w-1 h-16 rounded-r-full" style={{
                      background: `
                        linear-gradient(270deg, 
                          #888 0%, 
                          #bbb 15%, 
                          #ddd 50%, 
                          #bbb 85%, 
                          #888 100%
                        )`,
                      boxShadow: `
                        inset 0 1px 3px rgba(0,0,0,0.3),
                        inset 0 -1px 2px rgba(255,255,255,0.2),
                        0 1px 2px rgba(0,0,0,0.2)
                      `
                    }}></div>
                    
                    {/* Charging port with realistic depth */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 rounded-full" style={{
                      background: 'linear-gradient(180deg, #000, #333)',
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)'
                    }}></div>
                    
                    {/* Speaker grille with metallic finish */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-0.5 h-0.5 rounded-full" style={{
                          background: 'radial-gradient(circle, #333, #000)',
                          boxShadow: 'inset 0 0.5px 1px rgba(0,0,0,0.5)'
                        }}></div>
                      ))}
                    </div>

                    {/* Additional metallic shine effects */}
                    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
                    <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
                    <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-full"></div>
                    <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced realistic glow effect */}
              <div className="absolute inset-0 bg-gradient-primary/15 rounded-[3rem] blur-3xl -z-10 group-hover:bg-gradient-primary/25 transition-all duration-500"></div>
            </div>
          </div>

          {/* Enhanced Right side - Benefits list */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                Um pouco do que a{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Rise Community
                </span>{" "}
                tem em seu acervo...
              </h3>
              <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="bg-gradient-card rounded-3xl border border-white/20 shadow-elegant p-6 sm:p-8">
              <div className="space-y-2 sm:space-y-3 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 group p-3 rounded-xl hover:bg-gradient-card hover:border hover:border-white/20 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-rise-red mt-0.5 flex-shrink-0 group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300" />
                    <span className="text-foreground group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300 text-sm sm:text-base font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl border border-white/10 shadow-card">
              <p className="text-lg md:text-xl font-bold leading-relaxed">
                A única comunidade de{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">Networking</span>{" "}
                que chega em todos os segmentos. De uma forma{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  eficiente, organizada e exclusiva
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}