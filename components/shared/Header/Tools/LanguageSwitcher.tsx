"use client";
import { useEffect, useState } from "react";
import { usePathname, Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const LanguageSwitcher = ({className}: Props) => {
  const availableLocales = ["uz", "ru"];
  const pathname = usePathname();
  const [locale, setLocale] = useState("ru"); // Default locale to "ru"

  // Function to extract locale from the URL (e.g., /uz/path or /ru/path)
  const extractLocaleFromPath = () => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.split("/")[1]; // Get the first part of the path
      if (availableLocales.includes(path)) {
        return path; // If the path is a locale (e.g., "uz" or "ru"), return it
      }
    }
    return "ru"; // Default to "ru" if no locale is found
  };

  useEffect(() => {
    const detectedLocale = extractLocaleFromPath();
    setLocale(detectedLocale); // Set the locale from the URL
  }, []);

  return (
    <div className={cn(className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"secondary"}
            className="inline-flex items-center gap-2"
          >
            <Image
              src={"/svg/header/language.svg"}
              width={100}
              height={100}
              alt="LanguageSwitcher Icon | World"
              className="h-6 w-6"
            />
            {locale.toUpperCase() == "RU" ? "РУ" : "UZ"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4">
          <div className="flex flex-col gap-2">
            {availableLocales.map((lng: string) => (
              <Link
                key={lng}
                href={pathname}
                className={`flex items-center gap-2 hover:font-semibold ${
                  lng == locale && "font-semibold"
                }`}
              >
                <Image
                  src={
                    lng === "uz"
                      ? "/svg/header/flags/flag-uz-svgrepo-com.svg"
                      : "/svg/header/flags/flag-ru-svgrepo-com.svg"
                  }
                  width={16}
                  height={16}
                  alt={`${lng} flag`}
                />
                {lng.toUpperCase() == "RU" ? "РУ" : "UZ"}
              </Link>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
