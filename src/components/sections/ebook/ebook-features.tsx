'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen,
  BrainCircuit, 
  Database, 
  FileSearch,
  Layers,
  Rocket, 
  Settings, 
  Zap
} from 'lucide-react';
import React from 'react';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const SPRING_CONFIG = { stiffness: 100, damping: 30, mass: 1 };

const features = [
  {
    title: 'Understanding the AI Landscape',
    description: 'Learn about the latest AI technologies and how they can be applied to solve real business challenges in the UK market.',
    icon: BrainCircuit,
  },
  {
    title: 'Enhancing Knowledge Retrieval',
    description: 'Discover techniques to transform your organisation\'s information into accessible, searchable knowledge.',
    icon: FileSearch,
  },
  {
    title: 'Data-Driven Decision Making',
    description: 'Implement frameworks that enable intelligent, evidence-based decisions using your existing business data.',
    icon: Database,
  },
  {
    title: 'Automating Repetitive Tasks',
    description: 'Identify and automate time-consuming manual processes to save costs and free your staff for higher-value work.',
    icon: Zap,
  },
  {
    title: 'Integrating Business Data with AI',
    description: 'Practical strategies for connecting your organisation\'s systems and databases with modern AI tools for maximum impact.',
    icon: Layers,
  },
  {
    title: 'Plus 5 More Business AI Routes',
    description: 'Download the complete guide to discover all 10 essential strategies for deploying AI successfully in your business.',
    icon: BookOpen,
    isSpecial: true,
  },
];

export function EbookFeatures() {
  return (
    <section className="py-8 md:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={SPRING_CONFIG}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What You'll <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Discover</span>
          </h2>
          <p className="mx-auto max-w-4xl text-lg text-muted-foreground">
            Our comprehensive guide covers these essential routes to leveraging AI for business success:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...SPRING_CONFIG, delay: index * 0.1 }}
              className={`relative rounded-xl border ${feature.isSpecial ? 'border-primary/30 bg-gradient-to-b from-primary/10 to-background/80' : 'border-primary/10 bg-gradient-to-b from-background/80 to-background/40'} p-6 backdrop-blur-sm`}
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${feature.isSpecial ? 'bg-primary/20' : 'bg-primary/10'}`}>
                <feature.icon className={`h-6 w-6 ${feature.isSpecial ? 'text-primary' : 'text-primary'}`} />
              </div>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className={`${feature.isSpecial ? 'text-muted-foreground/90' : 'text-muted-foreground'}`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
} 