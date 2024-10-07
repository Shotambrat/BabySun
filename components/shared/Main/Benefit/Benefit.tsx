import React from "react";
import { cn } from "@lib/utils";
import { Request } from "../../Request/Request";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Benefit = ({ className }: Props) => {
  return (
    <div className={cn("bg-white py-24", className)}>
      <div className="w-full px-4 max-w-[1500px] mx-auto space-y-8">
        <h3 className="text-3xl lg:text-4xl font-bold">Что вы получите</h3>
        <div className="grid grid-cols-1 lgx:grid-cols-2 gap-4">
          <div className="h-[400px] mdx:h-[300px] lgx:h-[500px] overflow-hidden p-8 bg-[#F8FBFF] rounded-3xl relative">
            <p className="text-2xl w-full max-w-[400px] font-semibold">
              Уникальные навыки, признанные на международном уровне
            </p>
            {/* Background shadow effect */}
            <div className="icon-background"></div>
            {/* Icon image */}
            <Image
              src={"/images/main/benefit/benefit-icon.png"}
              width={1000}
              height={1000}
              quality={100}
              alt="Benefits Icon"
              className="absolute right-12 bottom-12 w-full max-w-[300px]"
            />
          </div>
          <div className="h-[400px] mdx:h-[300px] lgx:h-[500px] overflow-hidden p-8 bg-[#F8FBFF] rounded-3xl relative">
            <p className="text-2xl w-full max-w-[400px] font-semibold">
              Уникальные навыки, признанные на международном уровне
            </p>
            {/* Background shadow effect */}
            <div className="icon-background"></div>
            {/* Icon image */}
            <Image
              src={"/images/main/benefit/benefit-icon.png"}
              width={1000}
              height={1000}
              quality={100}
              alt="Benefits Icon"
              className="absolute right-12 bottom-12 w-full max-w-[300px]"
            />
          </div>
          <div className="h-[400px] mdx:h-[300px] lgx:h-[500px] overflow-hidden p-8 bg-[#F8FBFF] rounded-3xl relative">
            <p className="text-2xl w-full max-w-[400px] font-semibold">
              Уникальные навыки, признанные на международном уровне
            </p>
            {/* Background shadow effect */}
            <div className="icon-background"></div>
            {/* Icon image */}
            <Image
              src={"/images/main/benefit/benefit-icon.png"}
              width={1000}
              height={1000}
              quality={100}
              alt="Benefits Icon"
              className="absolute right-12 bottom-12 w-full max-w-[300px]"
            />
          </div>
          <div className="h-[400px] mdx:h-[300px] lgx:h-[500px] overflow-hidden p-8 bg-[#F8FBFF] rounded-3xl relative">
            <p className="text-2xl w-full max-w-[400px] font-semibold">
              Уникальные навыки, признанные на международном уровне
            </p>
            {/* Background shadow effect */}
            <div className="icon-background"></div>
            {/* Icon image */}
            <Image
              src={"/images/main/benefit/benefit-icon.png"}
              width={1000}
              height={1000}
              quality={100}
              alt="Benefits Icon"
              className="absolute right-12 bottom-12 w-full max-w-[300px]"
            />
          </div>
        </div>
        <Request className="max-mdx:w-full py-4" />
      </div>
    </div>
  );
};
