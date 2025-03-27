import { Metadata } from 'next';
import { PromptLibraryIndex } from '@/components/sections/resources/prompt-library-index';

export const metadata: Metadata = {
  title: 'AI Prompt Library',
  description:
    'Find business-related AI prompts with role-specific examples and best practices. Browse our AI prompt library.',
  keywords: 'business AI prompts',
  openGraph: {
    title: 'AI Prompt Library',
    description: 'Find business-related AI prompts with role-specific examples and best practices. Browse our AI prompt library.',
    type: 'website',
    url: 'https://centrus.ai/resources/prompt-library',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Prompt Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompt Library',
    description: 'Find business-related AI prompts with role-specific examples and best practices. Browse our AI prompt library.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/resources/prompt-library',
  },
};

export default function PromptLibraryPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <PromptLibraryIndex />
    </div>
  );
}
