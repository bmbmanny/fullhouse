'use client';

import { useState } from 'react';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import QuoteDialog from '@/components/ui/QuoteDialog';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { SITE_CONFIG } from '@/lib/constants';

export default function HomePage() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-red-950 text-white pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
        {/* Subtle card pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(220,38,38,0.3),transparent_50%)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Don't Gamble With<br className="hidden sm:block" /> Your Furniture
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Full House delivers - we're the sure bet for professional moving and junk removal.
              Fast, reliable, and fully insured every time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => setQuoteDialogOpen(true)}
                className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-red-500/50"
              >
                Get Free Quote
              </button>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-semibold border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200"
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
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From residential moves to commercial relocations and junk removal,
              we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We make moving and junk removal simple, stress-free, and affordable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600/10 border-2 border-red-600 text-red-500 rounded-full mb-8">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Fully Licensed & Insured
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Your belongings are protected with comprehensive insurance coverage
                and licensed professionals.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600/10 border-2 border-red-600 text-red-500 rounded-full mb-8">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Fast & Reliable
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                We show up on time and get the job done efficiently without
                compromising quality.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600/10 border-2 border-red-600 text-red-500 rounded-full mb-8">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Transparent Pricing
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                No hidden fees or surprises. Get an accurate quote upfront and
                stick to it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it. See what our satisfied
              customers have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 bg-gradient-to-br from-red-900 via-red-800 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Get your free, no-obligation quote today and experience the difference
            professional service makes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setQuoteDialogOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-semibold bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Get Free Quote
            </button>
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=Contact Request`}
              className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Contact Us
            </a>
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
