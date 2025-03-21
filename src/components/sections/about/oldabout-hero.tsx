'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Building2, Users, Globe } from 'lucide-react';

import { Container } from '@/components/ui/container';
import React from 'react';
const stats = [
  {
    value: 'Accessible',
    label: 'Innovation',
    icon: Building2,
  },
  {
    value: 'Personal',
    label: 'Partnership',
    icon: Users,
  },
  {
    value: 'Secure',
    label: 'Platform',
    icon: Globe,
  },
];

export function AboutHero() {
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
    <div ref={containerRef} className="relative overflow-hidden bg-background pt-24">
      <Container className="relative z-10">
        <motion.div style={{ opacity, scale, y }} className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-4 text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
          >
            Cutting-Edge AI
            <br />
            Without Barriers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-3xl text-lg text-muted-foreground"
          >
            We're making cutting-edge AI technology accessible and practical for businesses of all sizes.
            Discover how we can transform the way your organisation works.
          </motion.p>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 blur-xl transition-opacity group-hover:opacity-75" />
                <div className="relative rounded-lg border border-border/50 p-6 backdrop-blur-sm">
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <dd className="mt-1 text-3xl font-semibold tracking-tight">{stat.value}</dd>
                  <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* Background Effects */}
      <div className="absolute right-0 top-0 -z-10 -translate-y-12 translate-x-12 transform-gpu blur-3xl">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-primary to-accent opacity-20" />
      </div>

      <div className="absolute -bottom-48 left-0 -z-10 -translate-x-12 translate-y-12 transform-gpu blur-3xl">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-secondary opacity-20" />
      </div>

      {/* Floating Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden h-2 w-2 rounded-full bg-primary/60 md:block"
          style={{
            left: `${25 + i * 25}%`,
            top: `${30 + i * 15}%`,
          }}
          animate={{
            y: [-10, 10],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
}
