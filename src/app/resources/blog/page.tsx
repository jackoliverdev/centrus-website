import { Metadata } from 'next';
import { BlogIndex } from '@/components/sections/resources/blog-index';
import { blogPosts, blogCategories } from '@/content/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore the latest insights, updates, and thought leadership in AI technology and business transformation for organisations.',
  keywords: 'AI blog, business AI, enterprise technology, AI insights, digital transformation, business innovation, AI case studies, industry trends',
  openGraph: {
    title: 'Centrus AI Blog',
    description: 'Latest insights and updates on AI technology and business transformation for organisations.',
    type: 'website',
    url: 'https://centrus.ai/resources/blog',
    siteName: 'Centrus AI',
    images: [
      {
        url: '/logo.png',
        width: 901,
        height: 901,
        alt: 'Centrus AI Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centrus AI Blog | Industry Insights & Trends',
    description: 'Discover the latest thinking, research and practical advice on implementing AI in your organisation.',
    images: ['/logo.png'],
    creator: '@centrusai',
  },
  alternates: {
    canonical: 'https://centrus.ai/resources/blog',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <BlogIndex 
        key={Date.now()}
        posts={blogPosts} 
        categories={blogCategories} 
      />
    </div>
  );
}
