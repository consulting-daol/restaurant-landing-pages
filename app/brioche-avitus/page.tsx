'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import '../../src/restaurants/OrderStore.css';

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
  error?: (error: any) => void;
}

interface InstafeedInstance {
  run: () => void;
}

export default function BriocheAvitusPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const instagramFeedRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const premiumContainerRef = useRef<HTMLDivElement>(null);
  
  const toggleCardExpansion = (idx: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(idx)) {
        newSet.delete(idx);
      } else {
        newSet.add(idx);
      }
      return newSet;
    });
  };

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
         className="instagram-temporary-link">
        <img 
          src="/images/brioche-instagram/temp_instagram.png" 
          alt="Brioche by Avitus Instagram Feed" 
          className="instagram-temporary-img"
        />
      </a>
    `;
    
    instagramFeedRef.current.appendChild(container);
  };

  const loadAndInitializeFeed = () => {
    // Check if already loaded
    if (window.Instafeed) {
      initializeFeed();
      return;
    }

    // Load from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js';
    script.async = true;
    script.onload = () => {
      if (window.Instafeed) {
        initializeFeed();
      } else {
        console.warn('Instafeed.js loaded but window.Instafeed is not available');
        showFallback();
      }
    };
    script.onerror = () => {
      console.warn('Failed to load Instafeed.js from CDN');
      showFallback();
    };
    
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="instafeed"]');
    if (!existingScript) {
      document.body.appendChild(script);
    } else {
      // If script exists, wait a bit and try to initialize
      setTimeout(() => {
        if (window.Instafeed) {
          initializeFeed();
        } else {
          showFallback();
        }
      }, 500);
    }
  };

  const showFallback = () => {
    if (!instagramFeedRef.current) {
      return;
    }
    
    // Clear any existing content
    instagramFeedRef.current.innerHTML = '';
    
    // Create fallback content
    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = 'instagram-fallback';
    fallbackDiv.innerHTML = `
      <div class="instagram-fallback-content">
        <div class="instagram-icon">📸</div>
        <h3>Follow Us on Instagram</h3>
        <p>Check out our latest posts and stories!</p>
        <a href="https://www.instagram.com/briochebyavitus.yyc/" 
           target="_blank" 
           rel="noopener noreferrer"
           class="instagram-fallback-link">
          <span>@briochebyavitus.yyc</span>
          <span class="instagram-arrow">→</span>
        </a>
        <p class="instagram-note">Visit our Instagram to see all our latest posts!</p>
      </div>
    `;
    
    instagramFeedRef.current.appendChild(fallbackDiv);
  };

  const initializeFeed = () => {
    if (!instagramFeedRef.current) {
      showFallback();
      return;
    }

    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;

    // If no tokens, show fallback
    if (!accessToken || !userId) {
      showFallback();
      return;
    }

    // Try to initialize Instafeed
    if (window.Instafeed) {
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
          error: (error) => {
            console.error('Instafeed error:', error);
            showFallback();
          },
        });
        feed.run();
      } catch (error) {
        console.error('Error initializing Instagram feed:', error);
        showFallback();
      }
    } else {
      showFallback();
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
            <Image 
              src="/images/brioche-instagram/logo.png" 
              alt="Brioche by Avitus"
              width={350}
              height={100}
              className="logo-image"
              priority
            />
          </motion.a>
          <motion.button
            className={`mobile-nav-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
          >
            <span></span>
            <span></span>
          </motion.button>
          <nav className={`nav-animated ${isMobileMenuOpen ? 'open' : ''}`}>
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
          
          <div className="menu-cards-wrapper" ref={menuContainerRef}>
            <motion.div 
              className="menu-cards-interactive"
              drag="x"
              dragConstraints={menuContainerRef}
              dragElastic={0.1}
              dragMomentum={true}
              dragDirectionLock={true}
              dragPropagation={false}
              whileDrag={{ cursor: 'grabbing' }}
              style={{ 
                willChange: 'transform',
                touchAction: 'pan-x'
              }}
            >
            {[
              { title: 'Starters', icon: '🥗', image: '/images/brioche-instagram/briochue_insta1.jpg', items: [
                { name: 'Cheese Board', price: '$18', desc: '' },
                { name: 'Homemade Cheese', price: '$18', desc: '' },
                { name: 'Olives', price: '$12', desc: '' },
                { name: 'Spread Of The Day', price: '$14', desc: 'Rotating daily spread selection' },
                { name: 'Chorizo', price: '$9', desc: '' },
                { name: 'Egg Mayonnaise Hareng', price: '$17', desc: '' },
                { name: 'Rillette De Saumon', price: '$18', desc: '' },
                { name: 'Salmon Rillettes', price: '$18', desc: 'House-made salmon rillettes' },
                { name: 'Smoked Duck Breast', price: '$17', desc: '' },
                { name: 'Roasted Carrots And Burrata', price: '$21', desc: '' },
                { name: 'Baked Baby Potatoes', price: '$12', desc: '' },
                { name: 'Potatoes', price: '$12', desc: 'Side of roasted potatoes' },
                { name: 'Beets Salad', price: '$10', desc: '' }
              ], sauces: 'Beet ketchup $5, Tartar Sauce $5' },
              { title: 'Main', icon: '🥐', image: '/images/brioche-instagram/briochue_insta11.jpg', items: [
                { name: 'Shrimp Rolls', price: '$24', desc: 'Picture-perfect shrimp roll on brioche' },
                { name: 'Lobster Rolls', price: '$36', desc: 'Premium lobster roll on brioche' },
                { name: 'Végé Rolls', price: '$22', desc: '' },
                { name: 'Croques Monsieur', price: '$24', desc: 'Classic French toasted ham and cheese sandwich' },
                { name: 'Boeuf Bourguignon', price: '$43', desc: 'Hearty French beef stew' },
                { name: 'Siberian Caviar', price: '$49', desc: '10 grams of premium caviar' }
              ]},
              { title: 'Desserts', icon: '🍰', image: '/images/brioche-instagram/desert2.jpg', items: [
                { name: 'Brioche Perdue', price: '$17', desc: '(french toast)' },
                { name: 'Créme Brulée', price: '$14', desc: '' },
                { name: 'Chocolate Mousse', price: '$12', desc: '' }
              ]},
              { title: 'French Wines', icon: '🍷', image: '/images/brioche-instagram/briochue_insta7.jpg', items: [
                { name: 'Curated Selection', price: 'By Glass', desc: 'All French wines with lower mark-ups' },
                { name: 'Wine List', price: 'Various', desc: 'Thoughtfully curated French wine selection' }
              ]}
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                className={`menu-card-interactive ${expandedCards.has(idx) ? 'expanded' : ''}`}
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
                <div className="card-icon-interactive">{category.icon}</div>
                {category.image && (
                  <div className="menu-card-image">
                    <Image 
                      src={category.image} 
                      alt={category.title}
                      width={400}
                      height={300}
                      className="menu-card-img"
                      style={{ 
                        objectPosition: category.title === 'Main' || category.title === 'Starters' || category.title === 'French Wines'
                          ? 'center bottom' 
                          : 'center 30%'
                      }}
                    />
                  </div>
                )}
                <h3 
                  className="card-title-interactive"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCardExpansion(idx);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {category.title}
                </h3>
                <div 
                  className={`card-items-interactive ${expandedCards.has(idx) ? 'expanded' : ''}`}
                  style={{ 
                    cursor: expandedCards.has(idx) ? 'default' : 'pointer',
                    overflowY: expandedCards.has(idx) ? 'auto' : 'hidden',
                    maxHeight: expandedCards.has(idx) ? '400px' : 'none'
                  }}
                  onClick={(e) => {
                    if (!expandedCards.has(idx)) {
                      e.stopPropagation();
                      toggleCardExpansion(idx);
                    }
                  }}
                >
                  {(expandedCards.has(idx) ? category.items : category.items.slice(0, 3)).map((item, itemIdx) => (
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
                  {!expandedCards.has(idx) && category.items.length > 3 && (
                    <p style={{ fontSize: '0.9rem', color: '#fd904f', marginTop: '1rem', textAlign: 'center', fontWeight: 600, cursor: 'pointer' }}>
                      Click to see {category.items.length - 3} more items
                    </p>
                  )}
                  {category.sauces && (
                    <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(253, 144, 79, 0.2)' }}>
                      {category.sauces}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
            </motion.div>
          </div>

          {/* Interactive Features */}
          <div className="premium-cards-wrapper" ref={premiumContainerRef}>
            <motion.div 
              className="premium-interactive"
              drag="x"
              dragConstraints={premiumContainerRef}
              dragElastic={0.1}
              dragMomentum={true}
              dragDirectionLock={true}
              dragPropagation={false}
              whileDrag={{ cursor: 'grabbing' }}
              style={{ 
                willChange: 'transform',
                touchAction: 'pan-x'
              }}
            >
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
                <div className="premium-card-image">
                  <Image 
                    src="/images/brioche-instagram/brioche5.png" 
                    alt="Reservations"
                    width={300}
                    height={200}
                    className="premium-card-img"
                    style={{ objectPosition: 'center 65%' }}
                  />
                </div>
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
                <div className="premium-card-image">
                  <Image 
                    src="/images/brioche-instagram/brioche8.png" 
                    alt="The Tasting Room"
                    width={300}
                    height={200}
                    className="premium-card-img"
                    style={{ objectPosition: 'center 35%' }}
                  />
                </div>
                <h3>The Tasting Room</h3>
                <p>Upstairs events venue & wine education</p>
                <p className="order-link-note">
                  <a href="https://www.instagram.com/thetastingroom.yyc/" target="_blank" rel="noopener noreferrer">Follow @thetastingroom.yyc</a>
                </p>
              </motion.div>
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
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Address</h3>
                  <p>1512 29 Avenue Southwest<br />Calgary, AB T2T 1M3</p>
                </div>
              </div>
              <div className="info-item-interactive">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Hours</h3>
                  <p><strong>Tuesday - Sunday:</strong><br />11:30 AM onwards</p>
                  <p>Open for both lunch and dinner</p>
                  <p><strong>Monday:</strong> Closed</p>
                </div>
              </div>
              <div className="info-item-interactive">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Contact</h3>
                  <p><a href="tel:+14032222222">Call Us</a></p>
                  <p><a href="https://www.instagram.com/briochebyavitus.yyc/" target="_blank" rel="noopener noreferrer">View Instagram</a></p>
                </div>
              </div>
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

      {/* Instagram Feed Section */}
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
          {/* Temporary Instagram image will be loaded here */}
        </div>
      </section>

      {/* CTA Interactive */}
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
}
