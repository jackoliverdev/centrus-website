import { Metadata } from 'next';

import { ResourcesGrid } from '@/components/sections/resources/grid';
import { ResourcesHero } from '@/components/sections/resources/hero';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Explore our collection of guides, documentation, case studies, and insights about AI in business and organisations.',
  keywords: 'AI resources, enterprise guides, business case studies, technical documentation, AI tutorials, knowledge base, implementation guides, best practices',
  openGraph: {
    title: 'Resources | Centrus AI',
    description: 'Explore our collection of guides, documentation, case studies, and insights about AI in business and organisations.',
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
    title: 'AI Knowledge Resources | Centrus AI',
    description: 'Access comprehensive guides, technical documentation, and real-world case studies to optimise your AI implementation and utilisation.',
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
