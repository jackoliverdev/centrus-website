'use client';

import * as React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { springs } from '@/lib/utils/chat-animations';
import { MessageBubble } from './message-bubble';
import { SourceReference } from './source-reference';
import { ThinkingState } from './thinking-state';

interface CentrusMessageProps {
  text: string;
  timestamp?: string;
  source?: {
    filename: string;
    url?: string;
  };
  scrollProgress?: MotionValue<number>;
  sourceOpacity?: MotionValue<number>;
  isThinking?: boolean;
  scrollDirection?: 'up' | 'down';
  messageIndex?: number;
  className?: string;
  onSourceClick?: (source: string) => void;
}

export const CentrusMessage = React.forwardRef<HTMLDivElement, CentrusMessageProps>(
  (
    {
      text,
      timestamp = 'Just now',
      source,
      scrollProgress,
      sourceOpacity,
      isThinking = false,
      scrollDirection = 'down',
      messageIndex = 0,
      className,
      onSourceClick,
      ...props
    },
    ref
  ) => {
    // Track typing state
    const [typingState, setTypingState] = React.useState({
      typedText: '',
      isComplete: false,
      progress: 0,
    });

    const typingTimerRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      // Ensure typewriter effect starts when scrolling begins
      if (!isThinking && scrollProgress) {
        const updateTypingState = (latest: number) => {
          // Avoid multiple state updates by ensuring progress doesn't change rapidly
          if (typingState.progress !== latest) {
            setTypingState(prev => ({
              ...prev,
              typedText: text.slice(0, Math.floor(latest * text.length)),
              progress: latest,
              isComplete: latest === 1,
            }));
          }
        };

        // Trigger progress updates
        const unsubscribe = scrollProgress.on('change', updateTypingState);
        return () => unsubscribe?.();
      }
    }, [scrollProgress, isThinking, typingState.progress, text]);

    // Avatar component
    const avatar = (
      <motion.div
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center 
                 rounded-full border border-primary/20 bg-primary/20
                 backdrop-blur-sm"
        whileHover={{ rotate: 15 }}
        transition={springs.bouncy}
      >
        <Bot className="h-4 w-4 text-primary" />
      </motion.div>
    );

    // If in thinking state, render just the thinking indicator
    if (isThinking) {
      return <ThinkingState />;
    }

    return (
      <MessageBubble
        ref={ref}
        position="right"
        avatar={avatar}
        timestamp={typingState.isComplete ? timestamp : undefined}
        className={cn(
          'group transition-all duration-300',
          'bg-gradient-to-br from-primary/20 to-primary/10',
          'mb-1 hover:from-primary/25 hover:to-primary/15',
          className
        )}
        {...props}
      >
        <div className="relative space-y-4 ">
          {/* Message content */}
          <span className="text-primary-foreground/90 text-sm font-medium leading-relaxed sm:text-base">
            {typingState.typedText}
          </span>

          {/* Typing cursor */}
          {!typingState.isComplete && (
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-0.5 inline-block h-4 w-0.5 bg-primary/50 align-middle"
            />
          )}

          {/* Source reference */}
          {source && typingState.isComplete && (
            <motion.div
              style={{ opacity: sourceOpacity }}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="mt-4 pt-2 border-t border-primary/25"
            >
              <SourceReference
                filename={source.filename}
                url={source.url}
                onSourceClick={url => {
                  if (url && onSourceClick) {
                    onSourceClick(url);
                  }
                }}
              />
            </motion.div>
          )}
        </div>

        {/* Gradient background */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl 
                   bg-gradient-to-r from-primary/5 to-transparent opacity-0
                   transition-opacity duration-300 group-hover:opacity-100"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </MessageBubble>
    );
  }
);

CentrusMessage.displayName = 'CentrusMessage';
