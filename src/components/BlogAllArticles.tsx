import React, { useState, useMemo } from 'react';
import { BLOG_ARTICLES, BlogArticle } from '../data/blogData';
import { ChevronDown, Grid, List, ArrowRight, Star, Sparkles } from 'lucide-react';
import { BlogCardCover } from './BlogCardCover';

interface BlogAllArticlesProps {
  onNavigate: (tab: 'blog' | 'blog-artigos' | 'blog-leitura', slug?: string) => void;
}

export function BlogAllArticles({ onNavigate }: BlogAllArticlesProps) {
  const [isGridView, setIsGridView] = useState(true);
  const [sortBy, setSortBy] = useState<'novos' | 'antigos'>('novos');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Filter and Sort execution
  const processedArticles = useMemo(() => {
    let list = [...BLOG_ARTICLES];
    
    // Sorting list
    if (sortBy === 'antigos') {
      // reverse chronologic sort
      list = list.reverse();
    }

    return list;
  }, [sortBy]);

  const displayedArticles = processedArticles.slice(0, visibleCount);

  // Helper for category highlight marker backgrounds
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
    <div id="blog-all-articles-container" className="bg-[#F3EBDD] min-h-screen text-[#11100C] font-sans pb-12 md:pb-16 antialiased selection:bg-[#C5FF1A]/35">
      
      {/* 1. EDITORIAL HEADER */}
      <section id="all-articles-header" className="px-6 sm:px-12 md:px-24 pt-16 pb-12 max-w-7xl mx-auto text-left relative">
        {/* Sparkle doodles */}
        <div className="absolute top-8 right-16 text-[#D6AF2A]/40 select-none hidden md:block">
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
            <path d="M20,5 L22,15 L32,17 L22,19 L20,29 L18,19 L8,17 L18,15 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-3xl space-y-4">
          
          {/* Headline with custom colored handwritten accent */}
          <h1 id="all-articles-title" className="font-serif text-[30px] sm:text-[42px] md:text-[54px] lg:text-[58px] text-[#11100C] leading-tight sm:leading-none tracking-tight font-extrabold">
            Todos os artigos
          </h1>
          
          <p id="all-articles-desc" className="text-[#4A3428]/95 text-[15.5px] sm:text-[16.5px] leading-relaxed max-w-xl font-normal">
            Explore ideias e conteúdos que inspiram, guiam e transformam em sua jornada espiritual e autodescoberta.
          </p>
        </div>
      </section>

      {/* 2. CONTROLS BAR: SORTING & VIEW TABS */}
      <section id="blog-interactive-controls" className="px-6 sm:px-12 md:px-24 max-w-7xl mx-auto mb-10">
        
        {/* Sort controls and view layout toggle wrapper */}
        <div className="flex items-center justify-between gap-4 pt-2 border-b border-[#4A3428]/12 pb-5">
          
          {/* Label indicating total items found */}
          <span className="text-xs font-semibold text-[#4A3428]/70 uppercase tracking-wider select-none">
            {processedArticles.length} artigos encontrados
          </span>

          {/* Sort controls and view layout toggle */}
          <div className="flex items-center gap-3 select-none">
            
            {/* Sort toggle Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                className="flex items-center gap-1.5 px-4.5 py-2 hover:bg-white/40 border border-[#4A3428]/20 hover:border-[#11100C] rounded-xl text-xs font-semibold text-[#4A3428] cursor-pointer transition-all"
              >
                <span>{sortBy === 'novos' ? 'Mais recentes' : 'Mais antigos'}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {isSortDropdownOpen && (
                <div className="absolute right-0 top-11 w-40 bg-[#FAF5EC] border border-[#4A3428]/20 rounded-xl shadow-md z-20 overflow-hidden text-left py-1 animate-fade-in">
                  <button
                    onClick={() => {
                      setSortBy('novos');
                      setIsSortDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-[#4A3428] hover:bg-white hover:text-[#11100C] cursor-pointer"
                  >
                    Mais recentes
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('antigos');
                      setIsSortDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-[#4A3428] hover:bg-white hover:text-[#11100C] cursor-pointer"
                  >
                    Mais antigos
                  </button>
                </div>
              )}
            </div>

            {/* View Grid vs List toggle */}
            <div className="hidden sm:flex items-center border border-[#4A3428]/20 rounded-xl overflow-hidden p-0.5 bg-transparent shrink-0">
              <button
                onClick={() => setIsGridView(true)}
                className={`p-1.5 rounded-lg cursor-pointer transition-colors ${isGridView ? 'bg-[#11100C] text-white' : 'text-[#4A3428]/70 hover:text-[#11100C]'}`}
                title="Visualização em Grid"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-1.5 rounded-lg cursor-pointer transition-colors ${!isGridView ? 'bg-[#11100C] text-white' : 'text-[#4A3428]/70 hover:text-[#11100C]'}`}
                title="Visualização em Lista"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. ARTICLES LIST OR GRID GRID DISPLAY */}
      <section id="articles-list-section" className="px-6 sm:px-12 md:px-24 max-w-7xl mx-auto">
        
        {displayedArticles.length === 0 ? (
          <div id="no-search-results" className="text-center py-20 bg-[#FAF5EC] border border-[#4A3428]/15 rounded-[28px]">
            <p className="text-[#4A3428] font-serif italic text-lg">
              Nenhum artigo encontrado.
            </p>
          </div>
        ) : (
          <div 
            id="articles-grid-view" 
            className={
              isGridView 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10'
                : 'max-w-[800px] mx-auto flex flex-col gap-6'
            }
          >
            {displayedArticles.map((article) => {
              if (isGridView) {
                return (
                  <article
                    id={`artcard-${article.slug}`}
                    key={article.id}
                    onClick={() => onNavigate('blog-leitura', article.slug)}
                    className="group flex flex-col justify-between bg-[#FAF5EC] border border-[#4A3428]/18 rounded-[28px] p-5 cursor-pointer shadow-[0_8px_25px_rgba(74,52,40,0.035)] hover:shadow-[0_16px_36px_rgba(74,52,40,0.075)] hover:border-[#4A3428]/40 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    
                    {/* Top block */}
                    <div className="relative">
                      
                      {/* Photo wrapper */}
                      <div className="aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-[#E8DCB8]/20 border border-[#4A3428]/10">
                        <BlogCardCover id={article.id} title={article.title} />
                      </div>

                      {/* Tags */}
                      <div className="mt-4 flex">
                        <span className={`text-[10px] font-serif uppercase tracking-[0.16em] font-extrabold ${getCategoryMarkerStyles(article.category)}`}>
                          {article.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-[21px] text-[#11100C] leading-snug font-semibold mt-3.5 group-hover:text-[#D6AF2A] transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-[#4A3428]/85 text-[13.5px] leading-relaxed mt-2.5 font-normal line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Bottom row */}
                    <div className="mt-6 pt-4.5 border-t border-[#4A3428]/12 flex items-center justify-between select-none">
                      <div className="flex flex-col text-left">
                        <span className="text-[12px] text-[#4A3428]/80 font-medium">
                          {article.readingTime} de leitura
                        </span>
                        <span className="text-[10px] text-[#4A3428]/55 font-normal">
                          Publicado em {article.date}
                        </span>
                        <span className="text-[9.5px]/none text-[#A67C52] font-semibold font-sans tracking-wide mt-1.5 uppercase">
                          ESCRITO POR: Pedro Henrique
                        </span>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-transparent border border-[#4A3428]/18 group-hover:bg-[#11100C] group-hover:text-[#C5FF1A] group-hover:border-transparent flex items-center justify-center transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5" />
                      </div>
                    </div>

                  </article>
                );
              } else {
                // List template representing cards nicely inside vertical list
                return (
                  <article
                    id={`artcard-${article.slug}`}
                    key={article.id}
                    onClick={() => onNavigate('blog-leitura', article.slug)}
                    className="group bg-[#FAF5EC] border border-[#4A3428]/18 rounded-[24px] p-4.5 flex flex-col sm:flex-row gap-6 cursor-pointer hover:border-[#11100C] shadow-sm hover:shadow-md transition-all duration-300 text-left items-center justify-between"
                  >
                    
                    {/* Horizontal side image */}
                    <div className="w-full sm:w-[200px] shrink-0 aspect-[16/10] overflow-hidden rounded-xl border border-[#4A3428]/10 bg-neutral-100">
                      <BlogCardCover id={article.id} title={article.title} />
                    </div>

                    {/* Horizontal content side */}
                    <div className="flex-grow space-y-2 text-left">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className={`text-[10px] font-serif uppercase tracking-[0.16em] font-extrabold ${getCategoryMarkerStyles(article.category)}`}>
                          {article.category}
                        </span>
                        <span className="text-[11px] text-[#4A3428]/60">
                          {article.readingTime} de leitura • {article.date}
                        </span>
                        <span className="text-[10px] text-[#A67C52] font-semibold uppercase tracking-wide">
                          • ESCRITO POR: Pedro Henrique
                        </span>
                      </div>

                      <h3 className="font-serif text-[18px] sm:text-[20px] leading-snug font-semibold text-[#11100C] group-hover:text-[#D6AF2A] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-[#4A3428]/85 text-[13px] leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Bottom arrow direction icon on the edge */}
                    <div className="flex items-center shrink-0 pr-2 gap-3 self-end sm:self-center">
                      <div className="w-8.5 h-8.5 rounded-full bg-transparent border border-[#4A3428]/18 group-hover:bg-[#11100C] group-hover:text-[#C5FF1A] flex items-center justify-center transition-all">
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5" />
                      </div>
                    </div>

                  </article>
                );
              }
            })}
          </div>
        )}

        {/* Load more logic */}
        {processedArticles.length > visibleCount && (
          <div id="load-more-container" className="pt-16 pb-6 text-center select-none">
            <button
              id="load-more-articles-btn"
              onClick={() => setVisibleCount(p => p + 6)}
              className="inline-flex items-center gap-2 px-7 py-3 border border-[#4A3428]/35 hover:border-[#11100C] rounded-full text-xs font-bold uppercase tracking-wider text-[#4A3428] hover:text-[#11100C] bg-white/20 hover:bg-white/80 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <span>Carregar mais artigos</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </section>

    </div>
  );
}
