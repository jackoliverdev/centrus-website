'use client';

import { motion } from 'framer-motion';
import { Database, Users, MessageSquare } from 'lucide-react';

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

export function PricingAddons() {
  return (
    <div className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-xl font-semibold mb-2">Add-ons</h3>
        <p className="text-sm text-muted-foreground">
          Customize your plan with additional resources
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 max-w-5xl mx-auto"
      >
        {addons.map((addon, index) => (
          <motion.div
            key={addon.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group rounded-lg border p-4 hover:border-primary/60 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-md bg-primary/10 text-primary">
                <addon.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">{addon.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{addon.description}</p>
                <div className="flex items-baseline">
                  <span className="text-lg font-semibold">£{addon.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">{addon.unit}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 