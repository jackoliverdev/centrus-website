import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Calendar, Clock } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Button } from '@/components/ui/button';
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

  // Generate keywords from post tags, category and title keywords
  const keywords = `${post.tags.join(', ')}, ${post.category}, AI insights, business transformation, ${post.title.toLowerCase().split(' ').filter(word => word.length > 3).join(', ')}`;

  return {
    title: post.title,
    description: post.description,
    keywords: keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://centrus.ai/resources/blog/${post.slug}`,
      siteName: 'Centrus AI',
      publishedTime: post.date,
      authors: [post.author.name],
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
      creator: '@centrusai',
    },
    alternates: {
      canonical: `https://centrus.ai/resources/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(post => post.slug === params.slug);
  if (!post) notFound();
  
  // Find related posts based on the relatedPosts array
  const relatedPosts = post.relatedPosts 
    ? post.relatedPosts.map(slug => blogPosts.find(p => p.slug === slug)).filter(Boolean)
    : [];

  return (
    <main className="flex-1 pt-24 sm:pt-32">
      <Container>
        <article className="relative mx-auto max-w-3xl sm:max-w-5xl overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-xl">
          {/* Decorative elements */}
          <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />

          {/* Back to Blogs button - repositioned to inside article */}
          <div className="absolute top-4 left-4 z-10 sm:top-6 sm:left-6">
            <Link href="/resources/blog">
              <Button variant="ghost" size="sm" className="gap-1 bg-background/50 backdrop-blur-sm hover:bg-background/70">
                <ArrowLeft className="h-4 w-4" />
                <span className="sm:inline">Back to Blogs</span>
              </Button>
            </Link>
          </div>

          {/* Content wrapper */}
          <div className="relative px-6 pt-16 pb-12 sm:px-16 sm:py-16">
            {/* Category Tag - hidden on mobile and shown in the normal flow on sm and up */}
            <div className="mb-6 hidden sm:block">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-primary/20 backdrop-blur-sm">
                {post.category}
              </span>
            </div>
            
            {/* Mobile category tag - positioned to the right and only shown on mobile */}
            <div className="absolute top-4 right-4 z-10 sm:hidden">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-primary/20 backdrop-blur-sm">
                {post.category}
              </span>
            </div>

            {/* Meta Info */}
            <div className="mb-8 flex items-center gap-6 text-sm text-muted-foreground">
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
        
        {/* Previous/Next Navigation */}
        {relatedPosts.length > 0 && (
          <div className="mx-auto max-w-3xl sm:max-w-5xl mt-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {relatedPosts.slice(0, 2).map((relatedPost, idx) => {
                if (!relatedPost) return null;
                
                return (
                  <Link 
                    key={relatedPost.slug}
                    href={`/resources/blog/${relatedPost.slug}`}
                    className="flex flex-col p-4 rounded-xl border border-primary/10 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur transition-all hover:border-primary/20 hover:shadow-md"
                  >
                    <div className={`flex items-center text-xs text-muted-foreground mb-1 ${idx === 0 ? 'justify-start' : 'justify-end'}`}>
                      {idx === 0 ? (
                        <>
                          <ArrowLeft className="h-3 w-3 mr-1" />
                          PREVIOUS
                        </>
                      ) : (
                        <>
                          NEXT
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </>
                      )}
                    </div>
                    <h3 className={`text-base font-medium line-clamp-1 w-full ${idx === 0 ? 'text-right' : 'text-left'}`}>
                      {relatedPost.title}
                    </h3>
                    <p className={`text-xs text-muted-foreground mt-1 line-clamp-1 w-full ${idx === 0 ? 'text-right' : 'text-left'}`}>
                      {relatedPost.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}
