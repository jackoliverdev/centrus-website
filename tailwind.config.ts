import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#2B9CE5',
          50: '#E6F4FC',
          100: '#CCE9FA',
          200: '#99D3F5',
          300: '#66BDF0',
          400: '#33A7EB',
          500: '#2B9CE5',
          600: '#1577B8',
          700: '#0F5183',
          800: '#0A324F',
          900: '#04121C',
        },
        secondary: {
          DEFAULT: '#041B70',
          50: '#E6EAF4',
          100: '#CCD5E9',
          200: '#99AAD3',
          300: '#6680BD',
          400: '#3355A7',
          500: '#041B70',
          600: '#031659',
          700: '#021042',
          800: '#010B2C',
          900: '#000515',
        },
        accent: {
          DEFAULT: '#00CC88',
          50: '#E6FAF4',
          100: '#CCF5E9',
          200: '#99EBD3',
          300: '#66E0BD',
          400: '#33D6A7',
          500: '#00CC88',
          600: '#00A36D',
          700: '#007A51',
          800: '#005236',
          900: '#00291B',
        },
        neutral: {
          DEFAULT: '#1E293B',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Add dark theme specific utility classes
        dark: {
          'layer-0': 'hsl(226, 70%, 12%)', // Base background
          'layer-1': 'hsl(226, 70%, 15%)', // Cards
          'layer-2': 'hsl(226, 70%, 17%)', // Popovers
          'layer-3': 'hsl(226, 70%, 20%)', // Elevated components
          hover: 'hsl(226, 70%, 25%)', // Hover states
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        heading: ['var(--font-sans)', ...fontFamily.sans],
      },
      // Add box-shadow utilities for dark mode depth
      boxShadow: {
        'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
        'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
        'dark-highlight': '0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      // Enhanced backdrop blur for dark mode
      backdropBlur: {
        dark: '12px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'fade-down': 'fade-down 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} satisfies Config;

export default config;
