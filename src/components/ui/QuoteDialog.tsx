'use client';

import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/lib/constants';

interface QuoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteDialog({ isOpen, onClose }: QuoteDialogProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border-2 border-red-600 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl shadow-red-900/50 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Get Your Free Quote
          </h2>
          <p className="text-gray-400">
            Contact us now for a free, no-obligation quote
          </p>
        </div>

        <div className="space-y-4">
          {/* Call Button */}
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center justify-center gap-3 w-full bg-red-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-red-500/50 hover:scale-105 active:scale-95"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Call {SITE_CONFIG.phone}</span>
          </a>

          {/* Email Button */}
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=Quote Request&body=Hi, I'd like to get a quote for moving/junk removal services.`}
            className="flex items-center justify-center gap-3 w-full bg-gray-800 border-2 border-red-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Email Us</span>
          </a>

          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="w-full text-gray-400 hover:text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
