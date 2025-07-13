'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

import { Modal } from '@/components';
import { THREE_THRESHOLD } from '@/utils/constants/constants';

interface IGalleryProps {
  images: string[];
  alt: string;
}

export const Gallery = ({ images, alt }: IGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageCount = images.length;
  const isThree = imageCount === THREE_THRESHOLD;

  const gridCols = isThree ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3';

  const sizes = isThree
    ? '(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw'
    : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  const openModal = useCallback((imageUrl: string) => {
    setSelectedImage(imageUrl);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <>
      <div className={`grid grid-cols-1 ${gridCols} gap-4 mb-6`}>
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full rounded overflow-hidden aspect-square cursor-pointer"
            onClick={() => openModal(img)}
            aria-label={`Открыть изображение: ${alt} номер ${index + 1}`}
            role="button"
          >
            <Image
              src={img}
              alt={`${alt} — ${index + 1}`}
              fill
              sizes={sizes}
              className="absolute inset-0 object-cover"
            />
          </div>
        ))}
      </div>

      <Modal imageUrl={selectedImage} alt={alt} onClose={closeModal} />
    </>
  );
};
