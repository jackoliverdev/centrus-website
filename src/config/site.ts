export const siteConfig = {
  name: 'Centrus AI',
  description:
    'Transform your company knowledge access with conversational AI. Instantly retrieve, analyze, and create work-related information.',
  url: 'https://centrus.ai',
  ogImage: 'https://centrus.ai/og.jpg',
  links: {
    twitter: 'https://twitter.com/centrusai',
    github: 'https://github.com/centrusai',
    linkedin: 'https://linkedin.com/company/centrusai',
  },
  creator: 'Centrus AI',
  keywords: [
    'AI business assistant',
    'conversational AI',
    'knowledge management',
    'enterprise AI',
    'data retrieval',
    'employee support',
    'business intelligence',
    'content generation',
  ],
  contacts: {
    sales: 'info@centrus.ai',
    support: 'info@centrus.ai',
    press: 'info@centrus.ai',
  },
  support: {
    hours: '24/7',
    response: '4 hours',
  },
  company: {
    name: 'Centrus AI Ltd',
    address: '123 AI Street, Tech City, TC1 2AB',
    registration: '12345678',
  },
  meta: {
    titleTemplate: '%s | Centrus AI',
    defaultTitle: 'Centrus AI - Your AI-Powered Business Assistant',
    defaultDescription:
      'Transform your company knowledge access with conversational AI. Instantly retrieve, analyze, and create work-related information.',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: '#041B70' },
    ],
  },
  features: {
    darkMode: true,
    newsletter: true,
    blog: true,
    documentation: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;
