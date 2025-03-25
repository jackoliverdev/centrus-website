// For wedding-packages.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, Wine, Calculator, Users, PartyPopper } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function WeddingPackagesPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Wedding Packages Pricing 2024', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Last Updated: February 10, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Drinks Package Options:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. Classic Package - £50 per person', 30, 55);
    doc.text('2. Premium Package - £75 per person', 30, 65);
    doc.text('3. Luxury Package - £100 per person', 30, 75);
    
    doc.setFontSize(14);
    doc.text('Johnson Wedding Quote:', 20, 90);
    doc.setFontSize(12);
    doc.text('Event Date: August 12, 2024', 30, 100);
    doc.text('Guest Count: 120 total (20 upgrading to Luxury)', 30, 110);
    doc.text('Original Quote: £11,395.43', 30, 120);
    doc.text('Upgrade Cost: £1,000.00', 30, 130);
    doc.text('Revised Total: £12,395.43', 30, 140);
    
    doc.setFontSize(10);
    doc.text('Generated on March 30, 2024', 20, 280);
    doc.text('Prices valid for 30 days from quote date', 20, 285);

    doc.save('Wedding_Packages_Pricing_2024.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Wedding Packages Pricing</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>Wedding_Packages_Pricing_2024.pdf</p>
                </div>
              </div>
              <PartyPopper className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Client</p>
                <p className="text-sm">Johnson Wedding</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Event Date</p>
                <p className="text-sm">August 12, 2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Guest Count</p>
                <p className="text-sm">120 (20 premium upgrades)</p>
              </div>
            </div>
          </div>

          {/* Package Overview */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Drinks Package Overview</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>Our wedding drinks packages are designed to provide a range of options to suit your preferences and budget. Each package includes welcome drinks, table wine with dinner, and toasting drinks. All prices are per person and include service, glassware, and staff.</p>
            </div>
          </div>

          {/* Package Options */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Wine className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Package Options</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Classic Package - £50 per person</h3>
                <p className="text-sm text-muted-foreground">Includes prosecco or beer welcome drinks, house wine with dinner (half bottle per person), and prosecco toast.</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Premium Package - £75 per person</h3>
                <p className="text-sm text-muted-foreground">Includes champagne, cocktail or premium beer welcome drinks, select wines with dinner (half bottle per person), and champagne toast.</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 ring-2 ring-primary/20">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium mb-2">Luxury Package - £100 per person</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-primary/20 rounded-full text-primary">Selected Upgrade</span>
                </div>
                <p className="text-sm text-muted-foreground">Includes vintage champagne, signature cocktails or craft beer welcome drinks, premium wines with dinner (unlimited during service), champagne toast, and after-dinner liqueurs.</p>
                <div className="mt-3 text-xs text-primary">
                  <p>✓ Includes top-shelf spirits and mixers</p>
                  <p>✓ Includes sommelier service</p>
                  <p>✓ Includes custom drink menu printing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Calculation */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Quote Calculation</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Original Package</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Venue Hire</span>
                        <span>£5,000.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Catering (120 guests)</span>
                        <span>£4,800.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Classic Drinks (120 guests)</span>
                        <span>£6,000.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Decoration Package</span>
                        <span>£1,595.43</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2 border-t border-border">
                        <span>Original Total</span>
                        <span>£11,395.43</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-3">Upgrade Calculation</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Luxury Package (£100 × 20)</span>
                        <span>£2,000.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Classic Package (£50 × 20)</span>
                        <span>-£1,000.00</span>
                      </div>
                      <div className="flex justify-between font-medium text-primary">
                        <span>Upgrade Cost</span>
                        <span>£1,000.00</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2 border-t border-border">
                        <span>New Total</span>
                        <span>£12,395.43</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-primary/60" />
                    <p className="font-medium">Final Configuration</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">• 100 guests with Classic Package (£50pp)</p>
                  <p className="text-sm text-muted-foreground">• 20 guests with Luxury Package (£100pp)</p>
                  <div className="mt-4 text-sm font-medium">
                    <p>Requires 50% deposit (£6,197.72) to secure booking</p>
                    <p className="text-xs text-muted-foreground mt-1">Balance due 30 days before event</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Quote prepared by: Emily Williams, Event Coordinator</p>
            <p>Prices valid for 30 days from quote date. Terms and conditions apply.</p>
          </div>
        </Card>
      </div>
    </main>
  );
}