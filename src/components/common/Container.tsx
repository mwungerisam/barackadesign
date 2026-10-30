import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
  id,
}) => {
  const sizeMap = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <div
      id={id}
      className={`mx-auto w-full px-5 sm:px-8 lg:px-12 ${sizeMap[size]} ${className}`}
    >
      {children}
    </div>
  );
};
