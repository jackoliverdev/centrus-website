import { Metadata } from 'next';

import { ContactFaq } from '@/components/sections/contact/contact-faq';
import { ContactForm } from '@/components/sections/contact/contact-form';
import { ContactHero } from '@/components/sections/contact/contact-hero';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with our team. We can help you transform your business with AI.',
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Hero Section */}
      <ContactHero />

      {/* Main Content */}
      <div className="relative">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Form Section */}
            <ContactForm />

            {/* FAQ Section - without the divider line */}
            <div className="relative mt-16">
              <ContactFaq />
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
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
    </div>
  );
}
