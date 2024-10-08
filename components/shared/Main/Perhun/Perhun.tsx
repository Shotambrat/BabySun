import React from "react";
import { cn } from "@lib/utils";
import { Button } from "@/components/ui";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Импортируем хук для локализации

interface Props {
  className?: string;
}

export const Perhun = ({ className }: Props) => {
  const t = useTranslations("Main.Instructor"); // Подключаем локализацию для раздела "Instructor"

  return (
    <section id="teachers" className={cn("bg-white py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex justify-center gap-8 max-lgx:flex-col">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={'/images/perhun/perhun.png'}
            width={1000}
            height={1000}
            quality={100}
            alt="Perhun Avatar"
            className="mdx:h-full mdx:w-auto w-full"
          />
        </div>
        <div className="flex-1 space-y-8">
          <h2
            className="text-4xl mdx:text-5xl font-bold text-black lineHeight30"
            style={{ lineHeight: "60px" }}
          >
            {t("name").split(" ")[0]} <br /> {t("name").split(" ")[1]} {/* Разбиваем имя на две строки */}
          </h2>
          <p className="text-xl font-medium w-full max-w-[400px]">
            {t("description")} {/* Описание берем из локализации */}
          </p>
          <div>
            <Link
              href="https://yandex.ru/video/preview/4503682067895474518"
            >
              <Button className="rounded-full px-8 py-4">
                {t("button")} {/* Кнопка тоже из локализации */}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
