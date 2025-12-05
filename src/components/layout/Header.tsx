'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants';
import { cn } from '@/lib/utils';
import QuoteDialog from '@/components/ui/QuoteDialog';
import { services } from '@/data/services';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg border-b border-red-900/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Full House"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <span className="text-xl font-bold text-white">
              {SITE_CONFIG.shortName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => {
              if (item.label === 'Services') {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-red-500 font-medium transition-colors px-2 inline-flex items-center gap-1"
                    >
                      {item.label}
                      <svg
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          servicesDropdownOpen && 'rotate-180'
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={cn(
                        'absolute top-full left-0 mt-2 w-72 bg-gray-900 border border-red-900/30 rounded-lg shadow-xl overflow-hidden transition-all duration-200 origin-top',
                        servicesDropdownOpen
                          ? 'opacity-100 scale-100 visible'
                          : 'opacity-0 scale-95 invisible'
                      )}
                    >
                      <div className="py-2">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block px-4 py-3 text-gray-300 hover:bg-red-900/20 hover:text-red-500 transition-colors border-l-2 border-transparent hover:border-red-500"
                          >
                            <div className="font-medium">{service.title}</div>
                            <div className="text-sm text-gray-500 line-clamp-1">
                              {service.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-red-500 font-medium transition-colors px-2"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-red-500 font-semibold hover:text-red-400 transition-colors flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
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
              <span className="hidden lg:inline">{SITE_CONFIG.phone}</span>
            </a>
            <button
              onClick={() => setQuoteDialogOpen(true)}
              className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-500/50"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-white hover:bg-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-y-auto transition-all duration-300 border-t border-red-900/20',
            mobileMenuOpen ? 'max-h-[32rem] pb-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {NAVIGATION.map((item) => {
              if (item.label === 'Services') {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="w-full flex items-center justify-between text-gray-300 hover:text-red-500 font-medium transition-colors"
                    >
                      {item.label}
                      <svg
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          servicesDropdownOpen && 'rotate-180'
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        servicesDropdownOpen ? 'max-h-96 mt-2' : 'max-h-0'
                      )}
                    >
                      <div className="flex flex-col space-y-2 pl-4 border-l-2 border-red-900/30">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="text-gray-400 hover:text-red-500 transition-colors text-sm py-1"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setServicesDropdownOpen(false);
                            }}
                          >
                            {service.title}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="text-red-500 hover:text-red-400 transition-colors text-sm py-1 font-semibold"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setServicesDropdownOpen(false);
                          }}
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-red-500 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-red-500 font-semibold"
            >
              {SITE_CONFIG.phone}
            </a>
            <button
              onClick={() => {
                setQuoteDialogOpen(true);
                setMobileMenuOpen(false);
              }}
              className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center w-full"
            >
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      <QuoteDialog
        isOpen={quoteDialogOpen}
        onClose={() => setQuoteDialogOpen(false)}
      />
    </header>
  );
}
