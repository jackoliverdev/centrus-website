import { Metadata } from 'next';

import { LegalContent } from '@/components/sections/legal/legal-content';
import { privacyContent } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Understand how our UK-based AI platform safeguards your business data with enterprise-grade security and full GDPR compliance.',
  keywords: 'Centrus AI privacy policy',
  openGraph: {
    title: 'Privacy Policy',
    description: 'Understand how our UK-based AI platform safeguards your business data with enterprise-grade security and full GDPR compliance.',
    type: 'website',
    url: 'https://centrus.ai/legal/privacy-policy',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Privacy Policy',
    description: 'Understand how our UK-based AI platform safeguards your business data with enterprise-grade security and full GDPR compliance.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/legal/privacy-policy',
  },
};

export default function PrivacyPage() {
  return (
    <div>
      <LegalContent
        title="Privacy Policy"
        subtitle="Last updated: March 22, 2025"
        content={privacyContent}
      />
    </div>
  );
}
