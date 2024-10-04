"use client";
import { useEffect, useState } from "react";
import { usePathname, Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";

export const LanguageSwitcher = () => {
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
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="inline-flex items-center">
          {locale.toUpperCase()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-2">
        <div className="flex flex-col gap-2">
          {availableLocales.map((lng: string) => (
            <Link
              key={lng}
              href={pathname}
              locale={lng}
              className="flex items-center gap-2 hover:font-semibold"
            >
              <Image
                src={lng === "uz" ? '/default' : '/default'}
                width={16}
                height={16}
                alt={`${lng} flag`}
              />
              {lng.toUpperCase()}
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
