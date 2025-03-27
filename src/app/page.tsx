import { Suspense } from 'react';
import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/home/hero';
import { FeaturesSection } from '@/components/sections/home/features';
import { InteractiveDemo } from '@/components/sections/home/interactive-demo';
import { HowItWorksSection } from '@/components/sections/home/how-it-works';
import { IntegrationsSection } from '@/components/sections/home/integrations';
import { TestimonialsSection } from '@/components/sections/home/NotUsed-testimonials';
import { FaqSection } from '@/components/sections/home/faq';
import { CtaSection } from '@/components/sections/home/cta';

export const metadata: Metadata = {
  title: 'Your AI-powered business assistant | Centrus AI',
  description:
    'Reduce time spent searching by 40% with your AI-powered business assistant. From business-data retrieval to content creation. Discover Centrus AI.',
  keywords: 'AI business solution',
  openGraph: {
    title: 'Your AI-powered business assistant | Centrus AI',
    description: 'Reduce time-wasting spent searching by 40% with your AI-powered business assistant. From business-data retrieval to content creation. Discover Centrus AI.',
    type: 'website',
    url: 'https://centrus.ai',
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
    title: 'Unlock Your Business Knowledge',
    description: 'Transform how your business accesses critical information with AI-powered knowledge retrieval, analysis, and content generation.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai',
  },
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
      {/* <TestimonialsSection /> */}
      <CtaSection />
      <FaqSection />
      {/* </Suspense> */}
      {/* </Suspense> */}

    </>
  );
}
