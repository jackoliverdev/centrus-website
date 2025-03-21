'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Twitter, Linkedin, Github, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/content/blog';

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Made more compact */}
      <div className="relative w-full bg-background py-16 md:py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            {/* Category and Meta Info */}
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </div>
            </div>

            {/* Title and Description */}
            <div className="mb-8">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
              <p className="text-lg text-muted-foreground">{post.description}</p>
            </div>

            {/* Author - Redesigned */}
            <div className="flex items-center gap-4 border-t border-border pt-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-12 w-12 rounded-full border-2 border-background"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-fit space-y-8 lg:sticky lg:top-8 lg:col-span-3"
          >
            {/* Author Bio */}
            <div className="rounded-xl bg-muted/50 p-6">
              <h3 className="mb-4 text-lg font-semibold">About the Author</h3>
              <p className="mb-4 text-sm text-muted-foreground">{post.author.bio}</p>

              {post.author.social && (
                <div className="flex gap-4">
                  {post.author.social.linkedin && (
                    <a
                      href={`https://linkedin.com${post.author.social.linkedin}`}
                      className="text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {post.author.social.facebook && (
                    <a
                      href={`https://facebook.com/${post.author.social.facebook}`}
                      className="text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  )}
                  {post.author.social.instagram && (
                    <a
                      href={`https://instagram.com/${post.author.social.instagram}`}
                      className="text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  )}
                  {post.author.social.twitter && (
                    <a
                      href={`https://twitter.com/${post.author.social.twitter}`}
                      className="text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {post.author.social.youtube && (
                    <a
                      href={`https://youtube.com/${post.author.social.youtube}`}
                      className="text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="rounded-xl bg-muted/50 p-6">
              <h3 className="mb-4 text-lg font-semibold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-9"
          >
            <div className="prose prose-blue max-w-none dark:prose-invert">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 border-t border-border pt-8">
                <h2 className="mb-8 text-2xl font-bold">Related Posts</h2>
                <div className="grid gap-8 sm:grid-cols-2">
                  {relatedPosts.map(related => (
                    <Link
                      key={related.slug}
                      href={`/resources/blog/${related.slug}`}
                      className="group"
                    >
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="aspect-[16/9] w-full object-cover"
                        />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold transition-colors group-hover:text-primary">
                        {related.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{related.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Back button */}
        <div className="mt-16 pb-16">
          <Button variant="ghost" asChild>
            <Link href="/resources/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blogs
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
