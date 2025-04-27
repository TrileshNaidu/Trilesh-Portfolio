import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  outlined?: boolean;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  outlined = false,
  href,
  type = 'button'
}) => {
  const baseClasses = "px-6 py-3 rounded-md font-medium text-sm transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-300";
  
  const solidClasses = "bg-gradient-to-r from-emerald-300 to-emerald-500 text-white hover:shadow-lg";
  
  const outlinedClasses = "border-2 border-emerald-400 text-emerald-600 hover:bg-emerald-50 hover:shadow-md";
  
  const buttonClasses = `${baseClasses} ${outlined ? outlinedClasses : solidClasses} ${className}`;
  
  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;