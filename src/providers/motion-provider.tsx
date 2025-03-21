'use client';

import { MotionConfig } from 'framer-motion';
import { ReactNode } from 'react';

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.15 }}>
      {children}
    </MotionConfig>
  );
}
