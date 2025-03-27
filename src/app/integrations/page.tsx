import { Metadata } from 'next';

import { IntegrationsHero } from '@/components/sections/integrations/integrations-hero';
import { IntegrationsGrid } from '@/components/sections/integrations/integrations-grid';
import { CustomIntegrations } from '@/components/sections/integrations/custom';
import { IntegrationsFaq } from '@/components/sections/integrations/faq';



export const metadata: Metadata = {
  title: 'Connect Your Entire Workspace | AI Integrations',
  description:
    'Connect your business tools with Centrus AI, including Microsoft Teams, Google Drive and WhatsApp. Discover our integrations.',
  keywords: 'AI platform integrations',
  openGraph: {
    title: 'Connect Your Entire Workspace | AI Integrations',
    description: 'Connect your business tools with Centrus AI, including Microsoft Teams, Google Drive and WhatsApp. Discover our integrations.',
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
    title: 'AI Business Integrations',
    description: 'Connect your business tools with Centrus AI, including Microsoft Teams, Google Drive and WhatsApp. Discover our integrations.',
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
