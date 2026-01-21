'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getSquareOrderingUrl } from '../utils/squareConfig';
import '../../src/restaurants/PennyCrown.css';

export default function PennyCrownPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOverlapping, setIsOverlapping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((prev) => {
        const scrolled = window.scrollY > 50;
        return scrolled !== prev ? scrolled : prev;
      });
      
      const menuToggle = document.querySelector('.menu-toggle') as HTMLElement;
      if (!menuToggle) return;
      
      const menuRect = menuToggle.getBoundingClientRect();
      const menuRight = menuRect.right;
      const menuBottom = menuRect.bottom;
      
      const sections = document.querySelectorAll('.penny-crown > section, .penny-crown .hero-content, .penny-crown .section-title, .penny-crown .hero-subtitle, .penny-crown .hero-logo');
      let overlapping = false;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          menuRect.left < rect.right &&
          menuRight > rect.left &&
          menuRect.top < rect.bottom &&
          menuBottom > rect.top &&
          rect.width > 0 &&
          rect.height > 0
        ) {
          overlapping = true;
        }
      });
      
      setIsOverlapping((prev) => overlapping !== prev ? overlapping : prev);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sidebarOpen]);

  return (
    <div className="penny-crown">
      <motion.nav 
        className={`sidebar ${sidebarOpen ? 'open' : ''}`}
        initial={false}
        animate={{ x: sidebarOpen ? 0 : -280 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        aria-label="Main navigation"
      >
        <div className="sidebar-content">
          <div className="logo-sidebar">
            <Image 
              src="/images/pennycrowns/penny_crown_logo.webp"
              alt="Penny Crown Tavern"
              width={200}
              height={60}
              className="sidebar-logo-image"
            />
          </div>
          <ul className="sidebar-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </motion.nav>

      <button 
        className={`menu-toggle ${sidebarOpen ? 'active' : ''} ${isOverlapping ? 'overlapping' : ''}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <section id="home" className="hero-section">
        <div className="hero-background" style={{
          backgroundImage: 'url("/images/pennycrowns/pennycrownfoods.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="hero-overlay"></div>
        </div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Image
              src="/images/pennycrowns/penny_crown_logo.png"
              alt="Penny Crown Tavern"
              width={500}
              height={200}
              className="hero-logo"
              priority
            />
          </motion.div>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            New York Style Tavern
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="tel:+15875738082" className="btn btn-primary">Call Now</a>
            <a href="https://www.opentable.ca/r/penny-crown-calgary" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Reserve Table</a>
          </motion.div>
        </motion.div>
        <div className="scroll-indicator">
          ↓
        </div>
      </section>

      <section className="info-bar">
        <div className="info-item">
          <span className="info-icon">📍</span>
          <span>Marda Loop, Calgary</span>
        </div>
        <div className="info-item">
          <span className="info-icon">⏰</span>
          <span>Monday - Sunday: 4:00pm - 11:00pm</span>
        </div>
        <div className="info-item">
          <span className="info-icon">📞</span>
          <a href="tel:+15875738082">(587) 573-8082</a>
        </div>
      </section>

      <section className="reservations-section">
        <div className="container">
          <h2 className="reservations-title">
            Reservations Now Available on OpenTable
          </h2>
          <p className="reservations-subtitle">
            We do accept walk ins on our heated covered veranda.
          </p>
          <div className="reservation-widget-container">
            <div className="opentable-widget">
              <iframe
                src="https://www.opentable.ca/widget/reservation/preview?rid=penny-crown-calgary&domain=ca&lang=en-US&theme=tall&ot_source=Restaurant%20website"
                width="100%"
                height="600"
                frameBorder="0"
                style={{ border: 'none', borderRadius: '8px' }}
                title="OpenTable Reservations"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="menu-section">
        <div className="container">
          <h2 className="section-title">Our Menu</h2>
          
          <div className="menu-grid">
            {[
              { 
                category: 'Starters', 
                image: '/images/pennycrowns/87792531-2.avif',
                items: [
                  { name: 'French Dinner Rolls', price: '$12', desc: 'Freshly baked brioche rolls served warm' },
                  { name: 'Tuna Crudo', price: '$18', desc: 'Fresh tuna with citrus and herbs' },
                  { name: 'Mussels', price: '$22', desc: 'Steamed mussels in white wine and herbs' }
                ]
              },
              { 
                category: 'Mains', 
                image: '/images/pennycrowns/91127083-1.avif',
                items: [
                  { name: 'Penny Crown Burger', price: '$28', desc: 'One of the best burgers in Calgary with house fries' },
                  { name: 'Baked Scallops', price: '$32', desc: 'Fresh scallops baked to perfection' },
                  { name: 'Handmade Fettuccine', price: '$26', desc: 'Double zero flour noodles with seasonal ingredients' }
                ]
              },
              { 
                category: 'Desserts', 
                image: '/images/pennycrowns/87792529-1.avif',
                items: [
                  { name: 'Sticky Toffee Pudding', price: '$12', desc: 'Rich toffee pudding, a must-try favorite' },
                  { name: 'Seasonal Selection', price: '$10', desc: 'Chef\'s choice dessert featuring local ingredients' }
                ]
              }
            ].map((category) => (
              <div key={category.category} className="menu-category">
                <div className="menu-category-image">
                  <Image 
                    src={category.image} 
                    alt={category.category}
                    width={400}
                    height={200}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px 8px 0 0'
                    }}
                  />
                </div>
                <div className="menu-category-content">
                  <h3 className="category-title">{category.category}</h3>
                  <div className="menu-items">
                    {category.items.map((item) => (
                      <div key={item.name} className="menu-item">
                        <div className="menu-item-header">
                          <h4>{item.name}</h4>
                          <span className="price">{item.price}</span>
                        </div>
                        <p>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="premium-features">
            <div className="premium-card locked">
              <h3>Gift Card</h3>
              <p>Purchase an e-gift card for someone special</p>
              <a 
                href="https://app.squareup.com/gift/MLQH0EW90BS9E/order" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline" 
                style={{marginTop: '10px', fontSize: '0.9rem'}}
              >
                Purchase Gift Card
              </a>
            </div>
            <div className="premium-card locked">
              <h3>Reservation System</h3>
              <p>Book your table instantly</p>
              <a href="https://www.opentable.ca/r/penny-crown-calgary" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{marginTop: '10px', fontSize: '0.9rem'}}>Reserve on OpenTable</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>About Penny Crown</h2>
              <p>From the team behind the acclaimed DOPO restaurant comes Penny Crown, inspired by the owner's many trips to New York, and the architecture of the city.</p>
              <p>Offering an upscale New York-style tavern experience, featuring a sophisticated menu of contemporary comfort food with a focus on locally sourced ingredients. The cuisine blends classic tavern dishes with modern twists, providing a refined yet approachable dining experience in a stylish and inviting atmosphere.</p>
              <p><strong>Hot spot • Neighbourhood gem • Good for special occasions</strong></p>
            </div>
            <div className="about-image">
              <Image 
                src="/images/pennycrowns/pennycrownfoods.webp" 
                alt="Penny Crown Tavern - Gourmet Burger"
                width={600}
                height={500}
                className="about-image-photo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Experience Penny Crown</h2>
          <div className="gallery-grid">
            {[
              '/images/pennycrowns/89817643-1.avif',
              '/images/pennycrowns/90381320-1.avif',
              '/images/pennycrowns/89367854-1.avif',
              '/images/pennycrowns/87792530-1.avif',
              '/images/pennycrowns/87792532-1.avif',
              '/images/pennycrowns/91127079-1.avif',
              '/images/pennycrowns/91127071-1.avif',
              '/images/pennycrowns/89180242-1.avif'
            ].map((image, idx) => (
              <div key={idx} className="gallery-item">
                <Image 
                  src={image} 
                  alt={`Penny Crown Tavern ${idx + 1}`}
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="location-section">
        <div className="container">
          <h2 className="section-title">Visit Us</h2>
          <div className="location-grid">
            <div className="location-info">
              <h3>Address</h3>
              <p>1926 34 Avenue Southwest, Unit 102<br />Calgary, AB T2T 2C1<br />Canada</p>
              <p style={{fontSize: '0.9rem', color: '#888', marginTop: '5px'}}>Cross street: 34 Ave SW and 19 Street SW</p>
              
              <h3>Hours</h3>
              <p><strong>Monday - Sunday:</strong><br />4:00 PM - 11:00 PM</p>
              <p style={{fontSize: '0.9rem', fontStyle: 'italic', marginTop: '10px'}}>We do accept walk-ins on our heated covered veranda.</p>
              
              <h3>Contact</h3>
              <p><a href="tel:+15875738082">(587) 573-8082</a></p>
              <p><a href="mailto:info@pennycrownyyc.com">info@pennycrownyyc.com</a></p>
              <p><a href="http://pennycrownyyc.com/" target="_blank" rel="noopener noreferrer">pennycrownyyc.com</a></p>
              <p style={{marginTop: '15px'}}><a href="https://www.opentable.ca/r/penny-crown-calgary" target="_blank" rel="noopener noreferrer" style={{color: '#c57f4b', fontWeight: '400'}}>Reserve on OpenTable</a></p>
              <p style={{marginTop: '10px'}}><a href="https://app.squareup.com/gift/MLQH0EW90BS9E/order" target="_blank" rel="noopener noreferrer" style={{color: '#c57f4b', fontWeight: '400'}}>Purchase E-Gift Card</a></p>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.804868254925!2d-114.123456!3d51.045678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDAyJzQ0LjQiTiAxMTTCsDA3JzI0LjQiVw!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="container">
          <h2>Ready to Visit?</h2>
          <p>Reserve your table or call us for an unforgettable dining experience</p>
          <div className="cta-buttons">
            <a href="https://www.opentable.ca/r/penny-crown-calgary" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Reserve on OpenTable</a>
            <a href="https://app.squareup.com/gift/MLQH0EW90BS9E/order" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-large">Purchase Gift Card</a>
            <a href="tel:+15875738082" className="btn btn-outline btn-large">Call (587) 573-8082</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Penny Crown. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
