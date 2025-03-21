import type { SpringOptions, Variants } from 'framer-motion'

// Standardized spring configurations - matched with scroll settings
export const springs = {
  // Main scroll spring configuration (base config)
  scroll: {
    stiffness: 30,
    damping: 25,
    mass: 1.5,
  } as SpringOptions,
  
  // Message typing and transitions - slightly snappier
  gentle: {
    stiffness: 35,
    damping: 25,
    mass: 1.2,
  } as SpringOptions,
  
  // UI element responses - quicker for interactivity
  snappy: {
    stiffness: 40,
    damping: 20,
    mass: 1.0,
  } as SpringOptions,
  
  // Playful elements (avatars, icons) - bouncier but controlled
  bouncy: {
    stiffness: 45,
    damping: 15,
    mass: 1.0,
  } as SpringOptions,
} as const

// Consolidated timing constants
export const timings = {
  // Core message timings
  messageTyping: 0.7,      // Base typing duration
  messageThinking: 0.45,   // Thinking state duration
  messagePause: 0.3,       // Pause between states
  
  // Transition timings
  fadeIn: 0.2,            // Fade in elements
  fadeOut: 0.2,           // Fade out elements
  
  // UI feedback timings
  hover: 0.2,             // Hover state transition
  press: 0.1,             // Press state transition
  expand: 0.3,            // Expansion animation
  
  // Buffer and spacing
  buffer: 0.15,           // Animation buffer
  stagger: 0.05,          // Stagger delay between elements
} as const

// Animation variants aligned with timing constants
export const variants = {
  // Message container animations
  message: {
    initial: { 
      opacity: 0,
      y: 10,
      scale: 0.98
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: timings.messageTyping,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: timings.fadeOut,
        ease: "easeIn"
      }
    }
  } as Variants,

  // Thinking state with controlled timing
  thinking: {
    initial: { 
      opacity: 0,
      scale: 0.95,
    },
    animate: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: timings.messageThinking,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: timings.fadeOut,
        ease: "easeIn"
      }
    }
  } as Variants,

  // Source reference with coordinated timing
  source: {
    initial: { 
      opacity: 0,
      y: 5,
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: timings.fadeIn,
        ease: "easeOut",
        delay: timings.buffer
      }
    }
  } as Variants,

  // Chat frame with smooth transitions
  chatFrame: {
    initial: { 
      opacity: 0,
      scale: 0.99
    },
    animate: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: timings.expand,
        ease: "easeOut"
      }
    }
  } as Variants,
} as const

// Clean gradient configurations
export const gradients = {
  // Subtle background gradients
  subtle: {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  },

  // Message highlight gradients
  highlight: {
    animate: {
      opacity: [0.1, 0.15, 0.1],
      scale: [1, 1.01, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
} as const