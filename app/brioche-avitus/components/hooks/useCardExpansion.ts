import { useState } from 'react';

export const useCardExpansion = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCardExpansion = (idx: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(idx)) {
        newSet.delete(idx);
      } else {
        newSet.add(idx);
      }
      return newSet;
    });
  };

  return { expandedCards, toggleCardExpansion };
};
