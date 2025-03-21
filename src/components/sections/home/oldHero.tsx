'use client';

import { motion, useScroll, useTransform, HTMLMotionProps } from 'framer-motion';
import {
  BrainCircuit,
  MessagesSquare,
  Database,
  LineChart,
  Bot,
  NetworkIcon,
  Sparkles,
  RocketIcon,
  ShieldCheck,
  Mail,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSpring } from 'framer-motion';
import { DM_Sans } from 'next/font/google';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useSequentialAnimations } from '@/lib/hooks/use-deferred-animations';
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion';
import { useMountContext } from '@/providers/mount-provider';

interface Point {
  x: number;
  y: number;
  size: number;
  velocity: { x: number; y: number };
}

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type MotionDivProps = HTMLMotionProps<'div'> & DivProps;
const MotionDiv: React.FC<MotionDivProps> = props => <motion.div {...props} />;

const PARTICLE_COUNT = 20;
const UPDATE_INTERVAL = 1000 / 60; // 60 FPS
const MAX_VELOCITY = 0.05;
const CONNECTION_DISTANCE = 15;

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const ParticleNetwork = React.memo(() => {
  const [points, setPoints] = React.useState<Point[]>([]);
  const animationRef = React.useRef<number>();
  const lastUpdateRef = React.useRef<number>(0);
  const { shouldAnimate } = useMountContext();

  // Initialize particles
  React.useEffect(() => {
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
  }, []);

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

          const damping = 0.8;
          if (newX <= 0 || newX >= 100) {
            point.velocity.x *= -damping;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            point.velocity.y *= -damping;
            newY = Math.max(0, Math.min(100, newY));
          }

          return { ...point, x: newX, y: newY };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [points.length]);

  return (
    <div className="absolute inset-0 -z-[1]">
      <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <svg className="absolute inset-0 h-full w-full mix-blend-screen">
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

      {shouldAnimate && (
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{
            background:
              'radial-gradient(circle 800px at 50% 50%, rgba(43, 156, 229, 0.15), transparent)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </div>
  );
});

ParticleNetwork.displayName = 'ParticleNetwork';

interface FloatingIconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string; // Ensure className is optional and a string
  index?: number; // Optional index
}
const FloatingIcon: React.FC<FloatingIconProps> = React.memo(({ Icon, className, index = 0 }) => {
  const { shouldAnimate } = useSequentialAnimations(8, 200);

  return (
    <MotionDiv
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <MotionDiv
        className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/10 bg-primary/20 backdrop-blur-sm"
        animate={
          shouldAnimate
            ? {
                y: [0, -5, 0],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Icon className="h-6 w-6 text-primary" />
      </MotionDiv>
    </MotionDiv>
  );
});

FloatingIcon.displayName = 'FloatingIcon';

const AppPreview = React.memo(() => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const { shouldAnimate } = useMountContext();

  return (
    <MotionDiv
      className="relative w-full"
      style={
        shouldAnimate
          ? {
              y,
              opacity: opacity as any,
            }
          : {}
      }
    >
      <div className="relative h-[500px] w-full ">
        <Image
          src="/images/hero-illustration.svg"
          alt="Centrus AI Platform"
          fill
          className="object-contain"
          priority
        />

        <div className="pointer-events-none absolute inset-0 z-30">
          {[
            {
              icon: RocketIcon,
              text: 'Instant Data Retrieval',
              position: 'top-4 right-32',
              index: 0,
            },
            {
              icon: BrainCircuit,
              text: 'AI-Powered Insights',
              position: 'top-26 -left-2',
              index: 1,
            },
            {
              icon: ShieldCheck,
              text: 'Enterprise Security',
              position: 'bottom-8 left-20',
              index: 2,
            },
          ].map(({ icon: Icon, text, position, index }) => (
            <MotionDiv
              key={text}
              initial={{ opacity: 0, x: -10 }}
              animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2 }}
              className={`absolute ${position}`}
            >
              <div className="rounded-xl border border-primary/10 bg-background/5 p-3 shadow-lg backdrop-blur-sm ">
                <div className="flex items-center space-x-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground/80">{text}</span>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
});

AppPreview.displayName = 'AppPreview';

const floatingIcons = [
  {
    Icon: BrainCircuit,
    position: 'right-4 -top-0',
    index: 0,
  },
  {
    Icon: MessagesSquare,
    position: '-left-2 top-20',
    index: 1,
  },
  {
    Icon: Database,
    position: 'right-28 top-40',
    index: 2,
  },
  {
    Icon: Bot,
    position: '-left-8 top-64',
    index: 3,
  },
  {
    Icon: LineChart,
    position: 'right-12 bottom-2',
    index: 4,
  },
];

export function HeroSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { shouldAnimate } = useMountContext();

  // Add these scroll animations
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
      <ParticleNetwork />

      <Container>
        {/* Mobile Layout - Add motion styles */}
        <motion.div 
          className="lg:hidden"
          style={{ opacity, scale, y }}
        >
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
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-4 rounded-full bg-primary/20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="relative rounded-2xl bg-primary/10 p-4 backdrop-blur-sm">
                <Bot className="h-8 w-8 text-primary" />
              </div>
            </div>
          </motion.div>

          <motion.div className="text-center">
            <motion.div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm">
              <BrainCircuit className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Intelligent Enterprise AI
              </span>
            </motion.div>

            <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${dmSans.className}`}>
              Your AI-Powered
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Business Assistant
              </span>
            </h1>

            <p className={`mt-6 text-lg text-muted-foreground ${dmSans.className}`}>
              Transform your company knowledge access with conversational AI. Instantly retrieve,
              analyse, and create work-related information.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <Button 
                size="lg" 
                className="group relative overflow-hidden text-white" 
                asChild
              >
                <Link href="/free-trial">
                  Start Free Trial
                  <RocketIcon className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link href="/demo">
                  Book Demo
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop Layout - Add motion styles */}
        <motion.div 
          className="hidden lg:grid lg:grid-cols-2 lg:gap-16"
          style={{ opacity, scale, y }}
        >
          <motion.div className="relative z-10">
            <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${dmSans.className}`}>
              Your AI-Powered
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Business Assistant
              </span>
            </h1>

            <motion.p className={`mt-6 text-xl text-muted-foreground ${dmSans.className}`}>
              Transform your company knowledge access with conversational AI. Instantly retrieve,
              analyse, and create work-related information.
            </motion.p>

            <motion.div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="group relative overflow-hidden text-white" 
                asChild
              >
                <Link href="/free-trial">
                  Start Free Trial
                  <RocketIcon className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
                    animate={shouldAnimate ? { x: ['-100%', '100%'] } : {}}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link href="/demo">
                  Book Demo
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="relative hidden lg:block">
            {floatingIcons.map(icon => (
              <FloatingIcon
                key={icon.position}
                Icon={icon.Icon}
                className={icon.position}
                index={icon.index}
              />
            ))}
            <AppPreview />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
