import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyle = "px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-dark-900 text-white hover:bg-gold-500 hover:text-white border border-transparent",
    outline: "bg-transparent text-dark-900 border border-dark-900 hover:bg-dark-900 hover:text-white",
    white: "bg-white text-dark-900 hover:bg-gray-100 border border-transparent"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};