'use client';

import { motion } from 'framer-motion';
import { Calendar, Building2, User2, Mail, MessageSquare, Sparkles } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const SPRING_CONFIG = { stiffness: 100, damping: 30, mass: 1 };

export function DemoBooking() {
  const [state, handleSubmit] = useForm("mdkazwzq");
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

  // Show success message and clear form
  React.useEffect(() => {
    if (state.succeeded) {
      toast({
        title: 'Demo Scheduled!',
        description: "We'll be in touch shortly to confirm your demo time.",
      });
      // Clear the form
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded, toast]);

  return (
    <div className="space-y-6">
      {/* Form Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={SPRING_CONFIG}
        className="space-y-4"
      >
        <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm">
          <Calendar className="mr-2 h-4 w-4 text-primary" />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Book Your Demo
          </span>
        </div>
        <h2 className="text-2xl font-bold">Schedule a Personalised Demo</h2>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING_CONFIG, delay: 0.1 }}
      >
        <Card className="relative overflow-hidden">
          <CardContent className="p-6">
            {/* Background Gradients */}
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

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="inline-flex items-center text-sm font-medium">
                    First Name
                    <span className="ml-1 text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      name="firstName"
                      placeholder="John"
                      className="h-11 pl-11"
                      required
                      disabled={state.submitting}
                    />
                    <User2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                  </div>
                  <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                </div>
                <div className="space-y-2">
                  <label className="inline-flex items-center text-sm font-medium">
                    Last Name
                    <span className="ml-1 text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      name="lastName"
                      placeholder="Smith"
                      className="h-11 pl-11"
                      required
                      disabled={state.submitting}
                    />
                    <User2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                  </div>
                  <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                </div>
              </div>

              {/* Email & Company */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="inline-flex items-center text-sm font-medium">
                    Work Email
                    <span className="ml-1 text-red-500">*</span>
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
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/40" />
                  </div>
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="space-y-2">
                  <label className="inline-flex items-center text-sm font-medium">
                    Company
                    <span className="ml-1 text-red-500">*</span>
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

              {/* Message */}
              <div className="space-y-2">
                <label className="inline-flex items-center text-sm font-medium">
                  How can we help?
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Tell us about your needs, use cases and preffered time..."
                    rows={4}
                    className="w-full rounded-md border-0 bg-transparent py-3 pl-11 shadow-sm ring-1 ring-inset ring-input placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-inset focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                    required
                    disabled={state.submitting}
                  />
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground/40" />
                </div>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="group relative h-12 w-full overflow-hidden text-white dark:text-white"
                disabled={state.submitting}
              >
                {!state.submitting && !state.succeeded && (
                  <motion.span
                    className="inline-flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Book Your Demo
                    <Calendar className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </motion.span>
                )}
                {state.submitting && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="inline-flex items-center"
                  >
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
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Scheduling...
                  </motion.span>
                )}
                {state.succeeded && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="inline-flex items-center"
                  >
                    Demo Scheduled!
                    <Sparkles className="ml-2 h-4 w-4" />
                  </motion.span>
                )}

                {/* Shimmer Effect */}
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
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
