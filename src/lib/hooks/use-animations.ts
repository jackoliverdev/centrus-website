"use client"

import { useEffect, useState, useCallback, useRef, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import type { Variants } from 'framer-motion'
import * as animations from '@/lib/utils/animation'

interface UseAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  delay?: number
  rootMargin?: string
  disabled?: boolean
  immediate?: boolean
}

interface UseAnimationsReturn {
  ref: (node?: Element | null) => void
  inView: boolean
  variants: {
    container: Variants
    item: Variants
  }
  reset: () => void
  animate: boolean
}

// Global cache for variants
const VARIANTS_CACHE = new Map<string, Variants>()
const CONTINUOUS_ANIMATIONS_CACHE = new Map<string, Variants>()

// Check for reduced motion preference once
const checkReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

// Empty variants for when animations are disabled
const EMPTY_VARIANTS = { hidden: {}, visible: {} }

export function useAnimations({
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
  rootMargin = '50px',
  disabled = false,
  immediate = false,
}: UseAnimationOptions = {}): UseAnimationsReturn {
  const [animate, setAnimate] = useState(immediate)
  const previousInView = useRef(false)
  const isReducedMotion = useMemo(checkReducedMotion, [])
  const shouldAnimate = !disabled && !isReducedMotion

  // Only observe if we need to animate
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
    skip: !shouldAnimate || immediate,
  })

  // Handle animation state
  useEffect(() => {
    if (!shouldAnimate || immediate) {
      setAnimate(true)
      return
    }

    if (inView && !previousInView.current) {
      const timer = window.setTimeout(() => {
        setAnimate(true)
      }, delay)
      return () => window.clearTimeout(timer)
    }

    previousInView.current = inView
  }, [inView, delay, shouldAnimate, immediate])

  const reset = useCallback(() => {
    setAnimate(false)
    previousInView.current = false
  }, [])

  // Get cached variants or create new ones
  const variants = useMemo(() => {
    if (!shouldAnimate) return { container: EMPTY_VARIANTS, item: EMPTY_VARIANTS }

    const cacheKey = `container-${delay}`
    let containerVariants = VARIANTS_CACHE.get(cacheKey)

    if (!containerVariants) {
      containerVariants = {
        hidden: animations.stagger().hidden,
        visible: {
          ...animations.stagger().visible,
          transition: {
            ...animations.stagger().visible.transition,
            delayChildren: delay / 1000,
          },
        },
      }
      VARIANTS_CACHE.set(cacheKey, containerVariants)
    }

    return {
      container: containerVariants,
      item: animations.fadeIn(),
    }
  }, [shouldAnimate, delay])

  return {
    ref,
    inView,
    variants,
    reset,
    animate: shouldAnimate ? animate : true,
  }
}

// Optimized animation hook factory
function createAnimationHook(animationType: keyof typeof animations, cacheKey?: string) {
  return (options?: UseAnimationOptions) => {
    const animation = useAnimations(options)
    const isReducedMotion = useMemo(checkReducedMotion, [])

    const variants = useMemo(() => {
      if (options?.disabled || isReducedMotion) return EMPTY_VARIANTS

      if (cacheKey) {
        let cached = CONTINUOUS_ANIMATIONS_CACHE.get(cacheKey)
        if (!cached) {
          cached = animations[animationType]()
          CONTINUOUS_ANIMATIONS_CACHE.set(cacheKey, cached)
        }
        return cached
      }

      return animations[animationType]()
    }, [options?.disabled, isReducedMotion])

    return {
      ...animation,
      variants: {
        ...animation.variants,
        item: variants,
      },
    }
  }
}

// Specific animation hooks
export const useFadeIn = createAnimationHook('fadeIn')
export const useScale = createAnimationHook('scale')
export const useFloat = createAnimationHook('float', 'float')
export const usePulse = createAnimationHook('pulse', 'pulse')

export function useSlideIn(
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  options?: UseAnimationOptions
) {
  const animation = useAnimations(options)
  const isReducedMotion = useMemo(checkReducedMotion, [])

  const variants = useMemo(() => {
    if (options?.disabled || isReducedMotion) return EMPTY_VARIANTS
    return animations.slideIn(direction)
  }, [direction, options?.disabled, isReducedMotion])

  return {
    ...animation,
    variants: {
      ...animation.variants,
      item: variants,
    },
  }
}