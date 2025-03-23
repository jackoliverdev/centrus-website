'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Bot,
  FileText,
  MessageSquare,
  BarChart,
  Database,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

import { Container } from '@/components/ui/container';
import { useCounter } from '@/lib/hooks/use-counter';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Intelligent Search',
    description:
      'Find any information instantly with AI-powered search and smart document retrieval.',
    icon: Search,
    color: 'from-[#2b9ce5] to-[#2b9ce5]/80',
    glowColor: 'group-hover:shadow-[#2b9ce5]/20',
    stat: { value: '80', suffix: '%', label: 'Faster Retrieval' },
  },
  {
    title: 'Document Analysis',
    description: 'Transform complex documents into actionable insights with automated analysis.',
    icon: FileText,
    color: 'from-[#10b981] to-[#059669]',
    glowColor: 'group-hover:shadow-[#10b981]/30',
    stat: { value: '75', suffix: '%', label: 'Time Saved' },
  },
  {
    title: 'AI Chat Support',
    description: '24/7 AI-powered support assistance with instant, accurate responses.',
    icon: MessageSquare,
    color: 'from-purple-500 to-purple-600',
    glowColor: 'group-hover:shadow-purple-500/20',
    stat: { value: '80', suffix: '%', label: 'Query Resolution' },
  },
  {
    title: 'Data Analytics',
    description: 'Convert raw data into insights with AI-powered analysis for decision making.',
    icon: BarChart,
    color: 'from-orange-500 to-orange-600',
    glowColor: 'group-hover:shadow-orange-500/20',
    stat: { value: '3', suffix: 'x', label: 'Faster Decisions' },
  },
  {
    title: 'AI Assistant',
    description: 'Natural language interface that understands context and business needs.',
    icon: Bot,
    color: 'from-pink-500 to-pink-600',
    glowColor: 'group-hover:shadow-pink-500/20',
    stat: { value: '24', suffix: '/7', label: 'Availability' },
  },
  {
    title: 'Knowledge Base',
    description: 'Centralised knowledge hub with AI-powered information processing.',
    icon: Database,
    color: 'from-indigo-500 to-indigo-600',
    glowColor: 'group-hover:shadow-indigo-500/20',
    stat: { value: '20', suffix: '%', label: 'Efficiency Gain' },
  },
];

export function DemoFeatures() {
  return (
    <Container>
      <div className="relative overflow-hidden py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Demo Highlights
            </span>
          </div>

          <h2 className="text-4xl font-bold">What You'll Experience</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            During your personalised demo, we'll showcase these powerful features and how they can
            transform your workflow.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              className="group relative"
            >
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
                        {feature.title}
                      </h3>
                      <div className="text-sm font-medium text-primary">
                        {feature.stat.value}
                        {feature.stat.suffix}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                    <div className="text-xs text-muted-foreground">{feature.stat.label}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
