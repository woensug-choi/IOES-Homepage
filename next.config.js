/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
  },
  i18n: {
    locales: ['ko', 'en', 'jp'],
    defaultLocale: 'ko',
    localeDetection: false,
  },
  // trailingSlash: true,
};

module.exports = nextConfig;
