import { Instagram } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="py-16 bg-rise-dark border-t border-rise-red/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Copyright */}
          <div className="text-sm text-rise-gray">
            © 2025 Rise Community - Todos os direitos reservados.
          </div>

          {/* Terms and conditions */}
          <div className="max-w-4xl mx-auto space-y-4 text-xs text-rise-gray">
            <div>
              <strong className="text-rise-red">Termos e Condições de Uso</strong>
            </div>
            
            <p>
              <strong>Disclaimer:</strong> Todas as informações em nosso site são armazenadas de forma segura e criptografadas apenas para estabelecer uma comunicação personalizada, formulada de acordo com seus interesses.
            </p>
            
            <p>
              Todos os dados fornecidos serão utilizados exclusivamente pela nossa empresa e nunca serão divulgados a terceiros. Nunca enviaremos spam.
            </p>
            
            <p>
              Este site NÃO é do Facebook. Este site NÃO faz parte do Facebook ou do Meta Inc. Além disso, este site NÃO é de forma alguma endossado pelo Facebook. Os resultados podem variar de pessoa para pessoa.
            </p>
            
            <p>
              Todos os depoimentos, embora reais e gentilmente enviados pelos clientes, NÃO representam resultados únicos, pois cada indivíduo é diferente.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center">
            <a 
              href="#" 
              className="w-10 h-10 bg-rise-red/20 rounded-full flex items-center justify-center hover:bg-rise-red/30 transition-colors"
            >
              <Instagram className="w-5 h-5 text-rise-red" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}