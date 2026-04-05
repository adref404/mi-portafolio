import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Fernando Website",
  description:
    "Portfolio de Fernando Celadita. Ingeniería de Sistemas, Data Science, IA y Desarrollo Web.",
  openGraph: {
    title: "Fernando Celadita — Dev & Data",
    description: "Proyectos de IA, Web, Data y más.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Fernando Celadita",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}