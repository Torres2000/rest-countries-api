import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import iconFrontend from "./iconFrontendmentor.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REST Countries API",
  description: "REST Countries API with color theme switcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-VeryLightGray">{children}</body>
    </html>
  );
}
