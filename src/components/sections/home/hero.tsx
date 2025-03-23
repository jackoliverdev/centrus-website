'use client';

import { motion, useScroll, useTransform, HTMLMotionProps } from 'framer-motion';
import {
  BrainCircuit,
  MessagesSquare,
  Database,
  LineChart,
  Bot,
  RocketIcon,
  ShieldCheck,
  Mail,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DM_Sans } from 'next/font/google';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useSequentialAnimations } from '@/lib/hooks/use-deferred-animations';
import { useMountContext } from '@/providers/mount-provider';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type MotionDivProps = HTMLMotionProps<'div'> & DivProps;
const MotionDiv: React.FC<MotionDivProps> = props => <motion.div {...props} />;

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

// Simplified background with no particles or gradients - matching solutions-hero
const SimpleBackground = React.memo(() => {
  return (
    <div className="absolute inset-0 -z-[1]">
      {/* Static grid background - matching solutions hero */}
      <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
    </div>
  );
});

SimpleBackground.displayName = 'SimpleBackground';

interface FloatingIconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  index?: number;
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
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/hero-illustration.svg"
          alt="Centrus AI Platform"
          fill
          className="object-contain scale-[1.15] origin-center transform -translate-y-4"
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
              <div className="rounded-xl border border-primary/10 bg-background/5 p-3 shadow-lg backdrop-blur-sm">
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
      <SimpleBackground />

      <Container className="z-10">
        {/* Mobile Layout */}
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
              <div className="relative rounded-2xl bg-primary/10 p-4">
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

        {/* Desktop Layout - Adjusted vertical alignment for left content */}
        <motion.div 
          className="hidden lg:grid lg:grid-cols-2 lg:gap-16"
          style={{ opacity, scale, y }}
        >
          <motion.div className="relative z-10 flex flex-col justify-center -mt-2">
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