import { type VariantProps } from 'class-variance-authority';

import { buttonVariants } from '@/components/ui/button';
import { headingVariants, textVariants } from '@/components/ui/typography';

// Animation Types
export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

// Component Variants
export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type HeadingVariants = VariantProps<typeof headingVariants>;
export type TextVariants = VariantProps<typeof textVariants>;

// Theme Types
export type Theme = 'dark' | 'light' | 'system';

// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface DemoFormData extends ContactFormData {
  phone: string;
  companySize: string;
  industry: string;
}

// Component Props Types
export interface LayoutProps {
  children: React.ReactNode;
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
}

export interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
}
