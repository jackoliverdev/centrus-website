import { Metadata } from 'next';

import { SolutionsHero } from '@/components/sections/solutions/solutions-hero';
import { UseCasesGrid } from '@/components/sections/solutions/use-cases-grid';
import { TechnologySection } from '@/components/sections/solutions/technology';
import { CaseStudiesSection } from '@/components/sections/solutions/NotUsed-case-studies';
import { DemoSection } from '@/components/sections/solutions/demo-section';

export const metadata: Metadata = {
  title: 'Transform Your Business | AI-Powered Solutions',
  description:
    'From document search to sales enablement, get time back for your business with AI. Discover Centrus AI solutions.',
  keywords: 'AI solutions',
  openGraph: {
    title: 'Transform Your Business | AI-Powered Solutions',
    description: 'From document search to sales enablement, get time back for your business with AI. Discover Centrus AI solutions.',
    type: 'website',
    url: 'https://centrus.ai/solutions',
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
    title: 'Transform Your Business | AI-Powered Solutions',
    description: 'Transform your business workflows with Centrus AI solutions. Powerful tools for document management, customer support, and knowledge base automation.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/solutions',
  },
};

export default function SolutionsPage() {
  return (
    <div className="relative">
      <SolutionsHero />
      <UseCasesGrid />
      <TechnologySection />
      {/* <CaseStudiesSection /> */}
      <DemoSection />
    </div>
  );
}
