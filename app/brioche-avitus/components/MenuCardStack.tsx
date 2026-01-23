'use client';

import { MenuCard } from './MenuCard';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import type { MenuCategory } from './types';

interface MenuCardStackProps {
  categories: MenuCategory[];
  expandedCards: Set<number>;
  hoveredCard: number | null;
  onToggleExpansion: (idx: number) => void;
  onHoverStart: (idx: number) => void;
  onHoverEnd: () => void;
}

export const MenuCardStack = ({
  categories,
  expandedCards,
  hoveredCard,
  onToggleExpansion,
  onHoverStart,
  onHoverEnd,
}: MenuCardStackProps) => {
  return (
    <ScrollStack
      useWindowScroll={true}
      itemDistance={150}
      itemScale={0.05}
      itemStackDistance={40}
      stackPosition="15%"
      scaleEndPosition="5%"
      baseScale={0.9}
      rotationAmount={2}
      blurAmount={2}
      className="menu-scroll-stack"
    >
      {categories.map((category, idx) => (
        <ScrollStackItem key={category.title} itemClassName="menu-card-stack-item">
          <MenuCard
            category={category}
            index={idx}
            isExpanded={expandedCards.has(idx)}
            isHovered={hoveredCard === idx}
            onToggleExpansion={() => onToggleExpansion(idx)}
            onHoverStart={() => onHoverStart(idx)}
            onHoverEnd={onHoverEnd}
          />
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
};
