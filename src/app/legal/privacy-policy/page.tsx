import { Metadata } from 'next';

import { LegalContent } from '@/components/sections/legal/legal-content';
import { privacyContent } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'Learn how Centrus AI protects and handles your data with enterprise-grade security and compliance. Our privacy policy details our commitment to safeguarding your information.',
  keywords: 'privacy policy, data protection, GDPR compliance, data security, privacy notice, AI data handling, personal information, data privacy, user rights',
  openGraph: {
    title: 'Privacy Policy | Centrus AI',
    description: 'Detailed information about how Centrus AI collects, processes, and protects your personal data with enterprise-grade security measures and regulatory compliance.',
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
    title: 'Our Privacy Policy | Centrus AI',
    description: 'Understanding how we protect your data: Our comprehensive privacy policy explains our data handling practices and your privacy rights.',
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
