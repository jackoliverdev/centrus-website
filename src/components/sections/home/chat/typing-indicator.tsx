'use client'

import * as React from 'react'
import { motion, MotionValue, useTransform } from 'framer-motion'
import { Bot, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { springs, variants, gradients } from '@/lib/utils/chat-animations'

interface TypingIndicatorProps {
  className?: string
  scrollProgress?: MotionValue<number>
  messageIndex?: number
  showAvatar?: boolean
  showLabel?: boolean
  label?: string
}

const LoadingDots = () => (
  <div className="flex gap-1">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="h-1 w-1 rounded-full bg-primary/50"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
)

const LoadingSpinner = () => (
  <motion.div
    animate={{ opacity: [1, 0.6, 1] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Loader2 className="h-3 w-3 animate-spin text-primary" />
  </motion.div>
)

export const TypingIndicator = React.forwardRef<HTMLDivElement, TypingIndicatorProps>(({
  className,
  scrollProgress,
  messageIndex = 0,
  showAvatar = true,
  showLabel = true,
  label = "Centrus is thinking",
  ...props
}, ref) => {
  // Calculate visibility based on scroll progress
  const opacity = scrollProgress 
    ? useTransform(
        scrollProgress,
        [0, 0.3, 0.7, 1],  // Appear quickly, stay visible, fade out gradually
        [0, 1, 1, 0]
      )
    : 1

  const scale = useTransform(
    scrollProgress || new MotionValue(1),
    [0, 0.3],
    [0.9, 1]
  )

  return (
    <motion.div
      ref={ref}
      variants={variants.thinking}
      style={{ opacity, scale }}
      className={cn(
        "flex items-center gap-3",
        className
      )}
      {...props}
    >
      {/* Avatar */}
      {showAvatar && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={springs.bouncy}
          className="h-8 w-8 rounded-full bg-primary/20 flex items-center 
                     justify-center flex-shrink-0 border border-primary/20"
        >
          <Bot className="h-4 w-4 text-primary" />
        </motion.div>
      )}

      {/* Thinking indicator */}
      <motion.div
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-xl",
          "bg-primary/10 backdrop-blur-sm",
          "border border-primary/20"
        )}
      >
        {/* Icon and label */}
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4 text-primary" />
          {showLabel && (
            <span className="text-sm font-medium text-primary">
              {label}
            </span>
          )}
        </div>

        {/* Loading animations */}
        <div className="flex items-center gap-2">
          <LoadingSpinner />
          <LoadingDots />
        </div>

        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl opacity-30"
          variants={gradients.pulse}
          animate="animate"
        />
      </motion.div>
    </motion.div>
  )
})

TypingIndicator.displayName = 'TypingIndicator'

// Variant with minimal styling
export const MinimalTypingIndicator = (props: Omit<TypingIndicatorProps, 'showAvatar' | 'showLabel'>) => (
  <TypingIndicator 
    {...props} 
    showAvatar={false} 
    showLabel={false} 
  />
)

// Compact variant with just the spinner and dots
export const CompactTypingIndicator = (props: Omit<TypingIndicatorProps, 'showLabel'>) => (
  <TypingIndicator 
    {...props} 
    showLabel={false} 
  />
)