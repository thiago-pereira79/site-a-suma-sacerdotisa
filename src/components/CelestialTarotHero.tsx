import { motion } from 'motion/react';
import { Sparkles, Moon } from 'lucide-react';

export function CelestialTarotHero() {
  return (
    <div className="relative w-full h-80 min-h-[320px] flex items-center justify-center overflow-visible pointer-events-none select-none">
      {/* Mystical radial backup glow */}
      <div className="absolute w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute w-72 h-72 bg-purple-950/10 rounded-full blur-3xl" />

      {/* 1. Golden Crescent Moon in the sky */}
      <motion.div
        animate={{ 
          y: [0, -6, 6, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 9, 
          ease: 'easeInOut' 
        }}
        className="absolute top-4 left-6 md:left-12 filter drop-shadow-[0_0_12px_rgba(245,158,11,0.25)]"
      >
        <Moon className="w-20 h-20 fill-amber-300/10 text-amber-300/80" />
      </motion.div>

      {/* 2. Overlapping Tarot Cards Center */}
      <div className="relative flex items-center justify-center translate-x-4">
        {/* Card 1 - Left / Behind */}
        <motion.div
          initial={{ rotate: -14, x: -35, y: 15 }}
          animate={{ rotate: -12, x: -30, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute w-32 h-52 bg-[#080517] border border-amber-500/20 rounded-xl p-2 pb-3 shadow-2xl flex flex-col justify-between"
        >
          {/* Detailed Golden Backside Pattern */}
          <div className="w-full h-full border border-amber-500/10 rounded-lg p-1.5 flex flex-col justify-between items-center relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#100c28] via-[#05030f] to-[#080517]">
            {/* Outer border & dots */}
            <div className="absolute inset-0.5 border border-dashed border-amber-500/5 rounded-md pointer-events-none" />
            
            <span className="text-amber-500/35 text-[8px] font-cinzel tracking-[0.2em] font-semibold">A SUMA</span>
            
            {/* Compass/Sunburst center */}
            <div className="relative w-14 h-14 flex items-center justify-center border border-amber-500/10 rounded-full">
              <div className="absolute w-10 h-10 border border-dashed border-amber-500/15 rounded-full animate-spin [animation-duration:120s]" />
              <div className="absolute w-1.5 h-1.5 bg-amber-400/50 rounded-full" />
              {/* Star-like crossing lines */}
              <div className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
              <div className="absolute h-12 w-[1px] bg-gradient-to-b from-transparent via-amber-500/25 to-transparent" />
              <div className="absolute w-8 h-[1px] bg-[linear-gradient(45deg,transparent,rgba(217,119,6,0.2),transparent)] rotate-45" />
              <div className="absolute w-8 h-[1px] bg-[linear-gradient(45deg,transparent,rgba(217,119,6,0.2),transparent)] -rotate-45" />
            </div>

            <span className="text-amber-500/35 text-[8px] font-cinzel tracking-[0.2em] font-semibold">SACERDOTISA</span>
          </div>
        </motion.div>

        {/* Card 2 - Right / In Front */}
        <motion.div
          initial={{ rotate: 8, x: 25, y: 10 }}
          animate={{ rotate: 6, x: 20, y: -5 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
          className="absolute w-32 h-52 bg-[#09061a] border-2 border-amber-500/35 rounded-xl p-2 pb-3 shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-10"
        >
          {/* Detailed Golden Backside Pattern */}
          <div className="w-full h-full border border-amber-500/20 rounded-lg p-1.5 flex flex-col justify-between items-center relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#130f30] via-[#060412] to-[#09061a]">
            {/* Outer border & dots */}
            <div className="absolute inset-0.5 border border-dashed border-amber-500/15 rounded-md pointer-events-none" />
            
            <span className="text-amber-500/60 text-[8px] font-cinzel tracking-[0.2em] font-semibold">A SUMA</span>
            
            {/* Sun/Moon Mystic center layout */}
            <div className="relative w-16 h-16 flex items-center justify-center border border-amber-500/20 rounded-full">
              <div className="absolute w-12 h-12 border border-dashed border-amber-500/25 rounded-full" />
              <Moon className="w-7 h-7 text-amber-500/40 fill-amber-500/5 rotate-12" />
              <Sparkles className="w-3.5 h-3.5 text-amber-400 absolute top-2 right-2 animate-pulse" />
              {/* Detailed star rays */}
              <div className="absolute w-14 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
              <div className="absolute h-14 w-[1px] bg-gradient-to-b from-transparent via-amber-500/40 to-transparent" />
            </div>

            <span className="text-amber-500/60 text-[8px] font-cinzel tracking-[0.2em] font-semibold">SACERDOTISA</span>
          </div>
        </motion.div>
      </div>

      {/* 3. Golden Candlestick on the Right */}
      <div className="absolute right-4 md:right-10 bottom-6 z-20 flex flex-col items-center">
        {/* Flame with flickering animation */}
        <div className="relative w-4 h-7 mb-0.5">
          {/* Core glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-5 bg-gradient-to-t from-[#c84a3c] via-amber-500 to-amber-200 rounded-full blur-[1.5px] animate-pulse" />
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-white rounded-full blur-[1px]" />
          {/* Halos */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-amber-500/25 rounded-full blur-md" />
        </div>
        {/* Candle stick body */}
        <div className="w-5.5 h-20 bg-gradient-to-r from-amber-50/95 via-amber-100/90 to-amber-200/60 rounded-sm shadow-md flex items-center justify-center relative overflow-hidden">
          {/* Melting Wax drips */}
          <div className="absolute top-0.5 left-1 w-1 h-6 bg-white/40 rounded-full" />
          <div className="absolute top-1 right-1.5 w-0.5 h-4 bg-white/30 rounded-full" />
          <div className="absolute inset-y-0 right-0 w-2 bg-black/5" />
        </div>
        {/* Antique Gold Candle Holder */}
        <div className="w-11 h-2 bg-gradient-to-r from-amber-600 via-[#8a5d1b] to-amber-700 rounded-t-sm shadow-inner" />
        <div className="w-7 h-3 bg-gradient-to-b from-[#8a5d1b] to-[#603e0d]" />
        <div className="w-10 h-1 bg-[#8a5d1b]" />
        <div className="w-14 h-3 bg-gradient-to-r from-[#603e0d] via-[#dca34f]/50 to-[#603e0d] rounded-t-lg" />
      </div>

      {/* 4. Amethyst/Purple Crystal Clusters bottom-left */}
      <div className="absolute left-4 md:left-14 bottom-4 z-20 flex items-end space-x-[-14px]">
        {/* Left Crystal slanted */}
        <div className="w-6 h-18 bg-gradient-to-tr from-indigo-950 via-[#5b2591] to-purple-300/30 border border-purple-500/25 rounded-t-lg shadow-lg rotate-[-15deg] relative">
          <div className="absolute top-0 right-0 w-2.5 h-full bg-white/5 rounded-tr-lg" />
        </div>
        
        {/* Center Crystal tallest */}
        <div className="w-8 h-26 bg-gradient-to-t from-[#0e0724] via-[#4f1885] to-amber-100/30 border-2 border-purple-500/35 rounded-t-2xl shadow-xl relative z-10">
          {/* Facet sheen */}
          <div className="absolute top-0 right-0 w-3.5 h-full bg-white/10 rounded-tr-2xl" />
          <Sparkles className="w-4 h-4 text-amber-200 absolute top-2 left-1/2 -translate-x-1/2 animate-pulse" />
        </div>

        {/* Right Crystal slanted */}
        <div className="w-5 h-16 bg-gradient-to-tl from-indigo-950 via-[#6924a4] to-purple-400/20 border border-purple-500/20 rounded-t-md shadow-lg rotate-[18deg] relative">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-white/5 rounded-tl-md" />
        </div>
      </div>

      {/* 5. Delicate floating sparkles */}
      <div className="absolute inset-0">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 absolute top-12 right-20 animate-pulse [animation-duration:3s]" />
        <div className="absolute top-24 left-24 w-1.5 h-1.5 bg-amber-400/55 rounded-full animate-ping" />
        <div className="absolute bottom-28 left-4 w-1 h-1 bg-amber-100/50 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-28 w-2 h-2 bg-purple-500/20 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
