import { CreditCard, Send, Sparkles, Copy, Check } from 'lucide-react';
import { Link } from 'react-router';
import { StarryBackground } from './StarryBackground';
import { useState } from 'react';

export function Payment() {
  const [copied, setCopied] = useState(false);
  const pixKey = 'sacerdotisasuma@gmail.com';

  const handleCopyPix = () => {
    // Método mais simples e confiável
    const textArea = document.createElement('textarea');
    textArea.value = pixKey;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 99999); // Para mobile
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
    
    document.body.removeChild(textArea);
  };

  return (
    <section className="relative pt-8 pb-24 overflow-hidden">
      {/* Background */}
      <StarryBackground opacity={0.05} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Divisor Decorativo */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <Sparkles className="w-4 h-4 text-[#D4AF37] opacity-60" />
          <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]"></div>
          <div className="w-2 h-2 bg-[#D4AF37] rotate-45"></div>
          <div className="w-24 md:w-32 h-[1px] bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]"></div>
          <Sparkles className="w-4 h-4 text-[#D4AF37] opacity-60" />
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-serif)] text-5xl md:text-6xl text-[#D4AF37] mb-4">
            Pagamento
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
        </div>

        {/* Payment Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#1A1528] to-[#2C1A47] border-2 border-[#D4AF37]/40 rounded-3xl p-10 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.3)] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br-3xl"></div>
            <Sparkles className="absolute top-8 right-8 w-10 h-10 text-[#C85A3E] opacity-20" />
            <Sparkles className="absolute bottom-8 left-8 w-10 h-10 text-[#6B8E23] opacity-20" />

            <div className="relative z-10">
              {/* PIX Info */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/60 rounded-full mb-6">
                  <CreditCard className="w-10 h-10 text-[#D4AF37]" />
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[#C85A3E] mb-4">
                  Pagamento via PIX
                </h3>
                <p className="text-[#F5E6D3] text-lg mb-8">
                  Faça o pagamento utilizando a chave PIX abaixo
                </p>
              </div>

              {/* PIX Key */}
              <div className="bg-[#0D0A1A]/50 border-2 border-[#D4AF37]/30 rounded-2xl p-6 mb-2 relative">
                <label className="text-[#C85A3E] text-xs uppercase tracking-wider mb-3 block">
                  Chave PIX (E-mail)
                </label>
                <div className="flex items-center justify-between gap-4">
                  <div className="font-mono text-[#D4AF37] text-[21px] break-all">
                    {pixKey}
                  </div>
                  <button
                    onClick={handleCopyPix}
                    className="flex-shrink-0 p-2 hover:bg-[#D4AF37]/10 rounded-lg transition-all duration-300 group"
                    title="Copiar chave PIX"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-[#D4AF37]" />
                    ) : (
                      <Copy className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                    )}
                  </button>
                </div>
              </div>

              {/* Feedback de cópia */}
              {copied && (
                <div className="text-center mb-6">
                  <p className="text-[#D4AF37] text-sm font-semibold animate-pulse">
                    ✓ Chave PIX copiada!
                  </p>
                </div>
              )}

              {/* Instructions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/60 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#D4AF37] font-bold">1</span>
                  </div>
                  <p className="text-[#F5E6D3] leading-relaxed">
                    Realize o pagamento via PIX utilizando a chave acima
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C85A3E]/30 to-[#C85A3E]/60 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#C85A3E] font-bold">2</span>
                  </div>
                  <p className="text-[#F5E6D3] leading-relaxed">
                    Após o pagamento, envie o comprovante via WhatsApp
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6B8E23]/30 to-[#6B8E23]/60 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#6B8E23] font-bold">3</span>
                  </div>
                  <p className="text-[#F5E6D3] leading-relaxed">
                    Sua consulta será agendada após a confirmação do pagamento
                  </p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="text-center pt-6 border-t border-[#D4AF37]/30">
                <p className="text-[#F5E6D3] mb-4">Envie seu comprovante para:</p>
                <a
                  href="https://wa.me/5535998997754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#C85A3E] text-[#0D0A1A] px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                >
                  <Send className="w-5 h-5" />
                  Enviar Comprovante
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}