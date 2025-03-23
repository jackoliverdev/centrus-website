import { Metadata } from 'next';
import { DocsIndex } from '@/components/sections/resources/docs-index';

export const metadata: Metadata = {
  title: 'Docs',
  description:
    'Explore comprehensive guides, tutorials, and technical documentation for Centrus AI products and services.',
  openGraph: {
    title: 'Centrus AI Documentation',
    description: 'Comprehensive guides and technical documentation',
    type: 'website',
  },
};

export default function DocsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <DocsIndex />
    </div>
  );
}
