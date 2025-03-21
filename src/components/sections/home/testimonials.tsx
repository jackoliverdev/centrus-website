'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { Star, Sparkles, Quote } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils/helpers';
type MotionDivProps = HTMLMotionProps<'div'> &
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
  };

const MotionDiv: React.FC<MotionDivProps> = props => <motion.div {...props} />;

const testimonials = [
  {
    content:
      'Centrus has transformed how we handle internal knowledge. Our team now gets instant answers to their questions, significantly reducing the load on senior staff.',
    author: {
      name: 'Sarah Chen',
      role: 'Head of Operations',
      company: 'TechFlow Solutions',
      image: '/testimonials/sarah-chen.jpg',
    },
    rating: 5,
    gradient: 'from-[#2b9ce5] via-[#2b9ce5]/80 to-transparent',
  },
  {
    content:
      "The AI-powered search is incredibly accurate. It's like having an expert available 24/7 who knows every detail about our company processes.",
    author: {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      company: 'InnovateCorp',
      image: '/testimonials/marcus-rodriguez.jpg',
    },
    rating: 5,
    gradient: 'from-primary via-primary/80 to-transparent',
  },
  {
    content:
      "We've seen a 40% reduction in support tickets since implementing Centrus. Our employees can find answers instantly, improving overall productivity.",
    author: {
      name: 'Emma Thompson',
      role: 'HR Director',
      company: 'Global Dynamics',
      image: '/testimonials/emma-thompson.jpg',
    },
    rating: 5,
    gradient: 'from-[#2b9ce5] via-[#2b9ce5]/80 to-transparent',
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      mass: 0.8,
    },
  },
};

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[number];
  index: number;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <MotionDiv
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative will-change-transform"
    >
      {/* Card Container */}
      <div
        className={cn(
          'relative h-full rounded-xl p-6',
          'bg-gradient-to-br from-background/50 to-background/90',
          'border border-primary/5',
          'transition-all duration-500',
          'hover:border-primary/20 hover:shadow-lg'
        )}
      >
        {/* Quote Icon */}
        <div className="absolute -left-3 -top-3">
          <MotionDiv
            initial={false}
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl" />
            <div className="relative h-6 w-6 rounded-xl bg-primary/10 p-1">
              <Quote className="h-4 w-4 text-primary" />
            </div>
          </MotionDiv>
        </div>

        {/* Rating */}
        <div className="mb-4 flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <MotionDiv
              key={i}
              initial={false}
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
              }}
            >
              <Star className="h-4 w-4 fill-primary text-primary" />
            </MotionDiv>
          ))}
        </div>

        {/* Content */}
        <MotionDiv
          initial={false}
          animate={{
            opacity: isHovered ? 0.9 : 0.7,
          }}
          className="leading-relaxed text-muted-foreground"
        >
          {testimonial.content}
        </MotionDiv>

        {/* Author */}
        <MotionDiv
          initial={false}
          animate={{
            y: isHovered ? -2 : 0,
          }}
          className="mt-6 flex items-center gap-4"
        >
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/0 blur-md" />
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-primary/10">
              <Image
                src={testimonial.author.image}
                alt={testimonial.author.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <MotionDiv
              initial={false}
              animate={{
                opacity: isHovered ? 1 : 0.9,
              }}
              className="bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text font-semibold text-transparent"
            >
              {testimonial.author.name}
            </MotionDiv>
            <MotionDiv
              initial={false}
              animate={{
                opacity: isHovered ? 0.8 : 0.6,
              }}
              className="text-sm text-muted-foreground"
            >
              {testimonial.author.role}, {testimonial.author.company}
            </MotionDiv>
          </div>
        </MotionDiv>

        {/* Animated Background */}
        <div
          className={cn(
            'absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500',
            'bg-gradient-to-br',
            testimonial.gradient,
            'group-hover:opacity-[0.03]'
          )}
        />
      </div>
    </MotionDiv>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-12">
      <Container>
        {/* Section Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Customer Success Stories
            </span>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-4 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text font-heading text-3xl font-bold text-transparent sm:text-4xl"> 
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-lg text-muted-foreground">
              See how companies are transforming their operations with Centrus AI.
            </p>
          </MotionDiv>
        </MotionDiv>

        {/* Testimonials Grid */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </MotionDiv>
      </Container>
    </section>
  );
}
