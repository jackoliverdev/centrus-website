'use client';

import { motion } from 'framer-motion';
import { Shield, FileText, Scale, Code } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

import { LegalHero } from '@/components/sections/legal/legal-hero';

const legalNav = [
  {
    title: 'Privacy Policy',
    href: '/legal/privacy-policy',
    icon: Shield,
    description: 'How we protect and handle your data',
  },
  {
    title: 'Terms of Service',
    href: '/legal/terms',
    icon: FileText,
    description: 'Rules and guidelines for using our service',
  },
  {
    title: 'Security Policy',
    href: '/legal/security',
    icon: Scale,
    description: 'Our security practices and commitments',
  },
];

export default function LegalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="bg-grid-white/[0.02] absolute inset-0 -z-10" />

      {/* Hero Section */}
      <LegalHero />

      {/* Navigation and Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Document Switcher - Fixed at top */}
        <div className="sticky top-0 z-30 -mt-4 bg-background/80 pt-4 backdrop-blur-sm">
          <nav className="no-scrollbar flex gap-2 overflow-x-auto px-1 sm:justify-center sm:gap-4 sm:px-0">
            {legalNav.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="flex-none"
                >
                  <Link href={item.href}>
                    <div
                      className={cn(
                        'group relative flex items-center gap-3 rounded-lg border transition-all duration-300 ease-out',
                        'p-2 sm:p-3',
                        'min-w-[160px] sm:min-w-[200px]',
                        isActive 
                          ? 'border-primary/20 bg-primary/10' 
                          : 'border-transparent hover:border-primary/10 hover:bg-muted'
                      )}
                    >
                      <Icon className={cn(
                        "h-4 w-4 sm:h-5 sm:w-5 shrink-0",
                        isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                      )} />
                      <div className="min-w-0 flex-auto">
                        <div className={cn(
                          "truncate text-sm font-medium sm:text-base",
                          isActive ? 'text-primary' : 'text-foreground'
                        )}>
                          {item.title}
                        </div>
                        <p className="hidden truncate text-xs text-muted-foreground sm:block">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="mt-1">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-background/80 via-background/50 to-background" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
