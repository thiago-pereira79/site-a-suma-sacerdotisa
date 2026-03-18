import { HowItWorks } from '../components/HowItWorks';
import { PageTransition } from '../components/PageTransition';

export function HowItWorksPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <HowItWorks />
      </div>
    </PageTransition>
  );
}