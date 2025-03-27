import { Metadata } from 'next';
import { DocsIndex } from '@/components/sections/resources/docs-index';

export const metadata: Metadata = {
  title: 'Getting started | Documentation',
  description:
    'From quick starts to detailed guides, find all the resources you need for getting started. Get guidance now.',
  keywords: 'Centrus AI guides',
  openGraph: {
    title: 'Getting started | Documentation',
    description: 'From quick starts to detailed guides, find all the resources you need for getting started. Get guidance now.',
    type: 'website',
    url: 'https://centrus.ai/resources/docs',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centrus AI Documentation',
    description: 'From quick starts to detailed guides, find all the resources you need for getting started. Get guidance now.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/resources/docs',
  },
};

export default function DocsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <DocsIndex />
    </div>
  );
}
