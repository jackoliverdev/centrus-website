import { Metadata } from 'next';
import { PricingHero } from '@/components/sections/pricing/pricing-hero';
import { PricingPlans } from '@/components/sections/pricing/pricing-plans';
import { EnterpriseSection } from '@/components/sections/pricing/enterprise-section';
import { PricingFaq } from '@/components/sections/pricing/pricing-faq';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Flexible pricing plans for businesses of all sizes. From startups to enterprises, find the perfect plan for your needs.',
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