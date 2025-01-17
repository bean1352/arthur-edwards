import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  const {
    NEXT_PUBLIC_COMPANY_NAME,
    NEXT_PUBLIC_COMPANY_DESCRIPTION,
  } = process.env;

  return {
    name: NEXT_PUBLIC_COMPANY_NAME,
    short_name: NEXT_PUBLIC_COMPANY_NAME,
    description: NEXT_PUBLIC_COMPANY_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    orientation: 'portrait',
    lang: 'en-US',
    categories: ['business', 'recruitment', 'hr'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
