import { Metadata } from 'next';
import { PricingHero } from '@/components/sections/pricing/pricing-hero';
import { PricingPlans } from '@/components/sections/pricing/pricing-plans';
import { EnterpriseSection } from '@/components/sections/pricing/enterprise-section';
import { PricingFaq } from '@/components/sections/pricing/pricing-faq';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Flexible pricing plans for businesses of all sizes. From startups to enterprises, find the perfect plan for your organisation\'s needs.',
  keywords: 'AI pricing, enterprise pricing, subscription plans, flexible billing, business plans, enterprise solution, AI subscription, scalable pricing',
  openGraph: {
    title: 'Pricing | Centrus AI',
    description: 'Flexible pricing plans for businesses of all sizes. From startups to enterprises, find the perfect plan for your organisation\'s needs.',
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
    title: 'Enterprise AI Pricing Plans | Centrus AI',
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