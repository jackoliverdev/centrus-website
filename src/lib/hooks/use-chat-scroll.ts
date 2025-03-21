'use client';

import { useRef, useEffect } from 'react';
import { useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion';

interface UseChatScrollConfig {
  totalMessages: number;
}

interface MessageProgress {
  setVisible: MotionValue<number>;
  employeeBubble: MotionValue<number>;
  employeeTyping: MotionValue<number>;
  thinking: MotionValue<number>;
  answerBubble: MotionValue<number>;
  answerTyping: MotionValue<number>;
  source: MotionValue<number>;
}

export const useChatScroll = ({ totalMessages }: UseChatScrollConfig) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useRef<'up' | 'down'>('down');
  const prevScrollY = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30, // Gentle scroll
    damping: 25, // Smooth transitions
    mass: 1.5, // More inertia for better control
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', latest => {
      scrollDirection.current = latest > prevScrollY.current ? 'down' : 'up';
      prevScrollY.current = latest;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const progressValues = Array.from({ length: totalMessages }).map((_, index) => {
    const segmentSize = 1 / totalMessages;
    const start = index * segmentSize;
    const setLength = segmentSize * 0.92; // 92% utilization for smoother transitions

    const s = {
      // Initial set visibility (2% fade in)
      setStart: start,
      setVisible: start + setLength * 0.02,

      // Employee message phase (25% total)
      employeeStart: start + setLength * 0.05, // Start at 2%
      employeeTypingStart: start + setLength * 0.05, // Start typing at 5%
      employeeTypingEnd: start + setLength * 0.2, // Complete at 27%

      // Brief pause before thinking (3%)
      pauseStart: start + setLength * 0.2,
      pauseEnd: start + setLength * 0.3,

      // Thinking state (15%)
      thinkingStart: start + setLength * 0.3,
      thinkingEnd: start + setLength * 0.45,

      // Answer phase (40% - extended for completion)
      answerStart: start + setLength * 0.45,
      answerTypingStart: start + setLength * 0.45, // Quick start after thinking
      answerTypingEnd: start + setLength * 0.77, // Long duration for typing

      // Source reference (5%)
      sourceStart: start + setLength * 0.77,
      sourceComplete: start + setLength * 0.8,

      // Set completion
      fadeStart: start + setLength * 0.92,
      setEnd: start + setLength,
    };

    return {
      setVisible: useTransform(
        smoothProgress,
        [s.setStart, s.setVisible, s.fadeStart, s.setEnd],
        [0, 1, 1, 0],
        { clamp: true }
      ),

      employeeBubble: useTransform(
        smoothProgress,
        [s.employeeStart, s.employeeStart + 0.02],
        [0, 1],
        { clamp: true }
      ),

      employeeTyping: useTransform(
        smoothProgress,
        [s.employeeTypingStart, s.employeeTypingEnd],
        [0, 1],
        { clamp: true }
      ),

      thinking: useTransform(
        smoothProgress,
        [s.thinkingStart, s.thinkingStart + 0.02, s.thinkingEnd - 0.02, s.thinkingEnd],
        [0, 1, 1, 0],
        { clamp: true }
      ),

      answerBubble: useTransform(smoothProgress, [s.answerStart, s.answerStart + 0.02], [0, 1], {
        clamp: true,
      }),

      answerTyping: useTransform(smoothProgress, [s.answerTypingStart, s.answerTypingEnd], [0, 1], {
        clamp: true,
      }),

      source: useTransform(smoothProgress, [s.sourceStart, s.sourceComplete], [0, 1], {
        clamp: true,
      }),
    };
  });

  const getMessageProgress = (index: number): MessageProgress => {
    return progressValues[index];
  };

  return {
    containerRef,
    scrollHeight: `${350 * totalMessages}vh`, // More scroll space for comfort
    scrollDirection: scrollDirection.current,
    getMessageProgress,
  };
};
