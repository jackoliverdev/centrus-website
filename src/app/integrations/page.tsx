import { Metadata } from 'next';

import { CustomIntegrations } from '@/components/sections/integrations/custom';
import { IntegrationsFaq } from '@/components/sections/integrations/faq';
import { IntegrationsGrid } from '@/components/sections/integrations/integrations-grid';
import { IntegrationsHero } from '@/components/sections/integrations/integrations-hero';

export const metadata: Metadata = {
  title: 'Integrations | Centrus AI',
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
