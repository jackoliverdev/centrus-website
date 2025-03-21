'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'; // Add this import
import Link from 'next/link';

import { CaseStudy } from '@/content/case-studies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: Math.min(index * 0.1, 0.8), // Cap the maximum delay
        duration: 0.3,
      }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <Link href={`/resources/case-studies/${caseStudy.slug}`} prefetch={false}>
        <div
          className={`
          relative h-full overflow-hidden
          rounded-xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b
          before:from-primary/50 before:to-primary/5 before:p-[1px]
        `}
        >
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-xl">
            {/* Image Section */}
            <div className="relative aspect-[16/9]">
              <div className="relative h-full w-full">
                <Image
                  src="/api/placeholder/800/450"
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

              {/* Tags */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <span className="text-primary-foreground rounded-full bg-primary/80 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  {caseStudy.industry}
                </span>
                <span className="text-secondary-foreground rounded-full bg-secondary/80 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  {caseStudy.solution}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
              <h3 className="line-clamp-2 text-xl font-semibold transition-colors group-hover:text-primary">
                {caseStudy.title}
              </h3>

              <p className="line-clamp-3  h-16 text-sm text-muted-foreground">
                {caseStudy.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {caseStudy.metrics.slice(0, 2).map((metric, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Read More Link */}
              <div className="flex items-center justify-between pt-4 text-sm">
                <span className="font-medium transition-colors group-hover:text-primary">
                  Read Case Study
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Decorative corner gradients */}
            <div className="absolute right-0 top-0 -z-10 h-24 w-24 rotate-45 transform bg-gradient-to-r from-primary/30 to-primary/0 blur-2xl transition-opacity group-hover:opacity-75" />
            <div className="absolute bottom-0 left-0 -z-10 h-24 w-24 rotate-45 transform bg-gradient-to-r from-secondary/30 to-secondary/0 blur-2xl transition-opacity group-hover:opacity-75" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
