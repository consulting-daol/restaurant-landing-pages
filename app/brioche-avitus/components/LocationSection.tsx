'use client';

import { motion } from 'framer-motion';
import { InfoItem } from './InfoItem';

export const LocationSection = () => {
  return (
    <section id="location" className="location-interactive">
      <div className="container-interactive">
        <div className="location-grid-interactive">
          <motion.div 
            className="location-info-interactive"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Visit Us</h2>
            <InfoItem
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              }
              title="Address"
            >
              <p>1512 29 Avenue Southwest<br />Calgary, AB T2T 1M3</p>
            </InfoItem>
            <InfoItem
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              }
              title="Hours"
            >
              <p><strong>Tuesday - Sunday:</strong><br />11:30 AM onwards</p>
              <p>Open for both lunch and dinner</p>
              <p><strong>Monday:</strong> Closed</p>
            </InfoItem>
            <InfoItem
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              }
              title="Contact"
            >
              <p><a href="tel:+14032222222">Call Us</a></p>
              <p><a href="https://www.instagram.com/briochebyavitus.yyc/" target="_blank" rel="noopener noreferrer">View Instagram</a></p>
            </InfoItem>
          </motion.div>
          <motion.div 
            className="map-interactive"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.3638929130375!2d-114.0953997!3d51.02789949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371715b799b9515%3A0x4cc016feca42c203!2sBrioche%20by%20AVITUS!5e0!3m2!1sen!2sca!4v1769015962222!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
