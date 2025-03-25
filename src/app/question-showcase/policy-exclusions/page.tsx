// For policy-exclusions.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, AlertTriangle, Shield, ClipboardList, Clock } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function PolicyExclusionsPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Highland Business Liability Terms 2024', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Policy Reference: HL-BL-2024-0142', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Key Policy Exclusions:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. Claims related to professional negligence', 30, 55);
    doc.text('2. Damage from natural disasters not specifically endorsed', 30, 65);
    doc.text('3. Third-party injuries from non-employees using company vehicles', 30, 75);
    
    doc.setFontSize(14);
    doc.text('Coverage Details:', 20, 90);
    doc.setFontSize(12);
    doc.text('Coverage Limit: £2,000,000 per incident', 30, 100);
    doc.text('Excess: £50,000 per claim', 30, 110);
    doc.text('Claim Filing Period: Within 60 days of incident', 30, 120);
    
    doc.setFontSize(10);
    doc.text('Generated on March 28, 2024', 20, 280);
    doc.text('For informational purposes only - Refer to full policy for complete terms', 20, 285);

    doc.save('Highland_Business_Liability_Terms_2024.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Highland Insurance Business Liability Policy</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>Highland_Business_Liability_Terms_2024.pdf</p>
                </div>
              </div>
              <Shield className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Policy Number</p>
                <p className="text-sm">HL-BL-2024-0142</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Effective Date</p>
                <p className="text-sm">January 1, 2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Expiration Date</p>
                <p className="text-sm">December 31, 2024</p>
              </div>
            </div>
          </div>

          {/* Policy Overview */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Policy Overview</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>The Highland Business Liability Policy provides coverage for general business liability claims subject to the terms, conditions, and exclusions outlined in this document. This summary highlights key exclusions and coverage limitations but does not replace the full policy document.</p>
            </div>
          </div>

          {/* Key Exclusions */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Key Exclusions</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">1. Professional Negligence Claims</h3>
                <p className="text-sm text-muted-foreground">Any claims arising from errors, omissions, or negligence in professional services or advice provided by the insured. Such claims would require separate professional indemnity coverage.</p>
                <div className="mt-2 flex items-center text-xs text-amber-500">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  <span>High risk exclusion - requires separate coverage</span>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">2. Natural Disaster Damage</h3>
                <p className="text-sm text-muted-foreground">Damage resulting from floods, earthquakes, hurricanes, or other natural disasters unless specifically endorsed on the policy. Standard coverage excludes all natural catastrophe events.</p>
                <div className="mt-2 flex items-center text-xs text-amber-500">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  <span>Optional endorsement available at additional premium</span>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">3. Non-Employee Vehicle Use</h3>
                <p className="text-sm text-muted-foreground">Third-party injuries or property damage caused by non-employees operating company vehicles. Coverage applies only to authorised employees using vehicles for business purposes.</p>
                <div className="mt-2 flex items-center text-xs text-amber-500">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  <span>Consider supplemental hired/non-owned auto coverage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Details */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <ClipboardList className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Coverage Details</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="font-medium mb-1">Coverage Limit</p>
                    <p className="text-sm text-muted-foreground">£2,000,000 per incident</p>
                    <p className="text-sm text-muted-foreground">£5,000,000 aggregate annual limit</p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="font-medium mb-1">Excess</p>
                    <p className="text-sm text-muted-foreground">£50,000 per claim</p>
                    <p className="text-sm text-muted-foreground">£25,000 for property damage claims</p>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-primary/60" />
                    <p className="font-medium">Critical Time Limitations</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Claims must be filed within 60 days of incident</li>
                    <li>• Initial notification within 48 hours of occurrence</li>
                    <li>• Supporting documentation required within 30 days</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Document prepared by: Highland Insurance Legal Department</p>
            <p>For informational purposes only - Refer to full policy for complete terms and conditions</p>
          </div>
        </Card>
      </div>
    </main>
  );
}