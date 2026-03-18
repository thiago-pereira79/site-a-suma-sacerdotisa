import { Services } from '../components/Services';
import { Payment } from '../components/Payment';
import { PageTransition } from '../components/PageTransition';

export function ServicesPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <Services />
        <Payment />
      </div>
    </PageTransition>
  );
}