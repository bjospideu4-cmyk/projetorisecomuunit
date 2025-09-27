import { RatoflixButton } from "@/components/ui/ratoflix-button"
import { Lock, Folder, Gift, BarChart3 } from "lucide-react"
import mastercardIcon from "@/assets/mastercard-icon.png"
import pixIcon from "@/assets/pix-icon.png"

export function FinalOfferSection() {
  return (
    <section className="py-20 relative overflow-hidden" style={{
        background: '#000000'
      }}>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Main offer card exactly like RatoFlix */}
          <div className="rounded-3xl border-4 p-8 md:p-12 relative overflow-hidden"
                style={{
                  background: '#000000',
                  borderColor: '#dc2626',
                  boxShadow: '0 0 50px rgba(220, 38, 38, 0.5), inset 0 0 20px rgba(220, 38, 38, 0.1)'
                }}>
             
            <div className="text-center space-y-8 relative z-10">
              {/* Image placeholder section - exatamente como RatoFlix */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-64 h-40 mx-auto bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-base font-medium">Sua imagem aqui</span>
                  </div>
                </div>
                
                {/* Título exatamente como RatoFlix com efeito neon */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  O que{" "}
                  <span className="neon-sliding">você terá acesso ?</span>
                </h2>
              </div>

              {/* Lista de benefícios exatamente como RatoFlix */}
              <div className="space-y-4 text-left max-w-xl mx-auto mb-8">
                <div className="flex items-start gap-4">
                  <Folder className="w-5 h-5 flex-shrink-0 mt-1 text-red-600" />
                  <span className="text-white font-medium text-lg leading-relaxed">Comunidade do Discord</span>
                </div>
                <div className="flex items-start gap-4">
                  <Folder className="w-5 h-5 flex-shrink-0 mt-1 text-red-600" />
                  <span className="text-white font-medium text-lg leading-relaxed">Grupos de Networking de WhatsApp</span>
                </div>
                <div className="flex items-start gap-4">
                  <Folder className="w-5 h-5 flex-shrink-0 mt-1 text-red-600" />
                  <span className="text-white font-medium text-lg leading-relaxed">Atualizações Semanais</span>
                </div>
                <div className="flex items-start gap-4">
                  <Folder className="w-5 h-5 flex-shrink-0 mt-1 text-red-600" />
                  <span className="text-white font-medium text-lg leading-relaxed">Suporte exclusivo</span>
                </div>
                <div className="flex items-start gap-4">
                  <Folder className="w-5 h-5 flex-shrink-0 mt-1 text-red-600" />
                  <span className="text-white font-medium text-lg leading-relaxed">Área de Membros PREMIUM com Vídeo surpresa dentro.</span>
                </div>
                <div className="flex items-start gap-4">
                  <Gift className="w-5 h-5 flex-shrink-0 mt-1 text-red-600" />
                  <span className="text-white font-medium text-lg leading-relaxed">Bônus: Conteúdos exclusivos na aba "Rateio"</span>
                </div>
                <div className="flex items-start gap-4">
                  <Gift className="w-5 h-5 flex-shrink-0 mt-1 text-red-600" />
                  <span className="text-white font-medium text-lg leading-relaxed">Bônus: Fornecedores Secretos da Rise Community</span>
                </div>
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-5 h-5 flex-shrink-0 mt-1 text-red-600" />
                  <span className="text-white font-medium text-lg leading-relaxed">Painel de "Puxar Dados" oficial da Rise Community</span>
                </div>
              </div>

              {/* Preços exatamente como RatoFlix */}
              <div className="space-y-6 pt-6">
                {/* Preço riscado */}
                <div className="text-center">
                  <div className="text-xl font-bold line-through text-red-600 mb-6">
                    Total: R$ 167,00
                  </div>
                </div>

                {/* Preço parcelado grande */}
                <div className="text-center space-y-2">
                  <p className="text-lg font-semibold text-white">Por apenas 12X de:</p>
                  <div className="text-7xl md:text-8xl font-black leading-none text-white">
                    <span className="text-4xl">R$</span>
                    <span>11</span>
                    <span className="text-4xl">,28</span>
                  </div>
                  
                  {/* Preço à vista */}
                  <p className="text-xl font-bold mt-4" style={{ color: '#22c55e' }}>
                    ou R$ 97,00 à vista.
                  </p>
                </div>

                {/* Botão CTA exatamente como RatoFlix */}
                <div className="pt-4">
                  <RatoflixButton 
                    variant="access" 
                    size="xl" 
                    className="w-full max-w-sm mx-auto transition-all duration-300 hover:scale-105 text-lg font-bold gap-3 rounded-2xl py-5 px-8"
                    style={{
                      background: '#b91c1c',
                      borderColor: '#b91c1c',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(185, 28, 28, 0.4)',
                      border: '2px solid #b91c1c'
                    }}
                  >
                    <Lock className="w-5 h-5" />
                    Liberar o acesso agora
                  </RatoflixButton>
                </div>

                {/* Segurança e formas de pagamento */}
                <div className="space-y-6 pt-6">
                  <p className="text-sm font-medium text-white leading-relaxed text-center">
                    Compra 100% segura! Receba seu acesso imediatamente<br />
                    após a confirmação do pagamento.
                  </p>
                  
                  {/* Métodos de pagamento - exato como RatoFlix */}
                  <div className="flex justify-center items-center gap-6">
                    {/* Mastercard */}
                    <div className="flex items-center justify-center h-10 w-16">
                      <img 
                        src="https://i.postimg.cc/9f5K8QLX/mastercard-icon.webp" 
                        alt="Mastercard" 
                        className="h-full w-full object-contain opacity-70"
                      />
                    </div>
                    
                    {/* VISA */}
                    <div className="text-lg font-bold h-10 w-16 flex items-center justify-center text-white opacity-70" 
                         style={{ fontFamily: 'serif', letterSpacing: '2px' }}>
                      VISA
                    </div>
                    
                    {/* PIX */}
                    <div className="flex items-center justify-center h-10 w-16">
                      <img 
                        src="https://i.postimg.cc/TYKqxZrJ/pix-icon.webp" 
                        alt="PIX" 
                        className="h-full w-full object-contain opacity-70"
                      />
                    </div>
                    
                    {/* PayPal */}
                    <div className="text-lg font-bold h-10 w-16 flex items-center justify-center text-white opacity-70" 
                         style={{ fontFamily: 'sans-serif' }}>
                      PayPal
                    </div>
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