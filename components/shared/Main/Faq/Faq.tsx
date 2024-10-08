import React from "react";
import { cn } from "@lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { useTranslations } from "next-intl"; // Подключаем локализацию

interface Props {
  className?: string;
}

export const Faq = ({ className }: Props) => {
  const t = useTranslations("Main.Faq"); // Подключаемся к разделу "Faq"

  const questions = t.raw("questions"); // Получаем список вопросов и ответов

  return (
    <section className={cn("bg-white py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex flex-col gap-12">
        <h3 className="text-3xl lg:text-4xl font-bold">{t("title")}</h3>
        <Accordion type="single" collapsible className="w-full">
          {questions.map((item: any, index: number) => (
            <AccordionItem key={index} className="py-4" value={`item-${index + 1}`}>
              <AccordionTrigger className="text-2xl text-start font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg font-medium">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
