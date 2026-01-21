import { motion } from 'framer-motion';
import './LazyS.css';

const LazyS = () => {
  return (
    <div className="lazy-s">
      {/* Minimal Top Bar */}
      <div className="top-bar">
        <div className="bar-content">
          <div className="logo-minimal">THE LAZY S</div>
          <nav className="nav-minimal">
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>

      {/* Wide Hero with Typography Focus */}
      <section className="hero-wide">
        <motion.div 
          className="hero-content-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="title-wide">THE LAZY S</h1>
          <p className="subtitle-wide">Fine Dining at Calgary Stampede</p>
          <div className="hero-buttons-wide">
            <a href="tel:+14039876543" className="btn btn-premium">Reserve</a>
            <a href="#menu" className="btn btn-minimal">Menu</a>
          </div>
        </motion.div>
      </section>

      {/* Full Width Menu Section */}
      <section id="menu" className="menu-wide">
        <div className="menu-container">
          <motion.h2 
            className="section-title-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Menu
          </motion.h2>
          
          <div className="menu-wide-grid">
            {[
              { title: 'Appetizers', items: [
                { name: 'Wagyu Carpaccio', price: '$28', desc: 'Thinly sliced premium wagyu, arugula, truffle oil' },
                { name: 'Lobster Bisque', price: '$24', desc: 'Creamy soup with cognac and fresh herbs' },
                { name: 'Foie Gras', price: '$32', desc: 'Seared with fig compote and brioche' }
              ]},
              { title: 'Entrées', items: [
                { name: 'Prime Ribeye', price: '$58', desc: '16oz grass-fed beef, red wine jus' },
                { name: 'Pan-Seared Halibut', price: '$42', desc: 'Wild-caught halibut, lemon beurre blanc' },
                { name: 'Duck Confit', price: '$48', desc: 'Slow-cooked duck leg, cherry gastrique' }
              ]},
              { title: 'Desserts', items: [
                { name: 'Chocolate Soufflé', price: '$16', desc: 'Warm dark chocolate with vanilla ice cream' },
                { name: 'Crème Brûlée', price: '$14', desc: 'Classic vanilla with fresh berries' }
              ]}
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                className="menu-category-wide"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <h3 className="category-title-wide">{category.title}</h3>
                <div className="menu-items-wide">
                  {category.items.map((item) => (
                    <div key={item.name} className="menu-item-wide">
                      <div className="item-header-wide">
                        <h4>{item.name}</h4>
                        <span className="price-wide">{item.price}</span>
                      </div>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features Minimal */}
          <div className="premium-wide">
            <motion.div 
              className="premium-item-wide"
              whileHover={{ opacity: 0.9 }}
            >
              <div>
                <h3>Online Ordering</h3>
                <p>Pre-order for special events</p>
              </div>
            </motion.div>
            <motion.div 
              className="premium-item-wide"
              whileHover={{ opacity: 0.9 }}
            >
              <div>
                <h3>Reservation System</h3>
                <p>Book your table online</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About with Wide Image */}
      <section id="about" className="about-wide">
        <div className="about-container">
          <motion.div 
            className="about-text-wide"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>About The Lazy S</h2>
            <p>The Lazy S offers an exclusive premium dining experience during the Calgary Stampede. Our culinary team crafts exceptional dishes using the finest ingredients, creating memorable moments for our distinguished guests.</p>
            <p>Located in the heart of the Stampede's premium seating area, we combine world-class cuisine with unparalleled service.</p>
          </motion.div>
          <motion.div 
            className="about-image-wide"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder-wide">Fine Dining</div>
          </motion.div>
        </div>
      </section>

      {/* Location Minimal */}
      <section id="location" className="location-wide">
        <div className="location-container">
          <div className="location-grid-wide">
            <div className="location-info-wide">
              <h2>Visit Us</h2>
              <div className="info-item-wide">
                <h3>Address</h3>
                <p>Calgary Stampede Grounds<br />Calgary, AB</p>
              </div>
              <div className="info-item-wide">
                <h3>Hours</h3>
                <p><strong>Seasonal:</strong> During Calgary Stampede</p>
                <p>Please call for specific hours</p>
              </div>
              <div className="info-item-wide">
                <h3>Contact</h3>
                <p><a href="tel:+14039876543">Call Us</a></p>
              </div>
            </div>
            <div className="map-wide">
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

      {/* CTA Minimal */}
      <section id="contact" className="cta-wide">
        <div className="cta-container">
          <h2>Reserve Your Experience</h2>
          <p>Join us for exceptional dining during Calgary Stampede</p>
          <div className="cta-buttons-wide">
            <a href="tel:+14039876543" className="btn btn-premium btn-large">Call Us</a>
            <a href="#location" className="btn btn-minimal btn-large">Location</a>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="footer-wide">
        <div className="footer-container">
          <p>&copy; 2025 The Lazy S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LazyS;
