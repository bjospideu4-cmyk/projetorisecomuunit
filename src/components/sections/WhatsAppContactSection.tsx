import { MessageCircle } from "lucide-react";

export function WhatsAppContactSection() {
  const handleWhatsAppClick = () => {
    // Substitua pelo número de WhatsApp da Rise Community
    const phoneNumber = "5511999999999"; // Exemplo - substitua pelo número real
    const message = "Olá! Tenho uma dúvida sobre a Rise Community.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="border-2 border-green-500 rounded-2xl p-8 bg-background/50 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ficou com alguma dúvida?
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está disponível para te ajudar. É só chamar no WhatsApp e tirar 
            todas as suas dúvidas sobre a <span className="text-rise-500 font-semibold">Rise Community</span>.
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
          >
            <MessageCircle size={24} />
            Iniciar conversa
          </button>
        </div>
      </div>
    </section>
  );
}