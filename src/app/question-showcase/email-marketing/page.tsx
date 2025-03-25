// For email-marketing.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, Mail, TrendingUp, BarChart, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function EmailMarketingPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Email Performance Data 2024', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Last Updated: April 8, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Top-Performing Webinar Subject Lines:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. "Join 3,000+ Professionals: AI Workflow Webinar"', 30, 55);
    doc.text('2. "Cut Processing Time by 50% [Free Webinar]"', 30, 65);
    doc.text('3. "Tomorrow Only: Expert AI Implementation Strategies"', 30, 75);
    
    doc.setFontSize(14);
    doc.text('Performance Metrics:', 20, 90);
    doc.setFontSize(12);
    doc.text('Average Open Rate: 32.8%', 30, 100);
    doc.text('Average Click-Through Rate: 18.4%', 30, 110);
    doc.text('Average Conversion Rate: 4.7%', 30, 120);
    doc.text('Best Sending Time: Tuesday 10:00 AM, Thursday 2:00 PM', 30, 130);
    
    doc.setFontSize(10);
    doc.text('Marketing Department', 20, 280);
    doc.text('For internal use only - Version 2.4', 20, 285);

    doc.save('Email_Performance_Data_2024.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Email Performance Data 2024</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>Email_Performance_Data_2024.pdf</p>
                </div>
              </div>
              <Mail className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Document Type</p>
                <p className="text-sm">Marketing Analysis</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Department</p>
                <p className="text-sm">Marketing</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Version</p>
                <p className="text-sm">2.4</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Webinar Email Subject Line Optimization</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>Email subject lines are the gateway to successful webinar promotion campaigns. Our analysis of over 250 webinar promotional emails sent in Q1 2024 has identified clear patterns in what drives open rates, click-through rates, and ultimately, webinar registrations.</p>
              <p>This report provides data-driven insights into what works and why, offering guidance on crafting high-performing subject lines for upcoming webinar series. The recommended subject line patterns have been tested across industries and audience segments.</p>
            </div>
          </div>

          {/* Top Performing Subject Lines */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Top Performing Subject Lines</h2>
            </div>
            <div className="space-y-5">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">1. "Join 3,000+ Professionals: AI Workflow Webinar"</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Open Rate:</p>
                    <p className="text-lg font-semibold text-primary">38.2%</p>
                    <p className="text-xs text-muted-foreground">(+16% above average)</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Click-Through Rate:</p>
                    <p className="text-lg font-semibold text-primary">22.5%</p>
                    <p className="text-xs text-muted-foreground">(+22% above average)</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Registration Rate:</p>
                    <p className="text-lg font-semibold text-primary">5.8%</p>
                    <p className="text-xs text-muted-foreground">(+23% above average)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Why It Works:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Social proof through specific attendee numbers (3,000+)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Clear identification of content type (webinar)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Specific topic focus (AI Workflow) that signals relevance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Professional community inclusion ("Join Professionals")</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">2. "Cut Processing Time by 50% [Free Webinar]"</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Open Rate:</p>
                    <p className="text-lg font-semibold text-primary">36.9%</p>
                    <p className="text-xs text-muted-foreground">(+12% above average)</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Click-Through Rate:</p>
                    <p className="text-lg font-semibold text-primary">21.2%</p>
                    <p className="text-xs text-muted-foreground">(+15% above average)</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Registration Rate:</p>
                    <p className="text-lg font-semibold text-primary">5.4%</p>
                    <p className="text-xs text-muted-foreground">(+15% above average)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Why It Works:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Specific, quantified benefit (50% time reduction)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Action verb at beginning creates urgency ("Cut")</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Emphasizes cost-free value proposition ("[Free Webinar]")</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Brackets draw attention to the free element</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">3. "Tomorrow Only: Expert AI Implementation Strategies"</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Open Rate:</p>
                    <p className="text-lg font-semibold text-primary">35.4%</p>
                    <p className="text-xs text-muted-foreground">(+8% above average)</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Click-Through Rate:</p>
                    <p className="text-lg font-semibold text-primary">19.8%</p>
                    <p className="text-xs text-muted-foreground">(+8% above average)</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Registration Rate:</p>
                    <p className="text-lg font-semibold text-primary">5.1%</p>
                    <p className="text-xs text-muted-foreground">(+9% above average)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Why It Works:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Strong scarcity signal ("Tomorrow Only")</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Expert authority positioning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Promises actionable content ("Implementation Strategies")</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Creates fear of missing out (FOMO)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Components Analysis */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <BarChart className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Key Subject Line Components</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Our analysis identified five key components that drive webinar email performance:</p>
              
              <div className="space-y-6">
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Specificity</h3>
                  <p className="text-sm text-muted-foreground">Subject lines with specific numbers (percentages, attendee counts, time frames) outperform vague subject lines by an average of 15%.</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Strong Example:</p>
                      <p className="text-xs text-muted-foreground">"5 AI Strategies to Save 8+ Hours Weekly"</p>
                    </div>
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Weak Example:</p>
                      <p className="text-xs text-muted-foreground">"Join Our Webinar About AI Productivity"</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">2</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Scarcity/Urgency</h3>
                  <p className="text-sm text-muted-foreground">Subject lines that communicate limited availability or tight timeframes boost open rates by an average of 22%.</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Strong Example:</p>
                      <p className="text-xs text-muted-foreground">"Last 50 Seats: AI Implementation Webinar"</p>
                    </div>
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Weak Example:</p>
                      <p className="text-xs text-muted-foreground">"AI Implementation Webinar Registration"</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Benefit-Focused</h3>
                  <p className="text-sm text-muted-foreground">Subject lines that lead with a concrete benefit achieve 18% higher click-through rates than feature-focused alternatives.</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Strong Example:</p>
                      <p className="text-xs text-muted-foreground">"Reduce Client Onboarding Time by 40%"</p>
                    </div>
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Weak Example:</p>
                      <p className="text-xs text-muted-foreground">"Webinar on Our New Onboarding Features"</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">4</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Social Proof</h3>
                  <p className="text-sm text-muted-foreground">Including elements of social proof increases conversion rates by an average of 14% compared to similar subject lines without social validation.</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Strong Example:</p>
                      <p className="text-xs text-muted-foreground">"How 200+ Marketing Teams Automated Reporting"</p>
                    </div>
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Weak Example:</p>
                      <p className="text-xs text-muted-foreground">"Learn How to Automate Marketing Reporting"</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">5</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Clarity & Brevity</h3>
                  <p className="text-sm text-muted-foreground">Subject lines under 50 characters have a 12% higher average open rate than longer alternatives. Mobile optimization is critical.</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Strong Example:</p>
                      <p className="text-xs text-muted-foreground">"AI Workflow Webinar: 3 Steps to 50% More Output"</p>
                    </div>
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Weak Example:</p>
                      <p className="text-xs text-muted-foreground">"Learn About the Latest Artificial Intelligence Workflow Automation Tools That Can Boost Your Productivity"</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Webinar Promotion Timeline */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Webinar Promotion Timeline</h2>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground mb-4">Our data shows optimal results when following this email sequence for webinar promotion:</p>
              
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <h3 className="font-medium mb-1">14 Days Before: Announcement Email</h3>
                  <p className="text-sm text-muted-foreground">Subject line focus: Content value proposition and speaker credentials</p>
                  <p className="text-sm text-muted-foreground mt-1">Example: "Industry Expert Reveals: AI Implementation Blueprint [Webinar]"</p>
                  <p className="text-xs text-primary mt-2">Average open rate: 28.5%</p>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-md">
                  <h3 className="font-medium mb-1">7 Days Before: Benefits Focused Email</h3>
                  <p className="text-sm text-muted-foreground">Subject line focus: Specific outcomes and learning objectives</p>
                  <p className="text-sm text-muted-foreground mt-1">Example: "Cut Processing Time by 50% [Free Webinar Next Week]"</p>
                  <p className="text-xs text-primary mt-2">Average open rate: 31.2%</p>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-md">
                  <h3 className="font-medium mb-1">3 Days Before: Social Proof Email</h3>
                  <p className="text-sm text-muted-foreground">Subject line focus: Registration numbers and participant companies</p>
                  <p className="text-sm text-muted-foreground mt-1">Example: "Join 3,000+ Professionals: AI Workflow Webinar This Thursday"</p>
                  <p className="text-xs text-primary mt-2">Average open rate: 34.7%</p>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-md">
                  <h3 className="font-medium mb-1">1 Day Before: Urgency Email</h3>
                  <p className="text-sm text-muted-foreground">Subject line focus: Last chance and fear of missing out</p>
                  <p className="text-sm text-muted-foreground mt-1">Example: "Tomorrow Only: Expert AI Implementation Strategies"</p>
                  <p className="text-xs text-primary mt-2">Average open rate: 35.4%</p>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-md">
                  <h3 className="font-medium mb-1">Day of Webinar: Final Reminder (4 hours before)</h3>
                  <p className="text-sm text-muted-foreground">Subject line focus: Immediacy and quick action</p>
                  <p className="text-sm text-muted-foreground mt-1">Example: "Starting in 4 Hours: Your AI Workflow Masterclass [Link Inside]"</p>
                  <p className="text-xs text-primary mt-2">Average open rate: 38.9%</p>
                </div>
              </div>
              <p className="text-xs text-primary mt-4">Note: All emails should use different subject lines. Do not reuse the same subject for reminder emails.</p>
            </div>
          </div>

          {/* Audience Segmentation */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Audience Segmentation Results</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">By Role</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">C-Suite Executives</p>
                    <div className="w-24 h-6 bg-primary/10 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary/40 rounded-full" style={{ width: '62%' }}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">31.2%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Department Managers</p>
                    <div className="w-24 h-6 bg-primary/10 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary/40 rounded-full" style={{ width: '75%' }}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">37.6%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Technical Specialists</p>
                    <div className="w-24 h-6 bg-primary/10 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary/40 rounded-full" style={{ width: '80%' }}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">40.1%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Operational Staff</p>
                    <div className="w-24 h-6 bg-primary/10 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary/40 rounded-full" style={{ width: '46%' }}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">23.2%</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-primary mt-4">Technical specialists respond best to specific, quantified benefits</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">By Industry</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Technology</p>
                    <div className="w-24 h-6 bg-primary/10 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary/40 rounded-full" style={{ width: '84%' }}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">42.1%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Financial Services</p>
                    <div className="w-24 h-6 bg-primary/10 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary/40 rounded-full" style={{ width: '78%' }}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">38.9%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Healthcare</p>
                    <div className="w-24 h-6 bg-primary/10 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary/40 rounded-full" style={{ width: '66%' }}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">33.2%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Manufacturing</p>
                    <div className="w-24 h-6 bg-primary/10 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary/40 rounded-full" style={{ width: '54%' }}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">27.1%</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-primary mt-4">Technology sector responds best to urgency and exclusivity messaging</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Document prepared by: Marketing Analytics Team</p>
            <p>For internal use only - Contact marketing@centrus.ai with questions</p>
          </div>
        </Card>
      </div>
    </main>
  );
}
