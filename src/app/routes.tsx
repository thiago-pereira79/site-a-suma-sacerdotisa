import { createBrowserRouter } from 'react-router';
import { RootLayout } from './pages/RootLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { PolicyPage } from './pages/PolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'sobre', Component: AboutPage },
      { path: 'como-funciona', Component: HowItWorksPage },
      { path: 'valores', Component: ServicesPage },
      { path: 'depoimentos', Component: TestimonialsPage },
      { path: 'contato', Component: ContactPage },
      { path: 'politica', Component: PolicyPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);