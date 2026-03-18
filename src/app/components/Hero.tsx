import { Link } from 'react-router';
import { Sparkles } from 'lucide-react';
import { StarryBackground } from './StarryBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starry Background */}
      <StarryBackground opacity={0.06} />
      
      {/* Nebula Effects - Subtle Purple/Blue Clouds */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[10%] right-[15%] w-[700px] h-[700px] bg-purple-900/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] bg-blue-950/25 rounded-full blur-[130px]"></div>
        <div className="absolute top-[50%] left-[50%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Decorative Star Outline - Top Left */}
      <div className="absolute top-16 left-16 opacity-30 hidden lg:block">
        <svg width="50" height="50" viewBox="0 0 60 60" fill="none" stroke="#D4AF37" strokeWidth="1.5">
          <path d="M30 5 L35 25 L55 30 L35 35 L30 55 L25 35 L5 30 L25 25 Z" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Top Ornament - Four-pointed star with lines */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="w-20 md:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37] flex-shrink-0">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="currentColor" />
          </svg>
          <div className="w-20 md:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
        </div>

        {/* Title - Clean and Single, No Shadow Effects */}
        <h1 
          className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D4AF37] mb-12 leading-tight tracking-[0.15em] px-4"
          style={{ textShadow: 'none' }}
        >
          A SUMA SACERDOTISA
        </h1>

        {/* Subtitle - Terracotta */}
        <h2 className="font-[family-name:var(--font-serif)] text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#C85A3E] mb-10 leading-relaxed px-4">
          Tarot Terapêutico para autoconhecimento,<br />
          cura e direcionamento
        </h2>

        {/* Description - Light Gray */}
        <p className="text-[#B8B8B8] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-16 leading-[1.8] px-4">
          Consultas online com foto e áudio, para você revisitar a leitura sempre<br className="hidden md:block" /> 
          que precisar e reconectar-se com sua essência.
        </p>

        {/* Bottom Ornament - Mystical Symbol */}
        <div className="flex justify-center mt-20">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-16 md:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]/50"></div>
            <Sparkles className="w-4 h-4 text-[#D4AF37] opacity-60 flex-shrink-0" />
            <div className="w-16 md:w-20 h-[1px] bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]/50"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient - Smooth Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0A1A] to-transparent pointer-events-none"></div>
    </section>
  );
}