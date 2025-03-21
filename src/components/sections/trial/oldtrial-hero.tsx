'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Gift } from 'lucide-react';
import React from 'react';

import { Container } from '@/components/ui/container';
import { useAnimations, useFadeIn } from '@/lib/hooks';
import { useMounted } from '@/lib/hooks';

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

export function TrialHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { variants: staggerVariants } = useAnimations({ threshold: 0.2 });
  const { variants: fadeVariants } = useFadeIn({ delay: 200 });

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
      className="relative flex items-center overflow-visible bg-background pb-16 pt-20"
    >
      <ParticleNetwork />

      <Container className="relative z-10">
        <motion.div
          style={{ opacity, scale, y }}
          className="flex flex-col items-center text-center"
        >
          {/* Animated Rocket Icon */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              y: useTransform(scrollYProgress, [0, 0.5], [0, -1000]),
              scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.5]),
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

              {/* Particle trails */}
              <div className="absolute -bottom-12 left-1/2 w-20 -translate-x-1/2 rotate-45 transform">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 rounded-full bg-gradient-to-r from-primary to-primary/0"
                    initial={{ width: '2px', height: '2px' }}
                    animate={{
                      y: [0, 100],
                      x: Math.random() * 40 - 20,
                      scale: [1, 0],
                      opacity: [0.8, 0],
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: 'easeOut',
                    }}
                    style={{
                      width: Math.random() * 4 + 2 + 'px',
                      height: Math.random() * 4 + 2 + 'px',
                    }}
                  />
                ))}
              </div>

              {/* Additional spark effects */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={`spark-${i}`}
                  className="absolute bottom-0 left-1/2 h-1 w-1 rounded-full bg-primary"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: Math.random() * 60 - 30,
                    y: [0, Math.random() * 40 + 20],
                  }}
                  transition={{
                    duration: 0.6 + Math.random() * 0.4,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={staggerVariants.container}
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
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
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

          {/* Scroll Indicator */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="h-8 w-5 rounded-full border-2 border-muted-foreground/20 p-1"
            >
              <div className="h-1.5 w-1 rounded-full bg-muted-foreground/50" />
            </motion.div>
          </motion.div> */}
        </motion.div>
      </Container>
    </section>
  );
}
