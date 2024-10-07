import React from "react";
import { cn } from "@lib/utils";
import { Button } from "@/components/ui";
import { Link } from "@/i18n/routing";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Perhun = ({ className }: Props) => {
  return (
    <section className={cn("bg-white py-24", className)}>
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
            // Inline style for max screen width of 650px
          >
            Александр <br /> Перхун
          </h2>
          <p className="text-xl font-medium w-full max-w-[400px]">
            Сертифицированный инструктор PSSE (Schroth Method by Nikos
            Karavidas), физический терапевт и основатель &quot;Scolios clinic&quot; в
            Краснодаре. Его центр является крупнейшим на юге России и
            специализируется на лечении сколиоза с использованием уникальной
            методики Шрот
          </p>
          <div>
            <Link
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <Button className="rounded-full px-8 py-4">
                Смотреть интервью
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
