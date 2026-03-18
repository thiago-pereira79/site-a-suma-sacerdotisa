import { Shield, AlertCircle, Clock, RefreshCw } from 'lucide-react';
import { StarryBackground } from './StarryBackground';

export function Policy() {
  const sections = [
    {
      icon: Shield,
      title: 'Agendamento',
      items: [
        'Consultas são agendadas somente após confirmação do pagamento',
        'O comprovante deve ser enviado via WhatsApp',
        'Prazo de confirmação: até 12 horas após o pagamento',
      ],
    },
    {
      icon: Clock,
      title: 'Tempo de Entrega',
      items: [
        'Consultas em formato de foto e áudio',
        'As tiragens Mandala Astrológica e Mesa Real possuem prazo de entrega de até 48 horas úteis após a confirmação do pagamento',
        'As demais consultas são realizadas no horário agendado',
        'Você receberá o material por WhatsApp',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Cancelamento',
      items: [
        'Cancelamentos devem ser solicitados com 24 horas de antecedência',
        'Para cancelamentos dentro do prazo: reembolso de 50% do valor pago',
        'Após esse período, não há reembolso',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Reagendamento',
      items: [
        'Reagendamentos são permitidos sem custo adicional',
        'Solicite com até 12 horas de antecedência',
        'Limite de 2 reagendamentos por consulta',
      ],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden min-h-screen">
      {/* Background */}
      <StarryBackground />

      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#D4AF37] mb-4 tracking-wide">
            Política de Consulta
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
          <p className="text-[#F5E6D3] text-lg max-w-2xl mx-auto leading-relaxed">
            Informações importantes sobre nossas consultas
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1A1528] to-[#2C1A47] border-2 border-[#D4AF37]/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/70 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Icon */}
                <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <Icon className="w-full h-full text-[#D4AF37]" />
                </div>

                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/60 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[#C85A3E]">
                    {section.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-3 relative z-10">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                      <span className="text-[#F5E6D3] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#2C1A47]/80 to-[#1A1528]/60 backdrop-blur-sm border-2 border-[#C85A3E]/40 rounded-2xl p-8 md:p-10">
            <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[#C85A3E] mb-6 text-center">
              Informações Gerais
            </h3>
            
            <div className="space-y-4 text-[#F5E6D3] leading-relaxed">
              <p>
                <strong className="text-[#D4AF37]">Confidencialidade:</strong> Todas as consultas são tratadas com absoluto sigilo e respeito. Suas informações pessoais e o conteúdo das leituras são confidenciais.
              </p>
              
              <p>
                <strong className="text-[#D4AF37]">Responsabilidade:</strong> O Tarot é uma ferramenta de autoconhecimento e orientação. As leituras não substituem aconselhamento médico, jurídico ou psicológico profissional.
              </p>
              
              <p>
                <strong className="text-[#D4AF37]">Material da Consulta:</strong> Você receberá fotos das cartas e áudio com a interpretação completa. Este material é seu e pode ser revisitado sempre que precisar.
              </p>
              
              <p>
                <strong className="text-[#D4AF37]">Dúvidas:</strong> Caso tenha qualquer dúvida sobre a consulta ou a política, entre em contato antes de realizar o agendamento.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-[#D4AF37]/30 text-center">
              <p className="text-[#F5E6D3] italic">
                Ao realizar o pagamento, você concorda com os termos desta política.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}