'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Boxes, Scale, ArrowRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useMounted } from '@/lib/hooks';
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

interface Point {
  x: number;
  y: number;
  size: number;
  velocity: { x: number; y: number };
}

const PARTICLE_COUNT = 20;
const UPDATE_INTERVAL = 1000 / 60;
const MAX_VELOCITY = 0.05;
const CONNECTION_DISTANCE = 15;

const ParticleNetwork = React.memo(() => {
  const [points, setPoints] = React.useState<Point[]>([]);
  const animationRef = React.useRef<number>();
  const lastUpdateRef = React.useRef<number>(0);
  const isMounted = useMounted();

  // Initialize particles
  React.useEffect(() => {
    if (!isMounted) return;

    setPoints(
      Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        velocity: {
          x: (Math.random() - 0.5) * MAX_VELOCITY,
          y: (Math.random() - 0.5) * MAX_VELOCITY,
        },
      }))
    );

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMounted]);

  // Animate particles
  React.useEffect(() => {
    if (!points.length) return;

    const animate = (currentTime: number) => {
      if (currentTime - lastUpdateRef.current < UPDATE_INTERVAL) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = currentTime - lastUpdateRef.current;
      lastUpdateRef.current = currentTime;

      setPoints(prevPoints =>
        prevPoints.map(point => {
          let newX = point.x + point.velocity.x * deltaTime;
          let newY = point.y + point.velocity.y * deltaTime;

          // Bounce handling with damping
          const damping = 0.8;
          if (newX <= 0 || newX >= 100) {
            point.velocity.x *= -damping;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            point.velocity.y *= -damping;
            newY = Math.max(0, Math.min(100, newY));
          }

          return {
            ...point,
            x: newX,
            y: newY,
            velocity: point.velocity,
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [points.length]);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0">
      {/* Background pattern */}
      <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />

      {/* Network animation */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="network-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(43, 156, 229, 0.3)" />
            <stop offset="100%" stopColor="rgba(43, 156, 229, 0)" />
          </linearGradient>
        </defs>
        <g>
          {points.map((point, i) => (
            <g key={i}>
              <circle
                cx={`${point.x}%`}
                cy={`${point.y}%`}
                r={point.size}
                fill="rgba(43, 156, 229, 0.4)"
              />
              {points.slice(i + 1).map((nextPoint, j) => {
                const distance = Math.hypot(nextPoint.x - point.x, nextPoint.y - point.y);
                if (distance < CONNECTION_DISTANCE) {
                  return (
                    <line
                      key={`${i}-${j}`}
                      x1={`${point.x}%`}
                      y1={`${point.y}%`}
                      x2={`${nextPoint.x}%`}
                      y2={`${nextPoint.y}%`}
                      stroke="url(#network-gradient)"
                      strokeWidth="0.5"
                      opacity={0.3 * (1 - distance / CONNECTION_DISTANCE)}
                    />
                  );
                }
                return null;
              })}
            </g>
          ))}
        </g>
      </svg>

      {/* Animated gradient overlay */}
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
    </div>
  );
});

ParticleNetwork.displayName = 'ParticleNetwork';

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
      <ParticleNetwork />

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
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
          >
            Documentation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground"
          >
            Everything you need to build and scale with Centrus AI. From quick starts to detailed
            guides, find all the resources you need.
          </motion.p>

          {/* Quick Links - Modified to handle different actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
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

      {/* Floating Dots */}
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
