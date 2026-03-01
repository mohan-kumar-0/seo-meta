/**
 * seo-meta
 * Helper functions for SEO optimization.
 */

/**
 * Generates person schema for JSON-LD.
 * @param {Object} options 
 */
export function generatePersonSchema(options) {
    const { name, jobTitle, url, sameAs = [], alumniOf = '' } = options;
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": name,
        "jobTitle": jobTitle,
        "url": url,
        "sameAs": sameAs,
        "alumniOf": alumniOf
    };
}

/**
 * Generates creative work schema for JSON-LD projects.
 * @param {Object} options 
 */
export function generateProjectSchema(options) {
    const { name, description, url, image, keywords = [] } = options;
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": name,
        "description": description,
        "url": url,
        "image": image,
        "keywords": keywords.join(', ')
    };
}

/**
 * Helper to generate standard meta tags.
 */
export function getMetaTags(options) {
    const { title, description, image, url, twitterHandle = '' } = options;
    return [
        { name: 'title', content: title },
        { name: 'description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: twitterHandle },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image }
    ];
}
