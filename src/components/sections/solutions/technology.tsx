'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Bot, ShieldCheck, Network, Share2, Zap, Clock, Target, Lock } from 'lucide-react';
import { useRef } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { useCounter } from '@/lib/hooks/use-counter';

const technologies = [
  {
    title: 'Unified AI Platform',
    description:
      'Single platform to manage all your data, empower employees, and unleash AI capabilities across your organisation.',
    Icon: Bot,
    color: 'from-[#3B00ff] to-[#3B00ff]/80',
    shadowColor: 'shadow-[#3B00ff]/20',
    bgGradient: 'from-[#3B00ff]/10 via-[#3B00ff]/5 to-transparent',
    borderColor: 'group-hover:border-[#3B00ff]/50',
    stat: { value: '100', suffix: '%' },
  },
  {
    title: 'Role-Based Access',
    description:
      'Control who sees what with simple team permissions. Set data access tags for different departments and users.',
    Icon: ShieldCheck,
    color: 'from-[#cc00ff] to-[#cc00ff]/80',
    shadowColor: 'shadow-[#cc00ff]/20',
    bgGradient: 'from-[#cc00ff]/10 via-[#cc00ff]/5 to-transparent',
    borderColor: 'group-hover:border-[#cc00ff]/50',
    stat: { value: '100', suffix: '%' },
  },
  {
    title: 'Seamless Integration',
    description:
      'Connect with your existing tools and systems through our powerful integration capabilities.',
    Icon: Network,
    color: 'from-[#00ff94] to-[#00ff94]/80',
    shadowColor: 'shadow-[#00ff94]/20',
    bgGradient: 'from-[#00ff94]/10 via-[#00ff94]/5 to-transparent',
    borderColor: 'group-hover:border-[#00ff94]/50',
    stat: { value: '100', suffix: '%' },
  },
  {
    title: 'Knowledge Sharing',
    description:
      'Foster collaboration by sharing insights and knowledge securely across your organisation.',
    Icon: Share2,
    color: 'from-[#FFA800] to-[#FFA800]/80',
    shadowColor: 'shadow-[#FFA800]/20',
    bgGradient: 'from-[#FFA800]/10 via-[#FFA800]/5 to-transparent',
    borderColor: 'group-hover:border-[#FFA800]/50',
    stat: { value: '100', suffix: '%' },
  },
  {
    title: 'Increased Efficiency',
    description:
      'Reduce manual work and streamline processes with AI-powered automation that saves time and resources.',
    Icon: Zap,
    color: 'from-[#00d9ff] to-[#00d9ff]/80',
    shadowColor: 'shadow-[#00d9ff]/20',
    bgGradient: 'from-[#00d9ff]/10 via-[#00d9ff]/5 to-transparent',
    borderColor: 'group-hover:border-[#00d9ff]/50',
    stat: { value: '100', suffix: '%' },
  },
  {
    title: '24/7 Availability',
    description:
      'Access your AI-powered solutions around the clock, ensuring continuous support and productivity.',
    Icon: Clock,
    color: 'from-[#ff00bf] to-[#ff00bf]/80',
    shadowColor: 'shadow-[#ff00bf]/20',
    bgGradient: 'from-[#ff00bf]/10 via-[#ff00bf]/5 to-transparent',
    borderColor: 'group-hover:border-[#ff00bf]/50',
    stat: { value: '100', suffix: '%' },
  },
  {
    title: 'Enhanced Accuracy',
    description:
      'Achieve unprecedented precision in data processing and analysis with advanced AI algorithms.',
    Icon: Target,
    color: 'from-[#ffed00] to-[#ffed00]/80',
    shadowColor: 'shadow-[#ffed00]/20',
    bgGradient: 'from-[#ffed00]/10 via-[#ffed00]/5 to-transparent',
    borderColor: 'group-hover:border-[#ffed00]/50',
    stat: { value: '100', suffix: '%' },
  },
  {
    title: 'Enterprise Security',
    description:
      'Industry-standard encryption keeps your company data private and secure at all times.',
    Icon: Lock,
    color: 'from-[#ff005c] to-[#ff005c]/80',
    shadowColor: 'shadow-[#ff005c]/20',
    bgGradient: 'from-[#ff005c]/10 via-[#ff005c]/5 to-transparent',
    borderColor: 'group-hover:border-[#ff005c]/50',
    stat: { value: '100', suffix: '%' },
  },
];

function StatCounter({
  value,
  suffix = '',
  delay = 0,
}: {
  value: string;
  suffix?: string;
  delay?: number;
}) {
  const { formattedCount, setRef } = useCounter({
    end: parseInt(value),
    duration: 2000,
    delay,
    formatter: num => `${num}${suffix}`,
  });

  return <span ref={setRef}>{formattedCount}</span>;
}

function TechCard({
  tech,
  index,
  isInView,
}: {
  tech: (typeof technologies)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = tech.Icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 20,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <Card
        className={`
        group relative h-full border-transparent bg-background/50 
        backdrop-blur-sm transition-all duration-500 
        ${tech.borderColor} hover:scale-[1.02] ${tech.shadowColor}
      `}
      >
        <CardContent className="relative overflow-hidden p-6">
          {/* Background Gradient */}
          <div
            className={`
            absolute inset-0 bg-gradient-to-br ${tech.bgGradient} 
            opacity-0 transition-opacity duration-500 group-hover:opacity-100
          `}
          />

          <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_70%)]" />

          {/* Content Container */}
          <div className="relative z-10 flex min-h-[180px] flex-col">
            {/* Icon Container */}
            <div className="mb-4 flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${tech.color} p-2.5 text-white shadow-lg`}
              >
                <Icon className="h-full w-full" />
              </motion.div>

              {/* Stat Counter */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br bg-clip-text text-lg font-bold text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${tech.color.replace('from-', '').replace('to-', '')})`,
                }}
              >
                <StatCounter
                  value={tech.stat.value}
                  suffix={tech.stat.suffix}
                  delay={index * 100}
                />
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="flex flex-1 flex-col">
              <h3 className="mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-lg font-semibold text-transparent transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80">
                {tech.title}
              </h3>
              <p className="flex-1 text-sm text-muted-foreground">{tech.description}</p>
            </div>

            {/* Hover Line Effect */}
            <motion.div
              className={`absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r ${tech.color}`}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function TechnologySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* Background Effects - updated to match consistent style */}
      <div className="absolute inset-0 -z-[1]">
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_70%)]" />
      </div>

      <Container className='py-0'>
        <motion.div style={{ opacity, scale }} className="space-y-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-center"
          >
            <div className="relative inline-block">
              <h2 className="relative text-2xl sm:text-4xl font-bold">Why choose Centrus AI?</h2>
            </div>
            <p className="mx-auto max-w-2xl text-xs sm:text-base text-muted-foreground">
              Experience the future of enterprise AI with our comprehensive suite of solutions
            </p>
          </motion.div>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <TechCard key={tech.title} tech={tech} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
