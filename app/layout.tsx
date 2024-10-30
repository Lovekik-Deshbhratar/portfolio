import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Lovekik",
  description: "Personal portfolio by Lovekik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html id="home" lang="en" className="!scroll-smooth">
      <body className={`${inter.className} p-3 md:p-0`}>{children}</body>
    </html>
  );
}
