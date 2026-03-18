import { HelpCircle, Clock, Sparkles, Star, Heart, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router';
import { StarryBackground } from './StarryBackground';

export function Services() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Starry Background */}
      <StarryBackground opacity={0.08} />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#D4AF37] mb-4 tracking-wide">
            Valores e Serviços
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
          <p className="text-[#F5E6D3] text-lg max-w-3xl mx-auto italic leading-relaxed">
            Escolha a modalidade que melhor ressoa com o seu momento atual.
          </p>
        </div>

        {/* Bloco 1 - Perguntas Avulsas */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-[#C85A3E]" />
              <h3 className="font-[family-name:var(--font-serif)] text-4xl text-[#C85A3E]">
                Perguntas Avulsas
              </h3>
              <HelpCircle className="w-8 h-8 text-[#C85A3E]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8">
            {[
              { questions: '1 pergunta', price: 'R$ 20,00' },
              { questions: '2 perguntas', price: 'R$ 25,00' },
              { questions: '3 perguntas', price: 'R$ 30,00' },
              { questions: '4 perguntas', price: 'R$ 40,00' },
              { questions: '5 perguntas', price: 'R$ 50,00' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1528] to-[#2C1A47] border-2 border-[#D4AF37]/30 rounded-2xl p-6 text-center hover:border-[#D4AF37]/70 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.25)] transition-all duration-300 group"
              >
                <div className="text-[#F5E6D3] text-sm mb-3 opacity-80">{item.questions}</div>
                <div className="text-[#D4AF37] font-bold text-3xl group-hover:scale-105 transition-transform duration-300">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-3">
            <p className="text-[#F5E6D3] leading-relaxed">
              Ideal para tirar "aquela pulguinha" de trás da orelha. Perguntas objetivas e claras para te direcionar.
            </p>
            <p className="text-[#C85A3E] italic">
              Não realizo mais que 5 perguntas para um cliente em um mesmo jogo.
            </p>
          </div>
        </div>

        {/* Bloco 2 - Leitura por Hora */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-[#D4AF37]" />
              <h3 className="font-[family-name:var(--font-serif)] text-4xl text-[#D4AF37]">
                Leitura por Hora
              </h3>
              <Clock className="w-8 h-8 text-[#D4AF37]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {/* 30 Minutos */}
            <div className="bg-gradient-to-br from-[#1A1528] to-[#2C1A47] border-2 border-[#D4AF37]/30 rounded-3xl p-10 text-center hover:border-[#D4AF37]/70 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all duration-300 relative overflow-hidden group">
              <Sparkles className="absolute top-4 right-4 w-8 h-8 text-[#D4AF37] opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-[#D4AF37] font-bold text-5xl mb-4">R$ 49,90</div>
                <div className="text-[#C85A3E] text-2xl mb-6 font-[family-name:var(--font-serif)]">30 Minutos</div>
                <p className="text-[#F5E6D3]">Perguntas livres dentro de 30 minutos.</p>
              </div>
            </div>

            {/* 1 Hora */}
            <div className="bg-gradient-to-br from-[#1A1528] to-[#2C1A47] border-2 border-[#D4AF37]/30 rounded-3xl p-10 text-center hover:border-[#D4AF37]/70 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all duration-300 relative overflow-hidden group">
              <Sparkles className="absolute top-4 right-4 w-8 h-8 text-[#D4AF37] opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-[#D4AF37] font-bold text-5xl mb-4">R$ 92,90</div>
                <div className="text-[#C85A3E] text-2xl mb-6 font-[family-name:var(--font-serif)]">1 Hora</div>
                <p className="text-[#F5E6D3]">Perguntas livres dentro de 60 minutos.</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#F5E6D3] leading-relaxed">
              Ideal para quem tem muitas dúvidas e não sabe por onde começar.
            </p>
            <p className="text-[#C85A3E] italic mt-2">
              1 hora é o tempo máximo que faço para um cliente em um jogo.
            </p>
          </div>
        </div>

        {/* Bloco 3 - Tiragens Especiais */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <Star className="w-8 h-8 text-[#B76E79]" />
              <h3 className="font-[family-name:var(--font-serif)] text-4xl text-[#B76E79]">
                Tiragens Especiais
              </h3>
              <Star className="w-8 h-8 text-[#B76E79]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mesa Real */}
            <div className="bg-gradient-to-br from-[#1A1528] to-[#2C1A47] border-2 border-[#D4AF37]/30 rounded-3xl p-8 hover:border-[#D4AF37]/70 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all duration-300 relative overflow-hidden group">
              <Sparkles className="absolute top-6 right-6 w-10 h-10 text-[#D4AF37] opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-[#D4AF37] font-bold text-4xl mb-3">R$ 148,00</div>
                <h4 className="text-[#C85A3E] text-2xl mb-4 font-[family-name:var(--font-serif)]">Mesa Real</h4>
                <p className="text-[#F5E6D3] mb-4 leading-relaxed">
                  Tiragem adaptada do baralho cigano com 36 cartas. Analisa espiritualidade, afetivo, mental, financeiro, saúde e trabalho (passado, presente, futuro).
                </p>
                <p className="text-[#B76E79] text-sm italic">
                  Agendamento antecipado necessário. Prazo maior.
                </p>
              </div>
            </div>

            {/* Daqui 6 meses */}
            <div className="bg-gradient-to-br from-[#1A1528] to-[#2C1A47] border-2 border-[#D4AF37]/30 rounded-3xl p-8 hover:border-[#D4AF37]/70 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all duration-300 relative overflow-hidden group">
              <Zap className="absolute top-6 right-6 w-10 h-10 text-[#6B8E23] opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-[#D4AF37] font-bold text-4xl mb-3">R$ 52,90</div>
                <h4 className="text-[#C85A3E] text-2xl mb-4 font-[family-name:var(--font-serif)]">Daqui 6 meses + 1 pergunta</h4>
                <p className="text-[#F5E6D3] leading-relaxed">
                  Previsões para trabalho, estudo, financeiro, família e amor. Ideal para novos ciclos ou inícios de ano.
                </p>
              </div>
            </div>

            {/* Combo do Amor */}
            <div className="bg-gradient-to-br from-[#1A1528] to-[#2C1A47] border-2 border-[#D4AF37]/30 rounded-3xl p-8 hover:border-[#D4AF37]/70 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all duration-300 relative overflow-hidden group">
              <Heart className="absolute top-6 right-6 w-10 h-10 text-[#C85A3E] opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-[#D4AF37] font-bold text-4xl mb-3">R$ 92,00</div>
                <h4 className="text-[#C85A3E] text-2xl mb-4 font-[family-name:var(--font-serif)]">Combo do Amor</h4>
                <p className="text-[#F5E6D3] leading-relaxed">
                  Para solteiros, enrolados ou comprometidos. Tudo sobre a vida amorosa e propensões do momento. A mais completa para o coração.
                </p>
              </div>
            </div>

            {/* Mandala Astrológica */}
            <div className="bg-gradient-to-br from-[#1A1528] to-[#2C1A47] border-2 border-[#D4AF37]/30 rounded-3xl p-8 hover:border-[#D4AF37]/70 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all duration-300 relative overflow-hidden group">
              <Star className="absolute top-6 right-6 w-10 h-10 text-[#4A148C] opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-[#D4AF37] font-bold text-4xl mb-3">R$ 100,00</div>
                <h4 className="text-[#C85A3E] text-2xl mb-4 font-[family-name:var(--font-serif)]">Mandala Astrológica + 1 pergunta</h4>
                <p className="text-[#F5E6D3] mb-4 leading-relaxed">
                  Entenda todos os campos da vida através das 12 casas do zodíaco. Abrangente e conselheira.
                </p>
                <p className="text-[#B76E79] text-sm italic">
                  Agendamento antecipado necessário. Prazo maior.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Informações Importantes */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-[#1A1528]/60 to-[#2C1A47]/40 border border-[#D4AF37]/30 rounded-2xl p-8 text-center backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[#D4AF37]" />
              <h4 className="font-[family-name:var(--font-serif)] text-2xl text-[#D4AF37]">
                Prazo de Entrega
              </h4>
            </div>
            <p className="text-[#F5E6D3] text-lg leading-relaxed">
              As tiragens <span className="text-[#D4AF37] font-semibold">Mandala Astrológica</span> e <span className="text-[#D4AF37] font-semibold">Mesa Real</span> possuem prazo de entrega de até <span className="text-[#D4AF37] font-semibold">48 horas úteis</span> após a confirmação do pagamento.
            </p>
            <p className="text-[#F5E6D3] text-lg leading-relaxed mt-3">
              As demais consultas são realizadas no horário agendado.
            </p>
            <p className="text-[#F5E6D3]/70 text-sm mt-4 italic">
              *Tiragens especiais requerem maior tempo de preparação e análise.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-[#F5E6D3] text-lg leading-relaxed">
            Antes de realizar o agendamento, recomendamos a leitura da{' '}
            <Link 
              to="/politica"
              className="text-[#D4AF37] hover:text-[#C85A3E] underline transition-colors font-semibold"
            >
              Política de Consulta
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}