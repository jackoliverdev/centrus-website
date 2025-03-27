import { Metadata } from 'next';

import { ResourcesGrid } from '@/components/sections/resources/grid';
import { ResourcesHero } from '@/components/sections/resources/hero';

export const metadata: Metadata = {
  title: 'AI Knowledge Resources',
  description:
    'Comprehensive collection of AI implementation guides, best practices, and business case studies tailored for UK organisations',
  keywords: 'AI resource library',
  openGraph: {
    title: 'AI Knowledge Resources',
    description: 'Comprehensive collection of AI implementation guides, best practices, and business case studies tailored for UK organisations',
    type: 'website',
    url: 'https://centrus.ai/resources',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Knowledge Resources',
    description: 'Comprehensive collection of AI implementation guides, best practices, and business case studies tailored for UK organisations.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/resources',
  },
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ResourcesHero />
      <ResourcesGrid />
    </main>
  );
}
