import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Centrus AI',
  description: 'Explore the latest insights, updates, and best practices for AI in business.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex-1">{children}</div>
    </div>
  );
}
