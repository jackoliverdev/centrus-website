'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Gift } from 'lucide-react';
import React from 'react';

import { Container } from '@/components/ui/container';

// Define animation variants directly to fix TypeScript errors
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

export function TrialHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]); // Changed to negative for upward scroll
  const rocketY = useTransform(scrollYProgress, [0, 0.5], [0, -1000]);
  const rocketScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center overflow-visible bg-background pb-16 pt-20"
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
          {/* Animated Rocket Icon - keeping this animation since it's a key visual element */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              y: rocketY,
              scale: rocketScale,
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.5,
            }}
            className="relative mb-8"
          >
            <div className="relative inline-block">
              {/* Main rocket glow */}
              <motion.div
                className="absolute -inset-8 rounded-full bg-primary/30 blur-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Engine glow effect */}
              <motion.div
                className="absolute -bottom-6 left-1/2 h-12 w-8 -translate-x-1/2 bg-primary/40 blur-xl"
                animate={{
                  height: ['3rem', '4rem', '3rem'],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Rocket container */}
              <motion.div
                className="relative rounded-2xl bg-primary/10 p-4 backdrop-blur-sm"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div className="-rotate-45 transform">
                  <Rocket className="h-10 w-10 text-primary" />
                </motion.div>
              </motion.div>

              {/* Simplified trail effect (limited to just a few elements) */}
              <motion.div
                className="absolute -bottom-8 left-1/2 h-8 w-6 -translate-x-1/2 rounded-full bg-gradient-to-t from-primary/50 to-transparent blur-md"
                animate={{
                  height: ['2rem', '2.5rem', '2rem'],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
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
              <Gift className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Start Free Trial
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeVariants}
              className="pb-1 text-4xl font-bold tracking-tight leading-tight md:text-5xl lg:text-6xl"
            >
              Start Your Journey with
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Centrus AI
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeVariants}
              className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl"
            >
              Experience the full power of our AI platform with a completely free trial. No credit card
              required. Get immediate access to all core features.
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}