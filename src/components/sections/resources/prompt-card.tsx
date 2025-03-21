'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Prompt } from '@/content/prompt-library';

interface PromptCardProps {
  prompt: Prompt;
  index: number;
}

export function PromptCard({ prompt, index }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(prompt.text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      }

      // Fallback for mobile
      const textArea = document.createElement('textarea');
      textArea.value = prompt.text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        textArea.remove();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text:', err);
        textArea.remove();
      }
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative h-full overflow-hidden
          before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b
          before:from-border before:to-border/0 before:p-[1px]
        `}
      >
        <div className="relative h-full rounded-xl bg-gradient-to-b from-background/80 to-background/40 p-6 backdrop-blur-xl">
          {/* Header */}
          <div className="mb-4 flex items-center gap-3">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="rounded-lg p-2"
              style={{
                backgroundColor: prompt.iconBg + '20',
              }}
            >
              <Lightbulb className="h-5 w-5 transition-colors" style={{ color: prompt.iconBg }} />
            </motion.div>
            <div>
              <p className="font-medium">{prompt.role}</p>
              <p className="text-sm text-muted-foreground">{prompt.category}</p>
            </div>
          </div>

          {/* Prompt Text */}
          <div className="relative">
            <p className="mb-6 text-sm leading-relaxed">{prompt.text}</p>

            {/* Copy Button */}
            <AnimatePresence>
              <motion.div
                className="relative"
                animate={{ y: isHovered ? 0 : 8, opacity: isHovered ? 1 : 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="group relative w-full gap-2 overflow-hidden transition-all duration-300"
                  onClick={handleCopy}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    handleCopy();
                  }}
                  style={{
                    backgroundColor: copied ? '#10B981' : isHovered ? prompt.iconBg : undefined,
                    color: copied || isHovered ? 'white' : undefined,
                    borderColor: isHovered ? 'transparent' : undefined,
                  }}
                >
                  <div className="relative h-8 w-full">
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="absolute inset-0 flex items-center justify-center gap-2"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Prompt Copied Successfully!</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="absolute inset-0 flex items-center justify-center gap-2"
                        >
                          <Copy className="h-4 w-4" />
                          <span>Copy {prompt.role} Prompt</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute right-0 top-0 h-32 w-32 opacity-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, ${prompt.iconBg}40, transparent 70%)`,
              opacity: isHovered ? 0.2 : 0.1,
            }}
          />
        </div>
      </Card>
    </motion.div>
  );
}
