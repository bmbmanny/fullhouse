'use client';

import { motion } from 'framer-motion';
import { GoogleReview } from '@/types/google';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface GoogleReviewsProps {
  reviews: GoogleReview[];
  rating?: number;
  totalReviews?: number;
}

export default function GoogleReviews({ reviews, rating = 4.9, totalReviews = 0 }: GoogleReviewsProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 md:py-32 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-8"
            />
            <span className="text-2xl font-bold text-white">Reviews</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-6">
            {renderStars(rating)}
            <span className="text-2xl font-bold text-white">{rating}</span>
            <span className="text-gray-400">({totalReviews} reviews)</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real reviews from real customers on Google Business Profile
          </p>
        </motion.div>

        {reviews.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(220, 38, 38, 0.15)' }}
                className="bg-black/50 backdrop-blur border border-red-900/30 rounded-2xl p-6 transition-all duration-300"
              >
                {/* Review Header */}
                <div className="flex items-center gap-3 mb-4">
                  {review.profilePhotoUrl ? (
                    <img
                      src={review.profilePhotoUrl}
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 font-bold text-lg">
                      {review.author.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h3 className="text-white font-semibold">{review.author}</h3>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-4">{renderStars(review.rating)}</div>

                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed line-clamp-6">{review.text}</p>

                {/* Google Icon */}
                <div className="mt-4 pt-4 border-t border-red-900/30 flex items-center gap-2 text-gray-500 text-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Posted on Google</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <p className="text-lg">Loading reviews...</p>
            <p className="text-sm mt-2">Check back soon to see what our customers are saying!</p>
          </div>
        )}
      </div>
    </section>
  );
}
