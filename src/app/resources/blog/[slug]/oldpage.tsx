import { notFound } from 'next/navigation';
import { Calendar, Clock } from 'lucide-react';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Container } from '@/components/ui/container';
import { blogPosts } from '@/content/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find(post => post.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://centrus.ai/resources/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(post => post.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="flex-1 pt-24 sm:pt-32">
      <Container>
        <article className="relative mx-auto max-w-3xl sm:max-w-5xl overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-xl">
          {/* Decorative elements */}
          <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />

          {/* Content wrapper */}
          <div className="relative px-6 py-12 sm:px-16 sm:py-16">
            {/* Category Tag */}
            <div className="mb-6">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-primary/20 backdrop-blur-sm">
                {post.category}
              </span>
            </div>

            {/* Meta Info */}
            <div className="mb-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-12 text-3xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>

            {/* Article Content */}
            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="mt-12 mb-6 text-2xl font-bold sm:text-3xl">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-8 mb-4 text-xl font-bold sm:text-2xl">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-6 leading-relaxed text-muted-foreground">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-6 list-disc pl-6 text-muted-foreground">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="mb-2">{children}</li>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Mobile-optimized bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent sm:hidden" />
        </article>
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}
