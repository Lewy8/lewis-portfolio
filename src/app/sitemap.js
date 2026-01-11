export default function sitemap() {
    const baseUrl = 'https://lewis-portfolio-phi.vercel.app/';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
