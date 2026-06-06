import { 
  Mail, 
  Instagram, 
  Monitor, 
  Clock, 
  Shield 
} from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';
import { motion } from 'motion/react';
import { BackButton } from './BackButton';
import { WHATSAPP_LINK, EMAIL_LINK } from '../constants';

// Reusable elegant sparkle SVG
const SparkleSymbol = ({ className = "w-5 h-5 text-[#D6AF2A]" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

// Standard botanical left border sprig SVG
const DelicateBotanicalLeft = () => (
  <svg className="w-14 h-48 text-[#4A3428]/25 select-none" viewBox="0 0 100 300" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M30 270 C34 200, 38 120, 24 30" />
    <path d="M28 230 C45 220, 55 190, 31 200 C31 200, 28 220, 28 230" fill="currentColor" fillOpacity="0.05" />
    <path d="M30 195 C14 185, 4 155, 27 165 C27 165, 30 185, 30 195" fill="currentColor" fillOpacity="0.05" />
    <path d="M31 155 C48 145, 58 115, 34 125 C34 125, 31 145, 31 155" fill="currentColor" fillOpacity="0.05" />
    <path d="M26 120 C10 110, 0 80, 22 90 C22 90, 26 110, 26 120" fill="currentColor" fillOpacity="0.05" />
    <path d="M25 80 C40 70, 48 40, 27 50 C27 50, 25 70, 25 80" fill="currentColor" fillOpacity="0.05" />
  </svg>
);

// Reusable mystical divider with soft gold accents
const MysticDivider = () => (
  <div className="flex items-center justify-center gap-4 w-full max-w-xs mx-auto my-6 opacity-60">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9B89D] to-[#D8C6A8] flex-grow" />
    <SparkleSymbol className="w-3.5 h-3.5 text-[#D6AF2A]" />
    <div className="h-[1px] bg-gradient-to-l from-transparent via-[#C9B89D] to-[#D8C6A8] flex-grow" />
  </div>
);

export function ContactSection() {
  // Configured target destinations
  const waLink = WHATSAPP_LINK;
  const emailLink = EMAIL_LINK;
  const igLink = "https://www.instagram.com/a.sumasacerdotisa/";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="pt-4 sm:pt-6 pb-12 md:pb-16 px-4 md:px-8 max-w-7xl mx-auto text-[#11100C] selection:bg-[#B75E3C]/20 selection:text-[#5A1F2E] relative"
    >
      {/* 1. Header Navigation Back Button */}
      <BackButton variant="light" className="pb-6" />

      {/* 2. HERO / ABERTURA DA PÁGINA (Centered elegant typography layout) */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-14 pt-4">

        <h1 className="font-serif text-[42px] sm:text-[54px] text-[#000000] font-medium tracking-tight leading-none">
          Contato
        </h1>

        <p className="text-[#000000] font-serif text-[15px] sm:text-[17.5px] mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
          Será um prazer falar com você. Escolha o canal que preferir para entrar em contato.
        </p>
      </div>

      {/* 3 & 4. MAJOR CHANNELS BLOCK & INFORMATION CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch mb-16 justify-items-stretch">
        
        {/* Card A: WhatsApp (with custom Olive vertical layout) */}
        <div className="p-5 sm:p-6 bg-[#FAF6EE] border border-[#D8C6A8]/75 rounded-[32px] relative shadow-[0_4px_20px_rgba(74,52,40,0.012)] flex flex-col justify-between gap-4 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(74,52,40,0.04)] w-full max-w-[440px] h-full justify-self-center lg:justify-self-end order-1 lg:order-1">
          <div className="space-y-3">
            <div className="flex items-center gap-3.5">
              {/* Solid green olive medal icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#6F7A4E] text-[#FAF6EE] shrink-0 shadow-sm select-none">
                <WhatsappIcon className="w-5.5 h-5.5 fill-[#FAF6EE]" />
              </div>
              <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold text-[#4B3427] tracking-tight">WhatsApp</h3>
            </div>

            <p className="text-[13.5px] sm:text-[14px] text-[#4A3428]/95 leading-relaxed font-sans font-light">
              Fale direto comigo para agendar sua leitura, tirar dúvidas ou receber orientações personalizadas.
            </p>
          </div>

          <div className="w-full flex justify-center pt-1.5">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[290px] inline-flex items-center justify-center gap-2 bg-[#6F7A4E] hover:bg-[#5C6642] text-[#FAF6EE] font-sans text-[12.5px] font-semibold tracking-wider uppercase py-2.5 rounded-xl cursor-pointer select-none active:scale-95 transition-all shadow-sm"
            >
              <WhatsappIcon className="w-4 h-4 text-[#FAF6EE] fill-[#FAF6EE]" />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Card 1: Atendimento online */}
        <div className="p-5 sm:p-6 bg-[#FAF6EE] border border-[#D8C6A8]/75 rounded-[32px] relative shadow-[0_4px_20px_rgba(74,52,40,0.012)] flex flex-col justify-center gap-3.5 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(74,52,40,0.04)] w-full max-w-[440px] h-full justify-self-center lg:justify-self-start order-4 lg:order-2">
          <div className="space-y-3">
            <div className="flex items-center gap-3.5">
              {/* Elegant gold icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF6EE] text-[#D6AF2A] border border-[#D8C6A8] shrink-0 shadow-sm select-none">
                <Monitor className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-[19px] sm:text-[21px] font-semibold text-[#4B3427] tracking-tight">Atendimento online</h3>
            </div>

            <p className="text-[13.5px] sm:text-[14px] text-[#4A3428]/95 leading-relaxed font-sans font-light">
              Todas as leituras e atendimentos são realizados de forma online, com conforto e segurança.
            </p>
          </div>
        </div>

        {/* Card B: E-mail (with Custom Maroon vertical layout) */}
        <div className="p-5 sm:p-6 bg-[#FAF6EE] border border-[#D8C6A8]/75 rounded-[32px] relative shadow-[0_4px_20px_rgba(74,52,40,0.012)] flex flex-col justify-between gap-4 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(74,52,40,0.04)] w-full max-w-[440px] h-full justify-self-center lg:justify-self-end order-2 lg:order-3">
          <div className="space-y-3">
            <div className="flex items-center gap-3.5">
              {/* Solid maroon medal icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5A1F2E] text-[#FAF6EE] shrink-0 shadow-sm select-none">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold text-[#4B3427] tracking-tight">E-mail</h3>
            </div>

            <p className="text-[13.5px] sm:text-[14px] text-[#4A3428]/95 leading-relaxed font-sans font-light">
              Envie sua mensagem por e-mail e retornarei o mais breve possível com atenção e cuidado.
            </p>
          </div>

          <div className="w-full flex justify-center pt-1.5">
            <a
              href={emailLink}
              className="w-full max-w-[290px] inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#5A1F2E]/5 border-2 border-[#5A1F2E] text-[#5A1F2E] font-sans text-[12.5px] font-bold tracking-wider uppercase py-2.5 rounded-xl select-none cursor-pointer active:scale-95 transition-all"
            >
              <Mail className="w-4 h-4 text-[#5A1F2E]" />
              <span>Enviar e-mail</span>
            </a>
          </div>
        </div>

        {/* Card 2: Atendimento com horário marcado */}
        <div className="p-5 sm:p-6 bg-[#FAF6EE] border border-[#D8C6A8]/75 rounded-[32px] relative shadow-[0_4px_20px_rgba(74,52,40,0.012)] flex flex-col justify-center gap-3.5 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(74,52,40,0.04)] w-full max-w-[440px] h-full justify-self-center lg:justify-self-start order-5 lg:order-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3.5">
              {/* Elegant gold icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF6EE] text-[#D6AF2A] border border-[#D8C6A8] shrink-0 shadow-sm select-none">
                <Clock className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-[19px] sm:text-[21px] font-semibold text-[#4B3427] tracking-tight">Atendimento com horário marcado</h3>
            </div>

            <p className="text-[13.5px] sm:text-[14px] text-[#4A3428]/95 leading-relaxed font-sans font-light">
              Os atendimentos acontecem somente com agendamento prévio.
            </p>
          </div>
        </div>

        {/* Card C: Instagram (with mustard/amber vertical layout) */}
        <div className="p-5 sm:p-6 bg-[#FAF6EE] border border-[#D8C6A8]/75 rounded-[32px] relative shadow-[0_4px_20px_rgba(74,52,40,0.012)] flex flex-col justify-between gap-4 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(74,52,40,0.04)] w-full max-w-[440px] h-full justify-self-center lg:justify-self-end order-3 lg:order-5">
          <div className="space-y-3">
            <div className="flex items-center gap-3.5">
              {/* Solid gold medal icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#D6AF2A] text-[#FAF6EE] shrink-0 shadow-sm select-none">
                <Instagram className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold text-[#4B3427] tracking-tight">Instagram</h3>
            </div>

            <p className="text-[13.5px] sm:text-[14px] text-[#4A3428]/95 leading-relaxed font-sans font-light">
              Acompanhe conteúdos, mensagens e novidades no meu perfil oficial.
            </p>
          </div>

          <div className="w-full flex justify-center pt-1.5">
            <a
              href={igLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[290px] inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#D6AF2A]/5 border-2 border-[#D6AF2A] text-[#D6AF2A] font-sans text-[12.5px] font-bold tracking-wider uppercase py-2.5 rounded-xl select-none cursor-pointer active:scale-95 transition-all"
            >
              <Instagram className="w-4 h-4 text-[#D6AF2A]" />
              <span>Ir para o Instagram</span>
            </a>
          </div>
        </div>

        {/* Card 3: Sigilo, ética e acolhimento */}
        <div className="p-5 sm:p-6 bg-[#FAF6EE] border border-[#D8C6A8]/75 rounded-[32px] relative shadow-[0_4px_20px_rgba(74,52,40,0.012)] flex flex-col justify-center gap-3.5 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(74,52,40,0.04)] w-full max-w-[440px] h-full justify-self-center lg:justify-self-start order-6 lg:order-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3.5">
              {/* Elegant gold icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF6EE] text-[#D6AF2A] border border-[#D8C6A8] shrink-0 shadow-sm select-none">
                <Shield className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-[19px] sm:text-[21px] font-semibold text-[#4B3427] tracking-tight">Sigilo, ética e acolhimento</h3>
            </div>

            <p className="text-[13.5px] sm:text-[14px] text-[#4A3428]/95 leading-relaxed font-sans font-light">
              Sua história é sagrada. Aqui, você encontra escuta sem julgamentos, respeito e total confidencialidade.
            </p>
          </div>
        </div>

      </div>

      {/* 7. NOVO BANNER CENTRALIZADO EM ESTILO BILHETE DE PAPEL (ContactPaperNote) */}
      <div className="mt-4 mb-0 sm:mt-6 sm:mb-0 flex justify-center w-full px-2" id="contact-paper-note-container">
        <div className="w-full max-w-[340px] filter drop-shadow-[0_6px_16px_rgba(74,52,40,0.035)] relative select-none rotate-[-0.5deg] hover:rotate-[0.5deg] transition-transform duration-500" id="contact-paper-note-card">
          
          {/* Torn adhesive tape at the top center */}
          <div 
            className="absolute top-[-11px] left-1/2 -translate-x-1/2 w-24 h-5.5 bg-[#6F7A4E]/25 border-l border-r border-[#4A3428]/10 backdrop-blur-[0.5px] z-20" 
            style={{ 
              clipPath: 'polygon(3% 5%, 97% 2%, 99% 25%, 95% 45%, 100% 65%, 96% 85%, 98% 98%, 2% 96%, 4% 80%, 1% 60%, 5% 40%, 1% 20%)' 
            }}
            id="contact-paper-tape"
          />
 
          {/* Paper sheet with subtle organic torn edges */}
          <div 
            className="bg-[#FAF5EC] border border-[#E8DCB8]/50 px-6 sm:px-7 py-7 pt-9.5 text-center"
            style={{ 
              clipPath: 'polygon(0.8% 0.8%, 25% 0.4%, 50% 1.1%, 75% 0.3%, 99.2% 0.6%, 98.8% 25%, 99.4% 50%, 98.7% 75%, 99.2% 99.2%, 75% 98.8%, 50% 99.3%, 25% 98.5%, 0.8% 99.2%, 1.2% 75%, 0.6% 50%, 1.3% 25%)' 
            }}
            id="contact-paper-body"
          >
            {/* Elegant heart top ornament */}
            <div className="flex items-center justify-center gap-3 text-[#D6AF2A]/80 mb-4 select-none" id="contact-paper-heart-ornament">
              <div className="h-[0.5px] w-9 bg-gradient-to-r from-transparent to-[#D6AF2A]/35" />
              <svg className="w-4.5 h-4.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <div className="h-[0.5px] w-9 bg-gradient-to-l from-transparent to-[#D6AF2A]/35" />
            </div>
 
            {/* Content text */}
            <div className="font-serif text-[15px] sm:text-[16px] text-[#4A3428]/95 leading-relaxed italic font-light space-y-4 px-1" id="contact-paper-text">
              <p className="tracking-wide">
                Aqui, cada mensagem<br />
                é lida com presença,<br />
                intuição e verdade.
              </p>
              <p className="tracking-wide">
                Sinta-se à vontade para<br />
                entrar em contato.
              </p>
              <p className="tracking-wide">
                Estou aqui para te ouvir.
              </p>
            </div>
 
            {/* Elegant sparkle bottom ornament */}
            <div className="flex items-center justify-center gap-2.5 text-[#D6AF2A]/80 mt-5 pt-0.5 select-none" id="contact-paper-sparkle-ornament">
              <div className="h-[0.5px] w-10 bg-gradient-to-r from-transparent to-[#D6AF2A]/35" />
              <div className="w-1 h-1 rounded-full bg-[#D6AF2A]/50" />
              <svg className="w-4 h-4 text-[#D6AF2A]/75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 4c0 4.5-1.5 6-6 6c4.5 0 6 1.5 6 6c0-4.5 1.5-6 6-6c-4.5 0-6-1.5-6-6Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="w-1 h-1 rounded-full bg-[#D6AF2A]/50" />
              <div className="h-[0.5px] w-10 bg-gradient-to-l from-transparent to-[#D6AF2A]/35" />
            </div>
 
          </div>
        </div>
      </div>

    </motion.div>
  );
}
