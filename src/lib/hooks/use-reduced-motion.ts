"use client"

import { useEffect, useState } from 'react'
import { useMountContext } from '@/providers/mount-provider'

// Cache the media query result
let cachedReducedMotion: boolean | null = null

// Check reduced motion preference with caching
function checkReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  
  if (cachedReducedMotion === null) {
    cachedReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  }
  
  return cachedReducedMotion
}

export function useReducedMotion() {
  // Start with true to prevent unwanted animations during mounting
  const [reducedMotion, setReducedMotion] = useState(true)
  const { isMounted, isHydrated } = useMountContext()

  useEffect(() => {
    // Only run after mount and hydration
    if (!isMounted || !isHydrated) return

    // Get initial value
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    // Setup listener for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches)
      cachedReducedMotion = event.matches // Update cache
    }

    mediaQuery.addEventListener('change', handleChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [isMounted, isHydrated])

  // Return true if not mounted/hydrated or if reduced motion is preferred
  return !isMounted || !isHydrated || reducedMotion
}

// Helper to check reduced motion synchronously
export function getReducedMotion(): boolean {
  return checkReducedMotion()
}