/*
import { Metadata } from 'next';

import { CaseStudiesIndex } from '@/components/sections/resources/case-studies-index';
import { caseStudies, industries, solutions } from '@/content/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Discover how leading organisations are transforming their operations and achieving remarkable results with Centrus AI.',
  keywords: 'AI case studies, success stories, business transformation, enterprise AI implementation, ROI examples, digital transformation, AI solutions, customer success',
  openGraph: {
    title: 'Customer Success Stories | Centrus AI',
    description: 'See how leading organisations achieve remarkable results with Centrus AI.',
    type: 'website',
    url: 'https://centrus.ai/resources/case-studies',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Success Stories | Centrus AI Case Studies',
    description: 'Explore real-world examples of organisations transforming their operations and achieving measurable ROI with Centrus AI solutions.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/resources/case-studies',
  },
};

export default function CaseStudiesPage() {
  return (
    <CaseStudiesIndex caseStudies={caseStudies} industries={industries} solutions={solutions} />
  );
}
*/

// Placeholder to avoid 404
export default function ComingSoonPage() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-6">Case Studies Coming Soon</h1>
      <p className="text-xl text-muted-foreground">
        We're currently updating our case studies. Please check back later.
      </p>
    </div>
  );
}
