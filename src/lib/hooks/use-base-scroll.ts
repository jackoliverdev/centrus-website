'use client'

import { useRef, useCallback, useEffect } from 'react'
import { useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'

interface ScrollSegment {
  start: number
  end: number
}

interface UseChatScrollConfig {
  totalMessages: number
  scrollMultiplier?: number
  thinkingDuration?: number
  typingDuration?: number
  fadeBuffer?: number
}

export const useChatScroll = ({
  totalMessages,
  scrollMultiplier = 2.5,    // Controls how much scroll is needed for each message
  thinkingDuration = 0.15,   // Duration of thinking state as fraction of message segment
  typingDuration = 0.7,      // Duration of typing as fraction of message segment
  fadeBuffer = 0.15          // Buffer for fading messages in/out
}: UseChatScrollConfig) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const prevScrollY = useRef<number>(0)
  const scrollDirection = useRef<'up' | 'down'>('down')

  // Calculate total scroll height needed
  const scrollHeight = `${100 * scrollMultiplier * totalMessages}vh`

  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    mass: 0.5
  })

  // Track scroll direction
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      scrollDirection.current = latest > prevScrollY.current ? 'down' : 'up'
      prevScrollY.current = latest
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  // Generate segments for a message pair (question + answer)
  const getMessageSegments = useCallback((index: number): {
    questionSegments: ScrollSegment[]
    answerSegments: ScrollSegment[]
  } => {
    const segmentSize = 1 / totalMessages
    const start = index * segmentSize

    return {
      questionSegments: [
        // Entry fade
        { start, end: start + fadeBuffer * segmentSize },
        // Typing
        { start: start + fadeBuffer * segmentSize, end: start + (fadeBuffer + typingDuration) * segmentSize },
        // Display
        { start: start + (fadeBuffer + typingDuration) * segmentSize, end: start + segmentSize - fadeBuffer },
        // Exit fade
        { start: start + segmentSize - fadeBuffer, end: start + segmentSize }
      ],
      answerSegments: [
        // Thinking state
        { start: start + (fadeBuffer + typingDuration/2) * segmentSize, end: start + (fadeBuffer + typingDuration/2 + thinkingDuration) * segmentSize },
        // Answer typing
        { start: start + (fadeBuffer + typingDuration/2 + thinkingDuration) * segmentSize, end: start + segmentSize - fadeBuffer },
        // Display
        { start: start + segmentSize - fadeBuffer, end: start + segmentSize }
      ]
    }
  }, [totalMessages, thinkingDuration, typingDuration, fadeBuffer])

  // Get progress value for a specific segment
  const getSegmentProgress = useCallback((segment: ScrollSegment, clamp = true) => {
    return useTransform(
      smoothProgress,
      [segment.start, segment.end],
      [0, 1],
      { clamp }
    )
  }, [smoothProgress])

  return {
    containerRef,
    scrollHeight,
    scrollDirection: scrollDirection.current,
    smoothProgress,
    getMessageSegments,
    getSegmentProgress
  }
}