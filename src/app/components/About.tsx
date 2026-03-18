import { Sparkles, Heart, Eye } from 'lucide-react';
import { StarryBackground } from './StarryBackground';

export function About() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Starry Background */}
      <StarryBackground opacity={0.05} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <Eye className="w-12 h-12 text-[#D4AF37]" />
          </div>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#D4AF37] mb-4 tracking-wide">
            Sobre a Suma Sacerdotisa
          </h2>
          <div className="flex justify-center">
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1A1528]/80 to-[#2C1A47]/60 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.2)] relative overflow-hidden">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-3xl"></div>

            {/* Sparkle Decorations */}
            <Sparkles className="absolute top-8 right-8 w-8 h-8 text-[#C85A3E] opacity-30" />
            <Heart className="absolute bottom-8 left-8 w-8 h-8 text-[#6B8E23] opacity-30" />

            <div className="max-w-[700px] mx-auto space-y-6 text-[#F5E6D3] text-lg relative z-10 leading-[1.8]">
              <p className="first-letter:text-6xl first-letter:font-[family-name:var(--font-decorative)] first-letter:text-[#D4AF37] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Desde 2016, trilho o caminho do Tarot com seriedade, sensibilidade e estudo contínuo. Ao longo desses anos, já realizei milhares de tiragens e acompanhei pessoas de diferentes países em seus processos de autoconhecimento, cura e transformação.
              </p>

              <p>
                Minha abordagem se baseia no <span className="text-[#D4AF37] font-semibold">tarot terapêutico</span>, um trabalho que vai além de previsões. Aqui, cada carta é um espelho simbólico capaz de revelar padrões, desbloquear emoções e iluminar caminhos internos. A leitura se torna uma conversa profunda entre você, sua história e o que o Tarot deseja trazer à consciência.
              </p>

              <p>
                Meu propósito é oferecer orientação com responsabilidade e acolhimento, criando um espaço seguro onde você possa se encontrar, se ouvir e se transformar.
              </p>
            </div>

            {/* Highlighted Quote */}
            <div className="mt-12 pt-10 border-t border-[#D4AF37]/30">
              <div className="flex justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <p className="text-center font-[family-name:var(--font-serif)] italic text-xl md:text-2xl text-[#D4AF37] max-w-[600px] mx-auto relative z-10" style={{ lineHeight: '1.6' }}>
                Seja bem-vindo(a) ao templo da Suma Sacerdotisa, onde o Tarot é ferramenta, ponte e cura.
              </p>
              <div className="flex justify-center mt-4">
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}