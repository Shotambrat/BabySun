import React from "react";
import { cn } from "@lib/utils";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui";
import { X } from "lucide-react";
import Image from "next/image";

interface Props {
  status: "error" | "success";
  onClose: () => void;
  className?: string;
}

export const Response = ({ status, onClose, className }: Props) => {
  return (
    <div className={cn(className)}>
      <Dialog open>
        <DialogContent className="mdx:max-w-[425px] max-w-[360px] flex flex-col items-center gap-8">
          <button
            className="absolute top-3 max-mdx:top-4 right-4"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          {status == "success" ? (
            <Image
              src="/svg/request/success-check.svg"
              width={500}
              height={500}
              quality={100}
              alt="Success Request Icon"
              className="w-24"
            />
          ) : null}
          <div className="space-y-2">
            <DialogTitle
              className={`text-3xl font-bold text-center ${
                status == "success" ? "" : "max-mdx:mt-8"
              }`}
            >
              {status == "success"
                ? "Заявка отправлена!"
                : "Что-то пошло не так"}
            </DialogTitle>
            <DialogDescription className="text-lg text-center leading-6 ">
              {status == "success" ? (
                <p>
                  Заявка успешно отправлена. <br /> В скором времени мы свяжемся
                  с вами
                </p>
              ) : (
                "Повторите попытку позже"
              )}
            </DialogDescription>
          </div>
          <Button onClick={onClose} className="text-lg rounded-full px-24 py-3 max-mdx:py-5">Ок</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
