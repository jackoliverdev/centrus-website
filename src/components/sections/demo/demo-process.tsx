'use client';

import { motion } from 'framer-motion';
import { Route, MessagesSquare, Laptop, FileSearch, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Discovery Call',
    description: 'Brief consultation to understand your needs.',
    icon: MessagesSquare,
    color: 'from-[#00ff94] to-[#00ff94]',
    bgGradient: 'from-[#00ff94]/10 via-[#00ff94]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#00ff94]/20 group-hover:via-[#00ff94]/10 group-hover:to-transparent',
    duration: '15 mins',
  },
  {
    title: 'Custom Demo Prep',
    description: 'We prepare demos for your specific use cases.',
    icon: FileSearch,
    color: 'from-[#3B00ff] to-[#3B00ff]',
    bgGradient: 'from-[#3B00ff]/10 via-[#3B00ff]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#3B00ff]/20 group-hover:via-[#3B00ff]/10 group-hover:to-transparent',
    duration: 'Pre-demo',
  },
  {
    title: 'Live Walkthrough',
    description: 'Interactive demo with your real-world scenarios.',
    icon: Laptop,
    color: 'from-[#cc00ff] to-[#cc00ff]',
    bgGradient: 'from-[#cc00ff]/10 via-[#cc00ff]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#cc00ff]/20 group-hover:via-[#cc00ff]/10 group-hover:to-transparent',
    duration: '30 mins',
  },
  {
    title: 'Next Steps',
    description: 'Action plan and implementation timeline.',
    icon: CheckCircle2,
    color: 'from-[#FFA800] to-[#FFA800]',
    bgGradient: 'from-[#FFA800]/10 via-[#FFA800]/5 to-transparent',
    hoverGradient: 'group-hover:from-[#FFA800]/20 group-hover:via-[#FFA800]/10 group-hover:to-transparent',
    duration: '15 mins',
  },
];

export function DemoProcess() {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm"
        >
          <Route className="mr-2 h-4 w-4 text-primary" />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            What to Expect
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-bold"
        >
          Your Demo Experience
        </motion.h2>
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="relative rounded-xl border border-primary/5 transition-all duration-500 hover:border-primary/20 hover:shadow-lg">
              <div className="p-4">
                {/* Content */}
                <div className="flex gap-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`
                      h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br 
                      ${step.color} p-2 text-white shadow-lg
                    `}
                  >
                    <step.icon className="h-full w-full" />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-base font-semibold text-transparent transition-colors group-hover:text-primary">
                        {step.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">{step.duration}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>

              {/* Hover gradient */}
              <div
                className={`
                absolute inset-0 rounded-xl bg-gradient-to-br
                ${step.bgGradient} ${step.hoverGradient}
              `}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* After demo benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="border-t border-primary/10 pt-4"
      >
        <div className="space-y-2 text-sm text-muted-foreground">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-2"
          >
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>Detailed recap and resources shared</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-2"
          >
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>Custom implementation plan</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center gap-2"
          >
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>Personal account manager</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
