'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface PricingCardProps {
  name: string;
  description: string;
  price: string | null;
  monthlyPrice?: string;
  annualPrice?: string;
  features: string[];
  isAnnual: boolean;
  popular?: boolean;
}

export function PricingCard({
  name,
  description,
  monthlyPrice,
  annualPrice,
  features,
  isAnnual,
  popular = false,
}: PricingCardProps) {
  const displayPrice = isAnnual ? annualPrice : monthlyPrice;

  return (
    <motion.div whileHover={{ y: -5 }} className="relative h-full pt-6">
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
          <div className="text-white rounded-full bg-primary px-4 py-1.5 text-xs font-medium shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      {/* Main card */}
      <div
        className={`
        relative h-full overflow-hidden rounded-xl
        ${
          popular
            ? 'before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-primary/50 before:to-primary/10 before:p-[2px]'
            : 'before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-border before:to-border/0 before:p-[1px]'
        }
      `}
      >
        {/* Card content wrapper */}
        <div
          className={`
          relative h-full rounded-xl bg-gradient-to-b from-background/80
          to-background/40 p-6 backdrop-blur-xl
          sm:p-8
          ${popular ? 'shadow-2xl shadow-primary/10' : 'shadow-xl'}
        `}
        >
          {/* Content */}
          <div className="flex h-full flex-col">
            <div className="mb-8">
              <h3 className="text-lg font-semibold leading-7">{name}</h3>

              <div className="mt-4 flex items-baseline gap-x-2">
                {displayPrice ? (
                  <>
                    <span className="text-3xl font-bold tracking-tight">£{displayPrice}</span>
                    <span className="text-sm font-semibold text-muted-foreground">/month</span>
                    {isAnnual && (
                      <span className="text-sm font-medium text-emerald-500">Save 25%</span>
                    )}
                  </>
                ) : (
                  <span className="text-3xl font-bold tracking-tight">Custom</span>
                )}
              </div>

              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{description}</p>
            </div>

            <div className="mb-8 flex-1 space-y-4">
              {features.map(feature => (
                <div key={feature} className="group flex items-start gap-3 ">
                  <div className="mt-0.5 rounded-full bg-primary/10 p-1 transition-colors group-hover:bg-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button
              asChild
              variant={popular ? 'default' : 'secondary'}
              size="lg"
              className={`
                group w-full 
                ${
                  popular
                    ? 'text-white bg-primary shadow-lg shadow-primary/20 hover:bg-primary/90'
                    : 'bg-secondary/10 hover:bg-secondary/20'
                }
              `}
            >
              <Link
                href={displayPrice ? '/free-trial' : '/contact'}
                className="flex items-center justify-center gap-2"
              >
                {displayPrice ? 'Start Free Trial' : 'Talk to Sales'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Popular card decorative elements */}
          {popular && (
            <>
              <div className="absolute -right-3 top-8 h-40 w-40 rotate-45 transform bg-primary opacity-5 blur-3xl" />
              <div className="absolute -left-3 bottom-8 h-40 w-40 rotate-45 transform bg-primary opacity-5 blur-3xl" />
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
