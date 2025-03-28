'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRight, Network, Puzzle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { DM_Sans } from 'next/font/google';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils/helpers';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

type MotionDivProps = HTMLMotionProps<'div'> &
  React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
  };

const MotionDiv: React.FC<MotionDivProps> = props => <motion.div {...props} />;

interface Integration {
  name: string;
  description: string;
  integrationType: string;
  logo?: string;
  icon?: React.ElementType;
  color: string;
  glowColor: string;
  status: 'Active' | 'Coming Soon' | 'Contact';
  href?: string;
}

const integrations: Integration[] = [
  {
    name: 'Google Drive',
    description: 'Transform your Google Drive documents into an intelligent, searchable knowledge base. Seamlessly analyse and access your company\'s document repository.',
    integrationType: 'Knowledge Source',
    logo: '/logos/google-drive.svg',
    color: 'from-[#10b981] to-[#059669]',
    glowColor: 'group-hover:shadow-[#10b981]/30',
    status: 'Active',
    href: '/integrations/google-drive',
  },
  {
    name: 'WhatsApp',
    description: 'Access your company\'s entire knowledge base from your pocket. Query and retrieve information instantly through familiar WhatsApp conversations, anywhere, anytime.',
    integrationType: 'Messaging Interface',
    logo: '/logos/whatsapp.svg',
    color: 'from-[#10b981] to-[#059669]',
    glowColor: 'group-hover:shadow-[#10b981]/30',
    status: 'Active',
    href: '/integrations/whatsapp',
  },
  {
    name: 'Microsoft Teams',
    description: 'Access and retrieve information from your Teams conversations. Turn your channels and chats into a searchable knowledge source.',
    integrationType: 'Knowledge Source',
    logo: '/logos/ms-teams.svg',
    color: 'from-[#10b981] to-[#059669]',
    glowColor: 'group-hover:shadow-[#10b981]/30',
    status: 'Active',
    href: '/integrations/microsoft-teams',
  },
  {
    name: 'Hubspot',
    description: 'Transform your Hubspot workspace into an interactive knowledge base. Seamlessly integrate your client and business knowledge for enhanced productivity.',
    integrationType: 'Knowledge Source',
    logo: '/logos/hubspot.svg',
    color: 'from-red-500/90 to-red-600',
    glowColor: 'group-hover:shadow-red-500/20',
    status: 'Coming Soon',
  },
  {
    name: 'Dropbox',
    description: 'Seamlessly analyse and search through your Dropbox files. Transform your cloud storage into an accessible and intelligent knowledge repository.',
    integrationType: 'Knowledge Source',
    logo: '/logos/dropbox2.svg',
    color: 'from-red-500/90 to-red-600',
    glowColor: 'group-hover:shadow-red-500/20',
    status: 'Coming Soon',
  },
  {
    name: 'Custom Integration',
    description: 'Need something specific? We build custom integrations tailored to your unique workflow and requirements.',
    integrationType: 'Knowledge Source',
    icon: Puzzle,
    color: 'from-[#2b9ce5]/90 to-[#2b9ce5]',
    glowColor: 'group-hover:shadow-[#2b9ce5]/20',
    status: 'Contact',
    href: '/contact',
  },
] as const;

interface IntegrationCardProps {
  integration: Integration;
  index: number;
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
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
    y: 40,
    scale: 0.9,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      mass: 0.8,
    },
  },
};

function IntegrationCard({ integration }: IntegrationCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const Card: React.ElementType = integration.href ? Link : 'div';
  const cardProps = integration.href ? { href: integration.href || '#' } : {};

  return (
    <MotionDiv
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("group relative will-change-transform", dmSans.className)}
    >
      <Card
        {...cardProps}
        className={cn(
          'relative block h-full rounded-xl p-6',
          'bg-gradient-to-br from-background/50 to-background/90',
          'border border-primary/5',
          'transition-all duration-500',
          'hover:border-primary/20 hover:shadow-lg',
          integration.glowColor,
          integration.href && 'cursor-pointer',
          dmSans.className
        )}
      >
        {/* Logo & Title */}
        <div className="mb-4 flex items-center justify-between">
          <MotionDiv
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
            ) : (
              integration.icon && <integration.icon className="h-6 w-6 text-[#2b9ce5]" />
            )}
          </MotionDiv>

          {/* Status Badge */}
          {integration.status === 'Coming Soon' ? (
            <span className={cn("inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-500/20", dmSans.className)}>
              Coming Soon
            </span>
          ) : integration.status === 'Contact' ? (
            <span className={cn("inline-flex items-center rounded-full bg-[#2b9ce5]/10 px-3 py-1 text-xs font-medium text-[#2b9ce5] ring-1 ring-inset ring-[#2b9ce5]/20", dmSans.className)}>
              Contact Sales
            </span>
          ) : (
            <div className={cn("flex items-center gap-2", dmSans.className)}>
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#10b981]" />
              <span className="text-xs font-medium text-[#10b981]">Active</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={cn("mb-8 space-y-3", dmSans.className)}>
          <MotionDiv
            initial={false}
            animate={{
              y: isHovered ? -1 : 0,
            }}
            className={cn("bg-gradient-to-br from-foreground to-foreground/90 bg-clip-text text-lg font-bold text-transparent", dmSans.className)}
          >
            {integration.name}
          </MotionDiv>

          <div className={cn("flex items-center gap-2", dmSans.className)}>
            <span className="text-sm text-muted-foreground">Integration Type:</span>
            <span className="text-sm font-medium text-foreground">
              {integration.integrationType}
            </span>
          </div>

          <MotionDiv
            initial={false}
            animate={{
              opacity: isHovered ? 0.9 : 0.7,
            }}
            className={cn("text-sm leading-relaxed text-muted-foreground", dmSans.className)}
          >
            {integration.description}
          </MotionDiv>
        </div>

        {/* Learn More Button - Only for Active integrations and Custom */}
        {(integration.status === 'Active' || integration.status === 'Contact') && (
          <MotionDiv
            initial={false}
            animate={{
              y: isHovered ? 0 : 4,
              opacity: isHovered ? 1 : 0,
            }}
            className="absolute bottom-6 right-6 flex items-center gap-1.5"
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
          </MotionDiv>
        )}

        {/* Animated Background */}
        <div
          className={cn(
            'absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500',
            'bg-gradient-to-br',
            integration.color,
            'group-hover:opacity-[0.03]'
          )}
        />
      </Card>
    </MotionDiv>
  );
}

export function IntegrationsSection() {
  return (
    <section className={cn("relative overflow-hidden py-2", dmSans.className)}>
      {/* Updated Background to match hero.tsx */}
      <div className="absolute inset-0 -z-[1]">
        {/* Static grid background - matching other sections */}
        <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <Container>
        {/* Section Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn("relative mb-16 text-center", dmSans.className)}
        >
          <div className={cn("mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm ring-1 ring-primary/20 backdrop-blur-sm", dmSans.className)}>
            <Network className="mr-2 h-4 w-4 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Seamless Integrations
            </span>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={cn("mb-4 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl", dmSans.className)}>
              Connect With Your Essential Tools
            </h2>
            <p className={cn("mx-auto max-w-2xl text-sm text-muted-foreground sm:text-lg", dmSans.className)}>
              Maximise your AI-powered productivity gains with integrations that compliment your existing workflows.
            </p>
          </MotionDiv>
        </MotionDiv>

        {/* Main Content Container */}
        <div className="relative">
          {/* Integrations Grid */}
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {integrations.map((integration, index) => (
              <IntegrationCard key={integration.name} integration={integration} index={index} />
            ))}
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}
