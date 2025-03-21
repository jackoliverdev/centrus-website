'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  PlayCircle,
  PhoneCall,
  Calendar,
  Users,
  ArrowUpRight,
  Sparkles,
  RocketIcon,
  Mail,
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useCounter } from '@/lib/hooks/use-counter';

const stats = [
  { value: '30', suffix: 'min', label: 'Average Demo Duration' },
  { value: '983', suffix: '+', label: 'Hours saved' },
  { value: '20', suffix: '%', label: 'Efficiency Increase' },
];

function StatCounter({
  value,
  suffix = '',
  delay = 0,
}: {
  value: string;
  suffix?: string;
  delay?: number;
}) {
  const { formattedCount, setRef } = useCounter({
    end: parseInt(value),
    duration: 2000,
    delay,
    formatter: num => `${num}${suffix}`,
  });

  return <span ref={setRef}>{formattedCount}</span>;
}

export function DemoSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="relative overflow-hidden">
      {/* Simplified Background Elements - matching other sections */}
      <div className="absolute inset-0 -z-[1]">
        {/* Static grid background - matching other sections */}
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <Container>
        <div ref={containerRef} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto max-w-3xl text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm"
            >
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                See AI in Action
              </span>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold">Experience the Power of AI</h2>
              <p className="text-lg text-muted-foreground">
                Schedule a personalised demo to discover how our AI solutions can transform your
                business operations.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            >
              {/* Demo Button */}
              <Button
                size="lg"
                className="group relative overflow-hidden text-white"
                asChild
              >
                <Link href="/demo" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>Book Demo</span>
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

              {/* Free Trial Button */}
              <Button
                size="lg"
                variant="outline"
                className="group"
                asChild
              >
                <Link href="http://localhost:3000/free-trial" className="flex items-center gap-2">
                  <RocketIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>Free Trial</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-3xl font-bold text-transparent">
                    <StatCounter value={stat.value} suffix={stat.suffix} delay={index * 100} />
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Contact Sales */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 border-t border-primary/10 pt-8"
            >
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Have questions? Talk to our sales team
                </p>
                <Button variant="outline" size="lg" className="group" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    Contact Sales
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
