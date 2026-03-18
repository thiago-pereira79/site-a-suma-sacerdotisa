import { Instagram as InstagramIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { StarryBackground } from './StarryBackground';

export function Instagram() {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1671013033219-c5f37fc92a71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJvdCUyMGNhcmRzJTIwbXlzdGljYWx8ZW58MXx8fHwxNzczNzA3MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      url: 'https://www.instagram.com/a.sumasacerdotisa/',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1761706280230-e2a1067451f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJvdCUyMHJlYWRpbmclMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzczNzA3MzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      url: 'https://www.instagram.com/a.sumasacerdotisa/',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1768569446272-1e62ab6cb976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwYmFsbCUyMGRpdmluYXRpb258ZW58MXx8fHwxNzczNzA3MzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      url: 'https://www.instagram.com/a.sumasacerdotisa/',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1768002736068-9fcc5e982d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJvdCUyMGNhcmRzJTIwc3Bpcml0dWFsJTIwcml0dWFsfGVufDF8fHx8MTc3MzcwOTg4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      url: 'https://www.instagram.com/a.sumasacerdotisa/',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1770836141377-3ac59bd071a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFjbGUlMjBjYXJkcyUyMGVzb3RlcmljfGVufDF8fHx8MTc3MzcwNzMxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      url: 'https://www.instagram.com/a.sumasacerdotisa/',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1772710954642-d1d5988a3582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJvdCUyMGRlY2slMjBtYWdpY3xlbnwxfHx8fDE3NzM3MDczMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      url: 'https://www.instagram.com/a.sumasacerdotisa/',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background - Purple only, no stars */}
      <StarryBackground showStars={false} />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramIcon className="w-8 h-8 text-[#E4405F]" />
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[#D4AF37] tracking-wide">
              Acompanhe no Instagram
            </h2>
          </div>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
          <a 
            href="https://www.instagram.com/a.sumasacerdotisa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E4405F] to-[#C85A3E] text-white rounded-full font-semibold hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(228,64,95,0.4)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Shine effect on button */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <InstagramIcon className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Seguir no Instagram</span>
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
              >
                {/* Image */}
                <ImageWithFallback
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A1A]/80 via-[#0D0A1A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#D4AF37]/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <InstagramIcon className="w-5 h-5 text-[#0D0A1A]" />
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}