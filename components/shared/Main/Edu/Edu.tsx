import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const Edu = ({ className }: Props) => {
  const t = useTranslations("Main.Learn");

  const points = t.raw("points"); // Получаем массив points из локализации

  const images = [
    "/svg/main/edu/Vector (1).svg",
    "/svg/main/edu/Group.svg",
    "/svg/main/edu/Vector (2).svg",
    "/svg/main/edu/Vector (3).svg",
    "/svg/main/edu/Vector (4).svg"
  ];

  return (
    <section id="education" className={cn("bg-[#F8FBFF] py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex gap-8 flex-col">
        <h3 className="text-3xl lg:text-4xl font-bold">{t("title")}</h3>
        <div>
          <div className="grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-3">
            {points.slice(0, 3).map((point: string, index: number) => (
              <div
                key={index}
                className="border border-[#CAD7E8] hover:bg-white cursor-pointer transition-all duration-200 p-8 flex flex-col justify-between gap-8 mdx:gap-12 lgx:gap-24"
              >
                <Image
                  src={images[index]}
                  width={100}
                  height={100}
                  quality={100}
                  alt={`Icon ${index + 1}`}
                  className="mdx:h-8 mdx:w-8 h-12 w-12"
                />
                <p className="font-semibold text-xl">{point}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lgx:grid-cols-2">
            {points.slice(3, 5).map((point: string, index: number) => (
              <div
                key={index + 3}
                className="border border-[#CAD7E8] hover:bg-white cursor-pointer transition-all duration-200 p-8 flex flex-col justify-between gap-8 mdx:gap-12 lgx:gap-24"
              >
                <Image
                  src={images[index + 3]}
                  width={100}
                  height={100}
                  quality={100}
                  alt={`Icon ${index + 4}`}
                  className="mdx:h-8 mdx:w-8 h-12 w-12"
                />
                <p className="font-semibold text-xl">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
