import { Link } from 'react-router';
import { AlertCircle, Home } from 'lucide-react';
import { StarryBackground } from '../components/StarryBackground';

export function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Starry Background */}
      <StarryBackground />
      
      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <AlertCircle className="w-24 h-24 text-[#C85A3E]" />
        </div>
        
        <h1 className="font-[family-name:var(--font-decorative)] text-8xl text-[#D4AF37] mb-4">
          404
        </h1>
        
        <h2 className="font-[family-name:var(--font-serif)] text-3xl text-[#C85A3E] mb-6">
          Página Não Encontrada
        </h2>
        
        <p className="text-[#F5E6D3] text-lg mb-8 max-w-md mx-auto">
          A página que você procura não existe ou foi movida para outro lugar.
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#C85A3E] text-[#0D0A1A] px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300"
        >
          <Home className="w-5 h-5" />
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
}