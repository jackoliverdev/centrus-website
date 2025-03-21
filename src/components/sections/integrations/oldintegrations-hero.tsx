'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Bot, Boxes, Plug, Rocket, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DM_Sans } from 'next/font/google';

import { DataPacket } from '@/components/network/data-packet';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useAnimations, useFadeIn } from '@/lib/hooks';
import { useNetworkAnimation } from '@/lib/hooks/use-network-animation';

const logos = [
  {
    src: '/logos/google-drive.svg',
    delay: 0,
    position: {
      desktop: { x: '22%', y: '35%' },
      tablet: { x: '25%', y: '30%' },
      mobile: { x: '10%', y: '10%' },
    },
  },
  {
    src: '/logos/ms-teams.svg',
    delay: 0.1,
    position: {
      desktop: { x: '67.5%', y: '35%' },
      tablet: { x: '64%', y: '30%' },
      mobile: { x: '70%', y: '10%' },
    },
  },
  {
    src: '/logos/whatsapp.svg',
    delay: 0.2,
    position: {
      desktop: { x: '67.5%', y: '65%' },
      tablet: { x: '64%', y: '70%' },
      mobile: { x: '70%', y: '85%' },
    },
  },
  {
    src: '/logos/hubspot.svg',
    delay: 0.3,
    position: {
      desktop: { x: '22%', y: '65%' },
      tablet: { x: '25%', y: '70%' },
      mobile: { x: '10%', y: '85%' },
    },
  },
  {
    src: '/logos/dropbox2.svg',
    delay: 0.4,
    position: {
      desktop: { x: '15%', y: '50%' },
      tablet: { x: '15%', y: '50%' },
      mobile: { x: '0%', y: '50%' },
    },
  },
  {
    src: '/logos/onedrive.svg',
    delay: 0.5,
    position: {
      desktop: { x: '74%', y: '50%' },
      tablet: { x: '73%', y: '50%' },
      mobile: { x: '80%', y: '50%' },
    },
  },
];

interface Point {
  x: number;
  y: number;
  size: number;
  velocity: { x: number; y: number };
}

const PARTICLE_COUNT = 20;
const UPDATE_INTERVAL = 1000 / 60; // 60 FPS
const MAX_VELOCITY = 0.05;
const CONNECTION_DISTANCE = 15;

// Add font configuration
const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export function IntegrationsHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [points, setPoints] = React.useState<Point[]>([]);
  const animationRef = React.useRef<number>();
  const lastUpdateRef = React.useRef<number>(0);
  const { variants: staggerVariants } = useAnimations({ threshold: 0.2 });
  const { variants: fadeVariants } = useFadeIn({ delay: 200 });
  const [windowWidth, setWindowWidth] = React.useState(0);

  // Initialize animation system with logo positions
  const { packets, activeSourceIndex } = useNetworkAnimation(
    logos.map(logo => ({
      x: parseFloat(logo.position.desktop.x) / 100,
      y: parseFloat(logo.position.desktop.y) / 100,
    })),
    { x: 0.5, y: 0.5 }
  );

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [points.length]);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsivePosition = (logo: (typeof logos)[0]) => {
    if (windowWidth < 640) {
      return logo.position.mobile;
    } else if (windowWidth < 1024) {
      return logo.position.tablet;
    }
    return logo.position.desktop;
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden pb-24 pt-20  md:pb-16"
    >
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
                <Boxes className="h-8 w-8 text-primary" />
              </div>
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
              <Plug className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </motion.div>

            {/* Updated heading with DM Sans */}
            <motion.h1
              variants={fadeVariants}
              className={`text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl ${dmSans.className}`}
            >
              Connect Your{' '}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Entire Workspace
              </span>
            </motion.h1>

            {/* Updated description with DM Sans */}
            <motion.p
              variants={fadeVariants}
              className={`mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl ${dmSans.className}`}
            >
              Integrate with your favorite tools and platforms. Centrus AI works seamlessly with
              your existing tech stack to enhance productivity across your organisation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeVariants}
              className="mt-10 flex flex-col gap-4 sm:flex-row justify-center"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden text-white"
                asChild
              >
                <Link href="/demo">
                  Book Demo
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group"
                asChild
              >
                <Link href="/request-integration">
                  Request Integration
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            {/* Network Visualization */}
            <motion.div
              variants={fadeVariants}
              className="relative mx-auto mt-6 aspect-[2/1] w-full max-w-3xl px-4 sm:px-6 lg:px-8"
              style={{ opacity, scale, y }}
            >
              <div className="absolute inset-0  flex flex-col items-center justify-center">
                <svg className="h-full w-full">
                  <defs>
                    <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(43, 156, 229)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="rgb(43, 156, 229)" stopOpacity="0.1" />
                    </linearGradient>

                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="rgba(43, 156, 229, 0.1)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>

                  {/* Background grid */}
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Connection paths */}
                  {logos.map((logo, i) => {
                    const startX = parseFloat(logo.position.desktop.x);
                    const startY = parseFloat(logo.position.desktop.y);
                    const centerX = 50;
                    const centerY = 50;
                    const controlX = centerX + (startX - centerX) * 0.5;

                    return (
                      <motion.path
                        key={i}
                        d={`M ${startX} ${startY} Q ${controlX} ${startY}, ${centerX} ${centerY}`}
                        fill="none"
                        stroke="url(#connection-gradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{
                          pathLength: activeSourceIndex === i ? [0, 1, 0] : 1,
                          opacity: activeSourceIndex === i ? [0.8, 0.8, 0.8] : 0.2,
                        }}
                        transition={{
                          duration: activeSourceIndex === i ? 2 : 0,
                          ease: 'easeInOut',
                        }}
                      />
                    );
                  })}

                  {/* Animated data packets */}
                  {packets.map(packet => (
                    <DataPacket
                      key={packet.id}
                      x={packet.x}
                      y={packet.y}
                      progress={packet.progress}
                      phase={packet.phase}
                    />
                  ))}
                </svg>

                {/* Integration logos with responsive positioning */}
                {logos.map((logo, index) => {
                  const position = getResponsivePosition(logo);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: logo.delay, type: 'spring' }}
                      className="absolute "
                      style={{ left: position.x, top: position.y }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          y: [0, -4, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: 'easeInOut',
                        }}
                        className="relative h-16 w-16 rounded-xl border border-primary/20 bg-background/50 p-2 
                                  shadow-lg shadow-primary/5 backdrop-blur-sm transition-colors hover:border-primary/40 sm:h-16
                                  sm:w-16 sm:p-3 md:h-20
                                  md:w-20 md:p-4"
                      >
                        {/* Active node glow */}
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-primary/5"
                          animate={{
                            opacity: activeSourceIndex === index ? [0.2, 0.4, 0.2] : 0.2,
                            scale: activeSourceIndex === index ? [1, 1.1, 1] : 1,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />

                        <Image
                          src={logo.src}
                          alt="Integration logo"
                          fill
                          className="object-contain p-2 sm:p-2.5 md:p-3"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Center Bot with increased size */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="absolute  top-1/2 z-10  -translate-y-1/2"
                >
                  <motion.div
                    className="relative flex h-16 w-16 items-center justify-center rounded-full  bg-primary/10 
                              backdrop-blur-sm sm:h-20 sm:w-20 md:h-24 md:w-24"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Bot className="h-8 w-8 text-primary sm:h-10 sm:w-10 md:h-12 md:w-12" />

                    {/* Processing rings */}
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full "
                        animate={{
                          scale: [1, 1.5],
                          opacity: [0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 1,
                          ease: 'easeOut',
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8  -translate-x-1/2"
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
