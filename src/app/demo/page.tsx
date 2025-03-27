import { Metadata } from 'next';

import { DemoBooking } from '@/components/sections/demo/demo-booking';
import { DemoFeatures } from '@/components/sections/demo/demo-features';
import { DemoHero } from '@/components/sections/demo/demo-hero';
import { DemoProcess } from '@/components/sections/demo/demo-process';

export const metadata: Metadata = {
  title: 'See Centrus AI in Action | Book a Demo',
  description:
    'Book a tailored demo experience and discover how Centrus AI can transform your team\'s knowledge management and productivity.',
  keywords: 'AI demo',
  openGraph: {
    title: 'See Centrus AI in Action | Book a Demo',
    description: 'Book a tailored demo experience and discover how Centrus AI can transform your team\'s knowledge management and productivity. See Centrus AI in action.',
    type: 'website',
    url: 'https://centrus.ai/demo',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Demo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'See Your Business Knowledge Transformed',
    description: 'Schedule a guided demonstration of how Centrus AI can transform your organisation\'s knowledge management and workflow efficiency.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/demo',
  },
};

export default function DemoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">

      {/* Main Content */}
      <div className="relative">
        {/* Hero */}
        <DemoHero />

        {/* Top Section: Form & Process */}
        <section className="relative pt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Left Column - Booking Form */}
              <div className="relative lg:sticky lg:top-8 lg:h-fit">
                <DemoBooking />
              </div>

              {/* Right Column - Demo Process */}
              <div>
                <DemoProcess />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <DemoFeatures />
      </div>
    </div>
  );
}
