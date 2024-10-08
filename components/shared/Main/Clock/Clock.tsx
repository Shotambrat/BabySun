"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@lib/utils";
import { Request } from "../../Request/Request";
import { useTranslations } from "next-intl"; // Подключаем хук для локализации

interface Props {
  className?: string;
}

const calculateTimeLeft = () => {
  const targetDate = new Date("2024-11-21T00:00:00");
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  let timeLeft = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  };

  if (difference > 0) {
    timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }

  return timeLeft;
};

export const Clock = ({ className }: Props) => {
  const t = useTranslations("Main.EnrollNow"); // Подключаемся к разделу "EnrollNow" в локализации
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("py-24 bg-[#009FE3] text-white", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex flex-col items-center gap-12">
        {/* Top Section */}
        <div className="flex flex-col w-full gap-6">
          <p className="text-xl lg:text-2xl">{t("seatsLeft", { seats: 9 })}</p>
          <h4 className="text-3xl lg:text-5xl font-bold">{t("title")}</h4>
          <Request className="bg-white hover:bg-white text-[#009FE3]" />
        </div>
        {/* Line */}
        <div className="w-full">
          <hr className="border-t border-white/50" />
        </div>
        {/* Timer */}
        <div className="flex justify-center items-center max-mdx:gap-2 gap-4 text-center">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              {timeLeft.days.split("").map((digit, i) => (
                <div
                  key={`day-${i}`}
                  className="md:text-6xl text-5xl lg:text-[120px] leading-none"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {digit}
                </div>
              ))}
            </div>
            <span className="text-lg lg:text-2xl mt-2">{t("days")}</span>
          </div>
          <span className="md:text-6xl text-3xl lg:text-[120px] leading-none">:</span>
          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              {timeLeft.hours.split("").map((digit, i) => (
                <div
                  key={`hour-${i}`}
                  className="md:text-6xl text-5xl lg:text-[120px] leading-none"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {digit}
                </div>
              ))}
            </div>
            <span className="text-lg lg:text-2xl mt-2">{t("hours")}</span>
          </div>
          <span className="md:text-6xl text-3xl lg:text-[120px] leading-none">:</span>
          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              {timeLeft.minutes.split("").map((digit, i) => (
                <div
                  key={`minute-${i}`}
                  className="md:text-6xl text-5xl lg:text-[120px] leading-none"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {digit}
                </div>
              ))}
            </div>
            <span className="text-lg lg:text-2xl mt-2">{t("minutes")}</span>
          </div>
          <span className="md:text-6xl text-3xl lg:text-[120px] leading-none">:</span>
          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              {timeLeft.seconds.split("").map((digit, i) => (
                <div
                  key={`second-${i}`}
                  className="md:text-6xl text-5xl lg:text-[120px] leading-none"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {digit}
                </div>
              ))}
            </div>
            <span className="text-lg lg:text-2xl mt-2">{t("seconds")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
