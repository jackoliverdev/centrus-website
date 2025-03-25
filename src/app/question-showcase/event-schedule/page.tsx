// For event-schedule.js
'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, FileText, Download, Calendar, Clock, MapPin, Users } from 'lucide-react';
import Link from 'next/link';
import jsPDF from 'jspdf';

export default function EventSchedulePage() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Annual Conference 2025 Itinerary', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Event Date: March 2, 2025', 20, 30);
    
    // Add sections to PDF
    doc.setFontSize(14);
    doc.text('Schedule Overview:', 20, 45);
    doc.setFontSize(12);
    doc.text('09:00 - 09:30: Registration & Coffee', 30, 55);
    doc.text('09:30 - 11:00: Morning Sessions', 30, 65);
    doc.text('11:00 - 11:30: Break', 30, 75);
    doc.text('11:30 - 13:00: Workshop Sessions', 30, 85);
    doc.text('13:00 - 14:00: Lunch', 30, 95);
    doc.text('14:30: VIP Guest Arrival (Sarah Johnson)', 30, 105);
    doc.text('14:45: Technical Setup for Guest Speaker', 30, 115);
    doc.text('15:00 - 16:00: Special Presentation', 30, 125);
    doc.text('16:00 - 17:30: Networking Reception', 30, 135);
    
    doc.setFontSize(10);
    doc.text('CONFIDENTIAL - FOR STAFF USE ONLY', 20, 280);
    doc.text('Event Coordinator: Michael Barnes +44 7700 900123', 20, 285);

    doc.save('Annual_Conference_2025_Itinerary.pdf');
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
                <h1 className="text-3xl font-bold mb-2">Annual Conference 2025 Itinerary</h1>
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <p>03/02/2025_Itinerary.pdf</p>
                </div>
              </div>
              <Calendar className="h-8 w-8 text-primary/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Event Date</p>
                <p className="text-sm">March 2, 2025</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-sm">Central Conference Centre</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Expected Attendance</p>
                <p className="text-sm">150 attendees</p>
              </div>
            </div>
          </div>

          {/* Event Overview */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Event Overview</h2>
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>Our Annual Conference brings together professionals from across the industry for a day of learning and networking. This year's event features workshops, panel discussions, and a special guest presentation.</p>
            </div>
          </div>

          {/* Schedule */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Full Schedule</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium mb-2">Morning</h3>
                  <span className="text-xs text-muted-foreground">09:00 - 13:00</span>
                </div>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Registration & Coffee</span>
                      <span className="text-muted-foreground">09:00 - 09:30</span>
                    </div>
                    <p className="text-muted-foreground mt-1">Main Foyer, Ground Floor</p>
                  </li>
                  <li className="text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Opening Remarks</span>
                      <span className="text-muted-foreground">09:30 - 10:00</span>
                    </div>
                    <p className="text-muted-foreground mt-1">Main Hall, Robert Thompson (CEO)</p>
                  </li>
                  <li className="text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Session 1: Industry Trends</span>
                      <span className="text-muted-foreground">10:00 - 11:00</span>
                    </div>
                    <p className="text-muted-foreground mt-1">Main Hall</p>
                  </li>
                  <li className="text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Morning Break</span>
                      <span className="text-muted-foreground">11:00 - 11:30</span>
                    </div>
                    <p className="text-muted-foreground mt-1">Refreshments in Networking Zone</p>
                  </li>
                  <li className="text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Workshop Sessions</span>
                      <span className="text-muted-foreground">11:30 - 13:00</span>
                    </div>
                    <p className="text-muted-foreground mt-1">Various Rooms (See Room Assignments)</p>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium mb-2">Afternoon</h3>
                  <span className="text-xs text-muted-foreground">13:00 - 17:30</span>
                </div>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Networking Lunch</span>
                      <span className="text-muted-foreground">13:00 - 14:00</span>
                    </div>
                    <p className="text-muted-foreground mt-1">Dining Hall, First Floor</p>
                  </li>
                  <li className="text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Panel Discussion</span>
                      <span className="text-muted-foreground">14:00 - 14:30</span>
                    </div>
                    <p className="text-muted-foreground mt-1">Main Hall</p>
                  </li>
                  <li className="text-sm border-l-2 border-primary pl-3">
                    <div className="flex justify-between">
                      <span className="font-medium">VIP Guest Arrival (Sarah Johnson)</span>
                      <span className="text-muted-foreground">14:30</span>
                    </div>
                    <p className="text-muted-foreground mt-1">East Entrance - STAFF ONLY INFORMATION</p>
                    <p className="text-xs text-primary mt-1">Note: Requires 15 minutes for mic setup before presentation</p>
                  </li>
                  <li className="text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Special Guest Presentation</span>
                      <span className="text-muted-foreground">15:00 - 16:00</span>
                    </div>
                    <p className="text-muted-foreground mt-1">Main Hall</p>
                  </li>
                  <li className="text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Closing Reception</span>
                      <span className="text-muted-foreground">16:00 - 17:30</span>
                    </div>
                    <p className="text-muted-foreground mt-1">Garden Terrace (Weather Permitting)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Venue Map */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary/60" />
              <h2 className="text-xl font-semibold">Special Guest Information</h2>
            </div>
            <Card className="p-6 border border-border/50">
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-medium mb-2">VIP Speaker: Sarah Johnson</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Arrival Time: 14:30 sharp</li>
                    <li>• Entrance: East Entrance (Staff escort required)</li>
                    <li>• Green Room: Executive Suite on 2nd Floor</li>
                    <li>• Technical Requirements: Wireless microphone, HDMI connection</li>
                    <li>• Setup Time: 15 minutes required for microphone check and presentation setup</li>
                    <li>• Presentation Time: 15:00 - 16:00</li>
                  </ul>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-red-500/20 text-red-500 px-3 py-1 rounded-md text-sm font-medium">
                    CONFIDENTIAL - STAFF ONLY
                  </div>
                  <p className="text-sm text-muted-foreground ml-3">This is sensitive information not to be shared with attendees</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t border-border pt-8">
            <p>Document prepared by: Event Planning Committee</p>
            <p>Event Coordinator: Michael Barnes | Contact: +44 7700 900123</p>
            <p className="mt-2 text-xs">FOR INTERNAL USE ONLY</p>
          </div>
        </Card>
      </div>
    </main>
  );
}