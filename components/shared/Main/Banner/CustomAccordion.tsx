"use client";
import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'; 
import { cn } from '@/lib/utils';

interface AccordionProps {
  title: string;
  content: string;
  isOpenDefault?: boolean;
}

export const CustomAccordion = ({ title, content, isOpenDefault }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault || false);

  return (
    <Accordion type="single" collapsible className="relative w-[300px]">
      <AccordionItem value="item-1" className={`border p-4 rounded-lg shadow-lg ${isOpen ? 'bg-white' : 'bg-[#F8FBFF]'}`}>
        <AccordionTrigger
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl font-semibold text-[#25A8F5] flex justify-center items-center"
        >
          <span>{title}</span>
          <span 
            className={`absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-3xl rounded-full w-12 h-12 bg-[#25A8F5] text-white flex items-center justify-center transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
          >
            {isOpen ? '-' : '+'}
          </span>
        </AccordionTrigger>
        {isOpen && (
          <AccordionContent className="text-md text-black mt-4">
            {content}
          </AccordionContent>
        )}
      </AccordionItem>
    </Accordion>
  );
};
