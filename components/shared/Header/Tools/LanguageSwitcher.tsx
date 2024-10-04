"use client";
import { usePathname, Link } from "@/i18n/routing";
import ruFlag from "@/public/svg/flags/flag-for-russia-svgrepo-com.svg";
import uzFlag from "@/public/svg/flags/flag-for-uzbekistan-svgrepo-com.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";

export const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const availableLocales = ["uz", "ru"];
  const pathname = usePathname();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="inline-flex items-center">
          {locale.toUpperCase()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-2">
        <div className="flex flex-col gap-2">
          {availableLocales.map((lng) => (
            <Link
              key={lng}
              href={pathname}
              locale={lng}
              className="flex items-center gap-2 hover:font-semibold"
            >
              <Image
                src={lng === "uz" ? uzFlag : ruFlag}
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