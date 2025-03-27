'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Bot, Boxes, Plug, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DM_Sans } from 'next/font/google';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

const logos = [
  {
    src: '/logos/google-drive.svg',
    delay: 0,
    position: {
      desktop: { x: '22%', y: '30%' },
      tablet: { x: '25%', y: '30%' },
      mobile: { x: '10%', y: '10%' },
    },
  },
  {
    src: '/logos/ms-teams.svg',
    delay: 0.1,
    position: {
      desktop: { x: '67.5%', y: '30%' },
      tablet: { x: '64%', y: '30%' },
      mobile: { x: '70%', y: '10%' },
    },
  },
  {
    src: '/logos/whatsapp.svg',
    delay: 0.2,
    position: {
      desktop: { x: '67.5%', y: '70%' },
      tablet: { x: '64%', y: '70%' },
      mobile: { x: '70%', y: '85%' },
    },
  },
  {
    src: '/logos/hubspot.svg',
    delay: 0.3,
    position: {
      desktop: { x: '22%', y: '70%' },
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

// Add font configuration
const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export function IntegrationsHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = React.useState(0);

  // Removed useNetworkAnimation hook that might be causing artifacts

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0, 100]);

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
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden pb-24 pt-20 md:pb-16"
    >
      {/* Simple static background - no particles or animations */}
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
                <Boxes className="h-8 w-8 text-primary" />
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
              <Plug className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </motion.div>

            {/* Heading with DM Sans */}
            <motion.h1
              variants={itemVariants}
              className={`text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl ${dmSans.className}`}
            >
              Connect Your{' '}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Entire Workspace
              </span>
            </motion.h1>

            {/* Description with DM Sans */}
            <motion.p
              variants={itemVariants}
              className={`mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl ${dmSans.className}`}
            >
              Integrate with your favorite tools and platforms. Centrus AI works seamlessly with
              your existing tech stack to enhance productivity across your organisation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
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
                <Link href="/contact">
                  Request Integration
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            {/* Network Visualization - Simplified */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto mt-4 md:mt-0 aspect-[2/1] w-full max-w-3xl px-4 sm:px-6 lg:px-8"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <svg className="h-full w-full">
                  <defs>
                    <pattern id="integrations-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="rgba(43, 156, 229, 0.1)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#integrations-grid)" />
                </svg>

                {/* Integration logos with responsive positioning - simplified */}
                {logos.map((logo, index) => {
                  const position = getResponsivePosition(logo);
                  return (
                    <div
                      key={index}
                      className="absolute"
                      style={{ left: position.x, top: position.y }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          y: [0, -4, 0]
                        }}
                        transition={{ 
                          delay: logo.delay, 
                          type: 'spring',
                          stiffness: 200,
                          damping: 20,
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: 'easeInOut',
                            repeatType: 'loop'
                          }
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="relative h-[4.5rem] w-[4.5rem] rounded-xl bg-background p-1 
                                border border-primary/10 sm:h-[5.5rem] sm:w-[5.5rem] sm:p-2 md:h-[6rem] md:w-[6rem] md:p-2.5"
                      >
                        <div className="relative h-full w-full">
                          <Image
                            src={logo.src}
                            alt="Integration logo"
                            fill
                            priority={index < 3}
                            className="object-contain p-1.5 sm:p-2 md:p-2.5"
                          />
                        </div>
                      </motion.div>
                    </div>
                  );
                })}

                {/* Center Bot with simplified animation */}
                <div className="absolute top-[62%] z-10 -translate-y-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      delay: 0.2, 
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        repeatType: 'loop'
                      }
                    }}
                    className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-primary/10 sm:h-[5.5rem] sm:w-[5.5rem] md:h-[6.5rem] md:w-[6.5rem]"
                  >
                    <Bot className="h-9 w-9 text-primary sm:h-11 sm:w-11 md:h-12 md:w-12" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}