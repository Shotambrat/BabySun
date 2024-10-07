import type { Metadata } from "next";
import { Raleway } from "next/font/google"; // Импорт шрифта Raleway
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer/Footer";
import "./globals.css";

// Подключение Google Fonts (Raleway)
const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

// Мета-данные для страницы
export const metadata: Metadata = {
  title: "Baby sun",
  description: "Baby sun | Tashkent",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Устанавливаем локаль для запроса
  unstable_setRequestLocale(params.locale);

  // Получаем сообщения для текущей локали
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body className={`${raleway.variable} antialiased`}>
        {/* Передаем сообщения клиенту через NextIntlClientProvider */}
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'uz' }]; // Генерация статических параметров для локалей
}
