import { Metadata } from 'next';

import { CareersHero } from '@/components/sections/careers/careers-hero';
import { JobOpenings } from '@/components/sections/careers/job-openings';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join our team and help shape the future of enterprise AI. Discover exciting opportunities to work with cutting-edge technology and transform organisational intelligence.',
  keywords: 'AI careers, tech jobs, Centrus careers, enterprise AI jobs, technology opportunities, AI company jobs, remote tech positions, innovative workplace',
  openGraph: {
    title: 'Careers | Centrus AI',
    description: 'Join our innovative team and help shape the future of enterprise AI. Explore opportunities to work with cutting-edge technology in a collaborative environment.',
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
    title: 'Join Our Team | Centrus AI Careers',
    description: 'Be part of an exciting journey to revolutionise enterprise knowledge management. Discover job opportunities with our forward-thinking AI company.',
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
