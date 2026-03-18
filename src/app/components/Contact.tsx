import { MessageCircle, Mail } from 'lucide-react';
import { StarryBackground } from './StarryBackground';

export function Contact() {
  const whatsappMessage = "Olá! Vim pelo site da Suma Sacerdotisa e gostaria de agendar uma consulta. Poderia me informar os horários disponíveis?";
  
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      link: `https://wa.me/5535998997754?text=${encodeURIComponent(whatsappMessage)}`,
      gradient: 'from-[#25D366]/20 to-[#25D366]/5',
      iconColor: '#25D366',
      hoverShadow: 'hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)]',
    },
    {
      icon: Mail,
      title: 'Email',
      link: 'mailto:sacerdotisasuma@gmail.com',
      gradient: 'from-[#D4AF37]/20 to-[#D4AF37]/5',
      iconColor: '#D4AF37',
      hoverShadow: 'hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)]',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with subtle gradient */}
      <StarryBackground opacity={0.05} />
      
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#D4AF37] mb-6">
            Fale Comigo
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
          <p className="text-[#F5E6D3]/80 text-base md:text-lg leading-relaxed">
            Entre em contato para agendar sua consulta ou esclarecer qualquer dúvida.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto px-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const isWhatsApp = method.title === 'WhatsApp';
            return (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${isWhatsApp ? 'w-full md:w-96' : 'w-full md:w-80'}`}
              >
                <div 
                  className={`
                    relative flex items-center justify-center gap-4 
                    ${isWhatsApp ? 'px-12 py-7' : 'px-10 py-5'} rounded-full 
                    bg-gradient-to-br ${method.gradient}
                    border ${isWhatsApp ? 'border-[#25D366]/30' : 'border-white/5'}
                    backdrop-blur-sm
                    transition-all duration-500 ease-out
                    hover:scale-105 hover:-translate-y-1
                    ${method.hoverShadow}
                    overflow-hidden
                  `}
                >
                  {/* Ambient glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                    style={{
                      background: `radial-gradient(circle at center, ${method.iconColor}30, transparent 70%)`,
                    }}
                  ></div>

                  {/* Icon */}
                  <div className="relative">
                    <Icon 
                      className={`${isWhatsApp ? 'w-6 h-6 md:w-7 md:h-7' : 'w-5 h-5 md:w-6 md:h-6'} transition-all duration-300 group-hover:scale-110`}
                      style={{ color: method.iconColor }} 
                    />
                  </div>

                  {/* Title */}
                  <span 
                    className={`relative font-semibold ${isWhatsApp ? 'text-lg md:text-xl' : 'text-base md:text-lg'} whitespace-nowrap transition-all duration-300`}
                    style={{ color: method.iconColor }}
                  >
                    {method.title}
                  </span>

                  {/* Subtle shine effect on hover */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  ></div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-20">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}