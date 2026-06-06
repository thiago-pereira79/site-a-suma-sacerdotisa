import { Page } from '../types';
import { Sparkles, ArrowRight, MessageCircle, Moon, Star, Compass, Eye, Heart, HelpCircle, Instagram, CheckCircle, Clock, Mail } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { SectionDivider } from './SectionDivider';
import { WHATSAPP_LINK, EMAIL_LINK } from '../constants';

interface HeroSectionProps {
  setTab: (tab: Page) => void;
}

export function HeroSection({ setTab }: HeroSectionProps) {
  // Use a subset of testimonials for the preview section
  const featuredReviews = TESTIMONIALS.slice(0, 3);

  // Scrapbook card configurations to match the requested deckle-edge theme style
  const cardConfigs = [
    {
      styleClass: 'card-olive',
      question: 'O que está se repetindo?',
      desc: 'Reconheça padrões e liberte o que já não te move mais.',
      rotation: 'rotate-[-1deg]',
      tapeAngle: 'rotate-[-1.8deg]',
      icon: <EyeIcon className="w-12 h-12" />
    },
    {
      styleClass: 'card-paper-light',
      question: 'O que pede mais clareza?',
      desc: 'Encontre direção para decisões e escolhas importantes.',
      rotation: 'rotate-[0.7deg]',
      tapeAngle: 'rotate-[1.5deg]',
      icon: <StarCompassIcon className="w-12 h-12" />
    },
    {
      styleClass: 'card-bordeaux',
      question: 'Qual escolha precisa de presença?',
      desc: 'Decida com consciência e confiança no seu caminho.',
      rotation: 'rotate-[-0.6deg]',
      tapeAngle: 'rotate-[-0.5deg]',
      icon: <CrescentMoonIcon className="w-11 h-11" />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="pb-0 bg-[#F3EBDD]/40 text-[#11100C] relative overflow-hidden selection:bg-[#B75E3C]/20 selection:text-[#5A1F2E]"
    >
      {/* 1. Deep Dark Hero Banner Section - INICIO.png */}
      <section className="relative min-h-[460px] flex flex-col items-center justify-center pt-24 pb-20 px-4 md:px-8 text-center bg-[#11100C] text-[#F3EBDD] overflow-hidden">
        {/* Elegant textured mystical background covering the whole hero */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0"
          style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=1920")`,
          }}
        />
        {/* Uniform Dark overlay for premium contrast and perfect typography visibility */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />



        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 z-10 px-2">
          <h1 className="font-cinzel text-[#D6AF2A] text-[40px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-bold tracking-[0.1em] sm:tracking-[0.18em] uppercase leading-tight select-none">
            A SUMA SACERDOTISA
          </h1>
          <h2 className="font-serif text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-[#F3EBDD]/95 font-medium leading-snug max-w-3xl mx-auto">
            Tarot Terapêutico para autoconhecimento,<br className="hidden sm:inline" /> cura e direcionamento
          </h2>
          <p className="text-[13.5px] sm:text-[15px] md:text-[16px] text-[#F3EBDD]/75 font-sans font-light max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Consultas online com foto e áudio, para você revisitar a leitura sempre que precisar e reconectar-se com sua essência.
          </p>
        </div>

        {/* Hand-torn paper edge transition wrapper */}
        <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden leading-none z-10 pointer-events-none h-6 select-none">
          {/* Shadow/fiber double-drawn edge layer */}
          <svg className="absolute top-[1.5px] left-0 w-full h-[calc(100%-3px)] opacity-[0.14] text-[#11100C]" viewBox="0 0 1200 24" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,2 L24,4 L48,2.5 L72,5 L96,3 L120,6.5 L144,4 L168,5.5 L192,3 L216,6.5 L240,4 L264,5.5 L288,3 L312,2 L336,5 C360,4.5 384,1.5 408,4 L432,6 L456,3.5 L480,5.5 L504,3.5 L528,7 L552,4.5 L576,6 L600,3 L624,5.5 L648,3.5 L672,6.5 L696,4.5 L720,6 L744,3 L768,4 L792,2.5 L816,5 L840,3 L864,6.5 L888,4 L912,5.5 L936,3 L960,6.5 L984,4 L1008,5.5 L1032,3 L1056,5.5 L1080,3.5 L1104,6.5 L1128,4 L1152,5.5 L1176,3.5 L1200,5 L1200,24 L0,24 Z" />
          </svg>
          {/* Foreground solid page background paper cut layer */}
          <svg className="relative block w-full h-[calc(100%+2px)] text-[#F3EBDD]" viewBox="0 0 1200 24" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,3 L24,5 L48,3.5 L72,6 L96,4 L120,7.5 L144,5 L168,6.5 L192,4 L216,7.5 L240,5 L264,6.5 L288,4 L312,3 L336,6 L360,4.5 L384,1.5 L408,5 L432,7 L456,4.5 L480,6.5 L504,4.5 L528,8 L552,5.5 L576,7 L600,4 L624,6.5 L648,4.5 L672,7.5 L696,5.5 L720,7 L744,4 L768,5 L792,3.5 L816,6 L840,4 L864,7.5 L888,5 L912,6.5 L936,4 L960,7.5 L984,5 L1008,6.5 L1032,4 L1056,6.5 L1080,4.5 L1104,7.5 L1128,5 L1152,6.5 L1176,4.5 L1200,6 L1200,24 L0,24 Z" />
          </svg>
        </div>
      </section>

      {/* 2. Three Loose-Leaf Scrapbook Note Cards - INICIO.png */}
      <section className="pt-8 pb-10 md:pt-12 md:pb-12 px-4 md:px-8 max-w-7xl mx-auto relative z-20 overflow-visible">
        
        <div className="relative max-w-5xl mx-auto overflow-visible">


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 lg:gap-x-12 xl:gap-x-14 gap-y-12 justify-center items-stretch overflow-visible px-2 relative z-10">
          {cardConfigs.map((col, idx) => {
            const isDark = col.styleClass.includes("olive") || col.styleClass.includes("bordeaux");
            return (
              <div 
                key={idx}
                className={`relative flex flex-col justify-stretch overflow-visible transition-all duration-300 hover:scale-[1.03] filter drop-shadow-[3px_5px_8px_rgba(31,26,20,0.13)] hover:drop-shadow-[6px_12px_18px_rgba(31,26,20,0.20)] ${col.rotation} w-full max-w-[320px] lg:max-w-[280px] lg:w-[280px] min-h-[380px] mx-auto`}
              >
                {/* Washi tape at the top, overlapping the deckle border */}
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5.5 scrapbook-tape ${col.tapeAngle} opacity-90 z-20`} />

                {/* Card content wrapper (clipped using irregular deckle cut edge clip-path and styled with a neat flat solid background style) */}
                <div className={`p-6 sm:p-8 pt-9 pb-8 flex flex-col justify-between h-full text-center hero-no-texture card-torn-${(idx % 3) + 1} ${col.styleClass}`}>
                  
                  {/* Mystic symbol at top */}
                  <div className="flex justify-center mb-5 text-[#D6AF2A]">
                    {col.icon}
                  </div>

                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="font-serif text-[19px] sm:text-[20px] font-bold italic mb-3 leading-snug">
                      {col.question}
                    </h3>
                    <p className="text-[13px] sm:text-[13.5px] leading-relaxed font-sans font-light opacity-90 max-w-xs mx-auto">
                      {col.desc}
                    </p>
                  </div>

                  {/* Divider ornament at the bottom of card */}
                  <div className="flex justify-center pt-5 mt-auto text-[#D6AF2A]/85">
                    <DividerOrnament className="w-24 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. "Como a leitura acontece" steps pipeline - INICIO.png */}
      <section className="pt-0 pb-12 md:pb-14 px-4 md:px-8 bg-[#F3EBDD] relative overflow-hidden">


        {/* 4. Fine sparkles near the steps grid */}
        <div className="absolute left-[4%] top-[45%] w-6 h-6 opacity-40 text-[#D6AF2A] hidden xl:block pointer-events-none select-none z-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M12,4 L12,20 M4,12 L20,12" strokeDasharray="1 2" />
            <path d="M12,6 Q12,12 18,12 Q12,12 12,18 Q12,12 6,12 Q12,12 12,6" />
          </svg>
        </div>
        <div className="absolute right-[4%] top-[55%] w-7 h-7 opacity-40 text-[#D6AF2A] hidden xl:block pointer-events-none select-none z-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M12,4 L12,20 M4,12 L20,12" strokeDasharray="1 2" />
            <path d="M12,6 Q12,12 18,12 Q12,12 12,18 Q12,12 6,12 Q12,12 12,6" />
          </svg>
        </div>

        {/* 5. Minimal golden sparkles / dots near the banner */}
        <div className="absolute left-[20%] bottom-[18%] w-5 h-5 opacity-40 text-[#D6AF2A] hidden lg:block pointer-events-none select-none z-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M12,4 Q12,12 20,12 Q12,12 12,20 Q12,12 4,12 Q12,12 12,4" />
          </svg>
        </div>
        <div className="absolute right-[22%] bottom-[16%] w-6 h-6 opacity-50 text-[#D6AF2A] hidden lg:block pointer-events-none select-none z-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M12,4 Q12,12 20,12 Q12,12 12,20 Q12,12 4,12 Q12,12 12,4" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="font-serif text-[34px] md:text-[42px] lg:text-[46px] text-[#000000] font-medium tracking-tight">
              Como a leitura acontece
            </h2>
            <p className="font-serif text-[15px] sm:text-[17.5px] text-[#000000] font-normal leading-relaxed text-center mt-3 max-w-2xl mx-auto">
              Um processo simples, profundo e acolhedor para iluminar o que precisa ser visto.
            </p>
          </div>

          {/* Grid Layout perfectly controlling width and vertical aspect ratios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 justify-center items-center justify-items-center max-w-4xl mx-auto">
            {[
              { num: '01', title: 'Você envia sua pergunta', tDesc: 'Compartilhe sua dúvida, tema ou momento pelo WhatsApp de forma descritiva.' },
              { num: '02', title: 'A leitura é preparada', tDesc: 'Conecto-me à sua energia, às cartas e aos símbolos para uma leitura personalizada.' },
              { num: '03', title: 'Você recebe a orientação', tDesc: 'Envio detalhado por escrito e, quando necessário, imagens das cartas e mensagens.' },
              { num: '04', title: 'Você pode revisitar', tDesc: 'Sua leitura fica com você para reler, refletir e reconectar-se sempre que precisar.' }
            ].map((step, sIdx) => (
              <div 
                key={sIdx} 
                className="w-full max-w-[205px] min-h-[315px] aspect-[2/3] p-6 pt-9 pb-8 scrapbook-texture card-paper-light border border-[rgba(74,52,40,0.18)] rounded-[8px] flex flex-col items-center justify-start text-center hover:border-[#D6AF2A]/35 transition-all duration-300 shadow-[0_2px_8px_rgba(31,26,20,0.06)]"
              >
                {/* Gold Number Circle with responsive margin */}
                <div className="w-9 h-9 rounded-full bg-[#D6AF2A] flex items-center justify-center text-[#F3EBDD] font-serif font-semibold text-xs tracking-wider mb-6 shadow-sm select-none shrink-0">
                  {step.num}
                </div>

                <h4 className="font-serif text-[16px] font-bold text-[#1F1A14] mb-[18px] leading-snug tracking-tight shrink-0 min-h-[44px] flex items-center justify-center">
                  {step.title}
                </h4>
                
                <p className="text-[12.5px] text-[#4A3428]/95 leading-relaxed font-sans font-light">
                  {step.tDesc}
                </p>
              </div>
            ))}
          </div>

          {/* Banner Verde Final em formato retalho de papel horizontal */}
          <div 
            className="scrapbook-texture card-olive py-5 px-8 sm:px-12 w-full max-w-3xl mx-auto mt-14 mb-2 text-center shadow-md hover:scale-[1.01] transition-all duration-300"
            style={{
              clipPath: "polygon(0% 12%, 5% 4%, 10% 10%, 15% 3%, 20% 8%, 25% 5%, 30% 9%, 35% 4%, 40% 7%, 45% 5%, 50% 9%, 55% 4%, 60% 8%, 65% 3%, 70% 8%, 75% 5%, 80% 9%, 85% 4%, 90% 8%, 95% 5%, 100% 11%, 99.6% 35%, 100% 65%, 99.4% 88%, 95% 95%, 90% 90%, 85% 96%, 80% 91%, 75% 95%, 70% 91%, 65% 96%, 60% 91%, 55% 95%, 50% 91%, 45% 96%, 40% 91%, 35% 95%, 30% 91%, 25% 96%, 20% 91%, 15% 95%, 10% 90%, 5% 94%, 0% 89%, 0.4% 65%, 0% 35%)"
            }}
          >
            <p className="font-serif italic text-sm sm:text-[15.5px] text-[#F1E5D6] leading-relaxed tracking-wider py-1 text-center">
              Cada leitura é única e feita com presença, intuição e respeito à sua história.
            </p>
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* 4. Service Option Redirect Blocks - INICIO.png */}
      <section className="pt-0 pb-12 md:pb-16 px-4 md:px-8 bg-[#F3EBDD] relative overflow-hidden">
        {/* Decorative elements */}


        {/* Small subtle star cluster decorations */}
        <div className="absolute left-[12%] bottom-[20%] w-6 h-6 text-[#D6AF2A] opacity-40 pointer-events-none select-none z-0 hidden lg:block">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M12,4 Q12,12 20,12 Q12,12 12,20 Q12,12 4,12 Q12,12 12,4" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[34px] md:text-[42px] lg:text-[46px] text-[#000000] font-medium tracking-tight">
              Escolha a leitura que conversa com o seu momento
            </h2>
            <p className="font-serif text-[15px] sm:text-[17.5px] text-[#000000] font-normal leading-relaxed text-center mt-3 max-w-2xl mx-auto">
              Perguntas objetivas e claras para te direcionar no momento certo.
            </p>
          </div>

          <div className="flex flex-col gap-10 xl:gap-[44px] items-center">
            {/* Primeira Linha: 3 cards */}
            <div className="flex flex-wrap justify-center gap-10 xl:gap-[44px] w-full">
              
              {/* Card 1: 1 pergunta */}
              <div className="w-full max-w-[245px] min-h-[385px] aspect-[2/3] p-7 pt-9 pb-8 scrapbook-texture card-olive border border-[#4A3428]/15 rounded-[12px] flex flex-col items-center justify-between text-center hover:scale-[1.03] transition-all duration-300 shadow-[2px_4px_12px_rgba(31,26,20,0.14)] relative">
                <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#F1E5D6] tracking-tight leading-tight">
                  1 pergunta
                </h3>
                
                <p className="text-[12.8px] text-[#F1E5D6]/85 leading-relaxed font-sans font-light max-w-[195px] px-1">
                  Para uma dúvida objetiva que precisa de clareza agora.
                </p>

                <div className="flex flex-col items-center w-full">
                  <span className="font-serif text-[#D6AF2A] text-2xl sm:text-[26px] font-bold tracking-tight">
                    R$ 20,00
                  </span>
                  <span className="text-[11px] text-[#F1E5D6]/70 font-sans tracking-wide mt-1 uppercase">
                    Avulsa
                  </span>
                  
                  {/* Visual flower detail */}
                  <svg className="w-6 h-6 mt-6 opacity-25 text-[#D6AF2A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M12,22 C12,18 10,14 12,10 C14,14 12,18 12,22 Z M12,10 C8,9 6,6 12,5 Q12,10 12,10 M12,10 C16,9 18,6 12,5 C12,5 12,10 12,10" />
                  </svg>
                </div>
              </div>

              {/* Card 2: 2 perguntas */}
              <div className="w-full max-w-[245px] min-h-[385px] aspect-[2/3] p-7 pt-9 pb-8 scrapbook-texture card-olive border border-[#4A3428]/15 rounded-[12px] flex flex-col items-center justify-between text-center hover:scale-[1.03] transition-all duration-300 shadow-[2px_4px_12px_rgba(31,26,20,0.16)] relative">
                <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#F1E5D6] tracking-tight leading-tight">
                  2 perguntas
                </h3>
                
                <p className="text-[12.8px] text-[#F1E5D6]/85 leading-relaxed font-sans font-light max-w-[195px] px-1">
                  Para olhar dois pontos importantes do seu momento.
                </p>

                <div className="flex flex-col items-center w-full">
                  <span className="font-serif text-[#D6AF2A] text-2xl sm:text-[26px] font-bold tracking-tight">
                    R$ 25,00
                  </span>
                  <span className="text-[11px] text-[#F1E5D6]/70 font-sans tracking-wide mt-1 uppercase">
                    Avulsas
                  </span>
                  
                  {/* Visual flower detail */}
                  <svg className="w-6 h-6 mt-6 opacity-25 text-[#D6AF2A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M12,22 C12,18 10,14 12,10 C14,14 12,18 12,22 Z M12,10 C8,9 6,6 12,5 Q12,10 12,10 M12,10 C16,9 18,6 12,5 C12,5 12,10 12,10" />
                  </svg>
                </div>
              </div>

              {/* Card 3: 3 perguntas */}
              <div className="w-full max-w-[245px] min-h-[385px] aspect-[2/3] p-7 pt-9 pb-8 scrapbook-texture card-olive border border-[#4A3428]/15 rounded-[12px] flex flex-col items-center justify-between text-center hover:scale-[1.03] transition-all duration-300 shadow-[2px_4px_12px_rgba(31,26,20,0.18)] relative">
                <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#F1E5D6] tracking-tight leading-tight">
                  3 perguntas
                </h3>
                
                <p className="text-[12.8px] text-[#F1E5D6]/85 leading-relaxed font-sans font-light max-w-[195px] px-1">
                  Para organizar melhor caminhos, escolhas e possibilidades.
                </p>

                <div className="flex flex-col items-center w-full">
                  <span className="font-serif text-[#D6AF2A] text-2xl sm:text-[26px] font-bold tracking-tight">
                    R$ 30,00
                  </span>
                  <span className="text-[11px] text-[#F1E5D6]/70 font-sans tracking-wide mt-1 uppercase">
                    Avulsas
                  </span>
                  
                  {/* Visual flower detail */}
                  <svg className="w-6 h-6 mt-6 opacity-25 text-[#D6AF2A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M12,22 C12,18 10,14 12,10 C14,14 12,18 12,22 Z M12,10 C8,9 6,6 12,5 Q12,10 12,10 M12,10 C16,9 18,6 12,5 C12,5 12,10 12,10" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Segunda Linha: 2 cards centralizados */}
            <div className="flex flex-wrap justify-center gap-10 xl:gap-[44px] w-full">
              
              {/* Card 4: 4 perguntas */}
              <div className="w-full max-w-[245px] min-h-[385px] aspect-[2/3] p-7 pt-9 pb-8 scrapbook-texture card-olive border border-[#4A3428]/15 rounded-[12px] flex flex-col items-center justify-between text-center hover:scale-[1.03] transition-all duration-300 shadow-[2px_4px_12px_rgba(31,26,20,0.14)] relative">
                <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#F1E5D6] tracking-tight leading-tight">
                  4 perguntas
                </h3>
                
                <p className="text-[12.8px] text-[#F1E5D6]/85 leading-relaxed font-sans font-light max-w-[195px] px-1">
                  Para aprofundar dúvidas conectadas entre si.
                </p>
                
                <div className="flex flex-col items-center w-full">
                  <span className="font-serif text-[#D6AF2A] text-2xl sm:text-[26px] font-bold tracking-tight">
                    R$ 40,00
                  </span>
                  <span className="text-[11px] text-[#F1E5D6]/70 font-sans tracking-wide mt-1 uppercase">
                    Avulsas
                  </span>
                  
                  {/* Visual flower detail */}
                  <svg className="w-6 h-6 mt-6 opacity-25 text-[#D6AF2A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M12,22 C12,18 10,14 12,10 C14,14 12,18 12,22 Z M12,10 C8,9 6,6 12,5 Q12,10 12,10 M12,10 C16,9 18,6 12,5 C12,5 12,10 12,10" />
                  </svg>
                </div>
              </div>

              {/* Card 5: 5 perguntas */}
              <div className="w-full max-w-[245px] min-h-[385px] aspect-[2/3] p-7 pt-9 pb-8 scrapbook-texture card-olive border border-[#4A3428]/15 rounded-[12px] flex flex-col items-center justify-between text-center hover:scale-[1.03] transition-all duration-300 shadow-[2px_4px_12px_rgba(31,26,20,0.14)] relative">
                <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#F1E5D6] tracking-tight leading-tight">
                  5 perguntas
                </h3>
                
                <p className="text-[12.8px] text-[#F1E5D6]/85 leading-relaxed font-sans font-light max-w-[195px] px-1">
                  Para uma leitura mais completa dentro das perguntas avulsas.
                </p>

                <div className="flex flex-col items-center w-full">
                  <span className="font-serif text-[#D6AF2A] text-2xl sm:text-[26px] font-bold tracking-tight">
                    R$ 50,00
                  </span>
                  <span className="text-[11px] text-[#F1E5D6]/70 font-sans tracking-wide mt-1 uppercase">
                    Avulsas
                  </span>
                  
                  {/* Visual flower detail */}
                  <svg className="w-6 h-6 mt-6 opacity-25 text-[#D6AF2A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <path d="M12,22 C12,18 10,14 12,10 C14,14 12,18 12,22 Z M12,10 C8,9 6,6 12,5 Q12,10 12,10 M12,10 C16,9 18,6 12,5 C12,5 12,10 12,10" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

          <div className="text-center mt-14">
            <button
              onClick={() => handleTabClick('valores')}
              className="text-[#1F1A14] hover:text-[#5A2418] font-serif text-[14px] sm:text-[15px] italic border-b border-[#1F1A14]/25 pb-0.5 cursor-pointer transition-colors duration-300"
            >
              Consulte todos os tipos de leitura e modalidades em detalhes na página de Valores.
            </button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 5. Palavras de quem já passou por aqui (Taped review cards) - INICIO.png */}
      <section className="pt-0 pb-12 md:pb-16 px-4 md:px-8 bg-[#F3EBDD]/20 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-[34px] md:text-[42px] lg:text-[46px] text-[#000000] font-medium tracking-tight mb-14 text-center">
            Palavras de quem já passou por aqui
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 lg:gap-x-12 xl:gap-x-14 gap-y-12 justify-center items-stretch overflow-visible px-2 mb-12">
            {featuredReviews.map((rev, rIndex) => {
              const styleClass = rIndex === 0 ? "card-paper-light" : rIndex === 1 ? "card-olive" : "card-bordeaux";
              const isDark = styleClass.includes("olive") || styleClass.includes("bordeaux");
              const rotation = rIndex === 0 ? "rotate-[-1.4deg]" : rIndex === 1 ? "rotate-[0.4deg]" : "rotate-[-0.8deg]";
              const hasTape = rIndex !== 2;
              const tapeAngle = rIndex === 0 ? "rotate-[-2.2deg]" : "rotate-[1.8deg]";
              const hasClip = rIndex === 2;
              const flower = rIndex === 0 ? "sprig-left" : rIndex === 2 ? "sprig-right" : null;

              return (
                <div 
                  key={rev.id}
                  className={`relative flex flex-col justify-stretch overflow-visible transition-all duration-300 hover:scale-[1.03] filter drop-shadow-[3px_5px_8px_rgba(31,26,20,0.13)] hover:drop-shadow-[6px_12px_18px_rgba(31,26,20,0.20)] ${rotation} w-full max-w-[320px] lg:max-w-[290px] lg:w-[290px] min-h-[390px] mx-auto`}
                >
                  {/* Tapete/Tape centered on top, overlapping the cut border */}
                  {hasTape && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5.5 scrapbook-tape ${tapeAngle} opacity-90 z-20`} />
                  )}

                  {/* Paperclip attached at top edges, overlapping the cut border */}
                  {hasClip && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rotate-[5deg] z-30">
                      <div className="scrapbook-paperclip" />
                    </div>
                  )}

                  {/* Pressed Botanical Branch/Sprig (Left), bleeding off the bottom sides */}
                  {flower === 'sprig-left' && (
                    <BotanicalSprig className={`absolute -left-3.5 bottom-6 w-11 h-[110px] pointer-events-none select-none z-20 opacity-40 ${
                      isDark ? 'text-[#F1E5D6]/35' : 'text-[#5C3D2E]/30'
                    }`} />
                  )}

                  {/* Pressed Botanical Branch/Sprig (Right), bleeding off the bottom sides */}
                  {flower === 'sprig-right' && (
                    <BotanicalSprig className={`absolute -right-3.5 bottom-6 w-11 h-[110px] pointer-events-none select-none z-20 scale-x-[-1] opacity-40 ${
                      isDark ? 'text-[#F1E5D6]/35' : 'text-[#5C3D2E]/30'
                    }`} />
                  )}

                  {/* Card content wrapper (clipped using irregular deckle cut edge clip-path and styled with physically-fibrous texture) */}
                  <div className={`p-6 sm:p-8 pt-9 pb-8 flex flex-col justify-between h-full scrapbook-texture card-torn-${(rIndex % 3) + 1} ${styleClass}`}>
                    
                    {/* Large elegant quote mark at top left */}
                    <span className={`font-serif text-[42px] leading-none font-bold block mb-2 select-none -mt-2 ${
                      isDark ? 'text-[#C59B6A]/30' : 'text-[#B75E3C]/25'
                    }`}>
                      “
                    </span>

                    <div className="flex-grow flex flex-col justify-center">
                      <p className="text-[13.5px] leading-relaxed font-sans font-light italic mb-6">
                        {rev.text}
                      </p>
                    </div>

                    {/* Card Footer: centered text layout to match DEPOIMENTOS.png */}
                    <div className={`border-t pt-4 flex flex-col items-center justify-center text-center mt-auto ${
                      isDark ? 'border-[#F1E5D6]/15' : 'border-[#4A3428]/12'
                    }`}>
                      <span className="font-serif text-[15.5px] italic font-bold">
                        {rev.name}
                      </span>
                      <span className="text-[11px] font-sans tracking-wide uppercase mt-1 opacity-75">
                        {rev.location}
                      </span>

                      {/* 5-star rating underneath the location */}
                      <div className="flex items-center justify-center space-x-1 text-[#D6AF2A] mt-3 select-none">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#D6AF2A] stroke-[1.2] text-[#D6AF2A]" />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => handleTabClick('depoimentos')}
            className="text-[#B75E3C] hover:text-[#5A1F2E] font-sans text-[11.5px] font-bold tracking-widest uppercase inline-flex items-center space-x-1.5 border-b border-[#B75E3C]/25 pb-0.5 cursor-pointer transition-colors"
          >
            <span>Ver todos os depoimentos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      <SectionDivider />

      {/* 6. Refactored Instagram / Presence Gallery Section - as requested */}
      <section className="relative pt-0 pb-12 md:pb-14 px-4 md:px-8 bg-[#F3EBDD] overflow-hidden text-center">


        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-[34px] md:text-[42px] lg:text-[46px] text-[#000000] font-medium tracking-tight">
              Acompanhe a Suma no Instagram
            </h2>

            <p className="font-serif text-[15px] sm:text-[17.5px] text-[#000000] font-normal leading-relaxed text-center mt-3 max-w-2xl mx-auto">
              Reflexões, bastidores, símbolos, rituais e mensagens para acompanhar de perto. Um espaço mais leve, cotidiano e autoral para seguir a jornada da Sacerdotisa.
            </p>
          </div>

          {/* Cards grid: 3 cards horizontal/rectangular on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10 justify-center justify-items-center">
            
            {/* Card 1: Reflexões */}
            <div className="w-full max-w-[280px] md:max-w-[330px] min-h-[175px] py-6 px-6 border border-[rgba(214,175,42,0.45)] bg-[rgba(241,229,214,0.55)] rounded-[8px] flex flex-col items-center justify-center relative shadow-sm hover:border-[#D6AF2A]/80 transition-all duration-300">
              {/* Editorial double-line borders with mini corner brackets */}
              <div className="absolute inset-1.5 border border-[#D6AF2A]/15 rounded-[6px] pointer-events-none" />
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[#D6AF2A]/55" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-[#D6AF2A]/55" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-[#D6AF2A]/55" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[#D6AF2A]/55" />

              {/* Sunrise line-art icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#D6AF2A]/20 mb-3 bg-[#F4ECDD]/35">
                <svg viewBox="0 0 100 100" className="w-9 h-9 text-[#D6AF2A]" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round">
                  <circle cx="50" cy="54" r="10" />
                  <path d="M50,22 V35 M27,45 L36,50 M73,45 L64,50 M34,32 L42,41 M66,32 L58,41" />
                  <path d="M15,64 H85" strokeWidth="0.8" />
                  <path d="M25,69 H75" strokeWidth="0.8" strokeDasharray="1 3" />
                  <circle cx="50" cy="12" r="1.2" fill="currentColor" />
                </svg>
              </div>

              <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1F1A14]">
                Reflexões
              </h3>
              <p className="font-sans text-[9.5px] text-[#4A3428]/85 uppercase tracking-[0.16em] mt-1.5 font-medium">
                Palavras que guiam
              </p>
            </div>

            {/* Card 2: Bastidores */}
            <div className="w-full max-w-[280px] md:max-w-[330px] min-h-[175px] py-6 px-6 border border-[rgba(214,175,42,0.45)] bg-[rgba(241,229,214,0.55)] rounded-[8px] flex flex-col items-center justify-center relative shadow-sm hover:border-[#D6AF2A]/80 transition-all duration-300">
              <div className="absolute inset-1.5 border border-[#D6AF2A]/15 rounded-[6px] pointer-events-none" />
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[#D6AF2A]/55" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-[#D6AF2A]/55" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-[#D6AF2A]/55" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[#D6AF2A]/55" />

              {/* Celestial Eye icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#D6AF2A]/20 mb-3 bg-[#F4ECDD]/35">
                <svg viewBox="0 0 100 100" className="w-9 h-9 text-[#D6AF2A]" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round">
                  <path d="M18,50 Q50,23 82,50 Q50,77 18,50 Z" />
                  <circle cx="50" cy="50" r="10" />
                  <circle cx="50" cy="50" r="3.5" fill="currentColor" />
                  <path d="M50,16 V22 M32,24 L37,29 M68,24 L63,29" strokeWidth="0.9" />
                  <path d="M50,84 V78 M32,76 L37,71 M68,76 L63,71" strokeWidth="0.9" />
                </svg>
              </div>

              <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1F1A14]">
                Bastidores
              </h3>
              <p className="font-sans text-[9.5px] text-[#4A3428]/85 uppercase tracking-[0.16em] mt-1.5 font-medium">
                O que acontece por trás
              </p>
            </div>

            {/* Card 3: Símbolos */}
            <div className="w-full max-w-[280px] md:max-w-[330px] min-h-[175px] py-6 px-6 border border-[rgba(214,175,42,0.45)] bg-[rgba(241,229,214,0.55)] rounded-[8px] flex flex-col items-center justify-center relative shadow-sm hover:border-[#D6AF2A]/80 transition-all duration-300">
              <div className="absolute inset-1.5 border border-[#D6AF2A]/15 rounded-[6px] pointer-events-none" />
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[#D6AF2A]/55" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-[#D6AF2A]/55" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-[#D6AF2A]/55" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[#D6AF2A]/55" />

              {/* Mystical Hamsa Hand icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#D6AF2A]/20 mb-3 bg-[#F4ECDD]/35">
                <svg viewBox="0 0 100 100" className="w-9 h-9 text-[#D6AF2A]" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M38,80 L62,80 M42,80 V74 M58,80 V74" />
                  <path d="M50,22 C47,22 45,24 45,28 V50 M50,22 C53,22 55,24 55,28 V50" />
                  <path d="M45,28 C41,28 39,30 39,34 V52" />
                  <path d="M55,28 C59,28 61,30 61,34 V52" />
                  <path d="M39,52 C35,52 30,56 32,64 C33,68 38,72 50,72 C62,72 67,68 68,64 C70,56 65,52 61,52" />
                  <path d="M40,58 Q50,47 60,58 Q50,69 40,58 Z" strokeWidth="0.8" />
                  <circle cx="50" cy="58" r="2.5" fill="currentColor" />
                </svg>
              </div>

              <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1F1A14]">
                Símbolos
              </h3>
              <p className="font-sans text-[9.5px] text-[#4A3428]/85 uppercase tracking-[0.16em] mt-1.5 font-medium">
                Sinais que falam
              </p>
            </div>

          </div>

          {/* Button as the final element of the section */}
          <div className="flex flex-col items-center mt-12">
            <a
              href="https://www.instagram.com/a.sumasacerdotisa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2.5 bg-[#B75E3C] hover:bg-[#A94F32] text-[#F3EBDD] font-sans text-[11px] sm:text-[11.5px] font-bold tracking-[0.18em] uppercase px-8 py-4 sm:py-[15px] rounded-[4px] border border-[#D6AF2A]/65 transition-all duration-300 shadow-md active:scale-[0.98]"
            >
              <Instagram className="w-4.5 h-4.5 text-[#F3EBDD]" />
              <span>Seguir no Instagram</span>
            </a>
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* 7. Bottom Elegant Grand Banner "Tem uma pergunta ecoando por dentro?" - Refactored as requested */}
      <div className="w-full flex justify-center items-center px-4 pt-3 md:pt-5 pb-8 md:pb-10">
        <section className="w-full max-w-[1120px] relative overflow-hidden text-center rounded-[28px] bg-[#000000] text-[#F3EBDD] border border-[rgba(214,175,42,0.45)] shadow-2xl py-10 px-6 md:py-14 md:px-12">
        
        {/* Recessed thin gold border lines */}
        <div className="absolute inset-4 sm:inset-5.5 border border-[#D6AF2A]/25 rounded-[24px] pointer-events-none z-0" />
        
        {/* Decorative celestial corner overlays in gold */}
        {/* Top Left Corner */}
        <div className="absolute top-8 left-8 w-16 h-16 text-[#D6AF2A]/35 pointer-events-none select-none z-0 hidden sm:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
            <path d="M10,90 A80,80 0 0,1 90,10" strokeDasharray="1 3" />
            <path d="M20,80 A60,60 0 0,1 80,20" />
            <circle cx="25" cy="25" r="0.8" fill="currentColor" />
          </svg>
        </div>

        {/* Top Right Corner */}
        <div className="absolute top-8 right-8 w-16 h-16 text-[#D6AF2A]/35 pointer-events-none select-none z-0 hidden sm:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" className="scale-x-[-1]">
            <path d="M10,90 A80,80 0 0,1 90,10" strokeDasharray="1 3" />
            <path d="M20,80 A60,60 0 0,1 80,20" />
            <circle cx="25" cy="25" r="0.8" fill="currentColor" />
          </svg>
        </div>

        {/* Bottom Left Corner */}
        <div className="absolute bottom-8 left-8 w-16 h-16 text-[#D6AF2A]/35 pointer-events-none select-none z-0 hidden sm:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" className="scale-y-[-1]">
            <path d="M10,90 A80,80 0 0,1 90,10" strokeDasharray="1 3" />
            <path d="M20,80 A60,60 0 0,1 80,20" />
            <circle cx="25" cy="25" r="0.8" fill="currentColor" />
          </svg>
        </div>

        {/* Bottom Right Corner */}
        <div className="absolute bottom-8 right-8 w-16 h-16 text-[#D6AF2A]/35 pointer-events-none select-none z-0 hidden sm:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" className="scale-x-[-1] scale-y-[-1]">
            <path d="M10,90 A80,80 0 0,1 90,10" strokeDasharray="1 3" />
            <path d="M20,80 A60,60 0 0,1 80,20" />
            <circle cx="25" cy="25" r="0.8" fill="currentColor" />
          </svg>
        </div>

        {/* Left Side Sparkle/Star */}
        <div className="absolute left-6 sm:left-9 top-1/2 -translate-y-1/2 w-8 h-8 text-[#D6AF2A]/40 pointer-events-none select-none z-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M12,1 Q12,12 23,12 Q12,12 12,23 Q12,12 1,12 Q12,12 12,1" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* Right Side Sparkle/Star */}
        <div className="absolute right-6 sm:right-9 top-1/2 -translate-y-1/2 w-8 h-8 text-[#D6AF2A]/40 pointer-events-none select-none z-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M12,1 Q12,12 23,12 Q12,12 12,23 Q12,12 1,12 Q12,12 12,1" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* Top Border Interruption with Star */}
        <div className="absolute top-4 sm:top-5.5 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000] px-4.5 py-0.5 flex items-center justify-center space-x-1.5 z-10 w-28 text-center select-none">
          <div className="h-[0.5px] w-5 bg-[#D6AF2A]/55" />
          <span className="text-[#D6AF2A] text-xs font-serif leading-none">✦</span>
          <div className="h-[0.5px] w-5 bg-[#D6AF2A]/55" />
        </div>

        {/* Bottom Border Interruption with Star */}
        <div className="absolute bottom-4 sm:bottom-5.5 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#000000] px-4.5 py-0.5 flex items-center justify-center space-x-1.5 z-10 w-28 text-center select-none">
          <div className="h-[0.5px] w-5 bg-[#D6AF2A]/55" />
          <span className="text-[#D6AF2A] text-xs font-serif leading-none">✦</span>
          <div className="h-[0.5px] w-5 bg-[#D6AF2A]/55" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto py-2 px-2 sm:px-4">

          {/* Title - splits into two lines beautifully */}
          <h2 className="font-serif text-[34px] md:text-[42px] lg:text-[46px] text-[#F3EBDD] font-medium leading-tight mb-3.5 tracking-tight text-center pt-2 sm:pt-4">
            Tem uma pergunta ecoando<br className="hidden sm:inline" /> por dentro?
          </h2>

          {/* Golden ornamental double-line divider below title */}
          <div className="flex items-center justify-center space-x-3 w-36 mb-4 mx-auto opacity-35 select-none">
            <div className="h-[0.5px] w-10 bg-[#D6AF2A]" />
            <span className="text-[#D6AF2A] text-[9px]">✦</span>
            <div className="h-[0.5px] w-10 bg-[#D6AF2A]" />
          </div>

          {/* Description */}
          <p className="font-serif text-[15px] sm:text-[17.5px] text-[#F3EBDD]/90 font-normal leading-relaxed text-center mt-3 max-w-2xl mx-auto mb-7">
            Não espere do Tarot sentenças deterministas arbitrárias. Receba um aconselhamento terapêutico feito sob absoluto sigilo ético, presença integral e intuição desperta.
          </p>

          {/* Buttons Area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#6F7A4E]/8 hover:bg-[#6F7A4E]/18 text-[#F3EBDD] font-sans text-[11px] sm:text-[11.5px] font-bold tracking-[0.16em] uppercase px-5.5 py-3 rounded-[8px] border border-[#6F7A4E] transition-all duration-300 shadow-md active:scale-[0.98]"
            >
              <WhatsappIcon className="w-4 h-4 text-[#6F7A4E] fill-[#6F7A4E]" />
              <span>Agendar pelo WhatsApp</span>
            </a>

            {/* Email CTA */}
            <a
              href={EMAIL_LINK}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#3F7FBF]/8 hover:bg-[#3F7FBF]/18 text-[#F3EBDD] font-sans text-[11px] sm:text-[11.5px] font-bold tracking-[0.16em] uppercase px-5.5 py-3 rounded-[8px] border border-[#3F7FBF] transition-all duration-300 shadow-md active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-[#3F7FBF]" />
              <span>Enviar e-mail</span>
            </a>
          </div>

        </div>
      </section>
    </div>

    </motion.div>
  );

  function handleTabClick(tab: Page) {
    setTab(tab);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }
}

// Hand-drawn SVG representing a delicate pressed botanical branch with leaves
function BotanicalSprig({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 200" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M50,190 C50,140 45,70 55,15" />
      <path d="M50,170 C38,165 32,150 40,142 C45,138 49,152 50,158" />
      <path d="M50,165 C62,160 68,145 60,137 C55,133 51,147 50,153" />
      
      <path d="M49,135 C35,130 28,115 37,105 C42,99 47,112 49,120" />
      <path d="M50,128 C64,123 71,108 62,98 C57,92 52,105 50,113" />
      
      <path d="M48,95 C32,90 25,75 35,65 C40,59 46,72 48,80" />
      <path d="M50,88 C66,83 73,68 63,58 C58,52 52,65 50,73" />
      
      <path d="M49,55 C35,50 30,35 40,25 C44,21 48,32 49,40" />
      <path d="M51,48 C65,43 70,28 60,18 C56,14 52,25 51,33" />
      
      <path d="M52,22 C48,15 45,2 53,5 C55,7 54,15 52,22" />
    </svg>
  );
}

// Hand-drawn SVG representing a dried wildflower/violet bud
function DriedFlower({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 150" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M50,140 C50,115 48,90 52,55" />
      <path d="M49,110 C42,108 38,102 44,98 C46,96 48,103 49,105" />
      <path d="M51,95 C58,93 62,87 56,83 C54,81 52,88 51,90" />
      <g fill="currentColor" fillOpacity="0.25">
        <path d="M52,55 C52,40 45,30 35,38 C28,44 40,50 49,53" />
        <path d="M52,55 C65,45 68,32 58,28 C52,25 50,40 50,51" />
        <path d="M52,55 C42,50 30,55 32,65 C33,72 44,62 49,56" />
        <path d="M52,55 C62,60 72,62 70,50 C68,42 58,50 51,54" />
        <path d="M52,55 C48,35 52,20 60,18 C65,16 58,35 53,50" />
      </g>
      <circle cx="51" cy="53" r="5" fill="currentColor" />
    </svg>
  );
}

// Custom hand-drawn style Eye Icon for Card 1
function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M15,30 C35,10 65,10 85,30" />
      <path d="M15,30 C35,50 65,50 85,30" />
      <path d="M15,30 L5,30" />
      <path d="M85,30 L95,30" />
      <circle cx="50" cy="30" r="11" />
      <circle cx="50" cy="30" r="5" fill="currentColor" />
      <circle cx="50" cy="40" r="1.5" fill="currentColor" />
      <path d="M50,8 L50,15" />
      <path d="M50,45 L50,52" />
      <circle cx="32" cy="22" r="1" fill="currentColor" />
      <circle cx="68" cy="22" r="1" fill="currentColor" />
    </svg>
  );
}

// Custom 8-pointed celestial Star Compass for Card 2
function StarCompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="2 2 96 96" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M50,10 L50,90" />
      <path d="M10,50 L90,50" />
      <path d="M22,22 L78,78" />
      <path d="M22,78 L78,22" />
      <path d="M50,30 L54,46 L70,50 L54,54 L50,70 L46,54 L30,50 L46,46 Z" fill="currentColor" fillOpacity="0.1" />
      <circle cx="50" cy="10" r="1.5" fill="currentColor" />
      <circle cx="50" cy="90" r="1.5" fill="currentColor" />
      <circle cx="10" cy="50" r="1.5" fill="currentColor" />
      <circle cx="90" cy="50" r="1.5" fill="currentColor" />
      <circle cx="50" cy="50" r="18" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="3" fill="currentColor" />
    </svg>
  );
}

// Custom Crescent Moon & Sparkles for Card 3
function CrescentMoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="10 10 80 80" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M40,20 C62,20 75,35 70,60 C65,80 48,85 30,75 C48,75 58,60 52,42 C48,28 38,22 40,20 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M68,25 L68,35 M63,30 L73,30" strokeWidth="1" />
      <path d="M25,50 L25,56 M22,53 L28,53" strokeWidth="1" />
      <path d="M55,75 L55,81 M52,78 L58,78" strokeWidth="1" />
      <path d="M30,30 A25,25 0 0,1 60,65" strokeDasharray="2 3" />
    </svg>
  );
}

// Custom elegant divider horizontal lines with circles
function DividerOrnament({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M10,5 L50,5" />
      <circle cx="55" cy="5" r="2" fill="currentColor" />
      <path d="M55,2 L55,8" />
      <circle cx="65" cy="5" r="2" fill="currentColor" />
      <path d="M70,5 L110,5" />
    </svg>
  );
}

// Side botanical branch with delicate hand-drawn leaves
function SideBranchLeft({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 300" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Stem */}
      <path d="M55,290 Q40,190 52,90 T48,10" stroke="#6F7A4E" strokeOpacity="0.7" strokeWidth="1.2" />
      <path d="M55,290 Q40,190 52,90 T48,10" stroke="#4A3428" strokeOpacity="0.18" strokeWidth="0.8" />
      
      {/* Leaves Group */}
      <g stroke="#6F7A4E" strokeOpacity="0.65" fill="#6F7A4E" fillOpacity="0.12">
        {/* Y ~ 240 */}
        <path d="M47,240 C34,235 24,222 24,210 C24,198 38,205 47,240 Z" />
        <path d="M48,241 C60,238 70,228 70,215 C70,202 58,208 48,241 Z" />
        
        {/* Y ~ 190 */}
        <path d="M44,190 C32,185 22,175 22,165 C22,155 34,160 44,190 Z" />
        <path d="M45,190 C56,188 66,180 66,170 C66,160 55,166 45,190 Z" />
        
        {/* Y ~ 140 */}
        <path d="M45,140 C34,136 25,125 25,115 C25,105 36,110 45,140 Z" />
        <path d="M46,140 C56,138 65,130 65,122 C65,112 56,118 46,140 Z" />
        
        {/* Y ~ 90 */}
        <path d="M49,90 C40,86 32,78 32,70 C32,62 42,66 49,90 Z" />
        <path d="M50,90 C58,88 64,80 64,73 C64,65 56,70 50,90 Z" />
        
        {/* Y ~ 40 */}
        <path d="M49,40 C42,37 36,31 36,25 C36,19 44,22 49,40 Z" />
        <path d="M49,40 C56,38 60,33 60,27 C60,21 54,24 49,40 Z" />
        
        {/* Y ~ 10 */}
        <path d="M48,10 C44,7 44,4 48,2 C52,4 52,7 48,10 Z" />
      </g>

      {/* Leaf Veins */}
      <g stroke="#6F7A4E" strokeOpacity="0.4" strokeWidth="0.8">
        <path d="M47,240 C38,228 31,219 24,210" />
        <path d="M48,241 C57,230 64,222 70,215" />
        <path d="M44,190 C35,180 28,172 22,165" />
        <path d="M45,190 C53,182 60,176 66,170" />
        <path d="M45,140 C37,130 31,122 25,115" />
        <path d="M46,140 C54,133 60,127 65,122" />
        <path d="M49,90 C42,82 37,76 32,70" />
        <path d="M50,90 C56,83 60,78 64,73" />
        <path d="M49,40 C44,34 40,29 36,25" />
        <path d="M49,40 C53,35 56,31 60,27" />
        <path d="M48,10 L48,2" />
      </g>
    </svg>
  );
}

// Dried vertical branch/stem elegantly growing from below
function PressedBranchCenter({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 280" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Stem */}
      <path d="M50,275 C42,210 55,145 46,80 C41,45 52,20 48,5" stroke="#6F7A4E" strokeOpacity="0.7" strokeWidth="1.2" />
      <path d="M50,275 C42,210 55,145 46,80 C41,45 52,20 48,5" stroke="#4A3428" strokeOpacity="0.18" strokeWidth="0.8" />
      
      {/* Leaves group with fill and stroke */}
      <g stroke="#6F7A4E" strokeOpacity="0.65" fill="#6F7A4E" fillOpacity="0.12">
        {/* Leaf Pair 1 (Y ~ 220) */}
        <path d="M46,220 C32,215 24,200 32,192 C38,188 42,202 46,220 Z" />
        <path d="M46,220 C58,215 64,200 56,192 C50,188 46,202 46,220 Z" />
        
        {/* Leaf Pair 2 (Y ~ 170) */}
        <path d="M49,170 C36,165 30,150 40,140 C45,135 48,150 49,170 Z" />
        <path d="M49,170 C61,163 66,148 56,140 C51,135 49,150 49,170 Z" />
        
        {/* Leaf Pair 3 (Y ~ 120) */}
        <path d="M47,120 C35,116 28,102 36,94 C41,90 45,104 47,120 Z" />
        <path d="M47,120 C58,114 64,100 56,92 C51,88 47,104 47,120 Z" />
        
        {/* Leaf Pair 4 (Y ~ 75) */}
        <path d="M45,75 C35,72 30,60 38,52 C43,48 45,60 45,75 Z" />
        <path d="M45,75 C55,71 60,59 52,52 C47,48 45,60 45,75 Z" />
        
        {/* Leaf Pair 5 (Y ~ 35) */}
        <path d="M49,35 C42,32 37,24 43,18 C47,15 49,24 49,35 Z" />
        <path d="M49,35 C56,32 60,24 54,18 C50,15 49,24 49,35 Z" />
      </g>

      {/* Delicate inner veins */}
      <g stroke="#6F7A4E" strokeOpacity="0.4" strokeWidth="0.8">
        <path d="M46,220 C39,206 35,198 32,192" />
        <path d="M46,220 C51,206 54,198 56,192" />
        <path d="M49,170 C44,155 41,146 40,140" />
        <path d="M49,170 C53,155 55,146 56,140" />
        <path d="M47,120 C41,107 38,99 36,94" />
        <path d="M47,120 C51,107 53,99 56,92" />
        <path d="M45,75 C41,63 39,56 38,52" />
        <path d="M45,75 C48,63 50,56 52,52" />
        <path d="M49,35 C46,26 44,21 43,18" />
        <path d="M49,35 C51,26 52,21 54,18" />
      </g>
    </svg>
  );
}
