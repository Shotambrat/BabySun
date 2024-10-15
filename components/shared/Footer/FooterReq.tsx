"use client";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Response } from "../Request/Response";
import { cn } from "@lib/utils";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
  title?: string;
}

export const FooterReq = ({ className }: Props) => {
  const t = useTranslations("Main.Form");
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState<
    "success" | "error" | null
  >(null);
  const [formData, setFormData] = useState({ name: "", phone: "", edu: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://baby-sun.uz/api/application/perxun",
        formData,
        {
          headers: {
            "API-Key": "aFE~&#siAhCs9_Ni]AoC)HMF#y0V)!-kIh0h-3.eR0_W.gA~gk", // Place your actual API Key here
          },
        }
      ); // Замените на свой API путь
      if (response.status === 200) {
        setResponseStatus("success");
      } else {
        setResponseStatus("error");
      }
    } catch (err) {
      setResponseStatus("error");
      console.log(err);
    } finally {
      setIsLoading(false); // Остановить лоадер
    }
  };

  return (
    <section className={cn(className)}>
      {/* Кнопка "Записаться", открывающая модальное окно */}
      <div>
        <div className="max-mdx:max-w-[360px] max-w-[500px] max-mdx:px-4 shadow-lg rounded-lg">
          <div className="space-y-4 mt-4">
            <Input
              name="name"
              placeholder={t("fields.name")}
              className="py-6 px-3 bg-[#F8F8F8] text-black font-semibold text-lg rounded-2xl"
              onChange={handleInputChange}
              value={formData.name}
            />
            <Input
              name="phone"
              placeholder={t("fields.phone")}
              className="py-6 px-3 bg-[#F8F8F8] text-black font-semibold text-lg rounded-md"
              onChange={handleInputChange}
              value={formData.phone}
            />
            <Input
              name="edu"
              placeholder={t("fields.education")}
              className="py-6 px-3 bg-[#F8F8F8] text-black font-semibold text-lg rounded-md"
              onChange={handleInputChange}
              value={formData.edu}
            />
          </div>

          {/* Лоадер и кнопка отправки */}
          <div className="mt-12 flex w-full max-mdx:flex-col justify-between gap-2">
            <button
              className="rounded-full max-mdx:w-full px-8 py-4 text-lg bg-white text-[#009FE3] font-semibold"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="animate-spin" size={25} />{" "}
                  {/* Иконка с анимацией вращения */}
                  <span>{t("loading")}</span>
                </div>
              ) : (
                `${t("submitButton")}`
              )}
            </button>
            <a
              onClick={() =>
                fetch("https://baby-sun.uz/api/count/perxun?button=call", {
                  method: "POST",
                  headers: {
                    "API-Key":
                      "aFE~&#siAhCs9_Ni]AoC)HMF#y0V)!-kIh0h-3.eR0_W.gA~gk", // Place your actual API Key here
                  },
                })
              }
              href="tel:+998777026688"
              className="rounded-full text-center max-mdx:w-full px-8 py-4 cursor-pointer text-lg text-white border transition-all duration-150 hover:bg-white hover:text-[#009FE3] font-semibold"
            >
              Позвонить
            </a>
          </div>
        </div>
      </div>

      {/* Модальное окно успешного ответа или ошибки */}
      {responseStatus && (
        <Response
          status={responseStatus}
          onClose={() => setResponseStatus(null)}
        />
      )}
    </section>
  );
};
