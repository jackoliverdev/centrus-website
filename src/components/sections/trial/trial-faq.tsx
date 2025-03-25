'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils/helpers';

type MotionDivProps = HTMLMotionProps<'div'> &
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
  };

const MotionDiv: React.FC<MotionDivProps> = props => <motion.div {...props} />;

const faqs = [
  {
    question: "What's included in the free plan?",
    answer:
      'Start with our free plan which includes 50 messages per month, up to 3 team members, and 100MB storage. Access our core AI features and integrations. Upgrade to our premium plans for increased limits.',
  },
  {
    question: 'Do I need a credit card to start?',
    answer:
      'No credit card required. Start using Centrus AI instantly with our free plan - no payment information needed. Upgrade anytime to access increased limits.',
  },
  {
    question: 'How long is the trial period?',
    answer:
      'Our free plan includes 50 messages per month, up to 3 team members, and 100MB of storage. Start using Centrus AI today with no time limit or credit card required.',
  },
  {
    question: 'Can I invite my team members?',
    answer:
      "Yes! Add up to 3 team members during your trial to test all collaboration features and see how Centrus AI enhances your team's workflow.",
  },
];

export function TrialFaq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-8 sm:py-16">
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
              Free Plan FAQ
            </span>
          </div>

          <h2 className="mt-3 sm:mt-4 text-xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-muted-foreground mx-auto max-w-2xl">
            Everything you need to know about getting started with Centrus AI
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
                    className="flex w-full items-center justify-between gap-4 p-3 sm:p-4"
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
                      <div className="text-sm sm:text-base text-muted-foreground text-left">
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
            <Button asChild variant="ghost" className="group text-sm sm:text-base">
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
