import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { FooterReq } from "./FooterReq";

interface Props {
  className?: string;
}

export const Footer = ({ className }: Props) => {
  return (
    <div className={cn("py-24 bg-[#009FE3]", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex max-lgx:flex-col gap-12 lgx:gap-48">
        <div className="flex-1 flex justify-between flex-col gap-8">
          <h3 className="text-white text-3xl lgx:text-5xl font-semibold">
            Заполните форму, чтобы стать участником нашего курса
          </h3>
          <div className="flex flex-col gap-8">
            <hr />
            <a
              className="flex gap-4 items-center"
              href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            >
              <Image
                src={"/svg/footer/inst-logo.svg"}
                width={100}
                height={100}
                quality={100}
                alt="Instagram Icon"
                className="w-8"
              />
              <p className="text-xl text-white font-semibold">Scolios Clinic</p>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <FooterReq />
        </div>
      </div>
    </div>
  );
};
