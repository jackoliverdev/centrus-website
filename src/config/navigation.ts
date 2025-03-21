import { Solutions, Users, BarChart3, Settings, BookOpen, HelpCircle } from 'lucide-react';

export const mainNav = [
  {
    title: 'Solutions',
    href: '/solutions',
    items: [
      {
        title: 'Data Retrieval',
        href: '/solutions#data-retrieval',
        description: "Instantly access and analyze your company's data",
        icon: BarChart3,
      },
      {
        title: 'Employee Support',
        href: '/solutions#employee-support',
        description: "24/7 AI assistance for your team's questions",
        icon: Users,
      },
      {
        title: 'Business Intelligence',
        href: '/solutions#business-intelligence',
        description: 'Turn your data into actionable insights',
        icon: Solutions,
      },
    ],
  },
  {
    title: 'Resources',
    href: '/resources',
    items: [
      {
        title: 'Documentation',
        href: '/docs',
        description: 'Learn how to integrate and use Centrus AI',
        icon: BookOpen,
      },
      {
        title: 'Blog',
        href: '/blog',
        description: 'Latest updates and thought leadership',
        icon: BookOpen,
      },
      /* {
        title: 'Case Studies',
        href: '/case-studies',
        description: 'See how others use Centrus AI',
        icon: Users,
      }, */
      {
        title: 'Prompt library',
        href: '/prompt-library',
        description: 'Get inspiration for use cases',
        icon: HelpCircle,
      },
    ],
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
] as const;

export const footerNav = {
  solutions: [
    { title: 'Data Retrieval', href: '/solutions#data-retrieval' },
    { title: 'Employee Support', href: '/solutions#employee-support' },
    { title: 'Decision Making', href: '/solutions#decision-making' },
    { title: 'Content Generation', href: '/solutions#content-generation' },
  ],
  company: [
    { title: 'About', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Contact', href: '/contact' },
    { title: 'Partners', href: '/partners' },
  ],
  resources: [
    { title: 'Documentation', href: '/docs' },
    { title: 'Blog', href: '/blog' },
    { title: 'Help Center', href: '/help' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '/legal/privacy-policy' },
    { title: 'Terms of Service', href: '/legal/terms' },
    { title: 'Security', href: '/legal/security' },
  ],
} as const;

export type MainNavItem = (typeof mainNav)[number];
export type FooterNavItem = typeof footerNav;