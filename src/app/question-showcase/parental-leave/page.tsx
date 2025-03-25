'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, Calendar, ClipboardCheck, Clock, Users, BabyIcon } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function ParentalLeavePage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Parental Leave Policy 2024', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Effective: January 1, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Paternity Leave Entitlement:', 20, 45);
    doc.setFontSize(12);
    doc.text('• 4 weeks fully paid leave', 30, 55);
    doc.text('• Additional 8 weeks at 50% pay', 30, 65);
    doc.text('• Can be taken in blocks until child\'s first birthday', 30, 75);
    doc.text('• Requires 4 weeks\' notice', 30, 85);
    
    doc.setFontSize(14);
    doc.text('Maternity Leave Entitlement:', 20, 100);
    doc.setFontSize(12);
    doc.text('• 16 weeks fully paid leave', 30, 110);
    doc.text('• Additional 12 weeks at 50% pay', 30, 120);
    doc.text('• Option to extend unpaid for up to 12 more weeks', 30, 130);
    doc.text('• Minimum 8 weeks\' notice required', 30, 140);
    
    doc.setFontSize(14);
    doc.text('Adoption & Surrogacy:', 20, 155);
    doc.setFontSize(12);
    doc.text('• Same benefits as birth parents', 30, 165);
    doc.text('• Documentation requirements in policy', 30, 175);
    
    doc.setFontSize(10);
    doc.text('HR Department - Centrus', 20, 280);
    doc.text('Last revised: December 15, 2023', 20, 285);

    doc.save('Parental_Leave_Policy_2024.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Parental Leave Policy</h1>
                <p className="text-muted-foreground">Last Updated: January 2024</p>
              </div>
              <FileText className="h-8 w-8 text-primary/60" />
            </div>
          </div>

          {/* Policy Overview */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Policy Overview</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>Centrus is committed to supporting employees through the journey of parenthood. Our parental leave policy provides time and financial support to all new parents, regardless of gender, helping them balance work responsibilities with the demands of growing their family.</p>
              <p>This policy applies to all full-time and part-time employees who have completed at least 6 months of continuous service at the time of the child's birth or placement.</p>
            </div>
          </div>

          {/* Paternity Leave */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Paternity Leave</h2>
            </div>
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium mb-2">Entitlement</p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                    <li><span className="font-medium text-foreground">4 weeks</span> of fully paid paternity leave</li>
                    <li>Additional <span className="font-medium text-foreground">8 weeks</span> at 50% pay</li>
                    <li>Total potential leave: <span className="font-medium text-foreground">12 weeks</span></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border border-border/50">
                <h3 className="font-medium mb-4">Flexible Scheduling</h3>
                <p className="text-sm text-muted-foreground mb-4">Leave can be taken in multiple ways to accommodate your family's needs:</p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                  <li>As a continuous block immediately following birth</li>
                  <li>In separate blocks (minimum 1-week duration)</li>
                  <li>Can be used anytime until the child's first birthday</li>
                  <li>Part-time arrangements possible during the 50% pay period</li>
                </ul>
              </Card>
              
              <Card className="p-6 border border-border/50">
                <h3 className="font-medium mb-4">How to Apply</h3>
                <p className="text-sm text-muted-foreground mb-4">To request paternity leave:</p>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-4">
                  <li>Notify your manager and HR at least <span className="font-medium text-foreground">4 weeks</span> before your intended leave start date</li>
                  <li>Complete the Parental Leave Request Form in the HR portal</li>
                  <li>Provide a copy of the birth certificate or proof of expected due date</li>
                  <li>Work with your manager to create a handover plan</li>
                </ol>
              </Card>
            </div>
          </div>

          {/* Maternity Leave */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Maternity Leave</h2>
            </div>
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium mb-2">Entitlement</p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                    <li><span className="font-medium text-foreground">16 weeks</span> of fully paid maternity leave</li>
                    <li>Additional <span className="font-medium text-foreground">12 weeks</span> at 50% pay</li>
                    <li>Option to extend with <span className="font-medium text-foreground">12 weeks</span> of unpaid leave</li>
                    <li>Total potential leave: <span className="font-medium text-foreground">40 weeks</span></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 border border-border/50 rounded-lg">
                <h3 className="font-medium mb-4">Before Birth</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <p className="font-medium mb-1">Notification</p>
                      <p className="text-sm text-muted-foreground">Notify your manager and HR of your pregnancy and expected due date as soon as reasonably possible.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <p className="font-medium mb-1">Risk Assessment</p>
                      <p className="text-sm text-muted-foreground">HR will conduct a workplace risk assessment to ensure your environment is safe during pregnancy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <p className="font-medium mb-1">Medical Appointments</p>
                      <p className="text-sm text-muted-foreground">Reasonable paid time off for prenatal medical appointments is provided.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border border-border/50 rounded-lg">
                <h3 className="font-medium mb-4">During & After Leave</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <p className="font-medium mb-1">Benefits Continuation</p>
                      <p className="text-sm text-muted-foreground">All benefits continue during paid leave periods. During unpaid leave, health insurance continues with employee contributions required.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <p className="font-medium mb-1">Return to Work</p>
                      <p className="text-sm text-muted-foreground">Employees returning from maternity leave are guaranteed the same or equivalent position with equivalent pay and benefits.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <p className="font-medium mb-1">Nursing Accommodations</p>
                      <p className="text-sm text-muted-foreground">Upon return, reasonable break time and private space will be provided for nursing mothers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Adoption & Surrogacy */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <svg className="h-5 w-5 text-primary/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12h.01"/>
                <path d="M15 12h.01"/>
                <path d="M10 16c.5.3 1.5.5 2 .5s1.5-.2 2-.5"/>
                <path d="M19 9v1.5a4 4 0 0 1-4 4h-1a3 3 0 0 1-3-3v-2c0-1.1.9-2 2-2h2a4 4 0 0 1 4 4v1.5"/>
                <path d="M5 9v1.5a4 4 0 0 0 4 4h1a3 3 0 0 0 3-3v-2c0-1.1-.9-2-2-2H9a4 4 0 0 0-4 4v1.5"/>
              </svg>
              <h2 className="text-xl font-semibold">Adoption & Surrogacy</h2>
            </div>
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10 mb-6">
              <p className="text-sm text-muted-foreground mb-4">We recognise that families are formed in many ways. Parents welcoming a child through adoption or surrogacy receive the same leave benefits:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium mb-2">Primary Caregivers</p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                    <li>Eligible for maternity leave equivalent (16 weeks full pay + 12 weeks at 50%)</li>
                    <li>Leave typically begins when the child is placed with the family</li>
                    <li>For international adoptions, leave may include travel time</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Secondary Caregivers</p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                    <li>Eligible for paternity leave equivalent (4 weeks full pay + 8 weeks at 50%)</li>
                    <li>Same flexibility options as birth parents</li>
                    <li>Documentation requirements detailed in full policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility & Conditions */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <ClipboardCheck className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Eligibility & Conditions</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Who is eligible?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                    <li>All full-time employees who have completed 6 months of service</li>
                    <li>Part-time employees (20+ hours/week) with pro-rated benefits</li>
                    <li>Contract employees according to terms specified in their contracts</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Accrual of Benefits</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                    <li>Annual leave continues to accrue during paid leave periods</li>
                    <li>Service-related benefits continue to accumulate during all leave</li>
                    <li>Performance review cycles adjusted to account for leave period</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Additional Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">Centrus offers additional family support programs:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-3 bg-primary/5 rounded-md">
                      <p className="text-xs font-medium text-primary mb-1">Flexible Return</p>
                      <p className="text-xs text-muted-foreground">Phased return-to-work options available</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-md">
                      <p className="text-xs font-medium text-primary mb-1">Family Support Fund</p>
                      <p className="text-xs text-muted-foreground">£2,000 for adoption/surrogacy expenses</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-md">
                      <p className="text-xs font-medium text-primary mb-1">Parental Coaching</p>
                      <p className="text-xs text-muted-foreground">Free sessions with family coaches</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>For questions about this policy, please contact the HR department at hr@centrus.ai</p>
            <p>This policy is reviewed annually and was last updated December 15, 2023</p>
          </div>
        </Card>
      </div>
    </main>
  );
}
