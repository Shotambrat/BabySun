import React from 'react';
import { cn } from '@lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui';

interface Props {
  className?: string;
}

export const Faq = ({ className }: Props) => {
  return (
    <section className={cn("bg-white py-24", className)}>
        <div className='w-full max-w-[1500px] px-4 mx-auto flex flex-col gap-12'>
            <h3 className='text-3xl lg:text-4xl font-bold'>
                Ответы на вопросы
            </h3>
            <Accordion type='single' collapsible className='w-full'>
                <AccordionItem className='py-4' value='item-1'>
                    <AccordionTrigger className='text-2xl text-start font-semibold'>
                        Какие требование к участникам?
                    </AccordionTrigger>
                    <AccordionContent className='text-lg font-medium'>
                        Необходимое условие - высшее или среднее медицинское образование.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className='py-4' value='item-2'>
                    <AccordionTrigger className='text-2xl text-start font-semibold'>
                        Как долго длится курс?
                    </AccordionTrigger>
                    <AccordionContent className='text-lg font-medium'>
                        Необходимое условие - высшее или среднее медицинское образование.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className='py-4' value='item-3'>
                    <AccordionTrigger className='text-2xl text-start font-semibold'>
                        Есть ли поддержка после курса?
                    </AccordionTrigger>
                    <AccordionContent className='text-lg font-medium'>
                        Необходимое условие - высшее или среднее медицинское образование.
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    </section>
  );
};