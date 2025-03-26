'use client';

import { Menu, Home, ChevronRight, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { Rajdhani } from 'next/font/google';
import { cn } from '@/lib/utils';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const resources = [
  {
    title: 'Prompt Library',
    href: '/resources/prompt-library',
    description: 'Get inspiration for possible uses',
  },
  {
    title: 'Blog',
    href: '/resources/blog',
    description: 'Latest updates and thought leadership.',
  },
  {
    title: 'Documentation',
    href: '/resources/docs',
    description: 'Detailed guides and API documentation.',
  },
  /* {
    title: 'Case Studies',
    href: '/resources/case-studies',
    description: 'See how others use Centrus AI.',
  }, */
  
];

// Add font configuration
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const pathname = usePathname();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  // Close menu on navigation
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs p-0 sm:max-w-sm">
        <div className="flex h-full flex-col">
          {/* Header with Logo */}
          <div className="flex items-center border-b p-4">
            <Link href="/" className="flex items-center space-x-1" onClick={() => setOpen(false)}>
              <Image src="/logo.png" alt="Centrus AI" width={901} height={901} className="h-10 w-10" />
              <span className={cn(
                "text-xl font-bold text-[#041b70] dark:text-white",
                rajdhani.className
              )}>
                Centrus AI
              </span>
            </Link>
          </div>

          {/* Navigation Content */}
          <div className="flex-1 divide-y divide-border overflow-y-auto">
            {/* Main Navigation Links */}
            <div className="flex flex-col gap-2 p-4">
              <Link
                href="/"
                className={cn(
                  "flex items-center justify-between py-2 text-sm font-medium",
                  pathname === "/" 
                    ? "text-[#041b70] dark:text-[#2b9ce5]" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                <span className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </span>
                <ChevronRight className="h-4 w-4" />
              </Link>

              <Link
                href="/solutions"
                className={cn(
                  "flex items-center justify-between py-2 text-sm font-medium",
                  pathname === "/solutions" 
                    ? "text-[#041b70] dark:text-[#2b9ce5]" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                Solutions
                <ChevronRight className="h-4 w-4" />
              </Link>

              <Link
                href="/integrations"
                className={cn(
                  "flex items-center justify-between py-2 text-sm font-medium",
                  pathname === "/integrations" 
                    ? "text-[#041b70] dark:text-[#2b9ce5]" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                Integrations
                <ChevronRight className="h-4 w-4" />
              </Link>

              <Link
                href="/pricing"
                className={cn(
                  "flex items-center justify-between py-2 text-sm font-medium",
                  pathname === "/pricing" 
                    ? "text-[#041b70] dark:text-[#2b9ce5]" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                Pricing
                <ChevronRight className="h-4 w-4" />
              </Link>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="resources" className="border-none">
                  <AccordionTrigger 
                    className={cn(
                      "py-2 text-sm hover:no-underline focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                      pathname.startsWith('/resources')
                        ? "text-[#041b70] dark:text-[#2b9ce5]"
                        : ""
                    )}
                  >
                    Resources
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-3">
                      {resources.map(item => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex flex-col space-y-1 rounded-md bg-muted/50 p-3 hover:bg-muted",
                            pathname === item.href
                              ? "ring-1 ring-[#2b9ce5]/50"
                              : ""
                          )}
                        >
                          <div className={cn(
                            "text-sm font-medium",
                            pathname === item.href
                              ? "text-[#041b70] dark:text-[#2b9ce5]"
                              : ""
                          )}>
                            {item.title}
                          </div>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Dashboard Section */}
            <div className="p-4">
              <Link
                href="https://app.centrus.ai/app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col space-y-2 rounded-lg bg-primary/10 p-4 transition-colors hover:bg-primary/15"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Dashboard</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
                <p className="text-xs text-muted-foreground">Access your AI workspace</p>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/demo">Book Demo</Link>
                </Button>
                <Button asChild className="w-full text-white">
                  <Link href="/free-trial">Free Trial</Link>
                </Button>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="p-4">
              <div className="space-y-3 rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-background p-4">
                <div className="space-y-1">
                  <h4 className="font-semibold">Transform Your Business with AI</h4>
                  <p className="text-xs text-muted-foreground">
                    Learn about AI that drives real business
                  </p>
                </div>
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="h-9"
                  />
                  <Button type="submit" className="h-9 w-full text-white">
                    Get AI Updates
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
