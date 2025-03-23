import * as React from 'react';
import { motion, MotionValue, useMotionTemplate, useTransform, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';
import { variants, springs } from '@/lib/utils/chat-animations';

interface MessageBubbleProps {
  children: React.ReactNode;
  className?: string;
  position?: 'left' | 'right';
  avatar?: React.ReactNode;
  timestamp?: string;
  scrollProgress?: MotionValue<number>;
  showTimestamp?: boolean;
  messageIndex?: number;
  isTyping?: boolean;
  shouldAnimate?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const MessageBubble = React.forwardRef<HTMLDivElement, MessageBubbleProps>(
  (
    {
      children,
      className,
      position = 'left',
      avatar,
      timestamp,
      scrollProgress,
      showTimestamp = true,
      messageIndex = 0,
      isTyping = false,
      shouldAnimate = true,
      header,
      footer,
      ...props
    },
    ref
  ) => {
    // Calculate animation values based on scroll progress
    const opacity = scrollProgress
      ? useTransform(scrollProgress, [messageIndex * 0.1, messageIndex * 0.1 + 0.1], [0, 1])
      : undefined;

    const x = scrollProgress
      ? useTransform(
          scrollProgress,
          [messageIndex * 0.1, messageIndex * 0.1 + 0.1],
          position === 'left' ? [-20, 0] : [20, 0]
        )
      : undefined;

    // Generate dynamic styles based on position
    const bubbleStyles = cn(
      // Base styles
      'relative w-[95%] sm:w-[90%] md:w-[85%] rounded-2xl p-4 ',
      'shadow-sm backdrop-blur-sm',
      // Position-specific styles
      position === 'left'
        ? ['ml-2 rounded-tl-none', 'bg-background/50 text-foreground', 'border border-primary/10']
        : [
            'mr-2 rounded-tr-none',
            'text-primary-foreground bg-primary/20',
            'border border-primary/10',
          ],
      // Custom classes
      className
    );

    const containerStyles = cn(
      'flex w-full items-start gap-3 ',
      position === 'right' && 'flex-row-reverse '
    );

    // Subtle gradient animation for the background
    const gradientX = useMotionTemplate`${useTransform(
      scrollProgress || useMotionValue(0),
      [0, 0.5, 1],
      ['0%', '100%', '0%']
    )}`;

    return (
      <motion.div
        ref={ref}
        className={containerStyles}
        initial={shouldAnimate ? { opacity: 0, x: position === 'left' ? -20 : 20 } : undefined}
        animate={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
        style={scrollProgress ? { opacity, x } : undefined}
        transition={springs.gentle}
        {...props}
      >
        {/* Avatar */}
        {avatar && (
          <motion.div
            initial={shouldAnimate ? { scale: 0 } : undefined}
            animate={shouldAnimate ? { scale: 1 } : undefined}
            transition={{ ...springs.bouncy, delay: 0.1 }}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
          >
            {avatar}
          </motion.div>
        )}

        {/* Message Content */}
        <div
          className={`flex-1 space-y-1  ${position === 'right' ? 'flex w-full flex-col items-end' : ''}`}
        >
          {/* Header if provided */}

          {header && (
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: -10 } : undefined}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              transition={{ ...springs.gentle, delay: 0.2 }}
              className="mb-2"
            >
              {header}
            </motion.div>
          )}

          {/* Message Bubble */}
          <div className={bubbleStyles}>
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-30 "
              style={{
                background: useMotionTemplate`linear-gradient(
                90deg,
                transparent,
                rgba(var(--primary-rgb), 0.05) ${gradientX},
                transparent
              )`,
              }}
            />

            {/* Message content */}
            <div className="relative z-10">{children}</div>

            {/* Typing indicator dots */}
            {isTyping && (
              <motion.div
                className="absolute -bottom-2 left-2 flex gap-1"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-1 w-1 rounded-full bg-primary/30" />
                ))}
              </motion.div>
            )}
          </div>

          {/* Footer if provided */}
          {footer && (
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 10 } : undefined}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              transition={{ ...springs.gentle, delay: 0.2 }}
              className="mt-2"
            >
              {footer}
            </motion.div>
          )}

          {/* Timestamp */}
          {showTimestamp && timestamp && (
            <motion.div
              initial={shouldAnimate ? { opacity: 0 } : undefined}
              animate={shouldAnimate ? { opacity: 0.6 } : undefined}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-1 text-xs text-muted-foreground "
            >
              {timestamp}
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  }
);

MessageBubble.displayName = 'MessageBubble';
