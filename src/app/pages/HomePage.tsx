import { Hero } from '../components/Hero';
import { Instagram } from '../components/Instagram';
import { PageTransition } from '../components/PageTransition';

export function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Instagram />
    </PageTransition>
  );
}