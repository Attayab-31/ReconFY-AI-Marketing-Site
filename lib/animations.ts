// Simple animation configurations for consistent animations across the site
export const animations = {
  // Page entrance animations
  page: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" }
  },

  // Staggered container animations
  container: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },

  // Staggered item animations
  item: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },

  // Hero section animations
  hero: {
    headline: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    },
    subheadline: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { 
        duration: 0.8, 
        delay: 0.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    },
    cta: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { 
        duration: 0.8, 
        delay: 0.4,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    },
    features: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { 
        duration: 0.8, 
        delay: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  },

  // Section entrance animations
  section: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { 
      duration: 0.7, 
      ease: "easeOut",
      type: "spring",
      stiffness: 60,
      damping: 20
    }
  },

  // Card animations
  card: {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { 
        duration: 0.3, 
        ease: "easeOut"
      }
    }
  },

  // Feature card specific animations
  featureCard: {
    initial: { opacity: 0, y: 50, rotateX: 15 },
    whileInView: { opacity: 1, y: 0, rotateX: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      type: "spring",
      stiffness: 80,
      damping: 20
    },
    hover: {
      y: -10,
      rotateX: 5,
      rotateY: 5,
      scale: 1.02,
      transition: { 
        duration: 0.4, 
        ease: "easeOut"
      }
    }
  }
}

// Optimized stagger delays for different grid layouts
export const staggerDelays = {
  grid2: { staggerChildren: 0.1, delayChildren: 0.1 },
  grid3: { staggerChildren: 0.08, delayChildren: 0.15 },
  grid4: { staggerChildren: 0.06, delayChildren: 0.2 },
  list: { staggerChildren: 0.1, delayChildren: 0.1 }
}

// Performance-optimized viewport settings
export const viewportSettings = {
  once: true,
  margin: "-100px",
  amount: 0.3
}

// Smooth easing functions
export const easing = {
  smooth: [0.25, 0.1, 0.25, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275]
}
