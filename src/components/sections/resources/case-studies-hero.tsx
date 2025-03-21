'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, ArrowUpRight, Building2, BarChart3, Lightbulb } from 'lucide-react';
import React from 'react';

import { Container } from '@/components/ui/container';
import { useMounted } from '@/lib/hooks';

const stats = [
  { icon: Building2, label: 'Customers', value: '500+' },
  { icon: BarChart3, label: 'Data processed', value: '2B+' },
  { icon: Lightbulb, label: 'Efficiency gain', value: '60%' },
  { icon: ArrowUpRight, label: 'ROI average', value: '300%' },
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

export function CaseStudiesHero() {
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
      <ParticleNetwork />

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
                <Users className="h-8 w-8 text-primary" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
          >
            Customer Success Stories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground"
          >
            Discover how leading organizations are transforming their operations and achieving
            remarkable results with Centrus AI.
          </motion.p>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
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
                  <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight">{stat.value}</dd>
                </div>
              </motion.div>
            ))}
          </div>
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
