import { motion } from 'framer-motion';
import './BriocheAvitus.css';

const OrderStore = () => {
  return (
    <div className="brioche-avitus">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-container">
          <div className="logo">Fresh Eats</div>
          <ul className="nav-menu">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero with Card Layout */}
      <section className="hero-section">
        <motion.div 
          className="hero-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">Fresh Eats</h1>
          <p className="hero-subtitle">Delicious Food, Great Service, Always Fresh</p>
          <div className="hero-buttons">
            <a href="tel:+14031111111" className="btn btn-primary">Call Now</a>
            <a href="#menu" className="btn btn-secondary">View Menu</a>
          </div>
        </motion.div>
      </section>

      {/* Card Grid Menu */}
      <section id="menu" className="menu-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Menu
          </motion.h2>
          
          <div className="menu-cards-grid">
            {[
              { title: 'Appetizers', icon: '🥗', items: [
                { name: 'Caesar Salad', price: '$10', desc: 'Fresh romaine, croutons, parmesan' },
                { name: 'Buffalo Wings', price: '$12', desc: 'Crispy wings with your choice of sauce' },
                { name: 'Nachos Supreme', price: '$14', desc: 'Loaded with cheese, jalapeños' }
              ]},
              { title: 'Mains', icon: '🍔', items: [
                { name: 'Classic Burger', price: '$16', desc: 'Beef patty, lettuce, tomato' },
                { name: 'Chicken Wrap', price: '$14', desc: 'Grilled chicken, fresh veggies' },
                { name: 'Fish Tacos', price: '$15', desc: 'Battered fish, slaw, avocado' },
                { name: 'Pasta Special', price: '$17', desc: 'Daily pasta with fresh sauce' }
              ]},
              { title: 'Desserts', icon: '🍰', items: [
                { name: 'Chocolate Brownie', price: '$7', desc: 'Warm brownie with vanilla ice cream' },
                { name: 'Ice Cream Sundae', price: '$6', desc: 'Three scoops, hot fudge' }
              ]}
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                className="menu-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              >
                <div className="card-header">
                  <span className="card-icon">{category.icon}</span>
                  <h3>{category.title}</h3>
                </div>
                <div className="card-content">
                  {category.items.map((item) => (
                    <div key={item.name} className="card-item">
                      <div className="item-header">
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

          {/* Features Cards */}
          <div className="premium-cards">
            <motion.div 
              className="premium-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <h3>Online Ordering</h3>
              <p>Order for pickup or delivery</p>
              <p className="order-link-note">
                <a href="https://order.online/store/30946747?pickup=true" target="_blank" rel="noopener noreferrer">Order Online Platform</a>
              </p>
            </motion.div>
            <motion.div 
              className="premium-card"
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <h3>Reservation System</h3>
              <p>Book your table online</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section with Split Cards */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-cards">
            <motion.div 
              className="about-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>About Us</h2>
              <p>We're a local Calgary restaurant dedicated to serving fresh, delicious food with friendly service. Our menu features classic favorites and daily specials, all made with quality ingredients.</p>
              <p>Whether you're stopping by for a quick lunch, dinner with family, or a casual meal with friends, we welcome you to enjoy our comfortable atmosphere and great food.</p>
            </motion.div>
            <motion.div 
              className="about-image-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="image-placeholder">Restaurant Photo</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location with Card */}
      <section id="location" className="location-section">
        <div className="container">
          <div className="location-card">
            <div className="location-info">
              <h2>Visit Us</h2>
              <div className="info-grid">
                <div>
                  <h3>📍 Address</h3>
                  <p>Calgary, AB<br />Canada</p>
                </div>
                <div>
                  <h3>⏰ Hours</h3>
                  <p><strong>Monday - Sunday:</strong><br />11:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <h3>📞 Contact</h3>
                  <p><a href="tel:+14031111111">Call Us</a></p>
                  <p><a href="https://order.online/store/30946747?pickup=true" target="_blank" rel="noopener noreferrer">Order Online</a></p>
                </div>
              </div>
            </div>
            <div className="map-card">
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

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Order?</h2>
            <p>Call us or visit us for fresh, delicious meals</p>
            <div className="cta-buttons">
              <a href="tel:+14031111111" className="btn btn-primary btn-large">Call Us</a>
              <a href="https://order.online/store/30946747?pickup=true" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">Order Online</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Fresh Eats. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OrderStore;
