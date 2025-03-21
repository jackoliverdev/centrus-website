'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { Doc } from '@/content/docs';
import { cn } from '@/lib/utils';

interface DocsSidebarProps {
  categories: string[];
  docs: Doc[];
  selectedCategory: string;
  selectedDoc: Doc;
  onSelectCategory: (category: string) => void;
  onSelectDoc: (doc: Doc) => void;
}

export function DocsSidebar({
  categories,
  docs,
  selectedCategory,
  selectedDoc,
  onSelectCategory,
  onSelectDoc,
}: DocsSidebarProps) {
  // Track open categories
  const [openCategories, setOpenCategories] = useState<string[]>([selectedCategory]);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    onSelectCategory(category);
  };

  return (
    <div className="sticky top-8 space-y-8">
      {categories.map(category => {
        const categoryDocs = docs.filter(doc => doc.category === category);
        const isOpen = openCategories.includes(category);

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category)}
              className={cn(
                'flex w-full items-center justify-between rounded-lg px-4 py-2 text-left transition-all',
                isOpen ? 'bg-primary/10 font-semibold text-primary' : 'hover:bg-muted'
              )}
            >
              <span className="text-sm">{category}</span>
              <ChevronRight
                className={cn('h-4 w-4 transition-transform', isOpen ? 'rotate-90' : '')}
              />
            </button>

            {/* Document Links */}
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-2 space-y-1"
              >
                {categoryDocs.map(doc => {
                  const isDocSelected = selectedDoc.id === doc.id;

                  return (
                    <motion.button
                      key={doc.id}
                      onClick={() => onSelectDoc(doc)}
                      className={cn(
                        'relative w-full rounded-lg py-2 pl-8 pr-4 text-left text-sm transition-all',
                        isDocSelected
                          ? 'text-primary-foreground bg-primary font-medium'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      )}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <doc.icon className="h-4 w-4" />
                        {doc.title}
                      </span>

                      {isDocSelected && (
                        <motion.div
                          layoutId="active-doc"
                          className="absolute inset-0 rounded-lg bg-primary"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                          style={{ zIndex: 0 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
