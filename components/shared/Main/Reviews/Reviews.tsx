import React from "react";
import { cn } from "@lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const Reviews = ({ className }: Props) => {
  const t = useTranslations('Main.Reviews');

  // Список всех ключей для отзывов
  const reviewKeys = [
    "maria_nosachevaa",
    "senshinanatali",
    "_zhukova_e",
    "_kidakoeva_",
    "helenbelsev14",
    "voycenko_aigul",
    "jykova2021",
    "chebotarevajuliya",
    "zalinatimova"
  ];

  return (
    <section id="reviews" className={cn("bg-white py-24", className)}>
      <Carousel className="space-y-12">
        <h3 className="text-3xl lg:text-4xl font-bold px-4 w-full max-w-[1500px] mx-auto">
          {t('title')}
        </h3>
        <CarouselContent>
          {reviewKeys.map((key) => (
            <CarouselItem key={key} className="pl-1 mdx:basis-1/2 lgx:basis-1/3">
              <div className="bg-[#F8FBFF] mx-2 p-8 h-[400px] rounded-2xl flex flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <h6 className="text-2xl font-semibold">
                      {t(`${key}.nickname`)}
                    </h6>
                    <p className="text-neutral-300 text-lg">
                      {t(`${key}.date`)}
                    </p>
                  </div>
                  <p className="text-xl font-medium line-clamp-6">
                    {t(`${key}.review`)}
                  </p>
                </div>
                <Link
                  className="text-lg font-medium text-[#009FE3]"
                  href={t(`${key}.link`)}
                >
                  {t(`${key}.social`)}
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
