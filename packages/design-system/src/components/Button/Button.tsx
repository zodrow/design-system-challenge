// src/components/Button/Button.tsx
import React from 'react';
import './Button.css';

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className="my-button">{children}</button>;
};
