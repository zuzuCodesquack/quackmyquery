import type { Metadata } from "next";

// This is the part you are updating
export const metadata: Metadata = {
  metadataBase: new URL('https://quackmyquery.com'),
  title: "Quack My Query",
  description: "Automation blueprints for your profession.",
  alternates: {
    canonical: '/',
  },
};
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quack My Query | Your Friendly Data Assistant",
  description: "Find prices, specs, and local data instantly. Now featuring Automation Blueprints.",
  openGraph: {
    title: "Quack My Query",
    description: "Your friendly assistant for data and automation.",
  },
};

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
