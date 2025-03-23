import { Metadata } from 'next';

import { AboutHero } from '@/components/sections/about/about-hero';
import { AboutMission } from '@/components/sections/about/about-mission';
import { AboutValues } from '@/components/sections/about/about-values';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission to transform businesses with AI-powered intelligence.',
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
