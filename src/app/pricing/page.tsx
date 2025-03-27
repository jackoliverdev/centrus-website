import { Metadata } from 'next';
import { PricingHero } from '@/components/sections/pricing/pricing-hero';
import { PricingPlans } from '@/components/sections/pricing/pricing-plans';
import { EnterpriseSection } from '@/components/sections/pricing/enterprise-section';
import { PricingFaq } from '@/components/sections/pricing/pricing-faq';

export const metadata: Metadata = {
  title: 'Choose the Perfect Plan | Pricing',
  description:
    'Save up to 25% with Centrus AI solutions annual package. Choose the perfect plan for your AI solution today.',
  keywords: 'AI pricing',
  openGraph: {
    title: 'Choose the Perfect Plan | Pricing',
    description: 'Save up to 25% with Centrus AI solutions annual package. Choose the perfect plan for your AI solution today.',
    type: 'website',
    url: 'https://centrus.ai/pricing',
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
    title: 'Accessible Enterprise AI Pricing for Every Budget',
    description: 'Discover transparent, flexible pricing tailored to your business size. Centrus AI offers customised plans with predictable costs and no hidden fees.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/pricing',
  },
};

export default function PricingPage() {
  return (
    <div className="relative">
      <PricingHero />
        <PricingPlans />
        <EnterpriseSection />
        <PricingFaq />
      </div>
  );
}