'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';
import QuoteDialog from '@/components/ui/QuoteDialog';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function AboutPage() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-red-950 text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About Full House
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
              We're not just movers—we're your partners in making life's transitions
              smooth, stress-free, and affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Full House was founded on a simple principle: moving and junk removal
                shouldn't be stressful, overpriced, or unreliable. We saw too many
                companies cutting corners, overcharging customers, and treating their
                belongings without care.
              </p>
              <p>
                That's why we built Full House differently. We pride ourselves on
                <span className="text-red-500 font-semibold"> exceptional customer satisfaction</span>,
                providing the <span className="text-red-500 font-semibold">highest quality service</span> at the
                <span className="text-red-500 font-semibold"> best rates around</span>. No hidden fees.
                No surprises. Just honest, professional service every single time.
              </p>
              <p>
                Whether you're moving across town, relocating your business, or clearing
                out years of accumulated items, we treat every job with the same level of
                care and professionalism. Your satisfaction isn't just our goal—it's our
                guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 md:py-32 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're committed to being the moving and junk removal company you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Value 1 */}
            <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/50 transition-all duration-300">
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Customer First
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your satisfaction is our top priority. We go above and beyond to ensure
                every customer has an exceptional experience from start to finish.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/50 transition-all duration-300">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Quality Service
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We don't cut corners. Our team is trained, professional, and equipped to
                handle your belongings with the care they deserve.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/50 transition-all duration-300">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Best Rates
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Premium service doesn't have to mean premium prices. We offer competitive
                rates without compromising on quality.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/50 transition-all duration-300">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Reliable & Punctual
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We show up on time, every time. Your schedule matters to us, and we
                respect your time as much as our own.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/50 transition-all duration-300">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Experienced Team
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our crew knows what they're doing. Years of experience means we handle
                everything efficiently and safely.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-600/50 transition-all duration-300">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Local & Trusted
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We're part of your community. Local ownership means we care about our
                reputation and your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="py-20 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                By The Numbers
              </h2>
              <p className="text-xl text-gray-400">
                Our commitment to excellence shows in every job we do.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-red-500 mb-4">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Customer Satisfaction
                </h3>
                <p className="text-gray-400">
                  We don't rest until you're completely happy with our service.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-red-500 mb-4">
                  <AnimatedCounter end={5} />★
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Rated Service
                </h3>
                <p className="text-gray-400">
                  Our reviews speak for themselves—customers love working with us.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-red-500 mb-4">
                  $<AnimatedCounter end={0} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Hidden Fees
                </h3>
                <p className="text-gray-400">
                  What we quote is what you pay. No surprises, no games.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 bg-gradient-to-br from-red-900 via-red-800 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience The Full House Difference
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied customers who chose quality, reliability, and
            affordability. Get your free quote today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setQuoteDialogOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Get Free Quote
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-200"
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
      </section>

      <QuoteDialog
        isOpen={quoteDialogOpen}
        onClose={() => setQuoteDialogOpen(false)}
      />
    </div>
  );
}
