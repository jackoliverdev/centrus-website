import { Metadata } from 'next';

import { DemoBooking } from '@/components/sections/demo/demo-booking';
import { DemoFeatures } from '@/components/sections/demo/demo-features';
import { DemoHero } from '@/components/sections/demo/demo-hero';
import { DemoProcess } from '@/components/sections/demo/demo-process';

export const metadata: Metadata = {
  title: 'Book a Demo | Centrus AI',
  description:
    'See Centrus AI in action. Book a personalized demo to discover how we can transform your business operations.',
};

export default function DemoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(white,transparent_85%)]" />

        {/* Top gradient blob */}
        <div className="absolute -top-24 right-0 transform-gpu blur-3xl">
          <div
            className="aspect-[1100/600] w-[68.75rem] bg-gradient-to-l from-primary/20 to-primary/5 opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        {/* Bottom gradient blob */}
        <div className="absolute bottom-0 left-0 transform-gpu blur-3xl">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/10 to-accent/10 opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

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
