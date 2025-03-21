'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

import { DocsContent } from '@/components/sections/resources/docs-content';
import { DocsHero } from '@/components/sections/resources/docs-hero';
import { DocsSidebar } from '@/components/sections/resources/docs-sidebar';
import { Button } from '@/components/ui/button';
import { docs, categories } from '@/content/docs';

export default function DocsPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedDoc, setSelectedDoc] = useState(docs[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update selected category when doc changes
  useEffect(() => {
    const newCategory = docs.find(doc => doc.id === selectedDoc.id)?.category;
    if (newCategory) {
      setSelectedCategory(newCategory);
    }
  }, [selectedDoc]);

  // Listen for doc selection events from hero
  useEffect(() => {
    const handleDocSelect = (event: CustomEvent<Doc>) => {
      handleSelectDoc(event.detail);
    };

    window.addEventListener('selectDoc', handleDocSelect as EventListener);
    return () => {
      window.removeEventListener('selectDoc', handleDocSelect as EventListener);
    };
  }, []);

  const handleSelectDoc = (doc: (typeof docs)[0]) => {
    setSelectedDoc(doc);
    setIsMobileMenuOpen(false);
    // If on mobile, scroll to content
    if (window.innerWidth < 768) {
      document.getElementById('docs-content')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-full bg-background overflow-hidden pb-16">
      <DocsHero />

      <div className="container mx-auto px-4 ">
        {/* Mobile Menu Button - Added higher z-index */}
        <div className="mb-6 lg:hidden relative z-50">
          <Button
            variant="outline"
            size="lg"
            className="w-full bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="mr-2 h-4 w-4" />
            {isMobileMenuOpen ? 'Close Menu' : 'Show Menu'}
          </Button>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar - Mobile */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8 lg:hidden"
              >
                <div className="rounded-lg border border-border bg-background/80 p-4 backdrop-blur-sm">
                  <DocsSidebar
                    categories={categories}
                    docs={docs}
                    selectedCategory={selectedCategory}
                    selectedDoc={selectedDoc}
                    onSelectCategory={setSelectedCategory}
                    onSelectDoc={handleSelectDoc}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sidebar - Desktop */}
          <motion.aside
            className="hidden lg:col-span-3 lg:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-8">
              <DocsSidebar
                categories={categories}
                docs={docs}
                selectedCategory={selectedCategory}
                selectedDoc={selectedDoc}
                onSelectCategory={setSelectedCategory}
                onSelectDoc={handleSelectDoc}
              />
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            id="docs-content"
            className="lg:col-span-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <DocsContent 
              doc={selectedDoc} 
              onSelectDoc={handleSelectDoc}
            />
          </motion.main>
        </div>
      </div>
    </div>
  );
}
