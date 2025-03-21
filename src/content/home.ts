export const homeContent = {
  hero: {
    title: 'Your AI-Powered Business Assistant',
    subtitle:
      'Transform your company knowledge access with conversational AI. Instantly retrieve, analyze, and create work-related information.',
    cta: {
      primary: {
        text: 'Book Free Demo',
        href: '/demo',
      },
      secondary: {
        text: 'Learn More',
        href: '/solutions',
      },
    },
  },

  features: [
    {
      title: 'Instant Data Retrieval',
      description:
        'Access your information instantly, without scouring through folders or documents.',
      icon: 'Search',
      image: '/images/features/data-retrieval.svg',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
      hoverGradient:
        'group-hover:from-blue-500/20 group-hover:via-blue-500/10 group-hover:to-transparent',
      stats: { value: '85', suffix: '%', label: 'Faster Search' },
    },
    {
      title: 'Smart Employee Support',
      description: 'Provide 24/7 assistance to your team with AI-powered answers and guidance.',
      icon: 'Users',
      image: '/images/features/employee-support.svg',
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
      hoverGradient:
        'group-hover:from-purple-500/20 group-hover:via-purple-500/10 group-hover:to-transparent',
      stats: { value: '92', suffix: '%', label: 'Satisfaction Rate' },
    },
    {
      title: 'Intelligent Analysis',
      description: 'Get AI-driven insights and recommendations based on your company data.',
      icon: 'Brain',
      image: '/images/features/analysis.svg',
      color: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
      hoverGradient:
        'group-hover:from-emerald-500/20 group-hover:via-emerald-500/10 group-hover:to-transparent',
      stats: { value: '3', suffix: 'x', label: 'Faster Insights' },
    },
    {
      title: 'Automated Workflows',
      description: 'Streamline processes and reduce manual tasks with intelligent automation.',
      icon: 'Zap',
      image: '/images/features/automation.svg',
      color: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
      hoverGradient:
        'group-hover:from-amber-500/20 group-hover:via-amber-500/10 group-hover:to-transparent',
      stats: { value: '60', suffix: '%', label: 'Time Saved' },
    },
  ],

  chatShowcase: {
    title: "Your Team's Questions, Instantly Answered",
    subtitle:
      'Stop wasting time searching for information. Let Centrus handle the repetitive questions.',
    conversations: [
      {
        question:
          'Hey Centrus, what was our Q4 revenue numbers compared to target?',
        answer:
          'I checked the Q4 financial reports - we hit £2.8M in revenue, exceeding our £2.5M target by 12%. This continues our trend of strong performance.',
        source: {
          filename: 'Q4_2023_Financial_Report.pdf',
          url: '/question-showcase/q4-financials',
        },
        tags: ['finance'],
        chatTitle: 'Financial Performance',
      },
      {
        question: 'Can you explain our current travel expense policy?',
        answer:
          'Here are the key points:\n- Daily meal allowance: £35\n- Economy flights for trips under 6 hours\n- Business class allowed for longer flights\n- All expenses require receipts.',
        source: {
          filename: 'Travel_Policy_2024.doc',
          url: '/question-showcase/travel-policy',
        },
        tags: ['policy'],
        chatTitle: 'Company Policies',
      },
      {
        question: 'What is the updated colour palette for the new product launch?',
        answer:
          'The updated colour palette includes Primary: #4F46E5, Secondary: #EC4899 and Accent #2B9CE5.',
        source: {
          filename: 'Product_Launch_Assets.pdf',
          url: '/question-showcase/brand-assets',
        },
        tags: ['marketing'],
        chatTitle: 'Brand Resources',
      },
    ],
  },

  howItWorks: {
    title: 'How Centrus Works',
    description:
      "Get started with Centrus in four simple steps. Our platform makes it easy to transform your company's knowledge into an AI-powered resource.",
    steps: [
      {
        title: 'Upload Documents',
        description:
          'Start by uploading your company documents. We support PDFs, Word documents, and more.',
        icon: 'Upload',
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10',
      },
      {
        title: 'AI Training',
        description:
          'Our AI learns from your documents, understanding your specific business context.',
        icon: 'Brain',
        color: 'text-purple-500',
        bgColor: 'bg-purple-500/10',
      },
      {
        title: 'Set Permissions',
        description: 'Configure access levels and security settings for different team members.',
        icon: 'Shield',
        color: 'text-green-500',
        bgColor: 'bg-green-500/10',
      },
      {
        title: 'Start Using',
        description:
          'Begin interacting with your AI assistant to retrieve information and get answers.',
        icon: 'MessageSquare',
        color: 'text-amber-500',
        bgColor: 'bg-amber-500/10',
      },
    ],
  },

  integrations: {
    title: 'Seamless Integrations',
    description: 'Connect Centrus with your existing tools and workflows',
    available: [
      {
        name: 'Slack',
        icon: '/icons/slack.svg',
        description: 'Get instant answers right in your Slack channels',
      },
      {
        name: 'Microsoft Teams',
        icon: '/icons/teams.svg',
        description: 'Integrate Centrus with your Teams workspace',
      },
      {
        name: 'Google Drive',
        icon: '/icons/gdrive.svg',
        description: "Connect your company's Google Drive",
      },
    ],
    comingSoon: [
      {
        name: 'Notion',
        icon: '/icons/notion.svg',
        description: 'Sync with your Notion workspace',
      },
      {
        name: 'Confluence',
        icon: '/icons/confluence.svg',
        description: 'Connect to your Confluence pages',
      },
    ],
  },

  cta: {
    title: 'Ready to Transform Your Business Knowledge?',
    description:
      'Join leading companies using Centrus to power their teams with instant information access.',
    primaryButton: {
      text: 'Book Free Demo',
      href: '/demo',
    },
    secondaryButton: {
      text: 'View Pricing',
      href: '/pricing',
    },
  },
} as const;
