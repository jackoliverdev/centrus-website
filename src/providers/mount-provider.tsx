'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface MountContextValue {
  isMounted: boolean;
  isHydrated: boolean;
  shouldAnimate: boolean;
  registerMount: () => void;
}

const MountContext = createContext<MountContextValue | null>(null);

export function MountProvider({
  children,
  delayAnimation = 300,
}: {
  children: React.ReactNode;
  delayAnimation?: number;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [mountCount, setMountCount] = useState(0);

  // Register individual component mounts
  const registerMount = useCallback(() => {
    setMountCount(prev => prev + 1);
  }, []);

  useEffect(() => {
    setIsHydrated(true); // Ensure hydration happens after component mounts
  }, []);

  // Handle initial mount
  useEffect(() => {
    setIsMounted(true);
    setIsHydrated(true);
  }, [isMounted, isHydrated]);

  // Handle hydration completion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Use RAF to ensure we're past React 18's hydration
      requestAnimationFrame(() => {
        setIsHydrated(true);
      });
    }
  }, []);

  // Delay animations until after hydration and mount
  useEffect(() => {
    if (!isMounted || !isHydrated) return;

    const timer = setTimeout(() => {
      // requestAnimationFrame(() => {
      setShouldAnimate(true);
      // });
    }, delayAnimation);

    return () => clearTimeout(timer);
  }, [isMounted, isHydrated, delayAnimation]);

  // Debug logs to help track hydration state
  useEffect(() => {
    console.log('Hydration State:', { isMounted, isHydrated, shouldAnimate });
  }, [isMounted, isHydrated, shouldAnimate]);

  const value = {
    isMounted,
    isHydrated,
    shouldAnimate,
    registerMount,
  };

  return <MountContext.Provider value={value}>{children}</MountContext.Provider>;
}

export function useMountContext() {
  const context = useContext(MountContext);
  if (!context) {
    throw new Error('useMountContext must be used within a MountProvider');
  }
  return context;
}

export function useMounted() {
  const { isMounted } = useMountContext();
  return isMounted;
}

export function useHydrated() {
  const { isHydrated } = useMountContext();
  return isHydrated;
}

export function useAnimation() {
  const { shouldAnimate } = useMountContext();
  return shouldAnimate;
}

export type { MountContextValue };
