import React from 'react';
import { BLOG_ARTICLES, BlogArticle } from '../data/blogData';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
import { BlogCardCover } from './BlogCardCover';

interface BlogHomeProps {
  onNavigate: (tab: 'blog' | 'blog-artigos' | 'blog-leitura', slug?: string) => void;
}

export function BlogHome({ onNavigate }: BlogHomeProps) {
  const filteredArticles = BLOG_ARTICLES.slice(0, 6);

  // Helper for dynamic category marker styling (highlighter paper marker effect)
  const getCategoryMarkerStyles = (cat: string) => {
    switch (cat) {
      case 'Autoconhecimento':
        return 'bg-[#FBCFE8]/60 text-[#DB2777] px-2 py-0.5 rounded';
      case 'Tarot':
        return 'bg-[#FED7AA]/60 text-[#C2410C] px-2 py-0.5 rounded';
      case 'Intuição':
        return 'bg-[#F2D6FF] text-[#7C3AED] px-2 py-0.5 rounded';
      case 'Desenvolvimento':
        return 'bg-[#FEF08A]/60 text-[#B45309] px-2 py-0.5 rounded';
      case 'Espiritualidade':
        return 'bg-[#DBEAFE]/60 text-[#1D4ED8] px-2 py-0.5 rounded';
      default:
        return 'bg-[#E5E7EB] text-[#374151] px-2 py-0.5 rounded';
    }
  };

  return (
    <div id="blog-home-container" className="bg-[#F3EBDD] min-h-screen text-[#11100C] font-sans pb-12 md:pb-16 antialiased selection:bg-[#C5FF1A]/35">
      
      {/* 1. TOPO / HERO EDITORIAL STYLE */}
      <section id="blog-hero" className="relative px-6 sm:px-12 md:px-24 pt-16 sm:pt-20 pb-6 sm:pb-8 max-w-7xl mx-auto flex flex-col items-center">
        <div className="max-w-2xl mx-auto space-y-6 relative z-10 flex flex-col items-center text-center">
          
          {/* Main Heading "Jornada da Sacerdotisa" */}
          <h1 id="blog-hero-main-title" className="font-serif text-[32px] sm:text-[44px] md:text-[54px] lg:text-[60px] text-[#11100C] leading-[1.1] sm:leading-[1.08] tracking-tight font-bold text-center">
            Jornada da<br />
            <span className="relative inline-block px-1 select-none">
              Sacerdotisa
              {/* Elegant straight bottom line in olive green */}
              <span className="absolute bottom-[-4px] left-1 right-1 h-[4px] bg-[#606C38] rounded-full pointer-events-none animate-pulse" />
            </span>
          </h1>

          {/* Description */}
          <p id="blog-hero-sub-desc" className="text-[#4A3428]/95 text-[16px] sm:text-[17px] leading-relaxed max-w-lg font-normal text-center">
            Reflexões, bastidores, aprendizados e conteúdos que iluminam seu caminho de autoconhecimento.
          </p>
        </div>
      </section>

      {/* Elegant thin horizontal separator line with vertical spacing */}
      <SectionDivider />

      {/* 3. ARTIGOS DO BLOG GRID SHOWCASE */}
      <section id="articles-showcase-section" className="px-6 sm:px-12 md:px-24 max-w-7xl mx-auto mt-3 md:mt-4">
        
        {filteredArticles.length === 0 ? (
          <div id="no-articles-message" className="text-center py-20 bg-[#FAF5EC] border border-[#4A3428]/15 rounded-[28px] shadow-sm">
            <p className="text-[#4A3428] font-serif italic text-lg leading-relaxed">
              Nenhum artigo encontrado nessa categoria.
            </p>
          </div>
        ) : (
          <div id="articles-display-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredArticles.map((article, idx) => {
              // Define marker styled tags
              return (
                <article
                  id={`article-scrapbook-card-${article.slug}`}
                  key={article.id}
                  onClick={() => onNavigate('blog-leitura', article.slug)}
                  className="group flex flex-col justify-between bg-[#FAF5EC] border border-[#4A3428]/18 rounded-[28px] p-5 cursor-pointer shadow-[0_8px_25px_rgba(74,52,40,0.035)] hover:shadow-[0_16px_36px_rgba(74,52,40,0.075)] hover:border-[#4A3428]/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  
                  {/* Top image wrapper & ribbons */}
                  <div className="relative">
                    
                    {/* Dog-tag "Destaque" ribbon on top-left of first card */}
                    {idx === 0 && (
                      <div className="absolute -top-3.5 -left-4 bg-[#D6AF2A] text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-md transform rotate-[-6deg] z-10 shadow-sm border border-white/10 select-none">
                        Destaque
                      </div>
                    )}

                    {/* Image */}
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-[#E8DCB8]/20 border border-[#4A3428]/10">
                      <BlogCardCover id={article.id} title={article.title} />
                    </div>

                    {/* Categories highlighted with a marker brush label line */}
                    <div className="mt-4 flex items-center">
                      <span className={`text-[10px] font-serif uppercase tracking-[0.16em] font-extrabold ${getCategoryMarkerStyles(article.category)}`}>
                        {article.category}
                      </span>
                    </div>

                    {/* Headline Title */}
                    <h3 className="font-serif text-[21px] sm:text-[23px] text-[#11100C] leading-snug font-semibold mt-3.5 tracking-tight group-hover:text-[#D6AF2A] transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[#4A3428]/85 text-[13.5px] leading-relaxed mt-2.5 font-normal line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Card bottom meta info and stylish button */}
                  <div className="mt-6 pt-4.5 border-t border-[#4A3428]/12 flex items-center justify-between select-none">
                    
                    {/* Read timing & date values */}
                    <div className="flex flex-col text-left">
                      <span className="text-[12px] text-[#4A3428]/80 font-medium">
                        {article.readingTime} de leitura
                      </span>
                      <span className="text-[10px] text-[#4A3428]/55 font-normal font-sans">
                        Publicado em {article.date}
                      </span>
                      <span className="text-[9.5px]/none text-[#A67C52] font-semibold font-sans tracking-wide mt-1.5 uppercase">
                        ESCRITO POR: Pedro Henrique
                      </span>
                    </div>

                    {/* Solid circular Arrow direction icon */}
                    <div className="w-8.5 h-8.5 rounded-full bg-[#FAF5EC] border border-[#4A3428]/18 group-hover:bg-[#11100C] group-hover:text-[#C5FF1A] group-hover:border-transparent flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                </article>
              );
            })}
          </div>
        )}

        {/* Dynamic navigation button to load/view remaining elements */}
        <div id="all-articles-navigation-wrapper" className="pt-16 text-center select-none">
          <button
            id="view-all-articles-btn"
            onClick={() => onNavigate('blog-artigos')}
            className="group inline-flex items-center justify-center h-11 px-6 rounded-[14px] transition-all duration-300 font-sans text-sm font-medium cursor-pointer bg-[#D2C5B4] hover:bg-[#C9BCA9] border border-[#C5B6A4] text-[#11100C] shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#C5B6A4]/40 whitespace-nowrap gap-2 active:scale-95"
          >
            <span>Ver todos os artigos</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#11100C]" />
          </button>
        </div>

      </section>

    </div>
  );
}
