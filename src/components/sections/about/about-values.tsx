'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, Users, Rocket, HeartHandshake, RefreshCcw } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';

const values = [
  {
    icon: Lightbulb,
    title: 'Cutting-edge Innovation',
    description: `Pushing the boundaries of what's possible with modern AI technology.`,
    color: 'from-[#3B00ff] to-[#3B00ff]',
    bgGradient: 'from-[#3B00ff]/10 via-[#3B00ff]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#3B00ff]/20 group-hover:via-[#3B00ff]/10 group-hover:to-transparent',
  },
  {
    icon: Users,
    title: 'Partnership Focused',
    description: 'Working closely with clients to deliver transformative solutions.',
    color: 'from-[#cc00ff] to-[#cc00ff]',
    bgGradient: 'from-[#cc00ff]/10 via-[#cc00ff]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#cc00ff]/20 group-hover:via-[#cc00ff]/10 group-hover:to-transparent',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Security',
    description: 'Enterprise-grade security and privacy protection built into every solution.',
    color: 'from-[#00ff94] to-[#00ff94]',
    bgGradient: 'from-[#00ff94]/10 via-[#00ff94]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#00ff94]/20 group-hover:via-[#00ff94]/10 group-hover:to-transparent',
  },
  {
    icon: Rocket,
    title: 'Technical Excellence',
    description: 'Uncompromising quality in our engineering and implementation.',
    color: 'from-[#FFA800] to-[#FFA800]',
    bgGradient: 'from-[#FFA800]/10 via-[#FFA800]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#FFA800]/20 group-hover:via-[#FFA800]/10 group-hover:to-transparent',
  },
  {
    icon: HeartHandshake,
    title: 'Radical Transparency',
    description: 'Clear communication and ethical AI development at our core.',
    color: 'from-[#00d9ff] to-[#00d9ff]',
    bgGradient: 'from-[#00d9ff]/10 via-[#00d9ff]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#00d9ff]/20 group-hover:via-[#00d9ff]/10 group-hover:to-transparent',
  },
  {
    icon: RefreshCcw,
    title: 'Continuous Evolution',
    description: 'Constantly refining our solutions to stay ahead of the curve.',
    color: 'from-[#ff00bf] to-[#ff00bf]',
    bgGradient: 'from-[#ff00bf]/10 via-[#ff00bf]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#ff00bf]/20 group-hover:via-[#ff00bf]/10 group-hover:to-transparent',
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

export function AboutValues() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These principles guide our decisions, shape our culture, and define how we deliver value
            to our clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div key={value.title} variants={cardVariants} className="group">
                <Card className="relative h-full border-transparent transition-colors duration-500 hover:border-primary/20">
                  <div className="relative flex h-full flex-col overflow-hidden p-4">
                    {/* Background Gradient */}
                    <div
                      className={`
                        absolute inset-0 bg-gradient-to-br 
                        ${value.bgGradient} ${value.hoverGradient} 
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
                            h-10 w-10 rounded-xl bg-gradient-to-br ${value.color}
                            p-2 text-white shadow-lg
                          `}
                        >
                          <Icon className="h-full w-full" />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                          {value.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="mt-2 text-sm text-muted-foreground">
                        {value.description}
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
