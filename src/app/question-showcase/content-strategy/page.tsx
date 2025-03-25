// For content-strategy.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, Edit, Lightbulb, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function ContentStrategyPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Content Strategy Q2 2024', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Last Updated: April 3, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('AI Integration Feature - Blog Topics:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. 5 Ways AI Transforms Workflow Efficiency', 30, 55);
    doc.text('2. Case Study: 32% Productivity Boost with AI', 30, 65);
    doc.text('3. AI Integration: Setup Guide in Under 10 Minutes', 30, 75);
    doc.text('4. From Manual to Automated: The AI Advantage', 30, 85);
    doc.text('5. ROI Calculator: Measuring Your AI Investment', 30, 95);
    
    doc.setFontSize(14);
    doc.text('Content Distribution Plan:', 20, 110);
    doc.setFontSize(12);
    doc.text('1. LinkedIn: Weekly article (Tuesdays)', 30, 120);
    doc.text('2. Email Newsletter: Feature spotlight (1st Thursday)', 30, 130);
    doc.text('3. Industry publications: Guest post opportunities', 30, 140);
    
    doc.setFontSize(10);
    doc.text('Generated on April 5, 2024', 20, 280);
    doc.text('For marketing team use only', 20, 285);

    doc.save('Content_Strategy_Q2_2024.pdf');
  };

  return (
    <main className="flex min-h-screen flex-col mt-[40px]">
      <div className="flex-1 bg-background p-6 md:p-12">
        {/* Top Navigation */}
        <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <button 
            onClick={handleDownloadPDF}
            className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <Download className="h-4 w-4 mr-1" />
            Download PDF
          </button>
        </div>

        {/* Document */}
        <Card className="max-w-5xl mx-auto bg-card p-8 md:p-12 shadow-lg">
          {/* Header */}
          <div className="border-b border-border pb-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Content Strategy</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>Content_Strategy_Q2_2024.pdf</p>
                </div>
              </div>
              <Edit className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Prepared By</p>
                <p className="text-sm">Marketing Content Team</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Quarter</p>
                <p className="text-sm">Q2 2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Focus Feature</p>
                <p className="text-sm">AI Integration</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Strategic Overview</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>This quarter's content strategy focuses on our new AI Integration feature, highlighting its efficiency benefits, implementation ease, and real-world impact. The content mix aims to address different stages of the customer journey, from awareness to implementation.</p>
            </div>
          </div>

          {/* Blog Post Ideas */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Recommended Blog Topics</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">5 Ways AI Transforms Workflow Efficiency</h3>
                <p className="text-sm text-muted-foreground">Highlight specific workflow improvements our clients have experienced: document processing, query response time, meeting summaries, data extraction, and customer support automation.</p>
                <div className="mt-2 text-xs text-primary flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>High search volume potential</span>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Case Study: 32% Productivity Boost with AI</h3>
                <p className="text-sm text-muted-foreground">Detailed case study featuring Mitchell & Co's implementation, process changes, metrics before and after, and ROI calculation. Include quotes from their CTO.</p>
                <div className="mt-2 text-xs text-primary flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>Strong conversion potential</span>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">AI Integration: Setup Guide in Under 10 Minutes</h3>
                <p className="text-sm text-muted-foreground">Step-by-step walkthrough with screenshots showing how quickly users can set up and configure our AI integration with existing systems. Include a video demonstration.</p>
                <div className="mt-2 text-xs text-primary flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Good for implementation stage</span>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">From Manual to Automated: The AI Advantage</h3>
                <p className="text-sm text-muted-foreground">Compare before-and-after scenarios of common business processes, highlighting time saved, error reduction, and employee satisfaction improvements.</p>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">ROI Calculator: Measuring Your AI Investment</h3>
                <p className="text-sm text-muted-foreground">Provide a framework for calculating return on investment for AI implementation, including interactive calculator and typical payback periods based on company size.</p>
              </div>
            </div>
          </div>

          {/* Publication Schedule */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Publication Schedule</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-4 border-b border-border">
                  <div className="font-medium">April</div>
                  <div className="col-span-3">
                    <p className="text-sm mb-1 font-medium">5 Ways AI Transforms Workflow Efficiency</p>
                    <p className="text-xs text-muted-foreground">Publishing date: April 12th</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-4 border-b border-border">
                  <div className="font-medium">May</div>
                  <div className="col-span-3">
                    <p className="text-sm mb-1 font-medium">Case Study: 32% Productivity Boost with AI</p>
                    <p className="text-xs text-muted-foreground">Publishing date: May 3rd</p>
                    <p className="text-sm mt-3 mb-1 font-medium">AI Integration: Setup Guide in Under 10 Minutes</p>
                    <p className="text-xs text-muted-foreground">Publishing date: May 17th</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="font-medium">June</div>
                  <div className="col-span-3">
                    <p className="text-sm mb-1 font-medium">From Manual to Automated + ROI Calculator</p>
                    <p className="text-xs text-muted-foreground">Publishing dates: June 7th & 21st</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Prepared by: Emma Thompson, Content Director</p>
            <p>For marketing team use only</p>
          </div>
        </Card>
      </div>
    </main>
  );
}