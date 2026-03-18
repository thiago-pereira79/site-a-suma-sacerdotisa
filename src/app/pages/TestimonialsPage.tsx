import { Testimonials } from '../components/Testimonials';
import { PageTransition } from '../components/PageTransition';

export function TestimonialsPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <Testimonials />
      </div>
    </PageTransition>
  );
}