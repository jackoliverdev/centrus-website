'use client';

import * as React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { springs } from '@/lib/utils/chat-animations';
import { useTypewriter } from '@/lib/hooks/use-typewriter';
import { MessageBubble } from './message-bubble';

interface EmployeeMessageProps {
  text: string;
  timestamp?: string;
  tags?: string[];
  scrollProgress?: MotionValue<number>;
  messageIndex?: number;
  className?: string;
  scrollDirection?: 'up' | 'down';
}

const MessageTags = ({ tags, isVisible }: { tags: string[]; isVisible: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
    transition={{ ...springs.gentle, delay: 0.2 }}
    className="flex gap-2"
  >
    {tags.map(tag => (
      <span
        key={tag}
        className="rounded-full border border-primary/10 bg-primary/5 px-2 
                   py-1 text-xs text-primary/50 backdrop-blur-sm"
      >
        {tag}
      </span>
    ))}
  </motion.div>
);

export const EmployeeMessage = React.forwardRef<HTMLDivElement, EmployeeMessageProps>(
  (
    {
      text,
      timestamp = 'Just now',
      tags = [],
      scrollProgress,
      messageIndex = 0,
      scrollDirection = 'down',
      className,
      ...props
    },
    ref
  ) => {
    // Setup typewriter effect
    const { getTypedText } = useTypewriter(text, scrollProgress || new MotionValue(0), {
      scrollDirection,
      maxSpeed: 50,
      minSpeed: 10,
      smoothing: 0.1,
    });

    // Get current typing state
    const [typingState, setTypingState] = React.useState({
      typedText: '',
      isComplete: false,
      progress: 0,
    });

    const typingTimerRef = React.useRef<NodeJS.Timeout | null>(null);

    // Update typing state manually using scrollProgress
    React.useEffect(() => {
      // Ensure typewriter effect starts when scrolling begins
      if (scrollProgress) {
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
    }, [scrollProgress, text, typingState.progress]);

    // Ensure typing continues until the message is fully typed
    // React.useEffect(() => {
    //   if (typingState.isComplete) return; // Stop when fully typed

    //   if (typingTimerRef.current) clearInterval(typingTimerRef.current); // Clear previous timer

    //   typingTimerRef.current = setInterval(() => {
    //     if (typingState.progress < 1) {
    //       setTypingState(prev => ({
    //         ...prev,
    //         typedText: text.slice(0, Math.floor((prev.progress + 0.05) * text.length)),
    //         progress: prev.progress + 0.05,
    //       }));
    //     } else {
    //       clearInterval(typingTimerRef.current!); // Stop when text is complete
    //     }
    //   }, 100); // Adjust typing speed here (lower = faster)

    //   return () => clearInterval(typingTimerRef.current!);
    // }, [typingState, text]);

    // React.useEffect(() => {
    //   if (scrollProgress) {
    //     const unsubscribe = scrollProgress.on('change', latest => {
    //       setTypingState(getTypedText(latest));
    //     });
    //     return () => unsubscribe();
    //   }
    // }, [scrollProgress, getTypedText]);

    // const typingTimerRef = React.useRef<NodeJS.Timeout | null>(null);
    // // Update typing state based on scroll progress
    // React.useEffect(() => {
    //   if (scrollProgress) {
    //     const unsubscribe = scrollProgress.on('change', (latest: number) => {
    //       if (typingTimerRef.current) clearInterval(typingTimerRef.current);

    //       typingTimerRef.current = setInterval(() => {
    //         if (latest > 0.1 && !typingState.isComplete) {
    //           const { typedText, progress, isComplete } = getTypedText(latest);

    //           setTypingState(prev => ({
    //             ...prev,
    //             typedText,
    //             progress,
    //             isComplete,
    //           }));
    //         }
    //       }, 1); // Adjust typing speed here (lower = faster)
    //     });

    //     return () => unsubscribe();
    //   }
    // }, [scrollProgress, typingState.isComplete, getTypedText]);

    // Avatar component
    const avatar = (
      <motion.div
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center 
                 rounded-full border border-primary/20 bg-primary/10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="h-4 w-4 text-primary/70" />
      </motion.div>
    );

    return (
      <MessageBubble
        ref={ref}
        position="left"
        avatar={avatar}
        timestamp={typingState.isComplete ? timestamp : undefined}
        scrollProgress={scrollProgress}
        messageIndex={messageIndex}
        isTyping={!typingState.isComplete}
        header={
          tags.length > 0 && <MessageTags tags={tags} isVisible={typingState.isComplete > 0} />
        }
        className={cn(
          'group transition-all duration-300',
          'hover:bg-primary/10',
          'dark:hover:bg-primary/15',
          className
        )}
        {...props}
      >
        {/* Message content with typewriter effect */}
        <div className="relative">
          <span className="text-[10px] font-medium text-foreground/90 sm:text-base">
            {typingState.typedText}
          </span>

          {/* Cursor effect */}
          {!typingState.isComplete && (
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-0.5  inline-block h-4 w-0.5 bg-primary/50 align-middle"
            />
          )}
        </div>

        {/* Gradient highlight on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 
                   transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `
            radial-gradient(
              circle at var(--x, 50%) var(--y, 50%),
              rgba(var(--primary-rgb), 0.1) 0%,
              transparent 100%
            )
          `,
          }}
          onMouseMove={e => {
            const bounds = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - bounds.left) / bounds.width) * 100;
            const y = ((e.clientY - bounds.top) / bounds.height) * 100;
            e.currentTarget.style.setProperty('--x', `${x}%`);
            e.currentTarget.style.setProperty('--y', `${y}%`);
          }}
        />
      </MessageBubble>
    );
  }
);

EmployeeMessage.displayName = 'EmployeeMessage';
