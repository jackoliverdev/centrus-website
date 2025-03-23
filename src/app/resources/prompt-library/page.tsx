import { Metadata } from 'next';
import { PromptLibraryIndex } from '@/components/sections/resources/prompt-library-index';

export const metadata: Metadata = {
  title: 'Prompt Library',
  description:
    'Browse our collection of effective AI prompts designed for various business roles and use cases.',
  openGraph: {
    title: 'Centrus AI Prompt Library',
    description: 'Discover proven AI prompts for your business needs',
    type: 'website',
  },
};

export default function PromptLibraryPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <PromptLibraryIndex />
    </div>
  );
}
