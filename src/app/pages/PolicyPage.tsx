import { Policy } from '../components/Policy';
import { PageTransition } from '../components/PageTransition';

export function PolicyPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <Policy />
      </div>
    </PageTransition>
  );
}