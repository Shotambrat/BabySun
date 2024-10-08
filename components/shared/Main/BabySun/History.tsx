import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl"; // Подключаем локализацию

interface Props {
  className?: string;
}

export const History = ({ className }: Props) => {
  const t = useTranslations("BabySun.history"); // Подключаемся к разделу "history" в локализации

  return (
    <div className={cn("py-24 bg-white", className)}>
      <div className="w-full max-w-[1500px] mx-auto flex max-lgx:flex-col-reverse gap-12 lgx:gap-12 px-4">
        <div className="flex-1">
          <Image
            src={"/images/main/bs/history.png"}
            width={1000}
            height={1000}
            alt="Office photo when began"
            quality={100}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h3 className="text-5xl font-bold">
            {t("title")} <br />
            <span className="text-[#009FE3]">{t("subtitle")}</span>
          </h3>
          <p className="text-lg font-medium w-full max-w-[500px] leading-6">
            {t("description")}
          </p>
          {/* <div>
            <Button className="text-xl font-semibold text-white px-16 rounded-full py-4 bg-[#009FE3]">
              {t("licenses")}
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
