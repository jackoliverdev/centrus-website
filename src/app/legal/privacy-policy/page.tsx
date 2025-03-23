import { Metadata } from 'next';

import { LegalContent } from '@/components/sections/legal/legal-content';
import { privacyContent } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'Learn how Centrus AI protects and handles your data with enterprise-grade security and compliance.',
};

export default function PrivacyPage() {
  return (
    <div>
      <LegalContent
        title="Privacy Policy"
        subtitle="Last updated: March 22, 2025"
        content={privacyContent}
      />
    </div>
  );
}
