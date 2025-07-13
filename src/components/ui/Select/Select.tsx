'use client';

import React, { useContext } from 'react';

import { ThemeContext } from '@/context/theme-provider';

interface SelectOption<T> {
  value: T;
  label: string;
}

interface ISelectProps<T> {
  options: SelectOption<T>[];
  onChange: (value: T) => void;
  placeholder?: string;
  ariaLabel: string;
}

export const Select = <T,>({ options, onChange, placeholder, ariaLabel }: ISelectProps<T>) => {
  const { theme } = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rawValue = e.target.value;
    const parsedValue = rawValue === 'null' ? null : isNaN(Number(rawValue)) ? rawValue : Number(rawValue);
    onChange(parsedValue as T);
  };

  const selectBaseStyles = 'w-full max-w-[300px] border rounded px-2 py-1 cursor-pointer transition-colors';

  const themeStyles =
    theme === 'dark' ? 'bg-teal-800 text-white border-teal-700' : 'bg-white text-black border-gray-300';

  const lightThemeTextStyle = theme === 'light' ? 'text-[#8d8d8d]' : '';
  const lightThemeFocusStyle = theme === 'light' ? 'focus:ring-1 focus:ring-[#8d8d8d] focus:border-[#8d8d8d]' : '';

  const darkThemeFocusStyle = theme === 'dark' ? 'focus:ring-1 focus:ring-white focus:border-white' : '';

  const optionStyle =
    theme === 'dark'
      ? { backgroundColor: '#0f766e', color: '#ffffff' }
      : { backgroundColor: '#ffffff', color: '#000000' };

  return (
    <select
      onChange={handleChange}
      className={`${selectBaseStyles} ${themeStyles} ${lightThemeTextStyle} ${lightThemeFocusStyle} ${darkThemeFocusStyle}`}
      defaultValue="null"
      aria-label={ariaLabel}
    >
      {placeholder && (
        <option value="null" hidden style={optionStyle}>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={String(option.value)} value={String(option.value)} style={optionStyle}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
