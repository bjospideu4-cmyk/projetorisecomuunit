import { CheckCircle2 } from "lucide-react"

const advantages = [
  "Nosso acervo de itens é considerado infinito, afinal temos atualizações semanais sempre trazendo coisas novas",
  "Networking entre membros garantido, abrindo portas para possíveis negócios e projetos",
  "Aba \"solicitar\" onde pode requisitar o curso, pack, livro ou arquivo que quiser. E a equipe da Rise Community corre atrás",
  "Todo o acervo em 1 único lugar, de forma otimizada, organizada e exclusiva. Na palma da sua mão, ou na tela do seu computador"
]

export function ComparisonSection() {
  return (
    <section className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rise-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rise-orange/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                Por que a Rise Community é{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  superior aos Rateios<br />concorrentes
                </span>{" "}
                por aí?
              </h2>
              <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-card border border-white/10 hover:bg-white/5 transition-all duration-300 group">
                  <div className="bg-gradient-primary rounded-full p-2 mt-1 flex-shrink-0 shadow-primary group-hover:shadow-glow transition-all duration-300">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground leading-relaxed group-hover:text-rise-orange transition-colors">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Guarantee Section */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gradient-card rounded-3xl border border-white/10 shadow-card hover:shadow-glow transition-all duration-500 p-8">
              <div className="relative z-10 py-4">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-8">
                  {/* Big 7 on the left - More red as requested */}
                  <div className="text-8xl md:text-9xl font-black leading-none"
                       style={{ color: '#dc2626' }}>7</div>

                  {/* Text content on the right */}
                  <div className="text-center md:text-left flex flex-col justify-center">
                    {/* Stars above text */}
                    <div className="flex justify-center md:justify-start items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-yellow-400 text-xl md:text-2xl">⭐</div>
                      ))}
                    </div>
                    
                    {/* Main text */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                      <span className="text-foreground">DIAS DE</span><br />
                      <span className="bg-gradient-primary bg-clip-text text-transparent">GARANTIA</span>
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-sm md:text-base lg:text-lg font-bold text-rise-orange mt-2">
                      NÃO GOSTOU? SEU DINHEIRO DE VOLTA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}