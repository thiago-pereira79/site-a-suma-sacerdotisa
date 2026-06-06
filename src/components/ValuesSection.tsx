import { useState } from 'react';
import { Page } from '../types';
import { Sparkles, Moon, Star, Clock, Shield, Plus, HelpCircle, Check, Book, Compass, Copy, Calendar, Heart } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';
import { motion } from 'motion/react';
import { BackButton } from './BackButton';

interface ValuesSectionProps {
  setTab: (tab: Page) => void;
}

export function ValuesSection({ setTab }: ValuesSectionProps) {
  const [copied, setCopied] = useState(false);

  function handleTabClick(tab: Page) {
    setTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  const handleCopyPix = () => {
    navigator.clipboard.writeText('sacerdotisasuma@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="pt-4 sm:pt-6 pb-12 md:pb-16 px-4 md:px-8 max-w-7xl mx-auto text-[#2F241D] bg-[#F4ECDD] selection:bg-[#B75E3C]/20 selection:text-[#5A1F2E] relative overflow-hidden"
    >
      <BackButton />

      {/* TOPO DA PÁGINA */}
      <div className="text-center mb-10 relative z-10 mt-4">
        <h1 className="font-serif text-[42px] sm:text-[54px] text-[#000000] font-medium tracking-tight">
          Valores
        </h1>
        
        <p className="text-[#000000] font-serif text-[15px] sm:text-[17.5px] mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
          Formatos de leitura e profundidade para cada momento do seu caminho.
        </p>
      </div>

      {/* SEÇÃO PRINCIPAL - CARDS DE VALORES E SERVIÇOS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch mb-10 relative z-10">
        
        {/* CARD 1 — PERGUNTAS AVULSAS (Verde Oliva) */}
        <div className="relative pt-12 pb-10 px-6 sm:px-7 bg-[#66724A] text-[#F3EBDD] rounded-2xl flex flex-col justify-between border border-[#66724A]/40 shadow-[0_8px_24px_rgba(17,16,12,0.08)] transform hover:scale-[1.01] transition-transform duration-300">
          {/* Scrapbook tape decoration */}
          <div className="absolute top-[-11px] left-1/2 -translate-x-1/2 w-24 h-5.5 bg-[#F4ECDD]/25 backdrop-blur-[0.5px] border-l border-r border-dashed border-[#4B3427]/20 shadow-sm rotate-[-1.5deg] z-10" />
          
          <div>
            <div className="flex flex-col items-center text-center pb-5 mb-5 relative">
              {/* Compass Star Icon */}
              <div className="w-16 h-16 flex items-center justify-center text-[#D6AF2A] mb-4">
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#D6AF2A]" stroke="currentColor" fill="none" strokeWidth="1.2">
                  <path d="M50,10 L50,90 M10,50 L90,50" strokeWidth="0.8" strokeDasharray="1 3" />
                  <circle cx="50" cy="50" r="32" strokeWidth="0.8" strokeDasharray="3 3" />
                  <path d="M50,20 L53,38 L70,35 L58,47 L80,50 L58,53 L70,65 L53,62 L50,80 L47,62 L30,65 L42,53 L20,50 L42,47 L30,35 L47,38 Z" fill="currentColor" fillOpacity="0.1" />
                  <path d="M36,64 C42,70 51,71 58,68 C63,65 67,61 68,55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="28" cy="28" r="1.2" fill="#D6AF2A" />
                  <circle cx="72" cy="28" r="1.5" fill="#D6AF2A" />
                </svg>
              </div>

              <h3 className="font-serif text-[24px] sm:text-[26.5px] text-[#F3EBDD] font-medium tracking-tight">
                Perguntas Avulsas
              </h3>
              
              <div className="flex items-center justify-center space-x-2 my-2 select-none text-[#D6AF2A] opacity-80">
                <div className="h-[0.5px] w-5 bg-current/30" />
                <span className="text-[8px]">✦</span>
                <div className="h-[0.5px] w-5 bg-current/30" />
              </div>

              <p className="text-[12.8px] sm:text-[13.5px] leading-relaxed font-sans font-light text-[#F3EBDD]/85 max-w-xs mt-1">
                Ideal para tirar “aquela pulguinha” de trás da orelha. Perguntas objetivas e claras para te direcionar.
              </p>
            </div>

            {/* Pricing List Table */}
            <div className="space-y-1 mb-8">
              {[
                { label: '1 pergunta', price: 'R$ 20,00' },
                { label: '2 perguntas', price: 'R$ 25,00' },
                { label: '3 perguntas', price: 'R$ 30,00' },
                { label: '4 perguntas', price: 'R$ 40,00' },
                { label: '5 perguntas', price: 'R$ 50,00' },
              ].map((row, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between py-2.5 border-b border-[#F3EBDD]/15 text-[13px] sm:text-[13.8px] font-sans font-light"
                >
                  <span className="text-[#F3EBDD]/90">{row.label}</span>
                  <span className="text-[#D6AF2A] font-semibold">{row.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-2">
            <p className="text-[11px] sm:text-[11.5px] text-[#D6AF2A] font-serif italic tracking-wide">
              “Não realizo mais que 5 perguntas para um cliente em um mesmo jogo.”
            </p>
          </div>
        </div>

        {/* CARD 2 — LEITURA POR HORA (Marrom Café) */}
        <div className="relative pt-12 pb-10 px-6 sm:px-7 bg-[#4B3427] text-[#F3EBDD] rounded-2xl flex flex-col justify-between border border-[#4B3427]/40 shadow-[0_8px_24px_rgba(17,16,12,0.08)] transform hover:scale-[1.01] transition-transform duration-300">
          {/* Scrapbook tape decoration */}
          <div className="absolute top-[-11px] left-1/2 -translate-x-1/2 w-24 h-5.5 bg-[#F4ECDD]/25 backdrop-blur-[0.5px] border-l border-r border-dashed border-[#4B3427]/20 shadow-sm rotate-[1.5deg] z-10" />
          
          <div>
            <div className="flex flex-col items-center text-center pb-5 mb-5 relative">
              {/* Hourglass Icon */}
              <div className="w-16 h-16 flex items-center justify-center text-[#D6AF2A] mb-4">
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#D6AF2A]" stroke="currentColor" fill="none" strokeWidth="1.2">
                  <path d="M35,20 L65,20 M35,80 L65,80 M35,20 L38,40 Q40,50 50,50 Q60,50 62,40 L65,20 M35,80 L38,60 Q40,50 50,50 Q60,50 62,60 L65,80" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M30,20 L30,80 M70,20 L70,80" strokeWidth="0.8" strokeDasharray="2 2" />
                  <polygon points="41,28 59,28 50,47" fill="currentColor" fillOpacity="0.15" />
                  <polygon points="41,72 59,72 50,53" fill="currentColor" fillOpacity="0.35" />
                  <path d="M50,48 L50,55" strokeWidth="1" strokeDasharray="1 1" />
                  <path d="M22,35 L26,35 M24,33 L24,37" strokeWidth="0.8" />
                  <path d="M74,65 L78,65 M76,63 L76,67" strokeWidth="0.8" />
                </svg>
              </div>

              <h3 className="font-serif text-[24px] sm:text-[26.5px] text-[#F3EBDD] font-medium tracking-tight">
                Leitura por Hora
              </h3>
              
              <div className="flex items-center justify-center space-x-2 my-2 select-none text-[#D6AF2A] opacity-80">
                <div className="h-[0.5px] w-5 bg-current/30" />
                <span className="text-[8px]">✦</span>
                <div className="h-[0.5px] w-5 bg-current/30" />
              </div>

              <p className="text-[12.8px] sm:text-[13.5px] leading-relaxed font-sans font-light text-[#F3EBDD]/85 max-w-xs mt-1">
                Ideal para quem tem muitas dúvidas e não sabe por onde começar.
              </p>
            </div>

            {/* Prominent options tickets */}
            <div className="space-y-4 mb-6">
              {/* Option 1 */}
              <div className="border border-[#D6AF2A]/40 rounded-xl p-4.5 text-center bg-[#11100C]/15 relative overflow-hidden">
                <div className="font-serif text-[28px] font-bold text-[#D6AF2A] tracking-tight">R$ 49,90</div>
                <div className="text-[11px] uppercase tracking-widest font-sans font-semibold text-[#F3EBDD] mt-0.5">30 Minutos</div>
                <div className="text-[11.5px] text-[#F3EBDD]/70 mt-1 font-sans font-light">Perguntas livres dentro de 30 minutos.</div>
              </div>

              {/* Option 2 */}
              <div className="border border-[#D6AF2A]/40 rounded-xl p-4.5 text-center bg-[#11100C]/15 relative overflow-hidden">
                <div className="font-serif text-[28px] font-bold text-[#D6AF2A] tracking-tight">R$ 92,90</div>
                <div className="text-[11px] uppercase tracking-widest font-sans font-semibold text-[#F3EBDD] mt-0.5">1 Hora</div>
                <div className="text-[11.5px] text-[#F3EBDD]/70 mt-1 font-sans font-light">Perguntas livres dentro de 60 minutos.</div>
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <p className="text-[11px] sm:text-[11.5px] text-[#D6AF2A] font-serif italic tracking-wide">
              “1 hora é o tempo máximo que faço para um cliente em um jogo.”
            </p>
          </div>
        </div>

        {/* CARD 3 — TIRAGENS ESPECIAIS (Bordô Profundo) */}
        <div className="relative pt-12 pb-10 px-6 sm:px-7 bg-[#6E2C2C] text-[#F3EBDD] rounded-2xl flex flex-col justify-between border border-[#6E2C2C]/40 shadow-[0_8px_24px_rgba(17,16,12,0.08)] transform hover:scale-[1.01] transition-transform duration-300">
          {/* Outstanding Ribbon */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D6AF2A] text-[#11100C] font-sans text-[9px] tracking-[0.2em] px-4 py-1.5 rounded-full font-bold shadow-md z-20 select-none">
            MAIS COMPLETA
          </div>
          {/* Scrapbook tape decoration */}
          <div className="absolute top-[-11px] left-1/2 -translate-x-1/2 w-24 h-5.5 bg-[#F4ECDD]/25 backdrop-blur-[0.5px] border-l border-r border-dashed border-[#4B3427]/20 shadow-sm rotate-[-0.8deg] z-10" />
          
          <div>
            <div className="flex flex-col items-center text-center pb-5 mb-5 relative">
              {/* Third Eye Icon */}
              <div className="w-16 h-16 flex items-center justify-center text-[#D6AF2A] mb-4">
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#D6AF2A]" stroke="currentColor" fill="none" strokeWidth="1.2">
                  <path d="M20,50 Q50,22 80,50 Q50,78 20,50 Z" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="14" strokeWidth="1.2" />
                  <circle cx="50" cy="50" r="8" fill="currentColor" />
                  <path d="M50,15 L50,25 M50,75 L50,85 M15,50 L25,50 M75,50 L85,50 M26,26 L33,33 M67,67 L74,74 M26,74 L33,67 M67,26 L74,33" strokeWidth="0.8" />
                  <path d="M32,32 C28,42 29,54 36,62 C41,67 48,70 54,69" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="font-serif text-[24px] sm:text-[26.5px] text-[#F3EBDD] font-medium tracking-tight">
                Tiragens Especiais
              </h3>
              
              <div className="flex items-center justify-center space-x-2 my-2 select-none text-[#D6AF2A] opacity-80">
                <div className="h-[0.5px] w-5 bg-current/30" />
                <span className="text-[8px]">✦</span>
                <div className="h-[0.5px] w-5 bg-current/30" />
              </div>
            </div>

            {/* List of 4 modalities */}
            <div className="space-y-4">
              {/* modal 1 */}
              <div className="border-b border-[#F3EBDD]/15 pb-3">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-serif text-[15px] font-bold text-[#D6AF2A]">R$ 148,00</span>
                  <span className="font-serif text-[14.5px] font-medium text-[#F3EBDD] block text-right">Mesa Real</span>
                </div>
                <p className="text-[11.8px] text-[#F3EBDD]/80 leading-relaxed font-sans font-light">
                  Tiragem adaptada do baralho cigano com 36 cartas. Analisa espiritualidade, afetivo, mental, financeiro, saúde e trabalho.
                </p>
                <span className="text-[9.5px] text-[#D6AF2A]/90 italic font-sans block mt-1">Agendamento antecipado necessário. Prazo maior.</span>
              </div>

              {/* modal 2 */}
              <div className="border-b border-[#F3EBDD]/15 pb-3">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-serif text-[15px] font-bold text-[#D6AF2A]">R$ 52,90</span>
                  <span className="font-serif text-[14.5px] font-medium text-[#F3EBDD] block text-right">Daqui 6 meses + 1 pergunta</span>
                </div>
                <p className="text-[11.8px] text-[#F3EBDD]/80 leading-relaxed font-sans font-light">
                  Previsões para trabalho, estudo, financeiro, família e amor. Ideal para novos ciclos ou inícios de ano.
                </p>
              </div>

              {/* modal 3 */}
              <div className="border-b border-[#F3EBDD]/15 pb-3">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-serif text-[15px] font-bold text-[#D6AF2A]">R$ 92,00</span>
                  <span className="font-serif text-[14.5px] font-medium text-[#F3EBDD] block text-right">Combo do Amor</span>
                </div>
                <p className="text-[11.8px] text-[#F3EBDD]/80 leading-relaxed font-sans font-light">
                  Para solteiros, enrolados ou comprometidos. Tudo sobre a vida amorosa e propensões do momento. A mais completa para o coração.
                </p>
              </div>

              {/* modal 4 */}
              <div className="pb-1">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-serif text-[15px] font-bold text-[#D6AF2A]">R$ 100,00</span>
                  <span className="font-serif text-[14.5px] font-medium text-[#F3EBDD] block text-right">Mandala Astrológica</span>
                </div>
                <p className="text-[11.8px] text-[#F3EBDD]/80 leading-relaxed font-sans font-light">
                  Entenda todos os campos da vida através das 12 casas do zodíaco. Abrangente e conselheira.
                </p>
                <span className="text-[9.5px] text-[#D6AF2A]/90 italic font-sans block mt-1">Agendamento antecipado necessário. Prazo maior.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FRASE INFORMATIVA SOBRE A POLÍTICA DE CONSULTA */}
      <div className="text-center mb-12 mt-2 relative z-10 px-4">
        <p className="text-[#000000] font-serif text-[15px] sm:text-[17.5px] font-normal leading-relaxed">
          Antes de realizar o agendamento, recomendamos a leitura da{" "}
          <button
            onClick={() => handleTabClick('politica')}
            className="text-[#6E2C2C] hover:text-[#943d3d] transition-colors duration-200 underline underline-offset-4 font-semibold inline cursor-pointer"
          >
            Política de Consulta
          </button>
          .
        </p>
      </div>


      {/* BLOCO “PAGAMENTO VIA PIX” */}
      <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl border border-[#D8C6A8] bg-[#FDFBF7] shadow-[0_4px_16px_rgba(74,52,40,0.02)] relative overflow-hidden z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-6 flex-1 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-[#EFE5D4] border border-[#C9B89D] flex items-center justify-center shadow-inner relative overflow-hidden shrink-0">
            {/* Pix Diamonds */}
            <div className="grid grid-cols-2 gap-1 rotate-45 scale-95">
              <div className="w-2.5 h-2.5 bg-[#D6AF2A] rounded-sm" />
              <div className="w-2.5 h-2.5 bg-[#D6AF2A] rounded-sm" />
              <div className="w-2.5 h-2.5 bg-[#D6AF2A] rounded-sm" />
              <div className="w-2.5 h-2.5 bg-[#D6AF2A] rounded-sm" />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="font-serif text-[21px] sm:text-[23px] text-[#2F241D] font-medium">Pagamento via Pix</h3>
            <p className="text-[13px] sm:text-[13.5px] text-[#4B3427]/95 font-sans font-light leading-relaxed max-w-sm">
              O pagamento é realizado via Pix, de forma rápida, segura e prática.
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto shrink-0">
          <div className="bg-[#EFE5D4]/40 border border-[#D8C6A8]/50 rounded-xl p-4 flex flex-col items-start min-w-[280px]">
            <span className="text-[10px] uppercase tracking-widest font-sans font-semibold text-[#4B3427]/60 mb-1">Chave PIX (E-mail)</span>
            <div className="flex items-center justify-between w-full space-x-3 mt-1 bg-white border border-[#D8C6A8]/30 px-3.5 py-2.5 rounded-lg select-all">
              <span className="font-mono text-[12.5px] sm:text-[13px] text-[#4B3427] font-medium">sacerdotisasuma@gmail.com</span>
              <button 
                onClick={handleCopyPix}
                className="text-[#D6AF2A] hover:text-[#6E2C2C] p-1.5 hover:bg-[#EFE5D4]/40 rounded transition-colors cursor-pointer"
                title="Copiar Chave Pix"
              >
                {copied ? (
                  <Check className="w-4.5 h-4.5 text-green-600 transition-transform scale-110" />
                ) : (
                  <Copy className="w-4.5 h-4.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCO “IMPORTANTE” */}
      <div className="text-center mb-10 relative z-10">
        <div className="flex items-center justify-center space-x-3 w-auto mx-auto opacity-85 my-4">
          <span className="text-[#D6AF2A] text-sm select-none">✦</span>
          <h2 className="font-serif text-[28px] md:text-[34px] lg:text-[38px] text-[#000000] font-semibold leading-tight tracking-tight">Importante</h2>
          <span className="text-[#D6AF2A] text-sm select-none">✦</span>
        </div>
      </div>

      {/* Grid Importante - 2 columns or 4 columns base */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 text-left relative z-10 px-4">
        {/* Item 1 */}
        <div className="flex items-start space-x-4">
          <div className="w-11 h-11 rounded-full border border-[#D6AF2A]/55 flex items-center justify-center bg-white shadow-[0_2px_6px_rgba(74,52,40,0.02)] shrink-0">
            <Calendar className="w-4.5 h-4.5 text-[#6E2C2C]" strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-[#2F241D] mb-1">Agendamento</h4>
            <p className="text-[12.8px] sm:text-[13.5px] text-[#4B3427]/90 leading-relaxed font-sans font-light">
              O agendamento da consulta só é confirmado pós a confirmação do pagamento.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start space-x-4">
          <div className="w-11 h-11 rounded-full border border-[#D6AF2A]/55 flex items-center justify-center bg-white shadow-[0_2px_6px_rgba(74,52,40,0.02)] shrink-0">
            <Clock className="w-4.5 h-4.5 text-[#6E2C2C]" strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-[#2F241D] mb-1">Prazos</h4>
            <p className="text-[12.8px] sm:text-[13.5px] text-[#4B3427]/90 leading-relaxed font-sans font-light">
              Os prazos informados são médios e variam conforme nossa agenda e demanda diária.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start space-x-4">
          <div className="w-11 h-11 rounded-full border border-[#D6AF2A]/55 flex items-center justify-center bg-white shadow-[0_2px_6px_rgba(74,52,40,0.02)] shrink-0">
            <WhatsappIcon className="w-4.5 h-4.5 text-[#6E2C2C] fill-[#6E2C2C]" />
          </div>
          <div>
            <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-[#2F241D] mb-1">Canais de Atendimento</h4>
            <p className="text-[12.8px] sm:text-[13.5px] text-[#4B3427]/90 leading-relaxed font-sans font-light">
              As consultas são realizadas exclusivamente pelo WhatsApp, por áudios detalhados ou escrito.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-start space-x-4">
          <div className="w-11 h-11 rounded-full border border-[#D6AF2A]/55 flex items-center justify-center bg-white shadow-[0_2px_6px_rgba(74,52,40,0.02)] shrink-0">
            <Heart className="w-4.5 h-4.5 text-[#6E2C2C]" strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-[#2F241D] mb-1">Ambiente de Respeito</h4>
            <p className="text-[12.8px] sm:text-[13.5px] text-[#4B3427]/90 leading-relaxed font-sans font-light">
              Todas as consultas são tratadas com sigilo total, ética terapêutica e respeito absoluto.
            </p>
          </div>
        </div>
      </div>

      {/* BLOCO PRAZO DE ENTREGA */}
      <div className="max-w-3xl mx-auto text-center bg-[#66724A] text-[#F3EBDD] py-10 sm:py-12 px-8 sm:px-12 rounded-2xl shadow-md border border-[#66724A]/30 relative overflow-hidden select-none z-10 mb-0">
        <div className="absolute inset-2 sm:inset-3 border border-[#F3EBDD]/15 rounded-xl pointer-events-none" />
        <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#F3EBDD] mb-3.5 tracking-wider uppercase">
          Prazo de Entrega
        </h4>
        <div className="space-y-3.5 max-w-xl mx-auto">
          <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed font-sans font-light text-[#F3EBDD]/90">
            As tiragens Mandala Astrológica e Mesa Real possuem prazo de entrega de até 48 horas úteis após a confirmação do pagamento.
          </p>
          <p className="text-[12.5px] sm:text-[13.5px] font-sans font-light text-[#F3EBDD]/75">
            As demais consultas são realizadas no horário agendado.
          </p>
          <p className="text-[10.5px] sm:text-[11px] text-[#D6AF2A] mt-2 italic font-sans font-light">
            *Tiragens especiais requerem maior tempo de preparação e análise.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
