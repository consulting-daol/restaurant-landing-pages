'use client';

import { motion } from 'framer-motion';
import '../../src/restaurants/ChefsFarmers.css';

export default function ChefsFarmersPage() {
  return (
    <div className="chefs-farmers">
      {/* Sticky Header */}
      <header className="sticky-header">
        <div className="header-content">
          <h1 className="logo">Chefs & Farmers</h1>
          <nav className="header-nav">
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero with Magazine Layout */}
      <section className="hero-magazine">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="main-title">Chefs & Farmers</h1>
          <p className="tagline">Farm to Table • Locally Sourced • Fresh Daily</p>
          <div className="hero-buttons">
            <a href="tel:+14031234567" className="btn btn-green">Call Now</a>
            <a href="#menu" className="btn btn-outline-green">View Menu</a>
          </div>
        </motion.div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-placeholder">Farm Fresh</div>
        </motion.div>
      </section>

      {/* Magazine Grid Menu */}
      <section id="menu" className="menu-magazine">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Menu
          </motion.h2>
          
          <div className="magazine-grid">
            {[
              { title: 'Starters', color: '#6b8e23', items: [
                { name: 'Farm Fresh Salad', price: '$14', desc: 'Mixed greens, seasonal vegetables' },
                { name: 'Brussels Sprouts', price: '$12', desc: 'Roasted with bacon and balsamic' },
                { name: 'Charcuterie Board', price: '$18', desc: 'Local meats, artisanal cheeses' }
              ]},
              { title: 'Mains', color: '#556b2f', items: [
                { name: 'Farm Burger', price: '$20', desc: 'Local beef, brioche bun' },
                { name: 'Grilled Chicken', price: '$24', desc: 'Free-range chicken, vegetables' },
                { name: 'Vegetable Bowl', price: '$18', desc: 'Roasted seasonal vegetables' }
              ]},
              { title: 'Desserts', color: '#8ba84a', items: [
                { name: 'Seasonal Pie', price: '$10', desc: 'Homemade with local fruits' },
                { name: 'Ice Cream', price: '$8', desc: 'Artisanal flavors, made in-house' }
              ]}
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                className="magazine-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                style={{ borderTop: `5px solid ${category.color}` }}
              >
                <h3 className="magazine-title">{category.title}</h3>
                <div className="magazine-items">
                  {category.items.map((item) => (
                    <div key={item.name} className="magazine-item-card">
                      <div className="item-row">
                        <h4>{item.name}</h4>
                        <span className="price">{item.price}</span>
                      </div>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="premium-magazine">
            <motion.div 
              className="premium-item locked"
              whileHover={{ scale: 1.05 }}
            >
              <h3>Online Ordering</h3>
              <p>Order fresh meals for pickup</p>
            </motion.div>
            <motion.div 
              className="premium-item locked"
              whileHover={{ scale: 1.05 }}
            >
              <h3>Reservation System</h3>
              <p>Book your table online</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About with Split Layout */}
      <section id="about" className="about-magazine">
        <div className="container">
          <div className="about-split">
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>About Us</h2>
              <p>Chefs & Farmers is built on a simple philosophy: the best food comes from the best ingredients. We work directly with local farms and producers to bring you seasonal, fresh, and flavorful dishes.</p>
              <p>Our menu changes with the seasons, ensuring that every dish features ingredients at their peak.</p>
            </motion.div>
            <motion.div 
              className="about-stats"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="stat-box">
                <div className="stat-number">100%</div>
                <div className="stat-label">Local Sourced</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">20+</div>
                <div className="stat-label">Local Farms</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="location-magazine">
        <div className="container">
          <div className="location-split">
            <div className="location-info">
              <h2>Visit Us</h2>
              <div className="info-block">
                <h3>📍 Address</h3>
                <p>Calgary, AB<br />Canada</p>
              </div>
              <div className="info-block">
                <h3>⏰ Hours</h3>
                <p><strong>Tuesday - Sunday:</strong><br />11:00 AM - 9:00 PM</p>
                <p><strong>Monday:</strong> Closed</p>
              </div>
              <div className="info-block">
                <h3>📞 Contact</h3>
                <p><a href="tel:+14031234567">Call Us</a></p>
              </div>
            </div>
            <div className="map-magazine">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.804868254925!2d-114.123456!3d51.045678"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-magazine">
        <div className="container">
          <h2>Join Us for Fresh, Local Dining</h2>
          <p>Experience the taste of Alberta's finest ingredients</p>
          <div className="cta-buttons">
            <a href="tel:+14031234567" className="btn btn-green btn-large">Call Us</a>
            <a href="#location" className="btn btn-outline-green btn-large">View Location</a>
          </div>
        </div>
      </section>

      <footer className="footer-magazine">
        <div className="container">
          <p>&copy; 2025 Chefs & Farmers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
