'use client';
// Generic Button component, styled with rounded corners
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  style?: string;
}

const Button = ({ children, href, style }: ButtonProps) => {
  var additionalStyle = "";
  if(style === 'icon') {
    additionalStyle = styles.icon;
  }

  return (
    href ? (
      <a href={href} className={`${styles.button} ${additionalStyle}`}>
        {children}
      </a>
    ) : (
      <button className={`${styles.button} ${additionalStyle}`}>
        {children}
      </button>
    )
  )
};

export default Button;