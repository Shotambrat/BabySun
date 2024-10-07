import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import Image from "next/image"

interface Props {
  className?: string;
}

export const Gallery = ({ className }: Props) => {
  return (
    <div className={cn("bg-white py-24",className)}>
        <div className="w-full max-w-[1500px] mx-auto px-4 flex flex-col gap-8">
            <h3 className='text-3xl lg:text-4xl font-bold'>
                Галерея
            </h3>
            <div className="grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-3 gap-4">
              <Image
                src="/images/main/gallery/image (1).png"
                width={1000}
                height={1000}
                alt="Gallery Image 1"
              />
              <Image
                src="/images/main/gallery/image (1).png"
                width={1000}
                height={1000}
                alt="Gallery Image 1"
              />
              <Image
                src="/images/main/gallery/image (1).png"
                width={1000}
                height={1000}
                alt="Gallery Image 1"
              />
              <Image
                src="/images/main/gallery/image (1).png"
                width={1000}
                height={1000}
                alt="Gallery Image 1"
              />
              <Image
                src="/images/main/gallery/image (1).png"
                width={1000}
                height={1000}
                alt="Gallery Image 1"
              />
              <Image
                src="/images/main/gallery/image (1).png"
                width={1000}
                height={1000}
                alt="Gallery Image 1"
              />
            </div>
            <div className='w-full flex items-center justify-center'>
                <Button className="px-8 py-4 rounded-full text-xl">
                Загрузить еще
                </Button>
            </div>
        </div>
    </div>
  );
};