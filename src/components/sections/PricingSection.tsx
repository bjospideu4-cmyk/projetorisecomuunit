
export function PricingSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rise-orange/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-rise-red/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 mb-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight">
                Bônus Exclusivos da{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Rise Community
                </span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            </div>
            
            <p className="text-rise-gray text-base md:text-lg mb-6 md:mb-8 leading-relaxed px-4">
              Descubra os bônus exclusivos que só os membros da Rise Community têm acesso. 
              Recursos únicos que vão acelerar seus resultados.
            </p>
            

            <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <article className="group rounded-2xl bg-gradient-card ring-1 ring-white/10 border border-white/10 p-5 md:p-6 text-left hover:ring-rise-red/25 hover:border-rise-red/25 hover:shadow-elegant transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-2.5 flex items-center gap-2">
                  <span className="text-xl md:text-2xl leading-none">📅</span>
                  Atualizações Semanais
                </h3>
                <p className="text-[15px] md:text-base text-rise-gray leading-relaxed m-0">Toda semana novos cursos, apostilas e ferramentas adicionados ao acervo, garantindo conteúdo sempre atualizado.</p>
              </article>
              
              <article className="group rounded-2xl bg-gradient-card ring-1 ring-white/10 border border-white/10 p-5 md:p-6 text-left hover:ring-rise-red/25 hover:border-rise-red/25 hover:shadow-elegant transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-2.5 flex items-center gap-2">
                  <span className="text-xl md:text-2xl leading-none">🤖</span>
                  Agentes de IA Exclusivos
                </h3>
                <p className="text-[15px] md:text-base text-rise-gray leading-relaxed m-0">Ferramentas inteligentes criadas para turbinar seus estudos, negócios e automações.</p>
              </article>

              <article className="group rounded-2xl bg-gradient-card ring-1 ring-white/10 border border-white/10 p-5 md:p-6 text-left hover:ring-rise-red/25 hover:border-rise-red/25 hover:shadow-elegant transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-2.5 flex items-center gap-2">
                  <span className="text-xl md:text-2xl leading-none">🔍</span>
                  Puxador de Dados Vitalício
                </h3>
                <p className="text-[15px] md:text-base text-rise-gray leading-relaxed m-0">Tenha acesso ao nosso <strong>Puxador de Dados exclusivo da Rise Community</strong>, funcionando <strong>24/7</strong>, com <strong>puxadas ilimitadas</strong> e acesso vitalício garantido.</p>
              </article>

              <article className="group rounded-2xl bg-gradient-card ring-1 ring-white/10 border border-white/10 p-5 md:p-6 text-left hover:ring-rise-red/25 hover:border-rise-red/25 hover:shadow-elegant transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-2.5 flex items-center gap-2">
                  <span className="text-xl md:text-2xl leading-none">📦</span>
                  Fornecedores de Rateio
                </h3>
                <p className="text-[15px] md:text-base text-rise-gray leading-relaxed m-0">Após anos guardando a 7 chaves, liberamos acesso aos principais fornecedores utilizados atualmente pela comunidade.</p>
              </article>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}