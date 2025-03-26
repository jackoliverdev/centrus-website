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
          'What are our key differentiators against Competitor X?',
        answer:
          'Our advantages over Competitor X: 1) 40% faster implementation time, 2) Native integration with Microsoft products, 3) UK-based customer support, 4) Customisable reporting dashboard',
        source: {
          filename: 'Competitive_Analysis.pdf',
          url: '/question-showcase/competitor-analysis',
        },
        tags: ['sales'],
        chatTitle: 'Comparison versus Competitor X',
      },
      {
        question:
          'Can you suggest some blog post topics about our new AI integration feature?',
        answer:
          'Based on our content strategy, try these topics: "5 Ways AI Transforms Workflow Efficiency", "Case Study: 32% Productivity Boost with AI", and "AI Integration: Setup Guide in Under 10 Minutes".',
        source: {
          filename: 'Content_Strategy.pdf',
          url: '/question-showcase/content-strategy',
        },
        tags: ['marketing'],
        chatTitle: 'Blog topic ideas for AI integration features',
      },
      {
        question:
          'Can you check our business liability policy and identify any key exclusions?',
        answer:
          '1) Coverage limit is £2M per incident with £50K excess, 2) Claims must be filed within 60 days of incident, 3) Damage from natural disasters not endorsed.',
        source: {
          filename: 'Business_Insurance.pdf',
          url: '/question-showcase/policy-exclusions',
        },
        tags: ['legal'],
        chatTitle: 'Key exclusions in Insurance policy',
      },
      {
        question:
          `The Johnsons want to upgrade 20 guests from classic to luxury drinks package. What's the price difference?`,
        answer:
          'Upgrading from Classic (£50) to Luxury package (£100) for 20 guests increases the cost by £1,000, bringing the total wedding cost to £12,395.43.',
        source: {
          filename: 'Wedding_Pricing.pdf',
          url: '/question-showcase/wedding-packages',
        },
        tags: ['sales'],
        chatTitle: 'Wedding drinks package upgrade',
      },
      {
        question:
          'What time does the surprise guest speaker arrive for the event tomorrow?',
        answer:
          'The surprise guest Sarah Johnson, arrives at 14:30, entering through the East entrance. She requires 15 minutes for mic setup before her 15:00 presentation.',
        source: {
          filename: '03/02/2025_Itinerary.pdf',
          url: '/question-showcase/event-schedule',
        },
        tags: ['customer support'],
        chatTitle: 'Surprise guest speaker arrival information',
      },
      {
        question:
          `How do I troubleshoot when a customer can't access their admin dashboard?`,
        answer:
          'First check account status, then verify permissions level. If both are correct, ask them to clear browser cache and disable extensions.',
        source: {
          filename: 'Troubleshoot_Guide.pdf',
          url: '/question-showcase/access-issues',
        },
        tags: ['customer support'],
        chatTitle: 'Admin dashboard access troubleshooting',
      },
      {
        question:
          `What's our company policy on remote working days?`,
        answer:
          'Our flexible working policy allows 3 remote days weekly with manager approval. Core hours are 8am-5pm UK time for all employees. Teams must coordinate in-office days for collaboration purposes.',
        source: {
          filename: 'Working_Policy.pdf',
          url: '/question-showcase/remote-policy',
        },
        tags: ['policy'],
        chatTitle: 'Remote working policy guidelines',
      },
      {
        question:
          `What's the approval process for offering a 20% discount?`,
        answer:
          'Discounts between 15-25% require Sales Director approval via the Deals portal. Submit at least 48 hours before quote delivery. Include contract length and total value.',
        source: {
          filename: 'Discount_Guidelines.pdf',
          url: '/question-showcase/discount-policy',
        },
        tags: ['sales'],
        chatTitle: 'Approval process for discount on deals',
      },
      {
        question:
          'What are the key steps in our employee onboarding process?',
        answer:
          'Our onboarding process has 5 key steps: paperwork completion, equipment setup, compliance training, team introductions, and a 90-day review. The full process typically takes 3 months to complete.',
        source: {
          filename: 'Employee_Handbook.pdf',
          url: '/question-showcase/employee-onboarding',
        },
        tags: ['Human Resources'],
        chatTitle: 'Employee Onboarding Process Clarification',
      },
      {
        question:
          'How should I respond when prospects say our solution is too expensive?',
        answer:
          'When facing price objections: 1) Reframe as investment not cost, 2) Highlight average ROI, 3) Explain our 15% effectiveness increase, 4) Offer quarterly payment option, 5) Share similar case studies.',
        source: {
          filename: 'Objection_Playbook.pdf',
          url: '/question-showcase/objection-handling',
        },
        tags: ['sales'],
        chatTitle: 'Strategies for addressing price objections',
      },
      {
        question:
          'Can you suggest email subject lines for our upcoming webinar?',
        answer:
          'Top-performing options: "Join 3,000+ Professionals: AI Workflow Webinar", "Cut Processing Time by 50% [Free Webinar]", and "Tomorrow Only: Expert AI Implementation Strategies".',
        source: {
          filename: 'Email_Playbook.pdf',
          url: '/question-showcase/email-marketing',
        },
        tags: ['marketing'],
        chatTitle: 'Email subject line suggestions for webinar',
      },
      {
        question:
          'What should I do if I suspect a data breach?',
        answer:
          'For potential breaches: 1) Report immediately to security@company.co.uk, 2) Document what happened, 3) Do not discuss with external parties, 4) IT will secure your device within 30 minutes.',
        source: {
          filename: 'Data_Security.pdf',
          url: '/question-showcase/security-policy',
        },
        tags: ['policy'],
        chatTitle: 'Data breach response procedure steps',
      },
      {
        question:
          'How can we repurpose our latest whitepaper for different marketing channels?',
        answer:
          'You can breakdown your latest whitepaper on AI Integration into formats such as: LinkedIn articles, blog posts, social media posts, and video content.',
        source: {
          filename: 'Content_Strategy.pdf',
          url: '/question-showcase/content-repurposing',
        },
        tags: ['marketing'],
        chatTitle: 'Whitepaper repurposing for marketing',
      },
      {
        question:
          'What was our Q4 2023 revenue numbers compared to target?',
        answer:
          'I checked the Q4 2023 financial reports - we hit £2.8M in revenue, exceeding our £2.5M target by 12%. This continues our trend of strong performance.',
        source: {
          filename: 'Q42023_Financial_Report.pdf',
          url: '/question-showcase/q4-financials',
        },
        tags: ['finance'],
        chatTitle: 'Q4 revenue performance versus targets',
      },
      {
        question:
          'How much parental leave are new fathers entitled to?',
        answer:
          `New fathers receive 4 weeks of fully paid paternity leave plus an additional 8 weeks at 50% pay. Leave can be taken in blocks until the child's first birthday with 4 weeks' notice.`,
        source: {
          filename: 'Parental_Policy.pdf',
          url: '/question-showcase/parental-leave',
        },
        tags: ['policy'],
        chatTitle: 'Paternity leave entitlement explanation',
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
