import { Variants } from "framer-motion";

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'up', delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay
      }
    }
  };
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const cardHover: Variants = {
  idle: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.02,
    y: -10,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

export const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.2,
    },
  },
};
