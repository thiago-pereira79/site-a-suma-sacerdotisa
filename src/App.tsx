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

const DEFAULT_BLOG_SLUG = 'silencio-tambem-e-resposta';

const PAGE_PATHS: Partial<Record<Page, string>> = {
  inicio: '/',
  sobre: '/sobre',
  'como-funciona': '/como-funciona',
  valores: '/valores',
  politica: '/politica-de-consulta',
  depoimentos: '/depoimentos',
  contato: '/contato',
  faq: '/faq',
  termos: '/termos-de-uso',
  privacidade: '/politica-de-privacidade',
  blog: '/blog',
  'blog-artigos': '/blog/artigos',
};

const PATH_ROUTES: Record<string, Page> = {
  '/': 'inicio',
  '/sobre': 'sobre',
  '/como-funciona': 'como-funciona',
  '/valores': 'valores',
  '/politica-de-consulta': 'politica',
  '/depoimentos': 'depoimentos',
  '/contato': 'contato',
  '/faq': 'faq',
  '/termos-de-uso': 'termos',
  '/politica-de-privacidade': 'privacidade',
  '/blog': 'blog',
  '/blog/artigos': 'blog-artigos',
};

const LEGACY_HASH_PATHS: Record<string, string> = {
  inicio: '/',
  home: '/',
  sobre: '/sobre',
  'como-funciona': '/como-funciona',
  valores: '/valores',
  politica: '/politica-de-consulta',
  'politica-de-consulta': '/politica-de-consulta',
  depoimentos: '/depoimentos',
  contato: '/contato',
  faq: '/faq',
  termos: '/termos-de-uso',
  'termos-de-uso': '/termos-de-uso',
  privacidade: '/politica-de-privacidade',
  'politica-de-privacidade': '/politica-de-privacidade',
  blog: '/blog',
  'blog/artigos': '/blog/artigos',
};

type RouteState = {
  tab: Page;
  slug?: string;
  replacePath?: string;
};

function safeDecode(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function normalizePath(pathname: string) {
  const decodedPath = safeDecode(pathname);
  return decodedPath.replace(/\/+$/, '') || '/';
}

function getPathForRoute(tab: Page, slug?: string) {
  if (tab === 'blog-leitura') {
    return `/blog/${slug || DEFAULT_BLOG_SLUG}`;
  }

  return PAGE_PATHS[tab] || '/';
}

function getRouteFromPath(pathname: string): RouteState {
  const cleanPath = normalizePath(pathname);

  if (cleanPath === '/inicio') {
    return { tab: 'inicio', replacePath: '/' };
  }

  const mappedTab = PATH_ROUTES[cleanPath];

  if (mappedTab) {
    return { tab: mappedTab };
  }

  if (cleanPath.startsWith('/blog/')) {
    const slug = cleanPath.replace('/blog/', '');

    if (slug) {
      return { tab: 'blog-leitura', slug };
    }
  }

  return { tab: 'inicio' };
}

function getRouteFromHash(hash: string): RouteState | null {
  const cleanHash = safeDecode(hash.replace(/^#/, '').replace(/^\/+/, '').replace(/\/+$/, ''));

  if (!cleanHash) {
    return null;
  }

  if (cleanHash.startsWith('blog/')) {
    const slug = cleanHash.replace('blog/', '');

    if (slug === 'artigos') {
      return { tab: 'blog-artigos', replacePath: '/blog/artigos' };
    }

    if (slug) {
      return { tab: 'blog-leitura', slug, replacePath: `/blog/${slug}` };
    }
  }

  const mappedPath = LEGACY_HASH_PATHS[cleanHash];

  if (mappedPath) {
    const route = getRouteFromPath(mappedPath);
    return { ...route, replacePath: mappedPath };
  }

  const route = getRouteFromPath(`/${cleanHash}`);
  const path = getPathForRoute(route.tab, route.slug);

  return { ...route, replacePath: path };
}

function getRouteFromLocation(): RouteState {
  const hashRoute = getRouteFromHash(window.location.hash);

  if (hashRoute) {
    return hashRoute;
  }

  return getRouteFromPath(window.location.pathname);
}

function getInitialRoute(): RouteState {
  if (typeof window === 'undefined') {
    return { tab: 'inicio' };
  }

  return getRouteFromLocation();
}

export default function App() {
  const [currentTab, setTab] = useState<Page>(() => getInitialRoute().tab);
  const [selectedSlug, setSelectedSlug] = useState<string>(() => getInitialRoute().slug || DEFAULT_BLOG_SLUG);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const isBlog = currentTab === 'blog' || currentTab === 'blog-artigos' || currentTab === 'blog-leitura';

  // Sync clean URL paths with the current SPA view, including legacy hash redirects.
  useEffect(() => {
    const syncRoute = () => {
      const route = getRouteFromLocation();

      if (route.replacePath) {
        window.history.replaceState(null, '', route.replacePath);
      }

      if (route.tab === 'blog-leitura') {
        setSelectedSlug(route.slug || DEFAULT_BLOG_SLUG);
      }

      setTab(route.tab);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', syncRoute);
    
    // Initial load check
    syncRoute();

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
      window.removeEventListener('popstate', syncRoute);
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

  const handleTabChange = (newTab: Page, extraSlug?: string) => {
    const nextSlug = newTab === 'blog-leitura' ? (extraSlug || selectedSlug || DEFAULT_BLOG_SLUG) : extraSlug;
    const nextPath = getPathForRoute(newTab, nextSlug);

    setTab(newTab);

    if (newTab === 'blog-leitura') {
      setSelectedSlug(nextSlug || DEFAULT_BLOG_SLUG);
    }

    if (window.location.pathname !== nextPath || window.location.hash) {
      window.history.pushState(null, '', nextPath);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
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
