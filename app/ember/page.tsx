'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Clock, MapPin, Phone, Mail, Instagram, Facebook, ChefHat, Utensils, Wine, Star, Users, Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Base64 placeholder images (small colored rectangles as placeholders)
const logoBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgc3Ryb2tlPSIjRDRBODUzIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTIgMjBDMTIgMTYgMTYgMTIgMjAgMTJDMjQgMTIgMjggMTYgMjggMjBDMjggMjQgMjQgMjggMjAgMjgiIHN0cm9rZT0iI0M0NUMyNiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iNCIgZmlsbD0iI0Q0QTg1MyIvPjwvc3ZnPg==";

const dish1Base64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMyQTJBMkEiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjgwIiBmaWxsPSIjM0EzQTNBIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI2MCIgZmlsbD0iIzRBNEE0QSIvPjxlbGxpcHNlIGN4PSIyMDAiIGN5PSIxNDAiIHJ4PSI0MCIgcnk9IjI1IiBmaWxsPSIjQzQ1QzI2Ii8+PGVsbGlwc2UgY3g9IjE4NSIgY3k9IjE1NSIgcng9IjE1IiByeT0iMTAiIGZpbGw9IiM4QjRDMjQiLz48ZWxsaXBzZSBjeD0iMjIwIiBjeT0iMTYwIiByeD0iMTIiIHJ5PSI4IiBmaWxsPSIjNkI4RTIzIi8+PC9zdmc+";

const dish2Base64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMyMjIyMjIiLz48cmVjdCB4PSIxMjAiIHk9IjEwMCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSIjMzMzMzMzIi8+PHJlY3QgeD0iMTMwIiB5PSIxMTAiIHdpZHRoPSIxNDAiIGhlaWdodD0iODAiIHJ4PSI0IiBmaWxsPSIjRkZEQjU4Ii8+PGVsbGlwc2UgY3g9IjE2MCIgY3k9IjE1MCIgcng9IjIwIiByeT0iMTUiIGZpbGw9IiNGRjYzNDciLz48ZWxsaXBzZSBjeD0iMjAwIiBjeT0iMTQwIiByeD0iMjUiIHJ5PSIxMiIgZmlsbD0iIzZCOEUyMyIvPjxlbGxpcHNlIGN4PSIyNDAiIGN5PSIxNTUiIHJ4PSIxOCIgcnk9IjEwIiBmaWxsPSIjOEI0NTEzIi8+PC9zdmc+";

const dish3Base64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMxQTFBMUEiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjcwIiBmaWxsPSIjMkEyQTJBIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI1NSIgZmlsbD0iI0ZGRjhEQyIvPjxwYXRoIGQ9Ik0xNjAgMTMwQzE2MCAxMzAgMTgwIDExMCAyMDAgMTEwQzIyMCAxMTAgMjQwIDEzMCAyNDAgMTMwQzI0MCAxMzAgMjMwIDE3MCAyMDAgMTgwQzE3MCAxNzAgMTYwIDEzMCAxNjAgMTMwWiIgZmlsbD0iI0ZENEE4NSIvPjxjaXJjbGUgY3g9IjE4MCIgY3k9IjE2MCIgcj0iOCIgZmlsbD0iIzZCOEUyMyIvPjxjaXJjbGUgY3g9IjIyMCIgY3k9IjE1NSIgcj0iNiIgZmlsbD0iI0ZGNDQ0NCIvPjwvc3ZnPg==";

const heroPattern = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEE4NTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+";

export default function EmberPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    {
      name: "Seared Duck Confit",
      description: "Slow-cooked duck leg with cherry gastrique, roasted root vegetables, and herb-infused jus",
      price: "$42",
      image: dish1Base64,
      tag: "Chef's Choice"
    },
    {
      name: "Truffle Risotto",
      description: "Arborio rice with black truffle, aged parmesan, wild mushrooms, and gold leaf garnish",
      price: "$38",
      image: dish2Base64,
      tag: "Signature"
    },
    {
      name: "Citrus Cured Salmon",
      description: "House-cured salmon with yuzu cream, micro herbs, caviar pearls, and champagne foam",
      price: "$36",
      image: dish3Base64,
      tag: "New"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your reservation request! We will contact you shortly to confirm.');
    setFormData({ name: '', email: '', date: '', time: '', guests: '', message: '' });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Émber Restaurant",
    "description": "Where culinary artistry meets timeless elegance. Experience seasonal ingredients transformed into unforgettable moments.",
    "servesCuisine": "Fine Dining",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "42 Gourmet Lane, Culinary District",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10012",
      "addressCountry": "US"
    },
    "telephone": "+1 (212) 555-0142",
    "email": "info@ember.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "18:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "18:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "17:00",
        "closes": "21:00"
      }
    ],
    "image": "/images/ember/hero.jpg",
    "url": "https://ember.com"
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => scrollToSection('hero')}
            >
              <img src={logoBase64} alt="Logo" className="w-10 h-10" />
              <span className={`font-serif text-xl tracking-wide ${scrolled ? 'text-[#FDF8F3]' : 'text-[#FDF8F3]'}`}>
                Émber
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {['Home', 'Menu', 'About', 'Reserve'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm tracking-widest uppercase font-light transition-colors ${
                    scrolled ? 'text-[#FDF8F3]/80 hover:text-[#D4A853]' : 'text-[#FDF8F3]/80 hover:text-[#D4A853]'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('reserve')}
                className="px-6 py-2.5 bg-[#C45C26] text-[#FDF8F3] text-sm tracking-wider uppercase rounded-none hover:bg-[#D4A853] transition-colors"
              >
                Book a Table
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#FDF8F3] p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#1A1A1A] border-t border-[#D4A853]/20"
            >
              <div className="px-6 py-6 space-y-4">
                {['Home', 'Menu', 'About', 'Reserve'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left text-[#FDF8F3]/80 py-2 text-sm tracking-widest uppercase hover:text-[#D4A853]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 50%, #1A1A1A 100%)`,
          backgroundImage: `url("${heroPattern}"), linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 50%, #1A1A1A 100%)`
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#C45C26]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D4A853]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block text-[#D4A853] text-sm tracking-[0.3em] uppercase mb-6">
              Est. 2018 · Fine Dining
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FDF8F3] leading-tight mb-8"
          >
            Taste the
            <span className="block text-[#D4A853] italic">Tradition</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[#FDF8F3]/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Where culinary artistry meets timeless elegance. Experience seasonal ingredients 
            transformed into unforgettable moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('reserve')}
              className="group px-10 py-4 bg-[#C45C26] text-[#FDF8F3] text-sm tracking-widest uppercase hover:bg-[#D4A853] transition-all flex items-center gap-3"
            >
              Book a Table
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('menu')}
              className="px-10 py-4 border border-[#D4A853]/40 text-[#FDF8F3] text-sm tracking-widest uppercase hover:border-[#D4A853] hover:bg-[#D4A853]/10 transition-all"
            >
              View Menu
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border border-[#D4A853]/40 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-[#D4A853] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-24 lg:py-32 bg-[#FDF8F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#C45C26] text-sm tracking-[0.3em] uppercase mb-4">
              Our Specialties
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
              Signature Dishes
            </h2>
            <p className="text-[#1A1A1A]/60 max-w-xl mx-auto font-light">
              Each plate tells a story of passion, precision, and the finest seasonal ingredients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden mb-6">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-[4/3] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#D4A853] text-[#1A1A1A] text-xs tracking-wider uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#C45C26] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[#C45C26] font-light text-lg">{item.price}</span>
                  </div>
                  <p className="text-[#1A1A1A]/60 font-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="group inline-flex items-center gap-2 text-[#C45C26] text-sm tracking-widest uppercase hover:text-[#D4A853] transition-colors">
              View Full Menu
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("${heroPattern}")` }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[#D4A853] text-sm tracking-[0.3em] uppercase mb-4">
                Our Story
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#FDF8F3] mb-8 leading-tight">
                A Legacy of
                <span className="text-[#D4A853] italic block">Culinary Excellence</span>
              </h2>
              <div className="space-y-6 text-[#FDF8F3]/70 font-light leading-relaxed">
                <p>
                  Born from a passion that spans three generations, Émber represents the culmination 
                  of Chef Marcus Laurent's lifelong dedication to the culinary arts. After training 
                  in the finest kitchens of Paris and Tokyo, he returned home with a vision.
                </p>
                <p>
                  Every dish is a canvas where tradition meets innovation. We source our ingredients 
                  from local farmers who share our commitment to sustainability, ensuring each plate 
                  tells a story of the land and the season.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12">
                {[
                  { icon: ChefHat, label: 'Michelin Stars', value: '2' },
                  { icon: Wine, label: 'Wine Selection', value: '300+' },
                  { icon: Star, label: 'Years of Excellence', value: '6' }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-6 h-6 text-[#D4A853] mx-auto mb-3" />
                    <div className="text-3xl font-serif text-[#FDF8F3] mb-1">{stat.value}</div>
                    <div className="text-xs text-[#FDF8F3]/50 tracking-wider uppercase">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] relative">
                <div className="absolute inset-4 border border-[#D4A853]/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <ChefHat className="w-16 h-16 text-[#D4A853] mx-auto mb-4" />
                    <p className="text-[#FDF8F3] font-serif text-xl">Chef Marcus Laurent</p>
                    <p className="text-[#FDF8F3]/50 text-sm mt-2">Executive Chef & Founder</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#D4A853] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" className="py-24 lg:py-32 bg-[#FDF8F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[#C45C26] text-sm tracking-[0.3em] uppercase mb-4">
                Reserve Your Experience
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6">
                Book a Table
              </h2>
              <p className="text-[#1A1A1A]/60 font-light mb-12 max-w-md">
                Join us for an unforgettable dining experience. For parties of 8 or more, 
                please contact us directly.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C45C26]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#C45C26]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1A1A1A] mb-1">Opening Hours</h4>
                    <p className="text-[#1A1A1A]/60 text-sm">
                      Tuesday - Sunday: 6:00 PM - 11:00 PM<br />
                      Monday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C45C26]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C45C26]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1A1A1A] mb-1">Location</h4>
                    <p className="text-[#1A1A1A]/60 text-sm">
                      42 Gourmet Lane, Culinary District<br />
                      New York, NY 10012
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C45C26]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C45C26]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1A1A1A] mb-1">Contact</h4>
                    <p className="text-[#1A1A1A]/60 text-sm">
                      +1 (212) 555-0142<br />
                      reservations@ember.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10 shadow-xl">
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-wider uppercase text-[#1A1A1A]/60 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 px-4 border border-[#1A1A1A]/20 focus:border-[#C45C26] focus:ring-1 focus:ring-[#C45C26] outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wider uppercase text-[#1A1A1A]/60 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 border border-[#1A1A1A]/20 focus:border-[#C45C26] focus:ring-1 focus:ring-[#C45C26] outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-wider uppercase text-[#1A1A1A]/60 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full h-12 px-4 border border-[#1A1A1A]/20 focus:border-[#C45C26] focus:ring-1 focus:ring-[#C45C26] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wider uppercase text-[#1A1A1A]/60 mb-2">
                        Time *
                      </label>
                      <select
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full h-12 px-4 border border-[#1A1A1A]/20 focus:border-[#C45C26] focus:ring-1 focus:ring-[#C45C26] outline-none transition-colors bg-white"
                      >
                        <option value="">Select time</option>
                        {['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'].map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-wider uppercase text-[#1A1A1A]/60 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full h-12 px-4 border border-[#1A1A1A]/20 focus:border-[#C45C26] focus:ring-1 focus:ring-[#C45C26] outline-none transition-colors bg-white"
                    >
                      <option value="">Select guests</option>
                      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                        <option key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs tracking-wider uppercase text-[#1A1A1A]/60 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full min-h-[100px] px-4 py-3 border border-[#1A1A1A]/20 focus:border-[#C45C26] focus:ring-1 focus:ring-[#C45C26] outline-none transition-colors resize-none"
                      placeholder="Dietary restrictions, celebrations, seating preferences..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#C45C26] text-[#FDF8F3] text-sm tracking-widest uppercase hover:bg-[#D4A853] transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar size={16} />
                    Request Reservation
                  </motion.button>

                  <p className="text-xs text-[#1A1A1A]/40 text-center">
                    We will confirm your reservation within 24 hours
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src={logoBase64} alt="Logo" className="w-10 h-10" />
                <span className="font-serif text-xl text-[#FDF8F3] tracking-wide">Émber</span>
              </div>
              <p className="text-[#FDF8F3]/50 text-sm font-light leading-relaxed mb-6">
                Where culinary artistry meets timeless elegance. Experience the extraordinary.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 border border-[#D4A853]/30 flex items-center justify-center text-[#D4A853] hover:bg-[#D4A853] hover:text-[#1A1A1A] transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#FDF8F3] text-sm tracking-widest uppercase mb-6">Navigate</h4>
              <div className="space-y-3">
                {['Home', 'Menu', 'About', 'Reservations', 'Private Events', 'Gift Cards'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-[#FDF8F3]/50 text-sm hover:text-[#D4A853] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#FDF8F3] text-sm tracking-widest uppercase mb-6">Contact</h4>
              <div className="space-y-4 text-[#FDF8F3]/50 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#D4A853] mt-0.5 flex-shrink-0" />
                  42 Gourmet Lane<br />Culinary District<br />New York, NY 10012
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={16} className="text-[#D4A853] flex-shrink-0" />
                  +1 (212) 555-0142
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={16} className="text-[#D4A853] flex-shrink-0" />
                  info@ember.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-[#FDF8F3] text-sm tracking-widest uppercase mb-6">Hours</h4>
              <div className="space-y-3 text-[#FDF8F3]/50 text-sm">
                <div className="flex justify-between">
                  <span>Tuesday - Thursday</span>
                  <span>6PM - 10PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>6PM - 11PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>5PM - 9PM</span>
                </div>
                <div className="flex justify-between text-[#D4A853]">
                  <span>Monday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#FDF8F3]/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#FDF8F3]/30 text-xs">
                © 2024 Émber Restaurant. All rights reserved.
              </p>
              <div className="flex gap-6 text-[#FDF8F3]/30 text-xs">
                <a href="#" className="hover:text-[#D4A853] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#D4A853] transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
