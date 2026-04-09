import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  outputFileTracingRoot: '/opt/skill-platform',
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
