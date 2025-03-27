import { Metadata } from 'next';

import { EbookHero } from '@/components/sections/ebook/ebook-hero';
import { EbookFeatures } from '@/components/sections/ebook/ebook-features';
import { EbookForm } from '@/components/sections/ebook/ebook-form';

export const metadata: Metadata = {
  title: "AI: 10 Routes to Business Success",
  description: "Download our free guide for managers looking to transform their business with AI. 10 proven strategies for successful AI implementation.",
  keywords: "AI business guide,",
  openGraph: {
    title: "AI: 10 Routes to Business Success",
    description: "Download our free guide for managers looking to transform their business with AI. 10 proven strategies for successful AI implementation.",
    type: "website",
    url: "https://centrus.ai/ebook-guide",
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
    title: "AI: 10 Routes to Business Success",
    description: "Download our free guide for managers looking to transform their business with AI. 10 proven strategies for successful AI implementation.",
    images: ["/logo.png"],
    creator: "@centrusai",
  },
  alternates: {
    canonical: "https://centrus.ai/ebook-guide",
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