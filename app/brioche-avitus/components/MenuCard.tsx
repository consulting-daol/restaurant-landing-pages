'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MenuItem } from './MenuItem';
import type { MenuCategory } from './types';

interface MenuCardProps {
  category: MenuCategory;
  index: number;
  isExpanded: boolean;
  isHovered: boolean;
  onToggleExpansion: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export const MenuCard = ({
  category,
  index,
  isExpanded,
  isHovered,
  onToggleExpansion,
  onHoverStart,
  onHoverEnd,
}: MenuCardProps) => {
  const displayedItems = isExpanded ? category.items : category.items.slice(0, 3);
  const remainingCount = category.items.length - 3;

  const getObjectPosition = () => {
    if (category.title === 'Main' || category.title === 'Starters' || category.title === 'French Wines') {
      return 'center bottom';
    }
    return 'center 30%';
  };

  return (
    <motion.div
      className={`menu-card-interactive ${isExpanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      animate={{ 
        scale: isHovered ? 1.05 : 1
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
            style={{ objectPosition: getObjectPosition() }}
          />
        </div>
      )}
      <h3 
        className="card-title-interactive"
        onClick={(e) => {
          e.stopPropagation();
          onToggleExpansion();
        }}
        style={{ cursor: 'pointer' }}
      >
        {category.title}
      </h3>
      <div 
        className={`card-items-interactive ${isExpanded ? 'expanded' : ''}`}
        style={{ 
          cursor: isExpanded ? 'default' : 'pointer',
          overflowY: isExpanded ? 'auto' : 'hidden',
          maxHeight: isExpanded ? '400px' : 'none'
        }}
        onClick={(e) => {
          if (!isExpanded) {
            e.stopPropagation();
            onToggleExpansion();
          }
        }}
      >
        {displayedItems.map((item, itemIdx) => (
          <MenuItem key={item.name} item={item} index={itemIdx} />
        ))}
        {!isExpanded && remainingCount > 0 && (
          <p style={{ 
            fontSize: '0.9rem', 
            color: '#fd904f', 
            marginTop: '1rem', 
            textAlign: 'center', 
            fontWeight: 600, 
            cursor: 'pointer' 
          }}>
            Click to see {remainingCount} more items
          </p>
        )}
        {category.sauces && (
          <p style={{ 
            fontSize: '0.85rem', 
            color: '#666', 
            marginTop: '1rem', 
            paddingTop: '1rem', 
            borderTop: '1px solid rgba(253, 144, 79, 0.2)' 
          }}>
            {category.sauces}
          </p>
        )}
      </div>
    </motion.div>
  );
};
