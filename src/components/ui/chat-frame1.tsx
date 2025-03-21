'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { SendHorizontal } from 'lucide-react';
import * as React from 'react';

import { useReducedMotion } from '@/lib/hooks/use-reduced-motion';
import { cn } from '@/lib/utils';
import { springs, variants, gradients } from '@/lib/utils/chat-animations';
import { useMountContext } from '@/providers/mount-provider';

import { FrameTitle } from '../sections/home/chat/frame-title';

interface ChatFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showInput?: boolean;
  inputPlaceholder?: string;
  onSendMessage?: (message: string) => void;
  className?: string;
  frameTitle?: string;
  shouldAnimate?: boolean;
}

const ScrollIndicator = React.memo(() => (
  <motion.div
    className="absolute right-1.5 top-[calc(50%-2rem)] h-16 w-1"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="h-full w-full rounded-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
      animate={{
        opacity: [0.3, 0.6, 0.3],
        y: [0, 4, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </motion.div>
));

ScrollIndicator.displayName = 'ScrollIndicator';

export const ChatFrame = React.forwardRef<HTMLDivElement, ChatFrameProps>(
  (
    {
      children,
      showInput = true,
      inputPlaceholder = 'Ask Centrus anything...',
      onSendMessage,
      className,
      frameTitle,
      shouldAnimate: propsShouldAnimate,
      ...props
    },
    ref
  ) => {
    const { shouldAnimate: contextShouldAnimate } = useMountContext();
    const prefersReducedMotion = useReducedMotion();
    const shouldAnimate = propsShouldAnimate ?? contextShouldAnimate;

    const [inputValue, setInputValue] = React.useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const [showScrollIndicator, setShowScrollIndicator] = React.useState(true);
    const [hasFocus, setHasFocus] = React.useState(false);

    const handleSend = React.useCallback(() => {
      if (inputValue.trim() && onSendMessage) {
        onSendMessage(inputValue.trim());
        setInputValue('');
        inputRef.current?.focus();
      }
    }, [inputValue, onSendMessage]);

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSend();
        }
      },
      [handleSend]
    );

    const handleInteraction = React.useCallback(() => {
      setShowScrollIndicator(false);
    }, []);

    React.useEffect(() => {
      const container = contentRef.current;
      if (!container) return;

      container.addEventListener('scroll', handleInteraction, { once: true });
      container.addEventListener('click', handleInteraction, { once: true });
      container.addEventListener('touchstart', handleInteraction, { once: true });

      return () => {
        container.removeEventListener('scroll', handleInteraction);
        container.removeEventListener('click', handleInteraction);
        container.removeEventListener('touchstart', handleInteraction);
      };
    }, [handleInteraction]);

    if (!shouldAnimate || prefersReducedMotion) {
      return (
        <div
          ref={ref}
          className={cn(
            'relative mx-auto w-full max-w-4xl ',
            'h-[calc(100vh-12rem)] md:h-[calc(100vh-24rem)]',
            'min-h-[350px] md:min-h-[400px]',
            'max-h-[500px] md:max-h-[600px]',
            'bg-background/30 backdrop-blur-xl',
            'border border-primary/10',
            'shadow-lg shadow-primary/5',
            'rounded-lg md:rounded-2xl',
            'overflow-hidden',
            className
          )}
          {...props}
        >
          <FrameTitle title={frameTitle} />
          <div className="absolute inset-0 overflow-hidden rounded-lg md:rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e503_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
          <div
            ref={contentRef}
            className={cn(
              'relative flex h-full flex-col',
              showInput ? 'pb-' : 'pb-4',
              'overflow-y-auto overflow-x-hidden scroll-smooth',
              'scrollbar-thin scrollbar-track-transparent',
              'scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/30',
              'px-3 pt-3 md:px-4 md:pt-4'
            )}
          >
            {showInput && (
              <div className="pointer-events-none  absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
            )}
            <div className="relative z-10 flex-1">{children}</div>
          </div>
          {showInput && (
            <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-primary/10 bg-background">
              <div className="p-3">
                <div
                  className={cn(
                    'flex items-center gap-2 rounded-lg border border-primary/10 bg-primary/5 p-2',
                    hasFocus && 'border-primary/20'
                  )}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    // onChange={e => setInputValue(e.target.value)}
                    // onChange={e => e.preventDefault()}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setHasFocus(true)}
                    onBlur={() => setHasFocus(false)}
                    placeholder={inputPlaceholder}
                    className="flex-1 bg-transparent px-2 text-foreground/90 placeholder:text-muted-foreground/50 focus:outline-none"
                    readOnly={true}
                  />
                  <button
                    onClick={handleSend}
                    className="rounded-md bg-primary/20 p-1.5 text-primary transition-colors hover:bg-primary/30"
                  >
                    <SendHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        variants={variants.chatFrame}
        initial="initial"
        animate="animate"
        className={cn(
          'relative mx-auto w-full max-w-4xl pb-6',
          'h-[calc(100vh-24rem)] md:h-[calc(100vh-24rem)]',
          'min-h-[650px] md:min-h-[400px]',
          'max-h-[1000px] md:max-h-[600px]',
          'bg-background/30 backdrop-blur-xl',
          'border border-primary/10',
          'shadow-lg shadow-primary/5',
          'rounded-lg md:rounded-2xl',
          // overflow-hidden changes the layout of the chat frame
          '',
          className
        )}
        {...props}
      >
        <FrameTitle title={frameTitle} />

        <motion.div
          className="absolute inset-0 overflow-hidden rounded-lg md:rounded-2xl"
          variants={gradients.subtle}
          animate="animate"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e503_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </motion.div>

        <div
          ref={contentRef}
          className={cn(
            'relative flex h-full flex-col',
            showInput ? 'pb-' : 'pb-4',
            'overflow-y-auto overflow-x-hidden scroll-smooth',
            'scrollbar-thin scrollbar-track-transparent',
            'scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/30',
            'px-3 pt-3 md:px-4 md:pt-4'
          )}
        >
          {showInput && (
            <div className="pointer-events-none  absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
          )}
          <AnimatePresence>{showScrollIndicator && <ScrollIndicator />}</AnimatePresence>

          <div className="relative z-10 flex-1">{children}</div>
        </div>

        {showInput && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 z-30 border-t border-primary/10 bg-background"
          >
            <motion.div
              className={cn(
                'flex items-center gap-2 rounded-lg border border-primary/10 bg-primary/5 p-2 ',
                hasFocus && 'border-primary/20'
              )}
              whileHover={{ scale: 1.01 }}
              transition={springs.gentle}
            >
              <input
                ref={inputRef}
                type="text"
                value={''}
                onChange={e => setInputValue('')}
                onKeyDown={handleKeyDown}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                placeholder={inputPlaceholder}
                className="w-48 flex-1 bg-transparent px-2 text-foreground/90 placeholder:text-muted-foreground/50 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                className=" rounded-md bg-primary/20 p-1.5 text-primary transition-colors hover:bg-primary/30"
              >
                <SendHorizontal className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    );
  }
);

ChatFrame.displayName = 'ChatFrame';
