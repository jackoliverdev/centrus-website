import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CaseStudyContent } from '@/components/sections/resources/case-study-content';
import { caseStudies } from '@/content/case-studies';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for each case study
export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = caseStudies.find(study => study.slug === params.slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Centrus AI',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${caseStudy.title} | Centrus AI Case Studies`,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      type: 'article',
      images: [caseStudy.image],
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find(study => study.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyContent caseStudy={caseStudy} />;
}
