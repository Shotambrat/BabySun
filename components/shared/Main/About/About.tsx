import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const About = ({ className }: Props) => {
  const t = useTranslations("");
  return (
    <section id="course" className={cn("bg-white py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex gap-8 max-lgx:flex-col">
        <h2
          className="text-3xl mdx:hidden font-bold text-black lineHeight30"
          style={{ lineHeight: "60px" }}
          // Inline style for max screen width of 650px
        >
          {t("Main.About.title")}{" "}
          <span className="text-[#25A8F5]">{t("Main.About.subtitle")}</span>
        </h2>
        <div className="flex-1">
          <Image
            src={"/images/main/about/about.png"}
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
            {t("Main.About.title")} <br />{" "}
            <span className="text-[#25A8F5]">{t("Main.About.subtitle")}</span>
          </h2>
          <p className="text-xl font-medium">{t("Main.About.description")}</p>
        </div>
      </div>
    </section>
  );
};
