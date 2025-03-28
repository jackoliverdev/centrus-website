import { Metadata } from 'next';

import { EbookHero } from '@/components/sections/ebook/ebook-hero';
import { EbookFeatures } from '@/components/sections/ebook/ebook-features';
import { EbookForm } from '@/components/sections/ebook/ebook-form';

export const metadata: Metadata = {
  title: "AI: 10 Routes to Success | Free eBook",
  description: "This well-researched and concise guide explores 10 impactful ways to use AI for business.",
  keywords: "AI for business",
  openGraph: {
    title: "AI: 10 Routes to Success | Free eBook",
    description: "This well-researched and concise guide explores 10 impactful ways to use AI for business.",
    type: "website",
    url: "https://centrus.ai/resources/10_routes_business_success",
    siteName: "Centrus AI",
    images: [
      {
        url: "/logo.png",
        width: 901,
        height: 901,
        alt: "Centrus AI Ebook",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI: 10 Routes to Success | Free eBook",
    description: "This well-researched and concise guide explores 10 impactful ways to use AI for business.",
    images: ["/logo.png"],
    creator: "@centrusai",
  },
  alternates: {
    canonical: "https://centrus.ai/resources/10_routes_business_success",
  },
};

export default function EbookGuidePage() {
  return (
    <>
      <EbookHero />
      <EbookFeatures />
      <EbookForm />
    </>
  );
} 