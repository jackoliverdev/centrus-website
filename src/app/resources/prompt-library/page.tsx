import { Metadata } from 'next';
import { PromptLibraryIndex } from '@/components/sections/resources/prompt-library-index';

export const metadata: Metadata = {
  title: 'Prompt Library',
  description:
    'Browse our collection of effective AI prompts designed for various business roles and use cases.',
  keywords: 'AI prompts, prompt engineering, prompt library, business prompts, role-specific prompts, optimised prompts, productivity templates, AI workflows',
  openGraph: {
    title: 'Centrus AI Prompt Library',
    description: 'Discover proven AI prompts for your business needs and workflow optimisation.',
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
    title: 'AI Prompt Library | Centrus AI',
    description: 'Access our curated collection of specialised prompts designed for business roles, workflows, and productivity enhancement.',
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
