'use client';

import { motion } from 'framer-motion';
import { Code2, PenTool, ArrowRight, X, Users, HeartHandshake, Filter, Clock, Mail } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const CARD_HEIGHT = '550px';

const departments = ['All Departments', 'Engineering', 'Marketing', 'Sales', 'Customer Success'];

const jobs = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    icon: Code2,
    department: 'Engineering',
    location: 'Remote / London / New York',
    shortDescription:
      'Join our AI team to develop and implement cutting-edge machine learning solutions for enterprise clients.',
    fullDescription: `We're looking for an experienced AI Engineer to join our growing team.

Required Skills:
• 3+ years experience in ML/AI
• Strong Python & TensorFlow/PyTorch
• Experience with large language models
• Background in enterprise software

Key Responsibilities:
• Developing and deploying ML models
• Optimizing AI performance
• Cross-functional collaboration
• Research and implementation

Benefits:
• Competitive salary based on experience
• Remote-first culture
• Learning & development budget
• Health and wellness benefits`,
    color: '#2B9CE5', // primary
  },
  {
    id: 'content-creator',
    title: 'Marketing Content Creator',
    icon: PenTool,
    department: 'Marketing',
    location: 'Remote / London',
    shortDescription:
      'Create compelling content that showcases our AI technology and tells our brand story.',
    fullDescription: `We're seeking a talented Content Creator to help tell the Centrus AI story.

Required Skills:
• 2+ years in tech content creation
• Strong writing and editing abilities
• Understanding of AI/ML concepts
• Video production experience

Key Responsibilities:
• Technical content creation
• Thought leadership articles
• Social media management
• Video and visual content

Benefits:
• Competitive salary based on experience
• Flexible working hours
• Creative freedom
• Professional development`,
    color: '#00CC88', // accent
  },
  {
    id: 'business-development',
    title: 'Business Development Representative',
    icon: Users,
    department: 'Sales',
    location: 'London / New York',
    shortDescription:
      'Drive business growth by identifying and pursuing new enterprise opportunities.',
    fullDescription: `Join our sales team to help expand our enterprise client base.

Required Skills:
• 2+ years in B2B sales
• Enterprise software experience
• Strong communication skills
• Tech industry knowledge

Key Responsibilities:
• Lead generation
• Client relationship building
• Sales pipeline management
• Market research

Benefits:
• Base salary + commission
• Comprehensive training
• Career advancement
• Health coverage`,
    color: '#FFC24C',
  },
  {
    id: 'customer-success',
    title: 'Customer Success Manager',
    icon: HeartHandshake,
    department: 'Customer Success',
    location: 'Remote / London / New York',
    shortDescription: 'Ensure our enterprise clients achieve maximum value from our AI solutions.',
    fullDescription: `We're looking for a CSM to help our clients succeed with Centrus AI.

Required Skills:
• 3+ years in customer success
• Enterprise software experience
• Project management skills
• Technical aptitude

Key Responsibilities:
• Client onboarding
• Success strategy development
• Relationship management
• Usage optimization

Benefits:
• Competitive base salary
• Performance bonuses
• Remote flexibility
• Healthcare package`,
    color: '#E84393',
  },
];

export function JobOpenings() {
  return (
    <div className="relative pb-24">
      <Container>
        <Card className="relative overflow-hidden">
          <div className="relative flex flex-col items-center p-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className="mb-6"
            >
              <div className="relative rounded-full border border-primary/20 bg-primary/10 p-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-2xl font-bold"
            >
              Check Back Soon
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 max-w-2xl text-muted-foreground"
            >
              We're not actively hiring at the moment, but we're always looking for exceptional talent.
              Feel free to send your CV for future opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button asChild className="group">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Background gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-xl" />
          </div>
        </Card>
      </Container>
    </div>
  );
}
