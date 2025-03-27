import { Metadata } from 'next';
import { BlogIndex } from '@/components/sections/resources/blog-index';
import { blogPosts, blogCategories } from '@/content/blog';

export const metadata: Metadata = {
  title: 'Our latest thinking | Blog',
  description:
    'Get business-related AI insights and advice in our regular blog uploads. See our recent uploads now.',
  keywords: 'AI blog',
  openGraph: {
    title: 'Our latest thinking | Blog',
    description: 'Get business-related AI insights and advice in our regular blog uploads. See our recent uploads now.',
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
    title: 'AI Industry Insights & Trends',
    description: 'Get business-related AI insights and advice in our regular blog uploads. See our recent uploads now..',
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
