'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { PlayCircle, Presentation } from 'lucide-react';
import React from 'react';

import { Container } from '@/components/ui/container';

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

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const SimpleBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Static background pattern - matching other heroes */}
      <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
    </div>
  );
};

export function DemoHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]); // Changed to negative for upward scroll

  return (
    <section
      ref={containerRef}
      className="relative flex items-center overflow-visible bg-background pb-4 pt-32"
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
        <motion.div
          style={{ opacity, scale, y }}
          className="flex flex-col items-center text-center"
        >
          {/* Icon */}
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 rounded-full bg-primary/20 blur-xl" />
              <div className="relative rounded-2xl bg-primary/10 p-4 backdrop-blur-sm">
                <PlayCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              variants={fadeVariants}
              className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm"
            >
              <Presentation className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                See it in Action
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeVariants}
              className="pb-1 text-4xl font-bold tracking-tight leading-tight md:text-5xl lg:text-6xl"
            >
              See{' '}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Centrus AI
              </span>{' '}
              in Action
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeVariants}
              className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl"
            >
              Book a personalised demo with our team to discover how Centrus AI can transform your
              organisation's knowledge management and boost productivity.
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}