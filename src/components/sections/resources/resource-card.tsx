'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ResourceCardProps {
  resource: {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    color: string;
    glowColor: string;
  };
}

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

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = resource.icon;

  return (
    <motion.div variants={itemVariants} className="group relative">
      <Link
        href={resource.href}
        className="relative block h-full rounded-xl border
          border-primary/5 bg-gradient-to-br from-background/50
          to-background/90 p-6
          transition-all duration-500
          hover:border-primary/20 hover:shadow-lg"
      >
        <div className="flex items-start gap-4">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-primary/10 bg-background/50 p-2 backdrop-blur-sm">
            <Icon className="h-6 w-6 text-primary" />
          </div>

          <div className="space-y-2 pt-1">
            <h3 className="bg-gradient-to-br from-foreground to-foreground/90 bg-clip-text text-xl font-semibold text-transparent">
              {resource.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{resource.description}</p>
          </div>

          <ArrowRight className="h-5 w-5 text-primary/40 transition-transform group-hover:translate-x-1" />
        </div>

        {/* Gradient Background */}
        <div
          className={`
          absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 transition-opacity
          duration-500 ${resource.color}
          group-hover:opacity-[0.03]
        `}
        />
      </Link>
    </motion.div>
  );
}
