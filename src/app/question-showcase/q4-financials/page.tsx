'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function Q4FinancialsPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Add content to PDF
    doc.setFontSize(20);
    doc.text('Q4 2023 Financial Report', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Fiscal Period: October 1 - December 31, 2023', 20, 30);
    
    // Add key metrics
    doc.setFontSize(14);
    doc.text('Key Metrics:', 20, 45);
    doc.setFontSize(12);
    doc.text('Revenue: £2.8M (+12% vs Target)', 30, 55);
    doc.text('Target: £2.5M', 30, 65);
    doc.text('Growth: 18.4% YoY', 30, 75);
    
    // Add executive summary
    doc.setFontSize(14);
    doc.text('Executive Summary:', 20, 90);
    doc.setFontSize(12);
    const summary = 'Q4 2023 marked another strong quarter for our business, with revenue ' +
      'reaching £2.8M, exceeding our target of £2.5M by 12%. This performance was ' +
      'driven by continued strength in our enterprise segment and improved customer retention rates.';
    const splitSummary = doc.splitTextToSize(summary, 170);
    doc.text(splitSummary, 20, 100);
    
    // Add revenue segments
    doc.setFontSize(14);
    doc.text('Revenue by Segment:', 20, 130);
    doc.setFontSize(12);
    doc.text('Enterprise: £1.68M (60%)', 30, 140);
    doc.text('Mid-Market: £0.84M (30%)', 30, 150);
    doc.text('SMB: £0.28M (10%)', 30, 160);

    // Add growth indicators
    doc.setFontSize(14);
    doc.text('Key Growth Indicators:', 20, 180);
    doc.setFontSize(12);
    doc.text('New Customers: 47', 30, 190);
    doc.text('Retention Rate: 94.8%', 30, 200);
    doc.text('NPS Score: 72', 30, 210);

    // Add quarterly trend
    doc.setFontSize(14);
    doc.text('Quarterly Revenue Trend:', 20, 230);
    doc.setFontSize(12);
    doc.text('Q1 2023: £2.2M (+4.8%)', 30, 240);
    doc.text('Q2 2023: £2.4M (+4.3%)', 30, 250);
    doc.text('Q3 2023: £2.6M (+8.3%)', 30, 260);
    doc.text('Q4 2023: £2.8M (+12.0%)', 30, 270);
    
    // Add footer
    doc.setFontSize(10);
    doc.text('Generated on January 15, 2024', 20, 280);
    doc.text('For internal use only - Confidential', 20, 285);

    // Save the PDF
    doc.save('Q4_2023_Financial_Report.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Q4 2023 Financial Report</h1>
                <p className="text-muted-foreground">Fiscal Period: October 1 - December 31, 2023</p>
              </div>
              <FileText className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold text-primary">£2.8M</p>
                <p className="text-sm text-emerald-600">+12% vs Target</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Target</p>
                <p className="text-2xl font-bold">£2.5M</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Growth</p>
                <p className="text-2xl font-bold">18.4%</p>
                <p className="text-sm text-emerald-600">YoY</p>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Executive Summary</h2>
            <div className="prose prose-neutral max-w-none text-white">
              <p>Q4 2023 marked another strong quarter for our business, with revenue reaching £2.8M, exceeding our target of £2.5M by 12%. This performance was driven by continued strength in our enterprise segment and improved customer retention rates.</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Key Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border border-border/50">
                <h3 className="font-medium mb-4">Revenue by Segment</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Enterprise</span>
                    <span className="font-medium">£1.68M (60%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Mid-Market</span>
                    <span className="font-medium">£0.84M (30%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">SMB</span>
                    <span className="font-medium">£0.28M (10%)</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border border-border/50">
                <h3 className="font-medium mb-4">Key Growth Indicators</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">New Customers</span>
                    <span className="font-medium">47</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Retention Rate</span>
                    <span className="font-medium">94.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">NPS Score</span>
                    <span className="font-medium">72</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Quarterly Trends */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Quarterly Revenue Trend</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left pb-3 text-muted-foreground font-medium">Quarter</th>
                    <th className="text-right pb-3 text-muted-foreground font-medium">Revenue</th>
                    <th className="text-right pb-3 text-muted-foreground font-medium">Target</th>
                    <th className="text-right pb-3 text-muted-foreground font-medium">Variance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3">Q1 2023</td>
                    <td className="text-right">£2.2M</td>
                    <td className="text-right">£2.1M</td>
                    <td className="text-right text-emerald-600">+4.8%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3">Q2 2023</td>
                    <td className="text-right">£2.4M</td>
                    <td className="text-right">£2.3M</td>
                    <td className="text-right text-emerald-600">+4.3%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3">Q3 2023</td>
                    <td className="text-right">£2.6M</td>
                    <td className="text-right">£2.4M</td>
                    <td className="text-right text-emerald-600">+8.3%</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-primary/5">
                    <td className="py-3 font-medium">Q4 2023</td>
                    <td className="text-right font-medium">£2.8M</td>
                    <td className="text-right font-medium">£2.5M</td>
                    <td className="text-right font-medium text-emerald-600">+12.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Generated on January 15, 2024</p>
            <p>For internal use only - Confidential</p>
          </div>
        </Card>
      </div>
    </main>
  );
}