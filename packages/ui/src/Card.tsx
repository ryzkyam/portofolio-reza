import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  level?: 1 | 2;
  className?: string;
  glow?: 'none' | 'primary' | 'secondary';
}

export const Card: React.FC<CardProps> = ({
  children,
  level = 1,
  className = '',
  glow = 'none',
  ...props
}) => {
  const baseStyles =
    'rounded-2xl transition-all duration-300 relative';

  const levelStyles = {
    1: 'bg-surface-container/70 border border-outline-variant/25 backdrop-blur-xl shadow-[0_8px_32px_-4px_rgba(0,0,0,0.45)]',
    2: 'bg-surface-container/80 border border-outline-variant/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]',
  }[level];

  const glowStyles = {
    none: '',
    primary: 'hover:border-primary/50 hover:shadow-[0_12px_40px_-8px_rgba(208,188,255,0.2)]',
    secondary: 'hover:border-secondary/50 hover:shadow-[0_12px_40px_-8px_rgba(76,215,246,0.2)]',
  }[glow];

  return (
    <div
      className={`${baseStyles} ${levelStyles} ${glowStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
