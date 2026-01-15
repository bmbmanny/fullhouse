export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  profilePhotoUrl?: string;
}

export interface GooglePhoto {
  id: string;
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface GoogleBusinessProfile {
  name: string;
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
  photos: GooglePhoto[];
}
