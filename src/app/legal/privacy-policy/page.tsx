import { Metadata } from 'next';

import { LegalContent } from '@/components/sections/legal/legal-content';
import { privacyContent } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy | Centrus AI',
  description:
    'Learn how Centrus AI protects and handles your data with enterprise-grade security and compliance.',
};

export default function PrivacyPage() {
  return (
    <div>
      <LegalContent
        title="Privacy Policy"
        subtitle="Last updated: December 25, 2024"
        content={privacyContent}
      />
    </div>
  );
}
