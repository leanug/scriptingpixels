// config.ts
export const siteConfig = {
  title: 'Scripting Pixels',
  description: 'A blog about web development and design.',
  siteUrl: 'https://www.scriptingpixels.com',
  siteGithub: 'https://github.com/leanug',
  author: {
    name: 'Leandro Ubilla',
  },
  navigation: [
    { title: 'Home', url: '/' },
    { title: 'Tags', url: '/tags' },
    { title: 'Blog', url: '/blog' },
    { title: 'Contact', url: '/contact' },
  ],
  socialLinks: {
    twitter: 'https://twitter.com/leanug',
    github: 'https://github.com/leanug',
    dribbble: 'https://github.com/leanug',
    website: 'https://www.leandroubilla.com',
    /* linkedin: 'https://www.linkedin.com/in/', */
  },
  metaTags: {
    keywords: ['web development', 'react', 'next.js', 'javascript', 'webflow', 'figma'],
    ogImage: 'https://www.srciptingpixels.com/og-image.png',
  },
};

export type SiteConfig = typeof siteConfig