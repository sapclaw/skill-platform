import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/skill-platform',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
