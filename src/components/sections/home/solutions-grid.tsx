'use client';

import { motion, useSpring, useTransform, HTMLMotionProps } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  Users,
  Brain,
  Sparkles,
  LineChart,
  Shield,
  Building2,
  DollarSign,
} from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { fadeIn, scale } from '@/lib/utils/animation';
import { cn } from '@/lib/utils/helpers';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type MotionDivProps = HTMLMotionProps<'div'> & DivProps;
const MotionDiv: React.FC<MotionDivProps> = props => <motion.div {...props} />;

const solutions = [
  {
    title: 'Enterprise Knowledge Hub',
    description:
      'Centralize knowledge across departments, reducing information silos and improving decision-making speed by 85%.',
    impact:
      'Customers save 20+ hours per employee monthly by instantly finding accurate information.',
    icon: Building2,
    link: '/solutions#enterprise',
    color: 'from-blue-500/90 to-blue-600',
    accentColor: 'group-hover:shadow-blue-500/20',
    metrics: [
      { label: 'Faster Decisions', value: '85%' },
      { label: 'Hours Saved Monthly', value: '20+' },
      { label: 'Knowledge Coverage', value: '95%' },
    ],
  },
  {
    title: 'Customer Support Excellence',
    description:
      'Transform support operations with AI-powered responses, achieving 92% CSAT while handling 3x more inquiries.',
    impact:
      'Support teams reduce response times by 75% while maintaining consistent, accurate answers.',
    icon: Users,
    link: '/solutions#support',
    color: 'from-purple-500/90 to-purple-600',
    accentColor: 'group-hover:shadow-purple-500/20',
    metrics: [
      { label: 'CSAT Score', value: '92%' },
      { label: 'Faster Response', value: '75%' },
      { label: 'Volume Handled', value: '3x' },
    ],
  },
  {
    title: 'Revenue Acceleration',
    description:
      'Drive sales efficiency with AI insights and automation, enabling teams to close deals 40% faster.',
    impact:
      'Sales teams convert 2.5x more leads with intelligent prioritization and real-time insights.',
    icon: DollarSign,
    link: '/solutions#revenue',
    color: 'from-emerald-500/90 to-emerald-600',
    accentColor: 'group-hover:shadow-emerald-500/20',
    metrics: [
      { label: 'Faster Closing', value: '40%' },
      { label: 'Lead Conversion', value: '2.5x' },
      { label: 'Revenue Impact', value: '60%' },
    ],
  },
  {
    title: 'Operational Intelligence',
    description:
      'Transform operations with predictive insights, reducing costs by 30% while improving process efficiency.',
    impact: 'Operations teams automate 70% of routine tasks and predict issues before they occur.',
    icon: Brain,
    link: '/solutions#operations',
    color: 'from-amber-500/90 to-amber-600',
    accentColor: 'group-hover:shadow-amber-500/20',
    metrics: [
      { label: 'Cost Reduction', value: '30%' },
      { label: 'Task Automation', value: '70%' },
      { label: 'Efficiency Gain', value: '45%' },
    ],
  },
  {
    title: 'Compliance & Security',
    description:
      'Ensure 100% compliance with automatic monitoring while reducing security incidents by 80%.',
    impact:
      'Security teams prevent 95% of potential data breaches with AI-powered threat detection.',
    icon: Shield,
    link: '/solutions#security',
    color: 'from-rose-500/90 to-rose-600',
    accentColor: 'group-hover:shadow-rose-500/20',
    metrics: [
      { label: 'Compliance Rate', value: '100%' },
      { label: 'Risk Reduction', value: '80%' },
      { label: 'Threat Prevention', value: '95%' },
    ],
  },
  {
    title: 'Growth Analytics',
    description:
      'Make data-driven decisions 5x faster with real-time analytics and predictive modeling.',
    impact:
      'Leadership teams identify growth opportunities worth $2M+ annually through AI insights.',
    icon: LineChart,
    link: '/solutions#analytics',
    color: 'from-indigo-500/90 to-indigo-600',
    accentColor: 'group-hover:shadow-indigo-500/20',
    metrics: [
      { label: 'Faster Analysis', value: '5x' },
      { label: 'Revenue Found', value: '$2M+' },
      { label: 'Accuracy Rate', value: '99%' },
    ],
  },
] as const;

interface SolutionCardProps {
  solution: (typeof solutions)[number];
  index: number;
}

function SolutionCard({ solution, index }: SolutionCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const Icon = solution.icon;

  return (
    <MotionDiv
      variants={fadeIn('up', index * 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative will-change-transform"
    >
      <Card
        className={cn(
          'relative h-full overflow-hidden',
          'bg-gradient-to-br from-background/50 to-background/90',
          'border border-primary/5',
          'transition-all duration-500',
          'hover:border-primary/20 hover:shadow-xl',
          solution.accentColor
        )}
      >
        {/* Content */}
        <div className="space-y-6 p-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <MotionDiv
              initial={false}
              animate={{
                scale: isHovered ? 1.05 : 1,
                y: isHovered ? -2 : 0,
              }}
              className={cn(
                'flex items-center gap-3 rounded-xl p-3',
                'bg-gradient-to-br shadow-lg',
                solution.color
              )}
              transition={{ duration: 0.2 }}
            >
              <Icon className="h-6 w-6 text-white" />
            </MotionDiv>

            <Link href={solution.link} className="flex items-center gap-2 text-primary">
              {/* Motion.span if error to change again motion.span */}
              <MotionDiv
                initial={false}
                animate={{
                  x: isHovered ? 0 : -4,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="text-sm font-medium"
              >
                Learn more
              </MotionDiv>
              <MotionDiv
                initial={false}
                animate={{
                  x: isHovered ? 0 : -8,
                  opacity: isHovered ? 1 : 0.5,
                }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4" />
              </MotionDiv>
            </Link>
          </div>

          {/* Title & Description */}
          <div>
            <MotionDiv
              initial={false}
              animate={{
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="mb-3 bg-gradient-to-br from-foreground to-foreground/90 bg-clip-text text-xl font-bold text-transparent"
            >
              {solution.title}
            </MotionDiv>

            <MotionDiv
              initial={false}
              animate={{
                opacity: isHovered ? 0.9 : 0.7,
              }}
              transition={{ duration: 0.2 }}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {solution.description}
            </MotionDiv>
          </div>

          {/* Impact Statement */}
          <MotionDiv
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0.8,
              y: isHovered ? -1 : 0,
            }}
            className="border-l-2 border-primary/20 py-2 pl-4"
          >
            <p className="text-sm italic text-foreground/80">{solution.impact}</p>
          </MotionDiv>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-4">
            {solution.metrics.map((metric, i) => (
              <MotionDiv
                key={metric.label}
                initial={false}
                animate={{
                  scale: isHovered ? 1.02 : 1,
                  y: isHovered ? -1 : 0,
                }}
                transition={{ duration: 0.2, delay: i * 0.1 }}
                className="space-y-1 text-center"
              >
                <div className="bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-lg font-bold text-transparent">
                  {metric.value}
                </div>
                <div className="text-xs font-medium text-muted-foreground">{metric.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* Animated Background */}
        <div
          className={cn(
            'absolute inset-0 opacity-0 transition-opacity duration-500',
            'bg-gradient-to-br',
            solution.color,
            'group-hover:opacity-[0.03]'
          )}
        />
      </Card>
    </MotionDiv>
  );
}

export function SolutionsGrid() {
  return (
    <section className="relative overflow-hidden py">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e508_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(white,transparent_85%)]" />

        <MotionDiv
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
        {/* Section Header */}
        <MotionDiv
          variants={scale()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </div>

          <MotionDiv variants={fadeIn('up', 0.1)} initial="hidden" whileInView="visible">
            <h2 className="mb-4 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text font-heading text-2xl  font-bold text-transparent sm:text-5xl">
              Transform Your Business
              <br className="hidden sm:block" />
              with Proven Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-lg text-muted-foreground">
              Join industry leaders who achieve measurable results with our enterprise-ready AI
              solutions.
            </p>
          </MotionDiv>
        </MotionDiv>

        {/* Solutions Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} solution={solution} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
