"use client"

import { useEffect, useState, useCallback } from 'react'
import { useMountContext } from '@/providers/mount-provider'
import { useReducedMotion } from './use-reduced-motion'

interface UseDeferredAnimationsOptions {
  delay?: number
  disabled?: boolean
  requiresHydration?: boolean
}

export function useDeferredAnimations({
  delay = 0,
  disabled = false,
  requiresHydration = true
}: UseDeferredAnimationsOptions = {}) {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const { isMounted, isHydrated, shouldAnimate: globalAnimate } = useMountContext()
  const prefersReducedMotion = useReducedMotion()

  // Reset animation state
  const reset = useCallback(() => {
    setShouldAnimate(false)
  }, [])

  useEffect(() => {
    if (disabled || prefersReducedMotion) {
      setShouldAnimate(false)
      return
    }

    // Check mounting conditions
    if (!isMounted || (requiresHydration && !isHydrated) || !globalAnimate) {
      return
    }

    // Delay animation start
    const timer = setTimeout(() => {
      setShouldAnimate(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [
    disabled,
    delay,
    isMounted,
    isHydrated,
    globalAnimate,
    prefersReducedMotion,
    requiresHydration
  ])

  // Force animations off if reduced motion is preferred
  const canAnimate = !disabled && !prefersReducedMotion

  return {
    shouldAnimate: canAnimate && shouldAnimate,
    isReady: isMounted && (!requiresHydration || isHydrated),
    reset,
    // Additional states for debugging
    isMounted,
    isHydrated,
    globalAnimate,
    prefersReducedMotion
  } as const
}

// Helper hook for components that need sequential animations
export function useSequentialAnimations(count: number, baseDelay = 200) {
  const { shouldAnimate, ...rest } = useDeferredAnimations()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!shouldAnimate || currentIndex >= count) return

    const timer = setTimeout(() => {
      setCurrentIndex(prev => prev + 1)
    }, baseDelay)

    return () => clearTimeout(timer)
  }, [shouldAnimate, currentIndex, count, baseDelay])

  return {
    shouldAnimate,
    currentIndex,
    isComplete: currentIndex >= count,
    reset: useCallback(() => {
      setCurrentIndex(0)
    }, []),
    ...rest
  } as const
}

// Type exports
export type DeferredAnimationsResult = ReturnType<typeof useDeferredAnimations>
export type SequentialAnimationsResult = ReturnType<typeof useSequentialAnimations>