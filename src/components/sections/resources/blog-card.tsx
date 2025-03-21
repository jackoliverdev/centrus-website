'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { BlogPost } from '@/content/blog';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: Math.min(index * 0.1, 0.8),
        duration: 0.3,
      }}
      className="group relative h-full transform transition-transform duration-300 hover:-translate-y-1"
    >
      <Link href={`/resources/blog/${post.slug}`} prefetch={false}>
        <div className="relative h-full overflow-hidden rounded-xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-primary/50 before:to-primary/5 before:p-[1px]">
          <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-xl">
            {/* Image Section */}
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              {/* Category Tag */}
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-primary/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
              {/* Meta info */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl h-14 font-bold leading-tight transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">{post.description}</p>
              </div>

              {/* Read More Link */}
              <div className="flex items-center justify-between space-y-2 pt-2 text-sm">
                <div className="font-medium text-primary">Read More</div>
                <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Decorative corner gradients */}
            <div className="absolute right-0 top-0 -z-10 h-24 w-24 rotate-45 transform bg-gradient-to-r from-primary/30 to-primary/0 blur-2xl transition-opacity group-hover:opacity-75" />
            <div className="absolute bottom-0 left-0 -z-10 h-24 w-24 rotate-45 transform bg-gradient-to-r from-secondary/30 to-secondary/0 blur-2xl transition-opacity group-hover:opacity-75" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
