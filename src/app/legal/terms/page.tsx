import { Metadata } from 'next';

import { LegalContent } from '@/components/sections/legal/legal-content';
import { termsContent } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Terms of Service | Centrus AI',
  description: 'Review our terms of service and usage conditions for Centrus AI platform.',
};

export default function TermsPage() {
  return (
    <div>
      <LegalContent
        title="Terms of Service"
        subtitle="Last updated: December 25, 2024"
        content={termsContent}
      />
    </div>
  );
}
