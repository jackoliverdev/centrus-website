'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, NetworkIcon, ArrowDown, Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { DM_Sans } from 'next/font/google';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

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

export function EbookHero() {
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
      className="relative flex min-h-[90vh] items-center overflow-hidden pb-8 pt-20 md:pb-16"
    >
      {/* Simple background grid only - no animations */}
      <div className="absolute inset-0 -z-[1]">
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <Container>
        <motion.div
          style={{ opacity, scale, y }}
          className="relative flex flex-col items-center text-center"
        >
          {/* Icon */}
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
              <div className="relative rounded-2xl bg-primary/20 p-4">
                <BookOpen className="h-8 w-8 text-primary" />
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
              className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm"
            >
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Free Download - Exclusive Guide
              </span>
            </motion.div>

            {/* Heading with DM Sans */}
            <motion.h1
              variants={itemVariants}
              className={`text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl ${dmSans.className}`}
            >
              AI: 10 Routes to{' '}
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Business Success
              </span>
            </motion.h1>

            {/* Description with DM Sans */}
            <motion.p
              variants={itemVariants}
              className={`mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl ${dmSans.className}`}
            >
              The essential manager's guide to deploying AI in your business. Download our comprehensive ebook 
              to discover practical strategies for implementing AI solutions that deliver real results.
            </motion.p>

            {/* Button positioning */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden text-white" 
                onClick={() => {
                  const formElement = document.getElementById('download-form');
                  if (formElement) {
                    const yOffset = -window.innerHeight / 4; // Position form 1/4 from the top
                    const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    
                    window.scrollTo({
                      top: y,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Download Free Guide
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
} 