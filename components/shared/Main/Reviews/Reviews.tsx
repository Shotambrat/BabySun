import React from 'react';
import { cn } from '@lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui';

interface Props {
  className?: string;
}

const reviews = [
    {
        name: "Валерий Валерьевич",
        date: "19.08.2024",
        review: "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
        social: {
            name: "instagram",
            link: "https://www.instagram.com/"
        }
    },
    {
        name: "Валерий Валерьевич",
        date: "19.08.2024",
        review: "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
        social: {
            name: "instagram",
            link: "https://www.instagram.com/"
        }
    },
    {
        name: "Валерий Валерьевич",
        date: "19.08.2024",
        review: "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
        social: {
            name: "instagram",
            link: "https://www.instagram.com/"
        }
    },
    {
        name: "Валерий Валерьевич",
        date: "19.08.2024",
        review: "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
        social: {
            name: "instagram",
            link: "https://www.instagram.com/"
        }
    },
    {
        name: "Валерий Валерьевич",
        date: "19.08.2024",
        review: "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
        social: {
            name: "instagram",
            link: "https://www.instagram.com/"
        }
    },
    {
        name: "Валерий Валерьевич",
        date: "19.08.2024",
        review: "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
        social: {
            name: "instagram",
            link: "https://www.instagram.com/"
        }
    },
    {
        name: "Валерий Валерьевич",
        date: "19.08.2024",
        review: "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
        social: {
            name: "instagram",
            link: "https://www.instagram.com/"
        }
    },
    {
        name: "Валерий Валерьевич",
        date: "19.08.2024",
        review: "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
        social: {
            name: "instagram",
            link: "https://www.instagram.com/"
        }
    },
]

export const Reviews = ({ className }: Props) => {
  return (
    <section className={cn("bg-white py-24", className)}>
        <Carousel>
            <h3 className='text-3xl lg:text-4xl font-bold px-4'>
                Отзывы
            </h3>
            <CarouselContent>

            {
                reviews.map((review, index) => (
                <CarouselItem className='pl-1 mdx:basis-1/2 lgx:basis-1/3'>
                    <div className='bg-[#F8FBFF] mx-2 p-8 h-[400px] rounded-2xl flex flex-col justify-between'>

                    </div>
                </CarouselItem>
                    
                ))
            }
            </CarouselContent>
        </Carousel>
    </section>
  );
};