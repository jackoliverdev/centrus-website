'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, Clock, Home, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function RemoteWorkingPolicyPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Flexible Working Policy 2024', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Effective Date: January 1, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Remote Working Guidelines:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. Eligibility Requirements', 30, 55);
    doc.text('2. Allowable Remote Days', 30, 65);
    doc.text('3. Core Working Hours', 30, 75);
    doc.text('4. Team Coordination Requirements', 30, 85);
    doc.text('5. Equipment and Security Protocols', 30, 95);
    
    doc.setFontSize(14);
    doc.text('Remote Working Allocation:', 20, 110);
    doc.setFontSize(12);
    doc.text('1. Standard allowance: 3 remote days per week', 30, 120);
    doc.text('2. Manager approval required for all remote working', 30, 130);
    doc.text('3. Core hours: 8am-5pm UK time for all employees', 30, 140);
    doc.text('4. Teams must coordinate in-office days for meetings', 30, 150);
    doc.text('5. Remote working subject to quarterly review', 30, 160);
    
    doc.setFontSize(10);
    doc.text('Human Resources Department', 20, 280);
    doc.text('Last Reviewed: December 15, 2023', 20, 285);

    doc.save('Flexible_Working_Policy_2024.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Flexible Working Policy</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>Flexible_Working_Policy_2024.pdf</p>
                </div>
              </div>
              <Home className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Effective Date</p>
                <p className="text-sm">January 1, 2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Department</p>
                <p className="text-sm">Human Resources</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Policy Number</p>
                <p className="text-sm">HR-FWP-2024-01</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Policy Overview</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>This Flexible Working Policy outlines our company's approach to remote work arrangements, establishing clear guidelines for employees and managers. The policy aims to balance employee flexibility with business needs, ensuring productivity and collaboration are maintained.</p>
              <p>The company recognizes the benefits of flexible working arrangements both for employees and the organization, including improved work-life balance, reduced commuting time, and potential productivity gains. This policy applies to all permanent employees who have completed their probationary period.</p>
            </div>
          </div>

          {/* Remote Working Guidelines */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Home className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Remote Working Guidelines</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">1. Eligibility</h3>
                <p className="text-sm text-muted-foreground">All permanent employees who have successfully completed their probationary period are eligible to apply for flexible working arrangements, subject to the following conditions:</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Job role must be suitable for remote working</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Satisfactory performance record</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Appropriate remote working environment with reliable internet connection</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">2. Remote Working Allocation</h3>
                <p className="text-sm text-muted-foreground">The standard flexible working arrangement includes:</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span><strong>Three (3) remote working days per week</strong> maximum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Minimum of two (2) days in the office per week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Schedule to be agreed with line manager and reviewed quarterly</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">3. Core Working Hours</h3>
                <p className="text-sm text-muted-foreground">All employees, regardless of location, are required to be available during core business hours:</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span><strong>8:00 AM to 5:00 PM UK time</strong> (with 1-hour lunch break)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Available via company communication channels during these hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Exceptions require prior manager approval</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">4. Team Coordination</h3>
                <p className="text-sm text-muted-foreground">To ensure effective collaboration:</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span><strong>Teams must coordinate in-office days</strong> to ensure effective collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Department managers will designate specific days for team meetings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>All team members expected to be physically present for designated collaboration days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Application Process</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">To apply for flexible working arrangements, employees should follow these steps:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="font-medium mb-1">Step 1: Formal Request</p>
                    <p className="text-sm text-muted-foreground">Submit formal request via HR portal at least two weeks in advance</p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="font-medium mb-1">Step 2: Manager Review</p>
                    <p className="text-sm text-muted-foreground">Manager will review and respond within five working days</p>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-primary/60" />
                    <p className="font-medium">Key Considerations</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Managers will consider the following when reviewing flexible working requests:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Business requirements and operational needs</li>
                    <li>• Team coverage and collaboration needs</li>
                    <li>• Employee performance record</li>
                    <li>• Job role suitability for remote work</li>
                    <li>• Impact on service delivery and team dynamics</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Reviews and Modifications */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Reviews and Modifications</h2>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground mb-4">All flexible working arrangements are subject to periodic review:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                  <span>Quarterly reviews by line managers</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                  <span>Arrangements may be modified or revoked based on business needs or performance concerns</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                  <span>Two weeks' notice will be provided for any company-initiated changes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Document prepared by: Human Resources Department</p>
            <p>Last reviewed: December 15, 2023 | Next review: December 2024</p>
          </div>
        </Card>
      </div>
    </main>
  );
}