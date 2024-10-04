"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, X, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetClose, SheetTrigger } from "@/components/ui"; // Используем Sheet компоненты
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
    { title: t("course"), href: "/course" },
    { title: t("teachers"), href: "/teachers" },
    { title: t("reviews"), href: "/reviews" },
    { title: t("education"), href: "/education" },
    { title: t("gallery"), href: "/gallery" },
  ];

  return (
    <div className={cn("flex items-center", className)}>
    <Request className="max-mdx:hidden" />

      {/* Burger Menu Icon */}
      <div className="lgx:hidden">

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="ml-4">
            <Menu size={24} />
          </Button>
        </SheetTrigger>

        <SheetContent position="right" size="lg" className="h-full p-6">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-6">
            <SheetClose asChild></SheetClose>
          </div>

          {/* Navigation items */}
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-neutral-200"
              >
                <a
                  href={item.href}
                  className="hover:text-neutral-400 text-lg font-semibold transition-all duration-300"
                >
                  {item.title}
                </a>
                <ChevronRight className="text-gray-400" />
              </div>
            ))}
          </nav>
          <div className="w-full flex justify-between items-center mt-8">
            <LanguageSwitcher />
            <Request />
          </div>
        </SheetContent>
      </Sheet>
      </div>
    </div>
  );
};
