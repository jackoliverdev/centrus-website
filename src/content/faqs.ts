export const faqsContent = {
  general: [
    {
      question: 'What is Centrus AI?',
      answer:
        'Centrus AI is an AI-powered business assistant that helps organizations manage and access their knowledge more effectively. It uses advanced AI to understand, retrieve, and analyze company information, providing instant answers and insights to your team.',
    },
    {
      question: 'How does Centrus work?',
      answer:
        "Centrus works by securely processing your company documents and data, training its AI to understand your specific business context. Users can then ask questions or search for information using natural language, and Centrus provides accurate, relevant responses based on your company's knowledge base.",
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, security is our top priority. We use enterprise-grade encryption for all data, both in transit and at rest. We maintain SOC 2 Type II compliance and adhere to GDPR requirements. All data is processed in secure, isolated environments.',
    },
  ],

  technical: [
    {
      question: 'What file types does Centrus support?',
      answer:
        'Centrus supports a wide range of file types including PDFs, Word documents (.doc, .docx), text files (.txt), Excel spreadsheets (.xls, .xlsx), PowerPoint presentations (.ppt, .pptx), and more. We also support HTML, Markdown, and rich text formats.',
    },
    {
      question: 'Can Centrus integrate with our existing tools?',
      answer:
        'Yes, Centrus offers seamless integration with popular business tools including Google Workspace, Microsoft 365, Slack, Teams, and more. We also provide API access for custom integrations with your internal systems.',
    },
    {
      question: 'How accurate is the AI?',
      answer:
        "Our AI achieves high accuracy through specialized training on your company's specific content and context. The system continually learns and improves from usage. On average, our customers report 95%+ accuracy in information retrieval and responses.",
    },
  ],

  pricing: [
    {
      question: 'How much does Centrus cost?',
      answer:
        'We offer flexible pricing plans starting from $299/month for small teams. Our Professional plan is $599/month for growing organizations, and we offer custom Enterprise plans. All plans include a 14-day free trial.',
    },
    {
      question: 'Is there a minimum commitment?',
      answer:
        'No, our services are provided on a month-to-month basis with no long-term commitment required. Enterprise plans may have custom terms.',
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer:
        'Yes, you can save up to 20% by choosing annual billing. Contact our sales team for more details.',
    },
  ],

  setup: [
    {
      question: 'How long does it take to set up?',
      answer:
        'Basic setup can be completed in as little as a day. For enterprise deployments with custom integrations, the typical timeline is 1-2 weeks. Our team provides guided onboarding to ensure a smooth implementation process.',
    },
    {
      question: 'How do I get started?',
      answer:
        'You can start with a free trial to explore Centrus. Sign up on our website, and our team will help you with the initial setup and configuration. We also offer demos for teams who want to see Centrus in action first.',
    },
    {
      question: 'What kind of support do you provide?',
      answer:
        'We offer comprehensive support including 24/7 technical assistance, dedicated account management for enterprise customers, detailed documentation, and regular training sessions. Our support team is available via email, chat, and phone.',
    },
  ],

  enterprise: [
    {
      question: "Can we customize the AI's responses?",
      answer:
        "Yes, Centrus can be customized to match your company's tone, terminology, and specific requirements. You can define custom response templates, set up approval workflows, and configure the AI's behavior through our admin dashboard.",
    },
    {
      question: 'Do you offer on-premise deployment?',
      answer:
        'Yes, we offer on-premise and private cloud deployment options for Enterprise customers. These deployments include additional security features and customization options.',
    },
    {
      question: 'What about compliance and regulations?',
      answer:
        'We help organizations meet various compliance requirements including GDPR, HIPAA, SOC 2, and more. Enterprise plans include advanced security features and custom compliance configurations.',
    },
  ],

  support: {
    title: 'Still have questions?',
    description: "Can't find what you're looking for? We're here to help.",
    options: [
      {
        title: 'Contact Support',
        description: 'Get help from our support team',
        link: '/contact',
      },
      {
        title: 'Documentation',
        description: 'Browse our detailed documentation',
        link: '/docs',
      },
      {
        title: 'Schedule a Demo',
        description: 'See Centrus in action',
        link: '/demo',
      },
    ],
  },
} as const;
