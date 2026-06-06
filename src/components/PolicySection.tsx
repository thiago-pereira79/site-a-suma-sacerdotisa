import { Fragment } from 'react';
import { 
  Calendar, 
  Clock, 
  AlertTriangle, 
  RefreshCw, 
  HelpCircle, 
  Lock
} from 'lucide-react';
import { motion } from 'motion/react';
import { BackButton } from './BackButton';

// Delicate Sparkle symbol used inline for boho dividers and card indicators
const SparkleSymbol = ({ className = "w-5 h-5 text-[#D6AF2A]" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

// Horizontal organic botanical divider line
const MysticDivider = () => (
  <div className="flex items-center justify-center gap-4 w-full max-w-sm mx-auto my-5 opacity-70">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9B89D] to-[#D8C6A8] flex-grow" />
    <SparkleSymbol className="w-4 h-4 text-[#D6AF2A] animate-pulse" />
    <div className="h-[1px] bg-gradient-to-l from-transparent via-[#C9B89D] to-[#D8C6A8] flex-grow" />
  </div>
);

export function PolicySection() {
  const policies = [
    {
      id: 'agendamentos',
      num: '01',
      title: 'Agendamentos',
      icon: <Calendar className="w-5 h-5 text-[#D6AF2A]" />,
      items: [
        'Consultas são realizadas somente após a confirmação do pagamento;',
        'O comprovante de pagamento Pix deve ser enviado via WhatsApp;',
        'Prazo de confirmação da agenda: até 12 horas úteis após o pagamento;',
        'A leitura será iniciada após o envio do comprovante correspondente.'
      ]
    },
    {
      id: 'entrega',
      num: '02',
      title: 'Tempo de Entrega',
      icon: <Clock className="w-5 h-5 text-[#D6AF2A]" />,
      items: [
        'Consultas ocorrem no formato de foto nítida e gravação de áudio explicativo;',
        'Mandala Astrológica e Mesa Real possuem prazo de entrega de até 48 horas úteis após o acerto;',
        'As demais consultas gerais são realizadas rigorosamente no horário agendado;',
        'O consulente receberá todo o material explicativo diretamente via WhatsApp.'
      ]
    },
    {
      id: 'cancelamentos',
      num: '03',
      title: 'Cancelamentos',
      icon: <AlertTriangle className="w-5 h-5 text-[#D6AF2A]" />,
      items: [
        'Cancelamentos devem ser solicitados com no mínimo 24 horas de antecedência;',
        'Para cancelamentos dentro do prazo, reembolso de 50% do valor pago;',
        'Após o início da leitura das cartas ou tiragem enviada, não há qualquer tipo de reembolso.'
      ]
    },
    {
      id: 'reagendamentos',
      num: '04',
      title: 'Reagendamentos',
      icon: <RefreshCw className="w-5 h-5 text-[#D6AF2A]" />,
      items: [
        'Reagendamentos são permitidos sem custo adicional se respeitado o prazo;',
        'Solicite reagendamento com até 12 horas de antecedência da hora marcada;',
        'Limite máximo de até 2 reagendamentos por consulta.'
      ]
    },
    {
      id: 'gerais',
      num: '05',
      title: 'Informações Gerais',
      icon: <HelpCircle className="w-5 h-5 text-[#D6AF2A]" />,
      items: [
        'Confidencialidade: todas as consultas são tratadas com absoluto sigilo e respeito sagrado;',
        'Responsabilidade: o Tarot é ferramenta de autoconhecimento e não substitui aconselhamento médico, clinical ou psicológico;',
        'Material da consulta: você receberá fotos detalhadas das cartas e áudio explicativo completo.'
      ]
    },
    {
      id: 'sigilo',
      num: '06',
      title: 'Sigilo e Limites',
      icon: <Lock className="w-5 h-5 text-[#D6AF2A]" />,
      items: [
        'Seu momento é sagrado; tudo é tratado com profundo respeito, sigilo total e ética oracular;',
        'Não realizo trabalhos espirituais, amarrações, magias ou promessas milagrosas;',
        'Atendo estritamente maiores de 18 anos;',
        'Não realizo consultas para terceiros sem a devida autorização.'
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="pt-4 sm:pt-6 pb-12 md:pb-16 px-4 md:px-8 max-w-7xl mx-auto text-[#11100C] selection:bg-[#B75E3C]/20 selection:text-[#5A1F2E] relative"
    >
      {/* 2. Top Navigation Back Button in Light styling */}
      <BackButton variant="light" className="pb-6" />


      {/* 1. TOPO / HERO DA PÁGINA (No Tarot card, clean and centered) */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-16 pt-2">
        <h1 className="font-serif text-[42px] sm:text-[54px] text-[#000000] font-medium tracking-tight leading-tight">
          Política de Consulta
        </h1>

        <p className="text-[#000000] font-serif text-[15px] sm:text-[17.5px] mt-3 leading-relaxed max-w-2xl mx-auto font-normal">
          Transparência, respeito e ética profissional na condução de cada atendimento oracular. Leia com atenção.
        </p>
      </div>

      {/* 2. LAYOUT PRINCIPAL (Two columns on desktop, stacked on mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-5.5xl mx-auto items-start mb-0">
        
        {/* COLUNA ESQUERDA: Sidebar Index and note (4 cols) */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          
          {/* Index Box */}
          <div className="relative p-6 sm:p-7 bg-[#FAF6EE] border border-[#D8C6A8] rounded-2xl shadow-[0_3px_15px_rgba(74,52,40,0.02)] overflow-hidden text-left">
            {/* scrapbook tape top center */}
            <div 
              className="absolute top-[-11px] left-1/2 -translate-x-1/2 w-20 h-5.5 bg-[#D8C6A8]/50 border-l border-r border-dashed border-[#4A3428]/15 rotate-[1.5deg] z-15" 
              style={{ clipPath: 'polygon(1% 5%, 99% 10%, 94% 92%, 6% 90%)' }}
            />
            
            <h3 className="font-serif text-[15px] font-bold text-[#4B3427] tracking-wider text-center border-b border-[#D8C6A8]/30 pb-2 mb-4">
              ÍNDICE
            </h3>
            
            <nav className="flex flex-col space-y-3">
              {policies.map((p) => (
                <a 
                  key={p.num} 
                  href={`#section-${p.id}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`section-${p.id}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex items-baseline gap-2 py-0.5 text-[13.5px] text-[#4A3428] hover:text-[#D6AF2A] transition-colors"
                >
                  <span className="font-serif text-[11.5px] font-bold text-[#D6AF2A]">{p.num}.</span>
                  <span className="font-serif font-medium border-b border-transparent group-hover:border-[#D6AF2A]/25 pb-0.5 transition-all">{p.title}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Nosso compromisso paper-note card */}
          <div className="relative p-6 bg-[#FAF6EE] border border-[#D8C6A8] rounded-2xl text-center space-y-4 shadow-[0_3px_15px_rgba(74,52,40,0.02)]">
            {/* washi scrapbook tape top center */}
            <div 
              className="absolute top-[-11px] left-1/2 -translate-x-1/2 w-22 h-5.5 bg-[#D8C6A8]/55 border-l border-r border-dashed border-[#4A3428]/15 rotate-[-2.5deg] z-15" 
              style={{ clipPath: 'polygon(5% 5%, 95% 12%, 100% 88%, 0% 95%)' }}
            />
            
            <p className="font-serif text-[12.5px] text-[#4B3427]/95 font-medium leading-relaxed mt-1.5 px-1 select-none">
              "Meu compromisso é oferecer uma orientação segura, acolhedora e respeitosa, para que você se sinta à vontade durante todo o processo."
            </p>

            {/* Custom hand-made delicate heart SVG */}
            <div className="flex justify-center text-[#D6AF2A]/80">
              <svg className="w-5 h-5 flex shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          {/* Card de concordância do agendamento */}
          <div className="relative p-6 border border-[#D8C6A8] bg-[#FAF6EE]/55 rounded-2xl flex items-center justify-center text-center shadow-[inset_0_1px_3px_rgba(74,52,40,0.01)] animate-fade-in">
            {/* tape strip centered top */}
            <div 
              className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-24 h-5.5 bg-[#D8C6A8]/50 border-l border-r border-[#4A3428]/12 rotate-[-0.5deg]" 
              style={{ clipPath: 'polygon(3% 10%, 97% 5%, 100% 90%, 0% 95%)' }} 
            />
            
            <p className="font-serif text-[12.5px] text-[#4B3427]/95 font-medium leading-relaxed px-1 select-none">
              ✦ Ao agendar qualquer consulta e realizar o Pix correspondente, você concorda plenamente com os termos de nossa política. ✦
            </p>
          </div>

        </div>

        {/* COLUNA DIREITA: Cards of sections (8 cols) */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-left">
          {policies.map((policy) => (
            <div 
              key={policy.num}
              id={`section-${policy.id}`} 
              className="scroll-mt-24 p-6 sm:p-8 bg-[#FAF6EE] border border-[#D8C6A8] rounded-2xl relative shadow-[0_3px_15px_rgba(74,52,40,0.02)] transition-all duration-300 hover:shadow-[0_6px_22px_rgba(74,52,40,0.04)]"
            >
              {/* Delicate 4-point sparkle in the card background */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[#D6AF2A]/30 pointer-events-none select-none">
                <SparkleSymbol className="w-5 h-5 animate-pulse" />
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                
                {/* 3. Circular delicate icon container on the left */}
                <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-[#D8C6A8] bg-[#FAF6EE]/80 shadow-[inset_0_1px_3px_rgba(74,52,40,0.03)] shrink-0 select-none">
                  <div className="absolute inset-1 rounded-full border border-dashed border-[#D6AF2A]/35" />
                  <span className="text-[#D6AF2A] scale-100 relative z-10">
                    {policy.icon}
                  </span>
                </div>

                {/* Card textual content and titles */}
                <div className="flex-grow space-y-4">
                  
                  {/* Card Section Header */}
                  <div className="border-b border-[#D8C6A8]/30 pb-2.5">
                    <span className="font-serif text-[12.5px] font-bold text-[#D6AF2A] uppercase tracking-[0.15em] block mb-0.5">
                      {policy.num}.
                    </span>
                    <h2 className="font-serif text-[19px] sm:text-[21px] font-semibold text-[#000000] tracking-tight">
                      {policy.title}
                    </h2>
                  </div>

                  {/* Bullet listings */}
                  <ul className="space-y-3.5 pl-0.5">
                    {policy.items.map((bullet, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-2.5 text-[13.5px] sm:text-[14px] text-[#4A3428]/90 font-sans leading-relaxed font-light"
                      >
                        {/* Custom delicate Plus bullet */}
                        <span className="text-[#D6AF2A] font-extrabold mt-1 shrink-0 text-[11px] select-none leading-none">
                          +
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </motion.div>
  );
}
