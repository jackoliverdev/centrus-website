import { Metadata } from 'next';

import { AboutHero } from '@/components/sections/about/about-hero';
import { AboutMission } from '@/components/sections/about/about-mission';
import { AboutValues } from '@/components/sections/about/about-values';

export const metadata: Metadata = {
  title: 'Cutting-edge AI without barriers | About Us',
  description: 'We offer AI solutions for businesses. Learn about us, our core values and what drives us to create cutting-edge AI without barriers.',
  keywords: 'cutting-edge AI',
  openGraph: {
    title: 'Cutting-edge AI without barriers | About Us',
    description: 'We offer AI solutions for businesses. Learn about us, our core values and what drives us to create cutting-edge AI without barriers.',
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
    title: 'Cutting-edge AI without barriers',
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
