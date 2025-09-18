import type { Metadata } from "next";
import { Afacad, Inter } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chisco Energy - Reliable Fuel Supply",
  description: "Leading indigenous fuel & energy supplier specializing in Automotive Gas Oil (AGO) and industrial fuel supply across Lagos and other states.",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "16x16" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacad.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
