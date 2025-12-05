'use client';

import { useState } from 'react';
import { FAQ } from '@/types';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  faq: FAQ;
}

export default function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-red-900/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left text-white hover:text-red-500 transition-colors group"
      >
        <span className="text-lg font-semibold pr-8">{faq.question}</span>
        <svg
          className={cn(
            'w-6 h-6 flex-shrink-0 transition-transform text-red-500',
            isOpen ? 'transform rotate-180' : ''
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        )}
      >
        <p className="text-gray-400 leading-relaxed text-base">{faq.answer}</p>
      </div>
    </div>
  );
}
