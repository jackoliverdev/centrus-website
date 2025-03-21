/**
 * src/lib/hooks/use-network-animation.ts
 * Custom hook for managing network data packet animations
 */

'use client'

import { useState, useRef, useEffect } from 'react'
import { animate } from 'framer-motion'

interface AnimatedPacket {
  id: string
  sourceIndex: number
  x: number
  y: number
  progress: number
  phase: 'entry' | 'travel' | 'exit'
}

const ANIMATION_DURATION = 2.5
const PACKET_INTERVAL = 3000

export function useNetworkAnimation(
  sourcePositions: { x: number; y: number }[],
  targetPosition: { x: number; y: number }
) {
  const [packets, setPackets] = useState<AnimatedPacket[]>([])
  const [activeSourceIndex, setActiveSourceIndex] = useState<number | null>(null)
  const animationFrame = useRef<number>()
  const lastTime = useRef<number>(0)

  // Animation loop
  useEffect(() => {
    const updatePackets = (time: number) => {
      if (!lastTime.current) lastTime.current = time
      const deltaTime = (time - lastTime.current) / 1000
      lastTime.current = time

      setPackets(prevPackets => {
        const updatedPackets = prevPackets
          .map(packet => {
            const progress = Math.min(packet.progress + deltaTime / ANIMATION_DURATION, 1)
            
            const sourcePos = sourcePositions[packet.sourceIndex]
            const t = progress
            
            // Debug packet update
            console.log('Updating packet:', {
              id: packet.id,
              progress,
              position: {
                source: sourcePos,
                target: targetPosition
              }
            })
            
            // Control points for smooth curve
            const cp1x = sourcePos.x + (targetPosition.x - sourcePos.x) * 0.5
            const cp1y = sourcePos.y
            const cp2x = targetPosition.x + (sourcePos.x - targetPosition.x) * 0.2
            const cp2y = targetPosition.y

            // Cubic bezier interpolation
            const x = Math.pow(1-t, 3) * sourcePos.x +
                     3 * Math.pow(1-t, 2) * t * cp1x +
                     3 * (1-t) * Math.pow(t, 2) * cp2x +
                     Math.pow(t, 3) * targetPosition.x
                     
            const y = Math.pow(1-t, 3) * sourcePos.y +
                     3 * Math.pow(1-t, 2) * t * cp1y +
                     3 * (1-t) * Math.pow(t, 2) * cp2y +
                     Math.pow(t, 3) * targetPosition.y

            // Determine animation phase
            let phase: 'entry' | 'travel' | 'exit' = 'travel'
            if (progress < 0.2) phase = 'entry'
            else if (progress > 0.8) phase = 'exit'

            return { ...packet, progress, x, y, phase }
          })
          .filter(packet => {
            const keep = packet.progress < 1
            if (!keep) {
              console.log('Removing packet:', packet.id)
            }
            return keep
          })

        console.log('Updated packets:', updatedPackets)
        return updatedPackets
      })

      animationFrame.current = requestAnimationFrame(updatePackets)
    }

    console.log('Starting animation loop')
    animationFrame.current = requestAnimationFrame(updatePackets)

    return () => {
      console.log('Cleaning up animation loop')
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [sourcePositions, targetPosition])

  // Trigger new packets periodically
  useEffect(() => {
    console.log('Setting up packet creation interval')
    const interval = setInterval(() => {
      const sourceIndex = Math.floor(Math.random() * sourcePositions.length)
      const sourcePos = sourcePositions[sourceIndex]

      console.log('Creating new packet:', {
        sourceIndex,
        sourcePosition: sourcePos
      })

      setActiveSourceIndex(sourceIndex)
      setPackets(prev => [...prev, {
        id: Math.random().toString(),
        sourceIndex,
        x: sourcePos.x,
        y: sourcePos.y,
        progress: 0,
        phase: 'entry'
      }])

      setTimeout(() => setActiveSourceIndex(null), 1000)
    }, PACKET_INTERVAL)

    return () => clearInterval(interval)
  }, [sourcePositions])

  return {
    packets,
    activeSourceIndex
  }
}