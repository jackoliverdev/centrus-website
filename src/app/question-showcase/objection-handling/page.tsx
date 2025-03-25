// For objection-handling.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, DollarSign, TrendingUp, BarChart, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function ObjectionHandlingPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Objection Handling Playbook', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Last Updated: March 15, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Price Objection Handling Strategies:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. Reframe as investment not cost', 30, 55);
    doc.text('2. Highlight 8-month average ROI', 30, 65);
    doc.text('3. Explain 15% higher effectiveness rating', 30, 75);
    doc.text('4. Offer quarterly payment option', 30, 85);
    doc.text('5. Share similar client success metrics', 30, 95);
    
    doc.setFontSize(14);
    doc.text('Implementation Guidelines:', 20, 110);
    doc.setFontSize(12);
    doc.text('Listen: Understand the specific concern behind the price objection', 30, 120);
    doc.text('Acknowledge: Validate their concern without apologizing for pricing', 30, 130);
    doc.text('Respond: Apply the appropriate strategy from the playbook', 30, 140);
    doc.text('Confirm: Check if your response addressed their concern', 30, 150);
    
    doc.setFontSize(10);
    doc.text('Sales Department', 20, 280);
    doc.text('For internal use only - Version 3.1', 20, 285);

    doc.save('Objection_Handling_Playbook.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Objection Handling Playbook</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>Objection_Handling_Playbook.pdf</p>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Document Type</p>
                <p className="text-sm">Sales Playbook</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Department</p>
                <p className="text-sm">Sales</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Version</p>
                <p className="text-sm">3.1</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Handling Price Objections</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>Price objections are among the most common challenges faced by our sales team. When prospects say our solution is "too expensive," it rarely means they can't afford it—rather, they don't yet perceive sufficient value to justify the investment.</p>
              <p>This playbook provides a structured approach to addressing price objections effectively, turning potential roadblocks into opportunities to demonstrate value and advance the sales process.</p>
              <p>Remember: A price objection is often a request for more information about value, not a final decision.</p>
            </div>
          </div>

          {/* Key Strategies */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Key Response Strategies</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Strategy 1: Reframe as Investment Not Cost</h3>
                <p className="text-sm text-muted-foreground">Shift the prospect's perspective from viewing our solution as an expense to seeing it as a strategic investment with returns.</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-md p-3">
                    <p className="text-sm font-medium mb-1">Avoid Saying:</p>
                    <p className="text-sm text-muted-foreground">"Yes, our solution does require a significant upfront cost, but..."</p>
                  </div>
                  <div className="bg-primary/10 rounded-md p-3">
                    <p className="text-sm font-medium mb-1">Instead Say:</p>
                    <p className="text-sm text-muted-foreground">"Organizations typically see this as a strategic investment that delivers continuous returns through [specific benefits]."</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium mb-1">Key Talking Points:</p>
                  <ul className="space-y-2 mt-1 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Focus on long-term value creation rather than short-term expense</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Discuss how the solution contributes to strategic objectives beyond cost savings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Highlight ongoing benefits that accrue over the customer lifecycle</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Strategy 2: Highlight 8-Month Average ROI</h3>
                <p className="text-sm text-muted-foreground">Present concrete data about our solution's return on investment timeline to demonstrate value.</p>
                <div className="mt-4">
                  <p className="text-sm font-medium mb-1">ROI Framework:</p>
                  <ul className="space-y-2 mt-1 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Initial 1-3 months: Implementation and adoption phase</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Months 4-6: Efficiency gains and early measurable returns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Month 8: Complete investment recovery (average)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Beyond month 8: Continued returns and growing ROI percentage</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-md">
                  <p className="text-sm font-medium mb-1">Suggested Response:</p>
                  <p className="text-sm text-muted-foreground">"Based on data from similar customers in your industry, most organizations see complete return on investment within 8 months. After this point, our solution continues to deliver value while requiring minimal additional investment."</p>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Strategy 3: Explain 15% Higher Effectiveness Rating</h3>
                <p className="text-sm text-muted-foreground">Use competitive differentiation to justify premium pricing by highlighting superior performance metrics.</p>
                <div className="mt-4">
                  <p className="text-sm font-medium mb-1">Performance Comparison Areas:</p>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <p className="text-sm font-medium mb-1">Processing Efficiency:</p>
                      <p className="text-sm text-muted-foreground">Our solution processes data 22% faster than the industry average</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-md">
                      <p className="text-sm font-medium mb-1">Automation Capabilities:</p>
                      <p className="text-sm text-muted-foreground">Automates 18% more workflows than comparable solutions</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-md">
                      <p className="text-sm font-medium mb-1">Integration Flexibility:</p>
                      <p className="text-sm text-muted-foreground">Supports 30+ native integrations vs 20+ for competitors</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-md">
                      <p className="text-sm font-medium mb-1">User Adoption Rate:</p>
                      <p className="text-sm text-muted-foreground">12% higher user adoption rates within first 30 days</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium mb-1">Key Talking Point:</p>
                  <p className="text-sm text-muted-foreground">"When comparing solutions, it's important to consider the 15% higher effectiveness rating our platform consistently achieves in independent evaluations. This means you'll realize more value from your investment compared to lower-priced alternatives that deliver less impact."</p>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Strategy 4: Offer Quarterly Payment Option</h3>
                <p className="text-sm text-muted-foreground">Address cash flow concerns by presenting flexible payment structures that maintain our value proposition.</p>
                <div className="mt-4">
                  <p className="text-sm font-medium mb-1">Payment Structure Options:</p>
                  <ul className="space-y-2 mt-1 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Annual payment (standard): 100% of annual subscription price</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Quarterly payment: 4 installments of 26% of annual price (4% premium)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Implementation fee can be distributed across first two quarters</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-md">
                  <p className="text-sm font-medium mb-1">Suggested Response:</p>
                  <p className="text-sm text-muted-foreground">"I understand budget constraints can be challenging. We offer quarterly payment options that can help distribute the investment across your fiscal year, making it easier to manage cash flow while still accessing all the platform benefits."</p>
                </div>
                <p className="text-xs text-primary mt-3">Note: Quarterly payment options require approval for deals under £100K ARR</p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-2">Strategy 5: Share Similar Client Success Metrics</h3>
                <p className="text-sm text-muted-foreground">Use relevant case studies and success metrics from similar customers to validate the solution's value proposition.</p>
                <div className="mt-4">
                  <p className="text-sm font-medium mb-1">Success Story Components:</p>
                  <ul className="space-y-2 mt-1 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Customer profile (size, industry, challenges)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Implementation timeline and process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Quantifiable results and metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                      <span>Quote from customer on value realization</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Manufacturing Example:</p>
                    <p className="text-sm text-muted-foreground">"A manufacturer similar to your company invested in our solution and saw a 32% reduction in processing time and 28% decrease in operational costs within the first year."</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Retail Example:</p>
                    <p className="text-sm text-muted-foreground">"A retail client increased customer engagement by 45% and saw a 24% lift in repeat purchases after implementing our platform."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Framework */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <BarChart className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Implementation Framework</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Follow this structured approach when responding to price objections:</p>
              
              <div className="space-y-6">
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Listen Actively</h3>
                  <p className="text-sm text-muted-foreground">Before responding, fully understand the specific nature of the price objection. Is it about absolute cost, ROI concerns, budget timing, or comparison to competitors?</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">2</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Acknowledge Legitimately</h3>
                  <p className="text-sm text-muted-foreground">Validate their concern without being defensive. "I understand that investment is a significant consideration, and you need to ensure you're getting appropriate value."</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Select Appropriate Strategy</h3>
                  <p className="text-sm text-muted-foreground">Based on their specific objection, choose the most relevant strategy from the playbook. You may combine multiple strategies for a comprehensive response.</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">4</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Support with Evidence</h3>
                  <p className="text-sm text-muted-foreground">Provide specific data, case studies, or testimonials that support your value proposition. Concrete examples are more persuasive than general statements.</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">5</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Confirm Understanding</h3>
                  <p className="text-sm text-muted-foreground">Check if your response addressed their concern. "Does that help address your question about the investment?" Then move the conversation forward.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* When to Escalate */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">When to Offer Concessions</h2>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground mb-4">Price objections should primarily be addressed through value demonstration, not discounting. However, in specific circumstances, limited concessions may be appropriate:</p>
              
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <h3 className="font-medium mb-1">Strategic Accounts</h3>
                  <p className="text-sm text-muted-foreground">For accounts in target industries with expansion potential, limited discounting (up to 15%) may be approved with director sign-off.</p>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-md">
                  <h3 className="font-medium mb-1">Competitive Displacements</h3>
                  <p className="text-sm text-muted-foreground">When displacing a direct competitor, first-year discounting up to 20% may be offered in exchange for a case study commitment.</p>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-md">
                  <h3 className="font-medium mb-1">Multi-Year Commitments</h3>
                  <p className="text-sm text-muted-foreground">Customers committing to 3+ years can receive up to 10% discount with standard annual increases of 5% in years 2 and 3.</p>
                </div>
              </div>
              <p className="text-xs text-primary mt-4">Note: All discounting must be approved through the Deal Desk process and cannot be verbally promised without authorization.</p>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Client Success Stories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">TechSolutions Ltd</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Initially objected to our enterprise pricing tier</p>
                  <p className="text-sm text-muted-foreground">Sales rep applied Strategy 2 (ROI timeline) and Strategy 5 (similar client metrics)</p>
                  <p className="text-sm text-muted-foreground">Result: Signed full-price 2-year agreement</p>
                  <p className="text-sm text-muted-foreground">Actual ROI achieved: 6.5 months (better than our 8-month average)</p>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">Global Manufacturing Inc</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Concerned about cash flow impact of annual payment</p>
                  <p className="text-sm text-muted-foreground">Sales rep applied Strategy 4 (quarterly payment option)</p>
                  <p className="text-sm text-muted-foreground">Result: Closed deal within same quarter at full value</p>
                  <p className="text-sm text-muted-foreground">Customer renewed early for year 2 on annual payment plan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Document prepared by: Sales Enablement Team</p>
            <p>For internal use only - Contact sales.enablement@centrus.ai with questions</p>
          </div>
        </Card>
      </div>
    </main>
  );
}
