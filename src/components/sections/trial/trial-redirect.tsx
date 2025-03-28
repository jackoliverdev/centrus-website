'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Rocket, LogIn } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const SPRING_CONFIG = { stiffness: 100, damping: 30, mass: 1 };

export function TrialRedirect() {
  return (
    <div className="space-y-8">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={SPRING_CONFIG}
        className="space-y-6 text-center"
      >
        <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm">
          <LogIn className="mr-2 h-4 w-4 text-primary" />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Get Started Now
          </span>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground">
            Create your free account today with 50 monthly messages, 3 team members, and 100MB storage. Upgrade anytime to increase your limits.
          </p>
        </div>

        <Button 
          size="lg" 
          className="group relative h-12 overflow-hidden text-white"
          asChild
        >
          <Link href="https://app.centrus.ai/sign-up">
            Create Free Account
            <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
} 