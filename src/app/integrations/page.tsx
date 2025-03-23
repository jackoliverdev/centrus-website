import { Metadata } from 'next';

import { IntegrationsHero } from '@/components/sections/integrations/integrations-hero';
import { IntegrationsGrid } from '@/components/sections/integrations/integrations-grid';
import { CustomIntegrations } from '@/components/sections/integrations/custom';
import { IntegrationsFaq } from '@/components/sections/integrations/faq';



export const metadata: Metadata = {
  title: 'Integrations',
  description:
    'Connect Centrus AI with your favorite tools. Seamless integration with Google Drive, Microsoft Teams, Slack, and more.',
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
