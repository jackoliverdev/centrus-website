'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Bot, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThinkingStateProps {
  className?: string;
}

const ThinkingDots = () => (
  <div className="flex gap-1">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-primary/60"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.2,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

export const ThinkingState = React.forwardRef<HTMLDivElement, ThinkingStateProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ml-auto flex w-fit', // Right align
          'bg-primary/10 backdrop-blur-sm',
          'rounded-2xl border border-primary/30',
          'space-x-3 p-3',
          className
        )}
        {...props}
      >
        {/* Avatar */}
        <div
          className="flex size-10 items-center justify-center 
                    rounded-full border border-primary/30 bg-primary/20"
        >
          <Bot className="size-6 text-primary/70" />
        </div>

        {/* Content */}
        <div className="flex items-center space-x-5">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-primary/70">Centrus AI</span>
            <span className="text-xs text-primary/50">thinking...</span>
          </div>

          {/* Loading indicators */}
          <div className="flex items-center space-x-2">
            {/* <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Loader2 className="size-3 text-primary/50" />
            </motion.div> */}
            <ThinkingDots />
          </div>
        </div>
      </div>
    );
  }
);

ThinkingState.displayName = 'ThinkingState';
