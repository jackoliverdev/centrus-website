'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import * as React from 'react';

import { useMountContext } from './mount-provider';

// Static script to prevent theme flashing
const themeScript = `
  (function() {
    // Get theme from localStorage or system preference
    const getTheme = () => {
      const stored = localStorage.getItem('theme')
      if (stored) return stored
      
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    // Apply theme instantly
    const theme = getTheme()
    const root = document.documentElement
    
    // Remove previous classes
    root.classList.remove('light', 'dark')
    // Add current theme class
    root.classList.add(theme)
    // Set color-scheme
    root.style.colorScheme = theme
    // Cache for later
    root.setAttribute('data-theme', theme)
  })();
`;

// Theme script component
const ThemeScript = React.memo(() => (
  <script
    dangerouslySetInnerHTML={{
      __html: themeScript,
    }}
  />
));

ThemeScript.displayName = 'ThemeScript';

// Optimized theme provider
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      storageKey="theme"
    >
      {children}
      <ThemeScript />
    </NextThemesProvider>
  );
}

// Optimized theme hook
export function useTheme() {
  const { isHydrated } = useMountContext();
  const context = React.useContext(NextThemesProvider);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  // Get theme from document if available, otherwise use context
  const theme = React.useMemo(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || context.theme;
    }
    return context.theme;
  }, [context.theme]);

  const setTheme = React.useCallback(context.setTheme, [context.setTheme]);

  // Theme helper functions are only available after hydration
  const setThemeImmediate = React.useCallback(
    (newTheme: string) => {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
        document.documentElement.style.colorScheme = newTheme;
      }
      context.setTheme(newTheme);
    },
    [context.setTheme]
  );

  return {
    theme,
    setTheme,
    isHydrated,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    isSystem: theme === 'system',
    setThemeImmediate,
  };
}

// Type exports for better DX
export type Theme = 'dark' | 'light' | 'system';
export type ThemeProviderType = ReturnType<typeof useTheme>;
