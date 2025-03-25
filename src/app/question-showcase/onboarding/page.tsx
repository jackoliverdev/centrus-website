'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, ClipboardList, Database, UserPlus, Calendar } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function OnboardingProcedurePage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Client Onboarding Procedure 2024', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Effective: January 1, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Onboarding Steps:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. Initial setup call', 30, 55);
    doc.text('2. Data integration planning', 30, 65);
    doc.text('3. Tag setup & knowledge base structuring', 30, 75);
    doc.text('4. User account creation', 30, 85);
    doc.text('5. Training session', 30, 95);
    
    doc.setFontSize(14);
    doc.text('Timeline:', 20, 110);
    doc.setFontSize(12);
    doc.text('Standard onboarding: 7-10 business days', 30, 120);
    doc.text('Enterprise onboarding: 14-21 business days', 30, 130);
    
    doc.setFontSize(14);
    doc.text('Team Responsibilities:', 20, 145);
    doc.setFontSize(12);
    doc.text('Account Manager: Overall coordination', 30, 155);
    doc.text('Implementation Specialist: Technical setup', 30, 165);
    doc.text('Customer Success: Training & documentation', 30, 175);
    
    doc.setFontSize(10);
    doc.text('Generated on March 10, 2024', 20, 280);
    doc.text('For internal use only - Confidential', 20, 285);

    doc.save('Client_Onboarding_Procedure_2024.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Client Onboarding Procedure</h1>
                <p className="text-muted-foreground">Last Updated: January 2024</p>
              </div>
              <FileText className="h-8 w-8 text-primary/60" />
            </div>
          </div>

          {/* Process Overview */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Process Overview</h2>
            <div className="prose prose-neutral max-w-none text-white">
              <p>Our client onboarding process consists of 5 key steps, designed to ensure a smooth implementation of Centrus AI within your organization. The entire process typically takes 7-10 business days from contract signing to full deployment.</p>
            </div>
          </div>

          {/* Onboarding Steps */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <ClipboardList className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Onboarding Steps</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <p className="font-medium mb-1">Initial Setup Call</p>
                  <p className="text-sm text-muted-foreground">30-minute introduction call to review goals, timeline, and answer initial questions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <p className="font-medium mb-1">Data Integration Planning</p>
                  <p className="text-sm text-muted-foreground">Identify key data sources, review API connections, and establish integration strategy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <p className="font-medium mb-1">Tag Setup & Knowledge Base Structuring</p>
                  <p className="text-sm text-muted-foreground">Create organizational knowledge taxonomy and implement tagging structure.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <p className="font-medium mb-1">User Account Creation</p>
                  <p className="text-sm text-muted-foreground">Set up administrator and user accounts with appropriate permissions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">5</div>
                <div>
                  <p className="font-medium mb-1">Training Session</p>
                  <p className="text-sm text-muted-foreground">60-90 minute training session for administrators and end users.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Timeline</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-4">Standard Onboarding</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Duration</span>
                      <span className="font-medium">7-10 business days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Initial Call</span>
                      <span className="font-medium">Day 1</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Account Setup</span>
                      <span className="font-medium">Days 2-3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Data Integration</span>
                      <span className="font-medium">Days 3-7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Training</span>
                      <span className="font-medium">Days 8-10</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-4">Enterprise Onboarding</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Duration</span>
                      <span className="font-medium">14-21 business days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Discovery Phase</span>
                      <span className="font-medium">Days 1-5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Architecture Design</span>
                      <span className="font-medium">Days 6-10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Implementation</span>
                      <span className="font-medium">Days 10-18</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Training Sessions</span>
                      <span className="font-medium">Days 18-21</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Data Integration */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Data Integration</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border border-border/50">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 15L8 17L12 13M19 15V21M16 18H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium mb-2">Document Upload</h3>
                <p className="text-sm text-muted-foreground">Import documents, manuals, and files for AI processing.</p>
              </Card>
              
              <Card className="p-6 border border-border/50">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6H12M20 12H12M20 18H12M4 6H8M4 12H8M4 18H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium mb-2">CRM Connection</h3>
                <p className="text-sm text-muted-foreground">Connect your CRM system for customer data integration.</p>
              </Card>
              
              <Card className="p-6 border border-border/50">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium mb-2">Knowledge Base</h3>
                <p className="text-sm text-muted-foreground">Configure your company knowledge base with smart tagging.</p>
              </Card>
            </div>
          </div>

          {/* User Management */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <UserPlus className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">User Management</h2>
            </div>
            <div className="prose prose-neutral max-w-none text-white">
              <ul className="space-y-2">
                <li>Define user roles and access permissions based on your organizational structure</li>
                <li>Set up admin users who can manage knowledge bases and monitor usage</li>
                <li>Create team structures to manage department-specific information access</li>
                <li>Implement tag-based access control for sensitive information</li>
                <li>Configure single sign-on (SSO) for enterprise deployments</li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>For questions about the onboarding process, contact your account manager or email support@centrus.ai</p>
            <p>For internal use only - Confidential</p>
          </div>
        </Card>
      </div>
    </main>
  );
}