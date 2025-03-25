import { Metadata } from 'next';

import { LegalContent } from '@/components/sections/legal/legal-content';
import { termsContent } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Review our terms of service and usage conditions for the Centrus AI platform. These terms outline your rights and responsibilities when using our services and solutions.',
  keywords: 'terms of service, terms and conditions, user agreement, legal terms, service terms, platform usage, terms of use, user rights, legal agreement',
  openGraph: {
    title: 'Terms of Service | Centrus AI',
    description: 'Information about the legal terms and conditions governing the use of Centrus AI services, including user rights, responsibilities, and acceptable usage policies.',
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
    title: 'Terms of Service | Centrus AI',
    description: 'Review the legal terms and conditions that govern your use of Centrus AI solutions, products, and services.',
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
