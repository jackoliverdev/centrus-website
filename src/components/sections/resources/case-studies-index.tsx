'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { useState } from 'react';

import { CaseStudiesHero } from '@/components/sections/resources/case-studies-hero';
import { CaseStudyCard } from '@/components/sections/resources/case-study-card';
import type { CaseStudy } from '@/content/case-studies';

interface CaseStudiesIndexProps {
  caseStudies: CaseStudy[];
  industries: readonly string[];
  solutions: readonly string[];
}

export function CaseStudiesIndex({ caseStudies, industries, solutions }: CaseStudiesIndexProps) {
  const [selectedFilter, setSelectedFilter] = useState<{
    type: 'industry' | 'solution' | null;
    value: string | null;
  }>({ type: null, value: null });

  const filteredCaseStudies = caseStudies.filter(study => {
    if (!selectedFilter.value) return true;
    if (selectedFilter.type === 'industry') return study.industry === selectedFilter.value;
    if (selectedFilter.type === 'solution') return study.solution === selectedFilter.value;
    return true;
  });

  const clearFilter = () => {
    setSelectedFilter({ type: null, value: null });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <CaseStudiesHero />

      <div className="container mx-auto px-4 py-20">
        {/* Combined Filter */}
        <div className="mb-16">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-lg font-medium">Filter Case Studies</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {/* Clear Filter */}
            {selectedFilter.value && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={clearFilter}
                className="text-primary-foreground flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/90"
              >
                Clear Filter
                <X className="h-4 w-4" />
              </motion.button>
            )}

            {/* Industry Filters */}
            {industries.map((industry, index) => (
              <motion.button
                key={`industry-${industry}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedFilter({ type: 'industry', value: industry })}
                className={`rounded-full px-4 py-2 text-sm font-medium ring-1 ring-border
                  transition-all duration-300 ${
                    selectedFilter.value === industry
                      ? 'text-primary-foreground bg-primary'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
              >
                {industry}
              </motion.button>
            ))}

            {/* Solution Filters */}
            {solutions.map((solution, index) => (
              <motion.button
                key={`solution-${solution}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (industries.length + index) * 0.05 }}
                onClick={() => setSelectedFilter({ type: 'solution', value: solution })}
                className={`rounded-full px-4 py-2 text-sm font-medium ring-1 ring-border
                  transition-all duration-300 ${
                    selectedFilter.value === solution
                      ? 'text-primary-foreground bg-primary'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
              >
                {solution}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter.value || 'all'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredCaseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} caseStudy={study} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredCaseStudies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <p className="text-lg text-muted-foreground">
              No case studies found for the selected filter.
            </p>
            <button onClick={clearFilter} className="mt-2 text-primary hover:underline">
              Clear filter
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
