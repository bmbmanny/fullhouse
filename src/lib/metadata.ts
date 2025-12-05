import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description = SITE_CONFIG.description,
  keywords = [],
  ogImage = '/og-image.jpg',
  canonical,
  noindex = false,
}: GenerateMetadataProps = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${SITE_CONFIG.shortName}`
    : SITE_CONFIG.name;

  const metaUrl = canonical
    ? `${SITE_CONFIG.url}${canonical}`
    : SITE_CONFIG.url;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: metaTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: [{ name: SITE_CONFIG.name }],
    openGraph: {
      title: metaTitle,
      description,
      url: metaUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: metaUrl,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
