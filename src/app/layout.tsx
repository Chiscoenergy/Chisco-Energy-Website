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
        className={`${afacad.variable} ${inter.variable} antialiased overflow-x-hidden bg-neutral-950 text-white flex flex-col items-center justify-center min-h-screen p-4`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950 -z-10" />

        <div className="max-w-md w-full text-center space-y-8 p-10 rounded-3xl bg-neutral-900/80 backdrop-blur-xl border border-white/5 shadow-2xl">
          <div className="flex justify-center mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Chisco Energy" className="h-12 w-auto opacity-90" />
          </div>

          <div className="mx-auto w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center rotate-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-500 -rotate-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-medium tracking-wide text-white font-sans">
              Service Temporarily Unavailable
            </h1>

            <p className="text-neutral-400 text-base leading-relaxed font-light">
              This web service is currently legally restricted.
              <br />
              Please contact the system administrator.
            </p>
          </div>

          <div className="pt-8 border-t border-white/5">
            <div className="flex items-center justify-center space-x-2 text-xs text-neutral-600 font-mono tracking-wider uppercase">
              <span>Chisco Energy Systems</span>
              <span>•</span>
              <span>System ID: #SYS-8842</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
