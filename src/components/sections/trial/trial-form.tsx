'use client';

import { motion } from 'framer-motion';
import { Calendar, Building2, User2, Mail, Lock, Sparkles, Rocket, Zap } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SPRING_CONFIG = { stiffness: 100, damping: 30, mass: 1 };

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function TrialForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Form Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={SPRING_CONFIG}
        className="space-y-4"
      >
        <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm">
          <Zap className="mr-2 h-4 w-4 text-primary" />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Start Your Free Trial
          </span>
        </div>
        <h2 className="text-2xl font-bold">Experience Centrus AI</h2>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING_CONFIG, delay: 0.1 }}
      >
        <div className="relative overflow-hidden rounded-xl border border-primary/5 bg-gradient-to-br from-background/50 to-background/90 p-6">
          {/* Background Gradients */}
          <motion.div
            className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 -z-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="inline-flex items-center text-sm font-medium">
                  First Name
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    placeholder="John"
                    className="h-11 pl-11"
                    required
                    disabled={status !== 'idle'}
                  />
                  <User2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="inline-flex items-center text-sm font-medium">
                  Last Name
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    placeholder="Smith"
                    className="h-11 pl-11"
                    required
                    disabled={status !== 'idle'}
                  />
                  <User2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                </div>
              </div>
            </div>

            {/* Email & Company */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="inline-flex items-center text-sm font-medium">
                  Work Email
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="h-11 pl-11"
                    required
                    disabled={status !== 'idle'}
                  />
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="inline-flex items-center text-sm font-medium">
                  Company
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    placeholder="Company Name"
                    className="h-11 pl-11"
                    required
                    disabled={status !== 'idle'}
                  />
                  <Building2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                </div>
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="inline-flex items-center text-sm font-medium">
                  Password
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Create password"
                    className="h-11 pl-11"
                    required
                    disabled={status !== 'idle'}
                  />
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="inline-flex items-center text-sm font-medium">
                  Confirm Password
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    className="h-11 pl-11"
                    required
                    disabled={status !== 'idle'}
                  />
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="group relative h-12 w-full overflow-hidden"
              disabled={status !== 'idle'}
            >
              {status === 'idle' && (
                <motion.span
                  className="inline-flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Start Free Trial
                  <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </motion.span>
              )}
              {status === 'submitting' && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-flex items-center"
                >
                  <svg
                    className="-ml-1 mr-3 h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Setting up your trial...
                </motion.span>
              )}
              {status === 'success' && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-flex items-center"
                >
                  Trial Account Created!
                  <Sparkles className="ml-2 h-4 w-4" />
                </motion.span>
              )}

              {/* Shimmer Effect */}
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
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
