
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
            

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              <article className="group rounded-2xl bg-gradient-card border border-white/20 p-4 hover:border-rise-red/40 hover:shadow-elegant transition-all duration-300">
                <header className="flex items-center gap-2 mb-1">
                  <span className="text-xl leading-none shrink-0">📅</span>
                  <h3 className="text-base md:text-lg font-bold leading-tight tracking-tight">Atualizações Semanaais</h3>
                </header>
                <p className="text-sm text-rise-gray leading-relaxed">Toda semana novos cursos, apostilas e ferramentas adicionados ao acervo, garantindo conteúdo sempre atualizado.</p>
              </article>
              
              <article className="group rounded-2xl bg-gradient-card border border-white/20 p-4 hover:border-rise-red/40 hover:shadow-elegant transition-all duration-300">
                <header className="flex items-center gap-2 mb-1">
                  <span className="text-xl leading-none shrink-0">🤖</span>
                  <h3 className="text-base md:text-lg font-bold leading-tight tracking-tight">Agentes de IA Exclusivos</h3>
                </header>
                <p className="text-sm text-rise-gray leading-relaxed">Ferramentas inteligentes criadas para turbinar seus estudos, negócios e automações.</p>
              </article>

              <article className="group rounded-2xl bg-gradient-card border border-white/20 p-4 hover:border-rise-red/40 hover:shadow-elegant transition-all duration-300">
                <header className="flex items-center gap-2 mb-1">
                  <span className="text-xl leading-none shrink-0">🔍</span>
                  <h3 className="text-base md:text-lg font-bold leading-tight tracking-tight">Puxador de Dados Vitalício</h3>
                </header>
                <p className="text-sm text-rise-gray leading-relaxed">Tenha acesso ao nosso Puxador de Dados exclusivo da Rise Community, funcionando 24/7, com puxadas ilimitadas e acesso vitalício garantido.</p>
              </article>

              <article className="group rounded-2xl bg-gradient-card border border-white/20 p-4 hover:border-rise-red/40 hover:shadow-elegant transition-all duration-300">
                <header className="flex items-center gap-2 mb-1">
                  <span className="text-xl leading-none shrink-0">📦</span>
                  <h3 className="text-base md:text-lg font-bold leading-tight tracking-tight">Fornecedores de Rateio</h3>
                </header>
                <p className="text-sm text-rise-gray leading-relaxed">Após anos guardando a 7 chaves, liberamos acesso aos principais fornecedores utilizados atualmente pela comunidade.</p>
              </article>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}