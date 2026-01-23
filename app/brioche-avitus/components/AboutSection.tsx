'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <section id="about" className="about-interactive">
      <div className="container-interactive">
        <div className="about-grid-interactive">
          <motion.div 
            className="about-text-interactive"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <h2>About Us</h2>
            <p>Brioche is a relaxed South of France inspired bistro located between Marda Loop and Mont Royal. We serve simple yet refined French cuisine, crafted with local ingredients and a warm Mediterranean spirit.</p>
            <p>From brunch to dinner, enjoy comforting classics like brioche sandwiches, seafood dishes, and seasonal specialties all paired with a curated wine list and creative cocktails.</p>
            <p>Whether you're here for a cozy meal, a glass of wine with friends, or to soak in the charm of French hospitality, Brioche brings the flavors and atmosphere of the south of France straight to Calgary.</p>
          </motion.div>
          <motion.div 
            className="about-image-interactive"
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            whileHover={{ rotate: 5, scale: 1.05 }}
          >
            <Image 
              src="/images/brioche-instagram/brioche2.png" 
              alt="Brioche by Avitus"
              fill
              style={{ objectFit: 'cover' }}
              className="about-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
