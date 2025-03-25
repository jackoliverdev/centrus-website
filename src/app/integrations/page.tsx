import { Metadata } from 'next';

import { IntegrationsHero } from '@/components/sections/integrations/integrations-hero';
import { IntegrationsGrid } from '@/components/sections/integrations/integrations-grid';
import { CustomIntegrations } from '@/components/sections/integrations/custom';
import { IntegrationsFaq } from '@/components/sections/integrations/faq';



export const metadata: Metadata = {
  title: 'Integrations',
  description:
    'Connect Centrus AI with your favourite tools. Seamless integration with Google Drive, Microsoft Teams, Slack, and more.',
  keywords: 'AI integrations, enterprise integrations, Slack integration, Microsoft Teams, Google Drive, API integration, workflow automation, data synchronisation',
  openGraph: {
    title: 'Integrations | Centrus AI',
    description: 'Connect Centrus AI with your favourite tools. Seamless integration with Google Drive, Microsoft Teams, Slack, and more.',
    type: 'website',
    url: 'https://centrus.ai/integrations',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI Integrations | Centrus AI',
    description: 'Seamlessly connect Centrus AI with your existing business tools. Enhance your workflow with intelligent integrations for all your favourite platforms.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/integrations',
  },
};

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <IntegrationsHero />
      <IntegrationsGrid />
      <CustomIntegrations />
      <IntegrationsFaq />
    </div>
  );
}
