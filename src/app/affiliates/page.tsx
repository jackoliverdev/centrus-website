import { Metadata } from 'next';
import { AffiliatesForm } from '@/components/sections/affiliates/form';
import { AffiliatesHero } from '@/components/sections/affiliates/hero';

export const metadata: Metadata = {
  title: 'Affiliates',
  description:
    'Join the Centrus AI Affiliates Program and earn rewards by referring businesses to our AI solutions.',
  openGraph: {
    title: 'Centrus AI Affiliates Program',
    description: 'Partner with us and earn rewards through referrals',
    type: 'website',
  },
};

export default function AffiliatesPage() {
  return (
    <>
      <AffiliatesHero />
      <AffiliatesForm />
    </>
  );
}
