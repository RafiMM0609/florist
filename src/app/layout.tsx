import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Katalog Buket Cimahi - Buket Kupu-kupu & Boneka Terbaik",
  description: "Koleksi buket kupu-kupu dan boneka terbaik di Cimahi. Buket cantik untuk berbagai momen spesial dengan kualitas terjamin dan harga terjangkau.",
  keywords: "buket cimahi, buket kupu-kupu, buket boneka, buket murah, toko bunga cimahi, buket wisuda, buket anniversary",
  openGraph: {
    title: "Katalog Buket Cimahi",
    description: "Koleksi buket kupu-kupu dan boneka terbaik untuk momen spesial Anda",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
