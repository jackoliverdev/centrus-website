'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Users,
  Clock,
  FileText,
  MessageSquare,
  Settings,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const SPRING_CONFIG = { stiffness: 100, damping: 30, mass: 1 };

const expectations = [
  {
    title: 'AI Capabilities Demo',
    description: 'See our advanced AI models in action with your specific use cases',
    icon: Brain,
    color: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
    hoverGradient:
      'group-hover:from-blue-500/20 group-hover:via-blue-500/10 group-hover:to-transparent',
  },
  {
    title: 'Technical Deep Dive',
    description: 'Detailed walkthrough of integration options and implementation',
    icon: Settings,
    color: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
    hoverGradient:
      'group-hover:from-purple-500/20 group-hover:via-purple-500/10 group-hover:to-transparent',
  },
  {
    title: 'Q&A Session',
    description: 'Direct discussion with our product experts about your needs',
    icon: MessageSquare,
    color: 'from-emerald-500 to-emerald-600',
    bgGradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    hoverGradient:
      'group-hover:from-emerald-500/20 group-hover:via-emerald-500/10 group-hover:to-transparent',
  },
  {
    title: 'Custom Roadmap',
    description: 'Get a tailored implementation plan and timeline',
    icon: FileText,
    color: 'from-amber-500 to-amber-600',
    bgGradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    hoverGradient:
      'group-hover:from-amber-500/20 group-hover:via-amber-500/10 group-hover:to-transparent',
  },
];

const afterDemo = [
  {
    text: 'Detailed recap and resources shared via email',
    icon: CheckCircle2,
  },
  {
    text: 'Access to documentation and integration guides',
    icon: FileText,
  },
  {
    text: 'Follow-up session if needed',
    icon: Users,
  },
];

export function DemoExpectations() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING_CONFIG}
          className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm"
        >
          <Sparkles className="mr-2 h-4 w-4 text-primary" />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            What to Expect
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_CONFIG, delay: 0.1 }}
          className="text-3xl font-bold sm:text-3xl"
        >
          Your Demo Experience
        </motion.h2>
      </div>

      {/* Main Expectations Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {expectations.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...SPRING_CONFIG,
              delay: 0.2 + index * 0.1,
            }}
            className="group relative"
          >
            <div className="relative rounded-xl border border-transparent transition-colors duration-500 hover:border-primary/20">
              <div className="relative overflow-hidden rounded-xl p-6">
                {/* Background Gradient */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-br ${item.bgGradient} ${item.hoverGradient}
                  rounded-xl opacity-0 transition-all duration-500 group-hover:opacity-100
                `}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={SPRING_CONFIG}
                    className={`
                      h-12 w-12 rounded-xl bg-gradient-to-br ${item.color}
                      mb-4 p-2.5 text-white shadow-lg
                    `}
                  >
                    <item.icon className="h-full w-full" />
                  </motion.div>

                  <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* After Demo Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING_CONFIG, delay: 0.6 }}
        className="relative rounded-xl border border-primary/10 bg-primary/5 p-6"
      >
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <Clock className="h-5 w-5 text-primary" />
          After Your Demo
        </h3>
        <div className="space-y-3">
          {afterDemo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ...SPRING_CONFIG,
                delay: 0.7 + index * 0.1,
              }}
              className="flex items-center gap-3 text-sm"
            >
              <item.icon className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-muted-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
