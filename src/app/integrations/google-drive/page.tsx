'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils/helpers';

const steps = [
  {
    title: 'Navigate to Training',
    description: 'Access the training page from your Centrus dashboard.',
  },
  {
    title: 'Connect Google Drive',
    description: 'Click the "Connect to Google Drive" button and approve access permissions.',
  },
  {
    title: 'Select Files',
    description: 'Choose the documents and folders you want Centrus to analyse.',
  },
  {
    title: 'Sync and Train',
    description: 'Press sync to import your selected files into the Documents tab.',
  },
  {
    title: 'Organise and Chat',
    description: 'Tag your documents and start chatting with them immediately.',
  },
];

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export default function GoogleDriveIntegration() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle 800px at 50% 50%, rgba(16, 185, 129, 0.05), transparent)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <Container>
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/integrations"
            className="group inline-flex items-center gap-2 pt-8 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Integrations
          </Link>
        </motion.div>

        {/* Header Section */}
        <div className="my-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeVariants} className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Active Integration
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeVariants}
              className="text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent"
            >
              Google Drive Integration
            </motion.h1>
            <motion.p 
              variants={fadeVariants}
              className="text-lg text-muted-foreground"
            >
              Connect your Google Drive to Centrus AI and transform your documents into an
              intelligent, searchable knowledge base in minutes.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-32 w-32 lg:h-48 lg:w-48 rounded-xl border border-primary/10 bg-background/50 p-6 backdrop-blur-sm">
              <Image
                src="/logos/google-drive.svg"
                alt="Google Drive"
                fill
                className="object-contain p-4"
              />
            </div>
          </motion.div>
        </div>

        {/* Setup Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 space-y-12"
        >
          <motion.h2 variants={fadeVariants} className="text-2xl font-semibold">
            Setup Guide
          </motion.h2>
          <div className="grid gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeVariants}
                className="flex items-start gap-4 rounded-lg border border-primary/10 bg-background/50 p-6 backdrop-blur-sm hover:border-primary/20 transition-colors duration-300"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 space-y-12"
        >
          <motion.h2 variants={fadeVariants} className="text-2xl font-semibold">
            Key Features
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {[
              'Secure OAuth2 authentication',
              'Smart folder selection',
              'Bulk document importing',
            ].map((feature) => (
              <motion.div
                key={feature}
                variants={fadeVariants}
                className="flex items-center gap-2 rounded-lg border border-primary/10 bg-background/50 p-4 text-sm backdrop-blur-sm hover:border-primary/20 transition-colors duration-300"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
} 