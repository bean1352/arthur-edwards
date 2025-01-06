import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `https://${domain}/sitemap.xml`,
    }
}