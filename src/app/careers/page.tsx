import { Metadata } from 'next';

import { CareersHero } from '@/components/sections/careers/careers-hero';
import { JobOpenings } from '@/components/sections/careers/job-openings';

export const metadata: Metadata = {
  title: 'Join our team | Careers in AI',
  description: 'Help us shape the future of enterprise AI. We\'re looking for talented individuals passionate about AI innovation and customer success.',
  keywords: 'AI careers',
  openGraph: {
    title: 'Join our team | Careers in AI',
    description: 'Help us shape the future of enterprise AI. We\'re looking for talented individuals passionate about AI innovation and customer success.',
    type: 'website',
    url: 'https://centrus.ai/careers',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Careers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centrus AI Careers',
    description: 'Help us shape the future of enterprise AI. We\'re looking for talented individuals passionate about AI innovation and customer success.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/careers',
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <CareersHero />
      <JobOpenings />
    </div>
  );
}
