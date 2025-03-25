// For security-policy.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, Shield, AlertTriangle, Clock, CheckSquare, Users, LockKeyhole } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function SecurityPolicyPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Data Security Procedures', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Last Updated: May 10, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Data Breach Response Procedure:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. Report immediately to security@company.co.uk', 30, 55);
    doc.text('2. Document what happened', 30, 65);
    doc.text('3. Do not discuss with external parties', 30, 75);
    doc.text('4. IT will secure your device within 30 minutes', 30, 85);
    
    doc.setFontSize(14);
    doc.text('Data Breach Classification:', 20, 100);
    doc.setFontSize(12);
    doc.text('Level 1: Potential Data Exposure (Low Risk)', 30, 110);
    doc.text('Level 2: Confirmed Unauthorised Access (Medium Risk)', 30, 120);
    doc.text('Level 3: Confirmed Data Exfiltration (High Risk)', 30, 130);
    doc.text('Level 4: Public Disclosure of Sensitive Data (Critical Risk)', 30, 140);
    
    doc.setFontSize(10);
    doc.text('Information Security Department', 20, 280);
    doc.text('For internal use only - Version 3.2', 20, 285);

    doc.save('Data_Security_Procedures.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Data Security Procedures</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>Data_Security_Procedures.pdf</p>
                </div>
              </div>
              <Shield className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Document Type</p>
                <p className="text-sm">Security Policy</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Department</p>
                <p className="text-sm">Information Security</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Version</p>
                <p className="text-sm">3.2</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Data Breach Response Overview</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>A data breach is any incident where company data is accessed, disclosed, altered, or destroyed without proper authorisation. Early detection and proper response are critical to minimising damage and meeting our regulatory obligations.</p>
              <p>This document outlines the required steps for all employees when a potential data breach is suspected. Following these procedures ensures we can respond quickly, minimise potential damage, and fulfil our legal reporting requirements.</p>
              <p className="font-medium text-primary">Remember: In suspected breach scenarios, time is critical. Every minute counts.</p>
            </div>
          </div>

          {/* Breach Response Steps */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Breach Response Procedure</h2>
            </div>
            <div className="space-y-5">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">Step 1: Report Immediately</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Contact the security team as soon as you suspect a breach may have occurred.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <p className="text-sm font-medium mb-1">Primary Contact Method:</p>
                      <p className="text-sm text-muted-foreground">Email: security@company.co.uk</p>
                      <p className="text-xs text-primary mt-2">This inbox is monitored 24/7</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-md">
                      <p className="text-sm font-medium mb-1">Alternative Contact Method:</p>
                      <p className="text-sm text-muted-foreground">Security Hotline: +44 (0)20 7123 4567</p>
                      <p className="text-xs text-primary mt-2">Use if email access is compromised</p>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">What to Include in Your Report:</p>
                    <ul className="space-y-2 mt-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Your name and contact information</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Date and time when you noticed the potential breach</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Brief description of what you observed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Which systems, data, or devices may be affected</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">Step 2: Document What Happened</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Create a detailed record of the incident while events are fresh in your memory.</p>
                  
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">Documentation Requirements:</p>
                    <ul className="space-y-2 mt-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Chronological timeline of events</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Screenshots of any error messages or suspicious activities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>List of potentially affected files, systems, or data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Any actions you've already taken</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Documentation Method:</p>
                    <p className="text-sm text-muted-foreground">Use the Incident Response Form available on the company intranet (Security Portal {'>'} Incident Response {'>'} Forms)</p>
                    <p className="text-xs text-primary mt-2">If intranet access is unavailable, document in any available format and provide to the security team later</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">Step 3: Do Not Discuss With External Parties</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Maintain strict confidentiality about the potential breach.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <p className="text-sm font-medium mb-1">Prohibited Communications:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Social media posts</li>
                        <li>• Discussions with press/media</li>
                        <li>• Conversations with clients</li>
                        <li>• Sharing with family/friends</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-md">
                      <p className="text-sm font-medium mb-1">Authorised Communications:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Security team members</li>
                        <li>• Your direct manager</li>
                        <li>• IT support staff</li>
                        <li>• Data Protection Officer</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">Rationale for Confidentiality:</p>
                    <ul className="space-y-2 mt-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Prevents premature or inaccurate information from spreading</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Allows for proper forensic investigation without interference</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Maintains compliance with regulatory notification requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Protects the company's reputation and legal position</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">Step 4: IT Will Secure Your Device</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">The IT security team will respond rapidly to secure affected systems.</p>
                  
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Response Time Commitment:</p>
                    <p className="text-sm text-muted-foreground">A security team member will secure your device within 30 minutes of your initial report.</p>
                    <p className="text-xs text-primary mt-2">Response times are monitored and guaranteed 24/7/365</p>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">What to Expect:</p>
                    <ul className="space-y-2 mt-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>IT may need to take control of your device remotely</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>You may be asked to disconnect from the network</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Your device might be replaced temporarily during investigation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>You'll receive an incident ticket number for tracking</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">While Waiting for IT:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Do not shut down or restart your device</li>
                      <li>• Do not delete any files or clear browser history</li>
                      <li>• Do not install any new software</li>
                      <li>• Remain available to assist the security team</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Breach Classification */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <CheckSquare className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Data Breach Classification</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <p className="text-sm text-muted-foreground mb-4">The security team will classify the incident based on severity. Different classification levels trigger different response protocols:</p>
              
              <div className="space-y-6">
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30">
                    <span className="text-green-600 font-medium dark:text-green-400">1</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Level 1: Potential Data Exposure</h3>
                  <p className="text-sm text-muted-foreground">Suspicious activity that may indicate an attempted breach, but no confirmation of unauthorised access.</p>
                  <div className="mt-2 p-2 bg-green-50 rounded dark:bg-green-900/20 border border-green-100 dark:border-green-900/30">
                    <p className="text-xs text-green-700 dark:text-green-400">Example: Phishing email received, clicked but no credentials entered</p>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center dark:bg-yellow-900/30">
                    <span className="text-yellow-600 font-medium dark:text-yellow-400">2</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Level 2: Confirmed Unauthorised Access</h3>
                  <p className="text-sm text-muted-foreground">Verification that unauthorised access has occurred, but no evidence of data exfiltration.</p>
                  <div className="mt-2 p-2 bg-yellow-50 rounded dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30">
                    <p className="text-xs text-yellow-700 dark:text-yellow-400">Example: Login from unknown IP address with valid credentials</p>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center dark:bg-orange-900/30">
                    <span className="text-orange-600 font-medium dark:text-orange-400">3</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Level 3: Confirmed Data Exfiltration</h3>
                  <p className="text-sm text-muted-foreground">Evidence shows data has been copied, transmitted, viewed or stolen by unauthorised parties.</p>
                  <div className="mt-2 p-2 bg-orange-50 rounded dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/30">
                    <p className="text-xs text-orange-700 dark:text-orange-400">Example: Server logs show database export to unknown external location</p>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center dark:bg-red-900/30">
                    <span className="text-red-600 font-medium dark:text-red-400">4</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Level 4: Public Disclosure of Sensitive Data</h3>
                  <p className="text-sm text-muted-foreground">Sensitive company or personal data has been publicly exposed or is being leveraged by threat actors.</p>
                  <div className="mt-2 p-2 bg-red-50 rounded dark:bg-red-900/20 border border-red-100 dark:border-red-900/30">
                    <p className="text-xs text-red-700 dark:text-red-400">Example: Customer data published on hacking forums or ransomware demand received</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Timeline of Response */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Incident Response Timeline</h2>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground mb-4">After your initial report, the security team follows this response timeline:</p>
              
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                
                <div className="relative pl-12 pb-8">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Initial Response (0-30 minutes)</h3>
                  <p className="text-sm text-muted-foreground">Security team secures affected systems and begins initial assessment</p>
                </div>
                
                <div className="relative pl-12 pb-8">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">2</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Severity Classification (30-60 minutes)</h3>
                  <p className="text-sm text-muted-foreground">Incident is classified according to impact and scope</p>
                </div>
                
                <div className="relative pl-12 pb-8">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Detailed Investigation (1-24 hours)</h3>
                  <p className="text-sm text-muted-foreground">Forensic analysis to determine extent of breach and affected data</p>
                </div>
                
                <div className="relative pl-12 pb-8">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">4</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Containment & Remediation (24-72 hours)</h3>
                  <p className="text-sm text-muted-foreground">Actions to prevent further data loss and repair vulnerabilities</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">5</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Regulatory Reporting (if required, within 72 hours)</h3>
                  <p className="text-sm text-muted-foreground">Data Protection Officer notifies relevant authorities if breach meets reporting thresholds</p>
                </div>
              </div>
            </div>
          </div>

          {/* Employee Responsibilities */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Employee Responsibilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">Preventive Measures</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Complete security awareness training annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Use strong, unique passwords and multi-factor authentication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Lock devices when unattended (Windows Key + L)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Be vigilant for phishing attempts and suspicious emails</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Only access company data through approved applications</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">During Incident Investigation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Remain available to answer questions from the security team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Follow all instructions from IT and security personnel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Document any additional information you recall about the incident</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Use provided temporary equipment according to guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Maintain confidentiality throughout the investigation process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <LockKeyhole className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Additional Resources</h2>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <h3 className="font-medium mb-2">Security Portal</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive security policies, procedures, and training materials.</p>
                  <p className="text-xs text-primary mt-2">Access: intranet.company.co.uk/security</p>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-md">
                  <h3 className="font-medium mb-2">Incident Response Forms</h3>
                  <p className="text-sm text-muted-foreground">Templates for documenting security incidents and suspected breaches.</p>
                  <p className="text-xs text-primary mt-2">Access: intranet.company.co.uk/security/forms</p>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-md">
                  <h3 className="font-medium mb-2">Security Awareness Training</h3>
                  <p className="text-sm text-muted-foreground">Online modules covering data security best practices and threat recognition.</p>
                  <p className="text-xs text-primary mt-2">Access: learn.company.co.uk/security</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded-md">
                <h3 className="font-medium mb-2">Key Contacts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <p><span className="font-medium">Security Team (24/7):</span> security@company.co.uk | +44 (0)20 7123 4567</p>
                  <p><span className="font-medium">IT Help Desk:</span> helpdesk@company.co.uk | +44 (0)20 7123 4568</p>
                  <p><span className="font-medium">Data Protection Officer:</span> dpo@company.co.uk | +44 (0)20 7123 4569</p>
                  <p><span className="font-medium">Compliance Team:</span> compliance@company.co.uk | +44 (0)20 7123 4570</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Document prepared by: Information Security Department</p>
            <p>For internal use only - Contact security@company.co.uk with questions</p>
          </div>
        </Card>
      </div>
    </main>
  );
}
