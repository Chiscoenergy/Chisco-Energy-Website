'use client';

import { useState } from 'react';
import AIChat from './AIChat';

export default function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 z-40 bg-chisco-amber text-chisco-black p-4 rounded-full shadow-lg hover:bg-chisco-amber/90 transition-all duration-200 hover:scale-110"
        aria-label="Open AI Chat"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat Interface */}
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}