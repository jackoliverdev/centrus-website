'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Book, Brain, Rocket } from 'lucide-react';
import React from 'react';

import { Container } from '@/components/ui/container';

const features = [
  {
    icon: Book,
    label: 'Curated Collection',
    value: '100+ Prompts',
  },
  {
    icon: Brain,
    label: 'Role-specific',
    value: '8 Departments',
  },
  {
    icon: Rocket,
    label: 'Use Cases',
    value: '25+ Categories',
  },
];

// Define animation variants directly to fix TypeScript errors
const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.5
    }
  })
};

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.5
    }
  })
};

const SimpleBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Static background pattern - matching other heroes */}
      <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
    </div>
  );
};

export function PromptLibraryHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center overflow-visible bg-background pt-20"
    >
      <SimpleBackground />

      {/* Background Effects */}
      <div className="absolute right-0 top-0 -z-10 -translate-y-12 translate-x-12 transform-gpu blur-3xl">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-primary to-accent opacity-20" />
      </div>

      <div className="absolute -bottom-48 left-0 -z-10 -translate-x-12 translate-y-12 transform-gpu blur-3xl">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-secondary opacity-20" />
      </div>

      <Container className="relative z-10">
        <motion.div style={{ opacity, scale, y }} className="text-center">
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 animate-pulse rounded-full bg-primary/20 blur-xl" />
              <div className="relative rounded-full border border-primary/20 bg-primary/10 p-4 backdrop-blur-sm">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            custom={0.2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent pb-1 leading-tight sm:text-6xl"
          >
            AI Prompt Library
          </motion.h1>

          <motion.p
            custom={0.3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground"
          >
            Explore our curated collection of AI prompts designed to supercharge your workflow. Find
            role-specific examples and best practices for your use case.
          </motion.p>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                custom={0.5 + index * 0.1}
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                className="group relative"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 blur-xl transition-opacity group-hover:opacity-75" />
                <div className="relative rounded-lg border border-border/50 p-6 backdrop-blur-sm">
                  <feature.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <dt className="text-sm font-medium text-muted-foreground">{feature.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight">{feature.value}</dd>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}