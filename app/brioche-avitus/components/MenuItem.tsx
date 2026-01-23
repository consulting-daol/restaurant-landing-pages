'use client';

import { motion } from 'framer-motion';
import type { MenuItem as MenuItemType } from './types';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

export const MenuItem = ({ item, index }: MenuItemProps) => {
  return (
    <motion.div
      className="item-card-interactive"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 10, scale: 1.02 }}
    >
      <div className="item-header-interactive">
        <h4>{item.name}</h4>
        <span className="price-interactive">{item.price}</span>
      </div>
      {item.desc && <p>{item.desc}</p>}
    </motion.div>
  );
};
