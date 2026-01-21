import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './OrderStore.css';

// TypeScript declaration for Instafeed
declare global {
  interface Window {
    Instafeed: new (options: InstafeedOptions) => InstafeedInstance;
  }
}

interface InstafeedOptions {
  accessToken?: string;
  target: HTMLElement | string;
  get: string;
  userId?: string;
  limit?: number;
  resolution?: string;
  template?: string;
}

interface InstafeedInstance {
  run: () => void;
}

const BriocheAvitus = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const instagramFeedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show temporary image immediately (until API keys are available)
    if (instagramFeedRef.current) {
      showTemporaryImage();
    }
  }, []);

  const showTemporaryImage = () => {
    if (!instagramFeedRef.current) {
      return;
    }
    
    instagramFeedRef.current.innerHTML = '';
    
    const container = document.createElement('div');
    container.className = 'instagram-temporary';
    container.innerHTML = `
      <a href="https://www.instagram.com/briochebyavitus.yyc/" 
         target="_blank" 
         rel="noopener noreferrer"
         class="instagram-temporary-link">
        <span class="instagram-temporary-text">
          Follow @briochebyavitus.yyc on Instagram
        </span>
      </a>
    `;
    
    instagramFeedRef.current.appendChild(container);
  };

  const initializeFeed = () => {
    if (window.Instafeed && instagramFeedRef.current) {
      const accessToken = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;
      const userId = process.env.REACT_APP_INSTAGRAM_USER_ID;

      if (!accessToken || !userId) {
        // Fallback: Show Instagram profile link and instructions
        if (instagramFeedRef.current) {
          instagramFeedRef.current.innerHTML = `
            <div class="instagram-fallback">
              <div class="instagram-fallback-content">
                <h3>Follow Us on Instagram</h3>
                <p>Check out our latest posts and stories!</p>
                <a href="https://www.instagram.com/briochebyavitus.yyc/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="instagram-fallback-link">
                  <span>@briochebyavitus.yyc</span>
                </a>
                <p class="instagram-note">To display live feed, configure Instagram API tokens in .env.local</p>
              </div>
            </div>
          `;
        }
        return;
      }

      try {
        const feed = new window.Instafeed({
          accessToken: accessToken,
          target: instagramFeedRef.current,
          get: 'user',
          userId: userId,
          limit: 6,
          resolution: 'standard_resolution',
          template: `
            <div class="instagram-item">
              <a href="{{link}}" target="_blank" rel="noopener noreferrer">
                <img src="{{image}}" alt="{{caption}}" loading="lazy" />
                <div class="instagram-overlay">
                  <p>{{caption}}</p>
                </div>
              </a>
            </div>
          `,
        });
        feed.run();
      } catch (error) {
        console.error('Error initializing Instagram feed:', error);
      }
    }
  };

  return (
    <div className="order-store">
      {/* Animated Header */}
      <motion.header 
        className="animated-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="header-wrapper">
          <motion.a 
            href="#home" 
            className="logo-animated"
            whileHover={{ scale: 1.1 }}
          >
            <span className="logo-text">Brioche by Avitus</span>
          </motion.a>
          <nav className="nav-animated">
            <motion.a href="#menu" whileHover={{ scale: 1.1 }}>Menu</motion.a>
            <motion.a href="#about" whileHover={{ scale: 1.1 }}>About</motion.a>
            <motion.a href="#instagram" whileHover={{ scale: 1.1 }}>Instagram</motion.a>
            <motion.a href="#location" whileHover={{ scale: 1.1 }}>Location</motion.a>
            <motion.a href="#contact" whileHover={{ scale: 1.1 }}>Contact</motion.a>
          </nav>
        </div>
      </motion.header>

      {/* Interactive Hero */}
      <section className="hero-interactive">
        <div className="hero-background-image">
          <div className="hero-gradient-overlay"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-floating-shapes">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        <motion.div 
          className="hero-content-interactive"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>Est. 2024</span>
          </motion.div>
          <motion.h1 
            className="title-interactive"
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1000 }}
          >
            <span className="title-line-1">Brioche</span>
            <span className="title-line-2">by Avitus</span>
          </motion.h1>
          <motion.p 
            className="subtitle-interactive"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Casual French Bistro & Wine Bar in Marda Loop
          </motion.p>
          <motion.div 
            className="hero-buttons-interactive"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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

      {/* Interactive Card Menu */}
      <section id="menu" className="menu-interactive">
        <div className="container-interactive">
          <motion.h2 
            className="section-title-interactive"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            viewport={{ once: true }}
          >
            Notre Menu
          </motion.h2>
          
          <div className="menu-cards-interactive">
            {[
              { title: 'Small Bites', items: [
                { name: 'Salmon Rillettes', price: '$18', desc: 'House-made salmon rillettes' },
                { name: 'Roasted Carrots & Burrata', price: '$21', desc: 'Roasted carrots with fresh burrata' },
                { name: 'Spread of the Day', price: '$14', desc: 'Rotating daily spread selection' }
              ]},
              { title: 'Brioche Sandwiches', items: [
                { name: 'Shrimp Roll', price: '$24', desc: 'Picture-perfect shrimp roll on brioche' },
                { name: 'Lobster Roll', price: '$36', desc: 'Premium lobster roll on brioche' },
                { name: 'Croque Monsieur', price: '$24', desc: 'Classic French toasted ham and cheese sandwich' }
              ]},
              { title: 'Mains & Add-ons', items: [
                { name: 'Boeuf Bourguignon', price: '$43', desc: 'Hearty French beef stew' },
                { name: 'Potatoes', price: '$12', desc: 'Side of roasted potatoes' },
                { name: 'Siberian Caviar', price: '$49', desc: '10 grams of premium caviar' }
              ]},
              { title: 'French Wines', items: [
                { name: 'Curated Selection', price: 'By Glass', desc: 'All French wines with lower mark-ups' },
                { name: 'Wine List', price: 'Various', desc: 'Thoughtfully curated French wine selection' }
              ]}
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                className="menu-card-interactive"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                onHoverStart={() => setHoveredCard((prev) => prev !== idx ? idx : prev)}
                onHoverEnd={() => setHoveredCard((prev) => prev === idx ? null : prev)}
                animate={{ 
                  rotateY: hoveredCard === idx ? 5 : 0,
                  scale: hoveredCard === idx ? 1.05 : 1
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <h3 className="card-title-interactive">{category.title}</h3>
                <div className="card-items-interactive">
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.name}
                      className="item-card-interactive"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <div className="item-header-interactive">
                        <h4>{item.name}</h4>
                        <span className="price-interactive">{item.price}</span>
                      </div>
                      <p>{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Features */}
          <div className="premium-interactive">
            <motion.div 
              className="premium-card-interactive"
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
              animate={{ 
                boxShadow: [
                  '0 10px 30px rgba(253,144,79,0.2)',
                  '0 15px 40px rgba(253,144,79,0.4)',
                  '0 10px 30px rgba(253,144,79,0.2)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h3>Reservations</h3>
              <p>Book your table online</p>
              <p className="order-link-note">
                <a href="https://www.opentable.ca/r/brioche-calgary" target="_blank" rel="noopener noreferrer">Reserve on OpenTable</a>
              </p>
            </motion.div>
            <motion.div 
              className="premium-card-interactive"
              whileHover={{ 
                scale: 1.1, 
                rotate: -5,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
            >
              <h3>The Tasting Room</h3>
              <p>Upstairs events venue & wine education</p>
              <p className="order-link-note">
                <a href="https://www.instagram.com/thetastingroom.yyc/" target="_blank" rel="noopener noreferrer">Follow @thetastingroom.yyc</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About with Animation */}
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
              <p>Brioche by Avitus is a casual French bistro in Marda Loop, born from the collaboration between Yann de la Chanonie, the wine expert behind Avitus wine bar, and Tristan Chaboche, a French chef who arrived in Canada to help create a genuinely French menu.</p>
              <p>With a homey and inviting 30-seat space, we focus on casual bistro-style food paired with thoughtfully curated French wines. Our menu features picture-perfect shrimp and lobster rolls, hearty boeuf Bourguignon, and rotating daily specials, all served in a warm, welcoming atmosphere.</p>
              <p>We're proud to bring authentic French bistro cuisine to Calgary, where French restaurants are surprisingly few for a city of 1.5 million people.</p>
            </motion.div>
            <motion.div 
              className="about-image-interactive"
              initial={{ opacity: 0, x: 100, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <div className="about-image-placeholder">
                <div className="about-image-accent" />
                <p>Authentic French bistro experience in Marda Loop.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Interactive */}
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
              <div className="info-item-interactive">
              <h3>Address</h3>
                <p>1512 29 Avenue Southwest<br />Calgary, AB T2T 1M3</p>
              </div>
              <div className="info-item-interactive">
              <h3>Hours</h3>
                <p><strong>Tuesday - Sunday:</strong><br />11:30 AM onwards</p>
                <p>Open for both lunch and dinner</p>
                <p><strong>Monday:</strong> Closed</p>
              </div>
              <div className="info-item-interactive">
              <h3>Contact</h3>
                <p><a href="tel:+14032222222">Call Us</a></p>
                <p><a href="https://www.instagram.com/briochebyavitus.yyc/" target="_blank" rel="noopener noreferrer">View Instagram</a></p>
              </div>
            </motion.div>
            <motion.div 
              className="map-interactive"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="location-image-container">
                <div className="location-image-placeholder">
                  <p>Find us in the heart of Marda Loop.</p>
                </div>
              </div>
              <div className="map-overlay">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.804868254925!2d-114.123456!3d51.045678"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section id="instagram" className="instagram-section">
        <div className="container-interactive">
          <motion.h2 
            className="section-title-interactive"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            viewport={{ once: true }}
          >
            Follow Us on Instagram
          </motion.h2>
          <motion.p 
            className="instagram-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
          <div 
            ref={instagramFeedRef} 
            className="instagram-feed"
            id="instafeed"
          ></div>
        </div>
      </section>

      {/* CTA Interactive */}
      <section id="contact" className="cta-interactive">
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

      {/* Animated Footer */}
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
    </div>
  );
};

export default BriocheAvitus;
