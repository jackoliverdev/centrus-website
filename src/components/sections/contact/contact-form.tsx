'use client';

import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Building2, Briefcase, MessageSquare } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const SPRING_CONFIG = { stiffness: 100, damping: 30, mass: 1 };

const interests = [
  { icon: Briefcase, label: 'Enterprise Solutions' },
  { icon: Building2, label: 'Custom Integration' },
  { icon: MessageSquare, label: 'Technical Support' },
  { icon: Send, label: 'Partnership' },
  { icon: Building2, label: 'Pricing' },
  { icon: Briefcase, label: 'Other' },
];

export function ContactForm() {
  const [state, handleSubmit] = useForm("xnnjvgzy");
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

  // Show success message and clear form
  React.useEffect(() => {
    if (state.succeeded) {
      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. We'll get back to you shortly.",
      });
      // Clear the form and selected interest
      if (formRef.current) {
        formRef.current.reset();
        setSelectedInterest(null);
      }
    }
  }, [state.succeeded, toast]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_CONFIG}
      className="relative"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING_CONFIG, delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="mt-2 text-muted-foreground">
          Transform your business with AI. Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </motion.div>

      <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-primary/50 before:via-primary/10 before:to-transparent before:p-[1px]">
        <div className="relative rounded-xl bg-gradient-to-b from-background/80 to-background/40 p-8 backdrop-blur-xl">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            {/* Name Fields */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <Input 
                  name="firstName"
                  placeholder="John" 
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
                  placeholder="Doe" 
                  className="h-11" 
                  required 
                  disabled={state.submitting} 
                />
                <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
              </div>
            </div>

            {/* Email & Company */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@company.com"
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
                  Company <span className="text-red-500">*</span>
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
            </div>

            {/* Interest as hidden input */}
            <input type="hidden" name="interest" value={selectedInterest || ''} />

            {/* Interest Buttons */}
            <div className="space-y-2">
              <label className="text-sm font-medium">What are you interested in?</label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {interests.map(({ icon: Icon, label }) => (
                  <Button
                    key={label}
                    type="button"
                    variant={selectedInterest === label ? 'default' : 'outline'}
                    className={cn(
                      'group h-auto min-h-[44px] justify-start px-3 py-2 text-sm transition-all duration-200',
                      'whitespace-normal text-left',
                      selectedInterest === label && 'border-primary/50'
                    )}
                    onClick={() => setSelectedInterest(label)}
                    disabled={state.submitting}
                  >
                    <Icon className="mr-2 h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    <span className="line-clamp-2">{label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your needs..."
                rows={4}
                className={cn(`
                  w-full rounded-md border-0 bg-transparent px-3.5 py-2
                  shadow-sm ring-1 ring-inset ring-input
                  placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-inset
                  focus:ring-primary disabled:cursor-not-allowed
                  disabled:opacity-50
                `)}
                required
                disabled={state.submitting}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

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
          </form>

          {/* Decorative backgrounds */}
          <DecorativeBackground />
        </div>
      </div>
    </motion.div>
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
        Send Message
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
        Sending...
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
        Message Sent!
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

