import { Metadata } from 'next';

import { LegalContent } from '@/components/sections/legal/legal-content';
import { securityContent } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Security',
  description: 'Learn about how we protect your data with enterprise-grade security measures. Centrus AI employs robust protocols to safeguard your organisation\'s information and ensure confidentiality.',
  keywords: 'data security, enterprise security, AI security measures, information protection, data encryption, secure AI platform, security protocols, data safeguarding',
  openGraph: {
    title: 'Security Policy | Centrus AI',
    description: 'Discover how Centrus AI implements comprehensive security measures to protect your organisation\'s data and maintain the highest standards of information security.',
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
    title: 'Our Security Commitment | Centrus AI',
    description: 'How we protect your valuable data: Learn about our enterprise-grade security protocols, encryption standards, and data protection practices.',
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
