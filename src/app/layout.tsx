import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { DM_Sans, Rajdhani } from 'next/font/google';
import { Suspense } from 'react';
import '@/styles/globals.css';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Providers } from '@/providers/providers';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Single DM Sans configuration
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

// Add Rajdhani just for the logo
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

// Viewport configuration with dark mode support
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#041B70' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// Optimized metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://centrus.ai'),
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
  },
  title: {
    default: 'Centrus AI | Your AI-Powered Business Assistant',
    template: '%s | Centrus AI',
  },
  description:
    'Transform your company knowledge access with conversational AI. Instantly retrieve, analyse, and create work-related information.',
  keywords: [
    'AI business assistant',
    'company knowledge management',
    'conversational AI',
    'data retrieval',
    'enterprise AI',
    'workplace automation',
  ],
  authors: [{ name: 'Centrus AI' }],
  creator: 'Centrus AI',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    title: 'Centrus AI | Your AI-Powered Business Assistant',
    description: 'Transform your company knowledge access with conversational AI.',
    siteName: 'Centrus AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centrus AI',
    description: 'Transform your company knowledge access with conversational AI.',
    creator: '@CentrusAI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Loading component for Suspense boundaries
function PageLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        dmSans.variable,
        rajdhani.variable,
        'font-sans antialiased'
      )}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body className={cn(
        dmSans.className,
        'min-h-screen bg-background'
      )}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <ScrollToTop />
            <Header />
            <main className="flex-1">
              {/* <Suspense fallback={<PageLoading />}></Suspense> */}
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
