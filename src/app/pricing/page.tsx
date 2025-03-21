import { Metadata } from 'next';

import PricingPageContent from './pricing-content';

export const metadata: Metadata = {
  title: 'Pricing | Centrus AI',
  description:
    'Flexible pricing plans for businesses of all sizes. From startups to enterprises, find the perfect plan for your needs.',
};

export default function PricingPage() {
  return <PricingPageContent />;
}
