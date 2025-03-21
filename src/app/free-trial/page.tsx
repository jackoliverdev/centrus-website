import { Metadata } from 'next';

import { TrialFaq } from '@/components/sections/trial/trial-faq';
import { TrialFeatures } from '@/components/sections/trial/trial-features';
import { TrialRedirect } from '@/components/sections/trial/trial-redirect';
import { TrialHero } from '@/components/sections/trial/trial-hero';

export const metadata: Metadata = {
  title: 'Free Trial | Centrus AI',
  description:
    'Start your free trial of Centrus AI. No credit card required. Experience the power of AI-driven knowledge management.',
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
