import {
  BookOpen,
  Rocket,
  Lock,
  Webhook,
  Database,
  Code,
  Settings,
  Search,
  Blocks,
  Zap,
  Shield,
  Bot,
  Network,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Doc {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  content: string;
  lastUpdated: string;
  nextDoc?: string;
  prevDoc?: string;
  relatedDocs?: string[];
}

export const categories = [
  'Getting Started',
  'Integration Guides',
  'Security',
  'Best Practices',
] as const;

export const docs: Doc[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Get started with Centrus AI and learn the core concepts.',
    category: 'Getting Started',
    icon: BookOpen,
    lastUpdated: '20 January 2025',
    prevDoc: 'core-concepts',
    nextDoc: 'quick-start',
    content: `
Welcome to Centrus AI, your organisation's intelligent assistant. We've built Centrus to make finding and using your company's knowledge as simple as having a conversation.

## What is Centrus AI?

At its heart, Centrus AI is a clever way to connect your team with your organisation's knowledge. Rather than digging through folders or asking colleagues, you can simply ask Centrus questions in plain English. It understands your business context and gives you precise answers from your company's documents and data.

## How It Works

Getting started is straightforward. Upload your documents and connect your existing systems - Centrus will organise and understand everything automatically. Your team can then start asking questions and getting instant answers. Whether you're looking for specific information or need help understanding complex documents, Centrus has you covered.

## Built for Teams

We know every organisation works differently, so we've made Centrus flexible. You can easily control who sees what, and everything stays secure and organised. It works alongside your existing tools, so there's no need to change how your team already works.

## Getting Started

The best way to understand Centrus is to try it yourself. Start by setting up your workspace and inviting a few team members. Upload some documents and see how quickly Centrus can help you find what you need. We recommend starting small - perhaps with one team or department - and then expanding as you see how it fits into your organisation.

Need more guidance? Our quick start guide will walk you through everything step by step, or you can always reach out to our support team for help.`,
  },
  {
    id: 'quick-start',
    title: 'Quick Start',
    description: 'Get up and running with Centrus AI in minutes.',
    category: 'Getting Started',
    icon: Rocket,
    lastUpdated: '20 January 2025',
    prevDoc: 'introduction',
    nextDoc: 'core-concepts',
    content: `
Getting started with Centrus AI is simple. Here's everything you need to know to get up and running quickly.

## Create Your Free Account

Head over to our dashboard and sign up for a free account. No credit card needed - just enter your work email and you're ready to go.

## Connect Your Documents

You can start uploading documents straight away or connect your existing tools like Google Drive or Microsoft Teams. Centrus will automatically organise everything and make it searchable.

## Try It Out

Once your documents are connected, you can start asking questions right away. Test out different queries and see how Centrus understands your content. The free plan gives you plenty of room to explore the platform's capabilities.

## Ready for More?

If you're finding Centrus useful, you can upgrade to one of our paid plans that best suits your needs. Need something more tailored? Chat with us about our enterprise plans - we can create custom AI integrations specifically for your organisation.

That's it! If you need any help along the way, our support team is always here to help.`,
  },
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    description: 'Understand the fundamental concepts of Centrus AI.',
    category: 'Getting Started',
    icon: Blocks,
    lastUpdated: '20 January 2025',
    prevDoc: 'quick-start',
    nextDoc: 'security',
    content: `
Centrus AI makes enterprise-grade artificial intelligence accessible to businesses of all sizes. Here's what you need to know about how our platform works.

## Your AI Hub

Think of Centrus as your central hub for managing all things AI in your organisation. Rather than dealing with multiple AI tools and systems, everything lives in one place - from document processing to custom AI models.

## Smart Document Understanding

At its core, Centrus understands your business documents like a human would. Upload any type of document, and our AI reads, understands, and organises the information automatically. This means you can ask questions in plain English and get accurate answers instantly.

## Continuous Learning

Your Centrus AI gets smarter over time. As your team uses the platform, it learns your organisation's specific language, processes, and knowledge. This means more accurate and relevant responses as you go.

## Enterprise-Grade Security

Security isn't an afterthought - it's built into everything we do. Your data is encrypted, access is controlled, and everything is tracked. You decide exactly who can see what.

## Built for Growth

Whether you're just starting with AI or looking to scale up, Centrus grows with you. Start with basic document processing and expand into custom AI solutions as your needs evolve.

## Future-Proof Platform

We're constantly developing new features and capabilities. As AI technology advances, your Centrus platform updates automatically, keeping you at the cutting edge without any extra work on your part.

Need more details about any of these concepts? Check out our specific guides or chat with our support team.`,
  },
  {
    id: 'security',
    title: 'Security Overview',
    description: 'Learn about our enterprise-grade security features and best practices.',
    category: 'Security',
    icon: Lock,
    lastUpdated: '20 January 2025',
    prevDoc: 'core-concepts',
    nextDoc: 'google-drive-integration',
    content: `
Security is at the heart of everything we do at Centrus AI. Here's how we keep your organisation's data safe and secure.

## Internal Access Control

We make it easy to control who sees what within your organisation. Our role-based access system lets you:

- Set up teams and departments with different access levels
- Control which documents each team member can view and use
- Track who's accessing what through detailed audit logs
- Automatically tag sensitive information for extra protection

## Data Security

Your data is protected at every step:

### At Rest
All your documents and data are encrypted when stored in our secure vector database. We use industry-standard encryption to ensure your information stays private.

### In Transit
When you're uploading documents or using Centrus, all data is encrypted using TLS 1.3. This means nobody can intercept your information as it moves between your systems and ours.

### Vector Storage
We use advanced vector storage technology to process and store your data securely. This means your original documents remain protected while still being instantly searchable.

## Always Up to Date

Security threats evolve, and so do we. We continuously update our security measures to protect against new risks. Your data's safety is our top priority.

Need more details about our security features? Our team is here to help - just reach out to us.`,
  },
  {
    id: 'google-drive-integration',
    title: 'Google Drive Integration',
    description: 'Connect your Google Drive to Centrus AI.',
    category: 'Integration Guides',
    icon: Database,
    lastUpdated: '20 January 2025',
    prevDoc: 'security',
    nextDoc: 'microsoft-teams-integration',
    content: `
Connect your Google Drive to Centrus AI and transform your documents into an intelligent, searchable knowledge base in minutes.

## Setup Guide

### 1. Navigate to Training
Access the training page from your Centrus dashboard.

### 2. Connect Google Drive
Click the "Connect to Google Drive" button and approve access permissions. We use secure OAuth2 authentication to keep your data safe.

### 3. Select Files
Choose the documents and folders you want Centrus to analyse. You can select specific folders or individual files - you're in complete control of what gets connected.

### 4. Sync and Train
Press sync to import your selected files into the Documents tab. Our AI will begin processing your documents automatically.

### 5. Organise and Chat
Tag your documents and start chatting with them immediately. Your documents are now ready for intelligent search and analysis.

## Key Features

- Real-time document syncing
- Smart folder organisation
- Automatic updates when documents change
- Secure OAuth2 authentication
- Selective file access control
- Version control support

Need help setting up your Google Drive integration? Our support team is here to help you get started.`,
  },
  {
    id: 'microsoft-teams-integration',
    title: 'Microsoft Teams Integration',
    description: 'Connect Microsoft Teams to Centrus AI.',
    category: 'Integration Guides',
    icon: Database,
    lastUpdated: '20 January 2025',
    prevDoc: 'google-drive-integration',
    nextDoc: 'whatsapp-integration',
    content: `
Access company knowledge directly within your Teams channels and chats. Get instant answers and collaborate seamlessly with your team.

## Setup Guide

### 1. Navigate to Training
Access the training page from your Centrus dashboard.

### 2. Connect Microsoft Teams
Click the "Connect to Microsoft Teams" button and approve access permissions. We use secure authentication to protect your data.

### 3. Select Channels
Choose which Teams channels and chats you want Centrus to learn from. You have complete control over which conversations are included.

### 4. Sync and Train
Press sync to import your selected conversations into the Documents tab. Our AI will process your Teams content automatically.

### 5. Organise and Chat
Tag your content and start chatting with your Teams knowledge immediately. Your team's conversations are now searchable and accessible.

## Key Features

- Real-time chat integration
- Channel-specific knowledge
- Automatic updates
- Secure authentication
- Selective channel access
- Conversation history

Need help setting up your Teams integration? Our support team is ready to help you get started.`,
},
{
  id: 'whatsapp-integration',
  title: 'WhatsApp Integration',
  description: 'Connect WhatsApp to Centrus AI.',
  category: 'Integration Guides',
  icon: Database,
  lastUpdated: '20 January 2025',
  prevDoc: 'microsoft-teams-integration',
  nextDoc: 'performance-optimisation',
  content: `
Access company knowledge directly within your WhatsApp conversations. Get instant answers and collaborate seamlessly with your team.

## Setup Guide

### 1. Update Phone Number
Navigate to Edit User and ensure your phone number includes the country code (e.g., +44 for UK).

### 2. Save Centrus Contact
Find the Centrus WhatsApp number on the integrations page and save it as a contact.

### 3. Start Chat
Open WhatsApp and message Centrus. The system will match your phone number to your account.

### 4. Select Tag
Choose which knowledge tag you want to chat about when prompted.

### 5. Chat Freely
Send messages to query your knowledge base. Type "RESTART CHAT" to switch tags or start a new thread.

## Key Features

- Mobile-first access
- Tag-based conversations
- Instant responses
- Secure authentication
- Chat history sync
- Easy thread management

Need help setting up your WhatsApp integration? Our support team is ready to help you get started.`,
},
{
  id: 'performance-optimisation',
  title: 'Performance Optimisation',
  description: 'Optimise your Centrus AI implementation.',
  category: 'Best Practices',
  icon: Zap,
  lastUpdated: '20 January 2025',
  prevDoc: 'whatsapp-integration',
  nextDoc: 'tag-management',
  content: `
Get the best results from Centrus AI by following these optimisation tips.

## Document Structure

The quality of your documents directly impacts how well Centrus can understand and use them. Here are some key tips:

### Clear Formatting
Keep your documents well-structured with clear headings, paragraphs and sections. This helps Centrus better understand the hierarchy and relationships in your content.

### Consistent Naming
Use consistent naming conventions for your documents and folders. This makes it easier to find and reference specific information.

### Regular Updates
Keep your documents up to date. Remove outdated content and ensure the latest information is available to your team.

## Writing Better Prompts

The way you ask questions has a big impact on the quality of answers you get:

### Be Specific
Instead of "tell me about our holiday policy", try "what's the process for booking annual leave in the UK office?"

### Provide Context
Include relevant details in your questions. For example: "I'm a new starter in the marketing team - what software should I request access to?"

### Use Follow-ups
If the first answer isn't quite what you need, ask follow-up questions to get more specific information.

## Example Prompts

We've put together a library of effective prompts that you can use as templates. Check out our prompt library in the Resources section for examples covering document summaries, policy questions, process explanations, technical queries, and team collaboration.

Need more help optimising your Centrus implementation? Our support team is here to help you get the most out of the platform.`,
},
{
  id: 'tag-management',
  title: 'Tag Management',
  description: 'Best practices for managing document tags and user access.',
  category: 'Best Practices',
  icon: Blocks,
  lastUpdated: '20 January 2025',
  prevDoc: 'performance-optimisation',
  nextDoc: 'core-concepts',
  content: `
Good tag management is essential for keeping your knowledge organised and secure. Here's how to make the most of Centrus AI's tagging system.

## Tag Documents Immediately

When you upload new documents or connect a data source, tag them straight away. For example:
- Finance documents get the 'Finance' tag
- HR policies get the 'HR' tag
- Marketing materials get the 'Marketing' tag

This makes it much easier to manage access and helps users find what they need quickly.

## Manage User Access

Head to the Edit Users page to give team members access to the tags they need:
- Finance team gets the 'Finance' tag
- HR team gets the 'HR' tag
- Marketing team gets the 'Marketing' tag

This ensures people can only access information relevant to their role.

## Regular Reviews

Keep your tag system healthy by regularly reviewing:
- Document tags - are they still relevant?
- User access - do people have the right tags for their current role?
- Outdated content - should any documents be archived or updated?

We recommend doing this review monthly, or whenever there are significant team changes.

## Stay Organised

A well-maintained tag system helps everyone work more efficiently. Keep it simple, consistent, and up to date.

Need help setting up your tag system? Our support team is here to help you get started.`,
}
];
