import { GoogleBusinessProfile } from '@/types/google';

// This is a placeholder - you can manually add reviews here or fetch from API
export const googleBusinessData: GoogleBusinessProfile = {
  name: 'Full House Moving & Junk Removal',
  rating: 4.9,
  totalReviews: 127,
  reviews: [
    // Add your real reviews here manually, or we'll fetch via API
    // Example format:
    // {
    //   id: '1',
    //   author: 'John Smith',
    //   rating: 5,
    //   text: 'Excellent service! The team was professional and careful with all our belongings.',
    //   date: '2024-01-15',
    //   profilePhotoUrl: '/path/to/photo.jpg',
    // },
  ],
  photos: [
    // Add your Google Business photos here manually, or we'll fetch via API
    // Example format:
    // {
    //   id: '1',
    //   url: '/path/to/photo.jpg',
    //   alt: 'Moving truck',
    //   width: 800,
    //   height: 600,
    // },
  ],
};
