// For discount-approval-process.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, DollarSign, CheckSquare, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function DiscountPolicyPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Pricing and Discounting Guidelines', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Last Updated: February 10, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Discount Approval Tiers:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. Up to 15% - Team Lead Approval', 30, 55);
    doc.text('2. 15-25% - Sales Director Approval', 30, 65);
    doc.text('3. 25-35% - VP of Sales Approval', 30, 75);
    doc.text('4. Above 35% - Executive Committee Approval', 30, 85);
    
    doc.setFontSize(14);
    doc.text('Submission Requirements:', 20, 100);
    doc.setFontSize(12);
    doc.text('1. Submit via Deals portal at least 48 hours before quote delivery', 30, 110);
    doc.text('2. Include comprehensive business justification', 30, 120);
    doc.text('3. Specify contract length and total contract value', 30, 130);
    doc.text('4. Detail strategic importance and competitive landscape', 30, 140);
    doc.text('5. Provide margin impact analysis', 30, 150);
    
    doc.setFontSize(10);
    doc.text('Sales Department - For Internal Use Only', 20, 280);
    doc.text('Contact sales-operations@centrus.ai for questions', 20, 285);

    doc.save('Pricing_and_Discounting_Guidelines.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Pricing and Discounting Guidelines</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>Pricing_and_Discounting_Guidelines.pdf</p>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Effective Date</p>
                <p className="text-sm">February 1, 2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Document Owner</p>
                <p className="text-sm">Sales Operations</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Version</p>
                <p className="text-sm">3.2</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>This document outlines the pricing and discounting guidelines for all Centrus AI products and services. These guidelines ensure consistency in our pricing approach while allowing flexibility to respond to market conditions and competitive situations.</p>
              <p>All sales personnel must adhere to these guidelines when proposing discounts to customers. Deviations must receive appropriate approval as outlined in this document before being presented to customers.</p>
            </div>
          </div>

          {/* Discount Approval Tiers */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Discount Approval Authority</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Tier 1: Up to 15% Discount</h3>
                <p className="text-sm text-muted-foreground">Team Lead approval required. Standard discounts within this range typically require minimal review.</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Quick approval process (typically same day)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Submit via Deals portal with basic justification</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 ring-2 ring-primary/20">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium mb-2">Tier 2: 15-25% Discount</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-primary/20 rounded-full text-primary">Current Range</span>
                </div>
                <p className="text-sm text-muted-foreground"><strong>Sales Director approval required.</strong> Discounts in this range require thorough justification and analysis.</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Submit via Deals portal at least 48 hours before quote delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Include business justification, contract length, total value, and strategic importance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Review typically completed within 24-48 hours</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Tier 3: 25-35% Discount</h3>
                <p className="text-sm text-muted-foreground">VP of Sales approval required. Discounts in this range are exceptional and require strong competitive or strategic justification.</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Submit via Deals portal at least 72 hours before quote delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Requires comprehensive business case and competitive analysis</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Tier 4: Above 35% Discount</h3>
                <p className="text-sm text-muted-foreground">Executive Committee approval required (CEO, CFO, CRO). Highly exceptional cases only.</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Submit via Deals portal at least 5 business days before quote delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>VP of Sales pre-approval required before Executive Committee review</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Submission Requirements */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <CheckSquare className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Submission Requirements</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">All discount approval requests must include the following information:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="font-medium mb-1">Business Justification</p>
                    <p className="text-sm text-muted-foreground">Clear explanation of why the discount is necessary, including competitive situation, customer budget constraints, etc.</p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="font-medium mb-1">Deal Information</p>
                    <p className="text-sm text-muted-foreground">Contract length, total contract value, product mix, and payment terms</p>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-primary/60" />
                    <p className="font-medium">Timeline Requirements</p>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Submit at least 48 hours before quote delivery to the customer</li>
                    <li>• Expedited reviews available in exceptional circumstances only</li>
                    <li>• Approvals valid for 30 days from issuance</li>
                    <li>• Re-approval required if deal terms change significantly</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-4 w-4 text-primary/60" />
                    <p className="font-medium">Strategic Consideration Factors</p>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Potential for expansion within account (land and expand strategy)</li>
                    <li>• Reference customer value in key industry or region</li>
                    <li>• Competitive displacement opportunity</li>
                    <li>• Long-term partnership potential</li>
                    <li>• Market penetration in strategic sectors</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Submission Process */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Submission Process</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 1: Prepare Request</h3>
                <p className="text-sm text-muted-foreground">Gather all required information and prepare your business justification.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 2: Submit via Deals Portal</h3>
                <p className="text-sm text-muted-foreground">Log into the Deals Portal (deals.centrus.ai) and complete the discount request form.</p>
                <p className="text-sm text-muted-foreground mt-2">Include all supporting documentation and analysis in your submission.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 3: Review Process</h3>
                <p className="text-sm text-muted-foreground">Your request will be routed to the appropriate approval authority based on discount tier.</p>
                <p className="text-sm text-muted-foreground mt-2">You will receive email notifications about the status of your request.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 4: Approval Documentation</h3>
                <p className="text-sm text-muted-foreground">Once approved, download the approval certificate from the Deals Portal.</p>
                <p className="text-sm text-muted-foreground mt-2">Reference the approval ID in your quote and opportunity record.</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Document prepared by: Sales Operations</p>
            <p>For internal use only - Contact sales-operations@centrus.ai with questions</p>
          </div>
        </Card>
      </div>
    </main>
  );
}