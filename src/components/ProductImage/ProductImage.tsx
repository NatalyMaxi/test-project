'use client';

import { useState } from 'react';
import Image from 'next/image';

interface IProductImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const ProductImage = ({ src, alt, width = 300, height = 200, className = '' }: IProductImageProps) => {
  const [imageError, setImageError] = useState(false);

  const placeholder = '/placeholder.webp';

  const finalSrc = src || placeholder;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Image
      src={imageError ? placeholder : finalSrc}
      alt={alt}
      onError={handleImageError}
      width={width}
      height={height}
      className={`object-contain w-full h-full rounded ${className}`}
      priority
    />
  );
};
