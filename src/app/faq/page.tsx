'use client';

import { useState } from 'react';
import { faqs } from '@/data/faq';
import FAQItem from '@/components/ui/FAQItem';
import QuoteDialog from '@/components/ui/QuoteDialog';
import { SITE_CONFIG } from '@/lib/constants';

export default function FAQPage() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  // Group FAQs by category
  const categories = {
    general: faqs.filter((faq) => faq.category === 'general'),
    pricing: faqs.filter((faq) => faq.category === 'pricing'),
    booking: faqs.filter((faq) => faq.category === 'booking'),
    packing: faqs.filter((faq) => faq.category === 'packing'),
    'junk-removal': faqs.filter((faq) => faq.category === 'junk-removal'),
    specialty: faqs.filter((faq) => faq.category === 'specialty'),
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-red-950 text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
              Got questions? We've got answers. Find everything you need to know
              about our moving and junk removal services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* General Questions */}
            {categories.general.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-red-500">→</span> General Questions
                </h2>
                <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-6 md:p-8">
                  {categories.general.map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
                </div>
              </div>
            )}

            {/* Pricing & Quotes */}
            {categories.pricing.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-red-500">→</span> Pricing & Quotes
                </h2>
                <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-6 md:p-8">
                  {categories.pricing.map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
                </div>
              </div>
            )}

            {/* Booking & Scheduling */}
            {categories.booking.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-red-500">→</span> Booking & Scheduling
                </h2>
                <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-6 md:p-8">
                  {categories.booking.map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
                </div>
              </div>
            )}

            {/* Packing Services */}
            {categories.packing.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-red-500">→</span> Packing Services
                </h2>
                <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-6 md:p-8">
                  {categories.packing.map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
                </div>
              </div>
            )}

            {/* Junk Removal */}
            {categories['junk-removal'].length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-red-500">→</span> Junk Removal
                </h2>
                <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-6 md:p-8">
                  {categories['junk-removal'].map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
                </div>
              </div>
            )}

            {/* Specialty Items */}
            {categories.specialty.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-red-500">→</span> Specialty Items
                </h2>
                <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-6 md:p-8">
                  {categories.specialty.map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/10 border-2 border-red-600 text-red-500 rounded-full mb-6">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Can't find what you're looking for? Our team is here to help. Give us
              a call or send us a message and we'll get back to you right away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setQuoteDialogOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-red-500/50"
              >
                Get Free Quote
              </button>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-red-600 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                <svg
                  className="w-6 h-6 mr-2"
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
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Helpful Moving Tips
              </h2>
              <p className="text-xl text-gray-400">
                Make your move even smoother with these expert tips.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Start Early
                </h3>
                <p className="text-gray-400">
                  Begin packing non-essential items 2-3 weeks before your move date.
                  You'll thank yourself later!
                </p>
              </div>

              <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">🏷️</div>
                <h3 className="text-xl font-bold text-white mb-3">Label Everything</h3>
                <p className="text-gray-400">
                  Mark boxes with contents and destination rooms. It makes unpacking
                  so much easier.
                </p>
              </div>

              <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Protect Valuables
                </h3>
                <p className="text-gray-400">
                  Keep important documents, jewelry, and valuables with you during
                  the move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteDialog
        isOpen={quoteDialogOpen}
        onClose={() => setQuoteDialogOpen(false)}
      />
    </div>
  );
}
