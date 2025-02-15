'use client';
// Generic Button component, styled with rounded corners
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => (
  <button className={styles.button}>{children}</button>
);

export default Button;