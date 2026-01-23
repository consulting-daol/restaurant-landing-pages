'use client';

import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer 
      className="footer-interactive"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container-interactive">
        <p>&copy; 2025 Brioche by Avitus. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};
