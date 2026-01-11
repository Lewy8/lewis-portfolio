export default function robots() {
    const baseUrl = 'https://lewis-portfolio-phi.vercel.app/';
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
