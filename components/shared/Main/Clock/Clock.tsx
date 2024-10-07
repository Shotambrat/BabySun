"use client"
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@lib/utils";
import { Request } from "../../Request/Request";
import gsap from "gsap";

interface Props {
  className?: string;
}

const calculateTimeLeft = () => {
  const targetDate = new Date("2024-12-31T00:00:00");
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
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft); // Состояние для отслеживания предыдущего значения
  const secondsRef = useRef<HTMLDivElement[]>([]); // Массив для каждой цифры секунд
  const minutesRef = useRef<HTMLDivElement[]>([]);
  const hoursRef = useRef<HTMLDivElement[]>([]);
  const daysRef = useRef<HTMLDivElement[]>([]);

  // Обновление таймера каждую секунду
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setPrevTimeLeft(timeLeft); // Сохраняем предыдущее значение перед обновлением
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  // Анимация для обновления цифр с бесконечным циклом
  const animateDigitChange = (digitRef: HTMLDivElement | null, newValue: string, prevValue: string) => {
    if (digitRef && newValue !== prevValue) {
      gsap.fromTo(
        digitRef,
        { y: "0%" },
        {
          y: "-100%",
          duration: 1.2,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.set(digitRef, { y: "100%" });
            gsap.to(digitRef, { y: "0%", duration: 1.2, ease: "power1.inOut" });
          },
        }
      );
    }
  };

  // Анимация для секунд
  useEffect(() => {
    for (let i = 0; i < timeLeft.seconds.length; i++) {
      animateDigitChange(secondsRef.current[i], timeLeft.seconds[i], prevTimeLeft.seconds[i]);
    }
    for (let i = 0; i < timeLeft.minutes.length; i++) {
      animateDigitChange(minutesRef.current[i], timeLeft.minutes[i], prevTimeLeft.minutes[i]);
    }
    for (let i = 0; i < timeLeft.hours.length; i++) {
      animateDigitChange(hoursRef.current[i], timeLeft.hours[i], prevTimeLeft.hours[i]);
    }
    for (let i = 0; i < timeLeft.days.length; i++) {
      animateDigitChange(daysRef.current[i], timeLeft.days[i], prevTimeLeft.days[i]);
    }
  }, [timeLeft, prevTimeLeft]);

  return (
    <div className={cn("py-24 bg-[#009FE3] text-white", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex flex-col items-center gap-12">
        {/* Верхняя часть */}
        <div className="flex flex-col w-full gap-6">
          <p className="text-xl lg:text-2xl">осталось мест: 25</p>
          <h4 className="text-3xl lg:text-5xl font-bold">Успейте присоединиться!</h4>
          <Request className="bg-white hover:bg-white text-[#009FE3]" />
        </div>
        {/* Линия */}
        <div className="w-full">
          <hr className="border-t border-white/50" />
        </div>
        {/* Таймер */}
        <div className="flex justify-center items-center gap-4 text-center">
          {/* Дни */}
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              {timeLeft.days.split("").map((digit, i) => (
                <div
                  ref={(el) => {
                    if (el) daysRef.current[i] = el;
                  }}
                  key={`day-${i}`}
                  className="md:text-6xl text-3xl lg:text-[120px] font-bold leading-none"
                >
                  {digit}
                </div>
              ))}
            </div>
            <span className="text-lg lg:text-2xl mt-2">ДНИ</span>
          </div>
          <span className="md:text-6xl text-3xl lg:text-[120px] font-bold leading-none">:</span>
          {/* Часы */}
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              {timeLeft.hours.split("").map((digit, i) => (
                <div
                  ref={(el) => {
                    if (el) hoursRef.current[i] = el;
                  }}
                  key={`hour-${i}`}
                  className="md:text-6xl text-3xl lg:text-[120px] font-bold leading-none"
                >
                  {digit}
                </div>
              ))}
            </div>
            <span className="text-lg lg:text-2xl mt-2">ЧАСЫ</span>
          </div>
          <span className="md:text-6xl text-3xl lg:text-[120px] font-bold leading-none">:</span>
          {/* Минуты */}
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              {timeLeft.minutes.split("").map((digit, i) => (
                <div
                  ref={(el) => {
                    if (el) minutesRef.current[i] = el;
                  }}
                  key={`minute-${i}`}
                  className="md:text-6xl text-3xl lg:text-[120px] font-bold leading-none"
                >
                  {digit}
                </div>
              ))}
            </div>
            <span className="text-lg lg:text-2xl mt-2">МИНУТЫ</span>
          </div>
          <span className="md:text-6xl text-3xl lg:text-[120px] font-bold leading-none">:</span>
          {/* Секунды */}
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              {timeLeft.seconds.split("").map((digit, i) => (
                <div
                  ref={(el) => {
                    if (el) secondsRef.current[i] = el;
                  }}
                  key={`second-${i}`}
                  className="md:text-6xl text-3xl lg:text-[120px] font-bold leading-none"
                >
                  {digit}
                </div>
              ))}
            </div>
            <span className="text-lg lg:text-2xl mt-2">СЕКУНДЫ</span>
          </div>
        </div>
      </div>
    </div>
  );
};
