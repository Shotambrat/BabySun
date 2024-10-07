"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Response } from "../Request/Response";

interface Props {
  className?: string;
  title?: string
}

export const FooterReq = ({ className }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState<'success' | 'error' | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', education: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/submit-form", formData); // Замените на свой API путь
      if (response.status === 200) {
        setResponseStatus('success');
      } else {
        setResponseStatus('error');
      }
    } catch (err) {
      setResponseStatus('error');
      console.log(err);
    } finally {
      setIsLoading(false); // Остановить лоадер
    }
  };

  return (
    <div>
      {/* Кнопка "Записаться", открывающая модальное окно */}
      <div>

        <div className="max-mdx:max-w-[360px] max-w-[500px] max-mdx:px-4 shadow-lg rounded-lg">

          <div className="space-y-4 mt-4">
            <Input 
              name="name" 
              placeholder="Имя" 
              className="py-6 px-3 bg-[#F8F8F8] text-black font-semibold text-lg rounded-2xl" 
              onChange={handleInputChange}
              value={formData.name}
            />
            <Input 
              name="phone" 
              placeholder="Контактный телефон" 
              className="py-6 px-3 bg-[#F8F8F8] text-black font-semibold text-lg rounded-md" 
              onChange={handleInputChange}
              value={formData.phone}
            />
            <Input 
              name="education" 
              placeholder="Медицинское образование" 
              className="py-6 px-3 bg-[#F8F8F8] text-black font-semibold text-lg rounded-md" 
              onChange={handleInputChange}
              value={formData.education}
            />
          </div>

          {/* Лоадер и кнопка отправки */}
          <div className="mt-12">
            <button
              className="rounded-full max-mdx:w-full px-8 py-4 text-lg bg-white text-[#009FE3] font-semibold" 
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="animate-spin" size={25} /> {/* Иконка с анимацией вращения */}
                  <span>Ждите, пожалуйста</span>
                </div>
              ) : 'Отправить заявку'}
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно успешного ответа или ошибки */}
      {responseStatus && (
        <Response 
          status={responseStatus} 
          onClose={() => setResponseStatus(null)}
        />
      )}
    </div>
  );
};
