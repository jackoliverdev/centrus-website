'use client';

import { EnterpriseSection } from '@/components/sections/pricing/enterprise-section';
import { PricingFaq } from '@/components/sections/pricing/pricing-faq';
import { PricingHero } from '@/components/sections/pricing/pricing-hero';
import { PricingPlans } from '@/components/sections/pricing/pricing-plans';

export default function PricingPageContent() {
  return (
    <div className="relative">
      <PricingHero />
      <div className="py-16 sm:py-24">
        <PricingPlans />
        <EnterpriseSection />
        <PricingFaq />
      </div>
    </div>
  );
}
