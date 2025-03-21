import { Suspense } from 'react';
import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/home/hero';
import { FeaturesSection } from '@/components/sections/home/features';
import { InteractiveDemo } from '@/components/sections/home/interactive-demo';
import { HowItWorksSection } from '@/components/sections/home/how-it-works';
import { SolutionsGrid } from '@/components/sections/home/solutions-grid';
import { IntegrationsSection } from '@/components/sections/home/integrations';
import { TestimonialsSection } from '@/components/sections/home/testimonials';
import { FaqSection } from '@/components/sections/home/faq';
import { CtaSection } from '@/components/sections/home/cta';

export const metadata: Metadata = {
  title: 'Centrus AI | Transform Your Business Knowledge',
  description:
    'Harness the power of AI to transform how your company accesses and utilises information. Instant data retrieval, smart analysis, and automated content creation.',
};

export default function HomePage() {
  return (
    <>
      {' '}
      {/* <Suspense> */}
      <HeroSection />
      {/* <Suspense> */}
      <HowItWorksSection />
      <InteractiveDemo />
      <FeaturesSection />
      <IntegrationsSection />
      {/* <SolutionsGrid /> */}
      {/* <TestimonialsSection /> */}
      <CtaSection />
      <FaqSection />
      {/* </Suspense> */}
      {/* </Suspense> */}

    </>
  );
}
