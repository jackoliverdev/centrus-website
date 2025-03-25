import { Metadata } from 'next';
import { DocsIndex } from '@/components/sections/resources/docs-index';

export const metadata: Metadata = {
  title: 'Docs',
  description:
    'Explore comprehensive guides, tutorials, and technical documentation for Centrus AI products and services.',
  keywords: 'technical documentation, implementation guides, user manuals, integration tutorials, product specifications.',
  openGraph: {
    title: 'Centrus AI Documentation',
    description: 'Comprehensive guides and technical documentation for Centrus AI.',
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
    title: 'Technical Documentation | Centrus AI Docs',
    description: 'Access detailed technical documentation, implementation guides, and tutorials for Centrus AI.',
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
