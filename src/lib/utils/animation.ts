"use client"

import type { Variants } from 'framer-motion'

// Centralized configuration for animations
const CONFIG = {
  reducedMotion: typeof window !== 'undefined'
    ? window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    : false,
  baseTransition: {
    duration: 0.3,
    ease: [0.32, 0.72, 0, 1], // Custom easing for smoother animations
  },
  springPreset: {
    type: 'spring' as const,
    damping: 20,
    stiffness: 150,
    mass: 1,
  }
}

// Base variants for reduced motion
const REDUCED_MOTION_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0 }
  }
}

// Helper to create transitions
function createTransition(delay: number = 0, useSpring: boolean = false) {
  if (CONFIG.reducedMotion) return { duration: 0 }
  
  return useSpring 
    ? { ...CONFIG.springPreset, delay }
    : { ...CONFIG.baseTransition, delay }
}

// Performance optimized fade animation
export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  delay: number = 0
): Variants => {
  if (CONFIG.reducedMotion) return REDUCED_MOTION_VARIANTS

  const offset = 10 // Reduced from 15 for subtler animation
  const movement = {
    x: direction === 'left' ? offset : direction === 'right' ? -offset : 0,
    y: direction === 'up' ? offset : direction === 'down' ? -offset : 0,
  }

  return {
    hidden: { 
      opacity: 0,
      ...movement
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: createTransition(delay)
    }
  }
}

// Optimized stagger container
export const stagger = (
  staggerChildren: number = 0.08, // Reduced from 0.1
  delayChildren: number = 0
): Variants => ({
  hidden: { opacity: CONFIG.reducedMotion ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: CONFIG.reducedMotion ? 0 : staggerChildren,
      delayChildren: CONFIG.reducedMotion ? 0 : delayChildren,
      duration: 0 // No animation on the container itself
    }
  }
})

// Optimized scale animation
export const scale = (delay: number = 0): Variants => {
  if (CONFIG.reducedMotion) return REDUCED_MOTION_VARIANTS

  return {
    hidden: {
      opacity: 0,
      scale: 0.98, // Reduced from 0.95 for subtler animation
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: createTransition(delay)
    }
  }
}

// Optimized slide animation
export const slideIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'right',
  delay: number = 0
): Variants => {
  if (CONFIG.reducedMotion) return REDUCED_MOTION_VARIANTS

  const offset = '15%' // Reduced from 20% for smoother animation
  const movement = {
    x: direction === 'left' ? `-${offset}` : direction === 'right' ? offset : '0',
    y: direction === 'up' ? offset : direction === 'down' ? `-${offset}` : '0'
  }

  return {
    hidden: movement,
    visible: {
      x: 0,
      y: 0,
      transition: createTransition(delay, true) // Uses spring transition
    }
  }
}

// Optimized rotate animation
export const rotateIn = (delay: number = 0): Variants => {
  if (CONFIG.reducedMotion) return REDUCED_MOTION_VARIANTS

  return {
    hidden: {
      opacity: 0,
      rotate: -5, // Reduced from -10 for subtler animation
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: createTransition(delay)
    }
  }
}

// Optimized floating animation
export const float: Variants = CONFIG.reducedMotion ? {
  hidden: {},
  visible: {}
} : {
  hidden: { y: 0 },
  visible: {
    y: [-3, 3, -3], // Reduced from [-5, 5, -5] for subtler animation
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
      repeatType: 'reverse',
    }
  }
}

// Optimized pulse animation
export const pulse: Variants = CONFIG.reducedMotion ? {
  hidden: {},
  visible: {}
} : {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.01, 1], // Reduced from [1, 1.02, 1] for subtler animation
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
      repeatType: 'reverse',
    }
  }
}

// Optimized reveal animation
export const reveal: Variants = CONFIG.reducedMotion ? {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
} : {
  hidden: {
    opacity: 0,
    clipPath: 'inset(0 100% 0 0)',
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0 0 0)',
    transition: {
      ...CONFIG.baseTransition,
      duration: 0.5, // Reduced from 0.6
    }
  }
}