'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Puzzle, Crown, Mail } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Puzzle,
    title: 'Tailored Integration',
    description: 'Custom integrations built specifically for your tools and workflow.',
  },
  {
    icon: Users,
    title: 'Custom Team Size',
    description: `Need more than 20 users? We've got you covered with custom user limits.`,
  },
  {
    icon: Crown,
    title: 'Priority Everything',
    description: 'VIP support, dedicated account team, and custom SLA agreements.',
  },
];

export function EnterpriseSection() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12">
      {/* Simplified Background Elements - matching other sections */}
      <div className="absolute inset-0 -z-[1]">
        {/* Static grid background - matching other sections */}
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm"
          >
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Need Something More?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xs sm:text-lg text-muted-foreground"
          >
            Get a tailored solution that perfectly matches your needs.
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="group relative"
              >
                <div className="relative rounded-2xl border border-primary/5 bg-gradient-to-b from-background/80 to-background/40 p-4 backdrop-blur-xl">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-1.5 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center sm:mt-12"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90"
            >
              <Link href="/contact" className="flex items-center gap-2 text-white">
                Talk to Sales
                <Mail className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
      </div>
    </section>
  );
}
