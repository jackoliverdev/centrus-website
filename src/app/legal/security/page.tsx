import { Metadata } from 'next';

import { LegalContent } from '@/components/sections/legal/legal-content';
import { securityContent } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Security Policy',
  description: 'Learn how we protect your data with enterprise-grade security measures in our security policy.',
  keywords: 'Centrus AI security policy',
  openGraph: {
    title: 'Security Policy',
    description: 'Learn how we protect your data with enterprise-grade security measures in our security policy.',
    type: 'website',
    url: 'https://centrus.ai/legal/security',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Security',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Policy',
    description: 'Learn how we protect your data with enterprise-grade security measures in our security policy.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/legal/security',
  },
};

export default function SecurityPage() {
  return (
    <div>
      <LegalContent
        title="Security Policy"
        subtitle="Last updated: March 22, 2025"
        content={securityContent}
      />
    </div>
  );
}
