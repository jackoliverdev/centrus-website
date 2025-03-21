'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Book, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const SPRING_CONFIG = { stiffness: 100, damping: 30, mass: 1 };

const contactOptions = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'For general inquiries and support',
    primary: {
      label: 'hello@centrus.ai',
      href: 'mailto:hello@centrus.ai',
    },
    secondary: {
      label: 'support@centrus.ai',
      href: 'mailto:support@centrus.ai',
    },
    color: '#2B9CE5', // primary
    gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: '24/7 chat support for urgent issues',
    primary: {
      label: 'Start Chat',
      href: '#open-chat',
    },
    secondary: {
      label: 'Average response time: 5 mins',
      href: null,
    },
    color: '#00CC88', // accent
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
  },
  {
    icon: Book,
    title: 'Documentation',
    description: 'Explore guides and technical docs',
    primary: {
      label: 'View Documentation',
      href: '/resources/docs',
    },
    secondary: {
      label: 'Learn how to integrate and use Centrus AI',
      href: null,
    },
    color: '#9500FF', // secondary
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
  },
];

export function ContactOptions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_CONFIG}
      className="flex h-full flex-col justify-start"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING_CONFIG, delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold">Other Ways to Connect</h2>
        <p className="mt-2 text-muted-foreground">
          Choose the communication method that works best for you
        </p>
      </motion.div>

      {/* Options */}
      <div className="space-y-6">
        {contactOptions.map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...SPRING_CONFIG, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-primary/50 before:via-primary/10 before:to-transparent before:p-[1px]">
              <div className="relative rounded-xl bg-gradient-to-b from-background/80 to-background/40 p-6 backdrop-blur-xl">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${option.gradient} rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative flex gap-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={SPRING_CONFIG}
                    className="shrink-0"
                  >
                    <div
                      className="rounded-lg p-3 transition-colors duration-300"
                      style={{
                        backgroundColor: `${option.color}20`,
                        color: option.color,
                      }}
                    >
                      <option.icon className="h-6 w-6" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-medium">{option.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>

                    <div className="mt-4 space-y-2">
                      {/* Primary Action */}
                      {option.primary.href ? (
                        <Button
                          asChild
                          variant="ghost"
                          className="group/button -ml-3 px-3 hover:bg-transparent"
                        >
                          <Link
                            href={option.primary.href}
                            className="inline-flex items-center text-sm font-medium hover:text-primary"
                            style={{ color: option.color }}
                          >
                            {option.primary.label}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                          </Link>
                        </Button>
                      ) : (
                        <span className="text-sm font-medium" style={{ color: option.color }}>
                          {option.primary.label}
                        </span>
                      )}

                      {/* Secondary Info */}
                      {option.secondary.href ? (
                        <Button
                          asChild
                          variant="ghost"
                          className="-ml-3 px-3 hover:bg-transparent"
                        >
                          <Link
                            href={option.secondary.href}
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            {option.secondary.label}
                          </Link>
                        </Button>
                      ) : (
                        <p className="text-sm text-muted-foreground">{option.secondary.label}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[1px]"
                  style={{
                    background: `linear-gradient(to right, transparent, ${option.color}40, transparent)`,
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
