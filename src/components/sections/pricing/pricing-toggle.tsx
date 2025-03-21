'use client';

import { motion } from 'framer-motion';

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (value: boolean) => void;
}

export function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="inline-flex items-center justify-center rounded-full border border-border bg-background/50 p-1.5 backdrop-blur-sm">
      <button
        onClick={() => onToggle(false)}
        className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
          !isAnnual ? 'text-white' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Monthly
        {!isAnnual && (
          <motion.div
            layoutId="toggleBg"
            className="absolute inset-0 -z-10 rounded-full bg-primary"
            transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
          />
        )}
      </button>

      <button
        onClick={() => onToggle(true)}
        className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
          isAnnual ? 'text-white' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Annual
        {isAnnual && (
          <motion.div
            layoutId="toggleBg"
            className="absolute inset-0 -z-10 rounded-full bg-primary"
            transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
          />
        )}
      </button>

      {isAnnual && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="ml-2 whitespace-nowrap rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-500"
        >
          Save 20%
        </motion.div>
      )}
    </div>
  );
}
