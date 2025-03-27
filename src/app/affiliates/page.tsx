import { Metadata } from 'next';
import { AffiliatesForm } from '@/components/sections/affiliates/form';
import { AffiliatesHero } from '@/components/sections/affiliates/hero';

export const metadata: Metadata = {
  title: 'Join our affiliate program | AI Affiliates',
  description:
    'Partner with Centrus AI and earn competitive commissions while helping businesses transform their operations with cutting-edge AI solutions.',
  keywords: 'AI affiliates',
  openGraph: {
    title: 'Join our affiliate program | AI Affiliates',
    description: 'Partner with Centrus AI and earn competitive commissions while helping businesses transform their operations with cutting-edge AI solutions.',
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
    title: 'Join Our Affiliates Programme',
    description: 'Partner with Centrus AI and earn competitive commissions while helping businesses transform their operations with cutting-edge AI solutions.',
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
