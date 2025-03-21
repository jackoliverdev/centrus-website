'use client';

import { motion } from 'framer-motion';
import { FileText, Newspaper, BookOpen, Lightbulb } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const resources = [
  {
    title: 'Prompt Library',
    description:
      'Curated collection of optimized prompts to enhance your AI interactions. Get better results with our tested prompt templates.',
    icon: Lightbulb,
    href: '/resources/prompt-library',
    color: 'from-orange-500 to-orange-600',
    glowColor: 'group-hover:shadow-orange-500/20',
    stat: '100+ Prompts',
    detail: 'Community tested',
  },
  {
    title: 'Blog',
    description:
      'Latest insights and thought leadership about AI, knowledge management, and digital transformation. Stay updated with industry trends.',
    icon: Newspaper,
    href: '/resources/blog',
    color: 'from-[#10b981] to-[#059669]',
    glowColor: 'group-hover:shadow-[#10b981]/30',
    stat: '50+ Articles',
    detail: 'Weekly insights',
  },
  {
    title: 'Documentation',
    description:
      'Technical guides and API documentation. Learn how to integrate and use Centrus AI effectively with our comprehensive developer resources.',
    icon: FileText,
    href: '/resources/docs',
    color: 'from-[#2b9ce5] to-[#2b9ce5]/80',
    glowColor: 'group-hover:shadow-[#2b9ce5]/20',
    stat: '200+ Guides',
    detail: 'Updated daily',
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
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

export function ResourcesGrid() {
  return (
    <section className="relative pb-24">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {resources.map(resource => (
            <Link key={resource.title} href={resource.href} className="group relative">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                  },
                }}
                className={cn(
                  'relative h-full rounded-xl p-8',
                  'bg-gradient-to-br from-background/50 to-background/90',
                  'border border-primary/5',
                  'transition-colors duration-500',
                  'group-hover:border-primary/20',
                  'group-hover:shadow-2xl',
                  'will-change-transform',
                  resource.glowColor
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
                    resource.color
                  )}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-primary/10 bg-background/50 backdrop-blur-sm">
                    <resource.icon className="h-7 w-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <motion.div initial={false} animate={{ y: 0 }} className="space-y-2">
                    <h3 className="bg-gradient-to-br from-foreground to-foreground/90 bg-clip-text text-xl font-bold text-transparent">
                      {resource.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {resource.description}
                    </p>
                  </motion.div>

                  {/* Stats and Button */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="space-y-1">
                      <div className="bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-sm font-semibold text-transparent">
                        {resource.stat}
                      </div>
                      <div className="text-xs text-muted-foreground">{resource.detail}</div>
                    </div>

                    <div className="group/btn relative">
                      <motion.div
                        initial={false}
                        className={cn(
                          'relative overflow-hidden rounded-full px-4 py-2',
                          'bg-background/50 backdrop-blur-sm',
                          'border border-primary/10',
                          'transition-all duration-300 ease-out',
                          'flex items-center gap-2',
                          'w-[110px]',
                          'hover:border-primary hover:bg-primary'
                        )}
                      >
                        <motion.span
                          initial={false}
                          className={cn(
                            'whitespace-nowrap text-sm font-medium',
                            'transition-colors duration-300',
                            'bg-gradient-to-r bg-clip-text text-transparent group-hover/btn:text-background',
                            resource.color
                          )}
                        >
                          Explore
                        </motion.span>

                        <div className="relative h-4 w-4">
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={cn(
                              'transition-all duration-300',
                              'group-hover/btn:translate-x-1 group-hover/btn:stroke-background',
                              'relative'
                            )}
                          >
                            <motion.path
                              initial={false}
                              animate={{
                                pathLength: 1,
                                opacity: 1,
                              }}
                              d="M5 12h14"
                            />
                            <motion.path
                              initial={false}
                              animate={{
                                pathLength: 1,
                                opacity: 1,
                              }}
                              d="m12 5 7 7-7 7"
                            />
                          </motion.svg>
                        </div>
                      </motion.div>

                      {/* Glowing background effect on button hover */}
                      <motion.div
                        initial={false}
                        whileHover={{ opacity: 0.08 }}
                        className={cn(
                          'absolute inset-0 -z-10',
                          'rounded-full blur-sm',
                          'transition-opacity duration-300',
                          'opacity-0',
                          'bg-gradient-to-r',
                          resource.color
                        )}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </Container>

      {/* Decorative background elements */}
      <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl">
        <div
          className="aspect-[1100/600] w-[68.75rem] bg-gradient-to-l from-primary/20 to-primary/5 opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}
