'use client';

import * as React from 'react';
import { motion, AnimatePresence, useMotionValue, useInView } from 'framer-motion';
import { Sparkles, RefreshCw } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { ChatFrame } from '@/components/ui/chat-frame';
import { EmployeeMessage } from './chat/employee-message';
import { CentrusMessage } from './chat/centrus-message';
import { ThinkingState } from './chat/thinking-state';
import { homeContent } from '@/content/home';
import { Button } from '@/components/ui/button';
import { springs } from '@/lib/utils/chat-animations';

const { conversations } = homeContent.chatShowcase;

export function InteractiveDemo() {
  // Current conversation
  const [activeIndex, setActiveIndex] = React.useState(0);
  const conversation = conversations[activeIndex];
  const [isRestarting, setIsRestarting] = React.useState(false);
  
  // Reference to the section for intersection observer
  const sectionRef = React.useRef(null);
  // Track if section is in view
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  // Track if animation has been initialized
  const [hasInitialized, setHasInitialized] = React.useState(false);
  
  // Use motion values for smoother typing animations
  const employeeProgress = useMotionValue(0);
  const centrusProgress = useMotionValue(0);
  const sourceOpacity = useMotionValue(0);
  
  // Visibility states
  const [showThinking, setShowThinking] = React.useState(false);
  const [showCentrus, setShowCentrus] = React.useState(false);
  const [employeeTyped, setEmployeeTyped] = React.useState(false);
  const [centrusTyped, setCentrusTyped] = React.useState(false);
  
  // Animation timers
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const resetTimersRef = React.useRef<() => void>(() => {});
  
  // Animation parameters
  const timing = {
    employeeTypingDuration: 1200,
    thinkingDelay: 400,
    thinkingDuration: 1200,
    responseDelay: 500,
    responseTypingDuration: 1500,
    sourceDelay: 600,
    conversationDelay: 2000
  };

  // Restart demo function
  const handleRestart = () => {
    setIsRestarting(true);
    resetTimersRef.current();
    
    setTimeout(() => {
      setActiveIndex(0);
      
      // Reset all states
      employeeProgress.set(0);
      centrusProgress.set(0);
      sourceOpacity.set(0);
      setShowThinking(false);
      setShowCentrus(false);
      setEmployeeTyped(false);
      setCentrusTyped(false);
      
      setIsRestarting(false);
      startSequence();
    }, 300);
  };

  // Main animation sequence
  const startSequence = React.useCallback(() => {
    // Clear any existing timers
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    const timers: NodeJS.Timeout[] = [];
    
    // Create a function to clear all timers
    resetTimersRef.current = () => {
      timers.forEach(clearTimeout);
      timers.length = 0;
    };
    
    // Add timer with tracking
    const addTimer = (callback: () => void, delay: number) => {
      const timer = setTimeout(() => {
        callback();
        // Remove this timer from the array
        const index = timers.indexOf(timer);
        if (index > -1) {
          timers.splice(index, 1);
        }
      }, delay);
      timers.push(timer);
      return timer;
    };
    
    // Reset state
    employeeProgress.set(0);
    centrusProgress.set(0);
    sourceOpacity.set(0);
    setShowThinking(false);
    setShowCentrus(false);
    setEmployeeTyped(false);
    setCentrusTyped(false);
    
    // Start employee typing animation
    const startTime = Date.now();
    const duration = timing.employeeTypingDuration;
    
    const animateEmployeeTyping = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      employeeProgress.set(progress);
      
      if (progress < 1) {
        // Continue animation
        requestAnimationFrame(animateEmployeeTyping);
      } else {
        // Employee message is complete
        setEmployeeTyped(true);
        
        // Show thinking state after a delay
        addTimer(() => {
          setShowThinking(true);
          
          // Show centrus response after thinking
          addTimer(() => {
            setShowThinking(false);
            setShowCentrus(true);
            
            // Start centrus typing animation
            const centrusStartTime = Date.now();
            const centrusDuration = timing.responseTypingDuration;
            
            const animateCentrusTyping = () => {
              const centrusElapsed = Date.now() - centrusStartTime;
              const progressValue = Math.min(centrusElapsed / centrusDuration, 1);
              
              // Update motion values - fix the naming collision
              centrusProgress.set(progressValue);
              
              if (progressValue < 1) {
                // Continue animation
                requestAnimationFrame(animateCentrusTyping);
              } else {
                // Response is complete
                setCentrusTyped(true);
                
                // Show source after a delay
                addTimer(() => {
                  // Animate source opacity
                  const sourceStartTime = Date.now();
                  const sourceDuration = 400;
                  
                  const animateSourceIn = () => {
                    const sourceElapsed = Date.now() - sourceStartTime;
                    const sourceProgress = Math.min(sourceElapsed / sourceDuration, 1);
                    
                    sourceOpacity.set(sourceProgress);
                    
                    if (sourceProgress < 1) {
                      requestAnimationFrame(animateSourceIn);
                    } else {
                      // After a delay, move to next conversation
                      addTimer(() => {
                        const nextIndex = (activeIndex + 1) % conversations.length;
                        setActiveIndex(nextIndex);
                        // UseEffect will trigger the new sequence
                      }, timing.conversationDelay);
                    }
                  };
                  
                  // Start source animation
                  requestAnimationFrame(animateSourceIn);
                }, timing.sourceDelay);
              }
            };
            
            // Start centrus typing animation
            requestAnimationFrame(animateCentrusTyping);
          }, timing.thinkingDuration);
        }, timing.thinkingDelay);
      }
    };
    
    // Start employee typing animation
    requestAnimationFrame(animateEmployeeTyping);
    
  }, [activeIndex, employeeProgress, centrusProgress, sourceOpacity]);
  
  // Start animation when in view
  React.useEffect(() => {
    // Only start the animation sequence when component comes into view
    // and if the animation hasn't been initialized yet
    if (isInView && !hasInitialized && !isRestarting) {
      setHasInitialized(true);
      startSequence();
    }
  }, [isInView, hasInitialized, isRestarting, startSequence]);
  
  // Reset animation when activeIndex changes (for subsequent conversations)
  React.useEffect(() => {
    if (hasInitialized && !isRestarting) {
      startSequence();
    }
    
    return () => {
      resetTimersRef.current();
    };
  }, [activeIndex, isRestarting, hasInitialized, startSequence]);

  return (
    <section ref={sectionRef} className="relative pb-16 md:pb-24">
      <div className="overflow-hidden px-4 md:px-0 md:py-0">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="bg-grid-white/5 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
        </div>

        <Container className="relative flex flex-col justify-center md:mt-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center md:mb-12"
          >
            <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs md:mb-4 md:px-4 md:text-sm">
              <Sparkles className="mr-1.5 h-3 w-3 text-primary md:mr-2 md:h-4 md:w-4" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Interactive Demo
              </span>
            </div>

            <h2 className="mb-3 font-heading text-xl font-bold tracking-tight md:mb-4 md:text-2xl lg:text-4xl">
              <span className="hidden md:inline">Your Team's Questions, </span>
              <span className="md:hidden">Your Team's Questions,<br /></span>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Instantly Answered
              </span>
            </h2>
            
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
              See how Centrus AI helps your team find information instantly, without endless searching.
            </p>
          </motion.div>

          {/* Chat demo container */}
          <div className="mx-auto w-full max-w-4xl relative">
            <ChatFrame 
              frameTitle={conversation.chatTitle} 
              className="h-[400px] md:h-[500px] lg:h-[550px]"
            >
              <div className="flex flex-col space-y-6 h-full p-3 md:p-6">
                <AnimatePresence mode="wait">
                  <div key={activeIndex} className="space-y-6 md:space-y-8">
                    {/* Employee message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={springs.gentle}
                    >
                      <EmployeeMessage
                        text={conversation.question}
                        tags={conversation.tags as unknown as string[]}
                        timestamp="Just now"
                        scrollProgress={employeeProgress}
                      />
                    </motion.div>

                    {/* Thinking state */}
                    {showThinking && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ThinkingState />
                      </motion.div>
                    )}

                    {/* Centrus Response */}
                    {showCentrus && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={springs.gentle}
                      >
                        <CentrusMessage
                          text={conversation.answer}
                          source={conversation.source}
                          timestamp="Just now"
                          scrollProgress={centrusProgress}
                          sourceOpacity={sourceOpacity}
                        />
                      </motion.div>
                    )}
                  </div>
                </AnimatePresence>
              </div>
            </ChatFrame>
            
            {/* Demo controls */}
            <div className="mt-6 flex justify-center">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleRestart}
                disabled={isRestarting}
                className="bg-background/50 backdrop-blur-sm"
              >
                <RefreshCw className="mr-2 h-3.5 w-3.5" />
                Restart Demo
              </Button>
            </div>
            
            {/* Progress indicators */}
            <div className="mt-4 flex justify-center gap-2">
              {conversations.map((_, index) => (
                <div 
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                    index === activeIndex 
                      ? 'bg-primary' 
                      : 'bg-primary/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}