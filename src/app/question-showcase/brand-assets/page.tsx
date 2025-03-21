'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, Palette, Type, Layout, Image } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function BrandAssetsPage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Product Launch Brand Assets', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Updated: January 2024', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Brand Colors:', 20, 45);
    doc.setFontSize(12);
    doc.text('Primary: #4F46E5 (Indigo)', 30, 55);
    doc.text('Secondary: #EC4899 (Pink)', 30, 65);
    doc.text('Neutral: #1F2937 (Gray)', 30, 75);
    
    doc.setFontSize(14);
    doc.text('Typography:', 20, 90);
    doc.setFontSize(12);
    doc.text('Headings: Inter (Bold)', 30, 100);
    doc.text('Body: Inter (Regular)', 30, 110);
    
    doc.setFontSize(14);
    doc.text('Logo Usage:', 20, 125);
    doc.setFontSize(12);
    doc.text('Minimum Size: 32px', 30, 135);
    doc.text('Clear Space: 16px on all sides', 30, 145);
    
    doc.setFontSize(10);
    doc.text('Generated on January 15, 2024', 20, 280);
    doc.text('For internal use only - Confidential', 20, 285);

    doc.save('Product_Launch_Brand_Assets.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Product Launch Brand Assets</h1>
                <p className="text-muted-foreground">Updated: January 2024</p>
              </div>
              <FileText className="h-8 w-8 text-primary/60" />
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Color Palette</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-[#4F46E5]"></div>
                <p className="font-medium">Primary</p>
                <p className="text-sm text-muted-foreground">
                  #4F46E5<br />
                  RGB: 79, 70, 229
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-[#EC4899]"></div>
                <p className="font-medium">Secondary</p>
                <p className="text-sm text-muted-foreground">
                  #EC4899<br />
                  RGB: 236, 72, 153
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-[#1F2937]"></div>
                <p className="font-medium">Neutral</p>
                <p className="text-sm text-muted-foreground">
                  #1F2937<br />
                  RGB: 31, 41, 55
                </p>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Type className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Typography</h2>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Headings</p>
                <p className="text-4xl font-bold mb-2">Inter Bold</p>
                <p className="text-sm text-muted-foreground">
                  Used for all headings and titles<br />
                  Weights: 700 (Bold)
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Body</p>
                <p className="text-xl mb-2">Inter Regular</p>
                <p className="text-sm text-muted-foreground">
                  Used for body text and descriptions<br />
                  Weights: 400 (Regular), 500 (Medium)
                </p>
              </div>
            </div>
          </div>

          {/* Logo Usage */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Layout className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Logo Usage</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-4">Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Minimum Size</span>
                      <span className="font-medium">32px</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Clear Space</span>
                      <span className="font-medium">16px all sides</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">File Formats</span>
                      <span className="font-medium">SVG, PNG</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-4">Available Versions</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Full Color</span>
                      <span className="font-medium">Primary Use</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monochrome</span>
                      <span className="font-medium">Limited Use</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Reversed</span>
                      <span className="font-medium">Dark Backgrounds</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Social Media */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Image className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Social Media Templates</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border border-border/50">
                <h3 className="font-medium mb-4">Image Dimensions</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">LinkedIn Post</span>
                    <span className="font-medium">1200 x 627px</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Twitter Post</span>
                    <span className="font-medium">1200 x 675px</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Instagram Post</span>
                    <span className="font-medium">1080 x 1080px</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border border-border/50">
                <h3 className="font-medium mb-4">Template Links</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Figma</span>
                    <Link href="#" className="text-primary hover:underline">View Templates</Link>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Canva</span>
                    <Link href="#" className="text-primary hover:underline">View Templates</Link>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Adobe CC</span>
                    <Link href="#" className="text-primary hover:underline">View Templates</Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Generated on January 15, 2024</p>
            <p>For internal use only - Confidential</p>
          </div>
        </Card>
      </div>
    </main>
  );
}