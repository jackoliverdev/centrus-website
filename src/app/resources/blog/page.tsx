import { Metadata } from 'next';
import { BlogIndex } from '@/components/sections/resources/blog-index';
import { blogPosts, blogCategories } from '@/content/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore the latest insights, updates, and thought leadership in AI technology and business transformation.',
  openGraph: {
    title: 'Centrus AI Blog',
    description: 'Latest insights and updates from our team',
    type: 'website',
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
