import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  href,
  isExternal,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-medicalBlue hover:bg-blue-600 text-white focus:ring-blue-500 shadow-md hover:shadow-lg",
    secondary: "bg-softTeal hover:bg-teal-600 text-white focus:ring-teal-500 shadow-md hover:shadow-lg",
    outline: "border-2 border-medicalBlue text-medicalBlue hover:bg-medicalBlue hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};