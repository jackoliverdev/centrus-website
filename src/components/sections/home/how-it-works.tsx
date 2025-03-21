'use client';

import { motion, useInView, HTMLMotionProps } from 'framer-motion';
import { Upload, Brain, Shield, MessageSquare, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { DM_Sans } from 'next/font/google';

import { Container } from '@/components/ui/container';
import { useLazyMounted } from '@/lib/hooks/use-mounted';
import { cn } from '@/lib/utils/helpers';
import * as React from 'react';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

interface Step {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
  features: string[];
}

type MotionDivProps = HTMLMotionProps<'div'> &
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
  };

// const MotionDiv: React.FC<MotionDivProps> = props => <motion.div {...props} />;

const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>((props, ref) => (
  <motion.div ref={ref} {...props} />
));

const steps: Step[] = [
  {
    title: 'Upload Documents',
    description:
      'Start by uploading your company documents. We support PDFs, Word documents, and more.',
    icon: Upload,
    color: 'bg-[#3B00ff]',
    glowColor: 'shadow-[#3B00ff]/20',
    features: ['Bulk file upload', 'Automated text extraction', 'Secure date storage'],
  },
  {
    title: 'AI Training',
    description: 'Our AI processes your documents for efficient retrieval and contextual responses.',
    icon: Brain,
    color: 'bg-[#cc00ff]',
    glowColor: 'shadow-[#cc00ff]/20',
    features: [
      'Smart document indexing',
      'Vector-based retrieval',
      'Real-time response generation'
    ],
  },
  {
    title: 'Set Permissions',
    description: 'Configure access levels and security settings for different team members.',
    icon: Shield,
    color: 'bg-[#00ff94]',
    glowColor: 'shadow-[#00ff94]/20',
    features: ['Role-based access control', 'Audit chat history logs', 'Data encryption'],
  },
  {
    title: 'Start Using',
    description:
      'Begin interacting with your AI assistant to retrieve information and get answers.',
    icon: MessageSquare,
    color: 'bg-[#FFA800]',
    glowColor: 'shadow-[#FFA800]/20',
    features: [
      'Document-based responses',
      'Multi-document search',
      'Source citations',
    ],
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const Icon = step.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(cardRef as React.RefObject<Element>, {
    once: true,
    amount: 0.2,
  });

  const isMounted = useLazyMounted(100);

  const variants = {
    hidden: {
      opacity: 0,
      x: -20,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.21, 1.11, 0.81, 0.99],
      },
    },
  };

  const BaseContent = () => (
    <>
      <div className="space-y-4">
        <div className={cn('h-12 w-12 rounded-xl', 'p-2.5 text-white shadow-lg', step.color)}>
          <Icon className="h-full w-full" />
        </div>
        <div>
          <h3 className={cn("bg-gradient-to-br from-foreground to-foreground/90 bg-clip-text text-xl font-bold text-transparent", dmSans.className)}>
            {step.title}
          </h3>
          <p className={cn("mt-2 text-sm text-muted-foreground", dmSans.className)}>
            {step.description}
          </p>
        </div>
        <ul className="space-y-2">
          {step.features.map(feature => (
            <li key={feature} className={cn("flex items-center gap-2 text-sm text-muted-foreground", dmSans.className)}>
              <div className={cn('h-1.5 w-1.5 rounded-full', step.color)} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={cn(
          'absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500',
          'bg-gradient-to-br',
          step.color,
          'group-hover:opacity-[0.03]'
        )}
      />
    </>
  );

  if (!isMounted) {
    return (
      <div className="relative opacity-0">
        <div
          className={cn(
            'relative h-full rounded-xl p-6',
            'bg-gradient-to-br from-background/50 to-background/90',
            'border border-primary/5',
            step.glowColor
          )}
        >
          <BaseContent />
        </div>
      </div>
    );
  }

  return (
    <MotionDiv
      ref={cardRef}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-100px',
      }}
      className="relative"
    >
      {/* Card Content */}
      <div
        className={cn(
          'relative h-full rounded-xl p-6',
          'bg-gradient-to-br from-background/50 to-background/90',
          'border border-primary/5',
          'transition-all duration-700',
          'group hover:border-primary/20 hover:shadow-lg',
          step.glowColor
        )}
      >
        <BaseContent />
      </div>

      {/* Step Number */}
      <MotionDiv
        initial={{ scale: 0, rotate: -20 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          delay: index * 0.2 + 0.3,
        }}
        className="absolute -left-3 -top-3 z-20"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-background shadow-lg backdrop-blur-sm">
          <span className="bg-gradient-to-br from-primary to-primary/80 bg-clip-text font-bold text-transparent">
            {index + 1}
          </span>
        </div>
      </MotionDiv>

      {/* Connection Line */}
      {index < steps.length - 1 && (
        <MotionDiv
          className="absolute left-[calc(100%-24px)] top-[32px] z-0 w-[calc(8px+2rem)] md:w-[calc(10px+2rem)]   lg:block lg:w-[calc(48px+2rem)]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: index * 0.2 + 0.5,
            ease: 'easeInOut',
          }}
        >
          <div className="h-[2px] w-full bg-gradient-to-r from-primary/30 to-transparent" />
        </MotionDiv>
      )}
    </MotionDiv>
  );
}

function BaseTitle() {
  return (
    <>
      <div className={cn("inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm", dmSans.className)}>
        <Sparkles className="mr-2 h-4 w-4 text-primary" />
        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Easy Setup
        </span>
      </div>
      <h2 className={cn("text-3xl font-bold sm:text-4xl", dmSans.className)}>How Centrus Works</h2>
    </>
  );
}

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className={cn("relative py-12", dmSans.className)}>
      <Container className="relative">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: '-100px',
          }}
          transition={{
            duration: 0.8,
            ease: [0.21, 1.11, 0.81, 0.99],
          }}
          className="space-y-4 text-center"
        >
          <BaseTitle />
        </MotionDiv>
      </Container>

      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
