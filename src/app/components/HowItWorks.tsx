import { Calendar, Camera, Headphones } from 'lucide-react';
import { StarryBackground } from './StarryBackground';

export function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: 'Agendamento',
      description: 'As consultas com o tarot são agendadas somente mediante pagamento e envio do comprovante.',
      color: '#D4AF37',
    },
    {
      icon: Camera,
      title: 'Formato',
      description: 'Todas as consultas são realizadas com foto e áudio, para que o consulente possa acessar o conteúdo da leitura quantas vezes quiser.',
      color: '#C85A3E',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <StarryBackground opacity={0.05} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#D4AF37] mb-4 tracking-wide">
            Como Funciona
          </h2>
          <div className="flex justify-center">
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-[#1A1528] to-[#2C1A47] border-2 border-[#D4AF37]/30 rounded-2xl p-8 hover:border-[#D4AF37]/70 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.25)] relative overflow-hidden">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <div className="w-full h-full border-t-[3px] border-r-[3px] border-[#D4AF37] rounded-tr-2xl"></div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}33, ${step.color}66)`,
                      }}
                    >
                      <Icon className="w-10 h-10" style={{ color: step.color }} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6">
                      <Headphones className="w-6 h-6 text-[#6B8E23] opacity-50" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-[family-name:var(--font-serif)] text-3xl mb-4" style={{ color: step.color }}>
                    {step.title}
                  </h3>
                  <p className="text-[#F5E6D3] leading-relaxed text-lg">
                    {step.description}
                  </p>

                  {/* Bottom Decoration */}
                  <div className="mt-6 pt-6 border-t border-[#D4AF37]/20">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#C85A3E]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#6B8E23]"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}