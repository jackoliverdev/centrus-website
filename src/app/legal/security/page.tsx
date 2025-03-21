import { Metadata } from 'next';

import { LegalContent } from '@/components/sections/legal/legal-content';
import { securityContent } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Security Policy | Centrus AI',
  description: 'Learn about how we protect your data with enterprise-grade security measures.',
};

export default function SecurityPage() {
  return (
    <div>
      <LegalContent
        title="Security Policy"
        subtitle="Last updated: December 23, 2024"
        content={securityContent}
      />
    </div>
  );
}
