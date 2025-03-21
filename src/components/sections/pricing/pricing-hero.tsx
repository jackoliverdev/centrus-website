'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { CreditCard, Receipt, RocketIcon, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { DM_Sans } from 'next/font/google';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

// Add font configuration
const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

// Define animation variants directly to avoid type errors
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function PricingHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // Scroll-based animations
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
      className="relative flex min-h-[90vh] items-center overflow-hidden pb-16 pt-20 md:pb-32"
    >
      {/* Simple static background without animations */}
      <div className="absolute inset-0 -z-[1]">
        {/* Static background pattern */}
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <Container>
        <motion.div
          style={{ opacity, scale, y }}
          className="relative flex flex-col items-center text-center"
        >
          {/* Icon - simplified without pulsing animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            className="mb-8"
          >
            <div className="relative inline-block">
              {/* Remove the glow effect completely */}
              <div className="relative rounded-2xl bg-primary/20 p-4">
                <CreditCard className="h-8 w-8 text-primary" />
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
              variants={itemVariants}
              className="mb-6 inline-flex items-center rounded-full bg-primary/20 px-4 py-1 text-sm border border-primary/30"
            >
              <Receipt className="mr-2 h-4 w-4 text-primary" />
              <span className="text-primary font-medium">
                Simple, Transparent Pricing
              </span>
            </motion.div>

            {/* Heading with DM Sans */}
            <motion.h1
              variants={itemVariants}
              className={`text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl ${dmSans.className}`}
            >
              Choose the Perfect Plan for Your{' '}
              <span className="text-primary">
                Business Growth
              </span>
            </motion.h1>

            {/* Description with DM Sans */}
            <motion.p
              variants={itemVariants}
              className={`mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl ${dmSans.className}`}
            >
              Flexible pricing options designed to scale with your needs. All plans include core
              features with advanced capabilities as you grow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden text-white" 
                asChild
              >
                <Link href="/free-trial">
                  Start Free Trial
                  <RocketIcon className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group" 
                asChild
              >
                <Link href="/demo">
                  Book Demo
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}