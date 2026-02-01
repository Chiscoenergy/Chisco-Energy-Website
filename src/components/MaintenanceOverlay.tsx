"use client";

import React from "react";
import Image from "next/image";
import { HiChatBubbleLeftRight, HiEnvelope } from "react-icons/hi2";

const MaintenanceOverlay = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348166319502";
  const contactEmail = "admin@chiscoenergy.com";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-chisco-black overflow-hidden font-sans">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-chisco-navy/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-chisco-petrol/10 rounded-full blur-[120px]" />

      <div className="relative w-full max-w-2xl px-6 py-12 text-center">
        {/* Logo container */}
        <div className="mb-12 flex justify-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-white/5 p-4 backdrop-blur-md border border-white/10 shadow-2xl">
            <Image
              src="/logo.png"
              alt="Chisco Energy"
              fill
              className="object-contain p-2"
              priority
            />
          </div>
        </div>

        {/* Status indicator */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-chisco-amber/10 px-4 py-1.5 border border-chisco-amber/20 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chisco-amber opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-chisco-amber"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-chisco-amber">
            System Maintenance
          </span>
        </div>

        {/* Main Content */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Website Temporarily <span className="text-chisco-petrol">Offline</span>
        </h1>

        <p className="mb-10 text-lg leading-relaxed text-gray-400 max-w-lg mx-auto">
          We are currently undergoing scheduled maintenance to improve our digital services.
          Our energy distribution services remain fully operational.
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto mb-10">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="flex items-center justify-center gap-3 rounded-xl bg-white/5 p-4 text-white transition-all hover:bg-white/10 border border-white/5 hover:border-chisco-petrol/30 group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chisco-petrol/20 text-chisco-petrol group-hover:scale-110 transition-transform">
              <HiChatBubbleLeftRight size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
              <p className="font-semibold text-sm">Contact Support</p>
            </div>
          </a>

          <a
            href={`mailto:${contactEmail}`}
            className="flex items-center justify-center gap-3 rounded-xl bg-white/5 p-4 text-white transition-all hover:bg-white/10 border border-white/5 hover:border-chisco-navy/30 group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chisco-navy/20 text-chisco-navy group-hover:scale-110 transition-transform">
              <HiEnvelope size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 font-medium">Email Us</p>
              <p className="font-semibold text-sm">Send Inquiry</p>
            </div>
          </a>
        </div>

        {/* Footer info */}
        <div className="text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Chisco Energy. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50 font-mono italic">Ref: CE-MNT-2024</p>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceOverlay;
