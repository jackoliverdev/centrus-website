'use client';

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  // useMotionTemplate,
  HTMLMotionProps,
} from 'framer-motion';
import { DollarSign, Users, Brain, Zap, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { DM_Sans } from 'next/font/google';

import { Container } from '@/components/ui/container';
import { useCounter, counterEasings } from '@/lib/hooks/use-counter';
// import { fadeIn, scale } from '@/lib/utils/animation';
import { cn } from '@/lib/utils/helpers';
import { useMountContext } from '@/providers/mount-provider';

// type DivProps = React.HTMLAttributes<HTMLDivElement>;
// type MotionDivProps = HTMLMotionProps<'div'> & DivProps;
type MotionDivProps = HTMLMotionProps<'div'> &
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
  };

// const MotionDiv: React.FC<MotionDivProps> = props => <motion.div {...props} />;
const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>((props, ref) => (
  <motion.div ref={ref} {...props} />
));

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const results = [
  {
    name: 'Increased Productivity',
    description:
      'Teams spend 85% less time searching for information, with instant access to accurate answers from your company knowledge.',
    icon: Zap,
    color: 'from-[#3B00ff]/90 to-[#3B00ff]',
    accentColor: 'group-hover:shadow-[#3B00ff]/20',
    stats: { value: '85', suffix: '%', label: 'Time Saved' },
  },
  {
    name: 'Enhanced Support Quality',
    description:
      'Support teams reduce resolution times by 60% while maintaining consistent, accurate responses across all channels.',
    icon: Users,
    color: 'from-[#cc00ff]/90 to-[#cc00ff]',
    accentColor: 'group-hover:shadow-[#cc00ff]/20',
    stats: { value: '60', suffix: '%', label: 'Faster Resolution Time' },
  },
  {
    name: 'Faster Decision Making',
    description:
      'Leaders make data-driven decisions 3x faster with AI-powered insights and real-time analytics from your business data.',
    icon: Brain,
    color: 'from-[#00ff94]/90 to-[#00ff94]',
    accentColor: 'group-hover:shadow-[#00ff94]/20',
    stats: { value: '3', suffix: 'x', label: 'Speed Increase' },
  },
  {
    name: 'Reduced Operational Costs',
    description:
      'Cut operational costs by reducing the time spent on manual information gathering and empowering employees to make better business decisions.',
    icon: DollarSign,
    color: 'from-[#FFA800]/90 to-[#FFA800]',
    accentColor: 'group-hover:shadow-[#FFA800]/20',
    stats: { value: '20', suffix: '%', label: 'Cost Reduction' },
  },
] as const;

function StatCounter({
  value,
  suffix = '',
  delay = 0,
}: {
  value: string;
  suffix?: string;
  delay?: number;
}) {
  const { shouldAnimate } = useMountContext();
  const { formattedCount, setRef } = useCounter({
    end: parseInt(value),
    duration: shouldAnimate ? 2500 : 0,
    delay: shouldAnimate ? delay : 0,
    formatter: num => `${num}${suffix}`,
    easing: counterEasings.easeOutExpo,
  });

  return <span ref={setRef}>{formattedCount}</span>;
}

interface ResultCardProps {
  result: (typeof results)[number];
  index: number;
}

function ResultCard({ result, index }: ResultCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const { shouldAnimate } = useMountContext();

  // Enhanced scroll animations
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['0 1', '1.2 1'], // Changed offset to trigger when card enters viewport
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [75, 0]), {
    stiffness: 100,
    damping: 20,
  });

  const opacity = useSpring(useTransform(scrollYProgress, [0, 1], [0.2, 1]), {
    stiffness: 100,
    damping: 20,
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.95, 1]), {
    stiffness: 100,
    damping: 20,
  });

  const Icon = result.icon;

  if (!shouldAnimate) {
    return (
      <div className="group relative">
        <div
          className={cn(
            'relative h-full rounded-2xl p-8',
            'bg-gradient-to-br from-background/50 to-background/90',
            'border border-primary/5',
            result.accentColor
          )}
        >
          {/* Static content here, same structure but without animations */}
          <div className="mb-8 flex items-center justify-between">
            <div
              className={cn(
                'flex items-center gap-3 rounded-xl p-3',
                'bg-gradient-to-br shadow-lg',
                result.color
              )}
            >
              <Icon className="h-6 w-6 text-white" />
            </div>

            <div className="text-right">
              <div className="bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-3xl font-bold text-transparent">
                <StatCounter value={result.stats.value} suffix={result.stats.suffix} delay={0} />
              </div>
              <div className="text-sm font-medium text-muted-foreground">{result.stats.label}</div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="bg-gradient-to-br from-foreground to-foreground/90 bg-clip-text text-xl font-bold text-transparent">
              {result.name}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">{result.description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <MotionDiv
      ref={cardRef}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.24, 0.6, 0.39, 0.97],
      }}
      className={cn("group relative will-change-transform", dmSans.className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Same content as current file, with animations */}
      <div
        className={cn(
          'relative h-full rounded-2xl p-8',
          'bg-gradient-to-br from-background/50 to-background/90',
          'border border-primary/5',
          'transition-all duration-500',
          'hover:border-primary/20 hover:shadow-lg',
          result.accentColor,
          dmSans.className
        )}
      >
        {/* Top Stats Section */}
        <div className="mb-8 flex items-center justify-between">
          <MotionDiv
            initial={false}
            animate={{
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? -2 : 0,
            }}
            className={cn(
              'flex items-center gap-3 rounded-xl p-3',
              'bg-gradient-to-br shadow-lg',
              result.color
            )}
            transition={{ duration: 0.2 }}
          >
            <Icon className="h-6 w-6 text-white" />
          </MotionDiv>

          <MotionDiv
            initial={false}
            animate={{
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.2 }}
            className={cn("text-right", dmSans.className)}
          >
            <div className={cn("bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-3xl font-bold text-transparent", dmSans.className)}>
              <StatCounter
                value={result.stats.value}
                suffix={result.stats.suffix}
                delay={index * 100}
              />
            </div>
            <div className={cn("text-sm font-medium text-muted-foreground", dmSans.className)}>{result.stats.label}</div>
          </MotionDiv>
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          <MotionDiv
            initial={false}
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.2 }}
            className={cn("bg-gradient-to-br from-foreground to-foreground/90 bg-clip-text text-xl font-bold text-transparent", dmSans.className)}
          >
            {result.name}
          </MotionDiv>

          <MotionDiv
            initial={false}
            animate={{
              opacity: isHovered ? 0.9 : 0.7,
              y: isHovered ? -1 : 0,
            }}
            transition={{ duration: 0.2 }}
            className={cn("text-sm leading-relaxed text-muted-foreground", dmSans.className)}
          >
            {result.description}
          </MotionDiv>
        </div>

        <div
          className={cn(
            'absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500',
            'bg-gradient-to-br',
            result.color,
            'group-hover:opacity-[0.03]'
          )}
        />
      </div>
    </MotionDiv>
  );
}

export function FeaturesSection() {
  const { shouldAnimate } = useMountContext();

  return (
    <section className={cn("py- relative overflow-hidden", dmSans.className)}>
      {/* Updated Background Grid to match hero.tsx */}
      <div className="absolute inset-0 -z-[1]">
        {/* Static grid background - matching other sections */}
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <Container>
        {/* Section Header */}
        {shouldAnimate ? (
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("relative mb-16 text-center", dmSans.className)}
          >
            <div className={cn("mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm", dmSans.className)}>
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Real Business Impact
              </span>
            </div>

            <MotionDiv
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className={cn("mb-4 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl", dmSans.className)}>
                Proven Results for Growing Businesses
              </h2>
              <p className={cn("mx-auto max-w-2xl text-sm text-muted-foreground sm:text-lg", dmSans.className)}>
                Transform your organisations productivity with AI-powered tools that deliver measurable
                business impact.
              </p>
            </MotionDiv>
          </MotionDiv>
        ) : (
          <div className={cn("relative mb-16 text-center", dmSans.className)}>
            <div className={cn("mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm", dmSans.className)}>
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Real Business Impact
              </span>
            </div>

            <div>
              <h2 className={cn("mb-4 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl", dmSans.className)}>
                Proven Results for
                <br className="hidden sm:block" />
                Growing Businesses
              </h2>
              <p className={cn("mx-auto max-w-2xl text-sm text-muted-foreground sm:text-lg", dmSans.className)}>
                Transform how your organization works with AI-powered tools that deliver measurable
                business impact.
              </p>
            </div>
          </div>
        )}

        {/* Results Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result, index) => (
            <ResultCard key={result.name} result={result} index={index} />
          ))}
        </div>

        {/* See All Solutions Link */}
        <MotionDiv
          initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/solutions"
            className="group inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm transition-all duration-300 hover:bg-primary/20 hover:ring-primary/30"
          >
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Discover all solutions
            </span>
            <ArrowRight className="ml-2 h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
          </Link>
        </MotionDiv>
      </Container>
    </section>
  );
}
