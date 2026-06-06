import { Sparkles, MessageCircle, Moon, Star, Shield, HelpCircle, Heart, Compass, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { BackButton } from './BackButton';
import { SectionDivider } from './SectionDivider';

const DelicateBranch = () => (
  <svg viewBox="0 0 100 200" className="w-[60px] h-[120px] sm:w-[70px] sm:h-[140px] text-[#D6AF2A] stroke-current fill-none opacity-85" strokeWidth="1.2" strokeLinecap="round">
    <path d="M50,190 Q44,120 50,10" />
    {/* Leaf 1 */}
    <path d="M50,150 Q28,135 15,145 Q28,155 50,150 Z" />
    {/* Leaf 2 */}
    <path d="M50,125 Q72,110 85,120 Q72,130 50,125 Z" />
    {/* Leaf 3 */}
    <path d="M50,95 Q26,85 16,95 Q26,105 50,95 Z" />
    {/* Leaf 4 */}
    <path d="M50,70 Q74,60 84,70 Q74,80 50,70 Z" />
    {/* Leaf 5 */}
    <path d="M50,45 Q30,35 20,45 Q30,55 50,45 Z" />
    {/* Leaf 6 */}
    <path d="M50,25 Q70,15 76,25 Q68,32 50,25 Z" />
  </svg>
);

export function AboutSection() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full pt-4 sm:pt-6 pb-12 md:pb-16 px-4 md:px-8 text-[#11100C] bg-[#F3EBDD] scrapbook-texture shadow-[0_10px_40px_rgba(17,16,12,0.06)] rounded-b-2xl selection:bg-[#B75E3C]/20 selection:text-[#5A1F2E] border-b border-[#D8CFC0]/40 mt-0 overflow-hidden"
    >
      <BackButton variant="light" className="pb-2.5 sm:pb-3" />

      {/* Hero Editorial - Topo da Página Sobre */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center mb-16 md:mb-20 pt-6 sm:pt-8 relative px-2 sm:px-4">
        {/* Bloco textual à esquerda (6 colunas) */}
        <div className="lg:col-span-6 space-y-4 text-left relative z-10 lg:pr-4">
          <h1 className="font-serif text-[42px] sm:text-[54px] text-[#000000] font-medium tracking-tight leading-none">
            Sobre
          </h1>

          {/* Subtítulo */}
          <p className="font-serif text-[15px] sm:text-[17.5px] text-[#000000] leading-relaxed font-normal max-w-md mt-3">
            Tarot terapêutico online para quem busca escuta, clareza e autoconhecimento.
          </p>
        </div>

        {/* Bloco decorativo à direita (6 colunas) */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end gap-6 sm:gap-8 relative pt-6 lg:pt-0">
          


          {/* Nota adesiva com fita crepe, com layout landscape e visual de colagem boho */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] p-6 sm:p-8 bg-[#EFE5D4]/85 border border-[#D8CFC0]/55 rounded-[3px] shadow-[0_8px_30px_rgba(17,16,12,0.04)] select-none hover:translate-y-[-2px] transition-transform duration-300">
            {/* Fita crepe cenográfica */}
            <div 
              className="absolute top-[-11px] left-1/2 -translate-x-1/2 w-24 h-4.5 bg-[#D9C7A8]/55 border-l border-r border-dashed border-[#4A3428]/10 rotate-[-0.5deg] shadow-xs flex items-center justify-center opacity-90" 
              style={{ 
                clipPath: 'polygon(0% 12%, 8% 0%, 92% 10%, 100% 4%, 96% 92%, 100% 100%, 0% 90%)' 
              }} 
            />

            
            <p className="font-serif italic text-sm sm:text-base text-[#4A3428] leading-relaxed text-center font-normal px-2 sm:px-4">
              "Mais propósito e clareza em suas escolhas, com conexão, ética e transformações reais e duradouras."
            </p>
            

          </div>



        </div>
      </div>

      {/* "Quem é A Suma Sacerdotisa" - SOBRE.png */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24 max-w-5xl mx-auto">
        
        {/* Left column: Arched portrait frame (4 cols) */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative select-none">
            
            {/* Arched Frame */}
            <div className="w-64 sm:w-72 aspect-[3/4.4] rounded-[160px_160px_12px_12px] border border-[#4A3428]/24 bg-[#F1E5D6] overflow-hidden shadow-[0_16px_36px_rgba(42,32,24,0.14)] relative">
              <svg className="w-full h-full" viewBox="0 0 300 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                <rect width="300" height="440" fill="#F1E5D6" />
                
                {/* Subtle gold rays in background */}
                <g opacity="0.45" stroke="#D6AF2A" strokeWidth="0.75" strokeDasharray="2 2">
                  <line x1="85" y1="200" x2="10" y2="150" />
                  <line x1="85" y1="200" x2="20" y2="100" />
                  <line x1="85" y1="200" x2="70" y2="50" />
                  <line x1="125" y1="175" x2="125" y2="20" />
                  <line x1="165" y1="200" x2="230" y2="50" />
                  <line x1="165" y1="200" x2="280" y2="100" />
                  <line x1="165" y1="200" x2="290" y2="150" />
                </g>

                {/* Golden Sun / Halo behind the portrait */}
                <circle cx="125" cy="200" r="55" fill="#D6AF2A" fillOpacity="0.15" stroke="#D6AF2A" strokeWidth="1.2" />
                <circle cx="125" cy="200" r="50" stroke="#D6AF2A" strokeWidth="0.75" strokeDasharray="3 2" />
                
                {/* Sun rays radiating */}
                <g stroke="#D6AF2A" strokeWidth="1">
                  <line x1="125" y1="140" x2="125" y2="115" />
                  <line x1="125" y1="260" x2="125" y2="285" />
                  <line x1="65" y1="200" x2="40" y2="200" />
                  <line x1="185" y1="200" x2="210" y2="200" />
                  
                  {/* Diagonals */}
                  <line x1="82.5" y1="157.5" x2="65" y2="140" />
                  <line x1="167.5" y1="157.5" x2="185" y2="140" />
                  <line x1="82.5" y1="242.5" x2="65" y2="260" />
                  <line x1="167.5" y1="242.5" x2="185" y2="260" />
                </g>

                {/* Starburst indicators on the halo */}
                <path d="M125 102 L127 107 L132 109 L127 111 L125 116 L123 111 L118 109 L123 107 Z" fill="#D6AF2A" />
                <path d="M52 200 L54 195 L59 193 L54 191 L52 186 L50 191 L45 193 L50 195 Z" fill="#D6AF2A" />
                <path d="M198 200 L200 195 L205 193 L200 191 L198 186 L196 191 L191 193 L196 195 Z" fill="#D6AF2A" />

                {/* Left botanical branches with bloom */}
                <path d="M50 400 Q40 300 45 200" stroke="#6F7A4E" strokeWidth="1.2" fill="none" />
                <path d="M44 350 Q24 340 30 330 Q40 340 44 350" fill="#6F7A4E" opacity="0.85" />
                <path d="M42 300 Q20 295 24 285 Q34 290 42 300" fill="#6F7A4E" opacity="0.85" />
                <path d="M43 250 Q22 240 28 230 Q38 240 43 250" fill="#6F7A4E" opacity="0.85" />
                <circle cx="48" cy="370" r="10" fill="#B75E3C" fillOpacity="0.9" />
                <circle cx="48" cy="370" r="6" fill="#5A1F2E" />
                <circle cx="48" cy="370" r="2.5" fill="#D6AF2A" />

                {/* Right botanical branches with bloom */}
                <path d="M220 400 Q235 300 225 200" stroke="#6F7A4E" strokeWidth="1.2" fill="none" />
                <path d="M223 350 Q243 340 237 330 Q227 340 223 350" fill="#6F7A4E" opacity="0.85" />
                <path d="M225 300 Q248 295 244 285 Q234 290 225 300" fill="#6F7A4E" opacity="0.85" />
                <path d="M224 250 Q245 240 239 230 Q229 240 224 250" fill="#6F7A4E" opacity="0.85" />
                <circle cx="223" cy="370" r="10" fill="#B75E3C" fillOpacity="0.9" />
                <circle cx="223" cy="370" r="6" fill="#5A1F2E" />
                <circle cx="223" cy="370" r="2.5" fill="#D6AF2A" />

                {/* Hair silhouette base */}
                <path d="M 105 400 C 100 360, 95 320, 100 280 C 105 240, 120 210, 135 210 C 145 210, 155 220, 160 235 C 165 250, 155 270, 150 290 C 145 310, 160 340, 165 370 C 170 390, 160 410, 150 420 L 105 420 Z" fill="#11100C" />
                
                {/* Face profile canvas silhouette overlay */}
                <path d="M 130 330 C 134 320, 136 300, 135 285 C 134 275, 137 265, 142 260 C 146 256, 148 252, 148 248 C 148 245, 146 242, 144 240 C 146 240, 148 240, 150 242 C 152 244, 152 247, 150 249 C 149 251, 151 253, 149 255 C 147 257, 145 259, 144 261 C 142 263, 141 267, 142 270 C 143 273, 144 277, 146 280 C 150 290, 152 300, 154 315 C 156 330, 150 340, 145 350 C 140 360, 138 370, 138 380 L 125 385 Z" fill="#F1E5D6" />

                {/* Elegant Lineart on forehead, nose, lips, chin, jaw */}
                <g stroke="#11100C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 125 345 C 120 360, 115 375, 118 395" />
                  <path d="M 144 300 C 145 312, 141 325, 139 335 C 137 345, 135 355, 136 365" />
                  <path d="M 143 234 Q 146 230, 149 237" />
                  <path d="M 149 237 L 153 248 Q 154 250, 152 251" />
                  <path d="M 152 251 Q 149 252, 148 253" />
                  <path d="M 148 253 Q 151 255, 149 257" />
                  <path d="M 149 257 Q 150 260, 147 261" />
                  <path d="M 147 261 Q 145 264, 144 265" />
                  <path d="M 144 265 C 142 275, 138 285, 134 290" />
                  
                  <path d="M 144 246 Q 146 244, 144 243" strokeWidth="1.2" />
                  <path d="M 143 246 Q 144 248, 145 249" strokeWidth="1" />
                  <path d="M 142 238 Q 145 236, 147 238" strokeWidth="1" />
                  <path d="M 131 262 Q 133 260, 134 262 Q 134 265, 132 266 Q 130 265, 131 262 Z" strokeDasharray="0.5" strokeWidth="1" />
                </g>

                {/* Hair line highlights */}
                <g stroke="#4A3428" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.85">
                  <path d="M 125 212 C 110 220, 105 240, 108 260 C 110 280, 125 290, 120 310" />
                  <path d="M 135 210 C 120 220, 115 245, 119 270 C 122 290, 132 305, 128 325" />
                  <path d="M 145 214 C 135 225, 128 245, 132 265 C 135 282, 142 290, 138 308 C 135 320, 128 330, 125 342" />
                  <path d="M 112 280 Q 100 300, 102 320 T 115 360" />
                  <path d="M 120 295 Q 110 320, 112 340 T 125 380" />
                  <path d="M 130 315 Q 120 340, 122 360 T 132 400" />
                  
                  <path d="M 108 360 C 100 380, 95 400, 92 420" stroke="#11100C" strokeWidth="1.5" />
                  <path d="M 124 372 C 120 390, 115 405, 110 420" stroke="#11100C" strokeWidth="1.5" />
                </g>
                
                {/* Gold tiara */}
                <circle cx="134" cy="222" r="2.5" fill="#D6AF2A" />
                <circle cx="140" cy="225" r="2" fill="#D6AF2A" />
                <circle cx="128" cy="223" r="2" fill="#D6AF2A" />
                <path d="M 128 223 L 134 222 L 140 225" stroke="#D6AF2A" strokeWidth="0.75" fill="none" />

                {/* Stars */}
                <g transform="translate(240, 90)">
                  <path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="#D6AF2A" />
                </g>
                <g transform="translate(60, 120)">
                  <path d="M0 -5 L1 -1.5 L5 0 L1 1.5 L0 5 L-1 1.5 L-5 0 L-1 -1.5 Z" fill="#D6AF2A" />
                </g>
                <g transform="translate(220, 240)">
                  <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="#D6AF2A" />
                </g>
                
                {/* Ground frame board lines */}
                <line x1="15" y1="422" x2="285" y2="422" stroke="#4A3428" strokeOpacity="0.2" strokeWidth="1" />
                <line x1="30" y1="426" x2="270" y2="426" stroke="#4A3428" strokeOpacity="0.1" strokeWidth="0.75" />
              </svg>
            </div>
            
            {/* Soft decorative stars and spacing element */}
            <div className="absolute left-[-15px] bottom-[15%] text-[#D6AF2A] text-[11px] opacity-75">✦</div>
            <div className="absolute right-[-14px] bottom-[10%] text-[#D6AF2A] text-[13px] opacity-50">✦</div>
          </div>
        </div>

        {/* Right column: Biography text content (8 cols) */}
        <div className="lg:col-span-8 space-y-5 text-center lg:text-left">

          
          <h2 className="font-serif text-[28px] md:text-[34px] lg:text-[38px] text-[#000000] font-semibold leading-tight tracking-tight">Quem é A Suma Sacerdotisa</h2>
          <p className="text-[14px] sm:text-[15px] text-[#4A3428] leading-relaxed font-sans font-light">
            Desde 2016, trilho o caminho do Tarot com seriedade, sensibilidade e estudo contínuo. Ao longo desses anos, já realizei milhares de tiragens e acompanhei pessoas de diferentes países em seus processos de autoconhecimento, cura e transformação.
          </p>
          <p className="text-[14px] sm:text-[15px] text-[#4A3428] leading-relaxed font-sans font-light">
            Minha abordagem se baseia no tarot terapêutico, um trabalho que vai além de previsões. Aqui, cada carta é um espelho simbólico capaz de revelar padrões, desbloquear emoções e iluminar caminhos internos. A leitura se torna uma conversa profunda entre você, sua história e o que o Tarot deseja trazer à consciência.
          </p>
          <p className="text-[14px] sm:text-[15px] text-[#4A3428] leading-relaxed font-sans font-light">
            Meu propósito é oferecer orientação com responsabilidade e acolhimento, criando um espaço seguro onde você possa se encontrar, se ouvir e se transformar.
          </p>
        </div>

      </div>

      {/* "O que é o Tarot Terapêutico" - SOBRE.png */}
      <SectionDivider />
      <section className="mb-24 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Philosophical explanation text (7 cols - ~55% width) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h2 className="font-serif text-[28px] md:text-[34px] lg:text-[38px] text-[#000000] font-semibold leading-tight tracking-tight">O que é o tarot terapêutico</h2>
            <p className="text-[14px] sm:text-[15px] text-[#4A3428] leading-relaxed font-sans font-light">
              O tarot terapêutico é uma abordagem integrativa que transcende a mera adivinhação. Aqui, as cartas não operam como sentenças dogmáticas fatalistas, mas funcionam como perfeitos espelhos que trazem à tona conteúdos inconscientes e energias de momento.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#4A3428] leading-relaxed font-sans font-light">
              Ele nos serve como uma fabulosa bússola de escolhas. Através da interpretação madura e com foco na sua realidade prática, o Tarot clareia desvios ocultos e reestabelece o seu discernimento pessoal para que você decida seus rumos com responsabilidade e livre-arbítrio.
            </p>
          </div>

          {/* Right Column: Premium Philosophical Card Replace Cards Group */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div 
              className="relative w-full max-w-[340px] bg-[#FDFBF7] p-6 sm:p-8 rounded-[16px] flex flex-col justify-center items-center text-center select-none"
              style={{
                boxShadow: '0 8px 24px -8px rgba(74, 52, 40, 0.08), 0 1px 3px rgba(74, 52, 40, 0.03)',
                border: '1px solid #E6DBC6'
              }}
            >
              {/* Elegant Inner Border Frame */}
              <div className="absolute inset-[8px] rounded-[10px] border border-[#E6DBC6]/60 pointer-events-none" />

              {/* Tape crepe decorativa on top */}
              <div 
                className="absolute top-[-9px] left-1/2 -translate-x-1/2 w-20 h-4 bg-[#D8BE94]/50 backdrop-blur-[0.5px] border-l border-r border-dashed border-[#4A3428]/15 rotate-[-1.5deg] z-10"
                style={{
                  clipPath: 'polygon(0% 12%, 12% 0%, 25% 6%, 42% 1%, 58% 5%, 75% 1%, 88% 8%, 100% 3%, 97% 92%, 100% 100%, 88% 94%, 72% 98%, 56% 93%, 42% 97%, 26% 92%, 11% 96%, 0% 90%)'
                }}
              />
              
              <div className="relative z-10 flex flex-col items-center justify-center py-1">
                <p className="font-serif italic text-[#5A1F2E] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed font-semibold">
                  "O tarot não substitui o seu caminho de vida; ele simplesmente afasta a névoa para que você enxergue a estrada."
                </p>
                
                {/* Small elegant star ornament below the quote */}
                <div className="flex items-center justify-center mt-5 space-x-3 opacity-90 w-full">
                  <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#D6AF2A]/40" />
                  <span className="text-[#D6AF2A] text-xs">✦</span>
                  <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#D6AF2A]/40" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pillars of work - SOBRE.png */}
      <SectionDivider />
      <section className="mb-24 max-w-5xl mx-auto relative px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[28px] md:text-[34px] lg:text-[38px] text-[#000000] font-semibold leading-tight tracking-tight">Como esse trabalho acontece</h2>
          <p className="text-[#000000]/78 font-sans text-[14px] sm:text-[15px] mt-2.5 max-w-lg mx-auto font-normal leading-relaxed">
            Cada leitura é conduzida com base em três pilares essenciais:
          </p>
        </div>

        <div className="relative pt-6">
          {/* Subtle botanical branch sketches on sides for ultimate scrapbook fidelity */}
          <div className="absolute left-[-70px] top-[15%] opacity-40 pointer-events-none hidden xl:block select-none transform rotate-[-8deg]">
            <DelicateBranch />
          </div>
          <div className="absolute right-[-70px] top-[20%] opacity-40 pointer-events-none hidden xl:block select-none transform scale-x-[-1] rotate-[8deg]">
            <DelicateBranch />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 justify-items-center justify-center">
            {/* Card 1: Acolhimento */}
            <div 
              className="relative w-full max-w-[300px] aspect-[1/1.12] p-8 bg-[#454425] text-[#F1E5D6] flex flex-col justify-between items-center text-center transition-all duration-300 hover:scale-[1.03] select-none"
              style={{
                clipPath: 'polygon(0.5% 1.5%, 15% 0.5%, 35% 1%, 55% 0.3%, 75% 1.2%, 92% 0.5%, 99.5% 1.8%, 98.5% 15%, 99.2% 38%, 98.3% 58%, 99.4% 78%, 98.6% 92%, 99.5% 98.8%, 85% 98%, 65% 98.8%, 45% 98.1%, 25% 99%, 8% 98.2%, 0.5% 98.5%, 1.2% 82%, 0.4% 58%, 1.4% 38%, 0.6% 18%)',
                filter: 'drop-shadow(2px 8px 12px rgba(17, 16, 12, 0.14))'
              }}
            >
              {/* Tape crepe decorativa on top */}
              <div 
                className="absolute top-[-9px] left-1/2 -translate-x-1/2 w-20 h-4 bg-[#D8BE94]/65 backdrop-blur-[0.5px] border-l border-r border-dashed border-[#4A3428]/15 rotate-[-2.5deg] z-10"
                style={{
                  clipPath: 'polygon(0% 12%, 12% 0%, 25% 6%, 42% 1%, 58% 5%, 75% 1%, 88% 8%, 100% 3%, 97% 92%, 100% 100%, 88% 94%, 72% 98%, 56% 93%, 42% 97%, 26% 92%, 11% 96%, 0% 90%)'
                }}
              />
              
              <div className="flex flex-col items-center flex-grow justify-center mt-3">
                {/* Custom Hand Supporting Heart SVG */}
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#D6AF2A]" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 25 50 C 25 36 34 38 34 26" />
                  <path d="M 34 26 C 29 27 27 34 23 37 Q 19 40 19 47 C 19 56 26 65 37 66 L 45 66 C 45 66 43 56 42 53" />
                  <path d="M 28 47 Q 28 35 29 32" />
                  <path d="M 32 50 Q 32 38 33 35" />
                  <path d="M 75 50 C 75 36 66 38 66 26" />
                  <path d="M 66 26 C 71 27 73 34 77 37 Q 81 40 81 47 C 81 56 74 65 63 66 L 55 66 C 55 66 57 56 58 53" />
                  <path d="M 72 47 Q 72 35 71 32" />
                  <path d="M 68 50 Q 68 38 67 35" />
                  <path d="M 50 48 Q 42 36 42 27 A 8 8 0 0 1 50 19 A 8 8 0 0 1 58 27 Q 58 36 50 48 Z" />
                  <path d="M 46 27 C 46 27 48 30 50 30 C 52 30 54 27 54 27" />
                  <circle cx="50" cy="27" r="1.5" fill="#D6AF2A" />
                </svg>

                <h3 className="font-serif text-[19px] sm:text-[21px] text-[#F1E5D6] font-bold mt-2.5 mb-2">Acolhimento</h3>
                <p className="text-[13px] text-[#F1E5D6]/90 leading-relaxed font-sans font-light px-2">
                  Um espaço seguro e sem julgamentos para você se sentir à vontade e ser ouvido(a) no que realmente importa.
                </p>
              </div>

              {/* Bottom ornament */}
              <div className="flex items-center justify-center space-x-2 w-28 mx-auto mt-4 select-none opacity-80">
                <div className="h-[0.5px] flex-grow bg-[#D6AF2A]" />
                <span className="text-[#D6AF2A] text-[9px]">✦</span>
                <div className="h-[0.5px] flex-grow bg-[#D6AF2A]" />
              </div>
            </div>

            {/* Card 2: Clareza */}
            <div 
              className="relative w-full max-w-[300px] aspect-[1/1.12] p-8 bg-[#F1E5D6] text-[#1F1A14] flex flex-col justify-between items-center text-center transition-all duration-300 hover:scale-[1.03] select-none"
              style={{
                clipPath: 'polygon(0.8% 1.2%, 18% 0.8%, 38% 0.3%, 58% 1.4%, 78% 0.5%, 94% 0.9%, 99.2% 1.5%, 98.8% 18%, 99.5% 35%, 98.3% 55%, 99.1% 75%, 98.3% 94%, 99.1% 99.4%, 82% 98.5%, 62% 99.2%, 42% 98.3%, 22% 99.4%, 6% 98.5%, 0.8% 99.1%, 1.5% 78%, 0.5% 55%, 1.2% 35%, 0.8% 15%)',
                filter: 'drop-shadow(2px 8px 12px rgba(17, 16, 12, 0.14))'
              }}
            >
              {/* Tape crepe decorativa on top */}
              <div 
                className="absolute top-[-9px] left-1/2 -translate-x-1/2 w-20 h-4 bg-[#D8BE94]/65 backdrop-blur-[0.5px] border-l border-r border-dashed border-[#4A3428]/15 rotate-[1.5deg] z-10"
                style={{
                  clipPath: 'polygon(0% 12%, 12% 0%, 25% 6%, 42% 1%, 58% 5%, 75% 1%, 88% 8%, 100% 3%, 97% 92%, 100% 100%, 88% 94%, 72% 98%, 56% 93%, 42% 97%, 26% 92%, 11% 96%, 0% 90%)'
                }}
              />
              
              <div className="flex flex-col items-center flex-grow justify-center mt-3">
                {/* Custom Elegant Starburst SVG */}
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#D6AF2A]" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 50,15 L 53.5,33.5 L 72,25.5 L 56.5,38.5 L 85,50 L 56.5,61.5 L 72,74.5 L 53.5,66.5 L 50,85 L 46.5,66.5 L 28,74.5 L 43.5,61.5 L 15,50 L 43.5,38.5 L 28,25.5 L 46.5,33.5 Z" fill="#D6AF2A" fillOpacity="0.08" />
                  <circle cx="50" cy="50" r="3.5" fill="#D6AF2A" stroke="none" />
                  <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="3 3" />
                  <line x1="10" y1="50" x2="90" y2="50" strokeDasharray="3 3" />
                  <line x1="22" y1="22" x2="78" y2="78" />
                  <line x1="22" y1="78" x2="78" y2="22" />
                  <circle cx="22" cy="22" r="1" fill="#D6AF2A" stroke="none" />
                  <circle cx="78" cy="78" r="1" fill="#D6AF2A" stroke="none" />
                  <circle cx="22" cy="78" r="1" fill="#D6AF2A" stroke="none" />
                  <circle cx="78" cy="22" r="1" fill="#D6AF2A" stroke="none" />
                </svg>

                <h3 className="font-serif text-[19px] sm:text-[21px] text-[#1F1A14] font-bold mt-2.5 mb-2">Clareza</h3>
                <p className="text-[13px] text-[#4A3428] leading-relaxed font-sans font-light px-2">
                  Leituras que iluminam caminhos e trazem compreensões práticas para sua vida e suas escolhas.
                </p>
              </div>

              {/* Bottom ornament */}
              <div className="flex items-center justify-center space-x-2 w-28 mx-auto mt-4 select-none opacity-80">
                <div className="h-[0.5px] flex-grow bg-[#D6AF2A]" />
                <span className="text-[#D6AF2A] text-[9px]">✦</span>
                <div className="h-[0.5px] flex-grow bg-[#D6AF2A]" />
              </div>
            </div>

            {/* Card 3: Sigilo */}
            <div 
              className="relative w-full max-w-[300px] aspect-[1/1.12] p-8 bg-[#5A2418] text-[#F1E5D6] flex flex-col justify-between items-center text-center transition-all duration-300 hover:scale-[1.03] select-none"
              style={{
                clipPath: 'polygon(0.3% 1.8%, 12% 0.5%, 32% 1.2%, 52% 0.4%, 72% 1.5%, 92% 0.8%, 99.5% 1.2%, 98.3% 12%, 99.4% 32%, 98.5% 52%, 99.6% 72%, 98.7% 92%, 99.4% 99.5%, 85% 98.8%, 65% 99.4%, 45% 98.5%, 25% 99.2%, 10% 98.6%, 0.3% 99.2%, 1.2% 85%, 0.4% 65%, 1.5% 45%, 0.8% 25%)',
                filter: 'drop-shadow(2px 8px 12px rgba(17, 16, 12, 0.14))'
              }}
            >
              {/* Tape crepe decorativa on top */}
              <div 
                className="absolute top-[-9px] left-1/2 -translate-x-1/2 w-20 h-4 bg-[#D8BE94]/65 backdrop-blur-[0.5px] border-l border-r border-dashed border-[#4A3428]/15 rotate-[-1deg] z-10"
                style={{
                  clipPath: 'polygon(0% 12%, 12% 0%, 25% 6%, 42% 1%, 58% 5%, 75% 1%, 88% 8%, 100% 3%, 97% 92%, 100% 100%, 88% 94%, 72% 98%, 56% 93%, 42% 97%, 26% 92%, 11% 96%, 0% 90%)'
                }}
              />
              
              <div className="flex flex-col items-center flex-grow justify-center mt-3">
                {/* Custom Lock SVG */}
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#D6AF2A]" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 34,42 L 34,28 C 34,18 41,12 50,12 C 59,12 66,18 66,28 L 66,42" strokeWidth="1.5" />
                  <rect x="26" y="42" width="48" height="38" rx="4" fill="#D6AF2A" fillOpacity="0.05" strokeWidth="1.2" />
                  <path d="M 45,54 A 8,8 0 0,0 57,66 A 7,7 0 0,1 48,51 A 8,8 0 0,0 45,54" fill="#D6AF2A" stroke="none" />
                  <path d="M 55,54 L 56.5,55 L 58,54 L 56.5,53 Z" fill="#D6AF2A" stroke="none" />
                  <circle cx="50" cy="72" r="1.2" fill="#D6AF2A" />
                  <circle cx="42" cy="72" r="0.8" fill="#D6AF2A" />
                  <circle cx="58" cy="72" r="0.8" fill="#D6AF2A" />
                </svg>

                <h3 className="font-serif text-[19px] sm:text-[21px] text-[#F1E5D6] font-bold mt-2.5 mb-2">Sigilo</h3>
                <p className="text-[13px] text-[#F1E5D6]/90 leading-relaxed font-sans font-light px-2">
                  Sua história, sentimentos e informações são tratados com total confidencialidade e respeito.
                </p>
              </div>

              {/* Bottom ornament */}
              <div className="flex items-center justify-center space-x-2 w-28 mx-auto mt-4 select-none opacity-80">
                <div className="h-[0.5px] flex-grow bg-[#D6AF2A]" />
                <span className="text-[#D6AF2A] text-[9px]">✦</span>
                <div className="h-[0.5px] flex-grow bg-[#D6AF2A]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Antique paper quote card matching the reference image */}
      <motion.div 
        className="relative max-w-[680px] w-[92%] mx-auto px-6 sm:px-10 md:px-12 py-6 sm:py-8 md:py-9 bg-[#E4D1BA] text-[#1F1A14] overflow-visible rounded-[4px] text-center"
        style={{
          boxShadow: '0 8px 20px rgba(31, 26, 20, 0.10)',
          clipPath: 'polygon(0% 8%, 8% 4%, 18% 7%, 30% 3%, 44% 6%, 58% 3%, 72% 6%, 86% 4%, 100% 8%, 98% 92%, 86% 96%, 72% 93%, 58% 97%, 42% 94%, 26% 98%, 10% 94%, 0% 90%)'
        }}
      >
        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Quote Block with flanking golden quote marks */}
          <div className="relative inline-block max-w-lg px-6 sm:px-10 py-1">
            {/* Left Quote Mark */}
            <span className="absolute left-[0px] sm:left-[-10px] top-[-10px] sm:top-[-18px] font-serif text-[36px] sm:text-[46px] md:text-[54px] text-[#D6AF2A] leading-none select-none opacity-90">
              “
            </span>
            
            {/* Main Quote Text */}
            <h2 className="font-serif italic text-[15px] sm:text-[18px] md:text-[20px] text-[#1F1A14] font-medium leading-relaxed tracking-normal inline px-1">
              A lua não tem pressa e, ainda assim, transforma tudo ao seu redor.
            </h2>
 
            {/* Right Quote Mark */}
            <span className="absolute right-[0px] sm:right-[-10px] bottom-[-20px] sm:bottom-[-28px] font-serif text-[36px] sm:text-[46px] md:text-[54px] text-[#D6AF2A] leading-none select-none opacity-90">
              ”
            </span>
          </div>
 
          {/* Underneath Message in Two Simple Lines */}
          <div className="mt-5 space-y-0.5 font-serif text-[12px] sm:text-[13.5px] md:text-[14.5px] text-[#1F1A14]/90 font-light tracking-wide leading-relaxed">
            <p>Permita-se olhar para dentro.</p>
            <p>As respostas que você busca já vivem em você.</p>
          </div>
        </div>
 
      </motion.div>
    </motion.div>
  );
}
