import { Metadata } from 'next';

import { DemoBooking } from '@/components/sections/demo/demo-booking';
import { DemoFeatures } from '@/components/sections/demo/demo-features';
import { DemoHero } from '@/components/sections/demo/demo-hero';
import { DemoProcess } from '@/components/sections/demo/demo-process';

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    'See Centrus AI in action. Book a personalized demo to discover how we can transform your business operations.',
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
