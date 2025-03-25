import { Metadata } from 'next';
import { AffiliatesForm } from '@/components/sections/affiliates/form';
import { AffiliatesHero } from '@/components/sections/affiliates/hero';

export const metadata: Metadata = {
  title: 'Affiliates',
  description:
    'Join the Centrus AI Affiliates Programme and earn rewards by referring businesses to our AI solutions.',
  keywords: 'Centrus AI affiliates, referral programme, AI partnerships, affiliate marketing, tech referrals, enterprise AI affiliates, earn commissions, partner programme',
  openGraph: {
    title: 'Centrus AI Affiliates Programme',
    description: 'Partner with us and earn rewards by referring organisations to our innovative AI solutions for enhanced business intelligence.',
    type: 'website',
    url: 'https://centrus.ai/affiliates',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Affiliates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Our Affiliates Programme | Centrus AI',
    description: 'Become a Centrus AI affiliate partner and earn rewards by connecting businesses with our cutting-edge enterprise AI solutions.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/affiliates',
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
