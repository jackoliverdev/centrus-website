'use client';

import { motion } from 'framer-motion';
import { Copy, CheckCircle2, FileText, CalendarDays, Download, Printer } from 'lucide-react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

interface LegalContentProps {
  title: string;
  subtitle: string;
  content: string;
}

export function LegalContent({ title, subtitle, content }: LegalContentProps) {
  const [activeHeading, setActiveHeading] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);

  // Extract headings from markdown and ensure they have proper IDs
  useEffect(() => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const matches = Array.from(content.matchAll(headingRegex));
    const extracted = matches.map(match => ({
      id: match[2].toLowerCase().replace(/[^\w]+/g, '-'),
      text: match[2],
      level: match[1].length,
    }));
    setHeadings(extracted);

    // Ensure headings have IDs in the content
    setTimeout(() => {
      extracted.forEach(heading => {
        const element = document.getElementById(heading.id);
        if (!element) {
          const headingElements = document.getElementsByTagName(`h${heading.level}`);
          for (const el of headingElements) {
            if (el.textContent === heading.text) {
              el.id = heading.id;
            }
          }
        }
      });
    }, 100);
  }, [content]);

  // Handle scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy content:', err);
    }
  };

  const handleHeadingClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Container>
      <div className="relative py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Table of Contents - Sidebar */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-[9rem]">
              <nav className="space-y-2 pt-[7.5rem]">
                <h4 className="mb-4 text-sm font-medium">On this page</h4>
                {headings.map((heading, index) => (
                  <motion.button
                    key={heading.id}
                    onClick={() => handleHeadingClick(heading.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`
                      block w-full text-left py-1 text-sm
                      ${heading.level === 1 ? '' : `pl-${(heading.level - 1) * 4}`}
                      ${
                        activeHeading === heading.id
                          ? 'font-medium text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      }
                      transition-colors
                    `}
                  >
                    {heading.text}
                  </motion.button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            <div className="relative">
              {/* Content Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {subtitle}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" className="gap-2" onClick={handleCopy}>
                    {copied ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-green-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => window.print()}
                  >
                    <Printer className="h-4 w-4" />
                    <span>Print</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => {
                      const blob = new Blob([content], { type: 'text/markdown' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `${title.toLowerCase().replace(/\s+/g, '-')}.md`;
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url);
                    }}
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </div>
              </motion.div>

              {/* Document Content */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
                {/* Content Card */}
                <div className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
                  <div className="p-8">
                    <div className="prose prose-blue max-w-none dark:prose-invert">
                      <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute right-0 top-0 -z-10 h-32 w-32 rotate-45 transform bg-gradient-to-r from-primary/30 to-primary/0 blur-2xl" />
                <div className="absolute bottom-0 left-0 -z-10 h-32 w-32 rotate-45 transform bg-gradient-to-r from-secondary/30 to-secondary/0 blur-2xl" />
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </Container>
  );
}
