import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Como acessa a comunidade ?",
    answer: "Após a confirmação do pagamento, você receberá um email com todos os links de acesso às nossas comunidades no Discord e WhatsApp."
  },
  {
    question: "É seguro ?",
    answer: "Sim! Somos uma comunidade estabelecida há anos com milhares de membros satisfeitos. Oferecemos garantia de 7 dias para sua total segurança."
  },
  {
    question: "Como funciona as formas de ganhar dinheiro dentro da comunidade ?",
    answer: "Disponibilizamos diversos métodos, scripts, funis e estratégias validadas pelos nossos membros. Além do networking que pode gerar parcerias lucrativas."
  },
  {
    question: "Quanto tempo dura a assinatura?",
    answer: "A assinatura é vitalícia! Você paga uma única vez e tem acesso para sempre a todos os conteúdos e atualizações."
  },
  {
    question: "Como funciona o Suporte ?",
    answer: "Oferecemos suporte direto através do Discord e WhatsApp. Nossa equipe está sempre disponível para ajudar com qualquer dúvida."
  },
  {
    question: "O que é rateio ?",
    answer: "Rateio é quando várias pessoas se juntam para comprar um curso ou produto, dividindo o valor entre todos, tornando muito mais acessível."
  }
]

export function FaqSection() {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rise-red/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-rise-orange/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
              FAQ -{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Dúvidas Frequentes
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="bg-gradient-card rounded-3xl border border-white/10 p-6 shadow-card hover:shadow-glow transition-all duration-500">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/20 rounded-xl px-6 py-2 data-[state=open]:bg-gradient-primary/10 hover:bg-white/5 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:text-rise-orange hover:no-underline font-semibold">
                    <span className="text-rise-red mr-3 transition-transform duration-300">▶</span>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-rise-gray pt-4 pb-2 ml-8 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}