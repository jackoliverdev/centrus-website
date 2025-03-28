'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Network, Puzzle, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils/helpers';

// Define a proper interface for the integration objects
interface Integration {
  name: string;
  description: string;
  integrationType: string;
  color: string;
  glowColor: string;
  status: 'Active' | 'Coming Soon' | 'Contact';
  href?: string;
  logo?: string;
  icon?: LucideIcon;
}

const integrations: Integration[] = [
  {
    name: 'Google Drive',
    description:
      'Transform your Google Drive documents into an intelligent, searchable knowledge base. Seamlessly analyse and access your company\'s document repository.',
    integrationType: 'Knowledge Source',
    logo: '/logos/google-drive.svg',
    color: 'from-[#10b981] to-[#059669]',
    glowColor: 'group-hover:shadow-[#10b981]/30',
    status: 'Active',
    href: '/integrations/google-drive',
  },
  {
    name: 'WhatsApp',
    description: 'Access your company\'s entire knowledge base from your pocket. Ask and retrieve information instantly through WhatsApp anywhere, anytime.',
    integrationType: 'Messaging Interface',
    logo: '/logos/whatsapp.svg',
    color: 'from-[#10b981] to-[#059669]',
    glowColor: 'group-hover:shadow-[#10b981]/30',
    status: 'Active',
    href: '/integrations/whatsapp',
  },
  {
    name: 'Microsoft Teams',
    description:
      'Access and retrieve information from your Teams conversations. Turn your channels and chats into a searchable knowledge source.',
    integrationType: 'Knowledge Source',
    logo: '/logos/ms-teams.svg',
    color: 'from-[#10b981] to-[#059669]',
    glowColor: 'group-hover:shadow-[#10b981]/30',
    status: 'Active',
    href: '/integrations/microsoft-teams',
  },
  {
    name: 'Hubspot',
    description:
      'Transform your Hubspot workspace into an interactive knowledge base. Seamlessly integrate your client and business knowledge for enhanced productivity.',
    integrationType: 'Knowledge Source',
    logo: '/logos/hubspot.svg',
    color: 'from-red-500/90 to-red-600',
    glowColor: 'group-hover:shadow-red-500/20',
    status: 'Coming Soon',
  },
  {
    name: 'Dropbox',
    description:
      'Seamlessly analyse and search through your Dropbox files. Transform your cloud storage into an accessible and intelligent knowledge repository.',
    integrationType: 'Knowledge Source',
    logo: '/logos/dropbox2.svg',
    color: 'from-red-500/90 to-red-600',
    glowColor: 'group-hover:shadow-red-500/20',
    status: 'Coming Soon',
  },
  {
    name: 'Custom Integration',
    description:
      'Need something specific? We build custom integrations tailored to your unique workflow and requirements.',
    integrationType: 'Knowledge Source',
    icon: Puzzle,
    color: 'from-[#2b9ce5]/90 to-[#2b9ce5]',
    glowColor: 'group-hover:shadow-[#2b9ce5]/20',
    status: 'Contact',
    href: '/contact',
  },
];

interface IntegrationCardProps {
  integration: Integration;
  index: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
};

function IntegrationCard({ integration, index }: IntegrationCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const cardContent = (
    <div
      className={cn(
        'relative block rounded-xl p-6',
        'bg-gradient-to-br from-background/50 to-background/90',
        'border border-primary/5',
        'transition-all duration-500',
        'hover:border-primary/20',
        integration.glowColor,
        integration.href && 'cursor-pointer'
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <motion.div
          initial={false}
          animate={{
            scale: isHovered ? 1.05 : 1,
            y: isHovered ? -2 : 0,
          }}
          className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-primary/10 bg-background/50 p-2 backdrop-blur-sm"
        >
          {integration.logo ? (
            <Image
              src={integration.logo}
              alt={integration.name}
              fill
              className="object-contain p-2"
            />
          ) : integration.icon ? (
            <integration.icon className="h-6 w-6 text-[#2b9ce5]" />
          ) : null}
        </motion.div>

        {integration.status === 'Coming Soon' ? (
          <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-500/20">
            Coming Soon
          </span>
        ) : integration.status === 'Contact' ? (
          <span className="inline-flex items-center rounded-full bg-[#2b9ce5]/10 px-3 py-1 text-xs font-medium text-[#2b9ce5] ring-1 ring-inset ring-[#2b9ce5]/20">
            Contact Sales
          </span>
        ) : (
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#10b981]" />
            <span className="text-xs font-medium text-[#10b981]">Active</span>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <motion.h3
          initial={false}
          animate={{ y: isHovered ? -1 : 0 }}
          className="bg-gradient-to-br from-foreground to-foreground/90 bg-clip-text text-lg font-semibold text-transparent"
        >
          {integration.name}
        </motion.h3>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Integration Type:</span>
          <span className="text-sm font-medium text-foreground">
            {integration.integrationType}
          </span>
        </div>

        <motion.p
          initial={false}
          animate={{ opacity: isHovered ? 0.9 : 0.7 }}
          className="mb-8 min-h-[100px] text-sm leading-relaxed text-muted-foreground"
        >
          {integration.description}
        </motion.p>
      </div>

      {(integration.status === 'Active' || integration.status === 'Contact') && (
        <motion.div
          initial={false}
          animate={{
            y: isHovered ? 0 : 4,
            opacity: isHovered ? 1 : 0,
          }}
          className="absolute bottom-5 right-6"
        >
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              'group/btn flex h-8 items-center gap-2',
              integration.status === 'Contact'
                ? 'text-[#2b9ce5] hover:text-[#2b9ce5]/90'
                : 'text-[#10b981] hover:text-[#10b981]/90'
            )}
          >
            <span className="text-sm font-medium">
              {integration.status === 'Contact' ? 'Contact Sales' : 'Learn more'}
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Button>
        </motion.div>
      )}

      <div
        className={cn(
          'absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500',
          'bg-gradient-to-br',
          integration.color,
          'group-hover:opacity-[0.03]'
        )}
      />
    </div>
  );

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative will-change-transform"
    >
      {integration.href ? (
        <Link href={integration.href}>{cardContent}</Link>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

export function IntegrationsGrid() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle 800px at 50% 50%, rgba(16, 185, 129, 0.05), transparent)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm">
            <Network className="mr-2 h-4 w-4 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Enterprise Integration Suite
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-4 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text font-heading text-3xl font-bold text-transparent sm:text-4xl">
              Powerful Integrations for
              AI Success
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-lg text-muted-foreground">
              Connect your essential tools to enhance
              productivity and unlock the full potential of your AI workspace.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {integrations.map((integration, index) => (
            <IntegrationCard key={integration.name} integration={integration} index={index} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
