'use client';

import { Facebook, Instagram, Linkedin, Youtube, ArrowRight, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Rajdhani } from 'next/font/google';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

const navigation = {
  product: [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Demo', href: '/demo' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Affiliates', href: '/affiliates' },
  ],
  resources: [
    { name: 'Documentation', href: '/resources/docs' },
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Prompt Library', href: '/resources/prompt-library' },
  ],
  legal: [
    { name: 'Privacy', href: '/legal/privacy-policy' },
    { name: 'Terms', href: '/legal/terms' },
    { name: 'Security', href: '/legal/security' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/centrus-ai',
      icon: Linkedin,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/centrusai',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/centrusai',
      icon: Instagram,
    },
    {
      name: 'X',
      href: 'https://twitter.com/centrusai',
      icon: 'custom-x',
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@centrusai',
      icon: Youtube,
    },
  ],
};

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    try {
      setStatus('loading');
      
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setMessage('Thanks for subscribing!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  return (
    <footer className="mt- relative border-t bg-background">
      {/* Newsletter Section */}
      <Container size="default" spacing="none" className="inset-x-0 -top-28">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute -left-4 top-0 h-32 w-32 animate-pulse rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -right-4 bottom-0 h-32 w-32 animate-pulse rounded-full bg-primary/10 blur-2xl" />
          </div>

          <div className="relative bg-gradient-to-b from-background via-primary/5 to-background backdrop-blur-sm">
            <div className="space-y-6 py-12">
              <div className="flex flex-col items-center lg:items-start space-y-6 lg:flex-row lg:justify-between lg:space-x-12 lg:space-y-0">
                <div className="text-center lg:text-left px-4 lg:pl-8 pt-6 md:max-w-md flex flex-col items-center lg:items-start">
                  <div className="space-y-3 flex flex-col items-center lg:items-start">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm">
                      <div className="relative">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <Zap className="absolute left-0 top-0 h-4 w-4 animate-ping text-primary opacity-30" />
                      </div>
                      <span className="ml-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text font-medium text-transparent">
                        Transform Your Business
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold">Scale with AI Today</h3>
                    <p className="text-base text-muted-foreground sm:whitespace-nowrap text-center lg:text-left">
                      Get expert insights on implementing AI for real business growth
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 md:px-8 md:w-auto md:pt-6">
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2">
                    <div className="flex w-full items-center space-x-2">
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                        className="h-10 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:flex-initial md:min-w-[480px]"
                      />
                      <Button 
                        type="submit" 
                        className="whitespace-nowrap"
                        disabled={status === 'loading'}
                      >
                        <span className="block md:hidden text-white">
                          {status === 'loading' ? 'Joining...' : 'Join'}
                        </span>
                        <span className="hidden md:block text-white">
                          {status === 'loading' ? 'Joining...' : 'Join Now'}
                        </span>
                      </Button>
                    </div>
                    {message && (
                      <p className={`text-xs ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                        {message}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      By joining, you agree to our{' '}
                      <Link 
                        href="/legal/privacy-policy" 
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Main Footer Content */}
      <Container size="default" spacing="none" className="px-4 md:mt-12 md:px-8 lg:px-8">
        <div className="grid max-w-full grid-cols-12 justify-between gap-x-4 gap-y-10">
          {/* Brand Column */}
          <div className="col-span-12 flex flex-col items-center md:col-span-4 md:items-start">
            <Link href="/" className="group inline-flex items-center space-x-2">
              <div className="relative">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full border border-primary/10" />
                  <Image
                    src="/logo.png"
                    alt="Centrus AI Logo"
                    width={32}
                    height={32}
                    className="relative h-8 w-auto transition-transform group-hover:scale-110"
                  />
                </div>
              </div>
              <span className={cn(
                "pl-2 text-2xl font-bold text-[#041b70] dark:text-white",
                rajdhani.className
              )}>
                Centrus AI
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-center text-sm text-muted-foreground/90 md:text-left">
              Unlock your companys knowledge with AI-powered search, analysis, and automation.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex justify-center space-x-6 md:justify-start md:space-x-4">
              {navigation.social.map(item => {
                if (item.icon === 'custom-x') {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative rounded-full p-2 transition-all duration-300 hover:bg-primary/10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20" />
                      </div>
                      <Image 
                        src="/icons/x.svg" 
                        alt="X (Twitter)" 
                        width={20} 
                        height={20}
                        className="h-5 w-5 transition-all duration-300 group-hover:scale-110 dark:filter dark:brightness-0 dark:invert" 
                      />
                    </a>
                  );
                }
                
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative rounded-full p-2 transition-all duration-300 hover:bg-primary/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20" />
                    </div>
                    <Icon className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="col-span-12 grid grid-cols-2 gap-y-8 md:col-span-8 md:grid-cols-4">
            {[
              { title: 'Product', items: navigation.product },
              { title: 'Company', items: navigation.company },
              { title: 'Resources', items: navigation.resources },
              { title: 'Legal', items: navigation.legal },
            ].map((section) => (
              <div
                key={section.title}
                className="flex flex-col items-center w-full md:items-start"
              >
                <details className="group w-full text-center md:hidden">
                  <summary className="cursor-pointer mb-3 inline-flex items-center justify-center">
                    <h3 className="text-lg font-semibold inline-block">{section.title}</h3>
                  </summary>
                  <ul className="mt-2 space-y-3" role="list">
                    {section.items.map(item => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground/80 transition-colors hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>

                {/* Desktop view */}
                <div className="hidden md:block">
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <ul className="mt-4 space-y-2.5" role="list">
                    {section.items.map(item => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="group relative flex items-center text-sm text-muted-foreground/80 transition-colors hover:text-primary"
                        >
                          <div className="absolute -left-4 h-4 w-4 scale-0 transition-transform duration-200 group-hover:scale-100">
                            <ArrowRight className="h-3 w-3 text-primary" />
                          </div>
                          <span className="transition-all duration-200 group-hover:translate-x-1">
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary/10">
          <div className="flex justify-center py-8">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Centrus AI. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}