import React from "react";
import { cn } from "@lib/utils";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

interface Module {
  name: string;
  description: string;
}

export const Plan = ({ className }: Props) => {
  const t = useTranslations("Main.EducationPlan");

  const modules: Module[] = t.raw("modules"); // Указываем правильный тип

  return (
    <section className={cn("bg-white py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex gap-8 flex-col">
        <div className="space-y-4">
          <h3 className="text-3xl lg:text-4xl font-bold">{t("title")}</h3>
          <p className="font-medium text-lg">{t("description")}</p>
        </div>
        <div>
          <hr />
          {modules.map((module, index) => (
            <div key={index}>
              <div className="my-8 flex max-mdx:flex-col gap-6">
                <div className="flex-1 flex flex-col gap-1">
                  <h6 className="text-lg text-[#009FE3] font-semibold flex items-center">
                    {`${t("module")} ${index + 1}`}
                  </h6>
                  <h4 className="text-3xl font-bold w-full max-w-[400px]">
                    {module.name}
                  </h4>
                </div>
                <div className="flex-1 flex items-center">
                  <p className="text-xl">{module.description}</p>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
