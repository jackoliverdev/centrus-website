// For dashboard-troubleshooting.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, AlertCircle, CheckCircle, ShieldAlert, Clock } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function AdminAccessTroubleshootingPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Admin Access Troubleshooting Guide', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Last Updated: January 15, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Common Access Issues:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. Account Status Verification', 30, 55);
    doc.text('2. Permission Level Checks', 30, 65);
    doc.text('3. Browser-Related Problems', 30, 75);
    doc.text('4. Network and Firewall Issues', 30, 85);
    doc.text('5. Temporary Access Links', 30, 95);
    
    doc.setFontSize(14);
    doc.text('Resolution Flowchart:', 20, 110);
    doc.setFontSize(12);
    doc.text('1. Verify account is active in admin panel', 30, 120);
    doc.text('2. Check user permissions (minimum L2 required)', 30, 130);
    doc.text('3. Request browser cache clearing and extension disabling', 30, 140);
    doc.text('4. Generate temporary access link if issues persist', 30, 150);
    doc.text('5. Escalate to technical support team', 30, 160);
    
    doc.setFontSize(10);
    doc.text('Internal Support Document - Version 2.4', 20, 280);
    doc.text('Contact technical-support@centrus.ai for assistance', 20, 285);

    doc.save('Admin_Access_Troubleshooting_Guide.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Admin Access Troubleshooting Guide</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>Admin_Access_Troubleshooting_Guide.pdf</p>
                </div>
              </div>
              <ShieldAlert className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Document Version</p>
                <p className="text-sm">2.4</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Last Updated</p>
                <p className="text-sm">January 15, 2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Department</p>
                <p className="text-sm">Customer Support</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>This guide provides a structured approach to resolving common issues when customers report they cannot access their admin dashboard. Follow these steps in sequence to efficiently diagnose and resolve access problems.</p>
              <p>Remember to document all troubleshooting steps in the support ticket for future reference. If an issue persists after completing all steps, escalate to the technical support team.</p>
            </div>
          </div>

          {/* Troubleshooting Steps */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Troubleshooting Process</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 1: Account Status Verification</h3>
                <p className="text-sm text-muted-foreground">Check if the customer's account is active in the administration system. Navigate to User Management {'->'} Account Status and verify the following:</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">1</span>
                    <span>Account status shows as "Active" (not "Suspended" or "Pending")</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">2</span>
                    <span>Billing status is current with no outstanding payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">3</span>
                    <span>Account has not been flagged for security reasons</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 2: Permission Level Checks</h3>
                <p className="text-sm text-muted-foreground">Verify the user has the correct permission level to access the admin dashboard:</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">1</span>
                    <span>Navigate to User Management {'->'} Permissions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">2</span>
                    <span>Confirm user has at least "Administrator" or "Manager" role assigned</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">3</span>
                    <span>Check for any recently modified permission settings</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 3: Browser-Related Problems</h3>
                <p className="text-sm text-muted-foreground">If account status and permissions are correct, have the customer try these browser-related fixes:</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">1</span>
                    <span>Clear browser cache and cookies (provide step-by-step instructions based on browser)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">2</span>
                    <span>Disable all browser extensions, especially ad-blockers and security extensions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">3</span>
                    <span>Try accessing from an incognito/private browsing window</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">4</span>
                    <span>Test with a different browser if possible</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Step 4: Temporary Access Link</h3>
                <p className="text-sm text-muted-foreground">If the issue persists after trying the above steps, generate a temporary access link:</p>
                <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">1</span>
                    <span>Go to User Management {'->'} Emergency Access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">2</span>
                    <span>Generate a temporary link with validity of 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">3</span>
                    <span>Send link to customer's registered email address only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">4</span>
                    <span>Log the temporary access event in the ticketing system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">5</span>
                    <span>Flag for investigation by the technical support team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Escalation Path */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Escalation Path</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">If the customer still cannot access their admin dashboard after completing all troubleshooting steps, escalate as follows:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="font-medium mb-1">Priority Level</p>
                    <p className="text-sm text-muted-foreground">High - Business Impact</p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="font-medium mb-1">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 2 hours</p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="font-medium mb-1">Escalate To</p>
                    <p className="text-sm text-muted-foreground">Technical Support Team</p>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-primary/60" />
                    <p className="font-medium">Required Information for Escalation</p>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Complete troubleshooting steps attempted</li>
                    <li>• Screenshots of any error messages</li>
                    <li>• User ID and organization details</li>
                    <li>• Temporary access link status (if generated)</li>
                    <li>• Browser and operating system information</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Document prepared by: Customer Support Training Team</p>
            <p>For internal use only - Do not distribute to customers</p>
          </div>
        </Card>
      </div>
    </main>
  );
}