import { Metadata } from 'next';

import { LegalContent } from '@/components/sections/legal/legal-content';
import { termsContent } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review our transparent terms governing the use of our UK-based AI knowledge platform.',
  keywords: 'terms of service',
  openGraph: {
    title: 'Terms of Service',
    description: 'Review our transparent terms governing the use of our UK-based AI knowledge platform.',
    type: 'website',
    url: 'https://centrus.ai/legal/terms',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Terms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service',
    description: 'Review our transparent terms governing the use of our UK-based AI knowledge platform.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/legal/terms',
  },
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
