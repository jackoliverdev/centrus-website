import { Metadata } from 'next';

import { AboutHero } from '@/components/sections/about/about-hero';
import { AboutMission } from '@/components/sections/about/about-mission';
import { AboutValues } from '@/components/sections/about/about-values';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission to transform businesses with AI-powered intelligence and our vision for the future of organisational knowledge management.',
  keywords: 'about Centrus AI, our mission, company vision, AI leadership, organisation values, team culture, enterprise AI innovation, company history',
  openGraph: {
    title: 'About Us | Centrus AI',
    description: 'Discover our vision, mission, and the team behind Centrus AI. Learn how we\'re transforming business intelligence with cutting-edge AI solutions.',
    type: 'website',
    url: 'https://centrus.ai/about',
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
    title: 'About Centrus AI | Our Mission & Vision',
    description: 'Meet the team behind Centrus AI and learn about our mission to revolutionise how organisations access and utilise their critical business knowledge.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <AboutMission />
      <AboutValues />
    </div>
  );
}
