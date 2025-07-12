import Image from 'next/image';

import { THREE_THRESHOLD } from '@/utils/constants/constants';

interface IGalleryProps {
  images: string[];
  alt: string;
}

export const Gallery = ({ images, alt }: IGalleryProps) => {
  const imageCount = images.length;
  const isThree = imageCount === THREE_THRESHOLD;

  const gridCols = isThree ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3';

  const sizes = isThree
    ? '(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw'
    : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-4 mb-6`}>
      {images.map((img, idx) => (
        <div key={idx} className="relative w-full rounded overflow-hidden aspect-square">
          <Image src={img} alt={`${alt} — ${idx + 1}`} fill sizes={sizes} className="absolute inset-0 object-cover" />
        </div>
      ))}
    </div>
  );
};
