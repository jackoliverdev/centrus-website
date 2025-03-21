'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function CustomIntegrations() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16">
      {/* Simplified Background Elements - matching other sections */}
      <div className="absolute inset-0 -z-[1]">
        {/* Static grid background - matching other sections */}
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <Container>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto max-w-3xl text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center rounded-full bg-[#2b9ce5]/10 px-4 py-1 text-sm ring-1 ring-[#2b9ce5]/20 backdrop-blur-sm"
            >
              <Sparkles className="mr-2 h-4 w-4 text-[#2b9ce5]" />
              <span className="bg-gradient-to-r from-[#2b9ce5] to-[#2b9ce5]/80 bg-clip-text text-transparent">
                Custom Solutions
              </span>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">Need a Custom Integration?</h2>
              <p className="text-xs text-muted-foreground sm:text-lg">
                Our team can build tailored integrations to match your unique workflow requirements.
                Get in touch to discuss your specific needs.
              </p>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden text-white"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Talk to Sales
                  <Mail className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
