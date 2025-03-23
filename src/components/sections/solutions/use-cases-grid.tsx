'use client';

import { motion } from 'framer-motion';
import {
  Search,
  FileText,
  MessageSquare,
  BarChart,
  Pencil,
  Mail,
  Globe,
  Database,
} from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { useCounter } from '@/lib/hooks/use-counter';

const useCases = [
  {
    title: 'Document Search',
    description:
      'Instantly find any information across your organisation with AI-powered search and intelligent retrieval.',
    icon: Search,
    color: 'from-[#3B00ff] to-[#3B00ff]',
    bgGradient: 'from-[#3B00ff]/10 via-[#3B00ff]/5 to-transparent',
    hoverGradient:
      'group-hover:from-[#3B00ff]/20 group-hover:via-[#3B00ff]/10 group-hover:to-transparent',
    stats: {
      value: '80',
      suffix: '%',
      label: 'Faster Info Retrieval',
    },
  },
  {
    title: 'Document Analysis',
    description:
      'Transform complex documents into actionable insights with automated analysis and pattern recognition.',
    icon: FileText,
    color: 'from-[#cc00ff] to-[#cc00ff]',
    bgGradient: 'from-[#cc00ff]/10 via-[#cc00ff]/5 to-transparent',
    hoverGradient:
      'group-hover:from-[#cc00ff]/20 group-hover:via-[#cc00ff]/10 group-hover:to-transparent',
    stats: {
      value: '65',
      suffix: '%',
      label: 'Time Saved in Analysis',
    },
  },
  {
    title: 'AI Chat Support',
    description:
      'Deliver instant, accurate responses to employee queries with 24/7 AI-powered support assistance.',
    icon: MessageSquare,
    color: 'from-[#00ff94] to-[#00ff94]',
    bgGradient: 'from-[#00ff94]/10 via-[#00ff94]/5 to-transparent',
    hoverGradient:
      'group-hover:from-[#00ff94]/20 group-hover:via-[#00ff94]/10 group-hover:to-transparent',
    stats: {
      value: '85',
      suffix: '%',
      label: 'Query Resolution Rate',
    },
  },
  {
    title: 'Data Analytics',
    description:
      'Convert raw data into actionable insights with AI-powered analysis for confident decision making.',
    icon: BarChart,
    color: 'from-[#FFA800] to-[#FFA800]',
    bgGradient: 'from-[#FFA800]/10 via-[#FFA800]/5 to-transparent',
    hoverGradient:
      'group-hover:from-[#FFA800]/20 group-hover:via-[#FFA800]/10 group-hover:to-transparent',
    stats: {
      value: '3',
      suffix: 'x',
      label: 'Faster Decision Making',
    },
  },
  {
    title: 'Content Creation',
    description:
      'Generate high-quality content with AI assistance while maintaining consistent brand voice.',
    icon: Pencil,
    color: 'from-[#00d9ff] to-[#00d9ff]',
    bgGradient: 'from-[#00d9ff]/10 via-[#00d9ff]/5 to-transparent',
    hoverGradient:
      'group-hover:from-[#00d9ff]/20 group-hover:via-[#00d9ff]/10 group-hover:to-transparent',
    stats: {
      value: '70',
      suffix: '%',
      label: 'Time Saved',
    },
  },
  {
    title: 'Sales Enablement',
    description:
      'Create personalised sales communications at scale with AI-optimised engagement strategies.',
    icon: Mail,
    color: 'from-[#ff00bf] to-[#ff00bf]',
    bgGradient: 'from-[#ff00bf]/10 via-[#ff00bf]/5 to-transparent',
    hoverGradient:
      'group-hover:from-[#ff00bf]/20 group-hover:via-[#ff00bf]/10 group-hover:to-transparent',
    stats: {
      value: '2.5',
      suffix: 'x',
      label: 'Higher Response Rate',
    },
  },
  {
    title: 'Market Report Analysis',
    description:
      'Extract key insights from market research reports and industry analysis documents quickly and efficiently.',
    icon: Globe,
    color: 'from-[#ffed00] to-[#ffed00]',
    bgGradient: 'from-[#ffed00]/10 via-[#ffed00]/5 to-transparent',
    hoverGradient:
      'group-hover:from-[#ffed00]/20 group-hover:via-[#ffed00]/10 group-hover:to-transparent',
    stats: {
      value: '75',
      suffix: '%',
      label: 'Faster Report Analysis',
    },
  },
  {
    title: 'Knowledge Extraction',
    description:
      'Transform unstructured data into structured insights with AI-powered information processing.',
    icon: Database,
    color: 'from-[#ff005c] to-[#ff005c]',
    bgGradient: 'from-[#ff005c]/10 via-[#ff005c]/5 to-transparent',
    hoverGradient:
      'group-hover:from-[#ff005c]/20 group-hover:via-[#ff005c]/10 group-hover:to-transparent',
    stats: {
      value: '60',
      suffix: '%',
      label: 'Data Efficiency',
    },
  },
] as const;

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      mass: 0.8,
    },
  },
};

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

export function UseCasesGrid() {
  return (
    <section className="relative overflow-hidden">
      {/* Background pattern - updated to match consistent style */}
      <div className="absolute inset-0 -z-[1]">
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="relative inline-block">
            <h2 className="relative text-2xl sm:text-4xl font-bold">Transform Your Workflow</h2>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Discover how our AI solutions can revolutionise different aspects of your business
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;

            return (
              <motion.div key={useCase.title} variants={cardVariants} className="group h-full">
                <Card className="relative h-full border-transparent transition-colors duration-500 hover:border-primary/20">
                  <div className="relative flex h-full flex-col overflow-hidden p-6">
                    {/* Background Gradient */}
                    <div
                      className={`
                      absolute inset-0 bg-gradient-to-br 
                      ${useCase.bgGradient} ${useCase.hoverGradient} 
                      rounded-lg transition-all duration-500
                    `}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                        className={`
                          h-12 w-12 rounded-xl bg-gradient-to-br ${useCase.color}
                          mb-4 p-2.5 text-white shadow-lg
                        `}
                      >
                        <Icon className="h-full w-full" />
                      </motion.div>

                      {/* Title & Description */}
                      <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
                        {useCase.title}
                      </h3>
                      <p className="mb-6 text-sm text-muted-foreground">{useCase.description}</p>

                      {/* Stats */}
                      <div className="mt-auto flex items-baseline gap-2">
                        <div className="text-2xl font-bold text-primary">
                          <StatCounter
                            value={useCase.stats.value}
                            suffix={useCase.stats.suffix}
                            delay={Math.floor(index / 4) * 200 + (index % 4) * 100}
                          />
                        </div>
                        <div className="text-sm text-muted-foreground">{useCase.stats.label}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
