import { Moon } from 'lucide-react';

export function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center py-10 md:py-14 px-6 sm:px-12 md:px-16 lg:px-20 select-none pointer-events-none">
      <div className="flex items-center justify-center w-full max-w-[1120px] space-x-4 sm:space-x-6">
        {/* Left thin golden divider line: fades at outer edge, strong gold body */}
        <div 
          className="h-[1.2px] flex-grow" 
          style={{ 
            background: 'linear-gradient(to right, transparent, rgba(172, 132, 25, 0.8) 15%, rgba(172, 132, 25, 0.8) 100%)' 
          }} 
        />
        
        {/* Central discrete elegant moon in rich gold */}
        <div className="shrink-0 flex items-center justify-center">
          <Moon 
            className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-[#AC8419] text-[#AC8419]" 
            strokeWidth={1}
          />
        </div>
        
        {/* Right thin golden divider line: strong gold body, fades at outer edge */}
        <div 
          className="h-[1.2px] flex-grow" 
          style={{ 
            background: 'linear-gradient(to left, transparent, rgba(172, 132, 25, 0.8) 15%, rgba(172, 132, 25, 0.8) 100%)' 
          }} 
        />
      </div>
    </div>
  );
}

