export const siteConfig = {
  title: 'Scripting Pixels',
  description: 'A blog about web development and design.',
  siteUrl: 'https://www.scriptingpixels.com',
  siteGithub: 'https://github.com/leanug/scriptingpixels',
  themeLocalStorageKey: 'scriptingpixels_theme',
  author: {
    name: 'Leandro Ubilla',
    website: 'https://www.leandroubilla.com',
    userName: 'leanug'
  },
  headerNavLinks: [
    { title: 'Blog', url: '/blog' },
    { title: 'Contact', url: '/contact' },
  ],
  navigation: [
    { title: 'Blog', url: '/blog' },
    { title: 'Contact', url: '/contact' },
    { title: 'Feedback', url: 'https://www.feedbackrealm.com/b/scriptingpixels' },
  ],
  socialLinks: {
    youtube: 'https://www.youtube.com/@scriptingpixels',
    instagram: 'https://www.instagram.com/scriptingpixels/',
    twitter: 'https://twitter.com/scriptpxls',
    github: 'https://github.com/Scripting-Pixels',
    /* dribbble: 'https://github.com/username', */
    /* website: 'https://www.mysite.com', */
    /* linkedin: 'https://www.linkedin.com/in/', */
  },
  metaTags: {
    keywords: ['web development', 'react', 'next.js', 'javascript', 'webflow', 'figma'],
    ogImage: 'https://www.srciptingpixels.com/og-image.png',
  },
};

export type SiteConfig = typeof siteConfig