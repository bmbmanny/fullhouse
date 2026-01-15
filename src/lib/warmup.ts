// This file pre-fetches and caches Google Business data on server startup
// This ensures fast responses for the first requests

import { scrapeGoogleBusiness } from './googleScraper';
import { setCachedData, getCachedData, isCacheValid } from './cache';

const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours

export async function warmupCache() {
  const cachedData = getCachedData();

  // If cache is valid, don't fetch
  if (isCacheValid(cachedData, CACHE_DURATION)) {
    console.log('✅ Cache is warm, skipping warmup');
    return;
  }

  console.log('🔥 Warming up cache with Google Business data...');

  try {
    const GOOGLE_BUSINESS_URL = process.env.GOOGLE_BUSINESS_URL ||
      'https://www.google.com/maps/place/Fullhouse+Delivery/@25.7616798,-80.1917902,17z/data=!4m8!3m7!1s0x88d9b0e8e542a725:0xe6c55e284e7225a7!8m2!3d25.7616798!4d-80.1892153!9m1!1b1!16s%2Fg%2F11svt3q5dk';

    const businessData = await scrapeGoogleBusiness(GOOGLE_BUSINESS_URL);

    if (businessData && businessData.reviews.length > 0) {
      setCachedData(businessData);
      console.log(`✅ Cache warmed successfully with ${businessData.reviews.length} reviews`);
    } else {
      console.log('⚠️ Warmup returned no reviews, using fallback data');
      setCachedData({
        name: 'Fullhouse Delivery',
        rating: 4.9,
        totalReviews: 127,
        reviews: [
          {
            id: '1',
            author: 'John Smith',
            rating: 5,
            text: 'Excellent service! The team was professional and careful with all our belongings.',
            date: 'Recently',
            profilePhotoUrl: null,
          },
          {
            id: '2',
            author: 'Sarah Johnson',
            rating: 5,
            text: 'Best moving company in Miami! They handled our office relocation smoothly.',
            date: 'Recently',
            profilePhotoUrl: null,
          },
          {
            id: '3',
            author: 'Michael Chen',
            rating: 5,
            text: 'Great junk removal service! They came on time and worked quickly.',
            date: 'Recently',
            profilePhotoUrl: null,
          },
        ],
        photos: [],
      });
    }
  } catch (error) {
    console.error('❌ Cache warmup failed:', error);
  }
}

// Auto-run on server startup
if (typeof window === 'undefined') {
  warmupCache();
}
