'use client';

import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Building2, BookOpen, Phone, MessageSquare } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { Container } from '@/components/ui/container';

const SPRING_CONFIG = { stiffness: 100, damping: 30, mass: 1 };

// PDF file path - update this to your actual PDF path
const PDF_DOWNLOAD_PATH = '/ai-business-success-guide.pdf';

export function EbookForm() {
  // Updated Formspree endpoint
  const [state, handleSubmit] = useForm("mwplnpol");
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);
  const [showDownloadLink, setShowDownloadLink] = useState(false);

  // Function to trigger PDF download
  const downloadPDF = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = PDF_DOWNLOAD_PATH;
    link.setAttribute('download', 'AI-10-Routes-To-Business-Success.pdf');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Show success message, clear form, and trigger download
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: 'Success!',
        description: "Your download is starting automatically.",
      });
      
      // Clear the form
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Trigger download after a slight delay
      setTimeout(() => {
        downloadPDF();
        setShowDownloadLink(true);
      }, 500);
    }
  }, [state.succeeded, toast]);

  return (
    <section id="download-form" className="pb-16 md:pb-24 relative">
      {/* Background decorative elements removed */}
      
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={SPRING_CONFIG}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Download Your
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent ml-2">
                Free Guide
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Complete the form below to instantly download your copy of AI: 10 Routes to Business Success. This comprehensive guide will help you navigate the AI landscape and implement AI in your business.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium">Immediate Download</h3>
                  <p className="text-sm text-muted-foreground">Get instant access to your ebook after form submission.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium">Practical Implementation Tips</h3>
                  <p className="text-sm text-muted-foreground">Actionable strategies you can start using immediately.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium">Manager-Focused Content</h3>
                  <p className="text-sm text-muted-foreground">Written specifically for business leaders and decision-makers.</p>
                </div>
              </div>
            </div>
            
            {/* Download link that appears after form submission */}
            {showDownloadLink && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-4 border border-primary/20 rounded-lg bg-primary/5"
              >
                <p className="text-sm mb-2">If your download didn't start automatically:</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={downloadPDF}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Download Guide Again
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...SPRING_CONFIG, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-primary/50 before:via-primary/10 before:to-transparent before:p-[1px]">
              <div className="relative rounded-xl bg-gradient-to-b from-background/80 to-background/40 p-8 backdrop-blur-xl">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        name="firstName"
                        placeholder="First name" 
                        className="h-11" 
                        required 
                        disabled={state.submitting} 
                      />
                      <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        name="lastName"
                        placeholder="Last name" 
                        className="h-11" 
                        required 
                        disabled={state.submitting} 
                      />
                      <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          name="email"
                          type="email"
                          placeholder="name@company.co.uk"
                          className="h-11 pl-11"
                          required
                          disabled={state.submitting}
                        />
                        <MessageSquare className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                      </div>
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="+44 (0) 123 456 7890"
                          className="h-11 pl-11"
                          disabled={state.submitting}
                        />
                        <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                      </div>
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        name="company"
                        placeholder="Your company"
                        className="h-11 pl-11"
                        required
                        disabled={state.submitting}
                      />
                      <Building2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                    </div>
                    <ValidationError prefix="Company" field="company" errors={state.errors} />
                  </div>

                  {/* Hidden field to identify the form's purpose */}
                  <input type="hidden" name="formType" value="ebook-download" />
                  
                  {/* Hidden field for PDF path - this helps Formspree know which file to send */}
                  <input type="hidden" name="pdfPath" value={PDF_DOWNLOAD_PATH} />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="group relative h-12 w-full overflow-hidden"
                    disabled={state.submitting}
                  >
                    <AnimatedButtonContent status={state} />
                    <ButtonShimmer />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By submitting this form, you agree to receive the ebook and our{' '}
                    <Link 
                      href="/legal/privacy-policy" 
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>.
                  </p>
                </form>

                {/* Decorative backgrounds */}
                <DecorativeBackground />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Update AnimatedButtonContent to use Formspree state
function AnimatedButtonContent({ status }: { status: any }) {
  if (!status.submitting && !status.succeeded) {
    return (
      <motion.span
        className="inline-flex items-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Download Guide
        <BookOpen className="ml-2 h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
      </motion.span>
    );
  }

  if (status.submitting) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="inline-flex items-center text-white"
      >
        <LoadingSpinner />
        Processing...
      </motion.span>
    );
  }

  if (status.succeeded) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="inline-flex items-center text-white"
      >
        Guide Sent!
        <CheckCircle2 className="ml-2 h-5 w-5" />
      </motion.span>
    );
  }

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-flex items-center"
    >
      Error Sending
      <AlertCircle className="ml-2 h-5 w-5" />
    </motion.span>
  );
}

function ButtonShimmer() {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      animate={{
        x: ['-100%', '100%'],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 3,
      }}
    />
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="-ml-1 mr-3 h-5 w-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function DecorativeBackground() {
  return (
    <>
      <motion.div
        className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 -z-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </>
  );
} 