'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Zap, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';

const missions = [
  {
    icon: Target,
    title: 'Our Purpose',
    description:
      'To revolutionise how organisations harness AI, making enterprise-grade intelligence accessible and practical for forward-thinking businesses.',
    color: 'from-[#3B00ff] to-[#3B00ff]',
    bgGradient: 'from-[#3B00ff]/10 via-[#3B00ff]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#3B00ff]/20 group-hover:via-[#3B00ff]/10 group-hover:to-transparent',
  },
  {
    icon: Lightbulb,
    title: 'Our Vision',
    description:
      'Creating a future where sophisticated AI enhances every business decision, enabling organisations to achieve unprecedented efficiency and innovation.',
    color: 'from-[#cc00ff] to-[#cc00ff]',
    bgGradient: 'from-[#cc00ff]/10 via-[#cc00ff]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#cc00ff]/20 group-hover:via-[#cc00ff]/10 group-hover:to-transparent',
  },
  {
    icon: Shield,
    title: 'Our Principles',
    description:
      'Built on transparency, security, and ethical AI development. Every solution we create upholds these foundational values.',
    color: 'from-[#00ff94] to-[#00ff94]',
    bgGradient: 'from-[#00ff94]/10 via-[#00ff94]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#00ff94]/20 group-hover:via-[#00ff94]/10 group-hover:to-transparent',
  },
  {
    icon: Zap,
    title: 'Our Innovation',
    description:
      'Pioneering new approaches to enterprise AI, delivering solutions that transform how organisations operate and compete.',
    color: 'from-[#FFA800] to-[#FFA800]',
    bgGradient: 'from-[#FFA800]/10 via-[#FFA800]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#FFA800]/20 group-hover:via-[#FFA800]/10 group-hover:to-transparent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
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
    y: 20,
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

export function AboutMission() {
  return (
    <section className="relative overflow-hidden py-16">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold">What Drives Us</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {missions.map((mission, index) => {
            const Icon = mission.icon;

            return (
              <motion.div key={mission.title} variants={cardVariants} className="group">
                <Card className="relative h-full border-transparent transition-colors duration-500 hover:border-primary/20">
                  <div className="relative flex h-full flex-col overflow-hidden p-4">
                    {/* Background Gradient */}
                    <div
                      className={`
                        absolute inset-0 bg-gradient-to-br 
                        ${mission.bgGradient} ${mission.hoverGradient} 
                        rounded-lg transition-all duration-500
                      `}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col">
                      <div className="flex items-center gap-3">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                          className={`
                            h-10 w-10 rounded-xl bg-gradient-to-br ${mission.color}
                            p-2 text-white shadow-lg
                          `}
                        >
                          <Icon className="h-full w-full" />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                          {mission.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="mt-2 text-sm text-muted-foreground">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>

      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-grid-white/10 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle 800px at 50% 50%, rgba(43, 156, 229, 0.08), transparent)',
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
    </section>
  );
}
