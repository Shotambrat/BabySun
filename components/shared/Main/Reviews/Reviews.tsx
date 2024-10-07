import React from "react";
import { cn } from "@lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { Link } from "@/i18n/routing";

interface Props {
  className?: string;
}

const reviews = [
  {
    name: "Валерий Валерьевич",
    date: "19.08.2024",
    review:
      "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
    social: {
      name: "instagram",
      link: "https://www.instagram.com/",
    },
  },
  {
    name: "Валерий Валерьевич",
    date: "19.08.2024",
    review:
      "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
    social: {
      name: "instagram",
      link: "https://www.instagram.com/",
    },
  },
  {
    name: "Валерий Валерьевич",
    date: "19.08.2024",
    review:
      "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
    social: {
      name: "instagram",
      link: "https://www.instagram.com/",
    },
  },
  {
    name: "Валерий Валерьевич",
    date: "19.08.2024",
    review:
      "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
    social: {
      name: "instagram",
      link: "https://www.instagram.com/",
    },
  },
  {
    name: "Валерий Валерьевич",
    date: "19.08.2024",
    review:
      "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
    social: {
      name: "instagram",
      link: "https://www.instagram.com/",
    },
  },
  {
    name: "Валерий Валерьевич",
    date: "19.08.2024",
    review:
      "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
    social: {
      name: "instagram",
      link: "https://www.instagram.com/",
    },
  },
  {
    name: "Валерий Валерьевич",
    date: "19.08.2024",
    review:
      "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
    social: {
      name: "instagram",
      link: "https://www.instagram.com/",
    },
  },
  {
    name: "Валерий Валерьевич",
    date: "19.08.2024",
    review:
      "Специалист молодец. Если возникает какая-то проблема, я объязательно вернусь!",
    social: {
      name: "instagram",
      link: "https://www.instagram.com/",
    },
  },
];

export const Reviews = ({ className }: Props) => {
  return (
    <section className={cn("bg-white py-24", className)}>
      <Carousel className="space-y-12">
        <h3 className="text-3xl lg:text-4xl font-bold px-4 w-full max-w-[1500px] mx-auto">
          Отзывы
        </h3>
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem className="pl-1 mdx:basis-1/2 lgx:basis-1/3">
              <div className="bg-[#F8FBFF] mx-2 p-8 h-[400px] rounded-2xl flex flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <h6 className="text-2xl font-semibold">{review.name}</h6>
                    <p className="text-neutral-300 text-lg">{review.date}</p>
                  </div>
                  <p className="text-xl font-medium">
                    {review.review}
                  </p>
                </div>
                <Link
                  className="text-lg font-medium text-[#009FE3]"
                  href={review.social.link}
                >
                  {review.social.name}
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
