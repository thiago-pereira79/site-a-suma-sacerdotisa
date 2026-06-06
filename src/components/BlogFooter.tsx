import { Page } from '../types';
import { ArrowUp } from 'lucide-react';

interface BlogFooterProps {
  onNavigateTab: (tab: Page) => void;
  currentTab: Page;
}

export function BlogFooter({ onNavigateTab, currentTab }: BlogFooterProps) {
  const handleNav = (tab: Page) => {
    onNavigateTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-[#000000] border-t border-[#D6AF2A]/15 py-10 px-4 sm:px-6 md:px-8 text-[#F3EBDD] antialiased relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#F3EBDD]/60 font-sans font-normal text-center md:text-left relative z-10 w-full animate-fadeIn">
        
        {/* Left side: Copyright */}
        <div className="order-1 md:order-none cursor-default select-none">
          <span>© 2026 A Suma Sacerdotisa. Todos os direitos reservados.</span>
        </div>
        
        {/* Center side: Nav links with styled bullet separator */}
        <div className="order-2 md:order-none flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 text-[#F3EBDD]/80 font-semibold">
          <button 
            onClick={() => handleNav('privacidade')}
            className="hover:text-[#D6AF2A] transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
          >
            Política de Privacidade
          </button>
          <span className="text-[#B75E3C] font-semibold select-none text-[8px]">✦</span>
          <button 
            onClick={() => handleNav('termos')}
            className="hover:text-[#D6AF2A] transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
          >
            Termos de Uso
          </button>
          <span className="text-[#B75E3C] font-semibold select-none text-[8px]">✦</span>
          <button 
            onClick={() => handleNav('faq')}
            className="hover:text-[#D6AF2A] transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
          >
            FAQ
          </button>
        </div>

        {/* Right side: TP Studio credit & back to top button */}
        <div className="order-3 md:order-none flex items-center justify-center space-x-4 font-light">
          <div className="flex items-center space-x-1 select-none">
            <span>Design & desenvolvimento por</span>
            <a 
              href="https://tpstudio.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-[#F3EBDD] hover:text-[#D6AF2A] transition-colors inline-flex items-center"
            >
              &nbsp;TP Studio&nbsp;
            </a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-1.5 rounded-full border border-white/10 text-[#F3EBDD]/80 hover:text-white hover:border-[#D6AF2A] bg-white/5 hover:bg-white/15 shadow-md transition-all duration-300 group active:scale-95 cursor-pointer flex items-center justify-center shrink-0"
            title="Voltar ao início da página"
            id="back-to-top-blog-footer-btn"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
