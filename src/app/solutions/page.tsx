'use client';

import { Metadata } from 'next';

import { CaseStudiesSection } from '@/components/sections/solutions/case-studies';
import { DemoSection } from '@/components/sections/solutions/demo-section';
import { SolutionsCard } from '@/components/sections/solutions/solutions-card';
import { SolutionsHero } from '@/components/sections/solutions/solutions-hero';
import { TechnologySection } from '@/components/sections/solutions/technology';
import { UseCasesGrid } from '@/components/sections/solutions/use-cases-grid';

export default function SolutionsPage() {
  return (
    <div className="relative">
      <SolutionsHero />
      <UseCasesGrid />
      <TechnologySection />
      {/* <CaseStudiesSection /> */}
      <DemoSection />
    </div>
  );
}
