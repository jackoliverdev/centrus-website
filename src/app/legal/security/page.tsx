import { Metadata } from 'next';

import { LegalContent } from '@/components/sections/legal/legal-content';
import { securityContent } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Security',
  description: 'Learn about how we protect your data with enterprise-grade security measures.',
};

export default function SecurityPage() {
  return (
    <div>
      <LegalContent
        title="Security Policy"
        subtitle="Last updated: March 22, 2025"
        content={securityContent}
      />
    </div>
  );
}
