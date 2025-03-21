export const pricingContent = {
  hero: {
    title: 'Simple, Transparent Pricing',
    subtitle: 'Choose the plan that best fits your needs. All plans include a 14-day free trial.',
  },

  plans: [
    {
      name: 'Business',
      description: 'Perfect for small teams and growing businesses',
      price: 299,
      billingPeriod: '/month',
      featured: false,
      features: [
        {
          text: 'Up to 25 team members',
          tooltip: 'Add more users as your team grows',
        },
        {
          text: '100GB storage',
          tooltip: 'Secure cloud storage for your documents',
        },
        {
          text: 'Basic integrations',
          tooltip: 'Connect with common business tools',
        },
        {
          text: 'Standard support',
          tooltip: 'Email support with 24-hour response time',
        },
        {
          text: '5 custom workflows',
          tooltip: 'Automate your common processes',
        },
        {
          text: 'Basic analytics',
          tooltip: 'Track usage and basic metrics',
        },
      ],
      cta: 'Start Free Trial',
    },
    {
      name: 'Professional',
      description: 'Advanced features for larger organizations',
      price: 599,
      billingPeriod: '/month',
      featured: true,
      features: [
        {
          text: 'Up to 100 team members',
          tooltip: 'Ideal for mid-sized organizations',
        },
        {
          text: 'Unlimited storage',
          tooltip: 'No storage limits or restrictions',
        },
        {
          text: 'Advanced integrations',
          tooltip: 'Connect with enterprise tools and custom APIs',
        },
        {
          text: 'Priority support',
          tooltip: '4-hour response time with dedicated support',
        },
        {
          text: 'Unlimited workflows',
          tooltip: 'Create custom automations for any process',
        },
        {
          text: 'Advanced analytics',
          tooltip: 'Detailed insights and custom reporting',
        },
        {
          text: 'Custom training',
          tooltip: 'Personalized onboarding and training sessions',
        },
        {
          text: 'SLA guarantee',
          tooltip: '99.9% uptime SLA with compensation',
        },
      ],
      cta: 'Start Free Trial',
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large enterprises',
      price: null,
      billingPeriod: '',
      featured: false,
      features: [
        {
          text: 'Unlimited team members',
          tooltip: 'Scale without limitations',
        },
        {
          text: 'Unlimited storage',
          tooltip: 'Enterprise-grade secure storage',
        },
        {
          text: 'Custom integrations',
          tooltip: 'Custom-built integrations for your needs',
        },
        {
          text: '24/7 dedicated support',
          tooltip: 'Round-the-clock support with dedicated team',
        },
        {
          text: 'Custom AI training',
          tooltip: 'AI model customized for your business',
        },
        {
          text: 'Enterprise security',
          tooltip: 'Advanced security features and compliance',
        },
        {
          text: 'Custom deployment',
          tooltip: 'On-premise or private cloud options',
        },
        {
          text: 'Custom SLA',
          tooltip: 'Tailored SLA to meet your requirements',
        },
      ],
      cta: 'Contact Sales',
    },
  ],

  comparison: {
    categories: [
      {
        name: 'Core Features',
        features: [
          {
            name: 'Team members',
            business: 'Up to 25',
            professional: 'Up to 100',
            enterprise: 'Unlimited',
            tooltip: 'Number of users who can access the platform',
          },
          {
            name: 'Storage',
            business: '100GB',
            professional: 'Unlimited',
            enterprise: 'Unlimited',
            tooltip: 'Storage space for documents and data',
          },
          {
            name: 'Document processing',
            business: '10,000/month',
            professional: '100,000/month',
            enterprise: 'Unlimited',
            tooltip: 'Number of documents that can be processed monthly',
          },
        ],
      },
      {
        name: 'AI Features',
        features: [
          {
            name: 'Custom AI training',
            business: false,
            professional: 'Basic',
            enterprise: 'Advanced',
            tooltip: 'Train AI on your specific business context',
          },
          {
            name: 'Response customization',
            business: 'Basic',
            professional: 'Advanced',
            enterprise: 'Full control',
            tooltip: 'Customize how AI responds to queries',
          },
          {
            name: 'Multilingual support',
            business: '3 languages',
            professional: '10 languages',
            enterprise: 'All languages',
            tooltip: 'Languages supported for AI interactions',
          },
        ],
      },
    ],
  },

  faqs: [
    {
      question: 'Can I switch plans at any time?',
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing.",
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, wire transfers, and can arrange other payment methods for enterprise customers.',
    },
    {
      question: 'Is there a minimum contract period?',
      answer:
        'No, our services are provided on a month-to-month basis with no long-term commitment required. Enterprise plans may have custom terms.',
    },
    {
      question: 'What happens after my free trial?',
      answer:
        "At the end of your 14-day trial, you can choose to subscribe to any of our plans. We'll notify you before the trial ends, and there's no automatic subscription.",
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer:
        'Yes, you can save up to 20% by choosing annual billing. Contact our sales team for more details.',
    },
    {
      question: 'Can I customize my plan?',
      answer:
        'Enterprise customers can fully customize their plans. For Business and Professional plans, contact sales to discuss specific needs.',
    },
  ],

  addons: [
    {
      name: 'Additional Storage',
      description: 'Expand your storage capacity',
      price: '50/month',
      unit: 'per 100GB',
    },
    {
      name: 'Extra Users',
      description: 'Add more team members',
      price: '15/month',
      unit: 'per user',
    },
    {
      name: 'Custom Integration',
      description: 'Connect with additional tools',
      price: 'from 299',
      unit: 'one-time',
    },
  ],

  enterprise: {
    title: 'Enterprise Solutions',
    description: 'Custom solutions for large organizations with specific needs',
    benefits: [
      'Dedicated account manager',
      'Custom implementation',
      'Priority development',
      'Advanced security features',
      'Custom SLA guarantees',
      '24/7 premium support',
    ],
    contact: {
      title: 'Talk to Sales',
      description: 'Get a customized quote for your organization',
      button: 'Contact Sales',
    },
  },
} as const;
