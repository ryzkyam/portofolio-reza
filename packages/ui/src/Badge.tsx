import React from 'react';

export interface BadgeProps {
  variant?: 'qa' | 'fullstack' | 'ba' | 'neutral' | 'outline' | 'pulse';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  children,
  icon,
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono transition-all duration-200 select-none';

  const variantStyles = {
    qa: 'bg-secondary/10 text-secondary border border-secondary/25',
    fullstack: 'bg-primary/12 text-primary border border-primary/30',
    ba: 'bg-white/5 text-on-surface border border-white/10',
    neutral: 'bg-surface-container-highest text-on-surface-variant',
    outline: 'bg-surface-container-high border border-outline-variant/20 text-on-surface',
    pulse:
      'bg-primary/10 border border-primary/20 backdrop-blur-md text-secondary uppercase tracking-wider',
  }[variant];

  return (
    <span className={`${baseStyles} ${variantStyles} ${className}`}>
      {variant === 'pulse' && (
        <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6] animate-pulse" />
      )}
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
