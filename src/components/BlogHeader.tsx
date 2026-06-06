import { Page } from '../types';

interface BlogHeaderProps {
  currentTab: Page;
  setTab: (tab: Page) => void;
}

export function BlogHeader({ currentTab, setTab }: BlogHeaderProps) {
  const handleNav = (tab: Page) => {
    setTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Styles for the back button:
  // - height: 40px on desktop, 32px on mobile (h-8 sm:h-10)
  // - horizontal padding: px-6 desktop, px-3 mobile (px-3 sm:px-6)
  // - text font size: text-xs on mobile, text-[15px] on desktop (text-xs sm:text-[15px])
  // - font-weight: font-medium (500)
  // - border-radius: rounded-lg sm:rounded-[14px] (proportionate)
  // - backgrounds & colors kept as per template design, ensuring uniform aesthetic
  const btnStyle = "group inline-flex items-center justify-center h-8 sm:h-10 px-3 sm:px-6 rounded-lg sm:rounded-[14px] transition-all duration-300 font-sans text-[11px] sm:text-[13.5px] md:text-[15px] font-medium tracking-wide cursor-pointer bg-[#D2C5B4] hover:bg-[#C9BCA9] border border-[#C5B6A4] text-[#11100C] shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#C5B6A4]/40 whitespace-nowrap active:scale-[0.98]";

  return (
    <header className="sticky top-0 z-50 bg-[#000000] backdrop-blur-md border-b border-[#D6AF2A]/25 py-3 md:py-3.5 px-4 sm:px-6 text-[#D8CFC0] antialiased relative min-h-[74px] sm:min-h-[78px] md:min-h-[84px] flex items-center overflow-hidden transition-all duration-300 shadow-xs">
      
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative">
        {/* Left Side: Back button */}
        <div className="flex items-center z-10">
          {currentTab === 'blog-artigos' || currentTab === 'blog-leitura' ? (
            <button
               id="back-to-blog-btn"
               onClick={() => handleNav(currentTab === 'blog-leitura' ? 'blog-artigos' : 'blog')}
               className={btnStyle}
             >
               <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                 <span className="text-sm sm:text-[17px] transition-transform duration-300 group-hover:-translate-x-1 font-sans leading-none text-[#11100C]">←</span>
                 <span className="leading-none text-[#11100C]">
                   {currentTab === 'blog-leitura' ? 'Voltar a todos os artigos' : 'Voltar ao blog'}
                 </span>
               </span>
             </button>
          ) : (
            <button
               id="back-to-site-btn"
               onClick={() => handleNav('inicio')}
               className={btnStyle}
             >
               <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                 <span className="text-sm sm:text-[17px] transition-transform duration-300 group-hover:-translate-x-1 font-sans leading-none text-[#11100C]">←</span>
                 <span className="leading-none text-[#11100C]">
                   Voltar ao início
                 </span>
               </span>
             </button>
          )}
        </div>

        {/* Right Side: BLOG. Title in Sans-serif bold format, aligned to the right side of the banner */}
        <div className="flex items-center z-10">
          <span 
            onClick={() => handleNav('blog')}
            className="font-sans font-bold tracking-widest text-base sm:text-lg md:text-2xl text-[#F3EBDD] select-none cursor-pointer hover:text-[#5A1F2E] transition-colors whitespace-nowrap block"
          >
            BLOG<span className="text-[#B75E3C]">.</span>
          </span>
        </div>
      </div>
    </header>
  );
}
