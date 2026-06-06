import React from 'react';

interface BlogCardCoverProps {
  id: string;
  title: string;
}

export function BlogCardCover({ id, title }: BlogCardCoverProps) {
  // Select cover design index based on id or fallback
  const index = (parseInt(id) - 1) % 8;

  // Let's render beautifully crafted abstract SVG mística-inspired posters
  switch (index) {
    case 0: // ID '1' - Banhos de Ervas (Green/Herbal)
      return (
        <div className="w-full h-full relative overflow-hidden bg-[#454425] flex items-center justify-center select-none">
          {/* Subtle floral background pattern or noise backdrop */}
          <div className="absolute inset-2 border border-[#D6AF2A]/30 rounded-[14px] pointer-events-none" />
          <div className="absolute inset-3.5 border border-[#D6AF2A]/15 rounded-[12px] pointer-events-none" />
          
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-[#D6AF2A]" />
          <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[#D6AF2A]" />
          <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-[#D6AF2A]" />
          <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-[#D6AF2A]" />

          {/* Central organic branch element */}
          <svg className="w-24 h-24 text-[#D6AF2A] transform group-hover:scale-105 duration-500 transition-all" viewBox="0 0 100 100" fill="currentColor">
            {/* Elegant botanical stem with details */}
            <path d="M50,90 C50,90 50,60 50,20" stroke="#D6AF2A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M50,75 C58,70 65,65 62,58 C59,51 51,62 50,65" fill="#D6AF2A" stroke="#D6AF2A" strokeWidth="0.5" />
            <path d="M50,65 C42,60 35,55 38,48 C41,41 49,52 50,55" fill="#D6AF2A" stroke="#D6AF2A" strokeWidth="0.5" />
            <path d="M50,55 C59,50 66,45 63,37 C60,29 51,41 50,44" fill="#D6AF2A" stroke="#D6AF2A" strokeWidth="0.5" />
            <path d="M50,45 C41,40 34,35 37,27 C40,19 49,31 50,34" fill="#D6AF2A" stroke="#D6AF2A" strokeWidth="0.5" />
            <path d="M50,35 C58,28 64,22 61,16 C58,10 51,21 50,24" fill="#D6AF2A" stroke="#D6AF2A" strokeWidth="0.5" />
            <path d="M50,24 C42,17 36,11 39,5 C42,-1 49,10 50,13" fill="#D6AF2A" stroke="#D6AF2A" strokeWidth="0.5" />
            {/* Top crown leaf */}
            <path d="M50,20 C50,20 47,12 50,8 C53,12 50,20 50,20" fill="#D6AF2A" />
            {/* Subtle center stars */}
            <circle cx="28" cy="40" r="1.5" className="fill-[#D6AF2A] opacity-60" />
            <circle cx="72" cy="48" r="1.5" className="fill-[#D6AF2A] opacity-60" />
            <circle cx="25" cy="68" r="1" className="fill-[#D6AF2A] opacity-40" />
            <circle cx="75" cy="24" r="1" className="fill-[#D6AF2A] opacity-40" />
          </svg>
        </div>
      );

    case 1: // ID '2' - Velas: Luz divina, fé (Wine/Fire/Stars)
      return (
        <div className="w-full h-full relative overflow-hidden bg-[#5A1F2E] flex items-center justify-center select-none">
          <div className="absolute inset-2 border border-[#FAF5EC]/20 rounded-[14px] pointer-events-none" />
          
          {/* Cosmic dust dots list */}
          <div className="absolute top-6 left-12 w-1 h-1 bg-[#D6AF2A]/60 rounded-full" />
          <div className="absolute bottom-8 left-6 w-1 h-1 bg-[#D6AF2A]/40 rounded-full" />
          <div className="absolute top-10 right-10 w-1.5 h-1.5 bg-[#FAF5EC]/30 rounded-full" />
          <div className="absolute bottom-6 right-20 w-1 h-1 bg-[#D6AF2A]/50 rounded-full" />

          {/* Concentric dotted circles */}
          <svg className="w-full h-full absolute inset-0 text-[#D6AF2A]/25" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3" />
            <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>

          {/* Central Flame / Rays */}
          <svg className="w-24 h-24 text-[#D6AF2A] transform group-hover:scale-[1.06] duration-500 transition-all z-10" viewBox="0 0 100 100" fill="none">
            {/* Celestial flame rays */}
            <g stroke="#D6AF2A" strokeWidth="0.8" opacity="0.8">
              <line x1="50" y1="15" x2="50" y2="85" />
              <line x1="15" y1="50" x2="85" y2="50" />
              <line x1="25" y1="25" x2="75" y2="75" />
              <line x1="25" y1="75" x2="75" y2="25" />
            </g>
            {/* Candle/Flame shapes */}
            {/* Flame drop glow */}
            <path d="M50,22 C55,30 57,40 54,48 C51,56 43,56 40,48 C37,40 39,30 50,22 Z" fill="#F3EBDD" />
            <path d="M50,28 C53,34 54,40 52,45 C50,50 46,50 44,45 C42,40 43,34 50,28 Z" fill="#E6C543" />
            
            {/* Base block candle crown icon */}
            <path d="M43,58 L57,58 L55,80 L45,80 Z" fill="#D6AF2A" opacity="0.65" />
            <line x1="50" y1="48" x2="50" y2="58" stroke="#5A1F2E" strokeWidth="1.5" />

            {/* Glowing sparkles */}
            <polygon points="50,10 52,14 56,15 52,16 50,20 48,16 44,15 48,14" fill="#FAF5EC" />
          </svg>
        </div>
      );

    case 2: // ID '3' - A História do Tarot (Beige/Tarot Card/Moon)
      return (
        <div className="w-full h-full relative overflow-hidden bg-[#D2C5B4] flex items-center justify-center select-none">
          <div className="absolute inset-2 border-2 border-[#11100C]/10 rounded-[14px]" />
          <div className="absolute inset-3.5 border border-[#11100C]/20 rounded-[12px]" />

          {/* Central elegant Card Frame */}
          <div className="w-[84px] h-[130px] rounded-[10px] border-2 border-[#5A1F2E]/60 bg-[#FAF5EC] shadow-sm flex flex-col items-center justify-center relative p-1.5 transform group-hover:rotate-1 duration-500 transition-all z-10">
            {/* Card inner print board border */}
            <div className="absolute inset-1 border border-[#5A1F2E]/25 rounded-[6px]" />
            
            {/* Sparkles */}
            <div className="absolute top-2 left-2 w-1 h-1 bg-[#D6AF2A] rounded-full" />
            <div className="absolute top-2 right-2 w-1 h-1 bg-[#D6AF2A] rounded-full" />
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#D6AF2A] rounded-full" />
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-[#D6AF2A] rounded-full" />

            {/* Celestial Moon Face inside Tarot card */}
            <svg className="w-12 h-12 text-[#5A1F2E]" viewBox="0 0 100 100" fill="currentColor">
              {/* Star group */}
              <path d="M50,15 L52,24 L61,26 L52,28 L50,37 L48,28 L39,26 L48,24 Z" fill="#D6AF2A" />
              {/* Crescent Moon */}
              <path d="M35,50 C35,32 48,22 62,25 C50,26 42,36 42,50 C42,64 50,74 62,75 C48,78 35,68 35,50 Z" />
              {/* Moon eye details */}
              <circle cx="48" cy="48" r="1.2" fill="#FAF5EC" />
              {/* Floating stars */}
              <polygon points="68,40 70,42 72,40 70,38" fill="#D6AF2A" />
              <polygon points="68,60 70,62 72,60 70,58" fill="#D6AF2A" />
            </svg>
          </div>
          
          {/* Background rays radiating from card */}
          <svg className="absolute inset-0 w-full h-full text-white/40 pointer-events-none" viewBox="0 0 100 100">
            <line x1="0" y1="0" x2="30" y2="30" stroke="currentColor" strokeWidth="1" />
            <line x1="100" y1="0" x2="70" y2="30" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="100" x2="30" y2="70" stroke="currentColor" strokeWidth="1" />
            <line x1="100" y1="100" x2="70" y2="70" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      );

    case 3: // ID '4' - Tarot e Baralho Cigano (Crossed cards)
      return (
        <div className="w-full h-full relative overflow-hidden bg-[#606C38] flex items-center justify-center select-none">
          <div className="absolute inset-2 border border-[#FAF5EC]/30 rounded-[14px] pointer-events-none" />
          <div className="absolute inset-3 border border-[#D6AF2A]/20 rounded-[12px] pointer-events-none" />

          {/* Two crossed cards icon */}
          <div className="relative w-28 h-28 flex items-center justify-center">
            
            {/* Card 1: Angled left */}
            <div className="absolute w-[62px] h-[98px] rounded-[8px] border-2 border-[#D6AF2A]/85 bg-[#454425] shadow-md transform -rotate-[16deg] translate-x-[-15px] flex items-center justify-center select-none group-hover:-rotate-[19deg] duration-500 transition-all">
              <div className="absolute inset-1 border border-[#D6AF2A]/30 rounded-[4px]" />
              {/* Back card ornament */}
              <svg className="w-7 h-7 text-[#D6AF2A]/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="12" r="6" />
                <line x1="12" y1="3" x2="12" y2="21" />
                <line x1="3" y1="12" x2="21" y2="12" />
              </svg>
            </div>

            {/* Card 2: Angled right, overlapping */}
            <div className="absolute w-[62px] h-[98px] rounded-[8px] border-2 border-[#D6AF2A]/85 bg-[#FAF5EC] shadow-lg transform rotate-[10deg] translate-x-[15px] flex flex-col items-center justify-between p-2 select-none group-hover:rotate-[13deg] duration-500 transition-all z-10">
              <div className="absolute inset-1 border border-[#606C38]/25 rounded-[4px]" />
              {/* Card top-left value */}
              <span className="text-[7.5px] font-sans font-extrabold text-[#606C38] self-start leading-none">VIII</span>
              {/* Central Cigano Key symbol */}
              <svg className="w-8 h-8 text-[#606C38] my-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12,2 A5,5 0 0,0 7,7 C7,9.3 8.3,11.2 10.3,12 C10.3,14 10.3,21 10.3,21 L12.3,21 L12.3,18 L14.3,18 L14.3,16 L12.3,16 L12.3,14 H13.7 C15.7,13.2 17,11.3 17,7 A5,5 0 0,0 12,2 Z" />
                <circle cx="12" cy="7" r="1.5" fill="currentColor" />
              </svg>
              {/* Card bottom-right value */}
              <span className="text-[7.5px] font-sans font-extrabold text-[#606C38] self-end leading-none">KEY</span>
            </div>

            {/* Sparkling stars */}
            <svg className="absolute inset-0 w-full h-full text-[#FAF5EC]/70 pointer-events-none" viewBox="0 0 100 100">
              <path d="M82,18 L84,23 L89,24 L84,25 L82,30 L80,25 L75,24 L80,23 Z" fill="currentColor" />
              <path d="M18,72 L20,77 L25,78 L20,79 L18,84 L16,79 L11,78 L16,77 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      );

    case 4: // ID '5' - Panteão dos Orixás (Off-white/Sun & Moon Orixá energies)
      return (
        <div className="w-full h-full relative overflow-hidden bg-[#FAF5EC] flex items-center justify-center select-none">
          <div className="absolute inset-2 border-2 border-[#11100C]/12 rounded-[14px] pointer-events-none" />
          <div className="absolute inset-3.5 border border-[#A67C52]/30 rounded-[11px] pointer-events-none" />

          {/* Central sunburst with inner crescent moon (conjunction of cosmos Orixá force) */}
          <svg className="w-24 h-24 text-[#D6AF2A] transform group-hover:scale-105 duration-500 transition-all" viewBox="0 0 120 120">
            {/* Radiating sun spikes */}
            <g stroke="#D6AF2A" strokeWidth="1.2" opacity="0.8">
              <line x1="60" y1="16" x2="60" y2="104" />
              <line x1="16" y1="60" x2="104" y2="60" />
              <line x1="29" y1="29" x2="91" y2="91" />
              <line x1="29" y1="91" x2="91" y2="29" />
              {/* Wavy mid rays in dark bronze */}
              <path d="M60,16 C63,22 57,28 60,35" stroke="#A67C52" fill="none" />
              <path d="M60,104 C57,98 63,92 60,85" stroke="#A67C52" fill="none" />
              <path d="M16,60 C22,57 28,63 35,60" stroke="#A67C52" fill="none" />
              <path d="M104,60 C98,63 92,57 85,60" stroke="#A67C52" fill="none" />
            </g>

            {/* Center golden sun disk & dark crest moon overlapping */}
            <circle cx="60" cy="60" r="21" fill="#FAF5EC" stroke="#D6AF2A" strokeWidth="1.5" />
            <circle cx="60" cy="60" r="17" fill="#FAF5EC" />
            
            {/* The gold moon sliver */}
            <path d="M52,60 C52,48 59,42 68,44 C60,45 56,52 56,60 C56,68 60,75 68,76 C59,78 52,72 52,60 Z" fill="#11100C" />
            <circle cx="60" cy="53" r="1" fill="#D6AF2A" />
            <circle cx="60" cy="67" r="1" fill="#D6AF2A" strokeWidth="0" />
            
            {/* Tiny stars around */}
            <g fill="#11100C">
              <polygon points="34,44 36,46 38,44 36,42" />
              <polygon points="86,76 88,78 90,76 88,74" />
            </g>
          </svg>
        </div>
      );

    case 5: // ID '6' - Qualquer Pessoa Pode Jogar Tarot? (Dark/Mystical Eye of Oracle)
      return (
        <div className="w-full h-full relative overflow-hidden bg-[#2C0A12] flex items-center justify-center select-none">
          <div className="absolute inset-2 border border-[#FAF5EC]/20 rounded-[14px]" />
          
          {/* Subtle star matrix */}
          <svg className="absolute inset-0 w-full h-full text-[#D6AF2A]/30 pointer-events-none" viewBox="0 0 100 100">
            <line x1="50" y1="12" x2="50" y2="88" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 3" />
            <circle cx="22" cy="30" r="1" fill="currentColor" />
            <circle cx="78" cy="30" r="1" fill="currentColor" />
            <circle cx="20" cy="70" r="1" fill="currentColor" />
            <circle cx="80" cy="72" r="1" fill="currentColor" strokeWidth="0" />
          </svg>

          {/* Golden third eye motif */}
          <svg className="w-24 h-24 text-[#D6AF2A] transform group-hover:scale-105 duration-500 transition-all z-10" viewBox="0 0 100 100" fill="none">
            {/* Outer eye contour lines */}
            <path d="M20,50 C32,32 68,32 80,50 C68,68 32,68 20,50 Z" stroke="#FAF5EC" strokeWidth="1.5" />
            
            {/* Eyeball iris outline container */}
            <circle cx="50" cy="50" r="14" stroke="#D6AF2A" strokeWidth="1.2" />
            <circle cx="50" cy="50" r="9" fill="#FAF5EC" />
            <circle cx="50" cy="50" r="4.5" fill="#2C0A12" />
            
            {/* Highlight */}
            <circle cx="52" cy="48" r="1.5" fill="white" />

            {/* Glowing Eyelashes / Sparks */}
            <g stroke="#D6AF2A" strokeWidth="1" strokeLinecap="round">
              {/* Eyelash upward ticks */}
              <line x1="50" y1="32" x2="50" y2="24" />
              <line x1="34" y1="38" x2="28" y2="30" />
              <line x1="66" y1="38" x2="72" y2="30" />
              {/* Eyelash downward ticks */}
              <line x1="50" y1="68" x2="50" y2="76" />
              <line x1="34" y1="62" x2="28" y2="70" />
              <line x1="66" y1="62" x2="72" y2="70" />
            </g>

            {/* Elegant tiny star hanging */}
            <polygon points="50,12 51.5,14.5 54,15 51.5,15.5 50,18 48.5,15.5 46,15 48.5,14.5" fill="#D6AF2A" />
          </svg>
        </div>
      );

    case 6: // ID '7' - Mitos e Verdades (Ivory/Celestial Crescent & Constellation)
      return (
        <div className="w-full h-full relative overflow-hidden bg-[#FAF5E8] flex items-center justify-center select-none">
          <div className="absolute inset-2 border-2 border-[#A67C52]/20 rounded-[14px]" />
          
          {/* Subtle concentric rings */}
          <div className="absolute w-44 h-44 rounded-full border border-[#A67C52]/10 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-dashed border-[#A67C52]/20" />
          </div>

          {/* Gorgeous crescent moon & hanging star design */}
          <svg className="w-24 h-24 text-[#5A1F2E] transform group-hover:scale-105 duration-500 transition-all z-10" viewBox="0 0 100 100" fill="currentColor">
            {/* The Crescent Moon */}
            <path d="M38,50 C38,32 50,22 64,24 C52,25 44,35 44,50 C44,65 52,75 64,76 C50,78 38,68 38,50 Z" />
            
            {/* Starburst hanging of moon point */}
            <path d="M68,50 L71,56 L78,58 L71,60 L68,66 L65,60 L58,58 L65,56 Z" fill="#D6AF2A" />
            
            {/* Dotted lines constellations */}
            <line x1="42" y1="28" x2="25" y2="28" stroke="#A67C52" strokeWidth="0.75" strokeDasharray="1.5 2" />
            <line x1="42" y1="72" x2="25" y2="72" stroke="#A67C52" strokeWidth="0.75" strokeDasharray="1.5 2" />
            
            {/* Small nodes on stars */}
            <circle cx="25" cy="28" r="2.5" fill="#D6AF2A" />
            <circle cx="25" cy="72" r="2.5" fill="#D6AF2A" />
            <circle cx="78" cy="26" r="1.5" fill="#D6AF2A" />
            <circle cx="78" cy="74" r="1.5" fill="#D6AF2A" />
          </svg>
        </div>
      );

    case 7: // ID '8' - Tarot é Dom ou Aprendizado (Charcoal/Magical Sparkles Cluster)
      default:
      return (
        <div className="w-full h-full relative overflow-hidden bg-[#11100C] flex items-center justify-center select-none">
          <div className="absolute inset-2 border border-[#FAF5EC]/15 rounded-[14px]" />
          <div className="absolute inset-3 border border-[#D6AF2A]/10 rounded-[12px]" strokeDasharray="3 3" />

          {/* Group of sparkles constellations representing the "learning path / sparks of wisdom" */}
          <svg className="w-24 h-24 text-[#D6AF2A] transform group-hover:scale-110 duration-500 transition-all z-10" viewBox="0 0 100 100" fill="currentColor">
            {/* Star 1: Central Large spark */}
            <path d="M50,25 L53,42 L70,45 L53,48 L50,65 L47,48 L30,45 L47,42 Z" />
            <circle cx="50" cy="45" r="2" fill="#FAF5EC" />

            {/* Star 2: Top Right smaller spark */}
            <path d="M72,18 L73.5,26 L82,27 L73.5,28.5 L72,37 L70.5,28.5 L62,27 L70.5,26 Z" fill="#F3EBDD" opacity="0.8" />

            {/* Star 3: Bottom Left even smaller spark */}
            <path d="M26,62 L27,68 L34,69 L27,70 L26,76 L25,70 L18,69 L25,68 Z" fill="#D6AF2A" opacity="0.7" />

            {/* Linked constellation lines in dark gold */}
            <line x1="50" y1="45" x2="72" y2="27" stroke="#D6AF2A" strokeWidth="0.8" opacity="0.25" strokeDasharray="1 2" />
            <line x1="50" y1="45" x2="26" y2="69" stroke="#D6AF2A" strokeWidth="0.8" opacity="0.25" strokeDasharray="1 2" />

            {/* Glowing magic dust circular spots */}
            <circle cx="68" cy="56" r="1.5" fill="#FAF5EC" opacity="0.5" />
            <circle cx="32" cy="32" r="1" fill="#D6AF2A" opacity="0.4" />
            <circle cx="52" cy="20" r="1" fill="#FAF5EC" opacity="0.6" />
            <circle cx="48" cy="72" r="1.5" fill="#D6AF2A" opacity="0.4" />
          </svg>
        </div>
      );
  }
}
