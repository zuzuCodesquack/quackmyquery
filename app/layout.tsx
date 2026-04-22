import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

// 1. Font configurations
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Clean, Merged Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://quackmyquery.com'),
  title: "Quack My Query | Automation Blueprints for Your Profession",
  description: "Find the exact automation blueprints, tools, and workflows you need to streamline your business.",
  alternates: {
    canonical: '/',
  },
};

// 3. Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
