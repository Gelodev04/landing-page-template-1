import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Sections/home/footer/Footer";
import Head from "next/head";
import Loading from "@/app/loading";
import { Suspense } from "react";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "landing page ",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  
      <body className={`${playfair.variable} ${inter.variable}`}>
       
        <Suspense fallback={<Loading/>}>{children}</Suspense>
        
       
      </body>
    </html>
  );
}
