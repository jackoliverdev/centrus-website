'use client';

import { motion, useSpring, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, Sparkles, Bot } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { useCounter } from '@/lib/hooks/use-counter';
import React from 'react';

const SPRING_CONFIG = { stiffness: 100, damping: 30, mass: 1 };

const stats = [
  { value: '24', suffix: '/7', label: 'AI Availability' },
  { value: '100', suffix: '+', label: 'Use Cases Explored' },
  { value: '10', suffix: 'x', label: 'Potential Efficiency Gain' },
];

function StatCounter({ value, suffix = '', delay = 0 }) {
  const { formattedCount, setRef } = useCounter({
    end: parseInt(value),
    duration: 2000,
    delay,
    formatter: num => `${num}${suffix}`,
  });

  return <span ref={setRef}>{formattedCount}</span>;
}

function FloatingIcon({ Icon, delay, x, y }: { Icon: any; delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute hidden lg:block"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...SPRING_CONFIG, delay }}
    >
      <motion.div
        className="rounded-xl border border-primary/20 bg-primary/10 p-3 backdrop-blur-sm"
        animate={{
          y: [-10, 10, -10],
          rotate: [-5, 5, -5],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Icon className="h-6 w-6 text-primary" />
      </motion.div>
    </motion.div>
  );
}

export function ContactHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] items-center overflow-hidden pb-20 pt-20"
    >
      {/* Animated Background Pattern */}
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

      <Container>
        <motion.div
          style={{ opacity, scale, y }}
          className="flex flex-col items-center text-center"
        >
          {/* Icon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={SPRING_CONFIG}
            className="mb-8"
          >
            <div className="relative inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Let's Talk AI Innovation
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_CONFIG, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-x-4 -inset-y-2 rounded-lg bg-gradient-to-r from-primary via-accent to-primary opacity-10 blur-2xl" />
            <h1 className="relative font-heading text-4xl font-bold tracking-tight sm:text-6xl">
              Get in Touch
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Let's Explore AI Together
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_CONFIG, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Ready to discover how AI can transform your business? Let's start the conversation
            and explore the possibilities together.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_CONFIG, delay: 0.3 }}
            className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-3xl font-bold text-primary">
                  <StatCounter value={stat.value} suffix={stat.suffix} delay={index * 100} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Floating Icons */}
      <FloatingIcon Icon={MessageSquare} delay={0.5} x="20%" y="30%" />
      <FloatingIcon Icon={Bot} delay={0.7} x="75%" y="40%" />
    </section>
  );
}
