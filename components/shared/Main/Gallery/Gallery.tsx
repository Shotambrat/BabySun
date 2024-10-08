'use client'
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

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
  const [visiblePhotos, setVisiblePhotos] = useState(6); // Default to 6 photos for desktop
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Check if the window is mobile size (this uses window width to determine)
  useEffect(() => {
    const updatePhotos = () => {
      if (window.innerWidth < 768) {
        setVisiblePhotos(3); // Show 3 photos on mobile by default
      } else {
        setVisiblePhotos(6); // Show 6 photos on desktop by default
      }
    };

    updatePhotos(); // Check the window size on initial load
    window.addEventListener('resize', updatePhotos); // Add a resize listener
    return () => window.removeEventListener('resize', updatePhotos); // Cleanup listener on unmount
  }, []);

  const handleLoadMore = () => {
    setIsExpanded(true);
    setTimeout(() => {
      setVisiblePhotos(photos.length); // Reveal all photos after the animation duration
    }, 300); // Wait for the animation duration (in milliseconds)
  };

  return (
    <section id="gallery" className={cn("bg-white py-24", className)}>
      <div className="w-full max-w-[1500px] mx-auto px-4 flex flex-col gap-8">
        <h3 className="text-3xl lg:text-4xl font-bold">Галерея</h3>

        <PhotoProvider>
          <div className="grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-3 gap-4">
            {photos.slice(0, visiblePhotos).map((photo, index) => (
              <PhotoView key={index} src={photo.src}>
                <div
                  className={cn(
                    "relative overflow-hidden transition-transform duration-300",
                    isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{
                    transitionDelay: `${index * 50}ms`, // Add a small delay for each image to animate nicely
                  }}
                >
                  <Image
                    src={photo.src}
                    width={1000}
                    height={1000}
                    alt={photo.alt}
                    className="cursor-pointer transition-all hover:scale-105"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>

        {visiblePhotos < photos.length && (
          <div className="w-full flex items-center justify-center">
            <Button onClick={handleLoadMore} className="px-8 py-4 rounded-full">
              Загрузить еще
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
