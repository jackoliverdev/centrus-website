import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Centrus AI',
  description:
    'Discover how leading organizations are transforming their operations and achieving remarkable results with Centrus AI.',
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex-1">{children}</div>
    </div>
  );
}
