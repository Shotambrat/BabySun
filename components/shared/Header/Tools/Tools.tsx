"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Request } from "../../Request/Request";

interface Props {
  className?: string;
}

export const Tools = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Headers.Navigation");

  const navigationItems = [
    { title: t("course"), href: "#course" },
    { title: t("teachers"), href: "#teachers" },
    { title: t("reviews"), href: "#reviews" },
    { title: t("education"), href: "#education" },
    { title: t("gallery"), href: "#gallery" },
  ];

  const handleScroll = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Закрываем меню после прокрутки
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex gap-4 items-center">
        <LanguageSwitcher className="max-xl:hidden" />
        <Request className="max-mdx:hidden" />
      </div>

      {/* Burger Menu Icon */}
      <Button variant="ghost" className="ml-4 lg:hidden" onClick={() => setIsOpen(true)}>
        <Menu size={24} />
      </Button>

      {/* Custom Drawer Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)} // Закрытие меню при клике вне области
      />

      <div
        className={cn(
          "fixed right-0 top-0 h-full w-full sm:w-80 bg-white shadow-lg z-50 transform transition-transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end items-center p-4 border-b border-neutral-200">
          <Button className="text-xl" variant="ghost" onClick={() => setIsOpen(false)}>
            X
          </Button>
        </div>

        {/* Navigation items */}
        <nav className="p-4">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.href)}
              className="flex items-center justify-between py-4 border-b border-neutral-200 w-full text-left"
            >
              <span className="hover:text-neutral-400 text-lg font-semibold transition-all duration-300">
                {item.title}
              </span>
              <ChevronRight className="text-gray-400" />
            </button>
          ))}
        </nav>

        <div className="p-4 w-full flex justify-between">
          <LanguageSwitcher />
          <Request />
        </div>
      </div>
    </div>
  );
};
