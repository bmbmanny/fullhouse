'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  showFeatures?: boolean;
}

const iconMap: Record<string, React.ReactElement> = {
  home: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  building: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  trash: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  ),
  box: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
};

export default function ServiceCard({ service, showFeatures = false }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px rgba(220, 38, 38, 0.25)',
        borderColor: 'rgba(220, 38, 38, 0.6)',
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg shadow-red-900/20 border border-red-900/30 p-7 transition-all duration-300 h-full flex flex-col group"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="text-red-500 mb-5 flex items-center justify-center"
      >
        {iconMap[service.icon] || iconMap.home}
      </motion.div>

      <h3 className="text-xl font-bold text-white mb-3 text-center">
        {service.title}
      </h3>

      <p className="text-gray-400 mb-5 leading-relaxed text-center flex-grow">
        {service.description}
      </p>

      {showFeatures && service.features && (
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-300">
              <svg
                className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`/services/${service.slug}`}
        className="text-red-500 font-semibold hover:text-red-400 inline-flex items-center justify-center transition-all group"
      >
        Learn More
        <svg
          className="w-5 h-5 ml-1.5 transition-transform group-hover:translate-x-1 duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
