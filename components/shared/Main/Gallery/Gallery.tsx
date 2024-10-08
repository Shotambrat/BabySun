"use client"
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useTranslations } from 'next-intl';

interface Props {
  className?: string;
}

const photos = [
  { src: "/images/main/gallery/Rectangle 52.png", alt: "Gallery Image 1" },
  { src: "/images/main/gallery/Rectangle 53.png", alt: "Gallery Image 2" },
  { src: "/images/main/gallery/image.png", alt: "Gallery Image 3" },
  { src: "/images/main/gallery/image (1).png", alt: "Gallery Image 4" },
  { src: "/images/main/gallery/image (2).png", alt: "Gallery Image 5" },
  { src: "/images/main/gallery/image (3).png", alt: "Gallery Image 6" },
];

export const Gallery = ({ className }: Props) => {
  const t = useTranslations('Main.Gallery');
  const [visiblePhotos, setVisiblePhotos] = useState(6); // Show 6 photos by default on desktop
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Track if gallery is expanded

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    // Adjust initial visible photos based on mobile or desktop
    setVisiblePhotos(isMobile ? 3 : 6);
  }, [isMobile]);

  const handleToggleGallery = () => {
    if (isExpanded) {
      // Collapse the gallery
      setIsExpanded(false);
      setVisiblePhotos(isMobile ? 3 : 6);
    } else {
      // Expand the gallery
      setIsExpanded(true);
      setVisiblePhotos(photos.length); // Show all photos
    }
  };

  return (
    <section id="gallery" className={cn("bg-white py-24", className)}>
      <div className="w-full max-w-[1500px] mx-auto px-4 flex flex-col gap-8">
        <h3 className="text-3xl lg:text-4xl font-bold">{t('title')}</h3>
        <PhotoProvider>
          <div
            className={cn(
              'grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-3 gap-4 transition-all duration-300',
              isExpanded ? 'max-h-full' : isMobile ? 'max-h-[800px]' : 'max-h-[1200px]' // Dynamic height based on expanded state
            )}
          >
            {photos.slice(0, visiblePhotos).map((photo, index) => (
              <PhotoView key={index} src={photo.src}>
                <Image
                  src={photo.src}
                  width={1000}
                  height={1000}
                  alt={photo.alt}
                  className="cursor-pointer transition-transform duration-300 hover:scale-105"
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>

        <div className="w-full flex items-center justify-center">
          <Button onClick={handleToggleGallery} className="px-8 py-4 rounded-full">
            {isExpanded ? t('collapseButton') : t('button')}
          </Button>
        </div>
      </div>
    </section>
  );
};
