/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'manukahealth.shop',
      'us-i.makeupstore.com',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
    unoptimized: true,
  },
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

export default nextConfig
