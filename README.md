# seo-meta

Professional utility for generating SEO metadata, OpenGraph tags, Twitter cards, and JSON-LD structured data schemas for web applications and developer portfolios.

[![npm version](https://img.shields.io/npm/v/seo-meta.svg)](https://www.npmjs.com/package/seo-meta)
[![license](https://img.shields.io/npm/l/seo-meta.svg)](https://github.com/mohan-kumar-0/seo-meta/blob/main/LICENSE)

---

## Features

- **JSON-LD Person Schema** -- Generate Google-compliant Person structured data for portfolios and personal sites.
- **JSON-LD CreativeWork Schema** -- Generate structured data for projects, articles, and creative works.
- **Meta Tag Generation** -- Standardized OpenGraph and Twitter Card meta tags in one call.
- **Framework Agnostic** -- Works with React, Next.js, Vue, Svelte, or plain HTML.
- **Zero Dependencies** -- No external packages required.

---

## Installation

```bash
npm install seo-meta
```

---

## Usage

### Generating a Person Schema (JSON-LD)

Use this to add structured data about yourself on a portfolio or personal website. Google uses this to display rich results in search.

```javascript
import { generatePersonSchema } from 'seo-meta';

const schema = generatePersonSchema({
  name: 'John Doe',
  jobTitle: 'Full Stack Developer',
  url: 'https://johndoe.dev',
  sameAs: [
    'https://github.com/johndoe',
    'https://linkedin.com/in/johndoe',
    'https://twitter.com/johndoe'
  ],
  alumniOf: 'MIT'
});

console.log(JSON.stringify(schema, null, 2));

// Output:
// {
//   "@context": "https://schema.org",
//   "@type": "Person",
//   "name": "John Doe",
//   "jobTitle": "Full Stack Developer",
//   "url": "https://johndoe.dev",
//   "sameAs": [
//     "https://github.com/johndoe",
//     "https://linkedin.com/in/johndoe",
//     "https://twitter.com/johndoe"
//   ],
//   "alumniOf": "MIT"
// }
```

Inject into your HTML:

```html
<script type="application/ld+json">
  <!-- Paste the JSON output here -->
</script>
```

### Generating a Project Schema (JSON-LD)

Use this for individual projects, blog posts, or creative works.

```javascript
import { generateProjectSchema } from 'seo-meta';

const schema = generateProjectSchema({
  name: 'Weather Dashboard',
  description: 'A real-time weather monitoring application built with React and OpenWeather API.',
  url: 'https://johndoe.dev/projects/weather-dashboard',
  image: 'https://johndoe.dev/images/weather-dashboard.png',
  keywords: ['react', 'weather', 'api', 'dashboard', 'real-time']
});

console.log(JSON.stringify(schema, null, 2));

// Output:
// {
//   "@context": "https://schema.org",
//   "@type": "CreativeWork",
//   "name": "Weather Dashboard",
//   "description": "A real-time weather monitoring application...",
//   "url": "https://johndoe.dev/projects/weather-dashboard",
//   "image": "https://johndoe.dev/images/weather-dashboard.png",
//   "keywords": "react, weather, api, dashboard, real-time"
// }
```

### Generating Meta Tags

Generate a complete set of OpenGraph and Twitter Card meta tags for any page.

```javascript
import { getMetaTags } from 'seo-meta';

const tags = getMetaTags({
  title: 'John Doe | Full Stack Developer Portfolio',
  description: 'Building exceptional digital experiences with React, Node.js, and cloud technologies.',
  image: 'https://johndoe.dev/og-image.jpg',
  url: 'https://johndoe.dev',
  twitterHandle: '@johndoe'
});

console.log(tags);

// Output:
// [
//   { name: 'title', content: 'John Doe | Full Stack Developer Portfolio' },
//   { name: 'description', content: 'Building exceptional digital experiences...' },
//   { property: 'og:type', content: 'website' },
//   { property: 'og:url', content: 'https://johndoe.dev' },
//   { property: 'og:title', content: 'John Doe | Full Stack Developer Portfolio' },
//   { property: 'og:description', content: 'Building exceptional digital experiences...' },
//   { property: 'og:image', content: 'https://johndoe.dev/og-image.jpg' },
//   { name: 'twitter:card', content: 'summary_large_image' },
//   { name: 'twitter:site', content: '@johndoe' },
//   { name: 'twitter:title', content: 'John Doe | Full Stack Developer Portfolio' },
//   { name: 'twitter:description', content: 'Building exceptional digital experiences...' },
//   { name: 'twitter:image', content: 'https://johndoe.dev/og-image.jpg' }
// ]
```

### Using with React (Helmet or Next.js)

```jsx
import { Helmet } from 'react-helmet';
import { getMetaTags } from 'seo-meta';

function SEOHead() {
  const tags = getMetaTags({
    title: 'My Portfolio',
    description: 'A showcase of my best work.',
    image: '/og.jpg',
    url: 'https://mysite.com'
  });

  return (
    <Helmet>
      <title>{tags[0].content}</title>
      {tags.map((tag, i) => (
        tag.property
          ? <meta key={i} property={tag.property} content={tag.content} />
          : <meta key={i} name={tag.name} content={tag.content} />
      ))}
    </Helmet>
  );
}
```

### Using with Plain HTML

```javascript
import { getMetaTags } from 'seo-meta';

const tags = getMetaTags({ title: 'My Site', description: 'Welcome', image: '/og.jpg', url: '/' });

tags.forEach(tag => {
  const meta = document.createElement('meta');
  if (tag.property) meta.setAttribute('property', tag.property);
  if (tag.name) meta.setAttribute('name', tag.name);
  meta.setAttribute('content', tag.content);
  document.head.appendChild(meta);
});
```

---

## API Reference

| Function | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `generatePersonSchema(opts)` | `name, jobTitle, url, sameAs[], alumniOf` | `Object` | Creates a JSON-LD Person schema |
| `generateProjectSchema(opts)` | `name, description, url, image, keywords[]` | `Object` | Creates a JSON-LD CreativeWork schema |
| `getMetaTags(opts)` | `title, description, image, url, twitterHandle` | `Array<Object>` | Generates OpenGraph and Twitter meta tags |

---

## License

MIT -- see [LICENSE](https://github.com/mohan-kumar-0/seo-meta/blob/main/LICENSE) for details.
