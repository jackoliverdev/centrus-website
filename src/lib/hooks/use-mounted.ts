'use client';

import { useEffect, useState } from 'react';
import { useMountContext } from '@/providers/mount-provider';

// Re-export the main mounted state from the context
export { useMounted } from '@/providers/mount-provider';

// Additional hook for components that need lazy mounting
export function useLazyMounted(delay = 0) {
  const { isMounted, isHydrated } = useMountContext();
  const [isLazyMounted, setIsLazyMounted] = useState(false);

  useEffect(() => {
    if (!isMounted || !isHydrated) return;

    const timer = setTimeout(() => {
      setIsLazyMounted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, isMounted, isHydrated]);

  return isLazyMounted;
}

// Hook for components that need to wait for parent mounting
export function useChildMounted(parentRef: React.RefObject<HTMLElement>) {
  const { isMounted, isHydrated } = useMountContext();
  const [isChildMounted, setIsChildMounted] = useState(false);

  useEffect(() => {
    if (!isMounted || !isHydrated || !parentRef.current) return;
    setIsChildMounted(true);
  }, [isMounted, isHydrated, parentRef]);

  return isChildMounted;
}

// Re-export types
export type { MountContextValue } from '@/providers/mount-provider';
