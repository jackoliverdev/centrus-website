'use client';

import { motion, useInView, HTMLMotionProps } from 'framer-motion';
import { ArrowRight, Calendar, Zap, RocketIcon } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { DM_Sans } from 'next/font/google';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useCounter } from '@/lib/hooks/use-counter';
import { cn } from '@/lib/utils';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

type MotionDivProps = HTMLMotionProps<'div'> &
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
  };

const MotionDiv: React.FC<MotionDivProps> = props => <motion.div {...props} />;

const stats = [
  { value: '983', suffix: '+', label: 'Hours Saved' },
  { value: '100', suffix: '%', label: 'Customer Satisfaction' },
  { value: '20', suffix: '%', label: 'Efficiency Increase' },
];

function StatCounter({
  value,
  suffix = '',
  delay = 0,
}: {
  value: string;
  suffix?: string;
  delay?: number;
}) {
  const { formattedCount, setRef } = useCounter({
    end: parseInt(value),
    duration: 2000,
    delay,
    formatter: num => `${num}${suffix}`,
  });

  return <span ref={setRef}>{formattedCount}</span>;
}

export function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef as React.RefObject<Element>, {
    once: true,
    margin: '-100px',
  });

  return (
    <section className={cn("relative overflow-hidden py-16", dmSans.className)}>
      {/* Simplified Background Elements - matching other sections */}
      <div className="absolute inset-0 -z-[1]">
        {/* Static grid background - matching other sections */}
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <Container>
        <div ref={containerRef} className="relative">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={cn("relative z-10 mx-auto max-w-3xl text-center", dmSans.className)}
          >
            {/* Badge */}
            <MotionDiv
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className={cn("mb-8 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm", dmSans.className)}
            >
              <Zap className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Transform Your Business with AI
              </span>
            </MotionDiv>

            {/* Main Content */}
            <MotionDiv
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={cn("space-y-4", dmSans.className)}
            >
              <h2 className={cn("text-2xl sm:text-5xl font-bold", dmSans.className)}>
                Delivers Results From Day One
              </h2>
              <p className={cn("sm:text-lg text-sm text-muted-foreground", dmSans.className)}>
                Join industry leaders who are already leveraging our AI solutions to transform their
                business.
              </p>
            </MotionDiv>

            {/* Action Buttons */}
            <MotionDiv
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={cn("mt-10 flex flex-col justify-center gap-4 sm:flex-row", dmSans.className)}
            >
              {/* Demo Button */}
              <Button
                size="lg"
                className={cn("group relative overflow-hidden bg-primary hover:bg-primary/90", dmSans.className)}
                asChild
              >
                <Link href="/demo" className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>Book Demo</span>
                  <MotionDiv
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                </Link>
              </Button>

              {/* Free Trial Button */}
              <Button
                size="lg"
                variant="outline"
                className={cn("group border-primary/20 hover:border-primary/40", dmSans.className)}
                asChild
              >
                <Link href="/free-trial" className="flex items-center gap-2">
                  <RocketIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>Start Free</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </MotionDiv>

            {/* Stats Section */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={cn("mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3", dmSans.className)}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className={cn("text-center", dmSans.className)}>
                  <div className={cn("bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-3xl font-bold text-transparent", dmSans.className)}>
                    <StatCounter value={stat.value} suffix={stat.suffix} delay={index * 100} />
                  </div>
                  <div className={cn("mt-1 text-sm text-muted-foreground", dmSans.className)}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </MotionDiv>
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}
