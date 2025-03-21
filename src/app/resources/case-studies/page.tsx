import { Metadata } from 'next';

import { CaseStudiesIndex } from '@/components/sections/resources/case-studies-index';
import { caseStudies, industries, solutions } from '@/content/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies | Centrus AI',
  description:
    'Discover how leading organizations are transforming their operations and achieving remarkable results with Centrus AI.',
  openGraph: {
    title: 'Customer Success Stories | Centrus AI',
    description: 'See how leading companies achieve remarkable results with Centrus AI.',
    type: 'website',
  },
};

export default function CaseStudiesPage() {
  return (
    <CaseStudiesIndex caseStudies={caseStudies} industries={industries} solutions={solutions} />
  );
}
