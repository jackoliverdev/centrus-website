'use client';

import { useRef, useCallback, useEffect } from 'react';
import type { MotionValue } from 'framer-motion';

interface TypewriterConfig {
  scrollDirection?: 'up' | 'down';
  maxSpeed?: number; // Maximum characters per second
  minSpeed?: number; // Minimum characters per second
  smoothing?: number; // Smoothing factor (0-1)
}

interface TypewriterState {
  typedText: string;
  isComplete: boolean;
  progress: number;
}

export const useTypewriter = (
  text: string,
  progress: MotionValue<number>,
  {
    scrollDirection = 'down',
    maxSpeed = 35, // Reduced from 50 for more natural typing
    minSpeed = 15, // Increased from 10 for more consistency
    smoothing = 0.15, // Increased from 0.1 for smoother transitions
  }: TypewriterConfig = {}
) => {
  const lastUpdateTime = useRef<number>(0);
  const lastCharIndex = useRef<number>(0);
  const currentVelocity = useRef<number>(0);
  const lastProgress = useRef<number>(0);
  const isScrolling = useRef<boolean>(false); // To track if scrolling is happening

  // Clean up function to reset state
  useEffect(() => {
    return () => {
      lastUpdateTime.current = 0;
      lastCharIndex.current = 0;
      currentVelocity.current = 0;
      lastProgress.current = 0;
      isScrolling.current = false;
    };
  }, [text]);

  // Calculate current typed text based on progress
  const getTypedText = useCallback(
    (currentProgress: number): TypewriterState => {
      const now = performance.now();
      const deltaTime = Math.min(now - lastUpdateTime.current || 16.66, 100); // Cap max delta time

      // Ensure progress moves in the correct direction
      if (scrollDirection === 'down') {
        currentProgress = Math.max(currentProgress, lastProgress.current); // Allow only forward progress
      } else if (scrollDirection === 'up') {
        currentProgress = Math.min(currentProgress, lastProgress.current); // Allow only backward progress
      }
      lastProgress.current = currentProgress;

      // Only start typing if scroll is happening
      if (!isScrolling.current) {
        return { typedText: '', isComplete: false, progress: currentProgress };
      }

      // Calculate target character index based on progress
      const targetIndex = Math.floor(currentProgress * text.length);

      // Calculate required velocity to reach target
      const requiredChange = targetIndex - lastCharIndex.current;
      const requiredVelocity = Math.abs(requiredChange) / (deltaTime / 1000);

      // Apply smoothing to velocity with speed limits
      const targetVelocity = Math.min(Math.max(requiredVelocity, minSpeed), maxSpeed);
      currentVelocity.current += (targetVelocity - currentVelocity.current) * smoothing;

      // Calculate max change allowed based on velocity
      const accelerationFactor = Math.min(deltaTime / 500, 1); // Ramp up over 500ms
      const maxChange = Math.ceil(
        currentVelocity.current * (deltaTime / 1000) * accelerationFactor
      );

      // Calculate actual change and ensure consistent scroll direction
      let actualChange = 0;
      if (scrollDirection === 'down') {
        actualChange = Math.min(Math.abs(targetIndex - lastCharIndex.current), maxChange);
      } else if (scrollDirection === 'up') {
        actualChange = Math.min(Math.abs(lastCharIndex.current - targetIndex), maxChange);
      }

      // Update character index based on scroll direction
      let newIndex = lastCharIndex.current;
      if (scrollDirection === 'down') {
        newIndex = Math.min(lastCharIndex.current + actualChange, text.length);
      } else if (scrollDirection === 'up') {
        newIndex = Math.max(lastCharIndex.current - actualChange, 0);
      }

      lastCharIndex.current = newIndex;
      lastUpdateTime.current = now;

      const isComplete = scrollDirection === 'down' ? newIndex >= text.length : newIndex <= 0;

      return {
        typedText: text.slice(0, newIndex),
        isComplete,
        progress: currentProgress,
      };
    },
    [text, scrollDirection, maxSpeed, minSpeed, smoothing]
  );

  // Track when scrolling starts and stop
  useEffect(() => {
    const handleScrollStart = () => {
      isScrolling.current = true; // Start typing when scrolling begins
    };

    const handleScrollStop = () => {
      isScrolling.current = false; // Stop typing when scrolling stops
    };

    window.addEventListener('scroll', handleScrollStart);
    window.addEventListener('wheel', handleScrollStop);
    
    return () => {
      window.removeEventListener('scroll', handleScrollStart);
      window.removeEventListener('wheel', handleScrollStop);
    };
  }, []);

  return {
    getTypedText,
    reset: () => {
      lastUpdateTime.current = 0;
      lastCharIndex.current = 0;
      currentVelocity.current = 0;
      lastProgress.current = 0;
      isScrolling.current = false;
    },
  };
};
