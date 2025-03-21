import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const headingVariants = cva('font-sans scroll-m-20 tracking-tight', {
  variants: {
    level: {
      h1: 'text-4xl font-extrabold lg:text-5xl',
      h2: 'text-3xl font-semibold lg:text-4xl',
      h3: 'text-2xl font-semibold lg:text-3xl',
      h4: 'text-xl font-semibold lg:text-2xl',
      h5: 'text-lg font-semibold lg:text-xl',
      h6: 'text-base font-semibold lg:text-lg',
    },
    color: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
    },
  },
  defaultVariants: {
    level: 'h1',
    color: 'default',
  },
});

const textVariants = cva('leading-7', {
  variants: {
    variant: {
      default: 'text-base',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'default',
    weight: 'normal',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, color, ...props }, ref) => {
    const Component = level || 'h1';
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, color, className }))}
        {...props}
      />
    );
  }
);
Heading.displayName = 'Heading';

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, weight, ...props }, ref) => {
    return <p ref={ref} className={cn(textVariants({ variant, weight, className }))} {...props} />;
  }
);
Text.displayName = 'Text';

export { Heading, Text, headingVariants, textVariants };
