import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `JS Do-Nuts`,
  description: "Sweetest Donuts in Town",
  openGraph: {
    title: 'JS Do-Nuts',
    description: 'Sweetest Donuts in Town',
    images: ['/hero/hero-horizontal.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}  >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
