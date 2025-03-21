export const solutionsContent = {
  hero: {
    title: 'Transform Your Business with AI-Powered Solutions',
    subtitle:
      'Empower your organization with intelligent automation, instant knowledge access, and data-driven insights.',
    cta: {
      primary: {
        text: 'Book Demo',
        href: '/demo',
      },
      secondary: {
        text: 'Contact Sales',
        href: '/contact',
      },
    },
  },

  solutions: [
    {
      id: 'knowledge-management',
      title: 'Knowledge Management',
      description: 'Transform how your organization stores, accesses, and utilizes information.',
      icon: 'Brain',
      color: 'blue',
      features: [
        'Unified knowledge repository',
        'Smart document search',
        'Automatic knowledge updates',
      ],
      benefits: [
        {
          title: 'Faster Access',
          description: 'Find information 65% faster than traditional methods',
        },
        {
          title: 'Better Organization',
          description: 'Automatically categorize and tag content',
        },
        {
          title: 'Always Up-to-date',
          description: 'Real-time updates and version control',
        },
      ],
    },
    {
      id: 'employee-support',
      title: 'Employee Support',
      description: 'Provide instant, accurate support to your team around the clock.',
      icon: 'Users',
      color: 'purple',
      features: [
        '24/7 AI support availability',
        'Instant response to queries',
        'Contextual help and guidance',
      ],
      benefits: [
        {
          title: 'Reduced Workload',
          description: '40% reduction in support tickets',
        },
        {
          title: 'Improved Satisfaction',
          description: '92% employee satisfaction rate',
        },
        {
          title: 'Faster Onboarding',
          description: '30% reduction in training time',
        },
      ],
    },
    {
      id: 'data-intelligence',
      title: 'Data Intelligence',
      description: 'Turn your data into actionable insights with AI-powered analytics.',
      icon: 'Chart',
      color: 'green',
      features: ['Advanced analytics', 'Predictive insights', 'Custom reporting'],
      benefits: [
        {
          title: 'Better Decisions',
          description: 'Data-driven decision making',
        },
        {
          title: 'Proactive Insights',
          description: 'Identify trends and opportunities',
        },
        {
          title: 'Custom Reports',
          description: 'Automated reporting and dashboards',
        },
      ],
    },
  ],

  features: [
    {
      title: 'Smart Search',
      description:
        'Find exactly what you need with AI-powered search that understands context and intent.',
      icon: 'Search',
    },
    {
      title: 'Auto-Categorization',
      description: 'Automatically organize and tag content for easy retrieval.',
      icon: 'Tags',
    },
    {
      title: 'Version Control',
      description: 'Track changes and maintain document history automatically.',
      icon: 'History',
    },
    {
      title: 'Access Control',
      description: 'Granular permissions and role-based access control.',
      icon: 'Lock',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Monitor usage, trends, and insights with customizable dashboards.',
      icon: 'Chart',
    },
    {
      title: 'Integration API',
      description: 'Connect with your existing tools and workflows.',
      icon: 'Code',
    },
  ],

  caseStudies: [
    {
      title: 'TechCorp Transformation',
      description: 'How TechCorp reduced support tickets by 40% with Centrus AI',
      metrics: [
        { label: 'Support Tickets', value: '-40%' },
        { label: 'Employee Satisfaction', value: '+92%' },
        { label: 'Time Saved', value: '20hrs/week' },
      ],
      logo: '/logos/techcorp.svg',
      link: '/case-studies/techcorp',
    },
    {
      title: 'GlobalTech Success',
      description: "GlobalTech's journey to efficient knowledge management",
      metrics: [
        { label: 'Information Access', value: '65% faster' },
        { label: 'Training Time', value: '-30%' },
        { label: 'ROI', value: '3x' },
      ],
      logo: '/logos/globaltech.svg',
      link: '/case-studies/globaltech',
    },
  ],
} as const;
