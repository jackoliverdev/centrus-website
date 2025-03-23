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
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-semibold text-foreground">
          Source:
        </span>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleClick}
          className="relative cursor-pointer w-full"
        >
          <div className="flex items-center gap-2 p-2 px-3 rounded hover:bg-primary/10 transition-colors bg-primary/5">
            <SourceFileIcon
              filename={filename}
              className="hover:brightness-110 text-xl sm:text-2xl text-foreground"
            />
            {url && (
              <motion.div 
                className="hidden sm:flex ml-auto" 
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-4 w-4 text-primary" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
})

SourceReference.displayName = 'SourceReference'