'use client';

import * as React from 'react';
import { checkTargetForNewValues, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { DM_Sans } from 'next/font/google';
import { Container } from '@/components/ui/container';
import { ChatFrame } from '@/components/ui/chat-frame';
import { EmployeeMessage } from './chat/employee-message';
import { CentrusMessage } from './chat/centrus-message';
import { springs } from '@/lib/utils/chat-animations';
import { useChatScroll } from '@/lib/hooks/use-chat-scroll';
import { homeContent } from '@/content/home';
import { cn } from '@/lib/utils';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const { conversations } = homeContent.chatShowcase;

export function QuestionsShowcase() {
  const { containerRef, scrollHeight, scrollDirection, getMessageProgress } = useChatScroll({
    totalMessages: conversations.length,
    // smoothScroll: true,
    // mobileScrollMultiplier: 0.5,
  });

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [titles, setTitles] = React.useState<boolean[]>([false, false, false]);
  const progressRefs = React.useRef<{ [key: number]: boolean }>({});

  // Track typing completion for each message set
  React.useEffect(() => {
    conversations.forEach((_, index) => {
      const progress = getMessageProgress(index);

      const handleTypingProgress = (latest: number) => {
        if (latest === 1) {
          progressRefs.current[index] = true;
          setTitles(prev => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
        } else {
          progressRefs.current[index] = false;
          setTitles(prev => {
            const next = [...prev];
            next[index] = false;
            return next;
          });
        }
      };

      const handleSetVisibility = (latest: number) => {
        if (latest > 0 && progress.employeeTyping.get() === 1) {
          progressRefs.current[index] = true;
          setTitles(prev => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
        } else if (progress.employeeTyping.get() === 1) {
          progressRefs.current[index] = false;
          setTitles(prev => {
            const next = [...prev];
            next[index] = false;
            return next;
          });
        }
      };

      // const unsubscribeAnswerTyping = progress.source.on('change', handleTypingProgress);
      const unsubscribeTyping = progress.employeeTyping.on('change', handleTypingProgress);
      const unsubscribeVisible = progress.setVisible.on('change', handleSetVisibility);

      return () => {
        // unsubscribeAnswerTyping();
        unsubscribeTyping();
        unsubscribeVisible();
      };
    });
  }, [getMessageProgress]);

  // Get current title based on titles array
  const currentTitle = React.useMemo(() => {
    const activeIndex = titles.findIndex(isVisible => isVisible);
    return activeIndex >= 0 ? conversations[activeIndex]?.chatTitle : '';
  }, [titles]);

  return (
    <section
      ref={containerRef}
      style={{ minHeight: scrollHeight }}
      className={cn("relative pb-16 md:pb-0", dmSans.className)}
    >
      {/* Sticky viewport section - Updated classes */}
      <div className="sticky top-0 h-full overflow-hidden px-4   md:h-full md:px-0 md:py-0">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e508_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(white,transparent_85%)]" />

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <Container className="relative flex h-full flex-col  justify-center md:mt-10  ">
          {/* Section header - Updated responsive classes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center md:mb-12"
          >
            <div className={cn("mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs md:mb-4 md:px-4 md:text-sm", dmSans.className)}>
              <Sparkles className="mr-1.5 h-3 w-3 text-primary md:mr-2 md:h-4 md:w-4" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Interactive Demo
              </span>
            </div>

            <h2 className={cn("mb-3 text-xl font-bold tracking-tight md:mb-4 md:text-2xl lg:text-4xl", dmSans.className)}>
              <span className="hidden md:inline">Your Team's Questions, </span>
              <span className="md:hidden">Your Team's Questions,<br /></span>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Instantly Answered
              </span>
            </h2>
          </motion.div>

          {/* Chat frame container - Updated responsive classes */}
          <div className="mx-auto w-full max-w-4xl  ">
            <ChatFrame frameTitle={currentTitle} className={cn("h-[400px] md:h-[500px] lg:h-[550px]", dmSans.className)}>
              {/* Message container - Updated padding */}
              <div className="relative  h-full  p-3 md:p-6">
                {conversations.map((conversation, index) => {
                  const progress = getMessageProgress(index);

                  return (
                    <motion.div
                      key={index}
                      style={{ opacity: progress.setVisible }}
                      className="px- absolute inset-x-0  md:px-4"
                    >
                      <div className="space-y-4 md:space-y-8">
                        {/* Employee message */}
                        <motion.div style={{ opacity: progress.employeeBubble }}>
                          <EmployeeMessage
                            text={conversation.question}
                            tags={conversation.tags}
                            scrollProgress={progress.employeeTyping}
                            scrollDirection={scrollDirection}
                            messageIndex={index}
                          />
                        </motion.div>

                        {/* Centrus response container */}
                        <div className="relative min-h-[100px]">
                          {/* Thinking state */}
                          <motion.div
                            style={{ opacity: progress.thinking }}
                            className="absolute inset-0"
                          >
                            <CentrusMessage
                              isThinking={true}
                              text=""
                              scrollDirection={scrollDirection}
                              messageIndex={index}
                            />
                          </motion.div>

                          {/* Answer */}
                          <motion.div
                            style={{ opacity: progress.answerBubble }}
                            className="relative"
                          >
                            <CentrusMessage
                              text={conversation.answer}
                              source={conversation.source}
                              scrollProgress={progress.answerTyping}
                              sourceOpacity={progress.source}
                              scrollDirection={scrollDirection}
                              messageIndex={index}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </ChatFrame>
          </div>
        </Container>
      </div>
    </section>
  );
}
