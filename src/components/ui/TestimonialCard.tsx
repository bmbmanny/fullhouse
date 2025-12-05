'use client';

import { motion } from 'framer-motion';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: '0 20px 40px rgba(220, 38, 38, 0.2)',
        borderColor: 'rgba(220, 38, 38, 0.5)',
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg shadow-red-900/20 border border-red-900/30 p-6 h-full flex flex-col"
    >
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-red-500 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-300 mb-4 leading-relaxed italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author Info */}
      <div className="border-t border-red-900/30 pt-4 mt-auto">
        <p className="font-semibold text-white">{testimonial.name}</p>
        <p className="text-sm text-gray-400">{testimonial.location}</p>
      </div>
    </motion.div>
  );
}
