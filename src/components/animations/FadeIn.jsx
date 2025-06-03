'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FadeIn = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = '',
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 }
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : {}}
      transition={{ 
        duration, 
        delay, 
        ease: "easeOut" 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;