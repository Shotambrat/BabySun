import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
}

export const About = ({ className }: Props) => {
  return (
    <section id="course" className={cn("bg-white py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex gap-8 max-lgx:flex-col">
      <h2
            className="text-3xl mdx:hidden font-bold text-black lineHeight30"
            style={{ lineHeight: "60px" }}
            // Inline style for max screen width of 650px
          >
            О курсе <span className="text-[#25A8F5]">ШРОТ-терапии</span>
          </h2>
        <div className="flex-1">
            <Image
            src={'/images/main/about/about.png'}
            width={1000}
            height={1000}
            alt="About Image"
            quality={100}
            className="w-full"
            />
        </div>
        <div className="flex-1 space-y-4">
          <h2
            className="text-4xl mdx:text-5xl max-mdx:hidden font-bold text-black lineHeight30"
            style={{ lineHeight: "60px" }}
            // Inline style for max screen width of 650px
          >
            О курсе <br /> <span className="text-[#25A8F5]">ШРОТ-терапии</span>
          </h2>
          <p className="text-xl font-medium">
            Обучение по методу Шрот направлено на реабилитацию пациентов с
            деформациями позвоночника, включая сколиоз, кифоз и лордоз. Курс
            сочетает теоретическую и практическую подготовку, что позволяет
            глубоко изучить физиологию искривлений позвоночника и методы их
            коррекции. Метод Шрот признан во всем мире как эффективное средство
            нехирургического лечения сколиоза, и наша программа поможет вам
            освоить его на практике.
          </p>
        </div>
      </div>
    </section>
  );
};
