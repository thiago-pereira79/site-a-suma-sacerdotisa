import { Page } from '../types';
import { ArrowUp, Instagram, Mail } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';
import { WHATSAPP_LINK, EMAIL_LINK } from '../constants';

interface FooterProps {
  setTab: (tab: Page) => void;
  currentTab: Page;
}

// Elegant geometric star emblem representing A Suma Sacerdotisa
const CrescentMoon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4.5 h-4.5 text-[#D6AF2A]"
    fill="currentColor"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export function Footer({ setTab }: FooterProps) {
  const handleNav = (tab: Page) => {
    setTab(tab);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return (
    <footer className="bg-[#000000] text-[#F3EBDD] border-t border-[#A6761D]/25 pt-10 pb-6 px-4 sm:px-6 md:px-8 text-left transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-8">
        
        {/* COLUNA 1 - MARCA / APRESENTAÇÃO */}
        <div className="lg:border-r lg:border-[#A6761D]/15 lg:pr-8 xl:pr-10">
          <p className="text-[#D8CFC0] text-[13px] leading-relaxed font-sans font-light max-w-sm text-justify pt-1">
            Tarot terapêutico online para iluminar caminhos, promover clareza e fortalecer sua jornada de autoconhecimento.
          </p>
          <div className="flex items-center gap-[20px] mt-[22px]">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Entrar em contato pelo WhatsApp"
              className="text-[#D6AF2A]/80 hover:text-[#D6AF2A] transition-colors focus:outline-none cursor-pointer"
            >
              <WhatsappIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/a.sumasacerdotisa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Instagram da Suma Sacerdotisa"
              className="text-[#D6AF2A]/80 hover:text-[#D6AF2A] transition-colors focus:outline-none cursor-pointer"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={EMAIL_LINK}
              aria-label="Enviar e-mail para A Suma Sacerdotisa"
              className="text-[#D6AF2A]/80 hover:text-[#D6AF2A] transition-colors focus:outline-none cursor-pointer"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* COLUNA 2 - NAVEGAÇÃO */}
        <div className="space-y-3.5 lg:border-r lg:border-[#A6761D]/15 lg:pl-4 lg:pr-8 xl:pl-6 xl:pr-10">
          <h4 className="font-cinzel text-[11.5px] font-bold text-[#D6AF2A] tracking-[0.2em] uppercase">
            Navegação
          </h4>
          <ul className="space-y-2 text-[13.5px] font-sans font-light text-[#D8CFC0]">
            {[
              { label: 'Início', tab: 'inicio' as Page },
              { label: 'Sobre', tab: 'sobre' as Page },
              { label: 'Como Funciona', tab: 'como-funciona' as Page },
              { label: 'Valores', tab: 'valores' as Page },
              { label: 'Política de Consulta', tab: 'politica' as Page },
              { label: 'Depoimentos', tab: 'depoimentos' as Page },
              { label: 'Contato', tab: 'contato' as Page },
            ].map((item) => (
              <li key={item.label}>
                <button 
                   onClick={() => handleNav(item.tab)}
                  className="hover:text-[#D6AF2A] transition-colors text-left cursor-pointer hover:translate-x-1 duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUNA 3 - INFORMAÇÕES */}
        <div className="space-y-3.5 lg:border-r lg:border-[#A6761D]/15 lg:pl-4 lg:pr-8 xl:pl-6 xl:pr-10">
          <h4 className="font-cinzel text-[11.5px] font-bold text-[#D6AF2A] tracking-[0.2em] uppercase">
            Informações
          </h4>
          <ul className="space-y-2 text-[13.5px] font-sans font-light text-[#D8CFC0]">
            {[
              { label: 'Dúvidas Frequentes', tab: 'faq' as Page },
              { label: 'Política de Privacidade', tab: 'privacidade' as Page },
              { label: 'Termos de Uso', tab: 'termos' as Page },
            ].map((item) => (
              <li key={item.tab}>
                <button 
                  onClick={() => handleNav(item.tab)}
                  className="hover:text-[#D6AF2A] transition-colors text-left cursor-pointer hover:translate-x-1 duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUNA 4 - AGENDE SUA LEITURA */}
        <div className="space-y-3.5 lg:pl-4 xl:pl-6">
          <h4 className="font-cinzel text-[11.5px] font-bold text-[#D6AF2A] tracking-[0.2em] uppercase">
            Agende sua Leitura
          </h4>
          <p className="text-[#D8CFC0] text-[13px] font-light leading-relaxed">
            Atendimento online via WhatsApp com sigilo, ética e acolhimento.
          </p>

          <div className="text-[#D8CFC0] text-[12.5px] tracking-wide leading-relaxed font-light">
            <p>Atendimento somente com horário marcado.</p>
          </div>
        </div>

      </div>

      {/* Elegant center custom crescent moon divider line */}
      <div className="relative flex items-center justify-center my-6 max-w-7xl mx-auto">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-[#A6761D]/20"></div>
        </div>
        <div className="relative flex justify-center bg-[#000000] px-5">
          <CrescentMoon />
        </div>
      </div>

      {/* Botton Row with Copyright & Designer Credit & integrated Back to Top */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-[#D8CFC0]/70 font-sans font-light">
        <div className="text-center sm:text-left select-none">
          <span>© 2026 A Suma Sacerdotisa. Todos os direitos reservados.</span>
        </div>
        
        {/* Credits and back-to-top button */}
        <div className="flex items-center justify-center sm:justify-end space-x-5 sm:ml-auto w-full sm:w-auto">
          <div className="flex items-center space-x-1 select-none">
            <span>Design & desenvolvimento por</span>
            <a 
              href="https://tpstudio.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D6AF2A] hover:text-[#CFA326] font-medium transition-colors"
            >
              TP Studio
            </a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-1.5 rounded-full border border-[#D8CFC0]/20 text-[#D8CFC0] hover:text-[#D6AF2A] hover:border-[#D6AF2A] bg-[#000000] active:scale-95 transition-all duration-300 group cursor-pointer flex items-center justify-center shrink-0"
            title="Voltar ao início da página"
            id="back-to-top-footer-btn"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
