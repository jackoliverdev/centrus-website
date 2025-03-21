'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Boxes, Scale, ArrowRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { docs } from '@/content/docs';

const features = [
  { 
    icon: BookOpen, 
    label: 'Getting Started', 
    action: () => {
      // Find Quick Start guide doc
      const quickStartDoc = docs.find(doc => doc.id === 'quick-start');
      if (quickStartDoc) {
        // Update the selected doc
        window.dispatchEvent(new CustomEvent('selectDoc', { detail: quickStartDoc }));
        // Smooth scroll after a brief delay to allow for doc change
        setTimeout(() => {
          document.getElementById('docs-content')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  },
  { 
    icon: Boxes, 
    label: 'Integration Guides',
    action: () => {
      // Find Google Drive integration doc
      const googleDriveDoc = docs.find(doc => doc.id === 'google-drive-integration');
      if (googleDriveDoc) {
        window.dispatchEvent(new CustomEvent('selectDoc', { detail: googleDriveDoc }));
        setTimeout(() => {
          document.getElementById('docs-content')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  },
  { 
    icon: Scale, 
    label: 'Legal Docs', 
    href: '/legal/privacy-policy' 
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

const SimpleBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Static background pattern - matching other heroes */}
      <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
    </div>
  );
};

export function DocsHero() {
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

      <Container>
        <motion.div style={{ opacity, scale, y }} className="relative z-10 text-center">
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 animate-pulse rounded-full bg-primary/20 blur-xl" />
              <div className="relative rounded-full border border-primary/20 bg-primary/10 p-4 backdrop-blur-sm">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            custom={0.2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text pb-1 leading-tight text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
          >
            Documentation
          </motion.h1>

          <motion.p
            custom={0.3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground"
          >
            Everything you need to build and scale with Centrus AI. From quick starts to detailed
            guides, find all the resources you need.
          </motion.p>

          {/* Quick Links - Modified to handle different actions */}
          <motion.div
            custom={0.5}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {features.map((feature, index) => (
              <Button
                key={feature.label}
                variant="outline"
                className="border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                onClick={feature.action}
                asChild={!!feature.href}
              >
                {feature.href ? (
                  <Link href={feature.href}>
                    <feature.icon className="mr-2 h-4 w-4" />
                    {feature.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                ) : (
                  <>
                    <feature.icon className="mr-2 h-4 w-4" />
                    {feature.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}