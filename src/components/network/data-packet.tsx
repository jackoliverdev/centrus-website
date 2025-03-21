/**
 * src/components/network/data-packet.tsx
 * Animated data packet component for network visualizations
 */

'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface DataPacketProps {
  x: number;
  y: number;
  progress: number;
  phase: 'entry' | 'travel' | 'exit';
}

export function DataPacket({ x, y, progress, phase }: DataPacketProps) {
  // Debug mounting/unmounting
  React.useEffect(() => {
    console.log('DataPacket mounted:', { x, y, progress, phase });
    return () => console.log('DataPacket unmounted:', { x, y, progress, phase });
  }, [x, y, progress, phase]);

  // Ensure values exist and log render
  const displayX = x ?? 0;
  const displayY = y ?? 0;
  console.log('DataPacket rendering:', { x: displayX, y: displayY, progress, phase });

  const opacity =
    phase === 'entry' ? progress * 5 : phase === 'exit' ? 1 - (progress - 0.8) * 5 : 1;

  const scale = phase === 'entry' ? progress * 5 : phase === 'exit' ? 1 - (progress - 0.8) * 5 : 1;

  return (
    <motion.g
      style={{
        x: `${displayX * 100}%`,
        y: `${displayY * 100}%`,
      }}
    >
      {/* Debug circle */}
      <circle r="20" fill="red" opacity="0.5" />

      {/* Glow effect */}
      <motion.circle
        r="10"
        fill="rgba(43, 156, 229, 0.2)"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Data packet */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.path
          d="M -6 0 L 0 -4 L 6 0 L 0 4 Z"
          fill="none"
          stroke="rgba(43, 156, 229, 0.8)"
          strokeWidth="1.5"
        />

        <motion.path d="M -3 0 L 0 -2 L 3 0 L 0 2 Z" fill="rgba(43, 156, 229, 0.8)" />

        <circle r="1" fill="white" />
      </motion.g>

      {/* Trail effect */}
      <motion.circle
        r="2"
        fill="rgba(43, 156, 229, 0.3)"
        animate={{
          scale: [1, 2],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.g>
  );
}
