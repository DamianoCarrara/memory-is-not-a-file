/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
    domains: ['cdn.sanity.io'],
  },
  i18n,
  async redirects() {
    return [
      {
        source: '/categories/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
