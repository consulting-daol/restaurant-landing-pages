'use client';

import { motion } from 'framer-motion';
import { useInstagramFeed } from './hooks/useInstagramFeed';

export const InstagramSection = () => {
  const { instagramFeedRef } = useInstagramFeed();

  return (
    <section id="instagram" className="instagram-section">
      <div className="container-interactive">
        <motion.h2 
          className="section-title-interactive"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem' }}
        >
          Follow Us on Instagram
        </motion.h2>
        <motion.p 
          className="instagram-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}
        >
          <a 
            href="https://www.instagram.com/briochebyavitus.yyc/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link"
          >
            @briochebyavitus.yyc
          </a>
        </motion.p>
      </div>
      <div 
        ref={instagramFeedRef} 
        className="instagram-feed-fullwidth"
        id="instafeed"
      >
        {/* Instagram feed will be loaded here */}
      </div>
    </section>
  );
};
