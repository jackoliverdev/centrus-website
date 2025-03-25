// For meeting-notes.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, CalendarIcon, Users, CheckSquare } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function MeetingNotesPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Sales Meeting Minutes March 22', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Date: March 22, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Key Decisions:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. New focus on insurance and finance verticals', 30, 55);
    doc.text('2. Updated pricing structure for enterprise clients', 30, 65);
    doc.text('3. Q3 targets increased by 15%', 30, 75);
    doc.text('4. New partnership program launching next month', 30, 85);
    
    doc.setFontSize(14);
    doc.text('Action Items:', 20, 100);
    doc.setFontSize(12);
    doc.text('1. Sales team to update pipeline with insurance prospects', 30, 110);
    doc.text('2. Marketing to develop vertical-specific materials', 30, 120);
    doc.text('3. Product team to finalize partnership portal', 30, 130);
    
    doc.setFontSize(10);
    doc.text('Generated on March 23, 2024', 20, 280);
    doc.text('For internal use only - Confidential', 20, 285);

    doc.save('Sales_Meeting_Minutes_March_22.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Sales Meeting Minutes</h1>
                <div className="flex items-center text-muted-foreground">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <p>March 22, 2024</p>
                </div>
              </div>
              <FileText className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Attendees</p>
                <p className="text-sm">Sales Leadership, Marketing, Product</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="text-sm">90 minutes</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-sm">Conference Room A / Zoom</p>
              </div>
            </div>
          </div>

          {/* Meeting Summary */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Meeting Summary</h2>
            <div className="prose prose-neutral max-w-none text-white">
              <p>Quarterly sales strategy meeting to align priorities for Q3. The team reviewed Q2 performance and set new targets for the coming quarter, with a strategic shift to focus more heavily on insurance and finance verticals.</p>
            </div>
          </div>

          {/* Key Decisions */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <CheckSquare className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Key Decisions</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">1. New Vertical Focus</h3>
                <p className="text-sm text-muted-foreground">Insurance and finance sectors identified as primary growth opportunities based on Q2 data. Sales team to prioritize outreach to these industries.</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">2. Enterprise Pricing Update</h3>
                <p className="text-sm text-muted-foreground">New pricing structure approved for enterprise clients, increasing base subscription by 15% with additional volume discounts for larger deployments.</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">3. Q3 Targets</h3>
                <p className="text-sm text-muted-foreground">Revenue targets increased by 15% over previous quarter projections based on pipeline growth and new product features.</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">4. Partnership Program</h3>
                <p className="text-sm text-muted-foreground">New referral partner program launching next month with 25% commission structure. Marketing to prepare launch materials.</p>
              </div>
            </div>
          </div>

          {/* Action Items */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Action Items</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <p className="font-medium mb-1">Sales Team</p>
                    <p className="text-sm text-muted-foreground">Update pipeline with insurance and finance prospects by March 29</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <p className="font-medium mb-1">Marketing Team</p>
                    <p className="text-sm text-muted-foreground">Develop vertical-specific materials for insurance and finance by April 5</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <p className="font-medium mb-1">Product Team</p>
                    <p className="text-sm text-muted-foreground">Finalize partner portal for testing by April 10</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <p className="font-medium mb-1">Sales Leadership</p>
                    <p className="text-sm text-muted-foreground">Distribute updated commission structure by March 31</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Minutes recorded by: Sarah Johnson</p>
            <p>For internal use only - Confidential</p>
          </div>
        </Card>
      </div>
    </main>
  );
}