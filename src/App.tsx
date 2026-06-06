import { useState, useEffect } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { HowItWorks } from './components/HowItWorks';
import { ValuesSection } from './components/ValuesSection';
import { PolicySection } from './components/PolicySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { LegalSection } from './components/LegalSection';
import { Footer } from './components/Footer';
import { BlogHeader } from './components/BlogHeader';
import { BlogFooter } from './components/BlogFooter';
import { BlogHome } from './components/BlogHome';
import { BlogAllArticles } from './components/BlogAllArticles';
import { BlogArticlePage } from './components/BlogArticlePage';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentTab, setTab] = useState<Page>('inicio');
  const [selectedSlug, setSelectedSlug] = useState<string>('silencio-tambem-e-resposta');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const isBlog = currentTab === 'blog' || currentTab === 'blog-artigos' || currentTab === 'blog-leitura';

  // Monitor tab change via hash to make internal links or external loads easy to route
  useEffect(() => {
    const handleHashChange = () => {
      const hashRaw = window.location.hash.replace('#', '');
      
      if (hashRaw === 'blog') {
        setTab('blog');
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } else if (hashRaw === 'blog/artigos') {
        setTab('blog-artigos');
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } else if (hashRaw.startsWith('blog/')) {
        const slug = hashRaw.replace('blog/', '');
        setSelectedSlug(slug);
        setTab('blog-leitura');
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } else {
        const validTabs: Page[] = [
          'inicio', 'sobre', 'como-funciona', 'valores', 
          'politica', 'depoimentos', 'contato', 'faq', 
          'termos', 'privacidade'
        ];
        if (validTabs.includes(hashRaw as Page)) {
          setTab(hashRaw as Page);
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial load check
    handleHashChange();

    // Scroll display monitor
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Always scroll to top completely whenever tab or selected blog slug changes
  useEffect(() => {
    // Scroll immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    
    // Scroll after a tiny frame delay to ensure React finishes DOM paint in next microtask
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 0);

    // Scroll after a short duration to bypass exiting route height animations
    const animationTimer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 150);

    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
  }, [currentTab, selectedSlug]);

  // Update hash dynamically on tab changes
  const handleTabChange = (newTab: Page, extraSlug?: string) => {
    setTab(newTab);
    if (newTab === 'blog') {
      window.location.hash = 'blog';
    } else if (newTab === 'blog-artigos') {
      window.location.hash = 'blog/artigos';
    } else if (newTab === 'blog-leitura' && extraSlug) {
      setSelectedSlug(extraSlug);
      window.location.hash = `blog/${extraSlug}`;
    } else {
      window.location.hash = newTab;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'inicio':
        return <HeroSection setTab={handleTabChange} />;
      case 'sobre':
        return <AboutSection />;
      case 'como-funciona':
        return <HowItWorks setTab={handleTabChange} />;
      case 'valores':
        return <ValuesSection setTab={handleTabChange} />;
      case 'politica':
        return <PolicySection />;
      case 'depoimentos':
        return <TestimonialsSection />;
      case 'contato':
        return <ContactSection />;
      case 'faq':
        return <FaqSection />;
      case 'termos':
        return <LegalSection type="termos" />;
      case 'privacidade':
        return <LegalSection type="privacidade" />;
      
      // Blog tabs
      case 'blog':
        return <BlogHome onNavigate={handleTabChange} />;
      case 'blog-artigos':
        return <BlogAllArticles onNavigate={handleTabChange} />;
      case 'blog-leitura':
        return <BlogArticlePage slug={selectedSlug} onNavigate={handleTabChange} />;

      default:
        return <HeroSection setTab={handleTabChange} />;
    }
  };

  return (
    <div className={`relative min-h-screen flex flex-col justify-between overflow-x-hidden transition-colors duration-500 selection:bg-[#B75E3C]/20 selection:text-[#5A1F2E] ${
      isBlog 
        ? 'bg-[#F3EBDD] text-[#111111] selection:bg-[#14351F]/10 selection:text-[#14351F]' 
        : 'bg-[#F3EBDD] text-[#11100C]'
    }`}>
      
      {/* Dynamic Header */}
      {isBlog ? (
        <BlogHeader currentTab={currentTab} setTab={handleTabChange} />
      ) : (
        <Header currentTab={currentTab} setTab={handleTabChange} />
      )}

      {/* Main Responsive Views Wrapper with Smooth Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Footer */}
      {isBlog ? (
        <BlogFooter onNavigateTab={handleTabChange} currentTab={currentTab} />
      ) : (
        <Footer setTab={handleTabChange} currentTab={currentTab} />
      )}

    </div>
  );
}
