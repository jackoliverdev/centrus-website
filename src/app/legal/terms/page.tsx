import { Metadata } from 'next';

import { LegalContent } from '@/components/sections/legal/legal-content';
import { termsContent } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Review our terms of service and usage conditions for Centrus AI platform.',
};

export default function TermsPage() {
  return (
    <div>
      <LegalContent
        title="Terms of Service"
        subtitle="Last updated: March 22, 2025"
        content={termsContent}
      />
    </div>
  );
}
