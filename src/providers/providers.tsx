'use client';

import { MotionProvider } from './motion-provider';
import { MountProvider } from './mount-provider';
import { ThemeProvider } from './theme-provider';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <MountProvider delayAnimation={500}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <MotionProvider>{children}</MotionProvider>
      </ThemeProvider>
    </MountProvider>
  );
}
