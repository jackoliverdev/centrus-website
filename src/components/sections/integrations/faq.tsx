'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { DM_Sans } from 'next/font/google';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils/helpers';

type MotionDivProps = HTMLMotionProps<'div'> &
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
  };

const MotionDiv: React.FC<MotionDivProps> = props => <motion.div {...props} />;

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const faqs = [
  {
    question: 'How long does it take to set up an integration?',
    answer:
      "Most pre-built integrations can be set up in minutes. For Google Drive and Microsoft Teams, you'll simply need to authorise access and select which content to sync. Custom integrations using our API may take longer depending on your requirements.",
  },
  {
    question: 'Is my data secure when using integrations?',
    answer:
      'Yes, security is our top priority. All data transfers are encrypted, and we maintain strict access controls. We never store your login credentials, and you can revoke access to any integration at any time.',
  },
  {
    question: 'Can I use multiple integrations at once?',
    answer:
      'Absolutely! You can connect as many integrations as you need. Centrus AI will seamlessly combine data from all your connected sources while maintaining appropriate access controls and data separation.',
  },
  {
    question: 'Do you offer enterprise-specific integrations?',
    answer:
      'Yes, our Enterprise plan includes custom integration development and deployment options. Contact our sales team to discuss your specific integration needs and requirements.',
  },
];

export function IntegrationsFaq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="relative overflow-hidden pt-0 pb-8 sm:pt-0 sm:pb-16">
      {/* Simplified Background Elements - matching other sections */}
      <div className="absolute inset-0 -z-[1]">
        {/* Static grid background - matching other sections */}
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <Container>
        <MotionDiv
          initial={{ opacity: 1, y: 20, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 sm:mb-16 text-center"
        >
          <div className="mb-3 sm:mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 sm:px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Integration Support
            </span>
          </div>

          <h2 className={cn("mt-3 sm:mt-4 text-xl font-bold sm:text-4xl", dmSans.className)}>
            Frequently Asked Questions
          </h2>
          <p className={cn("mt-2 sm:mt-4 text-sm sm:text-lg text-muted-foreground mx-auto max-w-2xl", dmSans.className)}>
            Everything you need to know about our integrations and how they work.
          </p>
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="space-y-2 sm:space-y-3">
            {faqs.map((faq, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1,
                }}
              >
                <div
                  className={cn(
                    'group overflow-hidden rounded-lg',
                    'bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-xl',
                    'border border-primary/5',
                    'hover:border-primary/20',
                    openIndex === index && 'border-primary/20'
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className={cn("flex w-full items-center justify-between gap-4 p-3 sm:p-4", dmSans.className)}
                  >
                    <span
                      className={cn(
                        'text-sm sm:text-base font-medium transition-colors text-left',
                        openIndex === index ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary transition-transform duration-200',
                        openIndex === index && 'rotate-180'
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-200 ease-in-out',
                      openIndex === index ? 'grid-rows-[1fr] pb-3 sm:pb-4' : 'grid-rows-[0fr]'
                    )}
                  >
                    <div className="overflow-hidden px-3 sm:px-4">
                      <div className={cn("text-sm sm:text-base text-muted-foreground text-left", dmSans.className)}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* Support CTA */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <Button asChild variant="ghost" className={cn("group text-sm sm:text-base", dmSans.className)}>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-primary hover:text-primary/90"
              >
                More questions? Contact support
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </MotionDiv>
        </MotionDiv>
      </Container>
    </section>
  );
}
