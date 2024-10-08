"use client";
import React, { useRef, useEffect, useState } from "react";
import { AccordeonItem } from "./AccordeonItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { Request } from "../../Request/Request";
import { cn } from "@lib/utils";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const AccordionGroup = ({ className }: Props) => {
  const t = useTranslations("");
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
      title: t("Main.Banner.Accordions.title1"),
      description: t("Main.Banner.Accordions.description1"),
      angle: 30,
    },
    {
      title: t("Main.Banner.Accordions.title2"),
      description: t("Main.Banner.Accordions.description2"),
      angle: 60,
    },
    {
      title: t("Main.Banner.Accordions.title4"),
      description: t("Main.Banner.Accordions.description4"),
      angle: 150,
    },
    {
      title: t("Main.Banner.Accordions.title3"),
      description: t("Main.Banner.Accordions.description3"),
      angle: 120,
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
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {items.map((elem, index) => (
              <CarouselItem
                key={index}
                className="pl-1 smx:basis-1/2 lg:basis-1/3"
              >
                {/* Обернем карточку в DialogTrigger */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="p-4 rounded-2xl h-[75px] relative bg-white shadow-custom mx-1 cursor-pointer">
                      <h2
                        className="text-[#009FE3] text-sm font-semibold w-full max-w-[90%]"
                        style={{ lineHeight: "16px" }}
                      >
                        {elem.title}
                      </h2>
                      <div className="h-8 w-8 text-white bg-[#009FE3] rounded-full absolute right-0 bottom-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-full w-full p-2"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </div>
                  </DialogTrigger>

                  {/* Содержимое диалогового окна */}
                  <DialogContent className="space-y-4">
                    <DialogHeader className="space-y-4">
                      <DialogTitle>
                        <h2 className="w-full text-3xl font-semibold leading-8 ">
                          {elem.title}
                        </h2>

                        {/* <button
                          className="absolute top-4 right-4"
                          onClick={() => setIsOpen(false)}
                          aria-label="Close modal"
                        >
                          <X size={24} />
                        </button> */}
                      </DialogTitle>

                      <DialogDescription className="text-xl">
                        {elem.description}
                      </DialogDescription>
                    </DialogHeader>
                    <Request
                      className="w-full py-4 text-xl"
                      title="Отправить заявку"
                    />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
