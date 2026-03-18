import { Link, useLocation } from 'react-router';
import { Menu, X, Sparkles, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Início' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/como-funciona', label: 'Como Funciona' },
    { to: '/valores', label: 'Valores' },
    { to: '/politica', label: 'Política de Consulta' },
    { to: '/depoimentos', label: 'Depoimentos' },
    { to: '/contato', label: 'Contato' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // WhatsApp link - replace with actual number
  const whatsappMessage = "Olá! Vim pelo site da Suma Sacerdotisa e gostaria de agendar uma consulta. Poderia me informar os horários disponíveis?";
  const whatsappLink = `https://wa.me/5535998997754?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0A1A]/95 backdrop-blur-md border-b border-[#D4AF37]/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-2 group"
          >
            <Sparkles className="w-7 h-7 text-[#D4AF37] group-hover:rotate-180 transition-transform duration-500" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors duration-300 relative group text-sm ${
                  isActive(link.to)
                    ? 'text-[#D4AF37]' 
                    : 'text-[#F5E6D3] hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
            
            {/* CTA Button - Desktop */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#0D0A1A] rounded-full font-semibold text-sm flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Calendar className="w-4 h-4 relative z-10" />
              <div className="relative z-10 flex flex-col items-start">
                <span className="leading-none">Agendar Consulta</span>
                <span className="text-[10px] opacity-80 leading-none mt-0.5">via WhatsApp</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#D4AF37] p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 border-t border-[#D4AF37]/30 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block w-full text-left transition-colors duration-300 ${
                  isActive(link.to)
                    ? 'text-[#D4AF37]' 
                    : 'text-[#F5E6D3] hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* CTA Button - Mobile */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-4 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#0D0A1A] rounded-full font-semibold text-center hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300 mt-6"
            >
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                <div className="flex flex-col items-start">
                  <span className="leading-none">Agendar Consulta</span>
                  <span className="text-xs opacity-80 leading-none mt-1">via WhatsApp</span>
                </div>
              </div>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}