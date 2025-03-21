'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  File, // Changed from FileIcon
  FileType, // Changed from FilePdf
  type LucideIcon,
} from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { springs } from '@/lib/utils/chat-animations';

type FileType = 'pdf' | 'doc' | 'default';

interface FileIconProps {
  type?: FileType;
  className?: string;
  showLabel?: boolean;
  size?: number;
  animate?: boolean;
}

const iconMap: Record<FileType, LucideIcon> = {
  pdf: FileType, // Changed from FilePdf
  doc: FileText,
  default: File, // Changed from FileIcon
};

const colorMap: Record<
  FileType,
  {
    background: string;
    icon: string;
    text: string;
    border: string;
  }
> = {
  pdf: {
    background: 'bg-red-500/10',
    icon: 'text-red-500',
    text: 'text-red-700',
    border: 'border-red-500/20',
  },
  doc: {
    background: 'bg-red-500/10',
    icon: 'text-red-500',
    text: 'text-red-700',
    border: 'border-red-500/20',
  },
  default: {
    background: 'bg-gray-500/10',
    icon: 'text-gray-500',
    text: 'text-gray-700',
    border: 'border-gray-500/20',
  },
};

const getFileTypeFromName = (filename: string): FileType => {
  const extension = filename.split('.').pop()?.toLowerCase();
  if (extension === 'pdf') return 'pdf';
  if (['doc', 'docx'].includes(extension || '')) return 'doc';
  return 'default';
};

export const FileIcon = React.forwardRef<HTMLDivElement, FileIconProps & { filename?: string }>(
  ({ type, className, showLabel = false, size = 20, animate = true, filename, ...props }, ref) => {
    // Determine file type from filename if provided
    const fileType = type || (filename ? getFileTypeFromName(filename) : 'default');
    const Icon = iconMap[fileType];
    const colors = colorMap[fileType];

    const iconVariants = {
      initial: { scale: 0.8, opacity: 0 },
      animate: {
        scale: 1,
        opacity: 1,
        transition: springs.snappy,
      },
      hover: {
        scale: 1.05,
        transition: springs.gentle,
      },
    };

    return (
      <motion.div
        ref={ref}
        variants={animate ? iconVariants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        whileHover="hover"
        className={cn(
          ' inline-flex  items-center gap-2 rounded-lg px-2 py-1',
          colors.background,
          colors.text,
          'border',
          colors.border,
          'transition-colors duration-200',
          className
        )}
        {...props}
      >
        <Icon
          size={size}
          className={cn('hidden flex-shrink-0 transition-colors sm:block', colors.icon)}
        />
        {showLabel && filename && (
          <span className=" truncate  text-[10px] font-normal sm:text-sm">{filename}</span>
        )}
      </motion.div>
    );
  }
);

FileIcon.displayName = 'FileIcon';

// Extension component for source references
export const SourceFileIcon = React.forwardRef<
  HTMLDivElement,
  {
    filename: string;
    className?: string;
  }
>(({ filename, className, ...props }, ref) => {
  return (
    <FileIcon
      ref={ref}
      filename={filename}
      showLabel
      animate
      className={cn(
        '  cursor-pointer  transition-all  hover:brightness-110',
        'shadow-sm backdrop-blur-sm',
        className
      )}
      {...props}
    />
  );
});

SourceFileIcon.displayName = 'SourceFileIcon';

// Extension component for minimal file type indicator
export const FileTypeIndicator = React.forwardRef<
  HTMLDivElement,
  {
    type: FileType;
    className?: string;
  }
>(({ type, className, ...props }, ref) => {
  return (
    <FileIcon
      ref={ref}
      type={type}
      size={16}
      animate={false}
      className={cn('px-1.5 py-0.5', className)}
      {...props}
    />
  );
});

FileTypeIndicator.displayName = 'FileTypeIndicator';
