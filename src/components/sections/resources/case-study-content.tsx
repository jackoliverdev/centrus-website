'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Users, Globe } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Button } from '@/components/ui/button';
import type { CaseStudy } from '@/content/case-studies';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt={caseStudy.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                  {caseStudy.industry}
                </span>
                <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-sm text-secondary">
                  {caseStudy.solution}
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">{caseStudy.title}</h1>

              <p className="max-w-2xl text-xl text-muted-foreground">{caseStudy.description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 lg:col-span-1"
          >
            {/* Company Info */}
            <div className="space-y-6 rounded-xl bg-muted/50 p-6">
              <h3 className="text-lg font-semibold">Company Details</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Company</p>
                    <p className="font-medium">{caseStudy.company.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Size</p>
                    <p className="font-medium">{caseStudy.company.size}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{caseStudy.company.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="rounded-xl bg-muted/50 p-6">
              <h3 className="mb-6 text-lg font-semibold">Key Results</h3>

              <div className="grid grid-cols-2 gap-6">
                {caseStudy.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="prose prose-blue max-w-none dark:prose-invert">
              <ReactMarkdown>{caseStudy.content}</ReactMarkdown>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="mt-16 border-t border-border pt-8">
          <Button variant="ghost" asChild>
            <Link href="/resources/case-studies" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
