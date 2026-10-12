import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  asAnchor?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  asAnchor = false,
  href,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-label-md rounded-full transition-all duration-300 cursor-pointer select-none';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary shadow-[0_0_24px_-4px_rgba(208,188,255,0.45)] hover:shadow-[0_0_32px_0px_rgba(160,120,255,0.6)]',
    secondary:
      'bg-surface-container/80 text-secondary border border-secondary/40 hover:border-secondary hover:shadow-[0_0_20px_-3px_rgba(76,215,246,0.35)]',
    ghost:
      'bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-white/5',
    outline:
      'bg-surface-container/60 hover:bg-surface-container-high border border-outline-variant/30 text-on-surface backdrop-blur-xl',
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} className={combinedClasses}>
        {icon && iconPosition === 'left' && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span>{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};
