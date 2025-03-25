// For content-repurposing.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, BarChart, BookOpen, Share2, RefreshCw, Layers } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function ContentRepurposingPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Content Repurposing Strategy', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Last Updated: June 2, 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Whitepaper Repurposing Channels:', 20, 45);
    doc.setFontSize(12);
    doc.text('1. LinkedIn Articles', 30, 55);
    doc.text('2. Blog Posts', 30, 65);
    doc.text('3. Social Media Posts', 30, 75);
    doc.text('4. Video Content', 30, 85);
    
    doc.setFontSize(14);
    doc.text('Content Transformation Framework:', 20, 100);
    doc.setFontSize(12);
    doc.text('Extract: Identify key insights from the whitepaper', 30, 110);
    doc.text('Transform: Adapt content for each channel', 30, 120);
    doc.text('Optimize: Tailor messaging for each audience', 30, 130);
    doc.text('Schedule: Plan strategic release timing', 30, 140);
    
    doc.setFontSize(10);
    doc.text('Marketing Department', 20, 280);
    doc.text('For internal use only - Version 2.1', 20, 285);

    doc.save('Content_Repurposing_Strategy.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Content Repurposing Strategy</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>Content_Repurposing_Strategy.pdf</p>
                </div>
              </div>
              <RefreshCw className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Document Type</p>
                <p className="text-sm">Marketing Guide</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Department</p>
                <p className="text-sm">Marketing</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Version</p>
                <p className="text-sm">2.1</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Whitepaper Repurposing Overview</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>Whitepapers represent significant investments in research, expertise, and content creation. When properly repurposed, a single whitepaper can fuel your content marketing efforts across multiple channels for weeks or even months.</p>
              <p>This document outlines our strategic approach to breaking down comprehensive whitepapers—like our recent "AI Integration: Implementation Strategies for Enterprise Solutions"—into formats optimized for different marketing channels and audience segments.</p>
              <p className="font-medium text-primary">Remember: Each channel requires its own format, tone, and delivery strategy while maintaining consistent messaging.</p>
            </div>
          </div>

          {/* Content Transformation Framework */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Layers className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Content Transformation Framework</h2>
            </div>
            <div className="space-y-5">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">Step 1: Extract Key Insights</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Begin by identifying the most valuable and compelling elements from the whitepaper.</p>
                  
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">What to Extract:</p>
                    <ul className="space-y-2 mt-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Core arguments and primary thesis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Supporting statistics and research findings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Visual elements (charts, graphs, infographics)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Memorable quotes and actionable takeaways</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Case studies and practical examples</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">AI Integration Whitepaper Example:</p>
                    <p className="text-sm text-muted-foreground">From our 32-page whitepaper, we identified 8 core insights, 15 key statistics, 6 case studies, and 4 implementation frameworks that could be repurposed.</p>
                    <p className="text-xs text-primary mt-2">Each insight can potentially become a standalone piece of content</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">Step 2: Transform for Each Channel</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Adapt the extracted content to fit the format, style, and best practices of each target channel.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/10 rounded-md">
                      <p className="text-sm font-medium mb-1">Format Considerations:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Length requirements</li>
                        <li>• Visual elements needed</li>
                        <li>• Interactive components</li>
                        <li>• Technical limitations</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-md">
                      <p className="text-sm font-medium mb-1">Style Adaptations:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Formal vs. conversational tone</li>
                        <li>• Technical vs. accessible language</li>
                        <li>• Long-form vs. scannable content</li>
                        <li>• Corporate vs. personal voice</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">Transformation Matrix:</p>
                    <div className="mt-2 overflow-x-auto">
                      <table className="w-full min-w-[600px] text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 font-medium">Channel</th>
                            <th className="text-left py-2 font-medium">Length</th>
                            <th className="text-left py-2 font-medium">Tone</th>
                            <th className="text-left py-2 font-medium">Visual Elements</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/50">
                            <td className="py-2">LinkedIn Article</td>
                            <td className="py-2">1000-1500 words</td>
                            <td className="py-2">Professional, thoughtful</td>
                            <td className="py-2">1-2 key graphics</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2">Blog Post</td>
                            <td className="py-2">800-1200 words</td>
                            <td className="py-2">Informative, conversational</td>
                            <td className="py-2">Multiple visuals, branded</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2">Social Media</td>
                            <td className="py-2">50-100 words</td>
                            <td className="py-2">Engaging, concise</td>
                            <td className="py-2">Eye-catching image/graphic</td>
                          </tr>
                          <tr>
                            <td className="py-2">Video Content</td>
                            <td className="py-2">2-5 minutes</td>
                            <td className="py-2">Conversational, energetic</td>
                            <td className="py-2">Motion graphics, captions</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">Step 3: Optimize for Audience</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Tailor the messaging to resonate with the specific audience of each channel.</p>
                  
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">Audience Considerations:</p>
                    <ul className="space-y-2 mt-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Primary pain points and motivations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Level of technical knowledge</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Preferred content consumption patterns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Decision-making influence and authority</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Example: AI Integration Messaging by Audience</p>
                    <div className="mt-2 grid grid-cols-1 gap-2">
                      <div className="p-2 bg-primary/5 rounded border border-primary/10">
                        <p className="text-xs font-medium text-primary mb-1">For C-Suite (LinkedIn):</p>
                        <p className="text-xs text-muted-foreground">"AI Integration as a Competitive Advantage: ROI and Strategic Impact"</p>
                      </div>
                      <div className="p-2 bg-primary/5 rounded border border-primary/10">
                        <p className="text-xs font-medium text-primary mb-1">For IT Directors (Blog):</p>
                        <p className="text-xs text-muted-foreground">"Implementation Roadmap: Technical Requirements for Successful AI Integration"</p>
                      </div>
                      <div className="p-2 bg-primary/5 rounded border border-primary/10">
                        <p className="text-xs font-medium text-primary mb-1">For End Users (Social):</p>
                        <p className="text-xs text-muted-foreground">"3 Ways AI Is Transforming Daily Workflows in Modern Organizations"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">Step 4: Schedule Strategically</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Plan the timing and sequence of content releases across channels for maximum impact.</p>
                  
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">Strategic Scheduling Considerations:</p>
                    <ul className="space-y-2 mt-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Create a content calendar spanning 4-6 weeks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Use teaser content to build anticipation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Leverage cross-promotion between channels</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                        <span>Consider industry events and seasonal timing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Recommended Sequence:</p>
                    <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside pl-4">
                      <li>Launch with main blog post highlighting key findings</li>
                      <li>Follow with LinkedIn article expanding on strategic implications</li>
                      <li>Release social media snippets over 2-3 weeks</li>
                      <li>Publish video content as a "deep dive" after initial interest</li>
                      <li>Circle back with follow-up blog addressing common questions</li>
                    </ol>
                    <p className="text-xs text-primary mt-2">This sequence creates multiple touchpoints while maintaining audience interest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Channel-Specific Strategies */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Share2 className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Channel-Specific Strategies</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Each marketing channel requires specific adaptations to maximize engagement:</p>
              
              <div className="space-y-6">
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">LinkedIn Articles</h3>
                  <p className="text-sm text-muted-foreground">Professional, long-form content that establishes thought leadership and industry expertise.</p>
                  <div className="mt-2 space-y-2">
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Best Practices:</p>
                      <ul className="list-disc text-xs text-muted-foreground pl-4 space-y-1">
                        <li>Include personal insights not in the original whitepaper</li>
                        <li>Feature a compelling narrative hook and clear conclusion</li>
                        <li>Invite discussion with thoughtful questions at the end</li>
                        <li>Optimize with relevant hashtags (3-5 maximum)</li>
                      </ul>
                    </div>
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Example Title Adaptation:</p>
                      <p className="text-xs text-muted-foreground">"What We Learned Implementing AI Across 50 Enterprise Organizations: Key Insights from Our Latest Research"</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">2</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Blog Posts</h3>
                  <p className="text-sm text-muted-foreground">SEO-optimized content that drives website traffic and provides value to prospects at different stages.</p>
                  <div className="mt-2 space-y-2">
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Best Practices:</p>
                      <ul className="list-disc text-xs text-muted-foreground pl-4 space-y-1">
                        <li>Create a series of posts focusing on different aspects</li>
                        <li>Include custom graphics and pull quotes</li>
                        <li>Optimize for relevant keywords and search intent</li>
                        <li>Add clear calls-to-action to download the full whitepaper</li>
                      </ul>
                    </div>
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Example Series Structure:</p>
                      <ol className="list-decimal text-xs text-muted-foreground pl-4 space-y-1">
                        <li>"5 Critical Challenges in Enterprise AI Integration"</li>
                        <li>"Building Your AI Integration Roadmap: A Step-by-Step Guide"</li>
                        <li>"Measuring ROI: Key Metrics for AI Implementation Success"</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Social Media Posts</h3>
                  <p className="text-sm text-muted-foreground">Bite-sized, shareable content that drives awareness and engagement across platforms.</p>
                  <div className="mt-2 space-y-2">
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Best Practices:</p>
                      <ul className="list-disc text-xs text-muted-foreground pl-4 space-y-1">
                        <li>Extract compelling statistics and create data visualizations</li>
                        <li>Turn key insights into shareable quote graphics</li>
                        <li>Create platform-specific formats (carousel posts for LinkedIn, threads for Twitter)</li>
                        <li>Use consistent branding and hashtags across all posts</li>
                      </ul>
                    </div>
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Example Post Types:</p>
                      <ul className="list-disc text-xs text-muted-foreground pl-4 space-y-1">
                        <li>Statistic highlight: "87% of organizations reported improved efficiency after AI integration"</li>
                        <li>Challenge post: "What's your biggest obstacle to implementing AI? Our research found that..."</li>
                        <li>Tip series: "3 essential steps before beginning your AI integration journey"</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">4</span>
                  </div>
                  <h3 className="font-medium text-base mb-2">Video Content</h3>
                  <p className="text-sm text-muted-foreground">Visual storytelling that simplifies complex concepts and creates an emotional connection.</p>
                  <div className="mt-2 space-y-2">
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Best Practices:</p>
                      <ul className="list-disc text-xs text-muted-foreground pl-4 space-y-1">
                        <li>Create short (under 2 minutes) explainer videos on key concepts</li>
                        <li>Film thought leader interviews discussing whitepaper findings</li>
                        <li>Develop case study videos highlighting real implementation stories</li>
                        <li>Include captions and optimize for silent viewing</li>
                      </ul>
                    </div>
                    <div className="p-2 bg-primary/5 rounded border border-primary/10">
                      <p className="text-xs font-medium text-primary mb-1">Example Video Concepts:</p>
                      <ul className="list-disc text-xs text-muted-foreground pl-4 space-y-1">
                        <li>"AI Integration in 90 Seconds: Key Findings Explained"</li>
                        <li>"Behind the Research: How We Gathered Data from 200+ Organizations"</li>
                        <li>"Client Success Story: How Company X Achieved 40% Efficiency Gains"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* AI Whitepaper Example */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">AI Integration Whitepaper: Repurposing Example</h2>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground mb-4">Applied content transformation for our latest AI Integration whitepaper:</p>
              
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <h3 className="font-medium mb-1">Original Whitepaper Section</h3>
                  <p className="text-sm text-muted-foreground italic">"Our research across 200 enterprise organizations revealed that AI integration projects achieve full ROI within 14 months on average, with the most successful implementations reporting productivity gains of 27-35% in core business processes. However, organizations lacking a formal implementation framework were 3x more likely to experience project delays and 2.5x more likely to exceed budget allocations."</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <h3 className="font-medium mb-1">LinkedIn Article Adaptation</h3>
                    <p className="text-sm text-muted-foreground">Headline: "The Hidden Cost of Unstructured AI Implementation"</p>
                    <p className="text-sm text-muted-foreground mt-2">Lead paragraph: "After analyzing AI integration projects across 200 enterprises, one statistic stood out starkly: organizations without a structured implementation framework were 3x more likely to face costly delays. Here's what this means for your AI strategy..."</p>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-md">
                    <h3 className="font-medium mb-1">Social Media Adaptation</h3>
                    <p className="text-sm text-muted-foreground">LinkedIn post: "📊 RESEARCH REVEALS: Companies with structured AI implementation frameworks achieve ROI 14 months faster and experience 3x fewer project delays. Learn how leading organizations are standardizing their approach in our latest whitepaper. [Link] #AIImplementation #EnterpriseAI"</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <h3 className="font-medium mb-1">Blog Post Adaptation</h3>
                    <p className="text-sm text-muted-foreground">Title: "AI Implementation Frameworks: The Critical Factor in Project Success Rates"</p>
                    <p className="text-sm text-muted-foreground mt-2">Structure: Analysis of what constitutes an effective framework, breakdown of the 27-35% productivity gains by department, and actionable steps for creating an implementation framework.</p>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-md">
                    <h3 className="font-medium mb-1">Video Content Adaptation</h3>
                    <p className="text-sm text-muted-foreground">Concept: "AI by the Numbers" - An animated 90-second video visualizing the ROI timeline and contrasting successful implementations with delayed projects through simple graphics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Measurement */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <BarChart className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Measuring Repurposing Success</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">Key Performance Indicators</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Engagement metrics by channel (views, shares, comments)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Conversion rate to whitepaper downloads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Lead generation attributed to repurposed content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Reach expansion compared to whitepaper-only distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">•</span>
                    <span>Content lifespan and ongoing engagement</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium mb-3">Previous Campaign Results</h3>
                <p className="text-sm text-muted-foreground mb-3">Our last whitepaper repurposing campaign achieved:</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Original whitepaper downloads</p>
                    <div className="w-24 h-6 bg-primary/10 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary/40 rounded-full" style={{ width: '100%' }}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">487</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">With repurposing: downloads</p>
                    <div className="w-24 h-6 bg-primary/10 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary/40 rounded-full" style={{ width: '100%' }}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">1,842</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">New leads generated</p>
                    <div className="w-24 h-6 bg-primary/10 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary/40 rounded-full" style={{ width: '100%' }}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">316</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Content ROI improvement</p>
                    <div className="w-24 h-6 bg-primary/10 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary/40 rounded-full" style={{ width: '100%' }}></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">278%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Document prepared by: Content Marketing Team</p>
            <p>For internal use only - Contact marketing@centrus.ai with questions</p>
          </div>
        </Card>
      </div>
    </main>
  );
}
