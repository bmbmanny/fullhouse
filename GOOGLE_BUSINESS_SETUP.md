# Google Business Profile Integration Setup

This guide will help you integrate your Google Business Profile reviews and photos into your website.

## Quick Setup (5-10 minutes)

### Option 1: Using Outscraper API (Recommended - Simple & Free)

1. **Sign up for Outscraper** (Free tier available)
   - Go to https://outscraper.com/
   - Sign up for a free account
   - You get 1,000 free requests per month

2. **Get your API Key**
   - Go to https://app.outscraper.com/api-settings
   - Copy your API key

3. **Get your Place ID**
   - Your Google Business URL: `google.com/maps/place/Fullhouse+Delivery/data=!4m2!3m1!1s0x0:0xa725724e285ec5e6`
   - The Place ID appears to be in the URL, or you can extract it using Outscraper's tools
   - Alternative: Use Google's Place ID Finder: https://developers.google.com/maps/documentation/places/web-service/place-id

4. **Add to your environment variables** in `.env.local`:
   ```
   OUTSCRAPER_API_KEY=your_api_key_here
   GOOGLE_PLACE_ID=your_place_id_here
   ```

5. **Activate the new homepage**
   - Rename `src/app/page.tsx` to `src/app/page-old.tsx` (backup)
   - Rename `src/app/page-with-google.tsx` to `src/app/page.tsx`

6. **Test it**
   - Run `npm run dev`
   - Visit http://localhost:3000
   - Your reviews and photos should appear!

### Option 2: Manual Entry (Quickest - 5 minutes)

If you don't want to use an API, you can manually add your best reviews:

1. **Edit** `/src/data/googleReviews.ts`

2. **Add your reviews** like this:
   ```typescript
   reviews: [
     {
       id: '1',
       author: 'John Smith',
       rating: 5,
       text: 'Excellent service! The team was professional...',
       date: '2024-01-15',
       profilePhotoUrl: null, // or add a URL if you have it
     },
     // Add more reviews...
   ],
   ```

3. **Add your photos**:
   ```typescript
   photos: [
     {
       id: '1',
       url: '/images/work-photo-1.jpg',  // Add photos to /public/images/
       alt: 'Full House moving truck',
       width: 800,
       height: 600,
     },
     // Add more photos...
   ],
   ```

4. **Activate the new homepage** (same as Option 1, step 5)

## Finding Your Place ID

### Method 1: From Your Google Business Profile URL
Your URL: `google.com/maps/place/Fullhouse+Delivery/data=!4m2!3m1!1s0x0:0xa725724e285ec5e6`

The hex value after `1s` might be related to your place ID: `0xa725724e285ec5e6`

### Method 2: Using Outscraper
1. Go to https://app.outscraper.com/
2. Use their "Google Maps Scraper" tool
3. Search for "Fullhouse Delivery" with your location
4. It will show you the Place ID

### Method 3: Google Place ID Finder
1. Go to https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
2. Search for your business
3. Copy the Place ID

## Customization

### Update Business Info
Edit `/src/data/googleReviews.ts`:
```typescript
export const googleBusinessData: GoogleBusinessProfile = {
  name: 'Full House Moving & Junk Removal',
  rating: 4.9,  // Your actual rating
  totalReviews: 127,  // Your actual review count
  // ...
};
```

### Adjust Number of Reviews/Photos Shown
Edit `/src/app/api/google-business/route.ts`:
```typescript
reviews: (place.reviews_data || []).slice(0, 12)  // Change 12 to show more/less
photos: (place.photos_data || []).slice(0, 16)   // Change 16 to show more/less
```

## Troubleshooting

### Reviews not showing up?
1. Check that your `.env.local` file has the correct API key and Place ID
2. Check the browser console for errors
3. Try running: `npm run build` to see if there are any build errors

### API Key issues?
1. Make sure you copied the full API key from Outscraper
2. Check that your free tier hasn't exceeded limits
3. Restart your dev server: `npm run dev`

### Want to test without real data?
1. Keep using `/src/app/page.tsx` (current version)
2. Add sample reviews manually to `/src/data/googleReviews.ts`
3. Import and use them in your current page

## Next Steps

Once you have this working, you can:
- Set up automatic refresh (fetch new reviews daily/weekly)
- Add a "Leave a Review" CTA button
- Display review highlights in the hero section
- Add structured data for SEO benefits

Need help? Check the code comments or reach out!
