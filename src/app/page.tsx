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
  title: 'Centrus AI | Transform Your Business Knowledge',
  description:
    'Harness the power of AI to transform how your company accesses and utilises information. Instant data retrieval, smart analysis, and automated content creation.',
  keywords: 'AI assistant, enterprise AI, business intelligence, knowledge management, data retrieval, information access, AI transformation, business productivity',
  openGraph: {
    title: 'Centrus AI | Transform Your Business Knowledge',
    description: 'Harness the power of AI to transform how your company accesses and utilises information. Instant data retrieval, smart analysis, and automated content creation.',
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
    title: 'Centrus AI | Enterprise AI Knowledge Assistant',
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
