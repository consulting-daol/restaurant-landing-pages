'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export const Header = ({ isMobileMenuOpen, onToggleMobileMenu }: HeaderProps) => {
  return (
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
          onClick={onToggleMobileMenu}
          aria-label="Toggle mobile menu"
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
  );
};
