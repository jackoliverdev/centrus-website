import { Metadata } from 'next';

import { TrialFaq } from '@/components/sections/trial/trial-faq';
import { TrialFeatures } from '@/components/sections/trial/trial-features';
import { TrialRedirect } from '@/components/sections/trial/trial-redirect';
import { TrialHero } from '@/components/sections/trial/trial-hero';

export const metadata: Metadata = {
  title: 'Start Your Journey with Centrus AI | Free Trial',
  description:
    'Experience the full power of Centrus AI with a free trial. Get free immediate access to core features today.',
  keywords: 'AI free trial',
  openGraph: {
    title: 'Start Your Journey with Centrus AI | Free Trial',
    description: 'Experience the full power of Centrus AI with a free trial. Get free immediate access to core features today.',
    type: 'website',
    url: 'https://centrus.ai/free-trial',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Free Trial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Try Enterprise AI Risk-Free',
    description: 'Experience the full power of Centrus AI with a free trial. Get free immediate access to core features today.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/free-trial',
  },
};

export default function FreeTrialPage() {
  return (
    <main className="flex min-h-screen overflow-hidden flex-col bg-background">
      {/* Hero Section */}
      <TrialHero />

      {/* Trial Form Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <TrialRedirect />
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary/30 to-primary/10" />
        </div>
      </section>

      {/* Features Section */}
      <TrialFeatures />

      

      {/* FAQ Section */}
      <TrialFaq />
    </main>
  );
}
