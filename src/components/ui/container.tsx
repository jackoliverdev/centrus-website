import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const containerVariants = cva('mx-auto w-full px-4 sm:px-6 lg:px-8 ', {
  variants: {
    size: {
      default: 'max-w-7xl',
      small: 'max-w-5xl',
      large: 'max-w-8xl',
    },
    spacing: {
      default: 'py-8 md:py-12 lg:py-16',
      small: 'py-4 md:py-6 lg:py-8',
      large: 'py-12 md:py-16 lg:py-24',
      none: '',
    },
  },
  defaultVariants: {
    size: 'default',
    spacing: 'default',
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, spacing, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ size, spacing, className }))}
        {...props}
      />
    );
  }
);
Container.displayName = 'Container';

export { Container, containerVariants };
