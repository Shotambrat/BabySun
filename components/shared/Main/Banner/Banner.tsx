"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import { CustomAccordion } from './CustomAccordion'; 
import { Request } from '../../Request/Request'; 

export const Banner = ({ className }: Props) => {
  const accordionItems = [
    { title: 'Уникальная методика лечения сколиоза и кифоза', content: 'Описание методики...', isOpenDefault: false },
    { title: 'Сертификат по ШРОТ-терапии', content: 'Описание сертификата...', isOpenDefault: false },
    { title: 'Преподаватель международного уровня', content: 'Описание преподавателя...', isOpenDefault: true },
    { title: 'Помощь в начале практики', content: 'Описание помощи...', isOpenDefault: false }
  ];

  return (
    <div className={cn("bg-[#F8FBFF] h-screen60 mdx:h-screen70 flex flex-col items-center justify-center relative", className)}>
      {/* Текстовый блок и кнопка */}
      <div className="text-center mb-10">
        <h1 className="text-4xl mdx:text-5xl font-semibold leading-tight text-black">
          Станьте специалистом по <span className="text-[#25A8F5]">ШРОТ-терапии</span>
        </h1>
        <div className="mt-6">
          <Request /> {/* Кнопка "Записаться" */}
        </div>
      </div>

      {/* Карточки-аккордеоны, размещенные по полукругу */}
      <div className="relative w-full max-w-7xl flex justify-between items-center">
        <div className="absolute top-[-150px] left-[15%]">
          <CustomAccordion title={accordionItems[0].title} content={accordionItems[0].content} />
        </div>

        <div className="absolute top-[-180px] left-[40%]">
          <CustomAccordion title={accordionItems[1].title} content={accordionItems[1].content} />
        </div>

        <div className="absolute top-[-180px] right-[40%]">
          <CustomAccordion title={accordionItems[2].title} content={accordionItems[2].content} isOpenDefault={true} />
        </div>

        <div className="absolute top-[-150px] right-[15%]">
          <CustomAccordion title={accordionItems[3].title} content={accordionItems[3].content} />
        </div>
      </div>
    </div>
  );
};
