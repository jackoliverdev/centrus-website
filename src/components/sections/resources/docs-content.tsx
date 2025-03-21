'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Edit, ArrowLeft, ArrowRight, Github, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Doc } from '@/content/docs';
import { docs } from '@/content/docs';

interface DocsContentProps {
  doc: Doc;
  onSelectDoc: (newDoc: Doc) => void;
}

export function DocsContent({ doc, onSelectDoc }: DocsContentProps) {
  const router = useRouter();

  // Find the actual prev/next doc objects based on the IDs
  const prevDoc = doc.prevDoc ? docs.find(d => d.id === doc.prevDoc) : null;
  const nextDoc = doc.nextDoc ? docs.find(d => d.id === doc.nextDoc) : null;

  const handleDocChange = (newDoc: Doc | null) => {
    if (!newDoc) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onSelectDoc(newDoc);
  };

  return (
    <motion.div
      key={doc.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center  gap-4">
          <div className="rounded-xl hidden sm:block bg-primary/10 p-3">
            <doc.icon className="h-8 w-8  text-primary" />
          </div>
          <div className='text-center sm:text-start'>
            <h1 className="text-3xl sm:text-4xl  font-bold">{doc.title}</h1>
            <p className="mt-2 text-sm sm:text-lg text-muted-foreground">{doc.description}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center sm:gap-6 gap-3 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1 sm:gap-2">
            <CalendarDays className="h-4 w-4" />
            Last updated: {doc.lastUpdated}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Card className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative">
          {/* Content - now full width */}
          <div className="p-8">
            <div className="prose prose-blue max-w-none dark:prose-invert">
              <ReactMarkdown>{doc.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </Card>

      {/* Related Resources - Enhanced layout */}
      <div className="mt-8 border-t border-border/40 pt-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {prevDoc && (
            <Card
              onClick={() => handleDocChange(prevDoc)}
              className="group relative cursor-pointer overflow-hidden p-4 transition-all hover:bg-muted/50"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-muted-foreground/60">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                  <span className="text-xs font-medium uppercase tracking-wider">Previous</span>
                </div>
                <div className="mt-2">
                  <h4 className="line-clamp-1 text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary">
                    {prevDoc.title}
                  </h4>
                  <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                    {prevDoc.description}
                  </p>
                </div>
              </div>
            </Card>
          )}
          {nextDoc && (
            <Card
              onClick={() => handleDocChange(nextDoc)}
              className="group relative cursor-pointer overflow-hidden p-4 transition-all hover:bg-muted/50"
            >
              <div className="flex flex-col items-end text-right">
                <div className="flex items-center gap-2 text-muted-foreground/60">
                  <span className="text-xs font-medium uppercase tracking-wider">Next</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
                <div className="mt-2">
                  <h4 className="line-clamp-1 text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary">
                    {nextDoc.title}
                  </h4>
                  <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                    {nextDoc.description}
                  </p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Contact or Demo Section */}
      <div className="mt-8 rounded-xl border border-primary/10 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-xl p-6">
        <h3 className="text-lg font-semibold">Need Help?</h3>
        <p className="mt-2 mb-6 text-sm text-muted-foreground">
          Book a demo with our team or reach out for support with any questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            variant="default" 
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white"
            onClick={() => router.push('/demo')}
          >
            <span className="flex items-center gap-2">
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
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
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-primary/10 hover:bg-primary/5"
            onClick={() => router.push('/contact')}
          >
            <span className="flex items-center gap-2">
              Contact Support
              <Mail className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
