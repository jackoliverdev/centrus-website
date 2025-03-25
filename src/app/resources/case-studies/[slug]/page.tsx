/*
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
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
    };
  }

  // Generate keywords based on case study data
  const industryTags = caseStudy.industry ? [caseStudy.industry] : [];
  const keywords = [
    ...industryTags, 
    'case study', 
    'success story', 
    'business transformation',
    'AI implementation',
    'ROI example',
    ...(caseStudy.title.toLowerCase().split(' ').filter(word => word.length > 3))
  ].join(', ');

  return {
    title: `${caseStudy.title}`,
    description: caseStudy.description,
    keywords: keywords,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      type: 'article',
      url: `https://centrus.ai/resources/case-studies/${caseStudy.slug}`,
      siteName: 'Centrus AI',
      images: [
        {
          url: caseStudy.image,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} | AI Success Story`,
      description: caseStudy.description,
      images: [caseStudy.image],
      creator: '@centrusai',
    },
    alternates: {
      canonical: `https://centrus.ai/resources/case-studies/${caseStudy.slug}`,
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
*/

import { redirect } from 'next/navigation';

export default function DisabledCaseStudyPage() {
  // Redirect to the main case studies page
  redirect('/resources/case-studies');
}
