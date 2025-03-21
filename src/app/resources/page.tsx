import { Metadata } from 'next';

import { ResourcesGrid } from '@/components/sections/resources/grid';
import { ResourcesHero } from '@/components/sections/resources/hero';

export const metadata: Metadata = {
  title: 'Resources | Centrus AI',
  description:
    'Explore our collection of guides, documentation, case studies, and insights about AI in business.',
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ResourcesHero />
      <ResourcesGrid />
    </main>
  );
}
