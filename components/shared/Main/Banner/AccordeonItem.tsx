import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@lib/utils";

interface Props {
  title: string;
  description: string;
  className?: string;
}

export const AccordeonItem = ({ title, description, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для управления открытием аккордеона
  const contentRef = useRef<HTMLDivElement | null>(null); // Реф для анимации контента
  const accordionRef = useRef<HTMLDivElement | null>(null); // Реф для управления z-index всего аккордеона

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        // Анимация открытия контента
        gsap.to(contentRef.current, {
          height: "auto",
          duration: 0.6,
          ease: "power3.inOut",
          transformOrigin: "top",
        });

        // Увеличиваем z-index при открытии
        gsap.to(accordionRef.current, {
          zIndex: 9999, // Ставим приоритетное значение z-index
          duration: 0,
        });
      } else {
        // Анимация закрытия контента
        gsap.to(contentRef.current, {
          height: 0,
          duration: 0.6,
          ease: "power3.inOut",
        });

        // Уменьшаем z-index после закрытия
        gsap.to(accordionRef.current, {
          zIndex: 1, // Возвращаем z-index обратно
          delay: 0.6, // Задержка, чтобы z-index изменился после завершения анимации закрытия
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={accordionRef}
      className={cn(
        "min-w-[310px] max-w-[360px] p-4 bg-white rounded-xl transition-all duration-300 flex flex-col shadow-custom relative z-0",
        className
      )}
    >
      <div className="relative flex justify-center z-10">
        <h2 className="text-center text-xl text-[#009FE3] font-semibold">
          {title}
        </h2>
        <div
          className="absolute w-9 h-9 flex items-center justify-center -bottom-9 rounded-full text-3xl text-white bg-[#009FE3] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)} // Открытие/закрытие
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-full w-full p-2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          ) : (
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
          )}
        </div>
      </div>

      <div
        ref={contentRef}
        className={`overflow-hidden relative space-y-4 z-0 ${isOpen ? "mt-4" : ""}`}
        style={{ height: 0, transformOrigin: "top" }} // Начальная высота 0 и transformOrigin для роста вниз
      >
        <hr />
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};
