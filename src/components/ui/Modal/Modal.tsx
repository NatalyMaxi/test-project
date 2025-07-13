'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

import { Button } from '@/components';
import { useModalClose } from '@/hooks/useModalClose';

interface IModalProps {
  imageUrl: string | null;
  alt: string | null;
  onClose: () => void;
}

export const Modal = ({ imageUrl, alt, onClose }: IModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useModalClose(modalRef, handleClose);

  useEffect(() => {
    if (imageUrl) {
      setIsVisible(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
  }, [imageUrl]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black/75 flex items-center justify-center z-50 ${isClosing ? 'fade-out' : 'fade-in'}`}
    >
      <div className="max-w-5xl max-h-5xl relative slide-in" ref={modalRef}>
        <Button
          onClick={handleClose}
          type="button"
          aria-label="Закрыть модальное окно"
          className="absolute top-2 right-2 rounded-full p-2 w-10 h-10 min-w-0 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X className="h-6 w-6" />
        </Button>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={alt || 'Modal Image'}
            width={600}
            height={600}
            className="rounded-lg object-contain max-h-[80vh] w-auto"
          />
        )}
      </div>
    </div>
  );
};
