'use client';

import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Building2, User, Phone, MessageSquare } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Container } from '@/components/ui/container';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const SPRING_CONFIG = { stiffness: 100, damping: 30, mass: 1 };

export function AffiliatesForm() {
  const [state, handleSubmit] = useForm("mldgnpwd");
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

  // Show success message and clear form
  React.useEffect(() => {
    if (state.succeeded) {
      toast({
        title: 'Application submitted! 🎉',
        description: "We'll review your application and get back to you soon.",
      });
      // Clear the form
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded, toast]);

  return (
    <Container className="py-12 md:py-0 md:pb-16 lg:py-0 lg:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={SPRING_CONFIG}
        className="mx-auto max-w-xl"
      >
        <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-primary/50 before:via-primary/10 before:to-transparent before:p-[1px]">
          <div className="relative rounded-xl bg-gradient-to-b from-background/80 to-background/40 p-8 backdrop-blur-xl">
            <DecorativeBackground />
            
            <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-8">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className="h-11 pl-11"
                    required
                    disabled={state.submitting}
                  />
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                </div>
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    name="company"
                    placeholder="Company Name"
                    className="h-11 pl-11"
                    required
                    disabled={state.submitting}
                  />
                  <Building2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                </div>
                <ValidationError prefix="Company" field="company" errors={state.errors} />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+44 79999 99999"
                    className="h-11 pl-11"
                    required
                    disabled={state.submitting}
                  />
                  <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                </div>
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Tell us about your experience and how you plan to promote Centrus AI..."
                    rows={4}
                    className={cn(`
                      w-full rounded-md border-0 bg-transparent px-3.5 py-2 pl-11
                      shadow-sm ring-1 ring-inset ring-input
                      placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-inset
                      focus:ring-primary disabled:cursor-not-allowed
                      disabled:opacity-50
                    `)}
                    required
                    disabled={state.submitting}
                  />
                  <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground/40" />
                </div>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <motion.div
                initial={false}
                animate={state.errors ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="group relative h-12 w-full overflow-hidden"
                  disabled={state.submitting}
                >
                  <AnimatedButtonContent status={state} />
                  <ButtonShimmer />
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </Container>
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
        Submit Application
        <Send className="ml-2 h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
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
        Submitting...
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
        Application Sent!
        <CheckCircle2 className="ml-2 h-5 w-5" />
      </motion.span>
    );
  }

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-flex items-center text-white"
    >
      Error Submitting
      <AlertCircle className="ml-2 h-5 w-5 text-white" />
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
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
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
