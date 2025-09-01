export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Job Board',
  description: 'Find your next opportunity with our curated job listings',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/yourusername/job-posting-template',
    twitter: 'https://twitter.com/yourusername',
  },
  creator: 'Your Name',
};