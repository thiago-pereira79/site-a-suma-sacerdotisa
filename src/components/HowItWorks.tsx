import React, { useState } from 'react';
import { Page } from '../types';
import { Sparkles, MessageCircle, Moon, Star, Mail, Compass, Eye, Heart, HelpCircle, ChevronRight, ArrowRight, BookOpen, Clock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BackButton } from './BackButton';
import { SectionDivider } from './SectionDivider';

interface HowItWorksProps {
  setTab: (tab: Page) => void;
}

export function HowItWorks({ setTab }: HowItWorksProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="pt-4 sm:pt-6 pb-12 md:pb-16 px-4 md:px-8 max-w-7xl mx-auto text-[#11100C] bg-[#F3EBDD]/40 selection:bg-[#B75E3C]/20 selection:text-[#5A1F2E]"
    >
      <BackButton />

      {/* Page Header */}
      <div className="text-center mb-14 relative mt-4">
        <h1 className="font-serif text-[42px] sm:text-[54px] text-[#000000] font-medium tracking-tight">
          Como a leitura acontece
        </h1>
        <p className="text-[#000000] font-serif text-[15px] sm:text-[17.5px] mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
          Um processo simples, profundo e acolhedor para iluminar o que precisa ser visto.
        </p>
      </div>

      {/* Your Journey in 4 Steps - COMO FUNCIONA.png */}
      <section className="mb-16 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Você envia sua pergunta',
              desc: 'Compartilhe sua dúvida, tema ou momento atual de forma clara e detalhada. Quanto mais contexto, melhor.',
              botany: (
                <svg viewBox="0 0 40 80" className="w-10 h-16 text-[#D6AF2A]/80 fill-none opacity-85 mt-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20,80 Q18,50 20,20 Q22,40 32,32 M20,55 Q10,48 8,42 M20,35 Q12,28 15,22 M20,25 Q28,15 25,10" />
                  <circle cx="32" cy="32" r="1.5" className="fill-[#D6AF2A]/80" />
                  <circle cx="8" cy="42" r="1.5" className="fill-[#D6AF2A]/80" />
                  <circle cx="15" cy="22" r="1.5" className="fill-[#D6AF2A]/80" />
                  <circle cx="25" cy="10" r="1.5" className="fill-[#D6AF2A]/80" />
                </svg>
              )
            },
            {
              step: '02',
              title: 'A leitura é preparada',
              desc: 'Conecto-me à sua energia, às cartas e à sabedoria do Tarot para trazer clareza, conselhos e caminhos possíveis.',
              botany: (
                <svg viewBox="0 0 40 80" className="w-10 h-16 text-[#D6AF2A]/80 fill-none opacity-85 mt-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20,80 Q22,50 16,15 M18,60 Q8,52 11,45 M19,45 Q30,38 28,30 M17,30 Q9,24 13,18" />
                  <path d="M11,45 C9,40 14,42 18,50 C18,50 14,48 11,45 Z" className="fill-[#D6AF2A]/15" />
                  <path d="M28,30 C30,25 25,27 20,38 C20,38 24,34 28,30 Z" className="fill-[#D6AF2A]/15" />
                  <path d="M13,18 C11,13 16,15 18,25 C18,25 15,21 13,18 Z" className="fill-[#D6AF2A]/15" />
                </svg>
              )
            },
            {
              step: '03',
              title: 'Você recebe a orientação',
              desc: 'Envio um material detalhado com fotos das cartas e um áudio explicativo com todas as mensagens e insights da leitura.',
              botany: (
                <svg viewBox="0 0 40 80" className="w-10 h-16 text-[#D6AF2A]/80 fill-none opacity-85 mt-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20,80 L20,40 Q15,45 8,35 M20,55 Q28,45 32,50 M20,30 Q25,25 20,10 M20,30 Q12,20 15,15" strokeWidth="1.1" />
                  <circle cx="8" cy="35" r="2" className="fill-[#D6AF2A]/80" />
                  <circle cx="32" cy="50" r="2" className="fill-[#D6AF2A]/80" />
                  <circle cx="20" cy="10" r="2" className="fill-[#D6AF2A]/80" />
                  <circle cx="15" cy="15" r="2" className="fill-[#D6AF2A]/80" />
                </svg>
              )
            },
            {
              step: '04',
              title: 'Você pode revisitar',
              desc: 'Guarde suas mensagens e ouça quantas vezes quiser. A leitura é sua, para te acompanhar sempre que precisar.',
              botany: (
                <svg viewBox="0 0 40 80" className="w-10 h-16 text-[#D6AF2A]/80 fill-none opacity-85 mt-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20,80 Q20,50 20,25" />
                  <path d="M20,25 Q12,12 20,6 Q28,12 20,25 Z" className="fill-[#D6AF2A]/15" />
                  <path d="M20,35 Q30,26 31,18 M20,45 Q10,38 9,30" stroke="currentColor" strokeWidth="1" />
                  <circle cx="20" cy="6" r="3" className="fill-[#D6AF2A]/80" />
                  <circle cx="31" cy="18" r="2.5" className="fill-[#D6AF2A]/80" />
                  <circle cx="9" cy="30" r="2.5" className="fill-[#D6AF2A]/80" />
                </svg>
              )
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="relative p-6 sm:p-8 bg-[#EFE5D4] border border-[#C9B89D] rounded-[4px] flex flex-col items-center hover:border-[#D6AF2A]/55 transition-[border-color] duration-300 min-h-[350px] shadow-[2px_6px_16px_rgba(74,52,40,0.06)] h-full justify-between"
            >
              {/* Card Header with circular numbered indicator */}
              <div className="flex flex-col items-center w-full">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#D6AF2A] text-[#EFE5D4] font-serif font-semibold text-[13px] sm:text-[14px] flex items-center justify-center shadow-[0_2px_4px_rgba(74,52,40,0.12)] selection:bg-[#EFE5D4] selection:text-[#D6AF2A]">
                  {item.step}
                </div>
                
                {/* Centered card title */}
                <h3 className="font-serif text-[15px] sm:text-[16px] text-[#11100C] font-semibold text-center mt-4 tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Golden star/compass divider below title */}
                <div className="flex items-center justify-center space-x-2 my-2.5 opacity-80 select-none">
                  <div className="h-[0.5px] w-5 bg-[#D6AF2A]/40" />
                  <span className="text-[#D6AF2A] text-[8px]">✦</span>
                  <div className="h-[0.5px] w-5 bg-[#D6AF2A]/40" />
                </div>

                {/* Centered detailed text description */}
                <p className="text-[12.2px] sm:text-[12.8px] text-[#4A3428] leading-relaxed font-sans font-normal text-center max-w-xs">
                  {item.desc}
                </p>
              </div>

              {/* Custom botanical element in card base */}
              <div className="flex justify-center w-full select-none">
                {item.botany}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delicate centered ribbon banner matching the reference image */}
      <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-16 max-w-[800px] mx-auto px-4">


        {/* Small Elegant Ribbon Banner */}
        <div className="bg-[#667246] text-[#FFF6E5] font-serif italic text-[14px] sm:text-[15.5px] md:text-[16.5px] text-center px-6 sm:px-10 py-4 sm:py-4.5 rounded-[4px] shadow-[0_4px_16px_rgba(74,52,40,0.08)] max-w-[580px] w-full flex items-center justify-center min-h-[56px] sm:min-h-[64px] border border-[#6F7A4E]/30">
          <p className="leading-relaxed font-normal">
            Cada leitura é única e feita com presença, intuição e respeito à sua história.
          </p>
        </div>


      </div>

      {/* 3-Column Info Banner below the Ribbon Banner */}
      <div className="max-w-[960px] mx-auto mb-12 md:mb-16 px-4">
        <div className="relative bg-[#EFE5D4] border border-[#C9B89D] py-6 sm:py-8 px-5 sm:px-10 rounded-[2px] shadow-[0_2px_12px_rgba(31,26,20,0.04)] overflow-hidden">
          {/* No paper texture overlay here */}

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr] gap-6 md:gap-0 items-center">
            
            {/* Column 1 - Escuta profunda */}
            <div className="flex items-center space-x-4 px-2 md:px-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D6AF2A]/60 flex items-center justify-center bg-[#D6AF2A]/5 shadow-sm shrink-0 select-none">
                <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#D6AF2A]" stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="round">
                  <path d="M8 21h8" />
                  <rect x="10" y="12" width="4" height="9" rx="0.5" />
                  <path d="M12 6c0 0 2.5 3 2.5 4.5a2.5 2.5 0 0 1-5 0C9.5 9 12 6 12 6z" fill="currentColor" fillOpacity="0.1" />
                  <circle cx="12" cy="10.5" r="7" strokeDasharray="1 2" className="opacity-60" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif font-semibold text-[14.5px] sm:text-[15.5px] text-[#11100C] tracking-tight">
                  Escuta profunda
                </h4>
                <p className="text-[12.2px] sm:text-[12.8px] text-[#4A3428] mt-0.5 font-sans leading-relaxed font-normal">
                  Cada história é lida e feita com presença.
                </p>
              </div>
            </div>

            {/* Divider column 1-2 */}
            <div className="hidden md:block h-8 w-[1px] bg-[#C9B89D]" />

            {/* Column 2 - Ética e sigilo */}
            <div className="flex items-center space-x-4 px-2 md:px-4 border-t border-dashed border-[#C9B89D]/40 pt-5 md:pt-0 md:border-t-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D6AF2A]/60 flex items-center justify-center bg-[#D6AF2A]/5 shadow-sm shrink-0 select-none">
                <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#D6AF2A]" stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="1.5" />
                  <path d="M3 7l9 6 9-6" />
                  <circle cx="12" cy="13" r="2.5" className="fill-[#D6AF2A]/15" />
                  <path d="M12 11.5v3M10.5 13h3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif font-semibold text-[14.5px] sm:text-[15.5px] text-[#11100C] tracking-tight">
                  Ética e sigilo
                </h4>
                <p className="text-[12.2px] sm:text-[12.8px] text-[#4A3428] mt-0.5 font-sans leading-relaxed font-normal">
                  Seu momento e sua história são tratados com respeito.
                </p>
              </div>
            </div>

            {/* Divider column 2-3 */}
            <div className="hidden md:block h-8 w-[1px] bg-[#C9B89D]" />

            {/* Column 3 - Transformação */}
            <div className="flex items-center space-x-4 px-2 md:px-4 border-t border-dashed border-[#C9B89D]/40 pt-5 md:pt-0 md:border-t-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D6AF2A]/60 flex items-center justify-center bg-[#D6AF2A]/5 shadow-sm shrink-0 select-none">
                <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#D6AF2A]" stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="22" x2="12" y2="5" />
                  <path d="M12 17c4-2 4-6 0-9c-4 3-4 7 0 9z" fill="currentColor" fillOpacity="0.1" />
                  <path d="M12 13c3-1.5 3-4.5 0-7c-3 2.5-3 5.5 0 7z" />
                  <path d="M12 2a2 2 0 0 1 2 2c0 2-2 4-2 4s-2-2-2-4a2 2 0 0 1 2-2z" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif font-semibold text-[14.5px] sm:text-[15.5px] text-[#11100C] tracking-tight">
                  Transformação
                </h4>
                <p className="text-[12.2px] sm:text-[12.8px] text-[#4A3428] mt-0.5 font-sans leading-relaxed font-normal">
                  Mais clareza para escolhas alinhadas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <SectionDivider />

      {/* SEÇÃO 3 — “DÚVIDAS FREQUENTES” */}
      <section className="mb-0 max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 mb-10 select-none">
          <span className="text-[#D6AF2A] text-lg sm:text-xl">✦</span>
          <h2 className="font-serif text-[28px] md:text-[34px] lg:text-[38px] text-[#000000] font-semibold leading-tight tracking-tight text-center">
            Dúvidas frequentes
          </h2>
          <span className="text-[#D6AF2A] text-lg sm:text-xl">✦</span>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Accordion with 8 FAQ questions inside a clean, centered layout */}
          <div className="bg-[#FDFBF7]/45 p-6 sm:p-8 rounded-2xl border border-[#D8CFC0]/50 shadow-[0_4px_20px_rgba(17,16,12,0.02)] relative z-10">
            {[
              {
                question: "Como funciona uma consulta online?",
                answer: "A consulta é realizada de forma personalizada. Você envia sua pergunta ou tema via WhatsApp, eu realizo a leitura e envio fotos das cartas junto com um áudio completo explicando cada posição. Assim, você pode revisitar a leitura sempre que precisar."
              },
              {
                question: "O Tarot pode prever o futuro?",
                answer: "O Tarot não é uma ferramenta de previsão absoluta, mas sim de reflexão e autoconhecimento. Ele revela tendências, padrões e caminhos possíveis, sempre respeitando o seu livre arbítrio e as escolhas que você faz no presente."
              },
              {
                question: "Como escolher o tipo de leitura ideal?",
                answer: "Depende do seu momento. Para dúvidas pontuais, as Perguntas Avulsas são ideais. Se você precisa de mais tempo e profundidade, as Leituras por Hora oferecem liberdade. Já as Tiragens Especiais são indicadas para análises mais completas e específicas."
              },
              {
                question: "Posso fazer perguntas sobre qualquer tema?",
                answer: "Depende. O Tarot pode abordar temas como amor, carreira, família, decisões importantes, autoconhecimento e espiritualidade. Porém, leituras sobre sexo de bebê, gravidez, traição ou questões médicas e doenças, de qualquer cunho que for, não serão respondidas."
              },
              {
                question: "O Tarot pode dar respostas negativas?",
                answer: "O Tarot não trabalha simplesmente com 'positivo' ou 'negativo', mas com verdades e orientações. Algumas mensagens podem ser mais desafiadoras, porém sempre vêm com o propósito de trazer clareza, crescimento e tomada de consciência."
              },
              {
                question: "Existe algum tipo de pergunta que não deve ser feita?",
                answer: "Sim. Não respondo perguntas relacionadas à saúde, morte, diagnósticos clínicos, gravidez ou sexualidade do bebê, questões jurídicas ou investigações de infidelidade. O Tarot é uma ferramenta de orientação, não de diagnóstico ou sentença."
              },
              {
                question: "As cartas podem mudar o meu destino?",
                answer: "Não. As cartas não mudam o destino, elas mostram caminhos. Quem tem o poder máximo de escolha e decisão é você. O Tarot serve como guia esclarecedor."
              },
              {
                question: "Como recebo minha leitura?",
                answer: "Você recebe sua leitura online, com fotos das cartas e áudio explicativo, conforme o formato contratado."
              }
            ].map((item, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="border-b border-[#D8CFC0]/60 last:border-b-0 py-3.5 transition-colors duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left text-[#4A3428] hover:text-[#5A1F2E] transition-colors py-1 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif font-medium text-[14.5px] sm:text-[15.5px] leading-snug pr-4">
                      {item.question}
                    </span>
                    <span className={`transform transition-transform duration-300 text-[#D6AF2A] shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-5 h-5 stroke-[1.5]" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto', marginTop: 10 },
                          collapsed: { opacity: 0, height: 0, marginTop: 0 }
                        }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-[13px] sm:text-[13.5px] text-[#4A3428]/85 leading-relaxed font-sans font-light pb-2">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </motion.div>
  );

  function handleTabClick(tab: Page) {
    setTab(tab);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }
}
