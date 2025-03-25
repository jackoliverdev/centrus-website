// For competitor-analysis.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, BarChart2, CheckCircle, PieChart } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function CompetitorAnalysisPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Competitor Analysis 2025', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Last Updated: February 15, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Key Differentiators:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. 40% faster implementation time', 30, 55);
    doc.text('2. Native integration with Microsoft products', 30, 65);
    doc.text('3. UK-based customer support', 30, 75);
    doc.text('4. Customisable reporting dashboard', 30, 85);
    doc.text('5. Lower TCO by approximately 22%', 30, 95);
    
    doc.setFontSize(14);
    doc.text('Implementation Timeline Comparison:', 20, 110);
    doc.setFontSize(12);
    doc.text('Centrus AI: 3-4 weeks average', 30, 120);
    doc.text('Competitor X: 6-7 weeks average', 30, 130);
    
    doc.setFontSize(10);
    doc.text('Generated on March 25, 2024', 20, 280);
    doc.text('For internal use only - Confidential', 20, 285);

    doc.save('Competitive_Analysis_2025.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Competitor Analysis</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>Competitive_Analysis_2025.pdf</p>
                </div>
              </div>
              <BarChart2 className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Prepared By</p>
                <p className="text-sm">Market Research Team</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Last Updated</p>
                <p className="text-sm">February 15, 2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Competitive Position</p>
                <p className="text-sm">Market Leader</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Executive Summary</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>This analysis compares our product offering against Competitor X, highlighting our key advantages and differentiators in the market. We maintain significant advantages in implementation speed, integration capabilities, and total cost of ownership.</p>
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Key Differentiators</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">1. Implementation Time</h3>
                <p className="text-sm text-muted-foreground">Our solution deploys 40% faster than Competitor X, with average implementation time of 3-4 weeks compared to their 6-7 weeks.</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">2. Microsoft Integration</h3>
                <p className="text-sm text-muted-foreground">We offer native integration with the entire Microsoft ecosystem, while Competitor X requires third-party connectors for Teams and Outlook.</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">3. Customer Support</h3>
                <p className="text-sm text-muted-foreground">Our UK-based customer support team provides same-day responses during business hours, while Competitor X's support is US-based with longer response times.</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">4. Reporting Dashboard</h3>
                <p className="text-sm text-muted-foreground">Our customisable reporting dashboard allows for greater flexibility in data visualization compared to Competitor X's fixed reporting templates.</p>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">5. Total Cost of Ownership</h3>
                <p className="text-sm text-muted-foreground">Our solution provides approximately 22% lower TCO over a 3-year period, accounting for implementation, maintenance, and training costs.</p>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Cost Comparison</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Implementation</p>
                    <p className="font-semibold text-lg">22% Lower</p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Annual Licensing</p>
                    <p className="font-semibold text-lg">18% Lower</p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Support Costs</p>
                    <p className="font-semibold text-lg">25% Lower</p>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="font-medium mb-1">3-Year TCO Analysis</p>
                  <p className="text-sm text-muted-foreground">Our 3-year TCO analysis shows a cumulative savings of approximately £45,000 for an enterprise customer with 500 users when compared to Competitor X.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Analysis prepared by: Market Research Team</p>
            <p>For internal use only - Confidential</p>
          </div>
        </Card>
      </div>
    </main>
  );
}