export const integrationsContent = {
  hero: {
    title: 'Connect with Your Favorite Tools',
    subtitle: 'Seamlessly integrate Centrus with the tools your team already uses.',
    cta: {
      primary: {
        text: 'View Documentation',
        href: '/docs/integrations',
      },
      secondary: {
        text: 'Request Integration',
        href: '/contact',
      },
    },
  },

  categories: [
    {
      name: 'Communication',
      description: 'Connect with your team collaboration tools',
      integrations: [
        {
          name: 'Slack',
          description: 'Get instant answers and updates in your Slack channels',
          logo: '/logos/slack.svg',
          category: 'Communication',
          features: [
            'Real-time notifications',
            'Direct message support',
            'Channel integration',
            'Custom commands',
          ],
          setupTime: '5 minutes',
          docLink: '/docs/integrations/slack',
        },
        {
          name: 'Microsoft Teams',
          description: 'Integrate Centrus directly into your Teams workspace',
          logo: '/logos/ms-teams.svg',
          category: 'Communication',
          features: [
            'Teams bot integration',
            'Channel messages',
            'File sharing',
            'Meeting integration',
          ],
          setupTime: '10 minutes',
          docLink: '/docs/integrations/teams',
        },
      ],
    },
    {
      name: 'Storage',
      description: 'Connect your document storage solutions',
      integrations: [
        {
          name: 'Google Drive',
          description: 'Access and analyze documents stored in Google Drive',
          logo: '/logos/google-drive.svg',
          category: 'Storage',
          features: ['Automatic syncing', 'File search', 'Version control', 'Permissions sync'],
          setupTime: '5 minutes',
          docLink: '/docs/integrations/google-drive',
        },
        {
          name: 'Dropbox',
          description: 'Seamlessly integrate with your Dropbox files',
          logo: '/logos/dropbox.svg',
          category: 'Storage',
          features: ['File syncing', 'Folder mapping', 'Change tracking', 'Smart preview'],
          setupTime: '5 minutes',
          docLink: '/docs/integrations/dropbox',
        },
        {
          name: 'OneDrive',
          description: 'Connect your OneDrive business storage',
          logo: '/logos/onedrive.svg',
          category: 'Storage',
          features: [
            'SharePoint integration',
            'Real-time sync',
            'Advanced search',
            'Security compliance',
          ],
          setupTime: '8 minutes',
          docLink: '/docs/integrations/onedrive',
        },
      ],
    },
    {
      name: 'Productivity',
      description: 'Enhance your workflow tools',
      integrations: [
        {
          name: 'Notion',
          description: 'Connect your Notion workspace with Centrus',
          logo: '/logos/notion.svg',
          category: 'Productivity',
          features: ['Page sync', 'Database integration', 'Block content', 'Workspace search'],
          setupTime: '7 minutes',
          docLink: '/docs/integrations/notion',
        },
        {
          name: 'Jira',
          description: 'Link your Jira projects and tickets',
          logo: '/logos/jira.svg',
          category: 'Productivity',
          features: ['Ticket sync', 'Project mapping', 'Workflow automation', 'Smart updates'],
          setupTime: '12 minutes',
          docLink: '/docs/integrations/jira',
        },
      ],
    },
  ],

  custom: {
    title: 'Need a Custom Integration?',
    description:
      "Don't see what you're looking for? We can build custom integrations for your specific needs.",
    process: [
      {
        title: 'Initial Consultation',
        description: "We'll discuss your needs and requirements",
      },
      {
        title: 'Technical Assessment',
        description: 'Our team evaluates the technical requirements',
      },
      {
        title: 'Development',
        description: 'Custom integration built to your specifications',
      },
      {
        title: 'Testing & Deployment',
        description: 'Thorough testing and seamless deployment',
      },
    ],
    cta: {
      text: 'Contact Sales',
      href: '/contact',
    },
  },

  api: {
    title: 'Developer API',
    description: 'Build your own integrations using our comprehensive API',
    features: [
      'RESTful API',
      'Comprehensive documentation',
      'Authentication options',
      'Webhook support',
    ],
    cta: {
      text: 'View API Docs',
      href: '/docs/api',
    },
  },
} as const;
