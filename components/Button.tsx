import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "py-2 px-8 rounded-md font-medium text-sm transition-all duration-300 ease-in-out backdrop-blur-sm";
  
  // Adjusted variants for better contrast in light/dark modes
  const variants = {
    // Primary: White in dark mode, Black in light mode (usually) - or just White button which pops on dark, and dark button on light?
    // Let's stick to standard "Action" button. 
    // In Dark mode: White bg, Black text. In Light mode: Black bg, White text.
    primary: "bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 border border-transparent",
    
    // Secondary: Dark Gray in dark mode, Light Gray in light mode
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-700/80 border border-transparent",
    
    // Outline: Borders adapt
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
    
    // Ghost
    ghost: "text-gray-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;