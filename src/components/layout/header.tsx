'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme as useNextTheme } from 'next-themes';
import * as React from 'react';
import { DM_Sans, Rajdhani } from 'next/font/google';

import { DesktopNav } from '@/components/layout/navigation/desktop-nav';
import { MobileNav } from '@/components/layout/navigation/mobile-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';
import { useMountContext } from '@/providers/mount-provider';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

const Logo = React.memo(function Logo() {
  const { shouldAnimate } = useMountContext();

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, x: -10 } : false}
      animate={shouldAnimate ? { opacity: 1, x: 0 } : false}
      transition={{ duration: 0.3 }}
    >
      <Link href="/" className="flex items-center space-x-1 transition-opacity hover:opacity-90">
        <div className="relative h-10 w-10">
          <Image src="/logo.png" alt="Centrus AI Logo" fill className="object-contain" priority />
        </div>
        <span className={`text-2xl font-bold text-[#041b70] dark:text-white ${rajdhani.className}`}>
          Centrus AI
        </span>
      </Link>
    </motion.div>
  );
});

const DesktopActions = React.memo(function DesktopActions() {
  const { shouldAnimate } = useMountContext();

  return (
    <motion.div
      className="hidden lg:flex lg:items-center lg:gap-x-4"
      initial={shouldAnimate ? { opacity: 0, x: 10 } : false}
      animate={shouldAnimate ? { opacity: 1, x: 0 } : false}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <ThemeToggle />
      <Button
        variant="ghost"
        className="text-sm text-muted-foreground hover:text-[#2b9ce5]"
        asChild
      >
        <Link href="/demo">Book Demo</Link>
      </Button>
      <Button
        className="bg-[#2b9ce5] text-sm text-white transition-all duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
        asChild
      >
        <Link href="/free-trial">Start Free</Link>
      </Button>
      <Button
        className="border-[#2b9ce5] bg-transparent text-sm text-[#2b9ce5] transition-all duration-200 hover:scale-[1.02] hover:bg-[#2b9ce5]/10 active:scale-[0.98] dark:text-[#2b9ce5]"
        variant="outline"
        asChild
      >
        <a href="https://app.centrus.ai/app" target="_blank" rel="noopener noreferrer">
          Dashboard
        </a>
      </Button>
    </motion.div>
  );
});

const MobileActions = React.memo(function MobileActions() {
  const { shouldAnimate } = useMountContext();

  return (
    <motion.div
      className="flex items-center gap-4 lg:hidden"
      initial={shouldAnimate ? { opacity: 0 } : false}
      animate={shouldAnimate ? { opacity: 1 } : false}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <ThemeToggle />
      <MobileNav />
    </motion.div>
  );
});

export function Header() {
  const pathname = usePathname();
  const { theme, systemTheme } = useNextTheme();
  const { scrollY } = useScroll();
  const { shouldAnimate, isHydrated } = useMountContext();

  const springConfig = {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
    restSpeed: 0.001, // Reduced for faster response
    restDelta: 0.001, // Added for better performance
  };

  const opacity = useSpring(1, springConfig);
  const blur = useSpring(8, springConfig);
  const bgOpacity = useSpring(0, springConfig);

  const currentTheme = React.useMemo(() => {
    if (!isHydrated) return 'light';
    return theme === 'system' ? systemTheme : theme;
  }, [theme, systemTheme, isHydrated]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateHeader = () => {
      const scrolled = window.scrollY > 20;
      opacity.set(scrolled ? 0.98 : 1);
      blur.set(scrolled ? 12 : 8);
      bgOpacity.set(Math.min(window.scrollY / 100, 1) * 0.95);
    };

    // Initial update without animation
    updateHeader();

    // Simplified scroll listener
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, [opacity, blur, bgOpacity]);

  const headerClass = cn(
    'fixed top-0 z-50 w-full border-b will-change-transform',
    pathname === '/' ? 'border-transparent' : 'border-border/40'
  );

  return (
    <motion.header
      className={headerClass}
      style={{
        opacity,
        backdropFilter: useTransform(blur, value => `blur(${value}px)`),
        backgroundColor: useTransform(bgOpacity, value =>
          currentTheme === 'dark'
            ? `hsl(var(--background) / ${value})`
            : `hsl(var(--background) / ${value * 0.8})`
        ),
      }}
      initial={false} // Disable initial animation
    >
      <Container spacing="small" className="flex h-16 items-center">
        <div className="flex flex-1 items-center justify-between">
          <Logo />
          <DesktopNav />
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <DesktopActions />
            <MobileActions />
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
