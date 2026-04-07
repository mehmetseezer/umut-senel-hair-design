import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umut Şenel Hair Design | Premium Hair Design & Barber",
  description: "Umut Şenel ile lüks erkek bakımı. Modern saç kesimi, sakal tasarımı ve geleneksel tıraş hizmetleri.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark">
        <SmoothScroll>
          {/* Section aralarındaki boşluklar için wrapper */}
          <div className="relative">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}