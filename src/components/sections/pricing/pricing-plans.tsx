'use client';

import { motion } from 'framer-motion';
import { Tag, Database, Users, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

import { PricingCard } from './pricing-card';
import { PricingToggle } from './pricing-toggle';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const plans = [
  {
    name: 'Small Team',
    monthlyPrice: '39.99',
    annualPrice: '29.99',
    description: 'Perfect for small teams getting started with AI.',
    features: [
      'Up to 5 team members',
      '500 monthly message credits',
      '1GB storage',
      'Standard integrations',
      'Regular updates',
    ],
  },
  {
    name: 'Large Team',
    monthlyPrice: '199.99',
    annualPrice: '149.99',
    description: 'Ideal for growing teams needing more limits.',
    features: [
      'Up to 20 team members',
      '2500 monthly message credits',
      '10GB storage',
      'Standard integrations',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'Custom solutions for large organisations.',
    features: [
      'Unlimited team members',
      'Unlimited message credits',
      'Unlimited storage',
      'Custom integrations',
      'Dedicated support team',
    ],
  },
];

const addons = [
  {
    name: 'Extra Storage',
    description: 'Additional storage space',
    price: '5',
    unit: 'per GB',
    icon: Database,
  },
  {
    name: 'Extra Users',
    description: 'Add more team members',
    price: '7',
    unit: 'per user',
    icon: Users,
  },
  {
    name: 'Extra Messages',
    description: 'Increase message limit',
    price: '10',
    unit: 'per 1000 messages',
    icon: MessageSquare,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={`relative overflow-hidden py-12 sm:py-24 ${dmSans.className}`}>
      {/* Simplified Background Elements - matching other sections */}
      <div className="absolute inset-0 -z-[1]">
        {/* Static grid background - matching other sections */}
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm"
          >
            <Tag className="mr-2 h-4 w-4 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-2xl font-bold sm:text-5xl"
          >
            Choose Your Perfect Plan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-xs sm:text-lg text-muted-foreground px-2"
          >
            Start with a free trial, upgrade as you grow. All plans include core features.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="[&_.active]:text-white"
          >
            <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 items-start gap-8 md:grid-cols-3"
          >
            {plans.map(plan => (
              <motion.div key={plan.name} variants={itemVariants}>
                <PricingCard
                  name={plan.name}
                  price={(plan.monthlyPrice || plan.annualPrice) ?? null}
                  monthlyPrice={plan.monthlyPrice}
                  annualPrice={plan.annualPrice}
                  description={plan.description}
                  features={plan.features}
                  isAnnual={isAnnual}
                  popular={plan.popular}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Add-ons Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <h3 className="text-2xl font-semibold mb-3">Add-ons</h3>
            <p className="text-base text-muted-foreground mb-8">
              Customise your plan with additional resources
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
            >
              {addons.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative rounded-xl border border-primary/20 p-4 text-left hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <addon.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-0.5">{addon.name}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{addon.description}</p>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-medium">£{addon.price}</span>
                        <span className="text-sm text-muted-foreground">{addon.unit}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
