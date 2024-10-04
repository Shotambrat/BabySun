"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Используем для полей ввода
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Request = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(className)}>
      {/* Кнопка "Записаться", открывающая модальное окно */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="rounded-full lgx:px-12 font-semibold">
            Записаться
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-[360px] py-6 px-4 bg-white shadow-lg rounded-lg">
          {/* Header с заголовком и кнопкой закрытия */}
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Запись на курс</DialogTitle>
            <DialogClose asChild>
              {/* <button className="absolute top-4 right-4">
                <X size={24} />
              </button> */}
            </DialogClose>
          </DialogHeader>

          {/* Форма внутри модального окна */}
          <div className="space-y-4 mt-4">
            <Input placeholder="Имя" className="py-8 px-3 bg-[#F8F8F8] text-neutral-400 text-lg  rounded-md" />
            <Input placeholder="Контактный телефон" className="py-8 px-3 bg-[#F8F8F8] text-neutral-400 text-lg  rounded-md" />
            <Input placeholder="Медицинское образование" className="py-8 px-3 bg-[#F8F8F8] text-neutral-400 text-lg  rounded-md" />
          </div>

          {/* Кнопка отправки */}
          <div className="mt-6">
            <Button className="rounded-full px-8 py-7 bg-blue-500 hover:bg-blue-600 text-white font-semibold">
              Отправить заявку
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
