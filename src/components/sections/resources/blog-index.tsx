'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { BlogCard } from '@/components/sections/resources/blog-card';
import { BlogHero } from '@/components/sections/resources/blog-hero';
import type { BlogPost } from '@/content/blog';

interface BlogIndexProps {
  posts: BlogPost[];
  categories: readonly string[];
}

export function BlogIndex({ posts, categories }: BlogIndexProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  return (
    <div className="min-h-screen bg-background">
      <BlogHero />

      <div className="container mx-auto px-4 pb-16">
        {/* Categories */}
        <div className="relative z-10 mb-16 flex flex-wrap justify-center gap-4 pt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium
                ring-1 ring-border
                transition-all duration-300 ${
                  selectedCategory === null
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
            >
              All Posts
            </button>
          </motion.div>

          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.1, 0.8) }}
            >
              <button
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium
                  ring-1 ring-border
                  transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
              >
                {category}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Blog Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || 'all'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center text-muted-foreground"
          >
            No posts found in this category.
          </motion.p>
        )}
      </div>
    </div>
  );
}
