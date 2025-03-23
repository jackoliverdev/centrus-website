'use client';

import { motion } from 'framer-motion';
import { Users, Sparkles, CircleDollarSign, Clock4, HeartHandshake } from 'lucide-react';
import React from 'react';

import { Container } from '@/components/ui/container';

export function AffiliatesHero() {
  return (
    <div className="relative overflow-hidden bg-background pb-16 pt-24">
      <Container className="relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <div className="relative rounded-full border border-primary/20 bg-primary/10 p-4 backdrop-blur-sm">
                <HeartHandshake className="h-8 w-8 text-primary" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r pb-3 from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
          >
            Join our affiliate program,
            <br />
            grow with us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground"
          >
            Partner with Centrus AI and earn competitive commissions while helping businesses
            transform their operations with cutting-edge AI solutions.
          </motion.p>

          {/* Feature Cards */}
          <div className="relative mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: <CircleDollarSign className="h-5 w-5" />,
                title: '10% Commission',
                description: 'Guaranteed recurring revenue',
              },
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: 'Emerging Tech',
                description: 'Join the AI revolution',
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: 'Dedicated Support',
                description: 'Personal affiliate manager',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="relative rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm"
              >
                <div className="mb-3 flex items-center justify-center">
                  <div className="rounded-full bg-primary/10 p-2">{feature.icon}</div>
                </div>
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>

      {/* Background effects */}
      <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1100/600] w-[68.75rem] bg-gradient-to-l from-primary/40 to-secondary/40 opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1100/600] w-[68.75rem] bg-gradient-to-r from-accent/30 to-primary/30 opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
    </div>
  );
}
