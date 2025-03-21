'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, Plane, Hotel, CreditCard, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function TravelPolicyPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Travel Policy 2024', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Effective: January 1, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Travel Allowances:', 20, 45);
    doc.setFontSize(12);
    doc.text('Daily Meal Allowance: £75', 30, 55);
    doc.text('Hotel Rate Cap: £250/night', 30, 65);
    doc.text('Ground Transport: £100/day', 30, 75);
    
    doc.setFontSize(14);
    doc.text('Flight Policies:', 20, 90);
    doc.setFontSize(12);
    doc.text('Economy: Flights under 6 hours', 30, 100);
    doc.text('Business Class: Flights over 6 hours (with approval)', 30, 110);
    
    doc.setFontSize(14);
    doc.text('Expense Documentation:', 20, 125);
    doc.setFontSize(12);
    doc.text('Receipts required for expenses over £25', 30, 135);
    doc.text('Submit within 14 days of return', 30, 145);
    
    doc.setFontSize(10);
    doc.text('Generated on January 15, 2024', 20, 280);
    doc.text('For internal use only - Confidential', 20, 285);

    doc.save('Travel_Policy_2024.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Travel Policy 2024</h1>
                <p className="text-muted-foreground">Effective: January 1, 2024</p>
              </div>
              <FileText className="h-8 w-8 text-primary/60" />
            </div>
          </div>

          {/* Important Notice */}
          <div className="mb-12 bg-primary/5 rounded-lg p-4 border border-primary/10">
            <div className="flex gap-2">
              <AlertCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Policy Updates</h3>
                <p className="text-sm text-muted-foreground">This policy has been updated for 2024 with new allowance rates and booking requirements. Please review all sections carefully.</p>
              </div>
            </div>
          </div>

          {/* Daily Allowances */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Daily Allowances</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Meal Allowance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Breakfast</p>
                      <p className="font-medium">£15</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Lunch</p>
                      <p className="font-medium">£25</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Dinner</p>
                      <p className="font-medium">£35</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-border">
                  <h3 className="font-medium mb-3">Other Allowances</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Hotel Rate Cap</span>
                      <span className="font-medium">£250/night</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Ground Transport</span>
                      <span className="font-medium">£100/day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Internet/Phone</span>
                      <span className="font-medium">£15/day</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Flight Policies */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Flight Policies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border border-border/50">
                <h3 className="font-medium mb-4">Class of Service</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Under 6 hours</span>
                    <span className="font-medium">Economy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Over 6 hours</span>
                    <span className="font-medium">Business Class*</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">*Requires manager approval</p>
                </div>
              </Card>
              <Card className="p-6 border border-border/50">
                <h3 className="font-medium mb-4">Booking Requirements</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Advance Booking</span>
                    <span className="font-medium">14+ days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Platform</span>
                    <span className="font-medium">Corporate Portal</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Changes</span>
                    <span className="font-medium">Manager Approval</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Accommodation */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Hotel className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Accommodation Policies</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-4">Hotel Guidelines</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Standard Cities</span>
                      <span className="font-medium">£250/night</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Premium Cities</span>
                      <span className="font-medium">£350/night</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Extended Stay</span>
                      <span className="font-medium">Corporate Rates</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-4">Premium Cities List</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">United States</span>
                      <span className="font-medium">NYC, SF, LA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Europe</span>
                      <span className="font-medium">London, Paris</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Asia</span>
                      <span className="font-medium">Tokyo, Singapore</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Expense Documentation */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Expense Documentation</h2>
            </div>
            <div className="prose prose-neutral max-w-none">
              <ul className="space-y-2 text-white">
                <li>All expenses over £25 require itemised receipts</li>
                <li>Submit expense reports within 14 days of return</li>
                <li>Use corporate booking platform for all reservations</li>
                <li>Personal credit cards should only be used when corporate cards are not accepted</li>
                <li>Currency conversion based on transaction date</li>
              </ul>
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