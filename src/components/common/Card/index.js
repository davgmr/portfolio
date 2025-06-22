import React from 'react';

const Card = ({ 
  children, 
  className = '',
  variant = 'default',
  hover = false,
  ...props 
}) => {
  const baseClasses = "bg-white rounded-lg shadow-sm border border-neutral-200";
  
  const variants = {
    default: "p-6",
    compact: "p-4",
    spacious: "p-8"
  };
  
  const hoverEffect = hover ? "hover:shadow-md hover:border-neutral-300 transition-all duration-200" : "";
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverEffect} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;