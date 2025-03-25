import { Metadata } from 'next';

import { TrialFaq } from '@/components/sections/trial/trial-faq';
import { TrialFeatures } from '@/components/sections/trial/trial-features';
import { TrialRedirect } from '@/components/sections/trial/trial-redirect';
import { TrialHero } from '@/components/sections/trial/trial-hero';

export const metadata: Metadata = {
  title: 'Free Trial',
  description:
    'Start your free trial of Centrus AI. No credit card required. Experience the power of AI-driven knowledge management for your organisation.',
  keywords: 'free AI trial, no credit card, enterprise AI demo, trial period, test drive, AI software trial, knowledge management trial, product evaluation',
  openGraph: {
    title: 'Free Trial | Centrus AI',
    description: 'Start your free trial of Centrus AI with no credit card required. Experience how our AI solution can optimise your organisation\'s knowledge management.',
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
    title: 'Start Your Free AI Trial | Centrus AI',
    description: 'Try Centrus AI free with no obligation or credit card. See how our solution can transform your business\'s information accessibility and workflow.',
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
