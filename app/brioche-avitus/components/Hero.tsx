'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="hero-interactive">
      <div className="hero-background-image">
        <Image 
          src="/images/brioche-instagram/brioche4.png" 
          alt="Brioche by Avitus Interior"
          fill
          style={{ objectFit: 'cover', opacity: 0.6 }}
          priority
          className="hero-bg-img"
        />
        <div className="hero-gradient-overlay"></div>
      </div>
      <motion.div 
        className="hero-content-interactive"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>Est. 2024</span>
        </motion.div>
        <motion.h1 
          className="title-interactive"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="title-line-1">Brioche</span>
          <span className="title-line-2">by Avitus</span>
        </motion.h1>
        <motion.p 
          className="subtitle-interactive"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          French Bistro in Marda Loop, Calgary
        </motion.p>
        <motion.div 
          className="hero-buttons-interactive"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a 
            href="tel:+14032222222" 
            className="btn btn-primary-interactive"
            whileHover={{ scale: 1.05, y: -3, boxShadow: '0 12px 40px rgba(253, 144, 79, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Call Now</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 6H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.a>
          <motion.a 
            href="#menu" 
            className="btn btn-secondary-interactive"
            whileHover={{ scale: 1.05, y: -3, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Menu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 6H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
      <div className="hero-scroll-indicator">
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
