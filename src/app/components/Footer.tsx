import { Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0D0A1A] to-[#1A1528] border-t border-[#D4AF37]/30 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <span className="font-[family-name:var(--font-decorative)] text-[#D4AF37] text-2xl">
              A Suma Sacerdotisa
            </span>
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link to="/" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">
              Início
            </Link>
            <Link to="/sobre" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">
              Sobre
            </Link>
            <Link to="/valores" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">
              Valores
            </Link>
            <Link to="/politica" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">
              Política
            </Link>
            <Link to="/contato" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">
              Contato
            </Link>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-6">
            <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
          </div>

          {/* Copyright */}
          <p className="text-[#F5E6D3]/70 flex items-center justify-center gap-2 flex-wrap">
            <span>© 2026 A Suma Sacerdotisa. Todos os direitos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}