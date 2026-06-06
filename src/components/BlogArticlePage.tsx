import React, { useMemo, useState } from 'react';
import { BLOG_ARTICLES, BlogArticle } from '../data/blogData';
import { ArrowLeft, MessageCircle, Link, Calendar, FolderOpen, Clock, Copy, Check, Instagram, Bookmark, Star, Sparkles, Facebook, Twitter } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';
import { BlogCardCover } from './BlogCardCover';

interface BlogArticlePageProps {
  slug: string;
  onNavigate: (tab: 'blog' | 'blog-artigos' | 'blog-leitura', slug?: string) => void;
}

export function BlogArticlePage({ slug, onNavigate }: BlogArticlePageProps) {
  const [copied, setCopied] = useState(false);

  // Find article by slug
  const article = useMemo(() => {
    return BLOG_ARTICLES.find(a => a.slug === slug) || BLOG_ARTICLES[0];
  }, [slug]);

  // Find 3 related articles (same category if possible, otherwise first list)
  const relatedArticles = useMemo(() => {
    const filters = BLOG_ARTICLES.filter(a => a.id !== article.id);
    const sameCat = filters.filter(a => a.category === article.category);
    if (sameCat.length >= 3) {
      return sameCat.slice(0, 3);
    }
    const combined = [...sameCat, ...filters];
    const uniqueArticles = combined.filter((art, index) => combined.findIndex(a => a.id === art.id) === index);
    return uniqueArticles.slice(0, 3);
  }, [article]);

  const handleCopyLink = () => {
    // Copy clean version of link
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`Confira este artigo da Suma Sacerdotisa: ${article.title} ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`Confira este artigo da Suma Sacerdotisa: ${article.title}`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  // Helper for category highlight marker backgrounds
  const getCategoryMarkerStyles = (cat: string) => {
    switch (cat) {
      case 'Autoconhecimento':
        return 'bg-[#FBCFE8]/60 text-[#DB2777] px-2.5 py-0.5 rounded';
      case 'Tarot':
        return 'bg-[#FED7AA]/60 text-[#C2410C] px-2.5 py-0.5 rounded';
      case 'Intuição':
        return 'bg-[#F2D6FF] text-[#7C3AED] px-2.5 py-0.5 rounded';
      case 'Desenvolvimento':
        return 'bg-[#FEF08A]/60 text-[#B45309] px-2.5 py-0.5 rounded';
      case 'Espiritualidade':
        return 'bg-[#DBEAFE]/60 text-[#1D4ED8] px-2.5 py-0.5 rounded';
      default:
        return 'bg-[#E5E7EB] text-[#374151] px-2.5 py-0.5 rounded';
    }
  };

  return (
    <div id="blog-internal-article-container" className="bg-[#F3EBDD] min-h-screen text-[#11100C] font-sans pb-12 md:pb-16 antialiased selection:bg-[#C5FF1A]/35">
      
      {/* 2. CORE HEADING & METADATA SECTION */}
      <header id="article-heading-block" className="px-6 sm:px-12 md:px-24 max-w-[700px] mx-auto text-left pt-12 pb-4 space-y-4 relative">

        {/* Categories sticker label row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className={`text-[10px] font-serif uppercase tracking-[0.16em] font-extrabold shadow-sm ${getCategoryMarkerStyles(article.category)}`}>
            {article.category}
          </span>
          
          <div className="flex flex-wrap items-center text-[#4A3428]/70 text-xs font-medium gap-3 select-none pl-1">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime} de leitura</span>
            </span>
            <span className="text-[#4A3428]/30">•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span className="text-[#4A3428]/30">•</span>
            <span className="text-[10px] text-[#A67C52] font-semibold tracking-wide uppercase">
              ESCRITO POR: Pedro Henrique
            </span>
          </div>
        </div>

        {/* Big Serif Heading */}
        <h1 id="article-main-title" className="font-serif text-[28px] sm:text-[36px] md:text-[56px] text-[#0F0E0B] leading-[1.1] md:leading-[1.05] tracking-tight font-bold pt-2">
          {article.title}
        </h1>
      </header>

      {/* 3. POLAROID HERO IMAGE */}
      <section id="article-polaroid-banner" className="px-6 sm:px-12 md:px-24 max-w-[700px] mx-auto py-6 select-none">
        <div id="article-photo-sheet" className="relative bg-[#FAF5EC] p-3 sm:p-4 rounded-2xl shadow-[0_12px_45px_rgba(74,52,40,0.06)] border border-[#4A3428]/15">
          
          {/* Adhesive tape effect at top */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#EFE4CF]/85 border-l border-r border-[#4A3428]/12 shadow-[0_1px_2.5px_rgba(0,0,0,0.02)] select-none pointer-events-none" />

          {/* Photo itself */}
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#E5E0D5] border border-[#4A3428]/10 relative">
            <img 
              src={article.image} 
              alt={article.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Soft grid map shadow */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 4. MAIN BODY AND CONTENT TEXT AREA */}
      <section id="article-body-area" className="px-6 sm:px-12 md:px-24 max-w-[700px] mx-auto pt-6 flex flex-col justify-stretch">
        
        {/* Soft introductory box quote */}
        <div className="bg-[#FAF5EC]/70 shadow-[0_6px_20px_rgba(72,42,168,0.015)] border-l-4 border-[#D6AF2A] rounded-r-2xl p-5 mb-8 text-[#0F0E0B]/95 font-serif italic text-base leading-relaxed text-left">
          {article.excerpt}
        </div>

        {/* Structured parsing block layout */}
        <div id="article-markdown-body" className="space-y-6 text-left text-[#0F0E0B] text-[16px] md:text-[18px] leading-[1.75] font-normal">
          {article.content.map((block, idx) => {
            switch (block.type) {
              case 'p':
                return <p key={idx} className="leading-[1.75] font-normal text-[#0F0E0B]">{block.text}</p>;

              case 'h4':
                return (
                  <h3 key={idx} className="font-serif text-[26px] md:text-[32px] text-[#0F0E0B] font-bold leading-[1.2] tracking-tight pt-6 pb-1.5 border-b border-[#4A3428]/12 mt-10 mb-4">
                    {block.text}
                  </h3>
                );

              case 'h5':
                return (
                  <h4 key={idx} className="font-serif text-[20px] md:text-[24px] text-[#0F0E0B] font-bold leading-[1.2] tracking-tight pt-4 mt-8 mb-2">
                    {block.text}
                  </h4>
                );

              case 'quote':
                return (
                  <div key={idx} className="my-8 py-5.5 px-7 border-l-4 border-[#8B6EFA] bg-[#8B6EFA]/0.05 rounded-r-2xl shadow-sm text-left">
                    <p className="font-serif italic text-[17.5px] sm:text-[19px] text-[#0F0E0B] leading-relaxed">
                      "{block.text}"
                    </p>
                    {block.author && (
                      <span className="text-[11px] text-[#D6AF2A] font-bold uppercase tracking-wider block mt-3">— {block.author}</span>
                    )}
                  </div>
                );

              case 'list':
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2.5 my-5 text-[#0F0E0B] text-[16px] md:text-[18px] font-normal leading-[1.75]">
                    {block.items?.map((item, i) => (
                      <li key={i} className="pl-1 leading-[1.75]"><span className="font-normal">{item}</span></li>
                    ))}
                  </ul>
                );

              case 'list-arrow':
                return (
                  <ul key={idx} className="space-y-3 pl-1 my-5 text-[16px] md:text-[18px] font-normal leading-[1.75]">
                    {block.items?.map((item, i) => (
                      <li key={i} className="flex items-start">
                        {/* Custom arrow bullet indicator */}
                        <span className="text-[#8B6EFA] mr-3 font-bold select-none text-base">&rarr;</span>
                        <span className="text-[#0F0E0B] leading-[1.75] font-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                );

              default:
                return null;
            }
          })}
        </div>

        {/* 5. SHARE PANEL */}
        <div id="article-share-panel" className="mt-16 pt-8 border-t border-[#4A3428]/12 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
          <div className="text-left">
            <span className="text-[11px] text-[#4A3428]/60 font-bold uppercase tracking-wider block">Gostou da leitura?</span>
            <span className="text-sm font-serif text-[#11100C] font-semibold block">Compartilhe esse aprendizado</span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 px-1">
            <button
              onClick={shareOnWhatsApp}
              className="w-10 h-10 inline-flex items-center justify-center bg-[#FAF5EC] hover:bg-[#11100C] hover:text-[#C5FF1A] text-[#0F0E0B] border border-[#4A3428]/18 rounded-full transition-all cursor-pointer shadow-sm active:scale-95"
              title="Compartilhar no WhatsApp"
              aria-label="Compartilhar no WhatsApp"
            >
              <WhatsappIcon className="w-5 h-5 shrink-0" />
            </button>
            <a
              href="https://www.instagram.com/a.sumasacerdotisa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 inline-flex items-center justify-center bg-[#FAF5EC] hover:bg-[#11100C] hover:text-[#C5FF1A] text-[#0F0E0B] border border-[#4A3428]/18 rounded-full transition-all cursor-pointer shadow-sm active:scale-95"
              title="Abrir Instagram"
              aria-label="Abrir Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={shareOnFacebook}
              className="w-10 h-10 inline-flex items-center justify-center bg-[#FAF5EC] hover:bg-[#11100C] hover:text-[#C5FF1A] text-[#0F0E0B] border border-[#4A3428]/18 rounded-full transition-all cursor-pointer shadow-sm active:scale-95"
              title="Compartilhar no Facebook"
              aria-label="Compartilhar no Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              onClick={shareOnTwitter}
              className="w-10 h-10 inline-flex items-center justify-center bg-[#FAF5EC] hover:bg-[#11100C] hover:text-[#C5FF1A] text-[#0F0E0B] border border-[#4A3428]/18 rounded-full transition-all cursor-pointer shadow-sm active:scale-95"
              title="Compartilhar no X"
              aria-label="Compartilhar no X"
            >
              <Twitter className="w-5 h-5" />
            </button>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 inline-flex items-center justify-center bg-[#FAF5EC] hover:bg-[#11100C] hover:text-[#C5FF1A] text-[#0F0E0B] border border-[#4A3428]/18 rounded-full transition-all cursor-pointer relative shadow-sm active:scale-95"
              title={copied ? "Link copiado!" : "Copiar link do artigo"}
              aria-label={copied ? "Link copiado!" : "Copiar link do artigo"}
            >
              {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
              
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#11100C] text-white text-[10px] py-1 px-3 rounded-md whitespace-nowrap shadow-md">
                  ✓ Link copiado!
                </span>
              )}
            </button>
          </div>
        </div>

      </section>

      {/* 6. NEXT / RELATED READINGS CONTAINER */}
      <section id="article-related-readings" className="px-6 sm:px-12 md:px-24 max-w-7xl mx-auto mt-24 border-t border-[#4A3428]/12 pt-16">
        
        {/* Banner header title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-10 select-none">
          <div className="text-left space-y-1">
            <span className="text-[10px] text-[#A67C52] font-bold uppercase tracking-[0.25em] block">Mais Sabedoria</span>
            <h3 className="font-serif text-[22px] sm:text-[26px] text-[#11100C] font-semibold leading-tight">
              Artigos que você pode se conectar
            </h3>
          </div>

          <button
            onClick={() => onNavigate('blog-artigos')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-[#11100C] text-[#D6AF2A] cursor-pointer mt-1 sm:mt-0 self-start sm:self-auto"
          >
            <span>Ver todos</span>
            <span className="text-sm">&rarr;</span>
          </button>
        </div>

        {/* Cards layout */}
        <div id="related-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedArticles.map((art) => (
            <article
              id={`related-art-${art.slug}`}
              key={art.id}
              onClick={() => {
                onNavigate('blog-leitura', art.slug);
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
              }}
              className="group flex flex-col justify-between bg-[#FAF5EC] border border-[#4A3428]/18 rounded-[24px] p-4.5 cursor-pointer hover:border-[#11100C] hover:shadow-lg transition-all duration-300"
            >
              <div>
                
                {/* Photo frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-200 border border-[#4A3428]/10">
                  <BlogCardCover id={art.id} title={art.title} />
                </div>

                <div className="mt-4 flex">
                  <span className={`text-[9.5px] font-serif uppercase tracking-[0.16em] font-extrabold ${getCategoryMarkerStyles(art.category)}`}>
                    {art.category}
                  </span>
                </div>

                <h4 className="font-serif text-[18px] text-[#11100C] font-semibold leading-snug mt-3 group-hover:text-[#D6AF2A] transition-colors line-clamp-2">
                  {art.title}
                </h4>
              </div>

              {/* Bottom stats row */}
              <div className="mt-5 pt-3.5 border-t border-[#4A3428]/12 flex flex-col gap-1.5 select-none">
                <div className="flex items-center justify-between text-[11px] text-[#4A3428]/70 font-medium">
                  <span>{art.readingTime} de leitura</span>
                  <span>{art.date}</span>
                </div>
                <span className="text-[9.5px]/none text-[#A67C52] font-semibold font-sans uppercase tracking-wide text-left">
                  ESCRITO POR: Pedro Henrique
                </span>
              </div>

            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
