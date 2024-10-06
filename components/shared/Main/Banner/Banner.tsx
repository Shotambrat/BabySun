"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import { Request } from '../../Request/Request'; 
import { AccordionGroup } from './AccordionGroup';

interface Props {
  className?: string;
}

export const Banner = ({ className }: Props) => {

  return (
    <div className={cn("bg-[#F8FBFF] relative h-screen60 mdx:h-screen70 flex flex-col items-center py-24 justify-end", className)}>
      {/* Текстовый блок и кнопка */}
      <div className="relative w-full max-mdx:max-w-[320px] max-w-[450px] text-center">
        <h1 className="text-4xl mdx:text-5xl font-bold text-black" 
          style={{ lineHeight: '60px' }} 
          // Inline style for max screen width of 650px
        >
          Станьте специалистом по <span className="text-[#25A8F5]">ШРОТ-терапии</span>
        </h1>
        {/* Медиазапрос для изменения line-height */}
        <style jsx>{`
          @media (max-width: 650px) {
            h1 {
              line-height: 45px !important;
            }
          }
        `}</style>
        <div className="mt-6 max-lgx:mb-12">
          <Request className='px-12 text-xl py-4' /> {/* Кнопка "Записаться" */}
        </div>
      </div>
      <div className='lgx:absolute relative lgx:px-24 lgx:pb-24 h-full w-full flex inset-0'>
        <AccordionGroup className='h-full relative' />
      </div>
    </div>
  );
};
