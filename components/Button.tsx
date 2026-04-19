'use client';
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'hovershow'; // For primary/secondary/other styles
  isIcon?: boolean; // For icon-specific styles
  disabled?: boolean; // For disabled state
  onClick?: () => void;
  ariaLabel?: string; // Accessible label for icon-only buttons
  className?: string; // Additional custom classes
}

const Button = ({
  children,
  href,
  variant = 'primary',
  isIcon = false,
  disabled = false,
  onClick,
  ariaLabel,
  className = '',
}: ButtonProps) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${isIcon ? styles.icon : ''}`.trim() + (className ? ` ${className}` : '');

  // If its a link
  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        role="button" // Ensure it behaves like a button
        aria-label={ariaLabel} // Accessible label for icon-only links
      >
        {children}
      </a>
    );
  }

  // If its a pure button
  return (
    <button
      onClick={onClick}
      className={buttonClass}
      disabled={disabled} // Native disabled attribute
      aria-label={ariaLabel} // Accessible label for icon-only buttons
    >
      {children}
    </button>
  );
};

export default Button;