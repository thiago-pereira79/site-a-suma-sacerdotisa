import { useState, useEffect } from 'react';
import { Page } from '../types';
import { Menu, X } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';
import { motion, AnimatePresence } from 'motion/react';
import { WHATSAPP_LINK } from '../constants';

// Elegant geometric star emblem representing A Suma Sacerdotisa (reused from Footer)
const SacerdotisaLogo = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-10 h-10 md:w-11 md:h-11 text-[#D6AF2A]"
    fill="none"
    stroke="#D6AF2A"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="50" cy="50" r="14" strokeDasharray="3 3" className="opacity-60" />
    <circle cx="50" cy="50" r="2.5" fill="#D6AF2A" />
    <line x1="50" y1="12" x2="50" y2="88" />
    <circle cx="50" cy="12" r="1.5" fill="#D6AF2A" />
    <circle cx="50" cy="88" r="1.5" fill="#D6AF2A" />
    <line x1="12" y1="50" x2="88" y2="50" />
    <circle cx="12" cy="50" r="1.5" fill="#D6AF2A" />
    <circle cx="88" cy="50" r="1.5" fill="#D6AF2A" />
    <path d="M50 20 L53.5 44.5 L78 48 L53.5 51.5 L50 76 L46.5 51.5 L22 48 L46.5 44.5 Z" />
    <line x1="32" y1="32" x2="68" y2="68" className="opacity-70" strokeWidth="0.8" />
    <line x1="68" y1="32" x2="32" y2="70" className="opacity-70" strokeWidth="0.8" />
    <circle cx="34" cy="34" r="0.8" fill="#D6AF2A" />
    <circle cx="66" cy="34" r="0.8" fill="#D6AF2A" />
    <circle cx="34" cy="66" r="0.8" fill="#D6AF2A" />
    <circle cx="66" cy="66" r="0.8" fill="#D6AF2A" />
  </svg>
);

interface HeaderProps {
  currentTab: Page;
  setTab: (tab: Page) => void;
}

export function Header({ currentTab, setTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems: { label: string; tab: Page }[] = [
    { label: 'Início', tab: 'inicio' },
    { label: 'Sobre', tab: 'sobre' },
    { label: 'Como Funciona', tab: 'como-funciona' },
    { label: 'Valores', tab: 'valores' },
    { label: 'Política de Consulta', tab: 'politica' },
    { label: 'Depoimentos', tab: 'depoimentos' },
    { label: 'Contato', tab: 'contato' },
    { label: 'Blog', tab: 'blog' },
  ];

  const handleNav = (tab: Page) => {
    setTab(tab);
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const headerBgClass = 'bg-[#000000] text-[#D8CFC0]';

  const linkClass = (isActive: boolean) => {
    return isActive 
      ? 'text-[#D6B75A] font-semibold' 
      : 'text-[#D8CFC0] hover:text-[#E8D48A]';
  };

  return (
    <>
      <header className={`sticky top-0 z-50 backdrop-blur-md py-3 md:py-3.5 px-4 sm:px-6 transition-all duration-300 ${headerBgClass} border-b border-[#D6AF2A]/25 min-h-[74px] sm:min-h-[78px] md:min-h-[84px] flex items-center shadow-xs`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1 w-full">
          {/* Brand Logo - Sacerdotisa original star logo */}
          <div 
            onClick={() => handleNav('inicio')}
            className="flex items-center cursor-pointer group select-none shrink-0"
            title="A Suma Sacerdotisa"
          >
            <SacerdotisaLogo />
          </div>
   
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-4 xl:gap-x-6.5 p-0 desktop-nav">
            {menuItems.map((item) => {
              const isActive = item.tab === 'blog'
                ? (currentTab === 'blog' || currentTab === 'blog-artigos' || currentTab === 'blog-leitura')
                : currentTab === item.tab;

              if (item.tab === 'blog') {
                return (
                  <button
                    key={item.tab}
                    onClick={() => handleNav(item.tab)}
                    className="transition-all duration-150 cursor-pointer text-[12px] xl:text-[13px] uppercase tracking-widest font-sans font-bold whitespace-nowrap px-3.5 py-1.5 rounded-full bg-[#D6B75A] text-black hover:bg-[#E8D48A] active:scale-95 shadow-[0_2px_8px_rgba(214,183,90,0.15)] flex items-center justify-center"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <button
                  key={item.tab}
                  onClick={() => handleNav(item.tab)}
                  className={`transition-all text-[12.5px] xl:text-[14px] uppercase tracking-wider font-sans font-medium whitespace-nowrap hover:scale-102 transform duration-150 cursor-pointer relative py-2.5 px-0.5 ${linkClass(isActive)}`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#D6B75A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
   
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 focus:outline-none transition-colors text-[#D8CFC0] hover:text-[#E8D48A] mobile-hamburger"
            aria-label="Alternar menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu - Rendered outside of header to prevent backdrop-blur-md limitations inside container scope */}
      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-[10000] mobile-menu-container">
            {/* Backdrop / Overlay with escurecido/desfocado */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              id="mobile-menu-overlay"
            />

            {/* Menu Panel - Elegant full-height right-aligned drawer with margins, matches TP Studio reference */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 h-full w-[82vw] max-w-[390px] sm:w-[52vw] sm:max-w-[420px] bg-[#FAF5EC] rounded-l-[24px] shadow-2xl flex flex-col z-20 border-l border-[#D6AF2A]/15 overflow-hidden mobile-menu suma-tablet-menu-panel"
              id="mobile-menu-panel"
            >
              {/* Header inside Panel - Solid background with matching rounded-t corners to avoid browser compositing/clipping leaks */}
              <div className="flex items-center justify-end px-5 py-3 border-b border-black/5 shrink-0 bg-[#FAF5EC] rounded-t-[24px]">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-[#11100C]/70 hover:text-[#11100C] hover:bg-black/5 rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-[#D6AF2A]/30 active:scale-95 cursor-pointer"
                  aria-label="Botão fechar"
                  title="Fechar menu"
                >
                  <X className="w-5.5 h-5.5" />
                </button>
              </div>

              {/* Scrollable links list body */}
              <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1 scrollbar-thin min-h-0 mobile-menu-links suma-tablet-menu-links">
                {menuItems.map((item) => {
                  const isActive = item.tab === 'blog'
                    ? (currentTab === 'blog' || currentTab === 'blog-artigos' || currentTab === 'blog-leitura')
                    : currentTab === item.tab;
                  return (
                    <button
                      key={item.tab}
                      onClick={() => handleNav(item.tab)}
                      className={`w-full text-left py-3 px-4.5 rounded-xl text-[13.5px] uppercase tracking-widest font-sans transition-all duration-200 cursor-pointer block ${
                        isActive 
                          ? 'bg-[#D6B75A]/12 text-[#886C1D] font-bold border-l-4 border-[#D6B75A] pl-3.5'
                          : 'text-[#11100C]/80 hover:text-[#11100C] hover:bg-black/5 font-medium'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
