import { TESTIMONIALS } from '../data';
import { Sparkles, MessageCircle, Moon, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { BackButton } from './BackButton';

export function TestimonialsSection() {
  // Ordered sequence of exactly 15 classes requested by the user
  const testimonialCardStyles = [
    "card-paper-light",
    "card-olive",
    "card-bordeaux",

    "card-kraft",
    "card-paper-aged",
    "card-olive-deep",

    "card-bordeaux-deep",
    "card-caramel",
    "card-paper-light",

    "card-olive",
    "card-paper-aged",
    "card-bordeaux",

    "card-kraft",
    "card-olive-deep",
    "card-paper-light",
  ];

  // Dynamic scrapbook configuration mapping for handmade variations
  const cardConfigs = [
    { rotation: "rotate-[-1.5deg]", hasTape: true, tapeAngle: "rotate-[-2.2deg]", hasClip: false, clipPosition: null, flower: "sprig-left" },
    { rotation: "rotate-[1.2deg]", hasTape: true, tapeAngle: "rotate-[1.8deg]", hasClip: false, clipPosition: null, flower: null },
    { rotation: "rotate-[-2deg]", hasTape: false, tapeAngle: null, hasClip: true, clipPosition: "top-center", flower: "sprig-right" },
    { rotation: "rotate-[2.2deg]", hasTape: true, tapeAngle: "rotate-[-1.5deg]", hasClip: false, clipPosition: null, flower: "sprig-left" },
    { rotation: "rotate-[-1deg]", hasTape: false, tapeAngle: null, hasClip: true, clipPosition: "top-left", flower: null },
    { rotation: "rotate-[1.8deg]", hasTape: true, tapeAngle: "rotate-[1.2deg]", hasClip: false, clipPosition: null, flower: "sprig-right" },
    { rotation: "rotate-[-2.2deg]", hasTape: true, tapeAngle: "rotate-[-2.5deg]", hasClip: false, clipPosition: null, flower: "sprig-left" },
    { rotation: "rotate-[1.5deg]", hasTape: true, tapeAngle: "rotate-[1.5deg]", hasClip: false, clipPosition: null, flower: "flower-bottom-right" },
    { rotation: "rotate-[-1.8deg]", hasTape: true, tapeAngle: "rotate-[-1.8deg]", hasClip: false, clipPosition: null, flower: "sprig-right" },
    { rotation: "rotate-[2deg]", hasTape: true, tapeAngle: "rotate-[2.2deg]", hasClip: false, clipPosition: null, flower: null },
    { rotation: "rotate-[-1.2deg]", hasTape: false, tapeAngle: null, hasClip: true, clipPosition: "top-left", flower: "flower-bottom-left" },
    { rotation: "rotate-[1.6deg]", hasTape: true, tapeAngle: "rotate-[-1deg]", hasClip: false, clipPosition: null, flower: "sprig-right" },
    { rotation: "rotate-[-2.5deg]", hasTape: false, tapeAngle: null, hasClip: true, clipPosition: "top-right", flower: "flower-bottom-left" },
    { rotation: "rotate-[1.4deg]", hasTape: true, tapeAngle: "rotate-[1.5deg]", hasClip: false, clipPosition: null, flower: null },
    { rotation: "rotate-[-1.5deg]", hasTape: true, tapeAngle: "rotate-[-1.2deg]", hasClip: false, clipPosition: null, flower: "sprig-right" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 md:px-8 max-w-7xl mx-auto text-[#11100C] selection:bg-[#B75E3C]/20 selection:text-[#5A1F2E]"
    >
      <BackButton />

      {/* Page Header */}
      <div className="text-center mb-10 relative">
        <h1 className="font-serif text-[42px] sm:text-[54px] text-[#000000] font-medium tracking-tight">Depoimentos</h1>
        <p className="text-[#000000] font-serif text-[15px] sm:text-[17.5px] mt-3 max-w-2xl mx-auto font-normal">
          Relatos reais de quem vivenciou a clareza e o acolhimento do Tarot Terapêutico
        </p>
      </div>

      {/* Grid of other testimonials (Alternating scrapbook styles) - DEPOIMENTOS.png */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 justify-center items-stretch overflow-visible px-2 max-w-5xl mx-auto mb-10 sm:mb-12">
        {TESTIMONIALS.map((rev, index) => {
          // Get correct style sequence index
          const styleIndex = index % testimonialCardStyles.length;
          const styleClass = testimonialCardStyles[styleIndex];
          
          // Get specific decoration model
          const cfg = cardConfigs[styleIndex];
          const isDark = styleClass.includes("olive") || styleClass.includes("bordeaux");

          return (
            <div 
              key={rev.id}
              className={`relative flex flex-col justify-stretch overflow-visible transition-all duration-300 hover:scale-[1.03] filter drop-shadow-[3px_5px_8px_rgba(31,26,20,0.13)] hover:drop-shadow-[6px_12px_18px_rgba(31,26,20,0.20)] ${cfg.rotation} w-full max-w-[320px] md:max-w-[290px] md:w-[290px] min-h-[390px] mx-auto`}
            >
              {/* Tapete/Tape centered on top, overlapping the cut border */}
              {cfg.hasTape && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5.5 scrapbook-tape ${cfg.tapeAngle} opacity-90 z-20`} />
              )}

              {/* Paperclip attached at top edges, overlapping the cut border */}
              {cfg.hasClip && (
                <div 
                  className={`absolute -top-4 ${
                    cfg.clipPosition === 'top-left' ? 'left-6 rotate-[-12deg]' : 
                    cfg.clipPosition === 'top-right' ? 'right-6 rotate-[15deg]' : 
                    'left-1/2 -translate-x-1/2 rotate-[5deg]'
                  } z-30`}
                >
                  <div className="scrapbook-paperclip" />
                </div>
              )}

              {/* Pressed Botanical Branch/Sprig (Left), bleeding off the bottom sides */}
              {cfg.flower === 'sprig-left' && (
                <BotanicalSprig className={`absolute -left-3.5 bottom-6 w-11 h-[110px] pointer-events-none select-none z-20 opacity-40 ${
                  isDark ? 'text-[#F1E5D6]/35' : 'text-[#5C3D2E]/30'
                }`} />
              )}

              {/* Pressed Botanical Branch/Sprig (Right), bleeding off the bottom sides */}
              {cfg.flower === 'sprig-right' && (
                <BotanicalSprig className={`absolute -right-3.5 bottom-6 w-11 h-[110px] pointer-events-none select-none z-20 scale-x-[-1] opacity-40 ${
                  isDark ? 'text-[#F1E5D6]/35' : 'text-[#5C3D2E]/30'
                }`} />
              )}

              {/* Violet/Cosmos Dried Flower on Bottom Left with small tape */}
              {cfg.flower === 'flower-bottom-left' && (
                <div className="absolute -left-4 -bottom-4 w-12 h-20 z-20 pointer-events-none">
                  <DriedFlower className="w-full h-full text-[#7A4B69]/70 rotate-[-10deg]" />
                  <div className="absolute left-3.5 bottom-4 w-5 h-2.5 bg-[#D8BE94]/50 rotate-[32deg] border-l border-r border-[#4A3428]/10 z-30" />
                </div>
              )}

              {/* Red-dried wildflower on Bottom Right with small tape */}
              {cfg.flower === 'flower-bottom-right' && (
                <div className="absolute -right-4 -bottom-4 w-12 h-20 z-20 pointer-events-none">
                  <DriedFlower className="w-full h-full text-[#5A2418]/70 rotate-[15deg]" />
                  <div className="absolute right-3.5 bottom-4 w-5 h-2.5 bg-[#D8BE94]/50 rotate-[-25deg] border-l border-r border-[#4A3428]/10 z-30" />
                </div>
              )}

              {/* Card content wrapper (clipped using irregular deckle cut edge clip-path and styled with physically-fibrous texture) */}
              <div className={`p-6 sm:p-8 pt-9 pb-8 flex flex-col justify-between h-full scrapbook-texture card-torn-${(index % 3) + 1} ${styleClass}`}>
                
                {/* Large elegant quote mark at top left */}
                <span className={`font-serif text-[42px] leading-none font-bold block mb-2 select-none -mt-2 ${
                  isDark ? 'text-[#C59B6A]/30' : 'text-[#B75E3C]/25'
                }`}>
                  “
                </span>

                <div className="flex-grow flex flex-col justify-center">
                  <p className="text-[13.5px] leading-relaxed font-sans font-light italic mb-6">
                    {rev.text}
                  </p>
                </div>

                {/* Card Footer: centered text layout to match DEPOIMENTOS.png */}
                <div className={`border-t pt-4 flex flex-col items-center justify-center text-center mt-auto ${
                  isDark ? 'border-[#F1E5D6]/15' : 'border-[#4A3428]/12'
                }`}>
                  <span className="font-serif text-[15.5px] italic font-bold">
                    {rev.name}
                  </span>
                  <span className={`text-[11px] font-sans tracking-wide uppercase mt-1 opacity-75`}>
                    {rev.location}
                  </span>

                  {/* 5-star rating underneath the location */}
                  <div className="flex items-center justify-center space-x-1 text-[#D6AF2A] mt-3 select-none">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D6AF2A] stroke-[1.2] text-[#D6AF2A]" />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Cozy card advice snippet at bottom of page */}
      <section className="relative text-center max-w-2xl mx-auto py-12 px-6 sm:px-10 rounded-2xl border border-[#4A3428]/15 bg-[#F3EBDD]/65 shadow-md">
        {/* washi tape centering */}
        <div className="absolute top-[-11px] left-1/2 -translate-x-1/2 w-24 h-5.5 scrapbook-tape rotate-[-1deg]" />
        
        <h3 className="font-serif text-lg sm:text-xl text-[#5A1F2E] mb-3.5 font-bold italic">
          “Cada leitura é feita com ética, sigilo e presença.”
        </h3>
        <p className="text-[13.5px] text-[#4A3428] font-sans leading-relaxed font-light max-w-md mx-auto">
          Encontre um espaço seguro para se ouvir, se acolher, compreender seus ciclos e iluminar novos caminhos. No seu tempo.
        </p>
      </section>
    </motion.div>
  );
}

// Hand-drawn SVG representing a delicate pressed botanical branch with leaves
function BotanicalSprig({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 200" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M50,190 C50,140 45,70 55,15" />
      <path d="M50,170 C38,165 32,150 40,142 C45,138 49,152 50,158" />
      <path d="M50,165 C62,160 68,145 60,137 C55,133 51,147 50,153" />
      
      <path d="M49,135 C35,130 28,115 37,105 C42,99 47,112 49,120" />
      <path d="M50,128 C64,123 71,108 62,98 C57,92 52,105 50,113" />
      
      <path d="M48,95 C32,90 25,75 35,65 C40,59 46,72 48,80" />
      <path d="M50,88 C66,83 73,68 63,58 C58,52 52,65 50,73" />
      
      <path d="M49,55 C35,50 30,35 40,25 C44,21 48,32 49,40" />
      <path d="M51,48 C65,43 70,28 60,18 C56,14 52,25 51,33" />
      
      <path d="M52,22 C48,15 45,2 53,5 C55,7 54,15 52,22" />
    </svg>
  );
}

// Hand-drawn SVG representing a dried wildflower/violet bud
function DriedFlower({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 150" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M50,140 C50,115 48,90 52,55" />
      <path d="M49,110 C42,108 38,102 44,98 C46,96 48,103 49,105" />
      <path d="M51,95 C58,93 62,87 56,83 C54,81 52,88 51,90" />
      <g fill="currentColor" fillOpacity="0.25">
        <path d="M52,55 C52,40 45,30 35,38 C28,44 40,50 49,53" />
        <path d="M52,55 C65,45 68,32 58,28 C52,25 50,40 50,51" />
        <path d="M52,55 C42,50 30,55 32,65 C33,72 44,62 49,56" />
        <path d="M52,55 C62,60 72,62 70,50 C68,42 58,50 51,54" />
        <path d="M52,55 C48,35 52,20 60,18 C65,16 58,35 53,50" />
      </g>
      <circle cx="51" cy="53" r="5" fill="currentColor" />
    </svg>
  );
}

