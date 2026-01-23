'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const CTASection = () => {
  return (
    <section id="contact" className="cta-interactive">
      <div className="cta-background-image">
        <Image 
          src="/images/brioche-instagram/brioche10.png" 
          alt="Brioche by Avitus"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%', opacity: 0.2 }}
        />
      </div>
      <div className="container-interactive">
        <motion.h2
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Visit Our Bistro
        </motion.h2>
        <p>Experience casual French bistro cuisine with thoughtfully curated French wines</p>
        <div className="cta-buttons-interactive">
          <motion.a 
            href="tel:+14032222222" 
            className="btn btn-primary-interactive btn-large"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us
          </motion.a>
          <motion.a 
            href="https://www.opentable.ca/r/brioche-calgary" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary-interactive btn-large"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Table
          </motion.a>
        </div>
      </div>
    </section>
  );
};
