import type { Metadata } from 'next';

const BASE_URL = 'https://das-auto.co.za';
const SITE_NAME = 'Dynamic Automotive Solutions';
const DEFAULT_OG_IMAGE = '/images/DAS  PROFILE-2025-images-1.jpg';

interface PageMetadataOptions {
  title: string;
  description: string;
  ogImage?: string;
  path: string;
}

export function generatePageMetadata({
  title,
  description,
  ogImage,
  path,
}: PageMetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return {
    title: `${title} | DAS`,
    description,
    openGraph: {
      title: `${title} | DAS`,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: fullImageUrl,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | DAS`,
      description,
      images: [fullImageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}
