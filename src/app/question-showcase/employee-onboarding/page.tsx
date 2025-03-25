// For onboarding-process.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, Users, Briefcase, ClipboardCheck, Calendar, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function EmployeeOnboardingPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Employee Handbook 2024', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Last Updated: January 5, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Employee Onboarding Process:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. Paperwork Completion (Week 1)', 30, 55);
    doc.text('2. Equipment Setup (Week 1)', 30, 65);
    doc.text('3. Compliance Training (Weeks 2-3)', 30, 75);
    doc.text('4. Team Introductions (Week 4)', 30, 85);
    doc.text('5. 90-Day Review (End of Month 3)', 30, 95);
    
    doc.setFontSize(14);
    doc.text('Timeline Overview:', 20, 110);
    doc.setFontSize(12);
    doc.text('Pre-Boarding: 1-2 weeks before start date', 30, 120);
    doc.text('First Week: Orientation and initial setup', 30, 130);
    doc.text('First Month: Training and department integration', 30, 140);
    doc.text('Month 2-3: Role immersion and project assignment', 30, 150);
    doc.text('End of Month 3: Performance review and development plan', 30, 160);
    
    doc.setFontSize(10);
    doc.text('Human Resources Department', 20, 280);
    doc.text('For internal use only - Version 4.2', 20, 285);

    doc.save('Employee_Handbook_2024.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Employee Handbook</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>Employee_Handbook_2024.pdf</p>
                </div>
              </div>
              <Users className="h-8 w-8 text-primary/60" />
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
                <p className="text-sm text-muted-foreground">Version</p>
                <p className="text-sm">4.2</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Employee Onboarding Overview</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>The employee onboarding process is designed to integrate new employees seamlessly into our organization, providing them with the necessary tools, knowledge, and relationships to become effective team members. Our structured approach ensures a consistent experience for all new hires while allowing for customization based on role and department.</p>
              <p>The full onboarding process spans approximately <strong>three months</strong>, with key milestones and check-ins throughout. This comprehensive approach allows new employees to gain confidence in their roles while gradually taking on more responsibilities.</p>
            </div>
          </div>

          {/* Key Onboarding Steps */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <ClipboardCheck className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Key Onboarding Steps</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 1: Paperwork Completion</h3>
                <p className="text-sm text-muted-foreground">The first step involves completing all necessary documentation to establish the employee in our systems.</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Employment contract and offer acceptance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Tax and payroll documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Benefits enrollment and insurance forms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Employee information for company directory</span>
                  </li>
                </ul>
                <p className="text-xs text-primary mt-3">Timeframe: Completed during first week</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 2: Equipment Setup</h3>
                <p className="text-sm text-muted-foreground">Ensuring the employee has all the necessary tools and technology to perform their role effectively.</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Computer and hardware configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Software and application access setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Email, calendar, and communication tools configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Physical workspace arrangement and equipment provision</span>
                  </li>
                </ul>
                <p className="text-xs text-primary mt-3">Timeframe: Completed during first week</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 3: Compliance Training</h3>
                <p className="text-sm text-muted-foreground">Mandatory training sessions to ensure all employees understand company policies and regulatory requirements.</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Health and safety training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Data protection and information security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Code of conduct and ethics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Industry-specific regulatory training</span>
                  </li>
                </ul>
                <p className="text-xs text-primary mt-3">Timeframe: Completed during weeks 2-3</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 4: Team Introductions</h3>
                <p className="text-sm text-muted-foreground">Facilitating connections between the new employee and key stakeholders within the organization.</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Department orientation and team meeting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>One-on-one meetings with key collaborators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Assignment of a mentor or buddy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Introduction to cross-functional teams</span>
                  </li>
                </ul>
                <p className="text-xs text-primary mt-3">Timeframe: Completed during week 4</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 5: 90-Day Review</h3>
                <p className="text-sm text-muted-foreground">A formal check-in to assess progress, provide feedback, and set development goals.</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Performance evaluation against initial objectives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Feedback collection from team members and stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Discussion of strengths and development areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Setting of performance goals for the next period</span>
                  </li>
                </ul>
                <p className="text-xs text-primary mt-3">Timeframe: End of month 3</p>
              </div>
            </div>
          </div>

          {/* Timeline Overview */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Timeline Overview</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">The full onboarding process spans approximately three months:</p>
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                  
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <h3 className="font-medium text-base mb-2">Pre-Boarding (1-2 weeks before start)</h3>
                    <p className="text-sm text-muted-foreground">Contract signing, background checks, equipment ordering, welcome email</p>
                  </div>
                  
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <h3 className="font-medium text-base mb-2">First Week</h3>
                    <p className="text-sm text-muted-foreground">Orientation, paperwork completion, equipment setup, company overview</p>
                  </div>
                  
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">3</span>
                    </div>
                    <h3 className="font-medium text-base mb-2">Weeks 2-4</h3>
                    <p className="text-sm text-muted-foreground">Compliance training, team introductions, role-specific training</p>
                  </div>
                  
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">4</span>
                    </div>
                    <h3 className="font-medium text-base mb-2">Months 2-3</h3>
                    <p className="text-sm text-muted-foreground">Increased responsibilities, project assignments, regular check-ins</p>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium">5</span>
                    </div>
                    <h3 className="font-medium text-base mb-2">End of Month 3</h3>
                    <p className="text-sm text-muted-foreground">90-day review, performance assessment, goal setting, formal end of onboarding</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Role-Specific Adaptations */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Role-Specific Adaptations</h2>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">While the core onboarding process remains consistent, certain elements are customized based on role:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-medium mb-2">Technical Roles</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Additional technical training</li>
                    <li>• Development environment setup</li>
                    <li>• Code repository access</li>
                    <li>• Technical mentorship pairing</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-medium mb-2">Management Roles</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Leadership training sessions</li>
                    <li>• Team management orientation</li>
                    <li>• Budget and resource allocation</li>
                    <li>• Performance management training</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-medium mb-2">Customer-Facing Roles</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Product training intensives</li>
                    <li>• Client interaction protocols</li>
                    <li>• CRM system training</li>
                    <li>• Customer service standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Onboarding Responsibilities</h2>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">HR Department</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Overall process coordination</li>
                    <li>• Paperwork and compliance management</li>
                    <li>• Benefits enrollment facilitation</li>
                    <li>• Company policy training</li>
                    <li>• 90-day review scheduling</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Department Manager</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Role-specific training</li>
                    <li>• Performance expectations setting</li>
                    <li>• Team integration facilitation</li>
                    <li>• Regular feedback provision</li>
                    <li>• Performance evaluation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Document prepared by: Human Resources Department</p>
            <p>For internal use only - Contact hr@centrus.ai with questions</p>
          </div>
        </Card>
      </div>
    </main>
  );
}