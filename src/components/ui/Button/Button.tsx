'use client';

import { ButtonHTMLAttributes, ReactNode, useContext } from 'react';

import { ThemeContext } from '@/context/theme-provider';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...props }: IButtonProps) => {
  const { theme } = useContext(ThemeContext);

  const combinedClassName = `
    ${theme === 'dark' ? 'bg-teal-800 hover:bg-teal-700' : 'bg-gray-600 hover:bg-gray-700'}
    text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors duration-300
    ${className || ''}
  `;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
