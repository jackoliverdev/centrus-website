'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  Activity,
  Factory,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { useCounter } from '@/lib/hooks/use-counter';

const caseStudies = [
  {
    title: 'Leading Insurance Provider',
    description: 'Transformed customer onboarding and claims processing with AI automation',
    metrics: [
      { value: '85', suffix: '%', label: 'Faster Application Processing' },
      { value: '95', suffix: '%', label: 'Data Retrieval Accuracy' },
      { value: '3.5', suffix: 'x', label: 'Customer Service Speed' },
    ],
    industry: 'Insurance',
    Icon: Building2,
    color: 'from-[#3B00ff] to-[#3B00ff]',
    bgGradient: 'from-[#3B00ff]/10 via-[#3B00ff]/5 to-transparent',
    hoverGradient:
      'group-hover:from-[#3B00ff]/20 group-hover:via-[#3B00ff]/10 group-hover:to-transparent',
    iconBackground: 'bg-[#3B00ff]/10',
    iconColor: 'text-[#3B00ff]',
    MetricIcon: DollarSign,
  },
  {
    title: 'Global Events Company',
    description: 'Streamlined event planning and enhanced customer engagement with AI',
    metrics: [
      { value: '70', suffix: '%', label: 'Email Response Rate' },
      { value: '60', suffix: '%', label: 'Time Saved on Planning' },
      { value: '40', suffix: '%', label: 'Supplier Cost Savings' },
    ],
    industry: 'Events Management',
    Icon: Users,
    color: 'from-[#00ff94] to-[#00ff94]',
    bgGradient: 'from-[#00ff94]/10 via-[#00ff94]/5 to-transparent',
    hoverGradient:
      'group-hover:from-[#00ff94]/20 group-hover:via-[#00ff94]/10 group-hover:to-transparent',
    iconBackground: 'bg-[#00ff94]/10',
    iconColor: 'text-[#00ff94]',
    MetricIcon: Clock,
  },
  {
    title: 'Private Healthcare Provider',
    description: 'Enhanced patient care through improved data access and collaboration',
    metrics: [
      { value: '90', suffix: '%', label: 'Information Access Speed' },
      { value: '65', suffix: '%', label: 'Staff Collaboration' },
      { value: '45', suffix: '%', label: 'Operational Efficiency' },
    ],
    industry: 'Healthcare',
    Icon: Activity,
    color: 'from-[#cc00ff] to-[#cc00ff]',
    bgGradient: 'from-[#cc00ff]/10 via-[#cc00ff]/5 to-transparent',
    hoverGradient:
      'group-hover:from-[#cc00ff]/20 group-hover:via-[#cc00ff]/10 group-hover:to-transparent',
    iconBackground: 'bg-[#cc00ff]/10',
    iconColor: 'text-[#cc00ff]',
    MetricIcon: TrendingUp,
  },
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
    end: parseFloat(value),
    duration: 2000,
    delay,
    decimals: value.includes('.') ? 1 : 0,
    formatter: num => `${num}${suffix}`,
  });

  return <span ref={setRef}>{formattedCount}</span>;
}

export function CaseStudiesSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative overflow-hidden ">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle 800px at 50% 50%, rgba(43, 156, 229, 0.08), transparent)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div className="bg-grid-white/10 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <Container className='py-0'>
        <motion.div style={{ opacity, scale }} className="space-y-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative text-center"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-8 rounded-full bg-primary/10 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.15, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <h2 className="relative text-3xl sm:text-4xl font-bold">Success Stories</h2>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-base text-muted-foreground">
              See how leading organizations are transforming their operations with our solutions
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudies.map((study, index) => {
              const Icon = study.Icon;
              const MetricIcon = study.MetricIcon;

              return (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <Card className="group relative h-full border-transparent transition-colors duration-500 hover:border-primary/20">
                    <CardContent className="p-6">
                      {/* Background Gradient */}
                      <div
                        className={`
                        absolute inset-0 bg-gradient-to-br 
                        ${study.bgGradient} ${study.hoverGradient} 
                        rounded-lg transition-all duration-500
                      `}
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="mb-6 flex items-center justify-between">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                            className={`
                              rounded-xl bg-gradient-to-br p-2.5 ${study.color}
                              text-white shadow-lg
                            `}
                          >
                            <Icon className="h-5 w-5" />
                          </motion.div>
                          <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className={`
                              rounded-full px-3 py-1 text-sm font-medium
                              ${study.iconBackground} ${study.iconColor}
                            `}
                          >
                            {study.industry}
                          </motion.div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                          {study.title}
                        </h3>
                        <p className="mb-6 text-sm text-muted-foreground">{study.description}</p>

                        {/* Metrics */}
                        <div className="space-y-4">
                          {study.metrics.map((metric, metricIndex) => (
                            <div key={metric.label} className="flex items-center gap-3">
                              <div className={`rounded-lg p-1.5 ${study.iconBackground}`}>
                                <MetricIcon className={`h-4 w-4 ${study.iconColor}`} />
                              </div>
                              <div className="flex items-baseline gap-1.5">
                                <div className="text-lg font-semibold text-primary">
                                  <StatCounter
                                    value={metric.value}
                                    suffix={metric.suffix}
                                    delay={index * 200 + metricIndex * 100}
                                  />
                                </div>
                                <div className="text-sm text-muted-foreground">{metric.label}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Arrow Indicator */}
                        <div className="absolute bottom-6 right-6">
                          <ArrowUpRight className="h-5 w-5 -translate-x-2 -translate-y-2 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/resources">
                View All Case Studies
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
