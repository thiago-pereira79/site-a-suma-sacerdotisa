export type Page =
  | 'inicio'
  | 'sobre'
  | 'como-funciona'
  | 'valores'
  | 'politica'
  | 'depoimentos'
  | 'contato'
  | 'faq'
  | 'termos'
  | 'privacidade'
  | 'blog'
  | 'blog-artigos'
  | 'blog-leitura';

export interface ServiceItem {
  name: string;
  price: string;
  duration?: string;
  description: string;
  details?: string[];
  obs?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
  extraObs?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
