'use client';

import { Mail, Sparkles, ArrowRight, Loader2, Zap } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

interface NewsletterFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function NewsletterForm({ className, onSuccess }: NewsletterFormProps) {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to subscribe');

      toast({
        title: '🚀 Ready for Liftoff!',
        description: "You're about to supercharge your business with AI.",
      });
      setEmail('');
      onSuccess?.();
    } catch (error) {
      toast({
        title: 'Hold Up!',
        description: 'Connection hiccup. Give it another shot.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn(className, "pl-8 pt-6 px-6")}>
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Sparkles className="h-4 w-4 animate-pulse text-primary" />
            <Zap className="absolute left-0 top-0 h-4 w-4 animate-ping text-primary opacity-20" />
          </div>
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-sm font-semibold text-transparent">
            Power Your Business with AI
          </span>
        </div>

        {/* Input and Button */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <Mail className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="pl-10"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="relative min-w-[100px] text-white transition-all duration-300 hover:scale-105"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span className="animate-pulse">Loading...</span>
              </span>
            ) : (
              <span className="flex items-center">
                <span>Join Now</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            )}
          </Button>
        </div>

        {/* Privacy Notice */}
        <div className="text-xs text-muted-foreground/80">
          By joining, you agree to our{' '}
          <Link href="/legal/privacy-policy" className="text-primary hover:text-primary/80">
            Privacy Policy
          </Link>
        </div>
      </div>
    </form>
  );
}
