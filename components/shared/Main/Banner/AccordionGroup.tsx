"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@lib/utils";
import { AccordeonItem } from "./AccordeonItem";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui";

interface Props {
  className?: string;
}

export const AccordionGroup = ({ className }: Props) => {
  const radiusRef = useRef<HTMLDivElement | null>(null);
  const [radius, setRadius] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (radiusRef.current) {
      const containerWidth = radiusRef.current.offsetWidth;
      setRadius(containerWidth / 2);
    }
    setLoading(true);
  }, [radiusRef]);

  // Позиции для каждого элемента на дуге
  const items = [
    {
      title: "Помощь в начале практики",
      description: "Помощь в начале практики",
      angle: 30,
    },
    {
      title: "Преподаватель международного уровня",
      description:
        "Обучение проводится Александром Перхуном, первым сертифицированным инструктором PSSE в России, признанным на международной арене. Его глубокие знания и опыт позволяют эффективно передавать технику Шрот.",
      angle: 60,
    },
    {
      title: "Уникальная методика лечения сколиоза и кифоза",
      description: "Уникальная методика лечения сколиоза и кифоза",
      angle: 120,
    },
    {
      title: "Сертификат по ШРОТ-терапии",
      description: "Сертификат по ШРОТ-терапии",
      angle: 150,
    },
  ];

  return (
    <div className="w-full">
      <div
        ref={radiusRef}
        className={cn(
          "w-full  h-[500px] relative max-lgx:hidden",
          { "opacity-0": !loading },
          className
        )}
      >
        {items.map((item, index) => {
          const angleInRadians = (item.angle * Math.PI) / 180;
          const x = radius + radius * Math.cos(angleInRadians);
          const y = radius - radius * Math.sin(angleInRadians);

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, 0)", // Держим верхнюю часть элемента на месте
              }}
            >
              <AccordeonItem
                title={item.title}
                description={item.description}
                className="max-w-[200px]"
              />
            </div>
          );
        })}
      </div>
      <div className="w-full relative lgx:hidden">
      <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 sm:basis-1/2 smx:basis-1/3">
            <div className="p-1">
                  <span className="text-2xl font-semibold">{index + 1}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
    </div>
  );
};
