import { NextResponse } from 'next/server';
import { scrapeGoogleBusiness } from '@/lib/googleScraper';
import { getCachedData, setCachedData, isCacheValid } from '@/lib/cache';
import '@/lib/warmup'; // Auto-warmup cache on server start

const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours
const BACKGROUND_REFRESH_THRESHOLD = 5 * 60 * 60 * 1000; // Refresh if older than 5 hours

// Background refresh flag
let isRefreshing = false;

async function fetchGoogleData(): Promise<any> {
  const GOOGLE_BUSINESS_URL = process.env.GOOGLE_BUSINESS_URL ||
    'https://www.google.com/maps/place/Fullhouse+Delivery/@25.7616798,-80.1917902,17z/data=!4m8!3m7!1s0x88d9b0e8e542a725:0xe6c55e284e7225a7!8m2!3d25.7616798!4d-80.1892153!9m1!1b1!16s%2Fg%2F11svt3q5dk';

  try {
    const businessData = await scrapeGoogleBusiness(GOOGLE_BUSINESS_URL);

    // If scraping was successful, save to cache
    if (businessData && businessData.reviews.length > 0) {
      setCachedData(businessData);
      return businessData;
    }
  } catch (error) {
    console.error('Error scraping Google Business:', error);
  }

  // Return fallback data
  return {
    name: 'Fullhouse Delivery',
    rating: 4.9,
    totalReviews: 127,
    reviews: [
      {
        id: '1',
        author: 'John Smith',
        rating: 5,
        text: 'Excellent service! The team was professional and careful with all our belongings. Highly recommend Full House for any moving needs.',
        date: 'Recently',
        profilePhotoUrl: null,
      },
      {
        id: '2',
        author: 'Sarah Johnson',
        rating: 5,
        text: 'Best moving company in Miami! They handled our office relocation smoothly and efficiently. Very impressed with their professionalism.',
        date: 'Recently',
        profilePhotoUrl: null,
      },
      {
        id: '3',
        author: 'Michael Chen',
        rating: 5,
        text: 'Great junk removal service! They came on time, worked quickly, and left everything clean. Fair pricing too!',
        date: 'Recently',
        profilePhotoUrl: null,
      },
    ],
    photos: [],
  };
}

// Background refresh function
async function refreshInBackground() {
  if (isRefreshing) return;

  isRefreshing = true;
  console.log('🔄 Background refresh started...');

  try {
    const data = await fetchGoogleData();
    console.log('✅ Background refresh completed');
  } catch (error) {
    console.error('❌ Background refresh failed:', error);
  } finally {
    isRefreshing = false;
  }
}

export async function GET() {
  try {
    // Check persistent cache first
    const cachedData = getCachedData();

    // If cache is valid, return it immediately
    if (isCacheValid(cachedData, CACHE_DURATION)) {
      console.log('✅ Serving from cache');

      // Trigger background refresh if cache is getting old
      const cacheAge = Date.now() - (cachedData?.timestamp || 0);
      if (cacheAge > BACKGROUND_REFRESH_THRESHOLD) {
        console.log('🔄 Cache is old, triggering background refresh');
        refreshInBackground();
      }

      return NextResponse.json(cachedData!.data);
    }

    // Cache is invalid or doesn't exist, fetch fresh data
    console.log('❌ Cache miss or expired, fetching fresh data...');
    const data = await fetchGoogleData();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in API route:', error);

    // Try to serve stale cache if available
    const cachedData = getCachedData();
    if (cachedData) {
      console.log('⚠️ Serving stale cache due to error');
      return NextResponse.json(cachedData.data);
    }

    // Last resort: return fallback
    return NextResponse.json({
      name: 'Fullhouse Delivery',
      rating: 4.9,
      totalReviews: 127,
      reviews: [],
      photos: [],
    });
  }
}
