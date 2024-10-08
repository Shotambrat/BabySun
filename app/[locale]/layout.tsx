import { Raleway } from "next/font/google";
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale?: string };
}>) {
  const locale = params?.locale ?? 'ru';

  // Устанавливаем локаль для запроса
  unstable_setRequestLocale(locale);

  // Получаем сообщения для текущей локали
  const messages = await getMessages({ locale });

  // Метаданные Open Graph и SEO
  const siteUrl = "https://baby-sun.uz";  // Убедитесь, что URL правильный
  const title = "Baby sun | Ташкент";
  const description = "Александр Перхун - специалист по ШРОТ-терапии, профессионал международного уровня";
  const imageUrl = `${siteUrl}/images/logo/babysun-logo.png`;  // Убедитесь, что логотип доступен по этому пути

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Baby sun",
    "url": siteUrl,
    "logo": imageUrl,
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61550487363700&mibextid=ZbWKwL",
      "https://www.instagram.com/babysun_nat_bolalarklinikasi?igsh=OTZ1Z2Y1eDh6bWRq"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+998 99 890 93 88",
      "contactType": "Customer Service"
    }
  };

  return (
    <html lang={locale}>
      <head>
        {/* Базовые SEO-теги */}
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Baby sun" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph (OG) теги */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" /> {/* Рекомендованные размеры */}
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Baby sun" />

        {/* Теги для Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Структурированные данные (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>

        <title>{title}</title>
      </head>
      <body className={`${raleway.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
