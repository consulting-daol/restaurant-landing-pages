'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MenuCard } from './MenuCard';
import { useCardExpansion } from './hooks/useCardExpansion';
import type { MenuCategory } from './types';

const menuCategories: MenuCategory[] = [
  { 
    title: 'Starters', 
    icon: '🥗', 
    image: '/images/brioche-instagram/briochue_insta1.jpg', 
    items: [
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
    ], 
    sauces: 'Beet ketchup $5, Tartar Sauce $5' 
  },
  { 
    title: 'Main', 
    icon: '🥐', 
    image: '/images/brioche-instagram/briochue_insta11.jpg', 
    items: [
      { name: 'Shrimp Rolls', price: '$24', desc: 'Picture-perfect shrimp roll on brioche' },
      { name: 'Lobster Rolls', price: '$36', desc: 'Premium lobster roll on brioche' },
      { name: 'Végé Rolls', price: '$22', desc: '' },
      { name: 'Croques Monsieur', price: '$24', desc: 'Classic French toasted ham and cheese sandwich' },
      { name: 'Boeuf Bourguignon', price: '$43', desc: 'Hearty French beef stew' },
      { name: 'Siberian Caviar', price: '$49', desc: '10 grams of premium caviar' }
    ]
  },
  { 
    title: 'Desserts', 
    icon: '🍰', 
    image: '/images/brioche-instagram/desert2.jpg', 
    items: [
      { name: 'Brioche Perdue', price: '$17', desc: '(french toast)' },
      { name: 'Créme Brulée', price: '$14', desc: '' },
      { name: 'Chocolate Mousse', price: '$12', desc: '' }
    ]
  },
  { 
    title: 'French Wines', 
    icon: '🍷', 
    image: '/images/brioche-instagram/briochue_insta7.jpg', 
    items: [
      { name: 'Curated Selection', price: 'By Glass', desc: 'All French wines with lower mark-ups' },
      { name: 'Wine List', price: 'Various', desc: 'Thoughtfully curated French wine selection' }
    ]
  }
];

export const MenuSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const premiumContainerRef = useRef<HTMLDivElement>(null);
  const { expandedCards, toggleCardExpansion } = useCardExpansion();

  return (
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
            {menuCategories.map((category, idx) => (
              <MenuCard
                key={category.title}
                category={category}
                index={idx}
                isExpanded={expandedCards.has(idx)}
                isHovered={hoveredCard === idx}
                onToggleExpansion={() => toggleCardExpansion(idx)}
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
              />
            ))}
          </motion.div>
        </div>

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
  );
};
