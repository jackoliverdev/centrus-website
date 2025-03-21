"use client"

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface UseCounterOptions {
  end: number
  start?: number
  duration?: number
  delay?: number
  formatter?: (value: number) => string
  easing?: (t: number) => number
  once?: boolean
  decimals?: number
  threshold?: number
}

const defaultEasing = (t: number): number => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)

export function useCounter({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  formatter = (value: number) => value.toString(),
  easing = defaultEasing,
  once = true,
  decimals = 0,
  threshold = 0.1
}: UseCounterOptions) {
  const [count, setCount] = useState(start)
  const [inViewRef, inView] = useInView({ threshold, triggerOnce: once })
  const countRef = useRef({ start, end, duration, currentRAF: 0 })
  const isAnimating = useRef(false)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView || isAnimating.current) return

    // Update ref values
    countRef.current = { start, end, duration }

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime
      }

      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easing(progress)
      
      // Calculate the current value with decimal precision
      const current = start + (end - start) * easedProgress
      const roundedValue = Number(current.toFixed(decimals))
      
      setCount(roundedValue)

      if (progress < 1) {
        countRef.current.currentRAF = requestAnimationFrame(animate)
      } else {
        isAnimating.current = false
        startTimeRef.current = null
      }
    }

    const startAnimation = () => {
      isAnimating.current = true
      countRef.current.currentRAF = requestAnimationFrame(animate)
    }

    // Handle delay
    if (delay) {
      const timeoutId = setTimeout(startAnimation, delay)
      return () => {
        clearTimeout(timeoutId)
        if (countRef.current.currentRAF) {
          cancelAnimationFrame(countRef.current.currentRAF)
        }
      }
    } else {
      startAnimation()
      return () => {
        if (countRef.current.currentRAF) {
          cancelAnimationFrame(countRef.current.currentRAF)
        }
      }
    }
  }, [inView, start, end, duration, delay, easing, decimals])

  const formattedCount = formatter(count)
  const setRef = inViewRef

  return { count, formattedCount, setRef, inView }
}

// Preset easings that can be used with the counter
export const counterEasings = {
  // Linear
  linear: (t: number) => t,
  
  // Exponential
  easeOutExpo: (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  
  // Elastic
  easeOutElastic: (t: number) => {
    const c4 = (2 * Math.PI) / 3
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1
  },
  
  // Bounce
  easeOutBounce: (t: number) => {
    const n1 = 7.5625
    const d1 = 2.75

    if (t < 1 / d1) {
      return n1 * t * t
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375
    }
  },

  // Cubic
  easeOutCubic: (t: number) => 1 - Math.pow(1 - t, 3),
}

// Example usage:
/*
const { formattedCount, setRef } = useCounter({
  end: 100,
  formatter: (value) => `${value}%`,
  easing: counterEasings.easeOutExpo
})

return <div ref={setRef}>{formattedCount}</div>
*/