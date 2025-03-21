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
            'absolute right-0 md:right-auto md:left-1/2 -top-6 -translate-x-1/2 -translate-y-full',
            'rounded-t-lg bg-primary/10 px-3 py-1 backdrop-blur-sm',
            'text-xs font-medium text-primary/80 md:text-sm',
            'border-x border-t border-primary/10',
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
