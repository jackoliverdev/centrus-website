'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Brain, Users, LineChart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { useAnimations } from '@/lib/hooks';
import { useCounter } from '@/lib/hooks/use-counter';

const solutions = [
  {
    title: 'Knowledge Management',
    description: 'Transform how your organization stores, accesses, and utilizes information.',
    icon: Brain,
    bgGradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
    iconGradient: 'from-blue-500 to-blue-600',
    borderGradient: 'from-blue-500/50 via-blue-500/10 to-transparent',
    stats: [
      { value: '65', suffix: '%', label: 'Faster Information Retrieval' },
      { value: '40', suffix: '%', label: 'Reduction in Support Queries' },
    ],
  },
  {
    title: 'Employee Support',
    description: 'Provide instant, accurate support to your team around the clock.',
    icon: Users,
    bgGradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
    iconGradient: 'from-purple-500 to-purple-600',
    borderGradient: 'from-purple-500/50 via-purple-500/10 to-transparent',
    stats: [
      { value: '24', suffix: '/7', label: 'AI Support Availability' },
      { value: '92', suffix: '%', label: 'Employee Satisfaction' },
    ],
  },
  {
    title: 'Business Intelligence',
    description: 'Turn your data into actionable insights with AI-powered analytics.',
    icon: LineChart,
    bgGradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    iconGradient: 'from-emerald-500 to-emerald-600',
    borderGradient: 'from-emerald-500/50 via-emerald-500/10 to-transparent',
    stats: [
      { value: '85', suffix: '%', label: 'Faster Decision Making' },
      { value: '3', suffix: 'x', label: 'ROI Improvement' },
    ],
  },
] as const;

function StatCounter({
  value,
  suffix = '',
  delay,
}: {
  value: string;
  suffix?: string;
  delay: number;
}) {
  const { formattedCount, setRef } = useCounter({
    end: parseInt(value),
    duration: 2000,
    delay,
    formatter: num => `${num}${suffix}`,
  });

  return <span ref={setRef}>{formattedCount}</span>;
}

interface SolutionCardProps {
  solution: (typeof solutions)[0];
  index: number;
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      mass: 0.8,
    },
  },
};

function SolutionCard({ solution, index }: SolutionCardProps) {
  const Icon = solution.icon;

  return (
    <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="group relative ">
      <div
        className={`
        relative overflow-hidden rounded-2xl 
        before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b 
        before:p-[2px] before:${solution.borderGradient}
      `}
      >
        <Card
          className={`
          relative h-full md:h-[370px] lg:h-[420px] xl:h-[400px]  rounded-2xl bg-gradient-to-b
          from-background/80 to-background/40 p-8
          shadow-2xl
          backdrop-blur-xl shadow-${solution.iconGradient.split(' ')[1]}/10
        `}
        >
          {/* Background Gradient */}
          <div
            className={`
            absolute inset-0 bg-gradient-to-br ${solution.bgGradient}
            opacity-0 transition-opacity duration-500 group-hover:opacity-100
          `}
          />

          <div className="relative z-10 flex h-full flex-col">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className={`
                rounded-xl bg-gradient-to-br ${solution.iconGradient} 
                w-fit p-3 text-white shadow-lg 
                transition-transform duration-300 group-hover:scale-110
                group-hover:shadow-xl
              `}
            >
              <Icon className="h-6 w-6" />
            </motion.div>

            {/* Content */}
            <div className="flex flex-1 flex-col pt-6">
              <h3 className="font-heading font-semibold text-foreground transition-colors group-hover:text-primary md:text-xl">
                {solution.title}
              </h3>

              <p className="mt-2 md:flex-1  text-sm text-muted-foreground md:text-base">
                {solution.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 py-4">
                {solution.stats.map((stat, statIndex) => (
                  <motion.div key={stat.label} whileHover={{ scale: 1.05 }}>
                    <div className="text-2xl font-bold text-primary">
                      <StatCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        delay={index * 200 + statIndex * 100}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Learn More Link */}
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 text-primary">
                <Link
                  href={`/solutions#${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group/link inline-flex items-center text-sm font-medium hover:underline"
                >
                  Learn more
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

export function SolutionsCard() {
  return (
    <section className="relative ">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 0.1,
              }}
              className="flex justify-center "
            >
              <div className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                <Sparkles className="mr-2 h-4 w-4" />
                Core Solutions
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 0.2,
              }}
            >
              <h2 className="text-2xl font-bold sm:text-4xl">Comprehensive AI Solutions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
                Discover how our AI solutions can transform different aspects of your business
                operations and empower your team.
              </p>
            </motion.div>
          </div>

          {/* Solutions Grid */}
          <motion.div
            variants={containerVariants}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {solutions.map((solution, index) => (
              <SolutionCard key={solution.title} solution={solution} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
