import React from "react";
import { cn } from "@lib/utils";

interface Props {
  className?: string;
}

export const Plan = ({ className }: Props) => {
  return (
    <section className={cn("bg-white py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex gap-8 flex-col">
        <div className="space-y-4">
          <h3 className="text-3xl lg:text-4xl font-bold">План обучения</h3>
          <p className="font-medium text-lg">
            Обучение проходит в два этапа: теоретическая подготовка и
            интенсивная практическая работа с пациентами. Все занятия ведутся на
            базе клиники Baby Sun, что позволяет участникам сразу же применить
            полученные знания на практике.
          </p>
        </div>
        <div>
          <hr />
          <div className="my-8 flex max-mdx:flex-col gap-6">
            <div className="flex-1 flex flex-col gap-1">
              <h6 className="text-lg text-[#009FE3] font-semibold">Модуль 1</h6>
              <h4 className="text-3xl font-bold w-full max-w-[400px]">ВВЕДЕНИЕ В МЕТОДИКУ ШРОТ</h4>
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-xl">
                Анатомия и физиология позвоночника. <br /> Теоретические аспекты
                диагностики сколиоза
              </p>
            </div>
          </div>
          <hr />
          <hr />
          <div className="my-8 flex max-mdx:flex-col gap-6">
            <div className="flex-1 flex flex-col gap-1">
              <h6 className="text-lg text-[#009FE3] font-semibold">Модуль 2</h6>
              <h4 className="text-3xl font-bold w-full max-w-[400px]">ПРАКТИЧЕСКАЯ ЧАСТЬ</h4>
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-xl">
              Индивидуальный подход к пациентам. <br /> Разработка корректирующих упражнений
              </p>
            </div>
          </div>
          <hr />
          <hr />
          <div className="my-8 flex max-mdx:flex-col gap-6">
            <div className="flex-1 flex flex-col gap-1">
              <h6 className="text-lg text-[#009FE3] font-semibold">Модуль 3</h6>
              <h4 className="text-3xl font-bold w-full max-w-[400px]">РАБОТА С ОСАНКОЙ И ДЫХАНИЕМ</h4>
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-xl">
              Использование зеркал и других вспомогательных инструментов
              </p>
            </div>
          </div>
          <hr />
          <hr />
          <div className="my-8 flex max-mdx:flex-col gap-6">
            <div className="flex-1 flex flex-col gap-1">
              <h6 className="text-lg text-[#009FE3] font-semibold">Модуль 4</h6>
              <h4 className="text-3xl font-bold w-full max-w-[400px]">ФИНАЛЬНАЯ СЕРТИФИКАЦИЯ</h4>
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-xl">
              Оценка практических навыков и знаний
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};
