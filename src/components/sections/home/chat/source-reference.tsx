'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { springs } from '@/lib/utils/chat-animations'
import { SourceFileIcon } from '@/components/ui/file-icon'

interface SourceReferenceProps {
  filename: string
  url?: string
  className?: string
  onSourceClick?: (url: string) => void
  delay?: number
}

export const SourceReference = React.forwardRef<HTMLDivElement, SourceReferenceProps>(({
  filename,
  url,
  className,
  onSourceClick,
  delay = 0,
  ...props
}, ref) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
      onSourceClick?.(url)
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springs.gentle, delay }}
      className={cn(
        "relative group",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-primary/70">
          Source:
        </span>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleClick}
          className="relative cursor-pointer w-full"
        >
          <SourceFileIcon
            filename={filename}
            className="hover:brightness-110 text-2xl"
          />
          {url && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...springs.bouncy, delay: delay + 0.2 }}
              className="absolute -right-2 -top-2 h-4 w-4 rounded-full
                         bg-primary/20 backdrop-blur-sm flex items-center justify-center
                         border border-primary/30 text-primary"
            >
              <ExternalLink className="h-2.5 w-2.5" />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
})

SourceReference.displayName = 'SourceReference'