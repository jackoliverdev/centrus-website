import { Metadata } from 'next';

import { CareersHero } from '@/components/sections/careers/careers-hero';
import { JobOpenings } from '@/components/sections/careers/job-openings';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join our team and help shape the future of enterprise AI.',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <CareersHero />
      <JobOpenings />
    </div>
  );
}
