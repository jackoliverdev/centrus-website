'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Lock, Users, Clock, Check, Sparkles, CheckCircle } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

const features = [
  {
    name: 'Document Understanding',
    description:
      'Process and understand your business documents with our AI-powered system',
    icon: Brain,
    color: 'from-[#2b9ce5] to-[#2b9ce5]/80',
    glowColor: 'group-hover:shadow-[#2b9ce5]/20',
    stat: 'AI',
  },
  {
    name: 'Quick Setup',
    description: 'Get started quickly with our streamlined onboarding process',
    icon: Zap,
    color: 'from-[#10b981] to-[#059669]',
    glowColor: 'group-hover:shadow-[#10b981]/30',
    stat: 'Fast',
  },
  {
    name: 'Data Protection',
    description: 'UK & EU compliant data handling with modern security practices',
    icon: Lock,
    color: 'from-purple-500 to-purple-600',
    glowColor: 'group-hover:shadow-purple-500/20',
    stat: 'GDPR',
  },
  {
    name: 'Collaboration',
    description: 'Work together with your team using role-based access controls',
    icon: Users,
    color: 'from-orange-500 to-orange-600',
    glowColor: 'group-hover:shadow-orange-500/20',
    stat: 'Teams',
  },
  {
    name: 'Support',
    description: 'Get help when you need it through our support channels',
    icon: Clock,
    color: 'from-pink-500 to-pink-600',
    glowColor: 'group-hover:shadow-pink-500/20',
    stat: '24/7',
  },
  {
    name: 'Full Platform',
    description: 'Access our complete set of AI-powered document tools',
    icon: Sparkles,
    color: 'from-indigo-500 to-indigo-600',
    glowColor: 'group-hover:shadow-indigo-500/20',
    stat: '100%',
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export function TrialFeatures() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Simplified Background Elements - matching other sections */}
      <div className="absolute inset-0 -z-[1]">
        {/* Static grid background - matching other sections */}
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm">
            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Fully-Featured Trial
            </span>
          </div>

          <h2 className="text-4xl font-bold">
            <span className="sm:inline flex flex-col">
              <span>Everything You </span>
              <span>Need to </span>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Get Started
              </span>
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Start with our free plan including 50 monthly messages, up to 3 users, and 100MB storage. 
          Upgrade anytime to increase your limits.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.name} variants={itemVariants} className="group relative">
              <div
                className={cn(
                  'relative h-full rounded-xl p-6',
                  'bg-gradient-to-br from-background/50 to-background/90',
                  'border border-primary/5',
                  'transition-all duration-500',
                  'group-hover:border-primary/20',
                  'group-hover:shadow-2xl',
                  'will-change-transform',
                  feature.glowColor
                )}
              >
                {/* Floating glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 0.05,
                    transition: { duration: 0.3 },
                  }}
                  className={cn(
                    'absolute inset-0 -z-10 blur-xl',
                    'rounded-xl bg-gradient-to-br',
                    feature.color
                  )}
                />

                {/* Content */}
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-background/50 p-2.5 backdrop-blur-sm">
                    <feature.icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="bg-gradient-to-br from-foreground to-foreground/90 bg-clip-text text-base font-semibold text-transparent">
                        {feature.name}
                      </h3>
                      <div className="text-sm font-medium text-primary">{feature.stat}</div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
