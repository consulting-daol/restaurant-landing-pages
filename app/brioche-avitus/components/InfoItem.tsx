'use client';

import { ReactNode } from 'react';

interface InfoItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export const InfoItem = ({ icon, title, children }: InfoItemProps) => {
  return (
    <div className="info-item-interactive">
      <div className="info-icon">
        {icon}
      </div>
      <div className="info-content">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};
