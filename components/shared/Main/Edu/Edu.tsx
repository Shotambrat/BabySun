import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Edu = ({ className }: Props) => {
  return (
    <section id="education" className={cn("bg-[#F8FBFF] py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex gap-8 flex-col">
        <h3 className="text-3xl lg:text-4xl font-bold">Чему научат</h3>
        <div>
          <div className="grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-3">
            <div className="border border-[#CAD7E8] hover:bg-white cursor-pointer transition-all duration-200 p-8 flex flex-col justify-between gap-8 mdx:gap-12 lgx:gap-24">
              <Image
                src={"/svg/main/edu/Vector (1).svg"}
                width={100}
                height={100}
                quality={100}
                alt="Svg Icon of education"
                className="mdx:h-8 mdx:w-8 h-12 w-12"
              />
              <p className="font-semibold text-xl">
                Диагностике сколиоза и других деформаций позвоночника
              </p>
            </div>
            <div className="border border-[#CAD7E8] hover:bg-white cursor-pointer transition-all duration-200 p-8 flex flex-col justify-between gap-8 mdx:gap-12 lgx:gap-24">
              <Image
                src={"/svg/main/edu/Group.svg"}
                width={100}
                height={100}
                quality={100}
                alt="Svg Icon of education"
                className="mdx:h-5 mdx:w-5 h-8 w-8"
              />
              <p className="font-semibold text-xl">
              Индивидуальному подбору упражнений для пациентов
              </p>
            </div>
            <div className="border border-[#CAD7E8] hover:bg-white cursor-pointer transition-all duration-200 p-8 flex flex-col justify-between gap-8 mdx:gap-12 lgx:gap-24">
              <Image
                src={"/svg/main/edu/Vector (2).svg"}
                width={100}
                height={100}
                quality={100}
                alt="Svg Icon of education"
                className="mdx:h-8 mdx:w-8 h-12 w-12"
              />
              <p className="font-semibold text-xl">
              Коррекции осанки с использованием дыхательных техник
              </p>
            </div>
            <div className="border border-[#CAD7E8] lgx:hidden hover:bg-white cursor-pointer transition-all duration-200 p-8 flex flex-col justify-between gap-8 mdx:gap-12 lgx:gap-24">
              <Image
                src={"/svg/main/edu/Vector (3).svg"}
                width={100}
                height={100}
                quality={100}
                alt="Svg Icon of education"
                className="mdx:h-8 mdx:w-8 h-12 w-12"
              />
              <p className="font-semibold text-xl">
              Применению метода Шрот для профилактики и лечения сколиоза у детей и взрослых
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lgx:grid-cols-2">
            <div className="border border-[#CAD7E8] max-lgx:hidden hover:bg-white cursor-pointer transition-all duration-200 p-8 flex flex-col justify-between gap-8 mdx:gap-12 lgx:gap-24">
              <Image
                src={"/svg/main/edu/Vector (3).svg"}
                width={100}
                height={100}
                quality={100}
                alt="Svg Icon of education"
                className="mdx:h-6 mdx:w-6 h-8 w-8"
              />
              <p className="font-semibold text-xl">
              Применению метода Шрот для профилактики и лечения сколиоза у детей и взрослых
              </p>
            </div>
            <div className="border border-[#CAD7E8] hover:bg-white cursor-pointer transition-all duration-200 p-8 flex flex-col justify-between gap-8 mdx:gap-12 lgx:gap-24">
              <Image
                src={"/svg/main/edu/Vector (4).svg"}
                width={100}
                height={100}
                quality={100}
                alt="Svg Icon of education"
                className="mdx:h-8 mdx:w-8 h-12 w-12"
              />
              <p className="font-semibold text-xl">
              Ведению пациента от диагностики до успешного восстановления.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
