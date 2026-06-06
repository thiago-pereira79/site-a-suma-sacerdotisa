import React from 'react';
import { motion } from 'motion/react';

interface BackButtonProps {
  onClick?: () => void;
  variant?: 'dark' | 'light';
  className?: string;
}

export function BackButton({ onClick, variant, className = "pb-4 sm:pb-5" }: BackButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else {
      e.preventDefault();
      window.history.pushState(null, '', '/');
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  return (
    <div className={`flex justify-start select-none ${className}`}>
      <motion.a
        href="/"
        onClick={handleClick}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="group inline-flex items-center justify-center h-11 px-6 min-w-[170px] rounded-[14px] transition-all duration-300 font-sans text-sm font-medium tracking-wide cursor-pointer bg-[#D2C5B4] hover:bg-[#C9BCA9] border border-[#C5B6A4] text-[#11100C] shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#C5B6A4]/40"
        aria-label="Voltar ao início"
      >
        <span className="flex items-center justify-center gap-2">
          {/* Elegant arrow pointing left that translates on group-hover */}
          <span className="text-[17px] transition-transform duration-300 group-hover:-translate-x-1 font-sans leading-none">←</span>
          <span className="leading-none text-[#11100C]">Voltar ao início</span>
        </span>
      </motion.a>
    </div>
  );
}
