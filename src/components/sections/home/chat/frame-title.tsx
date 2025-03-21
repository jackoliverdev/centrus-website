'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FrameTitleProps {
  title?: string;
  className?: string;
}

export const FrameTitle = React.forwardRef<HTMLDivElement, FrameTitleProps>(
  ({ title, className }, ref) => {
    if (!title) return null;
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          ref={ref}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute top-0 left-0 right-0 z-20',
            'border-b border-primary/10',
            'bg-background/80 backdrop-blur-sm',
            'px-4 py-2.5',
            'text-sm font-medium text-primary/80',
            className
          )}
        >
          {title}
        </motion.div>
      </AnimatePresence>
    );
  }
);

FrameTitle.displayName = 'FrameTitle';
