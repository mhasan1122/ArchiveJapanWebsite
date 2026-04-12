import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Achieve Japan | Japanese Language Training & SSW Visa Consultancy",
  description:
    "Build your future in Japan with Achieve Japan. 37+ years of excellence in Japanese language training (JLPT N5-N2), SSW Visa support, job placement, and study abroad consultancy. Start your journey today!",
  keywords: [
    "Japanese language training",
    "JLPT",
    "SSW Visa",
    "Japan jobs",
    "study in Japan",
    "Achieve Japan",
    "Japanese language course Dhaka",
    "SSW training Bangladesh",
  ],
  openGraph: {
    title: "Achieve Japan | Build Your Future in Japan 🇯🇵",
    description:
      "37+ years of excellence in Japanese language training, SSW Visa support & job placement.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+JP:wght@300;400;500;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-white text-gray-900 font-[Inter]"
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
