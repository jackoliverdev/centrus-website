'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, Users, CalendarClock, Building, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function ProjectContactsPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Henderson Project Brief', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Project Start: March 1, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Client Contacts:', 20, 45);
    doc.setFontSize(12);
    doc.text('Sarah Henderson (CEO): sarah@henderson.com', 30, 55);
    doc.text('Mark Phillips (CTO): mark@henderson.com', 30, 65);
    doc.text('Jessica Lee (Operations): jessica@henderson.com', 30, 75);
    
    doc.setFontSize(14);
    doc.text('Internal Team:', 20, 90);
    doc.setFontSize(12);
    doc.text('Bradley Parkinson (Account Lead)', 30, 100);
    doc.text('Chris Hartney (Technical Implementation)', 30, 110);
    doc.text('Sophia Jadir (Project Management)', 30, 120);
    
    doc.setFontSize(14);
    doc.text('Key Dates:', 20, 135);
    doc.setFontSize(12);
    doc.text('Kickoff Meeting: March 15, 2024', 30, 145);
    doc.text('Phase 1 Delivery: April 30, 2024', 30, 155);
    doc.text('Final Implementation: June 15, 2024', 30, 165);
    
    doc.setFontSize(10);
    doc.text('Generated on March 10, 2024', 20, 280);
    doc.text('For internal use only - Confidential', 20, 285);

    doc.save('Henderson_Project_Brief.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Henderson Project Brief</h1>
                <div className="flex items-center text-muted-foreground">
                  <Building className="h-4 w-4 mr-1" />
                  <p>Henderson Financial Services</p>
                </div>
              </div>
              <FileText className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Project Start</p>
                <p className="text-sm">March 1, 2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Estimated Completion</p>
                <p className="text-sm">June 15, 2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Project Status</p>
                <p className="text-sm text-emerald-500">Active</p>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
            <div className="prose prose-neutral max-w-none text-white">
              <p>Implementation of Centrus AI to centralize Henderson's knowledge base and improve client service response times. The project includes custom integration with their CRM system and compliance documentation repository.</p>
            </div>
          </div>

          {/* Client Contacts */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Client Contacts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border border-border/50">
                <div className="space-y-1 mb-4">
                  <p className="font-medium">Sarah Henderson</p>
                  <p className="text-sm text-muted-foreground">CEO</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>sarah@henderson.com</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>+44 7700 900123</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border border-border/50">
                <div className="space-y-1 mb-4">
                  <p className="font-medium">Mark Phillips</p>
                  <p className="text-sm text-muted-foreground">CTO</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>mark@henderson.com</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>+44 7700 900456</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Internal Team */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Internal Team</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">BP</div>
                  <div>
                    <p className="font-medium">Bradley Parkinson</p>
                    <p className="text-sm text-muted-foreground mb-1">Account Lead</p>
                    <div className="flex items-center text-sm">
                      <Mail className="h-3 w-3 mr-2 text-muted-foreground" />
                      <span>bradley.parkinson@centrus.ai</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">CH</div>
                  <div>
                    <p className="font-medium">Chris Hartney</p>
                    <p className="text-sm text-muted-foreground mb-1">Technical Implementation</p>
                    <div className="flex items-center text-sm">
                      <Mail className="h-3 w-3 mr-2 text-muted-foreground" />
                      <span>chris.hartney@centrus.ai</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Key Dates */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <CalendarClock className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Key Dates</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center p-3 border-l-4 border-primary bg-primary/5 rounded-r">
                <div className="flex-1">
                  <p className="font-medium">Next Meeting</p>
                  <p className="text-sm text-muted-foreground">June 15, 10:00 AM</p>
                </div>
                <div className="text-primary text-sm font-medium">
                  3 days from now
                </div>
              </div>
              
              <div className="p-3 border-l-4 border-muted bg-muted/5 rounded-r">
                <p className="font-medium">Kickoff Meeting</p>
                <p className="text-sm text-muted-foreground">March 15, 2024</p>
              </div>
              
              <div className="p-3 border-l-4 border-muted bg-muted/5 rounded-r">
                <p className="font-medium">Phase 1 Delivery</p>
                <p className="text-sm text-muted-foreground">April 30, 2024</p>
              </div>
              
              <div className="p-3 border-l-4 border-muted bg-muted/5 rounded-r">
                <p className="font-medium">Final Implementation</p>
                <p className="text-sm text-muted-foreground">June 15, 2024</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Last Updated: March 10, 2024</p>
            <p>For internal use only - Confidential</p>
          </div>
        </Card>
      </div>
    </main>
  );
}